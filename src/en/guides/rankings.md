---
layout: base-en.html
typora-root-url: ../..
title: Rankings and Scoring
---

# Rankings and Scoring

<p class="lead">FairWinds Ranking scores every finish with a simple formula, then builds Season championships and a rolling World Ranking from official series. Per-series discards apply in both — so the races that count in a series are the same ones that count toward World.</p>

Live standings: [fairwinds.world/results/rankings](https://fairwinds.world/results/rankings)

---

## Two Views

| View | What it covers | Window |
|------|----------------|--------|
| **Season** | Official series assigned to a championship season | That season's calendar |
| **World Ranking** | All official series | Rolling **12 months** |

Both use the same points formula, the same Gold / Silver / Bronze tiers, and the same per-series discard rules. World Ranking also requires **more than one** scored race to appear (filters one-and-done sailors).

World Ranking is currently in **BETA**. All world ranking will be reset and restart **1 September 2026**.

Individual and team tables are available for both views. Team points are the sum of member boat points earned while racing under that team.

---

## Points Formula

```
Points = EventGrade / position^0.15 × ln(N)
```

| Symbol | Meaning |
|--------|---------|
| **EventGrade** | Prestige of the race tier (see below) |
| **position** | Finish place (1 = winner) |
| **N** | Fleet size = finishers + DNFs (DNS does not count) |
| **0.15** | Softens place gaps — 2nd earns about **90%** of 1st |

`ln(N)` scales points up for bigger fleets and is self-limiting — no separate fleet-size cap is needed. Races with fewer than 2 scored boats award **0** points.

---

## Race Tiers (EventGrade)

Official series are assigned a ranking tier when they are linked to a season. That tier sets EventGrade for every race in the series:

| Tier | EventGrade | Relative value |
|------|------------|----------------|
| **Gold** (Premier) | 250 | A Gold win is worth **5×** a Bronze win |
| **Silver** (Open) | 150 | |
| **Bronze** (Sprint) | 50 | |

Tier is about championship weight, not a global “best of N” portfolio. There is no separate 50% aging year and no worldwide top-20 list — FairWinds is not VSR-style best-of.

---

## Per-Series Discards

Within each series, each sailor may drop their worst result(s) by **points**:

| Scored races by that sailor in the series | Discards |
|------------------------------------------|----------|
| 1–4 | 0 |
| 5–7 | 1 (keep best remaining) |
| 8+ | 2 |

Rules that matter:

- Discards are **per series**, not across the whole World Ranking.
- The drop is the race with the **lowest points**, not a manually chosen race.
- **Season and World both use these counted races.** A throwaway inside a series does not pad World Ranking.
- Across different series, counted races still **add up** — there is no global top-N cherry-pick of easy events.

### Example: five-race series, one discard

| Sailor | Results | Scored | Kept for Season & World |
|--------|---------|--------|-------------------------|
| Joe | 1, 2, 3, 4, 5 | 5 | **1, 2, 3, 4** (drops 5) |
| Bob | DNS, 1, 1, 3, 3 | 4 | **1, 1, 3, 3** (no discard — needs ≥5 scored) |

Joe sailing the fifth race does not earn a free extra World contribution once that race is discarded. Bob’s DNS never enters the tally, so he does not “earn” a discard for skipping.

If Bob had **DNF** instead of DNS on the first race, he would have five scored results, drop the DNF, and keep **1, 1, 3, 3**.

---

## Finish Statuses

| Status | Effect |
|--------|--------|
| **Finished** (crossing) | Scored at finish position |
| **DNF** (including collision, quit, abandoned, timeout) | Scored as last-finisher position **+ 1**; usually the discard candidate |
| **DNS / no entry** | Race is invisible — not counted, does not help unlock a discard |

---

## Design Intent (Short)

- **Series / Season** — shared calendar → discards are fair.
- **World** — inherits those series decisions; does not invent a second “best races of the year” list.
- Racing Gold-only is a valid specialization. Skipping a hard series simply means you do not earn those points.
- Anti-grind comes from honest EventGrade and series structure, not from a buffet-style top-N over hundreds of events.

---

## Where to Look

- In-app: **Results → Rankings** (`/results/rankings`)
- Season list, contributing series, and tier chips are shown beside the standings
- Scoring summary is also printed at the bottom of the rankings page
