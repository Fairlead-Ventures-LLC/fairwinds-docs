---
layout: base-en.html
title: Navigation Modes
---

# Navigation Modes

<p class="lead">Guided mode teaches you cel nav. Expert mode puts you at the chart table.</p>

← Back to [Celestial Navigation](/en/guides/celestial-navigation/)

---

## Overview

FairWinds offers two navigation modes that control how much of the sight reduction workflow the game handles for you. Both modes use the same sky engine and record enriched sight data — the difference is whether FairWinds computes the answers or you do, and whether the chosen sextant’s precision and index-error drift affect Hs.

You can switch modes at any time from the **Settings** panel in the Sky Tool, or tap the **Guided / Expert** badge in the top bar. Your choice is saved between sessions.

---

## Side-by-Side Comparison

| Feature | Guided | Expert |
|---|---|---|
| **Sextant & sight capture** | Full sextant simulation | Full sextant simulation |
| **Instrument precision & IE drift** | Ignored | Live — Hs quantized; IE baked in until you apply IC |
| **Check IE** | — | Measure index error in sextant mode |
| **Altitude corrections (Hs→Ho)** | FairWinds applies them (refraction, +SD for lower limb) | Manual on Correct Hs (IC, refraction, +SD, parallax; dip stays 0) — see [Altitude corrections and refraction](#altitude-corrections-and-refraction) |
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
2. **Reduce the sight** — tap the LOP button. FairWinds removes refraction from Hs to get Ho, computes Hc, Zn, and the intercept, and saves the LOP.
3. **Cross LOPs** — select 2–3 LOPs and tap Compute Fix.
4. **Save to log** — the fix is recorded and plotted on the chart.

Every sight card shows the full input data in degrees-minutes-seconds — Hs, UTC, DR position, environmental parameters — so you can follow along on paper or in an external tool even while FairWinds does the math. The sight reduction worksheet shows each calculation step with tooltips explaining the celestial navigation logic behind it.

---

## Expert Mode

Expert mode is for navigators who want to practice the full workflow — or who are training for a real offshore passage. FairWinds acts as your instrument suite: it measures, records, and displays raw data. You do the rest.

### Expert setup

1. Switch the Sky Tool to **Expert**. Pick your sextant.
2. Set **AP** (last fix or DR). GPS stays hidden.
3. **Check IE** — coincide the two images, **Mark!**, **Save to sextant**. That stores **IC = −IE** as Last IC for that instrument. Skip if this sextant already holds calibration (FairWinds default, C. Plath stay at IE = 0′).
4. Take the sight: Acquire → bring the body to the horizon (center, or **Lower limb** for sun/moon) → **Mark!** → **Save**. Hs is the raw drum reading (hidden IE + alignment, quantized to the instrument).
5. **Correct Hs:** IC is prefilled from Last IC. **Refraction** is prefilled with the FairWinds value for that altitude (keep it, or enter your almanac figure). Add **+SD** only if it was lower limb, and **parallax** (sun about +0.1′, moon from HP). Leave dip at **0**. Apply → that writes **Ho**. Details: [Altitude corrections and refraction](#altitude-corrections-and-refraction).
6. Reduce outside FairWinds: almanac GHA/Dec → Hc and Zn from your AP → intercept **Ho − Hc** → plot LOPs → fix. The game will not compute Hc, intercept, or a star/noon/running fix in Expert.
7. **Enter Fix** / **Set DR** with that position. That becomes the AP for the next sights.

Copy the sight card (body, Hs/Ho, UTC, AP) if you are reducing in another tool. Re-check IE after a long gap or when you switch to a drifting sextant.

Height of eye is stamped at **3 m** on the sight; that does not turn dip on. The sextant rests on the engine’s 0° horizon, which is the horizon seen from a height of eye of zero, not a dipped sea horizon. Subtracting dip would pull Ho about 3′ too low. Use the HoE field only if you want a classic dip line for an external worksheet that is *not* matched to FairWinds.

UI detail for Check IE and Last IC: [The Sky Tool → Navigation Modes](/en/guides/sky-tool/#navigation-modes).

### The core discipline: AP management

In Expert mode your true GPS position is never used for anything. Instead, every calculation — solar times, daily schedule, sight reductions — is based on the position you select in the **AP Selection** dropdown at the top of the nav drawer.

This means:
- Your AP is only as good as your last confirmed fix or DR
- A stale or inaccurate AP will bias your LOPs
- The error compounds: each fix session's quality depends on how well you maintained DR since the last one

This is the real challenge of offshore celestial navigation, and it is what Expert mode is designed to replicate.

### Sextant instrument effects (Expert only)

Your chosen sextant’s **precision** quantizes marked Hs. Its **drift** maintains a persisted **index error (IE)** that wanders over time (′/week). Instruments that hold calibration (FairWinds default, C. Plath) keep IE at 0′. Others (Davis, Mark II, Astra) seed and drift — re-check after long gaps or when switching sextants.

You tune **Last IC** once per instrument (sextant picker, or **Check IE** → **Save to sextant**). It is not retyped on every sight; **Correct Hs** prefills it.

### What FairWinds provides

- Hs in degrees, minutes, seconds of arc (raw drum reading in Expert)
- UTC timestamp to the second
- AP position at the time of the sight (the position you selected — never GPS)
- Environmental parameters (height of eye, temperature, pressure)
- **Check IE** and the **Correct Hs** worksheet for Hs→Ho
- Solar times table and daily work schedule (based on your AP)
- Best Bodies panel for target selection
- One-tap **Copy** button on each sight card — copies body name, Hs, UTC, and AP formatted for pasting into any external reduction tool

### What you do externally

- Apply IC, refraction, +SD for a lower-limb sight, and parallax on **Correct Hs** to get Ho
- Look up GHA and declination from the Nautical Almanac
- Compute Hc and Zn from your AP (HO-249, HO-229, or a calculator)
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

## Altitude corrections and refraction

A sextant reading (Hs) is not the altitude the almanac and sight reduction tables work with. The tables give a **geometric** altitude: where the body really is, measured from the true horizon at the center of the Earth. Every navigator corrects Hs to that frame before comparing it with anything. The result is **Ho**.

### How a real navigator does it

On a paper worksheet (the way a Golden Globe Race navigator works), each sun sight goes through the same steps:

1. **Hs** — the sextant reading
2. **Index correction (IC)** — removes the sextant’s own error
3. **Dip** — the sea horizon is below eye level; about −3′ from 3 m. This gives **Ha**, the apparent altitude
4. **Main correction** from the Nautical Almanac’s altitude-correction table, looked up at Ha. For the sun it combines three things:
   - **Refraction** — the atmosphere bends light and lifts the image
   - **Semi-diameter** — only for a lower- or upper-limb sight, to get to the center
   - **Parallax** — the almanac is geocentric; the observer is on the surface. About +0.1′ for the sun, up to about 1° for the moon
5. **Ho** — then noon latitude, an intercept (Ho − Hc), or a chronometer sight

Refraction is the correction that matters most near the horizon. It shrinks quickly as the body climbs:

| Apparent altitude | Refraction |
|---|---|
| 0° (horizon) | about 34′ |
| 3° | about 14′ |
| 10° | about 5.5′ |
| 30° | about 1.8′ |
| 45° | about 1.1′ |
| 84° | about 0.2′ |

Real refraction also varies with temperature and pressure, which is why low sights are less trustworthy at sea. The almanac has an extra table for non-standard conditions.

### How the FairWinds sky does it

The sky is drawn by the Stellarium engine, and it behaves like a real sky in most of the ways that matter here:

- **Refraction is drawn in.** Stellarium lifts every body using the Saemundsson refraction formula at sea-level pressure (1013 mb) and 15°C. That is about 34′ at the horizon, the values in the table above. The Hs you measure includes it, just like a real sextant reading.
- **Parallax is drawn in.** Bodies are drawn as seen from your position on the Earth’s surface, so Hs includes parallax too, as in real life.
- **No dip.** The sky’s horizon is the horizon seen from a height of eye of zero. Dip is the one real-world correction that does not apply.
- **The atmosphere toggle removes refraction.** In Guided mode you can hide the atmosphere. Stellarium then draws bodies at their geometric positions: near the horizon the sun sits about 34′ lower, so it rises a few minutes later and sets a few minutes earlier (about two minutes near the equator). FairWinds records the refraction the sky actually showed when you took the sight (zero with the atmosphere off), so your fix is still correct. Expert mode always keeps the atmosphere on.
- **The refraction is deterministic.** Unlike a real horizon, the sky’s refraction never varies with the weather, so low sights (even sunrise and sunset at Hs ≈ 0°) are fully usable in FairWinds.

### Guided mode

FairWinds does the corrections for you, the same way a paper worksheet would:

**Ho = Hs + SD (lower limb only) − refraction**

- The refraction is the exact amount Stellarium applied at that altitude when you marked the sight
- **Hc** is geometric too, the same as an HO 249 / HO 229 lookup
- Parallax is left in both Ho and Hc, so it cancels; dip is zero

Every reduction uses this Ho: star and sun LOPs, the Sun-Run Fix, noon latitude, and the sunrise / sunset longitude. The Sight Reduction Form and the Sun Worksheet show the **Refraction** line so you can follow along.

### Expert mode

You do the corrections on **Correct Hs**, like a real navigator. The worksheet’s Pub view follows the paper order (Hs → IC → dip → Ha → refraction → SD → parallax → Ho):

| Correction | What to enter |
|---|---|
| **IC** | Prefilled from Last IC |
| **Dip** | Leave at 0 — the sky horizon is at height of eye zero |
| **Refraction** | Prefilled with the FairWinds value for that altitude (shown as **FairWinds refraction**). Keep it, or enter the figure from your almanac |
| **Semi-diameter** | +SD for a lower-limb sight only (prefilled when you choose Lower limb) |
| **Parallax** | Sun about +0.1′; moon from the almanac’s HP |

The Ho you get is then ready for a Nautical Almanac and HO 249 / HO 229 reduction, exactly as at sea.

**FairWinds value vs your almanac.** The almanac’s main table assumes 10°C and 1010 mb; Stellarium uses 15°C and 1013 mb. The two differ by about 0.5′ at the horizon and by less than 0.1′ above about 10°, so either figure gives a good LOP.

> **Sights and worksheets from before refraction became a step.** Older FairWinds guidance said to leave refraction at 0. Those Ho values still include refraction, so FairWinds removes it automatically when it reduces them. Reopening an old worksheet prefills the refraction line.

---

## Switching Modes

Tap the **Guided / Expert** badge in the top bar of the Sky Tool, or open **Settings** (gear icon, bottom-left) and use the **Mode** toggle.

- Switching to Expert locks sky time to real time and hides all computed results.
- Switching back to Guided restores time scrubbing and computed reductions.
- Your mode is saved between sessions.
