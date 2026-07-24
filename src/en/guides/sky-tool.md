---
layout: base-en.html
title: The Sky Tool
---

# The Sky Tool

<p class="lead">Your in-game sextant for taking celestial fixes.</p>

← Back to [Celestial Navigation](/en/guides/celestial-navigation/)

---

## Overview

The Sky Tool is your on-board sextant and navigation station. It renders a real-time star field powered by the Stellarium engine and lets you take sights of the sun, moon, planets, and 57 navigational stars.

---

## Opening the Sky Tool

From any race, tap the **Sky** button in the bottom navigation bar. The Sky Tool opens full-screen with the star field centered on your current heading. Your boat's position and the current UTC time are shown in the top bar.

---

## Taking a Sight

1. **Find a body** — pan the sky or use the **Best Bodies** panel to see which stars, planets, or the sun are well-placed right now.
2. **Enter sextant mode** — tap the sextant icon to open the sight-taking view.
3. **Acquire** — center the reticle on your target and lock it.
4. **Align** — use the drum to bring the body down to the horizon line. Your alignment accuracy determines the error on your observed altitude (Hs).
5. **Mark and save** — confirm the sight. It records Hs (in DMS), UTC to the second, your DR position, and environmental parameters.

---

## Sight and Fix Quality Ratings

After every interaction you get a quality rating. There are two:

**Sight quality** is shown immediately after you mark a sight. It measures how accurately you brought the body down to the horizon line — the alignment error in arcminutes. One arcminute of error equals roughly one nautical mile of position error in your LOP.

**Fix quality** is shown when you cross two or three LOPs to compute a fix. It measures the crossing angle between the LOPs — a shallower crossing stretches the uncertainty ellipse and makes the fix less reliable.

| Rating | Sight (alignment error) | Fix (LOP crossing angle) |
|---|---|---|
| Excellent | < 2 arcmin | ≥ 70° |
| Good | 2 – 4.9 arcmin | 40° – 69° |
| Fair | 5 – 14.9 arcmin | 20° – 39° |
| Poor | ≥ 15 arcmin | < 20° |

For the best fix quality, choose bodies whose azimuths are 60–120° apart. Two bodies at right angles give a near-ideal 90° crossing; three bodies spread ~120° apart form a tight triangle fix.

> **Why doesn't an Excellent fix show my exact position?** The FairWinds drum reads to 0.1 arcminutes — matching a real vernier micrometer sextant. A perfect alignment scores 0.0', and an Excellent rating requires less than 2'. In Guided mode your GPS position is used as the assumed position, so the only error in the fix comes from your sight alignment. An Excellent sight (< 2 arcmin) with a Good or Excellent crossing angle will typically land within **1–2 nautical miles** of true position — that's the expected accuracy of real-world celestial navigation, not a FairWinds limitation. In No GPS / Expert mode your DR accumulates error over time, so a stale or inaccurate DR will shift the fix further. If your fix is off by more than a few miles, check your azimuth spread and make sure your DR is recent.

---

## Navigation Modes

FairWinds offers two modes that control how much of the math the game does for you:

- **Guided** — FairWinds computes Hc, Zn, intercept, LOPs, and fixes. You focus on taking good sights and learning the workflow.
- **Expert** — FairWinds records your sight data but hides all computed results. You do the sight reduction externally and enter your fix manually.

[Navigation Modes — full comparison →](/en/guides/navigation-modes/)

---

## Daily Fixes

The Sky Tool includes a daily schedule that guides you through seven observation windows — from twilight star fixes to noon latitude to sunset longitude. Each step shows its UTC window and tracks your progress.

[Daily Fixes — full guide →](/en/guides/days-work/)
