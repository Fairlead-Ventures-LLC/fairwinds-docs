---
alayout: base-en.html
typora-root-url: ../..
title: Waves and Boat Speed
---

# Waves and Boat Speed

<p class="lead">FairWinds models real ocean wave conditions using live GFS wave forecasts. When significant wave height exceeds 3 metres, your boat speed is affected — upwind is harder, downwind you can surf.</p>

The world's waves are really interesting. The distribution of significant wave height (SWH) globally at any given time is
<3 meters - 75% ocean surface
3-4 meters - 15%
4-5 meters - 5%
5+ meteres - 5%

**Correlation**

So in our simulation, we are catch the top 25% of all wave fields. You may say "but this just correlates to high wind!" Actuallly, no! For example 30% of the waves 3m+ are in winds less than 5 knots!  And the correlation between wind speed and and wave height in the 3m+ band is r = 0.02. Almost nothing. 

Wave routing is genuinely an independent strategic dimension and not just a wind field. Additinoally wave fields are highly variable forecaast to forecast. ~50% of predicted wave heights in 3-5+m change bands from day to day!

You can really see this all illustrated  the southern ocean with the waves overlaid on the wind colors

![southernocean](/images/southernocean.png)

---

## How Wave Data Works

Wave heights come from the **GFS Wave model** (0.5° resolution), the same global forecast system used by professional routing tools. FairWinds fetches the significant wave height field (Hₛ) and interpolates it to your exact position and time using bilinear spatial interpolation and linear time interpolation between forecast steps.

The current wave data is always available on https://fairwinds.world/wind

The wave forecast updates daily at 06 UTC. Below 3 m significant wave height, there is no speed effect — typical open ocean racing conditions. The effect only kicks in when seas are genuinely rough.

Waves are enabled on a per-race basis by the race creator. If your race has waves active, you'll see a wave panel in the instruments.

---

## Speed Effects

Wave effects are multiplicative — applied on top of your polar boat speed for the current wind. Motor propulsion is not affected, only sail.

The effect depends on two things: **how big the waves are** and **whether you're going upwind or downwind** (split at 90° TWA).

| Significant wave height | Upwind (TWA ≤ 90°) | Downwind (TWA > 90°) |
|------------------------|-------------------|---------------------|
| Below 3 m              | No effect         | No effect           |
| 3 – 4 m                | −6%               | +6%                 |
| 4 – 5 m                | −8%               | +8%                 |
| 5 m and above          | −10%              | +10%                |

Going upwind in heavy seas is a grind — you're punching into the swell. Going downwind, you get to surf, gaining the same magnitude of boost as the upwind penalty. A 5 m+ swell is worth ±10% — enough to make routing through or around a swell band a meaningful strategic decision. Do you stay in the surf in lighter wind or head to a flatter area with better wind?

---

## Reading the Waves

The 'Waves' button in the Wind controls panel will toggle the wave field on/off. It shows the waves in 3m, 4m, and 5m bands corresponding to the performance impact area. The compass will display the current wave height at your position any effects they are having on your boat speed. 

![wave-o1](/images/wave-o1.png)





---

## Notes

- Wave effects are opt-in per race — most races do not have them enabled.
- The effect is applied sail-only. Motoring through big seas is unaffected.
- Route mode and scheduled waypoints both respect the wave multiplier when calculating segment speeds.
- If wave data is unavailable for your position or time window, the multiplier defaults to 1.0 (no effect).
- Waves are already built into the FairWinds router if enabled

---

## Routing with Waves in QTVLM

To factor wave effects into your QTVLM routes, you need to load the FairWinds polar wave file. This tells QTVLM exactly the same speed multipliers the FairWinds sim uses, so your routed times will match the race.

**Download:** [fw.polwave.csv](/assets/fw.polwave.csv)

The file encodes the speed multipliers by TWA and wave height (in metres):

| TWA | 0–2 m | 3 m | 4 m | 5 m+ |
|-----|-------|-----|-----|------|
| 0–90° (upwind) | No effect | −6% | −8% | −10% |
| 100–180° (downwind) | No effect | +6% | +8% | +10% |

In order for waves to be consdiered in your route

1. The waves polar must be installed and

2. A wave grib file must be loaded. The active wave gribs provided on the https://fairwinds.world/wind page.

   ![waves1](/images/waves1.png)

   ![waves2](/images/waves2.png)

### QTVLM Installation

> **Note:** There is a bug in QTVLM — it won't import the file directly through the UI in the 'Import' button. You have to place it manually in the Applications/QTVLM/polars directory and restart QTVLM for the option to appear.

