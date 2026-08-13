---
layout: base-en.html
title: Daily Fixes
---

# Daily Fixes

<p class="lead">The Daily Schedule in the Sky Tool Workbook — when to shoot, and which FairWinds buttons to press.</p>

← Back to [Celestial Navigation](/en/guides/celestial-navigation/)

---

Open the **Sky Tool** → **Workbook**. Above the tabs you’ll see **Solar Times** (Sunrise / Sunset / Mer. Pass.) and the **Daily Schedule** checklist. The schedule is a guide, not a gate — you can take sights anytime.

> **If you only do one thing: get a twilight fix.** Dawn and dusk are when stars and horizon are visible together. Two or three stars on the **Stars** tab, reduce to LOPs, **Compute Fix**, **Save Fix**.

---

## Types of fixes

| Step | Window (Daily Schedule) | What you do in FairWinds | Required |
|---|---|---|---|
| [AM Twilight Star Fix](/en/guides/days-work/am-stars/) | Dawn → Sunrise | Stars tab → LOPs → Compute Fix → Save Fix | Optional |
| [Sunrise Longitude Fix](/en/guides/days-work/sunrise-lon/) | Sunrise ±10 min | Sun sight at Hs ≈ 0° (**RISE**) → Save to Log | Optional |
| [AM Sun Sight](/en/guides/days-work/am-sun/) | Sunrise → Noon window | Sun tab morning sight (**AM**) — keep for Sun-Run Fix | **Yes** |
| [Noon Sight](/en/guides/days-work/noon/) | LAN ±15 min | Highest **NOON** sight → Compute Lat/Lon → Save to Log | **Yes** |
| [PM Sun Sight / Running Fix](/en/guides/days-work/pm-sun/) | Noon → Sunset | PM sight, then select AM+PM → Compute Running Fix | **Yes** |
| [Sunset Longitude Fix](/en/guides/days-work/sunset-lon/) | Sunset ±10 min | Sun sight at Hs ≈ 0° (**SET**) → Save to Log | Optional |
| [PM Twilight Star Fix](/en/guides/days-work/pm-stars/) | Sunset → Dusk | Stars tab → LOPs → Compute Fix → Save Fix | Optional |

The schedule also lists **Sun-Run Fix** as its own checklist row (after PM Sun Sight) and an optional **Night Fix** after dusk.

---

## How they fit together in FairWinds

**Daytime sun path**

1. **AM Sun Sight** — morning LOP
2. **Noon Sight** — meridian altitude → lat/lon via the Sun Worksheet
3. **PM Sun Sight** — afternoon LOP
4. **Sun-Run Fix** — select the AM + PM sights → FairWinds advances the AM LOP by your boat track and crosses it with the PM LOP

That is **sun-run-sun**, not “advance the morning line to noon latitude.” Noon is its own Save to Log fix; the running fix is AM↔PM.

**Twilight path**

Dawn and dusk star fixes are independent of the sun chain. One good multi-star fix can reset a drifted DR completely.

Saved fixes and lon/noon/sun-run marks show in the race viewer **Positions** panel — use them as the start of your next DR.

---

## Workbook cheat sheet

| Tab | Use for |
|---|---|
| **Sun** | Sun Sights, badges (**AM** / **PM** / **NOON** / **RISE** / **SET**), Sun Worksheet |
| **Stars** | Star sights, Saved LOPs, Compute Fix |
| **Fixes** | Enter Fix / Enter DR (especially Expert mode) |

[The Sky Tool — full guide →](/en/guides/sky-tool/) · [Guided vs Expert →](/en/guides/navigation-modes/)

---

## Step-by-step guides

- [AM Twilight Star Fix](/en/guides/days-work/am-stars/)
- [Sunrise Longitude Fix](/en/guides/days-work/sunrise-lon/)
- [AM Sun Sight](/en/guides/days-work/am-sun/)
- [Noon Sight](/en/guides/days-work/noon/)
- [PM Sun Sight / Running Fix](/en/guides/days-work/pm-sun/)
- [Sunset Longitude Fix](/en/guides/days-work/sunset-lon/)
- [PM Twilight Star Fix](/en/guides/days-work/pm-stars/)
- [Picking Stars for a Fix](/en/guides/days-work/star-selection/)
