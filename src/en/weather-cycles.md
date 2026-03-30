---
layout: base-en.html
typora-root-url: ../..
title: Weather Data Cycles
---

# Weather Data Cycles

<p class="lead">A complete reference for how wind, current, and wave data is downloaded, processed, and activated in FairWinds — from NOAA's servers to your boat.</p>

---

## Overview

There are three data types, each with their own sources, download windows, and go-live logic. The timing flows through two systems: the **weather server** (downloads and stores files) and the **simulator/viewer** (decides which file is "active" based on UTC time).

| Data Type | Source | Frequency | Go-live Logic |
| :-------- | :----- | :-------- | :------------ |
| Wind (GFS) | NOAA NOMADS | Every 6 hours | UTC hour ÷ 6, with 6h delay |
| Ocean Currents | RTOFS, SFBOFS, SSCOFS, IBI, Copernicus | 1–2× daily | Varies by source |
| Waves (GFS-Wave) | NOAA NOMADS | Once daily (00Z) | Goes live at 06Z |

---

## 1. Wind (GFS)

### 1.1 Source & Format

- **Model:** NOAA GFS (Global Forecast System)
- **Resolution:** 0.25° (preferred) with 1.00° fallback
- **Format:** GRIB2, per-step files extracted to wind-only (U/V at 10m)
- **Coverage:** Up to 240 forecast hours (10 days)
- **Storage:** Supabase bucket `gribs/gfs/0p25/{YYYYMMDD}/{HH}/steps/`

### 1.2 NOAA Release Schedule

GFS runs 4 times per day. Files become available on NOMADS incrementally as steps finish computing:

| GFS Cycle | First file available | Full 240h available |
| :-------- | :------------------- | :------------------ |
| 00Z | ~03:31 UTC | ~04:33 UTC |
| 06Z | ~09:31 UTC | ~10:33 UTC |
| 12Z | ~15:31 UTC | ~16:33 UTC |
| 18Z | ~21:31 UTC | ~22:33 UTC |

### 1.3 Download Schedule (Cron)

The weather server polls NOMADS aggressively around each release window, with fallback sweeps:

| Window | Cron pattern | Purpose |
| :------ | :----------- | :------ |
| 3:40–4:20 UTC (for 00Z) | Every 2 min | Dense pickup as files appear |
| 9:40–10:20 UTC (for 06Z) | Every 2 min | Dense pickup |
| 15:40–16:20 UTC (for 12Z) | Every 2 min | Dense pickup |
| 21:40–22:20 UTC (for 18Z) | Every 2 min | Dense pickup |
| Every hour at :45 | Every hour | Catches 240h extended files (~4h 45m after cycle) |
| Every hour at :00 | Every hour | Additional extended coverage |
| Every hour at :30 | Every hour | Fallback for significantly delayed releases |

All runs call `run_getgribs_with_lock.sh` — the lock prevents concurrent downloads.

### 1.4 Simulator Go-Live Logic

The simulator checks for a GRIB update **at the top of each hour** (when `minutesUTC === 0 && secondsUTC === 0`). It uses the following UTC-time-based mapping to decide which cycle should be active:

| Current UTC Hour | Active GFS Cycle | Notes |
| :--------------- | :--------------- | :---- |
| 00:00–05:59 | Previous day's **18Z** | Download finished ~22:20, live 6h later |
| 06:00–11:59 | Today's **00Z** | Download finished ~04:20, live 6h later |
| 12:00–17:59 | Today's **06Z** | Download finished ~10:20, live 6h later |
| 18:00–23:59 | Today's **12Z** | Download finished ~16:20, live 6h later |

The simulator queries `grib_log` for the matching `(forecast_date, forecast_hour, resolution='0p25')` entry and downloads the T3 step files in parallel. If 0.25° is unavailable, it falls back to 1.00°.

### 1.5 Viewer (Frontend) Go-Live Logic

The viewer (`weatherStore.js → windService.checkForUpdates`) applies **identical** cutover logic. It compares the `loadedForecastHour` stored in `windState` against the expected forecast hour for the current UTC time. If they differ, it either:

1. **Promotes** the pre-loaded next-forecast reader (if already downloaded), or
2. **Downloads** the new cycle fresh from Supabase storage

