---
layout: base-en.html
typora-root-url: ../..
title: Race Alerts
---

# Race Alerts

<p class="lead">FairWinds can email you or send a Discord DM when something on your boat needs attention — a grounding, a start, a finish, or (on Pro) a pinch, a gate approach, or a rounding. You choose each alert on your profile. Nothing is sent unless that channel is on.</p>

Turn alerts on or off at [fairwinds.world/profile](https://fairwinds.world/profile) under **FW Race Alerts**.

---

## How they work

- **Email** and **Discord** are independent. You can have one, both, or neither for each alert.
- Emails go to your account address. Discord DMs go to the Discord account linked on the same profile page (connect Discord and send a test DM once).
- Alerts use the **language** saved in your profile. If you change language mid-race, the next messages may still use the previous language until your boat is loaded again.
- The simulation runs on **one-minute cycles**. Alerts are decided at the end of a minute, not the instant you change heading. A minute of delay is normal.
- Some alerts (crash, finish, gate rounded) wait until that minute has **committed**, so a last-second heading change cannot false-alarm you.
- After a FairWinds restart you will not get a replay of a crash or finish that already happened.

SMS is not offered yet.

---

## Which alerts exist

| Alert (profile name) | Who | When it fires |
|---|---|---|
| **Boat crash (runs aground)** | Everyone | Your boat hits land |
| **15 minute race start reminder** | Everyone | Once, shortly before a scheduled start |
| **Race finish** | Everyone | Your boat crosses the finish |
| **Sailing below VMG (5+ minutes)** | Pro | Pinch, too-deep, or irons for several minutes |
| **Approaching next gate** | Pro | You enter the distance you set to the next gate |
| **Gate rounded** | Pro | You cross an intermediate gate |

The three Pro alerts are locked on free accounts. Crash, start, and finish stay available to everyone.

---

## Boat crash

Fires when the boat hits land. The wording follows the race’s collision mode: **aground** (stopped for repairs) or **sunk**.

Rules:

- One notice per grounding. If you stay on the rocks, FairWinds will **not** nag every cooldown window.
- After you sail clear in a healthy state, a later grounding can notify again — once the cooldown (default **30 minutes**) has also elapsed.
- See [Avoiding the Rocks](/en/guides/avoid-rocks/) for how crash detection works in the viewer.

---

## Race start reminder

You get **one** reminder for a scheduled (not perpetual) race, while the race is **active** and the start is still in the future. The profile lists this as a **15-minute** reminder.

No reminder if the race has already started, or if you only join after that window.

---

## Race finish

Fires when your boat crosses the finish line. At most **once per boat per attempt** (perpetual races can notify again on a later attempt). The message can include finishing place when it is known.

---

## Sailing below VMG (Pro)

This is not “head-to-wind only.” It fires when you have been **sailing inside the polar VMG angle** long enough that it is probably not a brief tack.

### What counts as “below VMG”

Using true wind angle (TWA) against the polar’s optimum VMG angles, with a **5°** margin:

| Situation | Rule |
|---|---|
| **Pinch** (upwind) | \|TWA\| is more than **5° inside** the upwind VMG angle (closer to the wind than the polar wants) |
| **Too-deep** (downwind) | \|TWA\| is more than **5° outside** the downwind VMG angle (deeper than the polar wants) |
| **Irons** | Boat speed from the polar is ≤ **0.05 kn**, **or** \|TWA\| ≤ **15°**. Polar speed is checked first; the 15° test covers polars that still leak a little speed at TWA 0 |

Irons can fire even when pinch/too-deep cannot. On a very round polar, or when downwind VMG is ~178°, **too-deep may never fire**.

### Timing

1. You must be in that state for **5 consecutive committed minutes**.
2. After a send: TWA must sit **at or above** VMG for **2 minutes**, then a **30-minute** cooldown before it can fire again.
3. Switching to **VMG**, **motor**, or **paddle** clears the streak immediately (you are no longer “sailing below VMG”).

### What does *not* count

These are first-class boat states. FairWinds does **not** infer TWA from them, and they are not “sailing below VMG”:

- **Heave-to**
- **Anchor**
- **Stopped**

Also skipped: DNF, finished, before your start, or missing wind. If true wind speed drops below **3 knots**, the five-minute streak **pauses** (a brief lull will not wipe four good minutes).

---

## Approaching next gate (Pro)

Watches **only the next gate** on your course. **Finish counts. Start does not.**

You set the distance **X** on your profile:

- Default **10 nm**
- Clamped **1–20 nm**

### When it fires

- **Enter:** you cross *into* the X nm circle. Already sitting inside X when FairWinds first sees you does **not** fire.
- **Urgent exception:** if you are first seen already inside **and** you are within `min(5 nm, 0.25 × X)`, it still fires (you are about to round).
- **Rearm:** sail back outside **X + max(1, 0.15 × X)** nm, then you can get the approach alert again for that gate.

The message says you **crossed your X nm threshold**. It does **not** print live distance-to-gate (that number is already changing by the time the mail arrives).

---

## Gate rounded (Pro)

Fires when you cross an **intermediate** gate — not the start, not the finish.

- **Once per gate per attempt.** A later attempt on a perpetual race can notify that gate again.
- Like crash and finish, this waits until the minute has committed, so a mid-minute recalc cannot false-alert a rounding.

---

## Turning them on

1. Open [your profile](https://fairwinds.world/profile).
2. Edit **FW Race Alerts**.
3. Tick **Email** and/or **Discord** on each row you want.
4. For **Approaching next gate**, set the distance in nautical miles.
5. Save. Discord needs a connected account (and a successful test DM) before DMs will arrive.

Changes apply to boats already racing without waiting for the next login. Language changes are snapshotted when the boat is loaded — see [How they work](#how-they-work).
