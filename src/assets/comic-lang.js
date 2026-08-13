(function () {
  var buttons = document.querySelectorAll('[data-comic-lang]');
  if (!buttons.length) return;

  var img = document.querySelector('img[src*="daily-navigation-cycle"]');
  if (!img) return;

  img.setAttribute('data-src-en', '/images/daily-navigation-cycle.png');
  img.setAttribute('data-src-fr', '/images/daily-navigation-cycle-fr.png');

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
      : 'Comic strip of the daily navigation cycle';
    buttons.forEach(function (btn) {
      var on = btn.getAttribute('data-comic-lang') === lang;
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.classList.toggle('is-active', on);
    });
  }

  apply(preferFr() ? 'fr' : 'en');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-comic-lang');
      try { localStorage.setItem(storageKey, lang); } catch (e) {}
      apply(lang);
    });
  });

  try {
    new MutationObserver(function () {
      try { if (localStorage.getItem(storageKey)) return; } catch (e) {}
      apply(preferFr() ? 'fr' : 'en');
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  } catch (e) {}
})();
