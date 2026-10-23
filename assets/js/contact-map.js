/* Contact map: live OpenStreetMap tiles with three circled places.
     Leaflet 1.9.4 is vendored under assets/ (BSD-2-Clause). */
  let contactMap = null;
  let contactZoom = null;
  const CONTACT_PLACES = [
    { key: 'dubai', lat: 25.2048, lng: 55.2708, names: { en: 'Dubai', zh: '迪拜', ru: 'Дубай', ar: 'دبي' } },
    { key: 'guiyang', lat: 26.6470, lng: 106.6302, names: { en: 'Guiyang', zh: '贵阳', ru: 'Гуйян', ar: 'قوييانغ' } },
    { key: 'hangzhou', lat: 30.2741, lng: 120.1551, names: { en: 'Hangzhou', zh: '杭州', ru: 'Ханчжоу', ar: 'هانغتشو' } }
  ];
  const CONTACT_ZOOM_LABELS = {
    en: { in: 'Zoom in', out: 'Zoom out' },
    zh: { in: '放大', out: '缩小' },
    ru: { in: 'Увеличить', out: 'Уменьшить' },
    ar: { in: 'تكبير', out: 'تصغير' }
  };
  let contactBounds = null;

  function contactLang() {
    const lang = document.documentElement.lang;
    return lang === 'zh' || lang === 'zh-CN' ? 'zh' : lang === 'ru' ? 'ru' : lang === 'ar' ? 'ar' : 'en';
  }

  function fitContactMap(lang) {
    if (!contactMap || !contactBounds) return;
    const width = contactMap.getSize().x;
    let topLeft;
    let bottomRight;
    if (width <= 767) {
      topLeft = [26, 76];
      bottomRight = [26, 310];
    } else if (lang === 'ar') {
      topLeft = [430, 92];
      bottomRight = [54, 92];
    } else {
      topLeft = [54, 92];
      bottomRight = [430, 92];
    }
    contactMap.fitBounds(contactBounds, {
      paddingTopLeft: topLeft,
      paddingBottomRight: bottomRight,
      maxZoom: 4,
      animate: false
    });
  }

  function updateContactMapLang(lang) {
    if (!contactMap) return;
    const next = ['en', 'zh', 'ru', 'ar'].indexOf(lang) === -1 ? 'en' : lang;
    CONTACT_PLACES.forEach(function (place) {
      if (place.marker) place.marker.setTooltipContent(place.names[next]);
    });
    if (contactZoom) contactMap.removeControl(contactZoom);
    const labels = CONTACT_ZOOM_LABELS[next];
    contactZoom = L.control.zoom({
      position: next === 'ar' ? 'bottomright' : 'bottomleft',
      zoomInTitle: labels.in,
      zoomOutTitle: labels.out
    }).addTo(contactMap);
    fitContactMap(next);
  }

  let contactMapStarted = false;

  function initContactMap() {
    if (contactMapStarted) return;
    contactMapStarted = true;
    const el = document.getElementById('contact-map');
    if (!el || typeof L === 'undefined') return;

    contactMap = L.map(el, {
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: true,
      touchZoom: true,
      dragging: true,
      keyboard: true,
      minZoom: 2,
      maxZoom: 9,
      zoomSnap: 0.25,
      worldCopyJump: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      subdomains: 'abc',
      maxZoom: 19
    }).addTo(contactMap);

    const pulseIcon = L.divIcon({
      className: 'contact-map-pulse-icon',
      html: '<span class="contact-map-pulse"></span>',
      iconSize: [12, 12],
      iconAnchor: [6, 6]
    });
    const lang = contactLang();
    CONTACT_PLACES.forEach(function (place) {
      L.circle([place.lat, place.lng], {
        radius: 200000,
        color: '#6f8cff',
        weight: 1.25,
        opacity: 0.9,
        fillColor: '#0f33ff',
        fillOpacity: 0.14,
        interactive: false
      }).addTo(contactMap);
      const marker = L.marker([place.lat, place.lng], {
        icon: pulseIcon,
        keyboard: false,
        riseOnHover: false
      }).addTo(contactMap);
      marker.bindTooltip(place.names[lang], {
        permanent: true,
        direction: 'top',
        className: 'contact-map-label',
        offset: [0, -10],
        opacity: 1
      });
      marker.openTooltip();
      place.marker = marker;
    });

    contactBounds = L.latLngBounds(CONTACT_PLACES.map(function (place) {
      return [place.lat, place.lng];
    }));
    updateContactMapLang(lang);

    setTimeout(function () {
      if (!contactMap) return;
      contactMap.invalidateSize();
      fitContactMap(contactLang());
    }, 250);

    window.addEventListener('resize', function () {
      if (!contactMap) return;
      contactMap.invalidateSize();
      fitContactMap(contactLang());
    });
  }

  (function watchContactMap() {
    const el = document.getElementById('contact-map');
    if (!el) return;
    const section = el.closest('.l-section');

    function startWhenActive() {
      if (section && section.classList.contains('section--is-active')) initContactMap();
    }

    if (typeof MutationObserver === 'function' && section) {
      new MutationObserver(startWhenActive).observe(section, {
        attributes: true,
        attributeFilter: ['class']
      });
    }

    document.querySelectorAll('.side-nav li, .outer-nav li').forEach(function (item) {
      item.addEventListener('click', function () {
        setTimeout(startWhenActive, 120);
      });
    });
    setTimeout(startWhenActive, 900);
  })();

document.addEventListener('voltai:lang', function (event) {
  if (event && event.detail) updateContactMapLang(event.detail.lang);
});
