---
layout: base-en.html
title: Sunrise Longitude Fix
---

# Sunrise Longitude Fix

<p class="lead">Sight the sun at Hs ≈ 0° as its center bisects the horizon — FairWinds turns that timing into a longitude fix.</p>

← Back to [Daily Fixes](/en/guides/days-work/)

---

## When

**About ±10 minutes around sunrise** on the Daily Schedule (sights within about ±20 minutes still classify as sunrise).

Check **Solar Times → Sunrise** for the predicted UTC (based on your position reference / AP). Timing is tight — a few seconds matter.

## In FairWinds (Guided)

1. Open the **Sky Tool** → **Workbook** → note Sunrise under **Solar Times**
2. Near sunrise, tap **Sextant** and shoot the **Sun** with the disc **half-risen** (center on the horizon, Hs ≈ 0°)
3. Open the **Sun** tab — your sight should show a **RISE** badge
4. Select that sight so the **Sun Worksheet** switches to **Sunrise / Sunset Fix**
5. Review the longitude calculation. It is a **chronometer sight**, the classic way to get longitude from a timed sun:
   - **Sun declination** and **Greenwich hour angle** from the sky engine at your sight’s UTC (the engine is the almanac)
   - **Hs**, **Refraction** (about 34′ at the horizon), and **Ho** — the sun’s geometric altitude, about −0°34′ for a sunrise sight
   - **Hour angle** from your latitude, the declination and Ho, then **longitude**
6. Tap **Save to Log**

The fix is saved as a **Lon fix** and appears in **Positions**.

The latitude used comes from your position reference / AP, so a good noon or star latitude makes this longitude better.

## Why it matters

This is a quick longitude check, not a full lat/lon fix. Use it to gut-check whether your DR longitude is still sane before the morning sun work.

## Expert mode

The auto longitude worksheet is hidden. Reduce it as a chronometer sight:

1. **Correct Hs** → Ho: IC, the prefilled refraction (about −34′ at Hs ≈ 0°), parallax (+0.1′); no SD for a center sight; dip stays 0. Ho comes out around −0°34′.
2. From the almanac at the sight’s UTC: the sun’s **declination (δ)** and **GHA**.
3. With your DR latitude φ: **cos t = (sin Ho − sin φ sin δ) / (cos φ cos δ)**
4. Sunrise: the sun is east of you, so **LHA = 360° − t**.
5. **Longitude = LHA − GHA** (east positive; add or subtract 360° to land between 180° W and 180° E).
6. **Fixes** tab → **Enter Fix** → **Longitude Fix**.

> **Why not just compare with the almanac’s sunrise time?** The printed sunrise is for the sun’s *upper limb* appearing, rounded to the minute, and one minute of time is 15′ of longitude. It is a fine rough check, but the chronometer sight is what gets you within a mile or two.

Refraction details: [Altitude corrections and refraction](/en/guides/navigation-modes/#altitude-corrections-and-refraction).

---

*Optional — pairs well with a later noon or star fix.*
