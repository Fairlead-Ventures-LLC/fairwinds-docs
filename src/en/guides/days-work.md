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

## Position reference, DR and the run

Every sight is stamped with a **DR position** the moment you save it: the position shown under **Reference from / AP Selection** at the top of the nav drawer. That stamp is what the Sun Worksheet uses for everything that depends on where you were, and it is the single biggest factor in whether a sun-run fix comes out right. The stamp is fixed once saved; changing the dropdown later does not rewrite old sights.

What each dropdown choice resolves to, and whether it moves with the boat:

| Dropdown option | Position stamped on the sight | Moves between sights? |
|---|---|---|
| **GPS — current position** (Guided only, default) | The boat's true position at the time of the sight | Yes — the true track |
| **Auto — DR projected** | Your latest DR mark, advanced along its course and speed to the time of the sight | Yes — along the DR course/speed |
| **Auto — Latest DR** (mark without course/speed) | That DR mark's position, unmoved | No |
| **Auto — Latest fix** | Your most recent fix, unmoved. Auto picks a fix over a DR mark whenever the fix is newer | No |
| **Auto — Start position** | The start line | No |
| A specific fix, DR mark, or Start line | That mark's own position, unmoved | No |

The rule is simple: **only GPS and a DR mark with course and speed move.** A fix never does, even in Auto. So in Expert, the moment you save a fix, Auto switches from projecting your DR to holding that fix still, and it stays still until you lay a new DR mark from it.

What each sun sight does with the stamp:

- **AM and PM sun sights** — the stamp is the assumed position for Hc, Zn and the intercept, and the **run** between two sights is simply the difference between their two stamps. FairWinds does not read your log or the boat's speed; it subtracts one DR position from the other. With GPS the run is the true net displacement, so course changes between sights do not matter. With a projected DR mark the run is the course and speed on that mark, so lay a fresh DR mark whenever course or speed changes. With a static reference both sights carry the **same** stamp, the run is zero, the AM line is never advanced, and the fix lands roughly the whole day's run away from the truth.
- **Noon sight** — latitude comes from Ho and declination, longitude from the time; the stamp only decides whether the sun is north or south of you. A stale DR does not hurt a noon fix.
- **Sunrise / sunset longitude** — the stamp supplies the **latitude** for the hour-angle solution. A latitude error in the reference becomes a longitude error, so this sight is only as good as your latitude at the time.

**Before the first sun sight of the day in Expert, lay a DR mark from your latest fix with your course and speed.** Then Auto reads *DR projected* all day, every sight's stamp moves with you, and the sun-run fix corrects that DR the way it is meant to.

## Sight time

The sky in FairWinds runs on the sky clock: with **1s** selected in the top bar it advances every second; with **1m** it jumps forward at each minute boundary. A sight's UTC is the sky clock at the instant you press **Mark** (or **Acquire** for a body under 5°, where there is no alignment step). Hs, Hc and Zn are all evaluated for that same instant, so it does not matter how long you leave the result card open before **Save**, and it does not matter how long you spend aligning — the body is re-read at Mark.

Use **1s** for anything where timing matters: the noon longitude moves 15′ for every minute, and a horizon sight changes about 1′ of altitude every four seconds.

---

## Workbook cheat sheet

| Tab | Use for |
|---|---|
| **Sun** | Sun Sights, badges (**AM** / **PM** / **NOON** / **RISE** / **SET**), Sun Worksheet |
| **Stars** | Star sights, Saved LOPs, Compute Fix |
| **Fixes** | Enter Fix / Enter DR (especially Expert mode) |

[The Sky Tool — full guide →](/en/guides/sky-tool/) · [Guided vs Expert →](/en/guides/navigation-modes/) · [Expert setup →](/en/guides/navigation-modes/#expert-setup)

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
