/* Pre-paint boot: restore the saved theme (landscape pages only) and language/direction. */
(function () {
  var root = document.documentElement;
  try {
    if (root.getAttribute('data-page') !== 'home') {
      var theme = null;
      try { theme = localStorage.getItem('voltai-theme'); } catch (e) {}
      var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', theme || (dark ? 'dark' : 'light'));
    }
  } catch (e) {}
  try {
    var h = location.hash;
    var lang = h === '#ar' ? 'ar' : h === '#ru' ? 'ru' : h === '#zh' ? 'zh' : h === '#en' ? 'en' : localStorage.getItem('voltai-lang');
    if (lang === 'ar') {
      root.lang = 'ar';
      root.dir = 'rtl';
    } else if (lang === 'ru') {
      root.lang = 'ru';
      root.dir = 'ltr';
    } else if (lang === 'zh') {
      root.lang = 'zh-CN';
      root.dir = 'ltr';
    } else {
      root.lang = 'en';
      root.dir = 'ltr';
    }
  } catch (e) {}
})();
