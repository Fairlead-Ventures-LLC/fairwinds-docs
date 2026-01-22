---
layout: base.html
title: Boat Polars
---

# Boat Polars

<p class="lead">Understand how boat performance is modeled in FairWinds using polar diagrams.</p>

---

## What Are Polars?

A polar diagram is a graph that shows a boat's speed at different wind speeds and angles. It's the fundamental data that determines how fast your boat will sail in any given conditions.

### Key Components

- **Wind Speed**: True wind speed (horizontal axis or concentric circles)
- **Wind Angle**: Angle between boat heading and true wind (radial axis)
- **Boat Speed**: Predicted speed through water (values or contour lines)

---

## Reading Polar Diagrams

### Polar Plot Format

In a typical polar diagram:

- **Center**: The boat's position
- **Radial Lines**: Wind angles (0° = upwind, 180° = downwind)
- **Concentric Circles**: Boat speed in knots
- **Curves**: Each curve represents a different true wind speed

### Example: IMOCA 60

At 12 knots of wind:

| Wind Angle | Boat Speed |
|------------|------------|
| 45° (close-hauled) | 9.5 knots |
| 90° (beam reach) | 14.2 knots |
| 135° (broad reach) | 15.8 knots |
| 180° (running) | 12.3 knots |

---

## Boat Classes

FairWinds includes accurate polars for multiple boat classes:

### IMOCA 60

- **Type**: Open 60-foot offshore racer
- **Characteristics**: Fast, foiling capable
- **Best Conditions**: Strong winds, open ocean
- **Top Speed**: 30+ knots

### TP52

- **Type**: High-performance grand prix racer
- **Characteristics**: Excellent upwind, crew-intensive
- **Best Conditions**: Coastal racing, varied conditions
- **Top Speed**: 20+ knots

### Class40

- **Type**: 40-foot offshore racer
- **Characteristics**: Versatile, good all-around performance
- **Best Conditions**: Medium-distance races
- **Top Speed**: 25+ knots

### Figaro Beneteau 3

- **Type**: One-design offshore racer
- **Characteristics**: Equal performance, skill-based
- **Best Conditions**: Fair competition
- **Top Speed**: 18+ knots

---

## Performance Factors

### Velocity Made Good (VMG)

VMG is the component of boat speed in the direction of your target:

```
VMG = Boat Speed × cos(angle to target)
```

**Key Concept**: The fastest point of sail isn't always the fastest route to your destination.

### Optimal Angles

For each wind speed, there are optimal angles for:

- **Upwind VMG**: Best angle when sailing toward the wind (typically 40-50°)
- **Downwind VMG**: Best angle when sailing away from the wind (typically 140-150°)

---

## Factors Affecting Performance

### Sea State

Wave conditions impact boat speed:

- **Flat Water**: Polars are most accurate
- **Moderate Seas**: 5-10% speed reduction
- **Heavy Seas**: 10-20% speed reduction

FairWinds adjusts performance based on wave forecasts.

### Current

Ocean currents add or subtract from boat speed:

- **Favorable Current**: Increases speed over ground
- **Adverse Current**: Decreases speed over ground
- **Routing Impact**: Can change optimal route significantly

---

## Using Polars for Strategy

### Tacking Upwind

When sailing upwind:

1. Find optimal upwind VMG angle (e.g., 45°)
2. Tack when wind shifts or to avoid obstacles
3. Minimize time spent tacking (speed loss)

### Jibing Downwind

When sailing downwind:

1. Find optimal downwind VMG angle (e.g., 145°)
2. Jibe to maintain optimal angle
3. Consider current when choosing which jibe

### Reaching

On a reach (wind from the side):

- Often the fastest point of sail
- Minimal course changes needed
- Maximize time at these angles

---

## Custom Polars

For advanced users and developers:

### Polar File Format

Polars are stored in CSV format:

```csv
TWA,TWS_6,TWS_8,TWS_10,TWS_12,TWS_14
0,0,0,0,0,0
45,6.2,7.8,9.1,9.5,9.8
52,6.8,8.5,10.2,11.1,11.8
60,7.5,9.4,11.5,13.2,14.5
...
```

- **TWA**: True Wind Angle
- **TWS_X**: True Wind Speed at X knots
- **Values**: Boat speed in knots

---

## Next Steps

- Learn about [routing strategies](/concepts/routing/)
- Understand [weather data](/concepts/weather/)
- Explore [race formats](/concepts/races/)
