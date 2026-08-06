---
layout: base-en.html
typora-root-url: ../..
title: Rankings and Scoring
---

# Rankings and Scoring

<p class="lead">FairWinds Ranking scores every finish with a simple formula, then builds Season championships and a rolling World Ranking from official series. Per-series discards apply in both — so the races that count in a series are the same ones that count toward World.</p>

Live standings: [fairwinds.world/results/rankings](https://fairwinds.world/results/rankings)

### Rankings vs series scoring

These are **two different systems**:

| | **FairWinds Rankings** (Season / World) | **Series scoring** (series results page) |
|--|----------------------------------------|------------------------------------------|
| Purpose | Season championship + World Ranking | Standings inside one series |
| Style | High-point (`EventGrade / pos^0.15 × ln(N)`) | Low-point (1st = 1, 2nd = 2, …) |
| DNF / DNS | **0 points** (still count for discards / series membership) | **Hard penalties:** DNF = `totalCompeted + 1`, DNS = `totalCompeted + 2` |

`totalCompeted` = boats that finished or DNF’d in that race. DNS does **not** inflate the fleet.

A DNS is cheap in Rankings (zero) but expensive in series low-point scoring. Discard thresholds are similar; the point values are not.

---

## Two Views

| View | What it covers | Window |
|------|----------------|--------|
| **Season** | Official series assigned to a championship season | That season's calendar |
| **World Ranking** | All official series | Rolling **12 months** |

Both use the same points formula, the same Gold / Silver / Bronze tiers, and the same per-series discard rules. World Ranking also requires **more than one** actual start (finish or DNF) to appear — auto-filled DNS does not unlock a World listing by itself.

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
| **position** | Finish place (1 = winner) — finishes only |
| **N** | Fleet size = finishers + DNFs (boats that started) |
| **0.15** | Softens place gaps — 2nd earns about **90%** of 1st |

`ln(N)` scales points up for bigger fleets and is self-limiting — no separate fleet-size cap is needed. Races with fewer than 2 starters award **0** points to finishers.

**DNF and DNS score 0 points.** They still count as series results for discard eligibility.

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

## Series Membership and DNS

If you sail **at least one** race in a series, you are treated as **in every race** of that series.

- Missed races become **DNS at 0 points**
- Those DNS slots count toward discard thresholds
- Someone who never sailed the series at all remains a non-entry (no results)

So DNS is not “invisible.” It is binary series membership with zero points.

---

## Per-Series Discards

Within each series, each sailor may drop their worst result(s) by **points**:

| Results in that series (including DNS / DNF) | Discards |
|---------------------------------------------|----------|
| 1–4 | 0 |
| 5–7 | 1 (keep best remaining) |
| 8+ | 2 |

Rules that matter:

- Discards are **per series**, not across the whole World Ranking.
- The drop is the race with the **lowest points** (DNS/DNF at 0 are natural drop candidates).
- **Season and World both use these counted races.** A throwaway inside a series does not pad World Ranking.
- Across different series, counted races still **add up** — there is no global top-N cherry-pick of easy events.

### Example: five-race series, one discard

| Sailor | Results | Kept for Season & World |
|--------|---------|-------------------------|
| Pinco Pallino | 1, 2, 3, 4, 5 | **1, 2, 3, 4** (drops the 5) |
| Mario Rossi | DNS, 1, 1, 3, 3 | **1, 1, 3, 3** (drops the DNS at 0) |

Mario’s DNS is a real series result (0 points). With five results he earns one discard and throws the DNS away — same counted set size as Pinco after Pinco drops his worst finish.

---

## Finish Statuses (FairWinds Rankings)

| Status | Ranking points | Series result for Rankings? |
|--------|----------------|-----------------------------|
| **Finished** (crossing) | Formula points | Yes |
| **DNF** (collision, quit, abandoned, timeout, etc.) | **0** | Yes — discardable |
| **DNS** (miss after sailing ≥1 in the series) | **0** | Yes — discardable |
| **Never in the series** | — | No — not a result at all |

---

## Series Low-Point Scoring

Shown on each series’ **results** page. Lower total wins.

### Basic Low Point

| Result | Points |
|--------|--------|
| Finished | Finish position (1st = 1, 2nd = 2, …) |
| DNF | `totalCompeted + 1` |
| DNS | `totalCompeted + 2` |

`totalCompeted` = finishers + DNFs in that race. DNS boats are not counted in `totalCompeted`.

Example: 10 boats finish or DNF → DNF scores **11**, DNS scores **12**.

### Series membership (series scoring)

Any boat that appears as a participant in **any** completed race of the series gets a result for **every** completed race. Missed races are DNS.

### Discards

Based on how many races in the series are **completed** (same drop count for everyone):

| Completed races in series | Discards |
|---------------------------|----------|
| 1–4 | 0 |
| 5–7 | 1 (worst / highest points) |
| 8+ | 2 |

### Weighted variants

Optional systems on the series results page also apply:

- **Distance factor** — longer races weigh more (log scale)
- **Extra multipliers** — DNF × 1.3, DNS × 2.0
- **Series factor** — later races up to +10%
- **Participation** (weighted_participation) — 5% / 2% bonus at 100% / 80%+ starts

### Teams

Best **3** boats per race; team needs at least **3** boats to qualify; same discard ladder.

---

## Design Intent (Short)

- **Series / Season** — shared calendar → discards are fair.
- **World** — inherits those series decisions; does not invent a second “best races of the year” list.
- Racing Gold-only is a valid specialization. Skipping a hard series simply means you do not earn those points.
- Anti-grind comes from honest EventGrade and series structure, not from a buffet-style top-N over hundreds of events.

---

## Where to Look

- Rankings: **Results → Rankings** (`/results/rankings`)
- Series low-point: each series’ **Results** page
- Scoring summaries are also printed on those pages
