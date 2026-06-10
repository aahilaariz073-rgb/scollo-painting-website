/* Scollo Painting Inc. — Site Interactivity */

(function () {
  'use strict';

  /* ── Sticky header ── */
  function initStickyHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 24);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile menu ── */
  function initMobileMenu() {
    var btn  = document.querySelector('.menu-btn');
    var menu = document.querySelector('.mobile-menu');
    if (!btn || !menu) return;

    var iconOpen  = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6"  x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    var iconClose = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6"  x2="6"  y2="18"/><line x1="6"  y1="6"  x2="18" y2="18"/></svg>';

    btn.innerHTML = iconOpen;

    btn.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
      btn.innerHTML = isOpen ? iconClose : iconOpen;
    });

    /* Close when a link is clicked */
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = iconOpen;
      });
    });
  }

  /* ── Before/After slider ── */
  function initBeforeAfter() {
    document.querySelectorAll('.before-after').forEach(function (slider) {
      var handle     = slider.querySelector('.ba-handle');
      var beforeClip = slider.querySelector('.ba-before-clip');
      var isDragging = false;

      function setPos(clientX) {
        var rect = slider.getBoundingClientRect();
        var pct  = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
        if (handle)     handle.style.left            = pct + '%';
        if (beforeClip) beforeClip.style.clipPath    = 'inset(0 ' + (100 - pct) + '% 0 0)';
      }

      slider.addEventListener('mousedown',  function (e) { isDragging = true; setPos(e.clientX); e.preventDefault(); });
      slider.addEventListener('touchstart', function (e) { isDragging = true; setPos(e.touches[0].clientX); }, { passive: true });

      document.addEventListener('mousemove',  function (e) { if (isDragging) setPos(e.clientX); });
      document.addEventListener('touchmove',  function (e) { if (isDragging) setPos(e.touches[0].clientX); }, { passive: true });
      document.addEventListener('mouseup',    function ()  { isDragging = false; });
      document.addEventListener('touchend',   function ()  { isDragging = false; });
    });
  }

  /* ── Quote form ── */
  function initQuoteForm() {
    var form    = document.getElementById('quote-form');
    var success = document.getElementById('quote-success');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (success) {
        form.style.display = 'none';
        success.classList.add('visible');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    var resetBtn = document.getElementById('quote-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        form.reset();
        form.style.display = '';
        if (success) success.classList.remove('visible');
      });
    }
  }

  /* ── Lucide icons ── */
  function initIcons() {
    if (window.lucide) {
      window.lucide.createIcons({ attrs: { 'stroke-width': '1.9' } });
    }
  }

  /* ── Scroll-reveal animation ── */
  function initReveal() {
    if (!window.IntersectionObserver) return;
    var style = document.createElement('style');
    style.textContent = '.reveal{opacity:0;transform:translateY(14px);transition:opacity var(--dur-slow) var(--ease-out),transform var(--dur-slow) var(--ease-out)}.reveal.in{opacity:1;transform:none}';
    document.head.appendChild(style);

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); obs.unobserve(en.target); }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .trust-item, .about-stat, .area-card, .faq-item').forEach(function (el) {
      el.classList.add('reveal');
      obs.observe(el);
    });
  }

  /* ── Mobile dropdown accordions ── */
  function initMobileDropdowns() {
    document.querySelectorAll('.mobile-nav-dropdown-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var list = btn.nextElementSibling;
        var isOpen = list.classList.toggle('open');
        btn.classList.toggle('open', isOpen);
      });
    });
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', function () {
    initStickyHeader();
    initMobileMenu();
    initMobileDropdowns();
    initBeforeAfter();
    initQuoteForm();
    initIcons();
    initReveal();
  });
})();
