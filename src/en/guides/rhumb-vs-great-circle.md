---
layout: base-en.html
title: Rhumb vs Great Circle
---

# Rhumb vs Great Circle

<p class="lead">Knowing the difference between rhumb and GC lines is key to sailing the shortest distance fast. FairWinds supports both rhumb and great circle lines in mercator and globe projections. It's the only virtual sailing platform that supports such high fidelity routing tools that match real world navigation challenges.</p>

Here's a short primer on GC vs rhumb lines.

---

## The Divider Tool

The **Divider tool** (yellow triangles) in the tools menu supports both GC and rhumb-line measurements and is an excellent way to experiment with the two modes.

---

## Rhumb Line - Constant Bearing, Longer Distance

The rhumb line is a straight line connecting two points measured in x & y coordinates. Technically speaking rhumb lines are known as **'loxodromes'**.

On rhumb lines, a bearing of 80° leaving NY to the UK will still be 80° when you approach the UK. Yet while it looks more direct on a flat mercator map - **it's actually longer!**

**Example:** 3086nm to London, bearing 80° the entire way. But is that the shortest?

### Historical Context

Traditionally, in the days before GPS, sailors used rhumb line navigation because it was much simpler to follow, sacrificing some distance for ease of navigation. 

I still hear people say things like *"turn left at the point and then it's 230° for 2000 miles."* Well, not anymore, unless you want to sail a longer distance.

---

## Great Circle - Changing Bearing, Shorter Distance

The great circle line connects two points but follows the earth's curvature. This is technically known as the **'orthodrome'**. 

If you are looking at a mercator map, the GC line will appear curved and visually 'longer', even though **it's actually shorter distance!**

A key difference in GC routes is that as you follow this line your **bearing to the final destination will change**.

**Example:** NY to London distance is now **2974nm** following GC, and notice how the bearing changes as you navigate the route.

---

## Navigating in FairWinds

FairWinds always routes your boat following **great circle calculations** and the reckoning line will always draw using GC calculation. 

**But this means a straight line rhumb route and your reckoning line won't follow the same path!**

### Rule of Thumb

If you have waypoints that are separated by **5nm or more**, a rhumb line route line and the reckoning line will start to deviate. This is much more pronounced at:
- Higher latitudes
- Longer waypoint distances

---

## Common Examples

### Long Distances

**Navigating to Hawaii on 1 waypoint** (extreme example of long distances between waypoints).

In this example the route is activated and the boat is heading towards a single waypoint, over 2000nm away. Notice that the blue route line is set to 'rhumb'. 

**You can see the boat looks like it's heading in the wrong direction!** 

But actually it's navigating to the destination using the GC route. FW will automatically route your boat and change your heading along the fastest path. 

Now, if we change the route line to draw using the 'great circle' - **voila!** - this is the path the boat will actually follow.

### High Latitudes

**"I crashed in the Arctic, why!?"**

The precision of GC vs rhumb lines is most important when sailing at high latitudes.

**Example:** In Nunavut (~75°N latitude), the blue line carefully draws a rhumb line route that skirts Byam Island. But notice how the reckoning line traces the actual route and shows a collision! 

You have to be careful! You have two options:
1. Modify the setting to draw route lines in great-circle too
2. Make shorter segments

The nice thing is crash detection will catch most of these situations for you, but it's all too easy to rely on the route lines without ensuring they are showing the correct path.

---

## Summary

Clear as a muddy rudder? The divider tool is a really great way to explore these differences.

### My Advice

- Keep **crash detection enabled** in higher latitudes
- Be sure to check **rhumb and GC route lines** when traversing long distances between waypoints at high latitudes
- Use the **divider tool** to experiment and understand the differences
- Remember: **FairWinds always navigates using great circle** calculations

⛵ Safe sailing!
