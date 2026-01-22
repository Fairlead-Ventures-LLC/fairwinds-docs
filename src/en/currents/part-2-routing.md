---
layout: base-en.html
title: Currents Part 2 - How to Route with Currents
---

# Currents - Part 2: How to Route with Currents

<p class="lead">By far, the biggest mental adjustment in routing with currents in FW, QTVLM or Expedition is to understand one thing - the route 'line' is NOT your heading anymore. It's the optimal path that your boat should take over ground to get where you want to go.</p>

---

## The Critical Mental Shift

### Route Line ≠ Heading

The route line shows the **optimal path over ground**, not your compass heading.

When currents are involved, your boat must point in a different direction than the route line to compensate for the current pushing you sideways.

---

## Step 1: Generate Your Route

You generate this route by loading **both the wind AND the current GRIB** for the time period and then running a route as usual.

### Where to Get Currents

The currents are found on the same wind page:

**[https://fairwinds.world/wind](https://fairwinds.world/wind)**

### Process

1. Download the wind GRIB for your race period
2. Download the current GRIB for the same region/period
3. Load both into your router (FW, QTVLM, or Expedition)
4. Run your route as normal

The router will calculate the optimal path considering both wind and current vectors.

---

## Step 2: Steering Your Boat

Once you have the route, the next problem is... **how do I steer my boat so that it 'stays on the line'?**

There are two main approaches:

---

## The Easy Way: Let FairWinds Do It

### Compensated Heading

FairWinds has the concept of a **wind+current reckoning line** and a **'compensated heading'**.

### How It Works

1. **Activate your route** in FairWinds
2. FW will figure out the **'compensated heading'** for you
3. This positions your point of sail so that your wind+current reckoning line moves you along the route to the next waypoint
4. It essentially **reverse engineers** the calculations that the router does to produce the route

### Performance

It's pretty good unless you go head to wind in your route. **Don't do that.**

---

## The Medium Way: Scheduled Waypoints

### Full Control Method

1. **Import your route as a reference**
2. Create a **scheduled set of waypoints** over that route based on the current+wind reckoning path
3. This gives you total control and predictability

### When to Use This

If you want **total control and predictability**, this is the way.

This method requires more manual work but gives you complete oversight of your navigation plan.

---

## ⚠️ Important Warnings

### Rule #1: Avoid Head-to-Wind Routes

**Don't make routes where the compensated heading goes head to wind, especially in strong currents.**

### Why This Matters

- In strong currents, the compensated heading can become extreme
- If the route requires you to point into the wind to compensate for current, your boat will stall
- The router may suggest an "optimal" path that's physically impossible to sail

### Be Patient

**It will take time to learn how to create and read new routes with currents.**

Expect a learning curve as you develop intuition for:
- How currents affect your heading
- When compensated headings become impractical
- How to read the difference between route lines and reckoning lines

---

## Visual Indicators in FairWinds

### Route Line (Blue)
The optimal path over ground calculated by the router

### Reckoning Line (Orange/Red)
Your actual projected path considering:
- Current heading
- Wind speed and direction
- Current speed and direction
- Boat polars

### Compensated Heading
When a route is activated, FW adjusts your heading so the reckoning line follows the route line

---

## Tips for Success

### Start Simple
- Begin with races in moderate current regions
- Practice with the English Channel before tackling the Gulf Stream

### Check Your Compensated Heading
- After activating a route, verify your heading makes sense
- If you're pointing more than 60° from your destination, investigate

### Use Reference Routes
- Keep your router-generated route as a reference
- Create manual waypoints based on what you learn

### Monitor Grib Cutovers
- Remember: forecasts update every 6 hours (00, 06, 12, 18z)
- Currents can change significantly with new data
- Your compensated heading may need adjustment

---

## Common Mistakes

### 1. Ignoring the Reckoning Line
**Problem:** Following the route line with your heading instead of letting FW compensate

**Solution:** Activate the route and trust the compensated heading

### 2. Head-to-Wind Routes
**Problem:** Router suggests a path that requires pointing into the wind

**Solution:** Add intermediate waypoints or adjust your route strategy

### 3. Not Loading Currents
**Problem:** Routing with wind only in a current region

**Solution:** Always load both wind AND current GRIBs for current regions

### 4. Forgetting Forecast Updates
**Problem:** Currents change at grib cutover but route isn't updated

**Solution:** Re-run your route after major forecast updates

---

## Next Steps

- **Part 3:** Advanced current strategies and tactics
- Practice in the English Channel practice races
- Join the FairWinds community to share current routing tips

---

## Key Takeaways

1. **Route line = path over ground**, not your heading
2. Load **both wind AND current GRIBs** from fairwinds.world/wind
3. **Easy mode:** Let FW calculate compensated heading automatically
4. **Medium mode:** Use scheduled waypoints for full control
5. **Never route head-to-wind** in strong currents
6. **Be patient** - currents add significant complexity!
