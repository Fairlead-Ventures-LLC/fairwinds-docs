---
layout: base-en.html
title: Release Notes
---

# Release Notes

Jump to: [March 5, 2025](#march-5-2025) · [March 4, 2025](#march-4-2025) · [February 26, 2025](#february-26-2025)

---

## March 5, 2025

Hi all, bonjour à tous, ciao a tutti!

I'm excited to share two fun new sailing modes.

**No GPS** — just pure sailing. This disables all lat/longs, VMC, internal and external routers and NMEA. You can still set routes with the route creator and the scheduler so it's not hand steering the entire way. But route running is not possible. You'll need to read the wind.

Try it out in a repeat practice race through the Mistral:
[Barcelone – Marseille (Sans GPS)](https://fairwinds.world/race/2517/detail)

**Fog mode** — the map reveals as you sail. This is going to be fun for expeditions (e.g. Cook's circumnavigation on NZ, or being put into an unfamiliar area and discovering where you are).

I've combined Fog mode + No GPS in a short practice jaunt from Anacortes to Friday Harbor:
[Juans Upon a Time](http://fairwinds.world/race/2518/detail)

Lastly, the compass has a new addition for all races: directional blue arcs point in the direction of the 3 nearest gates. A nice reference even in normal sailing, but particularly useful when sailing in the dark.

As always feedback welcome, bug reports appreciated!

---

## March 4, 2025

Hi all, bonjour à tous, ciao a tutti! There are many new things to share in the latest release. I'm excited to share the first major new addition: **Marks**.

Marks are navigation points you can place on the map — a lot like POIs or Waypoints. This is a feature many have been asking about for a while and is foundational to no-GPS and celestial nav charting and other upcoming capabilities.

1. Marks menu is accessed via the tools buttons, as a new green diamond button.
2. You get 3 marks.
3. They spawn in the center of your window and can be dragged around.
4. Marks are saved for your entire race — across refreshes, browser restarts, etc.

Marks come with two superpowers:

1. **Distance measurement** — click 'Show nm' to draw distance lines in sequence from your boat → M1 → M2 → M3.
2. **Mark-based and multi-segment routing** — the FW internal router still uses the 'Auto' logic for the next gate or finish line, but now you can route to any of your marks, or connect them all together and route between them. Extremely handy for rounding a point or navigating channels.

Try it out in the new practice race: [Hawaiian Punch](https://fairwinds.world/race/2513)

I've done a lot of work on the router 'endgame' to make routing hit marks, gates, and router pins perfectly. It works well — keep an eye out on final approaches. Translations for the new UI elements coming once all features are live.

![Marks overview](/images/Screenshot_2026-03-04_at_6.59.22_PM.png)

![Marks distance lines](/images/Screenshot_2026-03-04_at_7.55.13_PM.png)

![Mark-based routing](/images/Screenshot_2026-03-04_at_7.52.48_PM.png)

![Multi-segment routing](/images/Screenshot_2026-03-04_at_7.54.06_PM.png)

---

## February 26, 2025

Hi all — most of the updates this week were focused on server-side work, including a rather big switch to a new NMEA data pipeline that no one noticed for the past week. Success! This migration eliminated about 3 million database queries every month. For the noticeable changes:

1. **New documentation site is LIVE** with a focus on 'Getting Started'. Find the link in the profile menu: Profile → Documentation, or go directly to [docs.fairwinds.world](https://docs.fairwinds.world/). This is just the foundation — I'll be adding more topics and sections on a rolling basis, starting with routing and waypoint creation.

   *On translations:* I started creating docs in French and Italian, but when I loaded the French page to test, Chrome translated it back to English automatically! Browser auto-translation support is much better than I expected, so I'm holding off on manually creating language-specific pages for now. Let me know if that doesn't work for you and I can bring back dedicated `/fr` and `/it` pages.

2. **New YouTube channel** coming soon. The accounts and page are set up — tutorial videos will be added shortly.

3. **Graticules** (lat/long lines) are now available as an option in the Charts menu.
