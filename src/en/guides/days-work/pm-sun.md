---
layout: base-en.html
title: PM Sun Sight / Running Fix
---

# PM Sun Sight / Running Fix

<p class="lead">Shoot the sun in the afternoon, then advance your noon latitude forward to get a full afternoon fix.</p>

← Back to [Daily Fixes](/en/guides/days-work/)

---

## When

**Noon to sunset** — ideally 1.5–2 hours after transit, when the sun has moved enough west to give a LOP that crosses the noon latitude at a good angle.

## The Recipe

1. Open the Sky Tool → **Solar** tab
2. Shoot the sun, recording Hs and UTC time
3. Compute and save the LOP — it will run roughly north-south (sun now in the west)
4. Advance your **noon latitude line** forward by your DR run since noon
5. The advanced noon line crosses the afternoon LOP → **running fix**

## Why

The afternoon sun sight mirrors the morning one, but now you're running the noon latitude forward instead of the morning LOP. The sun has swung to the west, so its LOP crosses your east-west latitude line at a good angle. This gives you a second full fix of the day — useful to confirm the noon position and catch any current set since midday.

This also sets up your DR for the rest of the afternoon and the evening twilight watch.

## In FairWinds

Same as the AM sight — Solar tab, save the LOP. Use the Running Fix tool to advance the noon fix forward and cross it with the afternoon LOP.

### How FairWinds computes your Sun-Run-Sun run

When you compute a running fix from two sun sights, FairWinds uses the DR positions stored with each sight:

1. At sight capture time, each sight stores UTC plus the current DR latitude/longitude.
2. Running Fix computes the run vector from DR1 -> DR2 (distance and course).
3. Displayed speed is derived from that interval (`distance / elapsed time`) — effectively the average speed between sights.

This means the run is **not** based on "initial speed only." It is based on the two DR points attached to the selected sights.

If you use a constant DR assumption (for example 6 kn), set that in your Positions workflow and keep it consistent between the two sights. Changing DR assumptions later does not rewrite DR values already stored on older sights.

---

*Required — gives you an afternoon position and resets the DR for the evening.*
