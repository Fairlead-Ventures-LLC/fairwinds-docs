---
layout: base-en.html
title: Navigation Modes
---

# Navigation Modes

<p class="lead">Guided mode teaches you cel nav. Expert mode lets you prove you know it.</p>

← Back to [Celestial Navigation](/en/guides/celestial-navigation/)

---

## Overview

FairWinds offers two navigation modes that control how much of the sight reduction workflow the game handles for you. Both modes use the same sky engine, the same sextant mini-game, and record the same enriched sight data — the difference is whether FairWinds computes the answers or you do.

You can switch modes at any time from the **Settings** panel in the bottom-left of the Sky Tool. Your choice is saved between sessions.

---

## Side-by-Side Comparison

| Feature | Guided | Expert |
|---|---|---|
| **Sextant & sight capture** | ✅ Full sextant mini-game | ✅ Full sextant mini-game |
| **Sight data recorded** | Hs (DMS), UTC (to the second), DR position, environmental params | Hs (DMS), UTC (to the second), DR position, environmental params |
| **Environmental defaults** | Shown on each sight (HoE 3 m, IC 0.0', 10 °C, 1010 mb) | Shown on each sight (HoE 3 m, IC 0.0', 10 °C, 1010 mb) |
| **Time controls** | Scrub forward/back freely | Locked to real time |
| **GPS position in solar table** | Available as a reference option | Hidden — use your DR |
| **Assist toggle** | Independently on/off | Forced off |
| **Sight → LOP reduction** | FairWinds computes Hc, Zn, intercept and saves LOP | Hidden — do your own sight reduction externally |
| **Star fix (cross LOPs)** | Compute Fix / Plot LOPs buttons available | Hidden |
| **Noon latitude** | Compute Lat/Lon button available | Hidden |
| **Sunrise/sunset longitude** | Auto-computed breakdown shown | Hidden |
| **Sun running fix** | Compute / Plot Running Fix buttons available | Hidden |
| **Solar times & daily schedule** | ✅ Fully available | ✅ Fully available |
| **Best Bodies panel** | ✅ Fully available | ✅ Fully available |
| **Manual fix entry** | Not available | ✅ Enter your computed fix: type, lat/lon, timestamp, notes |
| **Saved fixes & GPX export** | ✅ All fix types | ✅ All fix types including manual fixes |

---

## Guided Mode

Guided is the default. FairWinds walks you through each step of celestial navigation:

1. **Take a sight** — use the sextant to measure a body's altitude (Hs).
2. **Reduce the sight** — tap the LOP button and FairWinds computes Hc, Zn, and the intercept for you.
3. **Cross LOPs** — select 2–3 LOPs and tap Compute Fix to get your position.
4. **Save to log** — the fix is saved to your race log and plotted on the chart.

Every sight row shows the full input data (Hs in degrees-minutes-seconds, second-precision UTC, DR coordinates, environmental parameters) so you can follow along with your own calculations on paper or in an external tool, even while FairWinds does the math.

---

## Expert Mode

Expert mode is a practice range for real celestial navigation skills. FairWinds provides the raw observations and environmental data — you do everything else with your own tools.

### What FairWinds provides

- Hs in DMS (degrees, minutes, seconds of arc)
- UTC timestamp to the second
- DR position at the time of the sight
- Environmental parameters (height of eye, index correction, temperature, pressure)
- Solar times table and daily work schedule
- Best Bodies panel for target selection
- Almanac data (GHA, declination via the solar table)

### What you do externally

- Apply dip, refraction, semi-diameter, and parallax corrections to get Ho
- Look up GHA and declination (or use the in-game solar table)
- Choose an assumed position and compute Hc and Zn (sight reduction — HO-249, HO-229, or calculator)
- Calculate the intercept (Ho − Hc) and plot LOPs on a plotting sheet
- Cross LOPs to determine your fix
- Advance LOPs for running fixes using your DR track

### What you enter back into FairWinds

Use the **Enter Fix** form (in the Saved tab) to submit your result:

- **Fix type** — Star Fix, Noon Fix, Longitude Fix, Running Fix, or Other
- **Latitude / Longitude** — your computed position in decimal degrees
- **Notes** — optional free text (e.g. "3-star fix, Vega/Arcturus/Spica, 42° spread")

Your manual fix is saved to the race log alongside any guided fixes and appears in the Saved tab and GPX exports.

### What FairWinds does not build

Expert mode deliberately avoids duplicating external tools:

- No sight reduction tables or built-in calculator
- No plotting sheet or LOP drawing
- No intercept / Zn computation display
- No fix quality assessment for manual entries

The goal is to give you everything a real navigator would have at the chart table — the observations, the time, and the environmental conditions — and let your skills do the rest.

---

## Switching Modes

Open the **Settings** panel (gear icon, bottom-left of the Sky Tool) and use the **Nav** toggle to switch between Guided and Expert.

- Setting Expert forces **Assist off** (time scrubbing and GPS position are disabled).
- Switching back to Guided restores independent Assist control.
- Both settings persist to your browser between sessions.
