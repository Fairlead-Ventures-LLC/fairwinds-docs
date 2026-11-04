---
layout: base-en.html
typora-root-url: ../..
title: Squalls
---

# Squalls

<p class="lead">Squalls are small, fast-moving cells of rain and gusty wind that sit on top of the forecast wind. The forecast is smooth; real trade-wind sailing is not. FairWinds adds squalls as individual cells that change the wind your boat actually feels, so you can see one coming, steer around it, or choose your moment to go through.</p>

Squalls are enabled per race by the race creator. If your race has them, you'll see them on the chart and in your wind readout.

---

## Why squalls

Weather models see the wind on a grid much coarser than a trade-wind squall, so they miss these cells entirely. Yet squalls are the main short-term weather a skipper in the trades has to manage, and fleets crossing the Atlantic regularly report gusts far above the forecast.

---

## What a squall does to your wind

Each squall is a self-contained cell with a position, a motion, a strength and a life cycle. Its effect is added to the background wind as an outflow: air is drawn toward the cell while it grows, then pushed out of it once the downdraft reaches the sea.

Because the cell adds to the wind rather than simply scaling it, it can speed the wind up, turn it, cancel it, or even reverse it. Where you are relative to the cell decides what you feel:

| Where you are | What you feel |
|---|---|
| Just ahead of the cloud | A lull and a pull toward the cell as the inflow band draws air in, then the gust front |
| Ahead of the squall | A short, fast ride. The outflow adds to the trade |
| To one side | Moderately stronger wind, with a clear shift one way |
| To the other side | A shift the opposite way |
| Behind the squall | Light, fluky air. The outflow cancels the trade |

The shifts, the gust front and the hole behind the cell all come naturally from this. They are not scripted.

### The inflow band ahead of the cloud

A real squall is fed by warm, moist air drawn in at the surface just in front of it. The cold outflow wedges under that air and lifts it, which keeps the updraft going. FairWinds models this as a **thin band of inflow hugging the leading edge** of the cell, on the side it is moving toward.

- **On approach** the wind eases and bends toward the cell. This is the lull sailors learn to watch for.
- **At the gust front** the inflow meets the outflow, and the wind changes sharply.
- **It follows the cloud's edge**, so it curves round the front of the cell rather than sitting out ahead as a separate patch. It fades out round the flanks, and there is none behind the cell.
- **It runs for most of the cell's life**, from the gust front through the mature stage, and fades with the outflow.
- **Beyond the front the outflow stops** on the leading side. Behind and to the sides the outflow keeps its full reach.

A cell with no track has no leading side, so it has no inflow band.

---

## Life cycle

Every squall passes through the same stages:

| Stage | What happens |
|---|---|
| Growing | Air is drawn toward the cell. Lighter, shifty wind ahead of it |
| Gust front | The downdraft hits the sea and the wind rises, smoothly and without jumping. The inflow band forms ahead of the cloud |
| Mature | Full outflow, with the inflow band holding just ahead of the leading edge |
| Decaying | The outflow fades |
| Cold pool | The cell is gone but leaves a patch of lighter air that slowly recovers |

Cells come in different strengths. Stronger ones are bigger, gustier and last longer.

### Watching a squall go through its stages

You can learn to read a squall from the chart and from your own instruments. Here is what each stage looks like and what to do about it:

| Stage | On the chart | On your instruments | What to do |
|---|---|---|---|
| **Growing** | A small, pale outline that gets bigger | Wind eases and shifts toward the cell as it draws air in | Plenty of time. Decide whether to go around it |
| **Gust front** | The outline darkens and its leading edge sharpens | A lull and a pull toward the cell, then the wind rises quickly but smoothly | This is the moment to be on the right side of it |
| **Mature** | A dark, solid cell with its contours at their widest | Strongest wind ahead and to the sides, lightest behind | Stay ahead or to the side, avoid the back |
| **Decaying** | The outline turns dashed and ragged | The outflow fades and the gusts settle | The cell is losing its punch, so passing through it costs less |
| **Cold pool** | A faint tint where the cell was | Lighter wind that slowly recovers | Avoid parking in it. Sail out toward the stronger breeze |

A good way to learn is to pick one cell and follow it from start to finish with the wind overlay on. Check the contours as it matures, and compare what your boat does on each side.

### Where a squall goes

