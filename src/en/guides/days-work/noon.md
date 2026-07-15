---
layout: base-en.html
title: Noon Sight
---

# Noon Sight

<p class="lead">Watch the sun reach its highest point. That altitude gives you your latitude directly — no tables needed.</p>

← Back to [Daily Fixes](/en/guides/days-work/)

---

## When

**±15 minutes around meridian passage** (Local Apparent Noon). The Day's Work panel shows the predicted transit time for your current DR position.

## The Recipe

1. Start tracking the sun with your sextant a few minutes before predicted transit
2. Watch the altitude increase, then slow, then begin to fall
3. Record the **maximum** altitude — that's the meridian altitude (Hmax)
4. Apply standard corrections (dip, refraction, semi-diameter) to get Ho
5. Latitude = 90° − Ho + declination (from the almanac for that date)

## Why

At the moment the sun transits your meridian it is due north or south of you. The geometry is perfect for latitude — the sun's altitude at transit directly encodes how far you are from the equator, corrected only for the sun's declination on that date. No assumed position, no intercept, no running fix needed. It is the simplest and most reliable observation in the Day's Work.

It does **not** give longitude. That's why you combine it with the morning LOP.

## In FairWinds

In the Solar tab, the noon sight tool tracks the sun to its peak and records the maximum altitude. Once confirmed it computes latitude and saves the noon fix to the Positions panel.

---

*Required — the most reliable observation of the day.*
