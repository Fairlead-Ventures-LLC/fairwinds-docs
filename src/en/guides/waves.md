---
layout: base-en.html
typora-root-url: ../..
title: Waves and Boat Speed
---

# Waves and Boat Speed

<p class="lead">FairWinds models real ocean wave conditions using live GFS wave forecasts. When significant wave height exceeds 3 metres, your boat speed is affected — upwind is harder, downwind you can surf.</p>

---

## How Wave Data Works

Wave heights come from the **GFS Wave model** (0.5° resolution), the same global forecast system used by professional routing tools. FairWinds fetches the significant wave height field (Hₛ) and interpolates it to your exact position and time using bilinear spatial interpolation and linear time interpolation between forecast steps.

The wave forecast updates daily at 06 UTC. Below 3 m significant wave height, there is no speed effect — typical open ocean racing conditions. The effect only kicks in when seas are genuinely rough.

Waves are enabled on a per-race basis by the race creator. If your race has waves active, you'll see a wave panel in the instruments.

---

## Speed Effects

Wave effects are multiplicative — applied on top of your polar boat speed for the current wind. Motor propulsion is not affected, only sail.

The effect depends on two things: **how big the waves are** and **whether you're going upwind or downwind** (split at 90° TWA).

| Significant wave height | Upwind (TWA ≤ 90°) | Downwind (TWA > 90°) |
|------------------------|-------------------|---------------------|
| Below 3 m              | No effect         | No effect           |
| 3 – 4 m                | −6%               | +3%                 |
| 4 – 5 m                | −8%               | +4%                 |
| 5 m and above          | −10%              | +5%                 |

Going upwind in heavy seas is a grind — you're punching into the swell. Going downwind, you get to surf, picking up a small but real speed bonus.

---

## Reading the Wave Panel

The wave panel in the race viewer shows:

- **Wave height** — significant wave height at your current position in metres, sourced from the GFS wave GRIB and updated each minute.
- **Speed with wave effect** — your actual boat speed after the multiplier is applied.
- **Polar speed** — what your speed would be from the polars alone, without wave effect.
- **Effect indicator** — green "Surfing +N%" when you're getting a downwind bonus, red "Wretching N%" when you're taking an upwind penalty.

The highlighted row in the reference table shows which wave band you're currently in.

---

## Notes

- Wave effects are opt-in per race — most races do not have them enabled.
- The effect is applied sail-only. Motoring through big seas is unaffected.
- Route mode and scheduled waypoints both respect the wave multiplier when calculating segment speeds.
- If wave data is unavailable for your position or time window, the multiplier defaults to 1.0 (no effect).

---

## Routing with Waves in QTVLM

To factor wave effects into your QTVLM routes, you need to load the FairWinds polar wave file. This tells QTVLM exactly the same speed multipliers the FairWinds sim uses, so your routed times will match the race.

**Download:** [fw.polwave.csv](/assets/fw.polwave.csv)

The file encodes the speed multipliers by TWA and wave height (in metres):

| TWA | 0–2 m | 3 m | 4 m | 5 m+ |
|-----|-------|-----|-----|------|
| 0–90° (upwind) | No effect | −6% | −8% | −10% |
| 100–180° (downwind) | No effect | +3% | +4% | +5% |

### Installation

> **Note:** There is a bug in QTVLM — it won't import the file directly through the UI. You have to place it manually in the QTVLM polars directory and restart.

1. Move `fw.polwave.csv` into the QTVLM polars folder:
   `/Applications/qtvlm/polar/`

2. Restart QTVLM.

3. Open: **Bateau → Paramètres**

4. Go to: **Paramètres vagues, rafales et densité de glace**

5. Select **fw.polwave.csv** from the dropdown.

*Add screenshots here.*
