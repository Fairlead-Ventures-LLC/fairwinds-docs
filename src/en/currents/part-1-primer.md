---
layout: base-en.html
typora-root-url: ../..
title: Currents Part 1 - A Primer
---

# Currents - Part 1: A Primer

<p class="lead">FairWinds now integrates currents + wind in several 'fun' current regions of the world - the English Channel + Ireland, the Gulf Stream along the entire western Atlantic, the infamous Agulhas around Africa to Madagascar, the Kuroshio from Hong Kong to Japan, and the entire Eastern Australian current.</p>

Successfully navigating these famous, fast moving bodies of water has been the difference between life and death for navigators over hundreds of years. Even with modern routing tools, the addition of currents adds another layer of complexity and skill that requires navigators to level up their navigation game.

---

## TWA vs AWA: A Critical Difference

All routers integrate currents on a **TWA basis, not AWA**. This is different in real-life, where your AWA would be affected by the current.

### Real-Life Example

Going upwind at 45° in 10 knots TWS with a 3 knot current behind you would increase the apparent wind speed and angle as you were 'pushed' into the wind.

### Why Routers Use TWA

**It is just not possible to route in AWA or AWS.** As one navigator says, *"True wind gets you home"*.

---

## How Current Calculations Work

The current vector (direction and speed) on the boat is applied to a calculated boat speed and direction at a given wind at time and location.

### The Process

**a.** Boat is at time 0 and location 0

**b.** Calculate boat position at time 1 given wind and polars at time 0

**c.** Calculate current at location 0 and add the vector to the projected boat position

**d.** Move boat from position 0 to position 1 (the combined wind + current vectors)

### Classical Navigation

In classically trained navigation, this is how all dead reckoning works with currents. If you've ever done DR paper charting, **these are the triangles you draw on the charts**.

---

## FairWinds High-Fidelity Calculation

FairWinds does this calculation on a **per minute basis**. It's why the reckoning line is so high fidelity.

### Why This Matters

This minute by minute projection is kind of cool and novel. 

**Comparison with MFDs:** B&G, RayMarine's and all other MFDs do a really brute force calculation on your projected reckoning line based on the **observed current in the moment** (it's all it knows from the boat's instruments), instead of projecting the currents in the future.

**Result:** It's one reason on MFDs you get these projected lay lines and reckoning lines that are inaccurate or constantly bouncing as you get closer to them in strong variable currents.

---

## Data Quality and Processing

Integrating currents into virtual sailing has some limitations - namely the **resolution and availability of the current data itself**.

### Coastline Clipping

Models tend to 'clip' around the coastlines or land features.

### FairWinds Solution

To compensate for this, the FW weather processing creates a **smoother interpolated version** of the current GRIBs which creates a much nicer field around coastlines.

**Quality:** No one will probably notice but they are so much better; these GRIBs are available in the /wind page and used in the viewer and simulator and tested with QTVLM and Expedition.

---

## Current Regions in FairWinds

FairWinds includes currents in these major regions:

- **English Channel + Ireland** - Complex tidal currents
- **Gulf Stream** - Entire western Atlantic
- **Agulhas Current** - Africa to Madagascar (infamous for its strength)
- **Kuroshio Current** - Hong Kong to Japan
- **East Australian Current** - Full eastern coast

---

## Next in This Series

- **Part 2:** How to Route with Currents in FairWinds
- **Part 3:** Advanced Current Strategies

---

## Key Takeaways

1. Routers use **TWA, not AWA** for current calculations
2. FairWinds calculates currents **minute by minute** for high fidelity
3. Current vectors are **added to wind vectors** for dead reckoning
4. FairWinds uses **smoothed, interpolated GRIBs** for better coastal accuracy
5. Currents add significant complexity - **level up your navigation game!**
