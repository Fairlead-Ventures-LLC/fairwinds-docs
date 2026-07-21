---
layout: base-en.html
title: Navigation Modes
---

# Navigation Modes

<p class="lead">Guided mode teaches you cel nav. Expert mode puts you at the chart table.</p>

← Back to [Celestial Navigation](/en/guides/celestial-navigation/)

---

## Overview

FairWinds offers two navigation modes that control how much of the sight reduction workflow the game handles for you. Both modes use the same sky engine, the same sextant simulation, and record the same enriched sight data — the difference is whether FairWinds computes the answers or you do.

You can switch modes at any time from the **Settings** panel in the Sky Tool, or tap the **Guided / Expert** badge in the top bar. Your choice is saved between sessions.

---

## Side-by-Side Comparison

| Feature | Guided | Expert |
|---|---|---|
| **Sextant & sight capture** | Full sextant simulation | Full sextant simulation |
| **Sight data recorded** | Hs, UTC, AP, environmental params | Same |
| **Sky time controls** | Scrub forward/back freely | Locked to real time |
| **Assumed Position (AP)** | Auto — boat's true GPS | Manual — your choice from the dropdown |
| **GPS position** | Visible | Hidden |
| **Sight → LOP reduction** | FairWinds computes Hc, Zn, intercept | You reduce externally |
| **Sight reduction worksheet** | Full step-by-step with tips | Not shown |
| **Star fix / noon / running fix** | Compute and plot buttons available | Not available |
| **Copy sight data** | — | One tap copies Hs, UTC, AP for external tools |
| **Solar times & daily schedule** | Available | Available |
| **Best Bodies panel** | Available | Available |
| **Manual fix / DR entry** | Available | Available |
| **Saved fixes & GPX export** | All fix types | All fix types |

---

## Guided Mode

Guided is the default. FairWinds walks you through each step of celestial navigation and does the reduction math for you:

1. **Take a sight** — use the sextant to measure a body's altitude (Hs).
2. **Reduce the sight** — tap the LOP button. FairWinds computes Hc, Zn, and the intercept and saves the LOP.
3. **Cross LOPs** — select 2–3 LOPs and tap Compute Fix.
4. **Save to log** — the fix is recorded and plotted on the chart.

Every sight card shows the full input data in degrees-minutes-seconds — Hs, UTC, DR position, environmental parameters — so you can follow along on paper or in an external tool even while FairWinds does the math. The sight reduction worksheet shows each calculation step with tooltips explaining the celestial navigation logic behind it.

---

## Expert Mode

Expert mode is for navigators who want to practice the full workflow — or who are training for a real offshore passage. FairWinds acts as your instrument suite: it measures, records, and displays raw data. You do the rest.

### The core discipline: AP management

In Expert mode your true GPS position is never used for anything. Instead, every calculation — solar times, daily schedule, sight reductions — is based on the position you select in the **AP Selection** dropdown at the top of the nav drawer.

This means:
- Your AP is only as good as your last confirmed fix or DR
- A stale or inaccurate AP will bias your LOPs
- The error compounds: each fix session's quality depends on how well you maintained DR since the last one

This is the real challenge of offshore celestial navigation, and it is what Expert mode is designed to replicate.

### What FairWinds provides

- Hs in degrees, minutes, seconds of arc
- UTC timestamp to the second
- AP position at the time of the sight (the position you selected — never GPS)
- Environmental parameters (height of eye, index correction, temperature, pressure)
- Solar times table and daily work schedule (based on your AP)
- Best Bodies panel for target selection
- One-tap **Copy** button on each sight card — copies body name, Hs, UTC, and AP formatted for pasting into any external reduction tool

### What you do externally

- Apply dip, refraction, semi-diameter, and parallax corrections to get Ho
- Look up GHA and declination from the Nautical Almanac
- Choose an assumed position and compute Hc and Zn (HO-249, HO-229, or a calculator)
- Calculate the intercept (Ho − Hc) and plot LOPs on a plotting sheet
- Cross LOPs to determine your fix
- Advance LOPs for running fixes using your DR track

### Entering your result

Use the **Enter Fix** or **Set DR** form in the Saved tab:

- **Fix type** — Star Fix, Noon Fix, Longitude Fix, Running Fix, or Other
- **Latitude / Longitude** — your computed position
- **Notes** — optional (e.g. "3-star, Vega/Arcturus/Spica, 42° spread")

Your fix becomes the new reference for subsequent solar times and sight reductions. The AP dropdown updates automatically to reflect it.

### The DR discipline

A good navigator never lets the DR go stale. Log a new DR mark whenever your course or speed changes significantly — it costs thirty seconds and keeps your next sight session's AP accurate. If you miss fix sessions during overcast weather, frequent DR marks are the only thing keeping your LOPs reliable when the sky clears.

---

## Switching Modes

Tap the **Guided / Expert** badge in the top bar of the Sky Tool, or open **Settings** (gear icon, bottom-left) and use the **Mode** toggle.

- Switching to Expert locks sky time to real time and hides all computed results.
- Switching back to Guided restores time scrubbing and computed reductions.
- Your mode is saved between sessions.
