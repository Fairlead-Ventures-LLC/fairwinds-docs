---
layout: base.html
title: Routing
---

# Routing

<p class="lead">Master the art of route planning with FairWinds' advanced routing engine.</p>

---

## Overview

Routing is the process of calculating the optimal path from start to finish, considering:

- Wind forecasts
- Ocean currents
- Boat performance (polars)
- Course waypoints
- Weather systems

---

## Routing Methods

### Manual Routing

Place waypoints manually on the map:

1. Click to add waypoints
2. Drag to adjust positions
3. View estimated times for each leg
4. Refine based on weather

**Best for:**
- Short races
- Simple courses
- Learning weather patterns

### Automatic Routing

Let the routing engine calculate the optimal path:

1. Click **Auto Route**
2. Engine analyzes weather forecasts
3. Calculates fastest path
4. Displays recommended route

**Best for:**
- Long ocean passages
- Complex weather patterns
- Competitive racing

---

## Routing Algorithm

The FairWinds routing engine uses an isochrone-based algorithm:

### How It Works

1. **Start Position**: Begin at the race start
2. **Time Steps**: Calculate all reachable positions at fixed time intervals
3. **Expansion**: For each position, calculate where the boat can reach in the next time step
4. **Optimization**: Choose paths that minimize total time to finish
5. **Waypoint Constraints**: Ensure route passes required marks

### Factors Considered

- **Wind Speed & Direction**: From weather forecasts
- **Current Speed & Direction**: Ocean current data
- **Boat Speed**: Based on polar performance
- **VMG**: Velocity Made Good toward the next mark
- **Tacking/Jibing**: Optimal angles for upwind/downwind sailing

---

## Route Optimization

### Wind Angles

Understanding optimal sailing angles:

| Point of Sail | Angle to Wind | Strategy |
|---------------|---------------|----------|
| Close-hauled | 40-50° | Upwind, tacking required |
| Close reach | 60-80° | Fast and efficient |
| Beam reach | 90° | Maximum speed |
| Broad reach | 120-150° | Fast downwind |
| Running | 170-180° | Directly downwind |

### Great Circle Routes

For long distances:

- Shortest path on a sphere
- May not be fastest due to weather
- Routing engine balances distance vs. conditions

### Weather Routing

Strategic considerations:

- **Pressure Systems**: Route around lows and highs
- **Wind Shifts**: Anticipate changes in wind direction
- **Current Boundaries**: Cross at optimal angles
- **Doldrums**: Avoid or minimize time in light wind zones

---

## Route Analysis

### Estimated Time of Arrival (ETA)

The routing engine provides:

- ETA for each waypoint
- Total race duration
- Comparison with other routes

### Route Comparison

Compare multiple routing strategies:

- Conservative vs. aggressive
- Northern vs. southern routes
- Different waypoint sequences

---

## Real-time Adjustments

### During the Race

Weather forecasts update during the race:

- New forecast data arrives every 6 hours
- Routing engine can recalculate optimal path
- Adjust waypoints to adapt to changing conditions

### Manual Overrides

You can always override the routing engine:

- Add or remove waypoints
- Force specific routing choices
- Implement your own strategy

---

## Advanced Techniques

### Isochrone Analysis

View the routing engine's calculations:

- See all reachable positions at each time step
- Understand why certain routes are optimal
- Identify alternative strategies

### Weather Window Planning

For long races:

- Identify favorable weather windows
- Time your passage through challenging areas
- Avoid predicted storm systems

### Current Exploitation

Maximize benefit from ocean currents:

- Route through favorable current
- Minimize time in adverse current
- Use current boundaries strategically

---

## Next Steps

- Understand [boat performance and polars](/concepts/polars/)
- Learn about [weather data](/concepts/weather/)
- Explore [race formats](/concepts/races/)
