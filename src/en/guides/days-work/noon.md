---
layout: base-en.html
title: Noon Sight
---

# Noon Sight

<p class="lead">Near Local Apparent Noon, pick the highest sun sight — the Sun Worksheet computes noon latitude and longitude.</p>

← Back to [Daily Fixes](/en/guides/days-work/)

---

## When

**LAN ±15 minutes** (Local Apparent Noon / meridian passage).

Use **Solar Times → Mer. Pass.** for the predicted time at your current position reference. The Daily Schedule shows this as a required **Noon Sight** window.

## In FairWinds (Guided)

1. Open the **Sky Tool** → **Workbook** → watch **Mer. Pass.** under **Solar Times**
2. In the minutes around LAN, take several quick **Sun** sextant sights — keep the one with the **highest Hs**
3. Open the **Sun** tab and select the sight with the **NOON** badge
4. The **Sun Worksheet** shows **Noon Fix**
5. Tap **Compute Lat/Lon** — FairWinds removes refraction from Hs to get Ho (the worksheet shows the **Refraction** line and **Ho**), then:
   - **Latitude** = 90° − Ho, combined with the sun’s declination from the sky engine
   - **Longitude** from the sun’s Greenwich hour angle at the moment of the sight (at meridian passage the local hour angle is zero)
6. Tap **Save to Log**

The result saves as a **Noon fix** in **Positions**.

> There is no separate “Noon” tab — noon lives in the **Sun** tab worksheet when a **NOON**-badged sight is selected.

## Why it matters

Noon is the clean daytime latitude observation. In FairWinds you also get a longitude estimate from the timing of meridian passage, so a good noon sight can stand alone as a full fix — then you still take AM/PM suns if you want the afternoon Sun-Run Fix.

## Expert mode

Compute buttons are hidden. Work it as on paper:

1. **Correct Hs** → Ho: IC, the prefilled refraction, +SD if lower limb, parallax (+0.1′); dip stays 0. Refraction is small at noon (about 1′ at 45°, 2′ at 30°), but it is a latitude error of the same size in miles if you skip it.
2. Zenith distance = 90° − Ho. Look up the sun’s declination in the almanac for the sight’s UTC.
3. Sun bearing **south** of you: latitude = zenith distance + declination. Sun bearing **north**: latitude = declination − zenith distance (north positive).
4. Longitude: look up the sun’s GHA at the UTC of meridian passage. West longitude = GHA (if GHA is under 180°); otherwise east longitude = 360° − GHA.
5. **Fixes** tab → **Enter Fix** → **Noon Fix**.

Why the refraction step matters: [Altitude corrections and refraction](/en/guides/navigation-modes/#altitude-corrections-and-refraction).

---

*Required — most reliable daytime latitude observation.*
