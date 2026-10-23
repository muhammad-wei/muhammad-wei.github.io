/* Matrix rain, adapted from https://github.com/muhammad-wei/matrix
   MIT License — Copyright (c) 2024-∞ Hongbo Wei */
  (function () {
    const canvas = document.getElementById('matrix-rain');
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const section = canvas.closest('.l-section');
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const font = 12;
    const chars = 'モエヤキオカ7ケサスz152ヨタワ4ネヌナ98ヒ0ホア3ウ セ¦:"꞊ミラリ╌ツテニハソ▪—<>0|+*コシマムメ'.split('');
    let drops = [];

    function resize() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const columns = Math.ceil(w / font);
      drops = Array.from({ length: columns }, function () { return Math.random() * -30; });
    }

    function draw() {
      if (document.hidden || !section.classList.contains('section--is-active')) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      ctx.fillStyle = 'rgba(12, 12, 12, 0.08)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#00ff46';
      ctx.font = font + 'px monospace';
      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(ch, i * font, drops[i] * font);
        if (drops[i] * font > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }

    resize();
    window.addEventListener('resize', resize);
    setInterval(draw, 50);
  })();