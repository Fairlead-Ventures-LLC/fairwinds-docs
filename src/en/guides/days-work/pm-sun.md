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

**After the noon window → sunset.** The engine accepts pairs from **30 minutes** to **12 hours** apart on the same day and refuses a pair whose LOPs cross under **5°**; the Sun Worksheet grades the crossing angle, and anything under 15–20° will magnify small errors several times over. What makes a good pair depends on how high the sun goes:

- **Sun passes high** (noon altitude above about 60°): the azimuth swings fast in the hour either side of noon and slowly the rest of the day, so a 09:00 × 15:00 pair may cross at only 10–15°. Pair the AM sight with one taken **within an hour of Mer. Pass.**, or take the PM sight early.
- **Sun stays low**: morning and afternoon sights **2–4 hours** apart cross well.

Longer runs also mean a longer DR leg carrying error into the fix, which is the other reason to keep the pair tight.

## In FairWinds (Guided)

### 1. Take the PM sight

1. **Sun** tab → **Sextant** → shoot the sun → **Save**
2. Confirm a **PM** badge on the new **Sun Sights** row

### 2. Compute the Sun-Run Fix

1. Still on the **Sun** tab, check **exactly two** sights (your **AM** and **PM**)
2. The **Sun Worksheet** shows **Running Fix** with Course / Speed / Elapsed / Run — the vector between the two positions stamped on the sights (see below). If Run reads **0.0 NM** with hours between the sights, stop: both sights were stamped with the same static reference and the fix will be wrong
3. Tap **Compute Running Fix**
4. Optional: **Plot Running Fix**
5. Tap **Save to Log**

Saved as a **Sun run fix** in **Positions**.

> FairWinds does **not** advance a noon latitude line against a single PM LOP for this step. The product path is **sun-run-sun**: AM LOP advanced by the logged run, crossed with the PM LOP.

### How the run is calculated

This is the classic sun-run-sun, done with the two positions stamped on the sights instead of a log reading:

1. Each sight stores its UTC and the position shown under **Reference from** at the moment it was saved (its DR stamp).
2. The AM LOP is reduced from the AM stamp and the PM LOP from the PM stamp (intercept and azimuth from each sight's own assumed position).
3. The **run** is the vector from the AM stamp to the PM stamp — course and distance, exact, no rounding. The displayed speed is `distance / elapsed`.
4. The AM LOP is moved by that vector and crossed with the PM LOP. That intersection is the fix.

FairWinds never reads the boat's course or speed for this. The run is entirely the difference between the two stamps, so what the reference dropdown was set to at each sight decides everything:

| Reference at both sights | Run used | Result |
|---|---|---|
| **GPS — current position** (Guided default) | True net displacement between the sight times | Exact; course changes between sights do not matter |
| **Auto — DR projected** (a DR mark with course and speed) | The DR mark's course × speed × elapsed | Correct if the DR is; the fix corrects the DR. Lay a new DR mark at each course or speed change |
| **Auto — Latest fix**, a specific fix, DR mark or Start line | **Zero** — both stamps identical | AM line never advanced; fix off by about the real run |
| Two different static references | The vector between those two marks | Not your run; fix off by the difference |

The stamps are fixed once saved; changing the dropdown or adding a DR afterwards does not rewrite older sights. Full table of what each option resolves to: [Position reference, DR and the run](/en/guides/days-work/#position-reference-dr-and-the-run).

Timing: Hs, UTC, Hc and Zn are all taken at the instant you press **Mark**, so the time you spend on the result card before **Save** does not affect the sight.

## Why it matters

This is your main afternoon full fix when you are working the sun. It confirms the morning work and gives you a fresh position before sunset and evening twilight.

## Expert mode

Auto **Compute Running Fix** is hidden. Reduce both sights externally, advance the AM line by your run, then **Fixes** tab → **Enter Fix** → **Running Fix**.

---

*Required — afternoon position and DR reset for the evening.*
