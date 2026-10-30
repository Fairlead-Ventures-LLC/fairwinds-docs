---
layout: base-en.html
typora-root-url: ../..
title: Weather Data Cycles
---

# Weather Data Cycles

<p class="lead">When wind, current, and wave data updates in FairWinds, and what to expect when it does. All times are UTC.</p>

---

## Overview

Wind, ocean currents, and waves each update on their own schedule. New data goes live at fixed UTC times, so you can plan around the changeovers.

| Data Type | Source | Update frequency | Goes live |
| :-------- | :----- | :--------------- | :-------- |
| Wind (GFS) | NOAA | Every 6 hours | 00Z, 06Z, 12Z, 18Z |
| Ocean Currents | NOAA, Copernicus | 1–2× daily, by region | See below |
| Waves (GFS-Wave) | NOAA | Once daily | 06Z |

---

## 1. Wind (GFS)

Wind comes from the NOAA Global Forecast System (GFS), which runs four times a day at 00Z, 06Z, 12Z and 18Z. Each forecast takes several hours to be published, so FairWinds switches to a new cycle about six hours after its nominal run time.

| Current UTC time | Active GFS cycle |
| :--------------- | :--------------- |
| 00:00–05:59 | Previous day's 18Z |
| 06:00–11:59 | Today's 00Z |
| 12:00–17:59 | Today's 06Z |
| 18:00–23:59 | Today's 12Z |

**What to expect:** at 00:00, 06:00, 12:00 and 18:00 UTC the wind forecast refreshes. Forecast winds can shift from one cycle to the next, so it's worth re-checking your plan after each changeover. The race viewer can also preview the upcoming cycle before it goes live.

- **Resolution:** 0.25° (1.00° where finer data isn't available)
- **Coverage:** up to 240 forecast hours (10 days)

---

## 2. Ocean Currents

Currents are regional, and each region updates on its own schedule.

| Region | Source | Goes live |
| :----- | :----- | :-------- |
| Western Atlantic | RTOFS | 12Z daily (previous day's run before then) |
| San Francisco Bay | SFBOFS | 06Z (03Z run) and 18Z (15Z run) |
| Strait of Georgia | SSCOFS | Once daily, around 07–08Z |
| English Channel | Copernicus IBI | 12Z daily |
| Agulhas, East Australia, Kuroshio, Tasman | Copernicus Global | 12Z daily |

---

## 3. Waves (GFS-Wave)

Waves update **once per day**. The new daily wave forecast goes live at **06:00 UTC**. Until then, the previous day's forecast is in use.

**What to expect:** at 06:00 UTC, wave heights and directions can shift noticeably, since wave forecasts often change meaningfully from one day to the next.

- **Resolution:** 0.50°
- **Coverage:** 240 hours

See [Waves and Boat Speed](/en/guides/waves/) for how waves affect your boat.

---

## 4. Summary Timeline (Single UTC Day)

```
UTC    Event
----------------------------------------------------------------------
00:00  Wind: Switches to the previous day's 18Z cycle
06:00  Wind: Switches to today's 00Z cycle
06:00  Waves: New daily run goes live
06:00  Currents: SF Bay switches to the 03Z run
12:00  Wind: Switches to today's 06Z cycle
12:00  Currents: Atlantic, English Channel and global regions switch to today's run
18:00  Wind: Switches to today's 12Z cycle
18:00  Currents: SF Bay switches to the 15Z run
```
