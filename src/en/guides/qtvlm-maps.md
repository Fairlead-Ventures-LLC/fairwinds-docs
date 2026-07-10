---
layout: base-en.html
typora-root-url: ../..
title: Using FairWinds Maps in QTVLM
---

# Using FairWinds Maps in QTVLM

<p class="lead">Routes planned in QTVLM sometimes collide with land when imported into FairWinds. This is because QTVLM ships with a different coastline dataset. This guide explains how to load the FairWinds coastlines directly into QTVLM so that both tools route against exactly the same data.</p>

---

## Why QTVLM and FairWinds can disagree

QTVLM uses a coastline database called **GSHHG** (Global Self-consistent, Hierarchical, High-resolution Geography Database), a public dataset last updated in 2017. It is good enough for open-ocean navigation but it misses many small rocks, reefs, and narrow passages — and it has never been corrected for known errors.

FairWinds uses its own coastline dataset derived from OpenStreetMap and heavily edited by hand. Areas like **La Manche**, the **Great Lakes**, **Sydney Harbour** and the **Panama Canal** have all been corrected and refined. These are the red lines you see on the FairWinds map. They are the single source of truth for collision detection.

When you plan a route in QTVLM using its default coastlines and then import that GPX into FairWinds, the route may clip rocks or headlands that simply don't exist in QTVLM's older, lower-fidelity data. The fix is to make QTVLM route against the same coastlines as FairWinds.

---

## What is GSHHG?

GSHHG is a binary file format that encodes coastlines as a series of closed polygons at five resolution tiers:

| File | Resolution | Best for |
|------|-----------|----------|
| `gshhs_f.b` | Full | Harbour-scale detail |
| `gshhs_h.b` | High | Coastal planning |
| `gshhs_i.b` | Intermediate | Passage planning |
| `gshhs_l.b` | Low | Ocean routing |
| `gshhs_c.b` | Crude | World overview |

QTVLM automatically picks the appropriate resolution tier depending on your zoom level. The FairWinds GSHHG package provides all five tiers generated from FairWinds' own coastline data, preserving every polygon at every scale — including the small rocks and islets that matter most.

---

## A note on QTVLM versions

These instructions were tested with **qtVlm 5.12-19-p4**. The shapefile barrier feature requires the "Coast lines from vector charts" toggle to be enabled in Charts configuration, which may require at least one S57 or S63 vector chart to be loaded. If you cannot enable this toggle, the GSHHG replacement method below will still improve routing accuracy at the major coastline level.

---

## Installation

### Step 1 — Back up QTVLM's original maps

Rename QTVLM's existing `gshhs` folder so you can restore it later if needed.

On **macOS**:
```
/Applications/QTVLM/maps/gshhs  →  /Applications/QTVLM/maps/gshhs-qtvlm
```

On **Windows**:
```
C:\Program Files\QTVLM\maps\gshhs  →  C:\Program Files\QTVLM\maps\gshhs-qtvlm
```

### Step 2 — Copy the FairWinds maps folder

Copy the `fairwinds-gshhs` folder you downloaded into the same `maps` directory.

### Step 3 — Rename it to `gshhs`

```
fairwinds-gshhs  →  gshhs
```

Your `maps` folder should now look like this:

```
maps/
  gshhs/              ← FairWinds coastlines (active)
  gshhs-qtvlm/        ← original QTVLM coastlines (backup)
  ...
```

### Step 4 — Restart QTVLM

Quit and relaunch QTVLM. It will automatically load the new coastlines on startup.

---

## Confirming it worked

Zoom into the mid-Atlantic around **31°W, 31°N**. You should see a small island in the shape of the FairWinds logo — this is our signature marker that confirms you have the correct coastline package loaded.

Routes you plan in QTVLM will now route against the same high-fidelity data as FairWinds, and importing them via GPX should no longer produce unexpected collisions.

---

## Reverting to QTVLM's original maps

If you need to go back:

1. Rename `gshhs` → `fairwinds-gshhs`
2. Rename `gshhs-qtvlm` → `gshhs`
3. Restart QTVLM
