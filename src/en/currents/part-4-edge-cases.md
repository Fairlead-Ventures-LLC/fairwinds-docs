---
layout: base-en.html
typora-root-url: ../..
title: Currents Part 4 - Edge Cases and the Head-to-Wind Problem
---

# Currents — Part 4: Edge Cases and the Head-to-Wind Problem

<p class="lead">In light, shifty winds with current, route mode can push a boat from a sailable upwind angle into the no-go zone over just a few updates. Here's why — and what to do about it.</p>

---

## The Short Version

In light shifty wind with current, and sailing at or close to VMG, **stick to TWA/VMG scheduler paths traced over a route** rather than raw route mode.

---

## Why Route Mode Can Fail Near a Mark

Route mode makes the boat chase **straight-line waypoint bearings** — not a continuously optimised sailing angle. That distinction matters a lot when wind and current are in play.

Here's the chain of events that causes problems:

1. **The bearing changes fast near a mark.** With wind shifts and current, a leg that started at a near-optimal upwind angle can quickly be forced into a tighter and tighter TWA.

2. **Adverse current compounds small angle errors.** Progress toward the mark is reduced while drift keeps changing the required bearing. The boat can slide from a sailable angle (e.g. ~43°) to an unsailable one (e.g. ~25°) in a couple of updates.

3. **Light wind makes it worse.** Boat speed is low, so each update produces larger *relative* changes in the required bearing. Less momentum, more drift, faster angle degradation.

4. **The boat stalls head-to-wind and drifts.** Once pushed past the no-go zone, the boat loses speed entirely and the current takes over.

The net result: route mode follows waypoint bearings, and near turns those bearings can swing quickly due to wind shifts and current — pushing the boat from sailable upwind angles into the no-go zone. In adverse current and light wind, progress is small and drift is large, so the angle degradation compounds over a few updates until the boat stalls.

---

## Why This Is Actually Fascinating

This is almost exactly the problem a real boat would face in the same conditions. Traditional routing tools were built for wind-only sailing, and the interaction of waypoint-bearing chasing with accurate current simulation makes this limitation visible in a way it never was before.

It's a reminder that **routing tools give you a line, not a heading** — and in current, the gap between those two things can be surprisingly large.

---

## What To Do About It

### The Recommended Approach: Scheduler + TWA/VMG

Rather than running raw route mode in light shifty conditions with current, build a **scheduled set of waypoints** traced over your router-generated route and sail them on TWA/VMG rather than a fixed bearing. This keeps the boat on an always-sailable angle regardless of how the required bearing shifts near a mark.

This is slower to set up but gives you full control and predictability — and avoids the stall entirely.

### Why Route Mode Still Works Most of the Time

In stronger winds and/or favourable current, boat speed is high enough that bearing changes near marks are absorbed without the angle degrading into the no-go zone. Route mode is reliable in those conditions. The problem is specific to the combination of **light wind + adverse current + close upwind mark**.

---

## FairWinds' Built-in Protection

FairWinds includes a safeguard for this situation: if the next waypoint would force the boat to point too close to the wind (where the polars produce no speed), the simulator briefly ignores that impossible angle and keeps sailing on the last working heading. Once the waypoint angle becomes sailable again, normal route following resumes.

Because this only happens over very short distances and tiny fractional TWA changes, it has minimal effect on the overall course and is usually unnoticeable. It's a safety net — not a substitute for good route planning.

---

## Key Takeaways

1. **Route mode chases bearings, not sailing angles** — near marks in current, those bearings can swing into the no-go zone fast.
2. **Light wind + adverse current is the worst case** — low speed means large relative bearing changes per update.
3. **Use TWA/VMG scheduler waypoints** over your route line when conditions are tricky.
4. **FairWinds has a head-to-wind safeguard**, but good planning avoids the situation entirely.
5. This is fundamentally the same problem real navigators face — FW's accurate simulation just makes it visible.

---

*← [Part 3: How to Route with Currents](/en/currents/part-3-routing/)*
