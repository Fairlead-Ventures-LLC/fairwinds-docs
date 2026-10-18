---
layout: base-en.html
title: AM Sun Sight
---

# AM Sun Sight

<p class="lead">Morning sun sight on the Sun tab — the first half of FairWinds’ sun-run-sun (Sun-Run Fix).</p>

← Back to [Daily Fixes](/en/guides/days-work/)

---

## When

**After sunrise until the noon window** on the Daily Schedule (required step).

Aim for sun altitude about **20°–60°** — high enough to limit refraction trouble, low enough that the horizon stays sharp. Roughly mid-morning is usually right.

## In FairWinds (Guided)

1. Open the **Sky Tool** → **Workbook** → **Sun** tab
2. Tap **Sextant**, acquire the sun, choose **Center** (default) or **Lower limb**, align to the horizon, **Mark!** → **Save**. Lower limb records a limb Hs; Guided applies +SD so Ho is still the sun’s center.
3. Confirm the sight appears under **Sun Sights** with an **AM** badge
4. You do **not** need to compute a standalone fix from this sight alone

Keep this sight. Later, after your **PM Sun Sight**, you’ll select **both** AM and PM sights and run **Compute Running Fix** (see [PM Sun Sight / Running Fix](pm-sun/)).

The Daily Schedule marks **AM Sun Sight** done when you’ve taken a qualifying morning sun sight.

### Check the position reference first

The sight is stamped with the position shown under **Reference from** at the top of the drawer, and the afternoon running fix measures your run as the difference between this stamp and the PM one. In Guided the default **GPS — current position** moves with the boat and nothing more is needed. If the dropdown shows **Auto — Latest fix** or a specific fix, that position will *not* move between now and the PM sight, the run will come out as zero and the running fix will be wrong by roughly the day's run. Lay a DR mark (course and speed) from that fix first so the reference reads **Auto — DR projected**. Details: [Position reference, DR and the run](/en/guides/days-work/#position-reference-dr-and-the-run).

### Picking the time

The running fix needs the sun's azimuth to change between the two sights; FairWinds refuses pairs that cross under 5° and anything under 15–20° is poor. When the sun passes high (noon altitude above about 60°, i.e. the sun's declination is within 30° of your latitude), most of that azimuth swing happens in the hour either side of noon, and a 09:00 sight paired with a 15:00 sight may cross at only 10–15°. In that case plan on pairing this sight with one taken within an hour of **Mer. Pass.**, or take a mid-morning sight and a second one near noon. When the sun stays low, well-separated morning and afternoon sights cross comfortably.

## Why it matters

In FairWinds the classic daytime position is a **sun-run-sun** fix: advance the morning LOP by your boat’s run, then cross it with the afternoon LOP. The AM sight is the first of those two lines — not a morning cross with noon latitude.

## Expert mode

Capture the same sight (Hs is recorded; Ho stays unset until you correct it). In Expert the reference is never GPS, so the stamped DR is whatever **AP Selection** resolves to — lay a DR mark from your latest fix before this sight or the stamp will sit still all day (see above). Follow [Expert setup](/en/guides/navigation-modes/#expert-setup): on **Correct Hs**, apply IC, the prefilled refraction, +SD for a lower-limb sun (prefilled), and parallax (+0.1′); leave dip at 0. See [Altitude corrections and refraction](/en/guides/navigation-modes/#altitude-corrections-and-refraction). Enter the finished position later via **Enter Fix** → **Running Fix** after the PM sight.

---

*Required — first sight for the Sun-Run Fix.*
