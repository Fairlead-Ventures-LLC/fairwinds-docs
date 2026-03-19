---
layout: base-en.html
typora-root-url: ..
title: Release Notes
---

# Release Notes

Jump to: [March 19, 2025](#march-19-2025) · [March 12, 2025](#march-12-2025) · [March 5, 2025](#march-5-2025) · [March 4, 2025](#march-4-2025) · [February 26, 2025](#february-26-2025)

---

## March 19, 2025

This week's updates are focused on a lot of polish and minor feature updates and fixes that folks have been asking for.

**Routing** — imported routes will now only skip waypoints within a 2-minute threshold of the current sim time when loaded. This means most imported and internal routes won't have that first waypoint skipped as a buffer. The buffer was always necessary but had been too large, causing boats to route 2+ waypoints ahead.

**Routing** — if you import a route and then disappear to make a sandwich and come back 15 minutes later to activate it, the Activate button will now warn you before sending your boat backwards for bologna (or mustard). A feature Shuffle has been asking for for a while.

**Tight waypoint + gate crossings in current mode** — we had several missed gates in Tactician's. The sim now checks both your boat path and the route line path for crossings when you are very near a gate with currents. Should not be a problem anymore.

**The 'Next' button in wind controls is now live!** This toggles the upcoming forecast as soon as it's available (around 2 hours before cutover). Your reckoning line, wind barbs, and wind gradient will shift so you can preview what's going to happen at cutover — toggling back and forth between the current and upcoming forecast. A feature Ayoye has been asking for!

**Bug fix** — fixed a route 'disappearing' bug that happened after the computer slept and the browser woke up. Shouldn't not not not see that anymore! 🙂

**New feature — custom polars** — races can now be configured so anyone can use their own polar in addition to the official polars. This will be important for some upcoming events and will be used judiciously for practice races for now. Boat owners can try FW courses with their own polars without sharing them broadly.

**Mobile sky viewer** — an improved mobile view of the sky viewer is in progress and will be updated shortly.

**Experimental: waves + boat stamina** — for those in the testers group, there is an experimental waves and boat stamina system in development. It's still early. A test run is planned in parallel to the OM6 race to see how it plays out. See ⁠#testers for details.

I guess it was a busy week after all! Time to go get the sunrise fix on the way to Greenland.

---

## March 12, 2025

Hi all, bonjour à tous, ciao a tutti!

Continuing release notes round 3 of 4 for this big week of additions. Tomorrow I'll share a longer note about Celestial Navigation.

FairWinds has always been designed as a virtual sailing platform to Race. Train. Explore — and these new features really extend the 'Train' and 'Explore' parts of the platform.

A big part of navigation is not just finding your way to a destination, but managing scarce resources. Almost all historical expeditions were framed around where to stop and re-provision. The Odyssey is entirely structured by Odysseus needing to resupply over and over (at the peril of the crew's poor decision-making ashore). Many entries in Cook's journals are calculations of provisions, distance, and time to possible re-supply destinations. Captain Bligh's post-mutiny journey is a daily journal on rationing resources — fishing, catching birds, and estimating the length of their remaining journey.

With that, I've introduced a new expedition mode called **Provisions** and a set of new gate features to bring map discovery and resource management to life. These gate settings can be mixed in new and fun ways.

**New expedition mode: Provisioning** — you have limited provisions (measured in time) to complete the journey. You start with a limited amount of time and can resupply by crossing provision gates. Run out of time and your crew mutinies!

**New gate types:**

- **Hidden gates** — only reveal when you get within a set number of nm (defined race-wide).
- **Skippable gates** — identified by a new 'dovetail' flag. You don't need to go through them to complete the race. Useful for optional stops and informational gates.
- **Provision gates** — resupply your provision time with a set number of hours. Marked with a gold pennant.

These flag types can be mixed and matched across different expeditions and races. I'm excited to run some treasure hunts and build more expeditions that require passage planning or trace historical runs.

All of these features are combined in the new expedition: [The Cay to BBQ](https://fairwinds.world/race/2530/detail). Have fun, good luck, and plan ahead!

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
