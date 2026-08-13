---
layout: base-en.html
title: The Daily Navigation Cycle
---

# The Daily Navigation Cycle

<p class="lead">Get the hang of the loop first. Detail comes later.</p>

← Back to [Celestial Navigation](/en/guides/celestial-navigation/)

---

Celestial navigation in FairWinds is the same short loop, repeated every day. You do not need to understand every abbreviation on a sight card to start — follow the cycle.

<figure class="comic-figure">
  <div class="comic-lang" role="group" aria-label="Comic language">
    <button type="button" data-comic-lang="en" aria-pressed="true">EN</button>
    <button type="button" data-comic-lang="fr" aria-pressed="false">FR</button>
  </div>
  <img
    id="nav-cycle-comic"
    src="/images/daily-navigation-cycle.png"
    data-src-en="/images/daily-navigation-cycle.png"
    data-src-fr="/images/daily-navigation-cycle-fr.png"
    alt="Comic strip of the daily navigation cycle: Where am I, what time of day, next sky opportunity, taking the sight, convert to a fix, show on the map"
  >
  <figcaption>The loop — then it starts again from your new fix.</figcaption>
</figure>

<script>
(function () {
  var img = document.getElementById('nav-cycle-comic');
  if (!img) return;
  var buttons = document.querySelectorAll('[data-comic-lang]');
  var storageKey = 'fw-docs-comic-lang';

  function preferFr() {
    var saved = null;
    try { saved = localStorage.getItem(storageKey); } catch (e) {}
    if (saved === 'en' || saved === 'fr') return saved === 'fr';
    var htmlLang = (document.documentElement.lang || '').toLowerCase();
    var navLang = (navigator.language || '').toLowerCase();
    return htmlLang.indexOf('fr') === 0 || navLang.indexOf('fr') === 0;
  }

  function apply(lang) {
    var fr = lang === 'fr';
    img.src = fr ? img.getAttribute('data-src-fr') : img.getAttribute('data-src-en');
    img.alt = fr
      ? 'Bande dessinée du cycle quotidien de navigation'
      : 'Comic strip of the daily navigation cycle: Where am I, what time of day, next sky opportunity, taking the sight, convert to a fix, show on the map';
    buttons.forEach(function (btn) {
      var on = btn.getAttribute('data-comic-lang') === lang;
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.classList.toggle('is-active', on);
    });
  }

  var initial = preferFr() ? 'fr' : 'en';
  apply(initial);

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-comic-lang');
      try { localStorage.setItem(storageKey, lang); } catch (e) {}
      apply(lang);
    });
  });

  // If Google Translate (or similar) flips <html lang>, swap the comic.
  try {
    var observer = new MutationObserver(function () {
      if (localStorage.getItem(storageKey)) return;
      apply(preferFr() ? 'fr' : 'en');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  } catch (e) {}
})();
</script>

<ol class="nav-cycle">
  <li>
    <strong>1. Where am I?</strong>
    <span>Your last fix, or a DR projected from it, in the race viewer <strong>Positions</strong> panel. In the Sky Tool Workbook this is your <strong>position reference</strong> (Guided) or <strong>AP</strong> (Expert).</span>
  </li>
  <li>
    <strong>2. What time of day is it?</strong>
    <span>Check the clock (UTC / ship time) and <strong>Solar Times</strong> in the Workbook — Sunrise, Sunset, Mer. Pass. Those times are computed from where you think you are.</span>
  </li>
  <li>
    <strong>3. Next opportunity to use the sky</strong>
    <span>Open the <strong>Daily Schedule</strong>. It highlights the next useful window — twilight stars, sunrise lon, morning sun, noon, afternoon sun-run, sunset lon, evening stars. It is a guide, not a requirement.</span>
  </li>
  <li>
    <strong>4. Taking the sight</strong>
    <span>Open the <strong>Sextant</strong>, acquire the body, align it to the horizon, <strong>Mark!</strong> and <strong>Save</strong>. Sun work lives on the <strong>Sun</strong> tab; stars on the <strong>Stars</strong> tab.</span>
  </li>
  <li>
    <strong>5. Converting to a fix</strong>
    <span>Guided mode does the math: reduce LOPs and <strong>Compute Fix</strong> (stars), or use the <strong>Sun Worksheet</strong> (<strong>Save to Log</strong> for noon / lon / running fix). Expert mode: reduce externally, then <strong>Enter Fix</strong> on the Fixes tab.</span>
  </li>
  <li>
    <strong>6. Show on the map</strong>
    <span>Saved fixes appear in <strong>Positions</strong> and on the chart. Build a new DR from that fix — that becomes “where am I?” for the next loop.</span>
  </li>
</ol>

> **If you only do one loop:** scrub or wait for twilight, shoot 2–3 stars, compute a fix, save it, make a DR. That is the whole game in miniature.

---

## Where to go next

Once the loop feels familiar:

- [The Sky Tool](/en/guides/sky-tool/) — sextant, Workbook, quality ratings
- [Daily Fixes](/en/guides/days-work/) — each schedule step in detail
- [Navigation Modes](/en/guides/navigation-modes/) — Guided vs Expert

Watch the video on the [Celestial Navigation](/en/guides/celestial-navigation/) page first if you have not already — it walks this cycle on screen.
