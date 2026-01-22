---
layout: base.html
title: Weather Data
---

# Weather Data

<p class="lead">FairWinds uses real-world weather forecasts to create an authentic sailing experience.</p>

---

## Data Sources

FairWinds aggregates weather data from multiple authoritative sources:

### Wind Data

- **NOAA GFS** - Global Forecast System for worldwide coverage
- **ECMWF** - European Centre for Medium-Range Weather Forecasts
- **AIFS** - AI-powered forecasting for improved accuracy

### Current Data

- **Copernicus Marine** - Ocean current forecasts
- **HYCOM** - Hybrid Coordinate Ocean Model
- **Regional Models** - SFBOFS, IBI, and other coastal models

### Wave Data

- **WaveWatch III** - Global wave forecasts
- **Regional Models** - Coastal wave predictions

---

## Forecast Updates

Weather forecasts are updated on a regular schedule:

| Data Type | Update Frequency | Forecast Range |
|-----------|------------------|----------------|
| Wind | Every 6 hours | 10 days |
| Currents | Every 12 hours | 7 days |
| Waves | Every 6 hours | 7 days |

---

## Understanding Wind Data

### Wind Speed

Measured in knots (nautical miles per hour):

- **Light Air**: 1-3 knots
- **Light Breeze**: 4-6 knots
- **Moderate**: 7-16 knots
- **Fresh**: 17-21 knots
- **Strong**: 22-27 knots
- **Gale**: 28+ knots

### Wind Direction

- Expressed in degrees (0-360°)
- 0° = North
- 90° = East
- 180° = South
- 270° = West

### True vs Apparent Wind

- **True Wind**: Actual wind speed and direction
- **Apparent Wind**: Wind as experienced by the moving boat
- FairWinds calculates both for accurate sailing simulation

---

## Ocean Currents

Currents can significantly impact boat speed and routing:

### Current Speed

- Measured in knots
- Can add or subtract from boat speed
- Particularly important in coastal areas

### Current Direction

- Direction the current is flowing *to*
- Opposite convention from wind direction

### Strategic Considerations

- Favorable currents can save hours
- Avoid adverse currents when possible
- Current boundaries create routing opportunities

---

## Visualizing Weather

### Wind Barbs

Traditional meteorological symbols showing:

- Wind direction (shaft points downwind)
- Wind speed (flags and barbs)

### Color Overlays

Heat maps showing:

- Wind speed intensity
- Current velocity
- Wave height

### Isobars

Lines of equal pressure:

- Close isobars = strong winds
- Wide spacing = light winds
- Pressure systems affect wind patterns

---

## Weather Strategy

### Reading Forecasts

- Check multiple forecast runs
- Look for consistency
- Understand forecast uncertainty increases with time

### Planning Routes

- Identify favorable wind angles
- Avoid calm zones
- Use currents strategically
- Consider wave impact on speed

---

## Next Steps

- Learn about [routing algorithms](/concepts/routing/)
- Understand [boat performance](/concepts/polars/)
- Explore [race formats](/concepts/races/)
