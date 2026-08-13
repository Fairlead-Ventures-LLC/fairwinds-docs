---
layout: base-en.html
title: PM Sun Sight / Running Fix
---

# PM Sun Sight / Running Fix

<p class="lead">Afternoon sun sight, then Sun-Run Fix — FairWinds advances your AM LOP by the boat track and crosses it with the PM LOP.</p>

← Back to [Daily Fixes](/en/guides/days-work/)

---

## When

Two Daily Schedule steps share this afternoon window:

| Schedule step | What to do |
|---|---|
| **PM Sun Sight** (required) | Take the afternoon sun sight |
| **Sun-Run Fix** (required) | Select AM + PM sights and compute the running fix |

**After the noon window → sunset.** Best practice in the app: **2–4 hours** after the AM sight, with **≥60°** of azimuth change between the two. The engine accepts pairs from about **30 minutes** to **12 hours** apart on the same day.

## In FairWinds (Guided)

### 1. Take the PM sight

1. **Sun** tab → **Sextant** → shoot the sun → **Save**
2. Confirm a **PM** badge on the new **Sun Sights** row

### 2. Compute the Sun-Run Fix

1. Still on the **Sun** tab, check **exactly two** sights (your **AM** and **PM**)
2. The **Sun Worksheet** shows **Running Fix** with Course / Speed / Elapsed / Run from your boat track between the two sight times
3. Tap **Compute Running Fix**
4. Optional: **Plot Running Fix**
5. Tap **Save to Log**

Saved as a **Sun run fix** in **Positions**.

> FairWinds does **not** advance a noon latitude line against a single PM LOP for this step. The product path is **sun-run-sun**: AM LOP advanced by the logged run, crossed with the PM LOP.

### How the run is calculated

1. Each sight stores UTC plus the DR/position used at capture
2. Running Fix builds the run vector between those two attached positions (distance + course)
3. Displayed speed is `distance / elapsed` for that interval

Changing a DR later does not rewrite DR values already stored on older sights — keep your Positions / AP workflow consistent between the two sights.

## Why it matters

This is your main afternoon full fix when you are working the sun. It confirms the morning work and gives you a fresh position before sunset and evening twilight.

## Expert mode

Auto **Compute Running Fix** is hidden. Reduce both sights externally, advance the AM line by your run, then **Fixes** tab → **Enter Fix** → **Running Fix**.

---

*Required — afternoon position and DR reset for the evening.*
