---
layout: base-en.html
typora-root-url: ../..
title: Waves and Boat Speed
---

# Waves and Boat Speed

<p class="lead">FairWinds models real ocean wave conditions using live GFS Wave forecasts. When significant wave height exceeds 3 metres, your boat speed is affected — punching into a head sea costs you, surfing a following sea gains you, and getting caught beam-on in a big swell is never free.</p>

The world's waves are really interesting. The distribution of significant wave height (SWH) globally at any given time is:

| Wave height | % of ocean surface |
|-------------|-------------------|
| < 3 m       | 75%               |
| 3 – 4 m     | 15%               |
| 4 – 5 m     | 5%                |
| 5 m+        | 5%                |

**Correlation**

Do waves just follow the highest winds? Not really! In fact 30% of the waves in the 'high band' (3m+) are in winds less than 5 knots! And the correlation between wind speed and wave height in the 3m+ band is r = 0.02 — almost nothing.

Wave routing is genuinely an independent strategic dimension, not just an add-on to the wind field. Wave fields are also highly variable forecast to forecast — roughly 50% of predicted wave heights in the 3–5m+ change bands shift from one day to the next.

You can really see this illustrated in the Southern Ocean, with waves overlaid on the wind colors:

![southernocean](/images/southernocean.png)

---

## Data Source

Wave data comes from the **NOAA GFS Wave model** (global, 0.25° resolution), the same wave forecast system used by professional offshore routing tools. Two fields are fetched for every forecast cycle:

| Parameter | GRIB2 code | What it is |
|-----------|-----------|------------|
| Significant wave height | `HTSGW` | The average height (trough to crest) of the largest third of waves, in metres |
| Primary wave direction  | `DIRPW` | The direction the dominant wave train is **travelling toward** (oceanographic convention — opposite of how wind direction is reported) |

Both fields are fetched four times a day alongside the wind GRIBs and pushed to the simulator and router-service. FairWinds interpolates both fields to your exact position and time using bilinear spatial interpolation and linear time interpolation between forecast steps, so the wave state under your boat updates smoothly as you sail and as new forecast cycles arrive.

