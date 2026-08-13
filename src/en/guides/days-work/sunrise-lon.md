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
5. Review the longitude calculation (observed UTC vs almanac time at 0° longitude)
6. Tap **Save to Log**

The fix is saved as a **Lon fix** and appears in **Positions**.

## Why it matters

This is a quick longitude check, not a full lat/lon fix. Use it to gut-check whether your DR longitude is still sane before the morning sun work.

## Expert mode

The auto longitude worksheet is hidden. Treat Hs as Ho for this horizon sight (index/dip corrections are not applied yet), compare your observed UTC to Greenwich sunrise from the almanac (**1 min ≈ 0.25°**), then **Fixes** tab → **Enter Fix** → **Longitude Fix**.

---

*Optional — pairs well with a later noon or star fix.*
