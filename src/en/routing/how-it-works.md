---
layout: base-en.html
typora-root-url: ../..
title: Routing - How It Works
---

# Routing - How It Works

<p class="lead">One incredible aspect of virtual sailing is the sheer number of possible moves to make in any given minute, let alone over the course of a race. The pure decision space of virtual sailing easily dwarfs chess: even before you add shifting winds (and new forecasts every ~6 hours), the number of possible steering sequences is astronomical.</p>

Let's run a simple example.

---

## The Isochronal Router Base Loop

All isochronal routers are based on a simple but powerful base loop:

1. From the boat's current position, explore how far it would go in different directions
2. Use time, TWS and TWD at that location, and boat polars to calculate the projected positions
3. These exploratory points in all directions are called **'nodes'**

Next, advance to each next node, and do the same exploration starting from each of these thousands of nodes, projecting forward another one-minute distance in an arc of exploratory positions.

- Each row of new positions is called a **'front'**
- The time interval used to calculate the next boat position is called a **'crank'**

---

## The Decision Space Problem

The pure math on this decision space in just 60 minutes - assuming you wanted to contemplate every 1° turn in a 180° arc for each one-minute crank - is an incalculable **180^60** -- too many zeroes to write out here!

### Why This Matters

No router outside of a supercomputer can contemplate all these moves. QTVLM, FW, or Bitsailor are all making tradeoff decisions for you from a narrowed range of possibilities.

---

## How Routers Contain the Analysis

### 1. Pick Winners

If you truly kept every node in this ever-expanding 'front', the number of new nodes would grow exponentially. 

**Solution:** Draw a **'bin'** (usually some fraction of a degree) around the nodes along the latest front, and pick the winner of all those in the 'bin'. You just keep one.

All routers have some concept of a 'bucket' or 'bin' that picks the winner and only uses it as the starting location to check the next front.

### 2. Limit Angles

We don't need to explore every 1°, right? 

**Example optimizations:**
- How about every 3° of TWA?
- Remove anything that is above/below our optimal VMG
- Result: Down to about 70 angles to explore

### 3. Focus Direction

Routers reduce the node exploration space into a **'cone'** that heads towards the destination. In QTVLM they call this the **'scanning angle'**.

**Example:** If I'm heading north to my destination at 0°, but the wind is blowing from the north directly at me, I'd need to tack upwind to get there.

**Questions the router must answer:**
- Should the router explore 45° to -45° from the destination?
- Should it explore the full 180°?
- What if going backwards is actually faster if it goes away from the destination but gets better wind?

Managing progressive and situational scanning angles is actually one of the harder problems in routers:
- What if you are in a bay?
- In a canal?
- Going over the pole?
- Have a polar that doesn't go upwind?

All these impact the angle of exploration needed.

### 4. Adjusting Cranks

Another way routers try to reduce computation is by adjusting the **'crank'** interval.

It's pretty expensive to do `D = R*T` where `t = 1 minute`. 

**Optimization:** What if we take the current boat position, the wind speed and direction, and compute the distance it will be in, say... **15 minutes**? Adjusting the crank from 1 minute to 15.

**Tradeoff:** It means we'll be assuming the wind speed is constant over that time (possibly missing shifts), but only does 1 calc instead of 15.

---

## The Three Key Tradeoffs

All routers grapple with these factors to reduce computational overhead while still retaining high enough fidelity to pick 'the fastest route':

1. **Bucketing** - How to group and select winning nodes
2. **Angles to explore** - Scanning angle range
3. **Duration to project forward** - Crank intervals

All of them have tradeoffs.

---

## The Reality

Despite what many think, **there is no one perfect answer or perfect route**. It's already been simplified. 

However, there are tips to consistently picking good routes, and in the next how-to I'll discuss FW and QTVLM routers and how to use them well (I'll leave Bitsailor to Hardtack!).

---

## Next in This Series

- **Part 2:** Using FW and QTVLM Routers Effectively
- **Part 3:** Advanced Routing Strategies