The current wave data is always viewable on [fairwinds.world/wind](https://fairwinds.world/wind).

Waves are enabled on a per-race basis by the race creator. If your race has waves active, you'll see a wave readout in the instruments and can toggle a wave overlay on the chart.

---

## Physics Implementation

Wave effects are a **stateless, per-minute speed multiplier** applied on top of your polar boat speed for the current wind — there's no fatigue accumulator or drain, just height and geometry. Motor propulsion is not affected, only sail.

Two inputs drive the multiplier:

1. **Significant wave height (Hs)** — how big the sea state is.
2. **Angle to waves** — the angle between your boat's heading and the direction the waves are coming from (0° = waves hit you dead on the bow, 180° = waves are pushing you from directly astern).

This is deliberately **not** the same as True Wind Angle. Wind and waves are very often *not* aligned — a classic example is a departing low that has rotated the wind while the old swell train is still running in its original direction, or true cross-swell from two independent storm systems. Using true wave angle rather than wind angle means a boat beating upwind into leftover swell from a different direction is modeled correctly, distinct from beating into wind-aligned seas.

Below **3 m** Hs, there is no effect at all — typical open-ocean racing conditions.

Above 3 m, your angle-to-waves is bucketed into three zones, and the multiplier scales with wave height inside each zone:

| Angle to waves | Zone | 3–4 m | 4–5 m | 5 m+ |
|-----------------|------|-------|-------|------|
| < 60°   (into it) | Into waves | −5%  | −10% | −15% |
| 60°–120° (beam)   | Beam seas  | −3%  | −9%  | −12% |
| > 120°  (with it) | With waves | +5%  | +10% | +15% |

A few things worth noting about the shape of this table, since they reflect deliberate design choices, not just arbitrary numbers:

- **Into-it and with-it are symmetric (±5/10/15%).** Punching into a head sea and surfing the same sea state are treated as mirror-image effects of the same magnitude — a deliberate simplification for legibility over asymmetric realism (in reality the penalty for punching upwind into big seas is usually somewhat steeper than the bonus for surfing the same sea downwind, but a clean symmetric number is much easier to predict and plan around).
- **Beam seas sit in their own, smaller-magnitude curve** (−3/−9/−12%), rather than a straight average of into-it and with-it. Taking a big swell on the beam carries real rolling risk and is uncomfortable and slow, so it's never a "free" or neutral heading — but it's also not as extreme as either of the fore-and-aft cases.
- **120° is the boundary between the beam and with-it zones** because that roughly matches where most A1/A3-style downwind sail configurations start being considered "downwind" — familiar to anyone who's raced with asymmetric kites.
- There's a real naval-architecture rule of thumb backing up the rough size of this bonus. Classic model-basin surf-riding research (du Cane and Goodrich, 1962, later corroborated across hull types by Kan, 1987) found that a boat capable of a given calm-water speed can be picked up and carried by a wave travelling up to **~50% faster** than that speed — so an 8-knot boat can surf-ride a wave moving at 12 knots. A separate, well-known storm-tactics threshold puts the practical safe ceiling at roughly **60% of wave speed** before you risk losing steering control and broaching. Our +5–15% bonus is deliberately conservative relative to that full ~50% surf-riding headroom — it models the routine, controllable speed gain from sailing well in a following sea, not the runaway, broach-risk end of the surf-riding curve. It also lines up with what sailors actually report: crews on lighter, quicker-planing boats (like a J/125) commonly describe picking up 2–3 knots of boat speed above true wind speed even in modest swell when surfing well, which sits squarely in the range a 10–15% bonus produces on top of a typical polar speed.

Wave period, and the more complex case of true multi-train "confused seas" (partitioned wind-sea vs. swell), are deliberately excluded from this model for now. The FairWinds router already accounts for waves natively (see below), but external tools like QTVLM have no way to route against this model — so it also needs to be simple and legible enough for players to reason about and plan around by hand when using an external router, not just correct as an input to our own router.

Route mode and scheduled waypoints both respect the wave multiplier when calculating segment speeds, using the boat's projected heading at each point along the route.

---

## What You'll See in the Viewer

**Wave overlay.** The 'Waves' button in the wind controls panel toggles a wave field overlay on the chart — a shaded height gradient plus small chevrons showing the direction waves are travelling toward, sampled across the visible area.

![wave-o1](/images/wave-o1.png)

**Instrument readout.** Your compass/instrument panel shows the full wave picture at your position:

| Readout | Meaning |
|---------|---------|
| `SWH` | Significant wave height at your position, in metres |
| `DIRPW` | Primary wave direction — the raw GFS Wave heading the waves are travelling **toward** |
| `WEA` | Wave Encounter Angle — the angle between your heading and the waves, i.e. `angleToWaves` (0° = head sea, 180° = following sea) |
| `Pol` | The resulting effect on your polar speed, framed as a **% of polar** — e.g. `Pol −15%` or `Pol +9%` |

Hover any of these rows for a plain-language explanation, including which zone you're currently in (Into waves / Beam seas / With waves). Showing `DIRPW` and `WEA` alongside the raw `%` lets you see not just what's happening to your boat speed but *why* — you can check your encounter angle against the wave direction and immediately understand what changing heading by a few degrees would do to the multiplier, without needing to do the geometry in your head.

The `Pol` framing is intentional: the FairWinds router already accounts for waves automatically, but this is the same number you'd manually apply to a polar-derived route time if you're routing in an external tool like QTVLM instead, which has no way to model wave direction on its own.

**Dead-reckoning line.** The reckoning line projections (manual heading, TWA, VMG, VMC, and route modes) all account for the wave multiplier at each projected point along the line, so the predicted track and ETA already reflect expected wave conditions ahead — not just current conditions.

---

## Notes

- Wave effects are opt-in per race — most races do not have them enabled.
- The effect is sail-only. Motoring through big seas is unaffected.
- Route mode and scheduled waypoints both respect the wave multiplier when calculating segment speeds.
- If wave data is unavailable for your position or time window, the multiplier defaults to 1.0 (no effect).
- Waves are already built into the FairWinds router when enabled.

---

## Routing with Waves in QTVLM (Manual, Leg by Leg)

Earlier versions of this page pointed to a downloadable wave polar file (`fw.polwave.csv`) that let QTVLM apply a wave speed multiplier automatically across a **fully auto-routed** course. **We've retired that approach**, because the old wave model only needed True Wind Angle to look up a multiplier, so it could be baked into a polar file and routed against natively. The current model depends on **angle to waves** — the angle between your heading and the actual wave direction, which is frequently *not* the same as the wind direction. QTVLM's polar format has no independent "wave direction" axis, so there's no way to encode this model into a file QTVLM can auto-route against. A file that tried would silently fall back to treating wave angle as wind angle — exactly the shortcut this model exists to avoid.

**Full auto-routing in QTVLM will not account for wave effects. But you can still route through waves accurately using QTVLM's manual waypoint mode**, applying the "% of polar" adjustment leg by leg yourself:

1. **Lay down waypoints** for your candidate course in QTVLM instead of relying on the full auto-router — break the course into legs at points where the wind or wave picture changes meaningfully (e.g. either side of a swell band).
2. **Check the wave overlay** for each leg, either in the FairWinds viewer or on [fairwinds.world/wind](https://fairwinds.world/wind), and note the significant wave height and direction along that leg.
3. **Work out your angle to waves for that leg** — the difference between your planned heading and the wave direction shown — and look it up in the table above (Into waves / Beam seas / With waves, banded by Hs).
4. **Apply that % directly to QTVLM's polar-computed leg speed** (or leg time) for that segment, the same way you'd hand-adjust for a current you know QTVLM isn't modeling.
5. **Re-check waypoint by waypoint** as forecasts update — wave fields shift meaningfully forecast to forecast, so a leg that was a wash yesterday might be a big penalty or bonus today.

Once you're actually racing, the in-game "% of polar" readout on your instruments tells you exactly what multiplier is being applied in real time at your position — that's the same number this manual process approximates ahead of time, so you can sanity-check your plan against it as you sail.

This is a deliberate trade-off: a wave model that's realistic and rewards understanding *why* a sea state matters on a given heading, at the cost of not being push-button compatible with QTVLM's full auto-router. Waypoint-and-adjust gets you a genuinely wave-aware route; it just takes the extra step a black-box formula would otherwise hide from you anyway. If you were relying on the old CSV file, it's no longer maintained and will not reflect the current in-race physics.
