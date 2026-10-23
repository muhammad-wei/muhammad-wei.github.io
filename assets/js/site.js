/* Shared language and theme behaviour for every page. */
(function () {
  'use strict';

  var LANGS = ['en', 'zh', 'ru', 'ar'];
  var HTML_LANG = { en: 'en', zh: 'zh-CN', ru: 'ru', ar: 'ar' };
  var root = document.documentElement;
  var page = root.getAttribute('data-page') || 'home';
  var meta = (window.PAGE_META || {})[page] || {};

  function setLang(lang, remember) {
    if (LANGS.indexOf(lang) === -1) lang = 'en';

    window.setLang = setLang;

  var select = document.getElementById('lang-select');
    if (select) select.value = lang;

    root.lang = HTML_LANG[lang];
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (meta.titles && meta.titles[lang]) document.title = meta.titles[lang];
    if (meta.descriptions && meta.descriptions[lang]) {
      var description = document.querySelector('meta[name="description"]');
      if (description) description.setAttribute('content', meta.descriptions[lang]);
    }
    if (meta.keywords && meta.keywords[lang]) {
      var keywords = document.querySelector('meta[name="keywords"]');
      if (keywords) keywords.setAttribute('content', meta.keywords[lang]);
    }

    document.querySelectorAll('[data-en]').forEach(function (el) {
      el.innerHTML = el.dataset[lang] || el.dataset.en;
    });

    var suffix = lang.charAt(0).toUpperCase() + lang.slice(1);
    document.querySelectorAll('[data-title-en]').forEach(function (el) {
      el.setAttribute('title', el.dataset['title' + suffix] || el.dataset.titleEn);
    });
    document.querySelectorAll('[data-aria-en]').forEach(function (el) {
      el.setAttribute('aria-label', el.dataset['aria' + suffix] || el.dataset.ariaEn);
    });

    document.dispatchEvent(new CustomEvent('voltai:lang', { detail: { lang: lang } }));

    if (remember !== false) {
      try { localStorage.setItem('voltai-lang', lang); } catch (e) {}
    }
  }

  function updateThemeIcon(theme) {
    var btn = document.getElementById('theme-btn');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function toggleTheme() {
    var cur = root.getAttribute('data-theme') || 'dark';
    var next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('voltai-theme', next); } catch (e) {}
    updateThemeIcon(next);
  }

  var select = document.getElementById('lang-select');
  if (select) select.addEventListener('change', function () { setLang(this.value); });

  var themeButton = document.getElementById('theme-btn');
  if (themeButton) themeButton.addEventListener('click', toggleTheme);
  updateThemeIcon(root.getAttribute('data-theme') || 'dark');

  var saved = null;
  try { saved = localStorage.getItem('voltai-lang'); } catch (e) {}
  var hash = location.hash.replace('#', '');
  if (LANGS.indexOf(hash) !== -1) saved = hash;
  setLang(LANGS.indexOf(saved) !== -1 ? saved : 'en', false);

  if (page !== 'home' && window.matchMedia) {
    var query = window.matchMedia('(prefers-color-scheme: dark)');
    var syncTheme = function (event) {
      var stored = null;
      try { stored = localStorage.getItem('voltai-theme'); } catch (e) {}
      if (!stored) {
        var theme = event.matches ? 'dark' : 'light';
        root.setAttribute('data-theme', theme);
        updateThemeIcon(theme);
      }
    };
    if (query.addEventListener) query.addEventListener('change', syncTheme);
    else if (query.addListener) query.addListener(syncTheme);
  }
})();
