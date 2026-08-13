---
layout: base-en.html
title: Celestial Navigation
---

# Celestial Navigation

<p class="lead">Navigate by the stars, sun, and moon — no GPS required.</p>

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/df7-twMqJPo?rel=0&modestbranding=1&iv_load_policy=3" title="Celestial Navigation in FairWinds" allowfullscreen loading="lazy"></iframe>
</div>
New to cel nav? Start with [The Daily Navigation Cycle](/en/guides/daily-navigation-cycle/) — the simple loop before the detail.

![daily-navigation-cycle-6611294](/Users/alex/sailgame/fairwinds-docs/src/images/daily-navigation-cycle-6611294.png)

---

## Overview

Celestial navigation is the practice of determining your position at sea using observations of celestial bodies — the sun, moon, planets, and stars. In FairWinds, cel nav is fully modeled and pairs naturally with **No GPS mode**, where lat/long readouts are disabled and you must find your own way.

The core skill is building a daily rhythm of observations that keeps your position estimate accurate. A good navigator is never more than 12 hours from their last confirmed fix.

---

## The Sky Tool

The Sky Tool is your in-game sextant. It lets you observe celestial bodies and compute lines of position (LOPs) that you can cross to establish a fix. You can open up the sky tool directly from https://fairwinds.world/sky or in the race viewer.

![sail-skylink](/Users/alex/sailgame/fairwinds-docs/src/images/sail-skylink.png)

FairWinds offers two navigation modes — **Guided** (the game does the math) and **Expert** (you do the math externally). Both use the same sextant and record the same sight data.

![expert](/Users/alex/sailgame/fairwinds-docs/src/images/expert.png)

[The Sky Tool — full guide →](/en/guides/sky-tool/)

[Navigation Modes — Guided vs Expert →](/en/guides/navigation-modes/)

---

## Daily cycle

In the Sky Tool, open the **Workbook**. **Solar Times** shows Sunrise / Sunset / Mer. Pass. for your position reference; the **Daily Schedule** checklist marks which observation windows you’ve completed (guide only — not a requirement).

Daytime work is mostly on the **Sun** tab (AM / noon / PM / horizon lon, then **Sun-Run Fix**). Twilight work is on the **Stars** tab (LOPs → Compute Fix). Saved marks show up in the race viewer **Positions** panel.

[Daily Fixes — full guide →](/en/guides/days-work/)

### Types of fixes

- [AM Twilight Star Fix](/en/guides/days-work/am-stars/)
- [Sunrise Longitude Fix](/en/guides/days-work/sunrise-lon/)
- [AM Sun Sight](/en/guides/days-work/am-sun/)
- [Noon Sight](/en/guides/days-work/noon/)
- [PM Sun Sight / Running Fix](/en/guides/days-work/pm-sun/)
- [Sunset Longitude Fix](/en/guides/days-work/sunset-lon/)
- [PM Twilight Star Fix](/en/guides/days-work/pm-stars/)

### Reference

- [Picking Stars for a Fix](/en/guides/days-work/star-selection/)

---

## Dead Reckoning (DR)

A DR is a projection of where you will be based on a known position, a heading, and a speed over time. In FairWinds you create DRs in the **Positions panel**.

The DR is what connects your last fix to your next observation:

- It predicts when the sun will rise, transit, and set
- It gives you a starting point for advancing LOPs in a running fix
- It accumulates error — which is why daily observations matter

The more accurate your last fix, the more useful your DR.

---

## Nav View vs Chart View

FairWinds has two complementary views:

- **Nav View** — your instrument panel. Heading, speed, apparent wind.
- **Chart View** — the map. In No GPS mode your fix positions and LOPs appear here. Your true position is hidden until you establish a fix.
