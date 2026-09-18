---
layout: base-en.html
title: The Sky Tool
---

# The Sky Tool

<p class="lead">Your in-game sextant for taking celestial fixes.</p>

← Back to [Celestial Navigation](/en/guides/celestial-navigation/)

---

## Overview

The Sky Tool is your on-board sextant and navigation station. It renders a real-time star field powered by the Stellarium engine and lets you take sights of the sun, moon, planets, and 57 navigational stars.

---

## Opening the Sky Tool

From any race, tap the **Sky** button in the bottom navigation bar. The Sky Tool opens full-screen with the star field centered on your current heading. Your boat's position and the current UTC time are shown in the top bar.

---

## Taking a Sight

1. **Find a body** — pan the sky or use the **Best Bodies** panel to see which stars, planets, or the sun are well-placed right now.
2. **Enter sextant mode** — tap the **Sextant** button in the top right to open the sight-taking view.
3. **Acquire** — center the reticle on your target and lock it.
4. **Align** — use the drum to bring the body down to the horizon. The default aim is the **center** of the object. For the sun or moon you can switch that sight to **Lower limb** and rest the bottom of the disc on the horizon instead. Stars and planets are always center.
5. **Mark and save** — confirm the sight. It records Hs (in DMS), UTC to the second, and your GPS position (Guided) or AP (Expert). A lower-limb sight stores Hs as the limb reading. Guided adds the printed semi-diameter (+SD) so Ho is the body’s center — the same frame as FairWinds Hc. Expert leaves Ho unset until you apply **Correct Hs** (prefilled with that same SD; leave dip, refraction, and parallax at 0 to match the engine).

---

## Sight and Fix Quality Ratings

After every interaction you get a quality rating. There are two:

**Sight quality** is shown immediately after you mark a sight. It measures how accurately you brought the body down to the horizon line — the alignment error in arcminutes. One arcminute of error equals roughly one nautical mile of position error in your LOP.

**Fix quality** is shown when you cross two or three LOPs to compute a fix. It measures the crossing angle between the LOPs — a shallower crossing stretches the uncertainty ellipse and makes the fix less reliable.

| Rating | Sight (alignment error) | Fix (LOP crossing angle) |
|---|---|---|
| Excellent | < 2 arcmin | ≥ 70° |
| Good | 2 – 4.9 arcmin | 40° – 69° |
| Fair | 5 – 14.9 arcmin | 20° – 39° |
| Poor | ≥ 15 arcmin | < 20° |

For the best fix quality, choose bodies whose azimuths are 60–120° apart. Two bodies at right angles give a near-ideal 90° crossing; three bodies spread ~120° apart form a tight triangle fix.

> **Why doesn't an Excellent fix show my exact position?** The FairWinds drum reads to 0.1 arcminutes — matching a real vernier micrometer sextant. A perfect alignment scores 0.0', and an Excellent rating requires less than 2'. In Guided mode your GPS position is used as the assumed position, so the only error in the fix comes from your sight alignment. An Excellent sight with a Good or Excellent crossing angle will typically land within **1–2 nautical miles** of true position. That's not a FairWinds limitation — in real life, a 3-body star fix with a quality sextant and sharp technique producing a triangle under 1 NM is considered exceptional. Elite offshore navigators shooting twilight stars would be thrilled with that result. In No GPS / Expert mode your DR accumulates error on top, so a stale DR will shift the fix further. If your fix is off by more than a few miles, check your azimuth spread and make sure your DR is recent.

---

## Navigation Modes

FairWinds offers two modes that control how much of the math the game does for you. Switch anytime from the **Guided / Expert** badge in the top bar, or from **Settings**.

| | Guided | Expert |
|---|---|---|
| **Who does the math** | FairWinds computes Hc, Zn, intercept, LOPs, and fixes | You reduce externally and enter the fix manually |
| **Assumed position** | Boat GPS | Your AP / DR choice (GPS hidden) |
| **Sky time** | Scrub freely | Locked to real time |
| **Sextant mag limit** | Yes — dimmer stars are blocked | Same |
| **Instrument precision & index error** | Ignored | Live — see below |
| **Altitude corrections (Hs→Ho)** | FairWinds applies them | You enter them on Correct Hs (IC + SD; leave dip / refraction / parallax at 0) |
| **Sight reduction UI** | Worksheets, Compute Fix, plot | Copy sight data; reduce externally |

### Guided — FairWinds does the math

In Guided mode the sextant still teaches acquire / align / mark, but the instrument catalogue’s **precision** and **drift** do not affect the reading. FairWinds applies the altitude corrections and computes Hc, Zn, intercept, LOPs, and fixes for you. Pick any sextant for flavor and star mag limit; the fix quality is driven by your alignment and LOP geometry.

### Expert — live instrument + chart-table workflow

In Expert mode FairWinds acts as your instrument suite: it records raw data; you apply corrections and reduce the sight.

**Choose a sextant** (picker in the sky UI). Mag limit always applies. In Expert, two more stats matter:

- **Precision** — marked Hs is quantized to that instrument’s least count
- **Drift** — creates a persisted **index error (IE)** that wanders over time (′/week). Instruments that “hold” (e.g. FairWinds default, C. Plath) stay at IE = 0′; others (Davis, Mark II, Astra) seed and drift

#### Expert setup

1. Switch the Sky Tool to **Expert**. Pick your sextant.
2. Set **AP** (last fix or DR). GPS stays hidden.
3. **Check IE** — coincide the two images, **Mark!**, **Save to sextant**. That stores **IC = −IE** as Last IC for that instrument. Skip if this sextant already holds calibration. You can also type Last IC on the picker row.
4. Take the sight: Acquire → bring the body to the horizon (center, or **Lower limb** for sun/moon) → **Mark!** → **Save**. Hs is the raw drum reading (hidden IE + alignment, quantized).
5. **Correct Hs:** IC is prefilled from Last IC. Add **+SD** only if it was lower limb. Leave dip, refraction, and parallax at **0**. Apply → that writes **Ho** (and updates Last IC).
6. Reduce outside FairWinds: almanac GHA/Dec → Hc and Zn from your AP → intercept **Ho − Hc** → plot LOPs → fix.
7. **Enter Fix** / **Set DR** with that position. That becomes the AP for the next sights.

Copy the sight card (body, Hs/Ho, UTC, AP) if you are reducing in another tool. Re-check IE after a long gap or when you switch to a drifting sextant. If Last IC is wrong or unset, LOPs shift by roughly the residual IE in arcminutes (≈ NM).

Height of eye is stamped at **3 m**; that does not turn dip on. Leave dip at 0 to match engine Hc.

[Navigation Modes — full comparison →](/en/guides/navigation-modes/)

---

## Workbook

Tap **Workbook** to open the **Cel Nav Workbook** drawer:

- **Solar Times** — Sunrise, Sunset, and Mer. Pass. for your position reference / AP
- **Daily Schedule** — checklist of observation windows (optional steps labeled *optional*; never blocks play)
- Tabs: **Sun** (sun sights + Sun Worksheet), **Stars** (star sights, Saved LOPs, Compute Fix), **Fixes** (Enter Fix / Enter DR)

Sun sights get badges when they fall in special windows: **AM**, **PM**, **NOON**, **RISE**, **SET**. Selecting a sight drives the Sun Worksheet (noon lat/lon, sunrise/sunset longitude, or running fix).

[Daily Fixes — full guide →](/en/guides/days-work/)
