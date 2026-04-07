(function (w, d) {
  const CLARITY_PROJECT_ID = 'w7yn7semmb';

  if (!CLARITY_PROJECT_ID || CLARITY_PROJECT_ID.indexOf('REPLACE_WITH') === 0) {
    console.info('Microsoft Clarity is not enabled yet. Replace CLARITY_PROJECT_ID in js/clarity.js.');
    return;
  }

  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r);
    t.async = 1;
    t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(w, d, 'clarity', 'script', CLARITY_PROJECT_ID);

  function getPageType() {
    const path = (w.location.pathname || '').replace(/\/+$/, '') || '/';
    if (path === '/' || path.endsWith('/index.html')) return 'home';
    if (path.endsWith('/privacy-purge.html')) return 'privacy-policy';
    if (path.endsWith('/service-purge.html')) return 'terms-of-service';
    return path.split('/').pop() || 'page';
  }

  w.clarity('set', 'page_type', getPageType());

  d.addEventListener('DOMContentLoaded', function () {
    const clickMap = [
      ['.header-button', 'header_download_click'],
      ['.main-button', 'hero_download_click'],
      ['.btn-primary', 'mobile_menu_download_click'],
      ['#contactForm button[type="submit"]', 'contact_form_submit_attempt'],
      ['#menuOpen', 'mobile_menu_open'],
      ['#menuClose', 'mobile_menu_close']
    ];

    clickMap.forEach(function (entry) {
      const selector = entry[0];
      const eventName = entry[1];
      const nodes = d.querySelectorAll(selector);
      nodes.forEach(function (node) {
        node.addEventListener('click', function () {
          w.clarity('event', eventName);
        });
      });
    });

    const contactForm = d.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function () {
        w.clarity('set', 'form_name', 'contact_form');
      });
    }
  });
})(window, document);