The viewer also supports:
- **Extended forecast** (10-day, 1.00°, steps 036–240) — user-initiated, same cycle date/hour as the active base
- **Next-forecast preview** — loads the upcoming cycle 6h before it goes live, enables "bridging" mode where the reckoning line switches readers at the cutover time

### 1.6 Router Go-Live Logic

The router service polls `POST /api/grib/refresh` on its own schedule:

| Window | Frequency | Purpose |
| :------ | :-------- | :------ |
| 3:45–4:00 UTC (for each cycle) | Every 5 min | Fast pickup near release |
| 4:15–4:45 UTC | Every 15 min | Backoff for full 240h completion |
| Off-peak hours | Every 15 min | Keeps router current |

---

## 2. Ocean Currents

The simulator checks for current updates **every hour** (same `minutesUTC === 0` check), then `currentData.performScheduledUpdate()` evaluates each active region independently based on its `refreshHours` schedule.

### 2.1 RTOFS (Western Atlantic)

| Property | Value |
| :-------- | :---- |
| Cycle | Daily at 00Z |
| Available | ~09:30 UTC |
| Simulator goes live | 12Z (cutover at `utcHour >= 12`, switches to today's run) |
| Before 12Z | Uses previous day's 00Z run |
| Resolution | 0.083° |
| Coverage | 48 hours |
| Cron | `25 * * * *` — checked every hour at :25 |

### 2.2 SFBOFS (San Francisco Bay)

| Property | Value |
| :-------- | :---- |
| Cycles | 03Z and 15Z |
| S3 available | ~04:24 UTC (03Z run), ~16:23 UTC (15Z run) |
| Download checks | 04:45, 05:00, 05:15 (for 03Z); 16:45, 17:00, 17:15 (for 15Z) |
| Simulator goes live | **06Z** (03Z cycle) and **18Z** (15Z cycle) |
| Before 06Z | Previous day's 15Z run |
| 06Z–17Z | Today's 03Z run |
| 18Z–23Z | Today's 15Z run |
| Resolution | FVCOM mesh → 0.005° GRIB2, 49 timesteps |
| Processing time | ~30 seconds |

### 2.3 SSCOFS (Strait of Georgia)

| Property | Value |
| :-------- | :---- |
| Cycles | 03Z only (72h coverage makes 15Z redundant) |
| Available | ~06:50 UTC |
| Download checks | 07:05, 07:35, 08:05 |
| Simulator goes live | Once daily, effectively at 07–08Z |
| Resolution | 72h at 2h intervals, 6-bit packing, ~18 MB |
| Processing time | ~3 minutes |

### 2.4 IBI (English Channel / Copernicus)

| Property | Value |
| :-------- | :---- |
| Cycle | Daily at 00Z |
| Available | ~06–08 UTC (from Copernicus Marine) |
| Download checks | 06:29, 07:29, 08:29 |
| Simulator goes live | 12Z (same cutover logic as RTOFS) |
| Resolution | 0.027° |
| Coverage | 48 hours |

### 2.5 Copernicus Global (Agulhas, East Australia, Kuroshio, Tasman)

| Property | Value |
| :-------- | :---- |
| Cycle | Daily at 00Z |
| Available | ~06–08 UTC (from Copernicus Marine) |
| Download checks | 06:31, 07:31, 08:31 (Agulhas); :33, :35, :37 for others |
| Simulator goes live | 12Z |
| Resolution | Native 0.083° (no downsampling currently) |
| Coverage | 72h (Agulhas), standard (others) |

---

## 3. Waves (GFS-Wave)

| Property | Value |
| :-------- | :---- |
| Model | NOAA GFS-Wave |
| Cycle | Daily at 00Z only |
| NOMADS available | f000 ~03:31 UTC, f240 ~04:33 UTC |
| Download checks | 05:00 and 05:30 UTC |
| Simulator goes live | **06Z** |
| Before 06Z | Previous day's 00Z run |
| Resolution | 0.50° |
| Coverage | 240 hours (59 timesteps) |
| File size | ~2.8 MB |
| Storage | `grib_log` table, `model='gfswave'`, `resolution='0p50'` |

The simulator wave update fires at `shouldUpdateWaves(currentHour)` which returns true only when `currentHour === 6`. Outside 06Z, it still loads on first boot if no wave data is present.

---

## 4. Summary Timeline (Single UTC Day)

```
UTC    Event
----------------------------------------------------------------------
00:00  Wind: Sim switches → previous day 18Z cycle
00:00  Currents: Sim hourly check (all regions)
02:20  Cleanup: Old GRIB files purged
03:20  Cleanup: Old current files purged
03:31  NOAA: 00Z GFS f000 appears on NOMADS
03:40  Cron: Dense wind download window starts (every 2 min)
04:20  Cron: Dense wind download window ends
04:24  SFBOFS 03Z files land on S3
04:33  NOAA: 00Z GFS f240 (full 240h) typically available
04:45  Cron: SFBOFS 03Z first download attempt
05:00  Cron: SFBOFS 03Z second attempt; waves 00Z first attempt
05:00  Waves: 00Z run first download attempt
05:30  Waves: 00Z run second download attempt (retry)
06:00  Wind: Sim switches → today 00Z cycle  ← MAJOR CUTOVER
06:00  Waves: Sim goes live with today 00Z run
06:00  Currents: Sim switches SFBOFS → 03Z run
06:00  Currents: Sim switches RTOFS/IBI/Global → still yesterday (not 12Z yet)
06:50  SSCOFS 03Z data available on S3
07:05  Cron: SSCOFS download attempt 1
07:29  Cron: IBI + Copernicus Global download window (29/31/33/35/37 past)
08:05  Cron: SSCOFS last attempt
09:31  NOAA: 06Z GFS f000 on NOMADS
09:40  Cron: Dense wind download window starts
10:20  Cron: Dense wind download window ends
12:00  Wind: Sim switches → today 06Z cycle  ← MAJOR CUTOVER
12:00  Currents: Sim switches RTOFS/IBI/Copernicus → today 00Z run
15:31  NOAA: 12Z GFS f000 on NOMADS
15:40  Cron: Dense wind download window starts
16:20  Cron: Dense wind download window ends
16:23  SFBOFS 15Z files land on S3
16:45  Cron: SFBOFS 15Z first download attempt
17:15  Cron: SFBOFS 15Z last attempt
18:00  Wind: Sim switches → today 12Z cycle  ← MAJOR CUTOVER
18:00  Currents: Sim switches SFBOFS → 15Z run
21:31  NOAA: 18Z GFS f000 on NOMADS
21:40  Cron: Dense wind download window starts
22:20  Cron: Dense wind download window ends
24:00  (= 00:00 next day) Wind: Sim switches → today 18Z cycle
```

---

## 5. Discrepancies & Known Issues

### Wind: Sim vs Viewer Timing

Both the simulator and viewer use **identical** UTC-hour-based logic:
- 00–05Z → prev day 18Z
- 06–11Z → today 00Z
- 12–17Z → today 06Z
- 18–23Z → today 12Z

The simulator triggers at **exactly** 00/06/12/18Z (top of hour). The viewer triggers on a `checkForUpdates` call from the race update loop, so it may lag by up to one 1-minute simulation cycle.

### Forecasts.md Is Outdated

The public-facing `forecasts.md` page states that the simulator uses steps **f006–f012** only. This is no longer accurate. The simulator and viewer now load all available steps from `forecastStepMin` to `forecastStepMax` (typically f006–f048 for base, f036–f240 for extended).

### Wave Update Window

`shouldUpdateWaves()` hard-codes `currentHour === 6`. This means if the server restarts between 07Z and 23Z without wave data loaded, it will load whatever is available rather than waiting for 06Z. This is intentional fallback behavior.

### Current Cutover Comment Mismatch

`currentData.js` line 145 says SFBOFS goes "live at 06Z and 18Z" — this matches the code logic (`utcHour < 6` → prev day 15Z, `utcHour < 18` → today 03Z, else → today 15Z). ✅ Consistent.

---

## 6. Code References

| System | File | Key function |
| :----- | :--- | :----------- |
| Simulator wind cutover | `server.js:2487–2489` | `isGribUpdateTime` |
| Simulator current cutover | `currentData.js:142–165` | `getExpectedCurrentForecast()` |
| Simulator wave cutover | `waveData.js:41–65` | `getExpectedWaveForecast()` / `shouldUpdateWaves()` |
| Viewer wind cutover | `weatherStore.js:46–55` | `getLatestGribMetadata()` |
| Viewer GRIB loader | `weatherStore.js:1986–2054` | `loadMultiResolutionGrib()` |
| Weather download schedule | `setup_cron.sh` | `/etc/cron.d/weather-cron` |
