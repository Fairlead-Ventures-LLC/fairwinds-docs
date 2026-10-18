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

### What the DR is and isn't used for

The sight is stamped with your position reference like any other, but the noon fix barely uses it: latitude comes from Ho and declination, longitude from the time, and the stamp only decides whether the sun is north or south of you. A stale DR does not hurt a noon fix. (The **NOON** badge and the ±15 min window are judged against meridian passage at the reference, so a reference hundreds of miles off could mis-badge the sight, but it will not shift the result.)

### Timing is the whole game for longitude

Latitude is forgiving: a sight a few minutes off meridian passage is a few tenths of a minute low. Longitude is not. It is computed from the sun's GHA at the sight's UTC, so **every minute of timing error is 15′ of longitude** (15 NM at the equator, 13 NM at 30°, 10 NM at 48°). The trap is that the sun's altitude is almost flat for several minutes either side of transit, so “keep the highest Hs” cannot pin the moment of transit to better than a minute or two. In practice:

- Put the sky clock in **1s** mode before the noon window.
- Make sure the reference is current (a projected DR, or GPS in Guided) so **Mer. Pass.** is predicted for where you *are*, not where your last fix was. A reference 40 NM behind you on an easterly course predicts LAN about 3 minutes late.
- Mark **at** the predicted Mer. Pass. time, then bracket it, and prefer the sight closest to the prediction among those within a tenth of a minute of the highest Hs.

Treat the noon longitude as a check rather than a primary longitude. The Sun-Run Fix and the sunrise/sunset chronometer sight both get longitude from steeply changing altitudes and are far less sensitive to the clock.

## Why it matters

Noon is the clean daytime latitude observation. In FairWinds you also get a longitude estimate from the timing of meridian passage, so a well-timed noon sight can stand alone as a full fix — then you still take AM/PM suns if you want the afternoon Sun-Run Fix.

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