A squall is carried along by the wind, but not exactly with it. Its track is turned **30° off the wind direction**: to the **right** in the northern hemisphere and to the **left** in the southern. So in a steady trade from the east, a cell in the north Atlantic heads a bit **north** of west, not straight downwind. Cells also travel a little **faster than the surface wind**, as real trade-wind squalls do, within a limited range. A cell in light air still creeps along, and one in a strong breeze does not run away.

Because a squall is only a little faster than the wind, a quick boat sailing downwind can stay in the strong air ahead of the cloud for a long time. A slower boat gets one pass, so how you leave the squall matters.

This helps you predict where it will be in the next hour. Look at the wind arrows, add the 30° turn, and you have its likely path. That is how you decide which side to pass.

---

## What you see

- **The cloud:** an irregular outline, sharper on the side the cell is heading toward. It is never a plain circle.
- **Wind-change contours:** lines showing where the squall noticeably changes the wind. The effect reaches beyond the cloud, as real outflow does: the gust front ahead, the shifts at the sides, and the hole behind.
- **Phase:** a pale, small outline for a growing cell, a dark solid cell for a mature one, and a dashed outline when it is decaying.
- **Wind arrows, gradient and particles** all show the squall wind, so the map and your instruments agree.

What you see is exactly what the simulator sails you through. There is no separate "visual" squall.

**Visibility.** You see squalls around your own boat, out to the visibility range set for the race. Cells farther away are hidden, as they would be from a boat with no radar. In the open Atlantic that is usually a handful of cells at once.

---

## Where squalls come from

There are two sources, combined into one set.

### Real storms from satellite

FairWinds regularly looks at live infrared satellite imagery. Tall storm clouds have very cold tops, and the colder the top, the stronger the squall. Smaller, warmer trade-wind cells become lighter squalls. This part of the set is observed rather than modelled, and it works best where the satellite has a clear view.

### A weather-informed synthetic field

Ordinary trade-wind squalls are low clouds that never get cold enough to show up in infrared, and no free real-time data sees them over the open ocean. So FairWinds also generates lighter squalls from the same forecast that drives the wind, placing them where the meteorology says trade-wind showers are likely.

This synthetic field is a **climatology-informed simulation, not an observation**. It does not predict the position of any real cell. Where a real satellite cell exists, the real one takes priority and nearby synthetic cells are dropped.

Everyone sees the same cells. The field is generated in a repeatable way, so every player and every spectator gets the same sky for the same hour.

---

## The weather behind it

The synthetic field follows the broad physics of trade-wind showers:

- **Trade-wind air only.** Squalls are placed in tropical and subtropical air. They fade out toward higher latitudes, and you will never meet one in the far north or south. Fronts and tropical cyclones are left out, because those are different weather.
- **Moist air.** More moisture in the lower atmosphere gives more and heavier cells, and cold pools organise best when moist low-level air sits under drier air above.
- **Not every day is the same.** Calm, unstable days tend to be quieter, and steadier trades tend to be livelier. Light wind does not rule squalls out.
- **Time of day.** Squalls are slightly more common before dawn than in the early afternoon.
- **Clusters.** Cold pools trigger new cells at their edge, so cells come in loose groups with open water between them.
- **A cloud is needed.** Where we have satellite imagery, a cell is dropped if the sky there is clear.

---

## Where you'll find them

For the Atlantic, squalls cover the trade-wind belt between the Canaries and Cape Verde and the Caribbean, built for races finishing in Antigua or Guadeloupe.

They are most common in the central and western trades, where the air is warm and moist. Near the African coast the air is cooler, drier and more stable, so there are fewer. On light-wind days the early part of a Canaries start can be squall-free.

---

## What this model is, and is not

- **It is a gameplay layer, not a forecast.** Cell positions are not predictions of real weather.
- **The satellite part is observed; the synthetic part is not.** The synthetic field has not been validated against satellite imagery, so read it as a plausible trade-wind sky.
- **Strength is tuned for the game,** and may be a little more persistent than the real thing.
- **No islands or land effects, no lightning, and no night-time visibility range.**
- **Routing ignores squalls.** The FairWinds router and external tools such as QTVLM do not model them, so a route can run through one. Watch the chart.

---

## Quick tips

- Cross a squall **ahead** of the cloud for a quick gain, or **to the side** to dodge it.
- Avoid the **upwind side** of a mature cell, where the wind drops.
- A **growing** cell is lighter and shiftier than a mature one. Watch which phase it is in.
- Pay attention to the **contours**: crossing them is where the wind change becomes real.
