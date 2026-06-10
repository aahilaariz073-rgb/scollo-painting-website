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

  /* ── Quote / Contact form success on redirect back ── */
  function initQuoteForm() {
    var form    = document.getElementById('quoteForm');
    var success = document.getElementById('quoteSuccess');
    if (!form && !success) return;
    if (window.location.search.indexOf('sent=1') !== -1) {
      if (form)    form.style.display = 'none';
      if (success) { success.hidden = false; success.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    }
  }

  function initContactForm() {
    var form    = document.getElementById('contactForm');
    var success = document.getElementById('contactSuccess');
    if (!form && !success) return;
    if (window.location.search.indexOf('sent=1') !== -1) {
      if (form)    form.style.display = 'none';
      if (success) { success.hidden = false; success.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
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

  /* ── Gallery lightbox ── */
  function initLightbox() {
    var items = Array.from(document.querySelectorAll('.gallery-item'));
    if (!items.length) return;

    /* Build overlay */
    var overlay = document.createElement('div');
    overlay.className = 'lb-overlay';
    overlay.innerHTML =
      '<button class="lb-close" aria-label="Close">' +
        '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
      '</button>' +
      '<button class="lb-prev" aria-label="Previous">' +
        '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>' +
      '</button>' +
      '<div class="lb-content">' +
        '<img class="lb-img" src="" alt="">' +
        '<p class="lb-caption"></p>' +
      '</div>' +
      '<button class="lb-next" aria-label="Next">' +
        '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>' +
      '</button>';
    document.body.appendChild(overlay);

    var lbImg     = overlay.querySelector('.lb-img');
    var lbCaption = overlay.querySelector('.lb-caption');
    var current   = 0;

    function open(index) {
      current = index;
      var fig = items[current];
      var img = fig.querySelector('img');
      var cap = fig.querySelector('figcaption');
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCaption.textContent = cap ? cap.textContent : '';
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    function prev() { open((current - 1 + items.length) % items.length); }
    function next() { open((current + 1) % items.length); }

    items.forEach(function (fig, i) {
      fig.style.cursor = 'pointer';
      fig.addEventListener('click', function () { open(i); });
    });

    overlay.querySelector('.lb-close').addEventListener('click', close);
    overlay.querySelector('.lb-prev').addEventListener('click', prev);
    overlay.querySelector('.lb-next').addEventListener('click', next);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });

    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape')    close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    });
  }

  /* ── Chat widget ── */
  function initChatWidget() {
    var wrap = document.createElement('div');
    wrap.className = 'chat-widget';
    wrap.id = 'chatWidget';
    wrap.innerHTML =
      '<iframe name="chatFrame" id="chatFrame" aria-hidden="true" tabindex="-1"></iframe>' +
      '<div class="chat-panel" id="chatPanel">' +
        '<div class="chat-panel-head">' +
          '<div class="chat-panel-head-inner">' +
            '<img src="/assets/logo-dark.svg" alt="Scollo Painting Inc." class="chat-logo" width="110" height="25">' +
          '</div>' +
          '<button class="chat-panel-close" id="chatClose" aria-label="Close chat">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
          '</button>' +
        '</div>' +
        '<div class="chat-panel-body">' +
          '<p class="chat-intro">Enter your question below and a representative will get right back to you.</p>' +
          '<form id="chatForm" action="https://formsubmit.co/hello@skyliftgroup.com" method="POST" target="chatFrame">' +
            '<input type="hidden" name="_subject" value="Chat Inquiry — Scollo Painting Inc.">' +
            '<input type="hidden" name="_captcha" value="false">' +
            '<input type="hidden" name="_page" id="chatPage" value="">' +
            '<div class="chat-field"><input type="text" name="name" class="chat-input" placeholder="Name *" required></div>' +
            '<div class="chat-field"><input type="tel" name="phone" class="chat-input" placeholder="Phone *" required></div>' +
            '<div class="chat-field"><textarea name="message" class="chat-textarea" placeholder="How can we help?" rows="3"></textarea></div>' +
            '<button type="submit" class="chat-submit">Send ' +
              '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
            '</button>' +
          '</form>' +
          '<div class="chat-success" id="chatSuccess" hidden>' +
            '<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' +
            '<p class="chat-success-title">We\'ll be in touch soon!</p>' +
            '<p class="chat-success-sub">A member of our team will call or email you within one business day.</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<button class="chat-bubble" id="chatBubble" aria-label="Chat with us" aria-expanded="false">' +
        '<svg class="icon-chat" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
        '<svg class="icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
      '</button>';

    document.body.appendChild(wrap);

    var bubble   = document.getElementById('chatBubble');
    var panel    = document.getElementById('chatPanel');
    var closeBtn = document.getElementById('chatClose');
    var form     = document.getElementById('chatForm');
    var success  = document.getElementById('chatSuccess');
    var frame    = document.getElementById('chatFrame');
    document.getElementById('chatPage').value = window.location.pathname;

    function openPanel()  { panel.classList.add('open'); bubble.classList.add('open'); bubble.setAttribute('aria-expanded', 'true'); }
    function closePanel() { panel.classList.remove('open'); bubble.classList.remove('open'); bubble.setAttribute('aria-expanded', 'false'); }

    bubble.addEventListener('click', function () { panel.classList.contains('open') ? closePanel() : openPanel(); });
    closeBtn.addEventListener('click', closePanel);

    var submitted = false;
    form.addEventListener('submit', function () { submitted = true; });
    frame.addEventListener('load', function () {
      if (!submitted) return;
      form.style.display = 'none';
      success.hidden = false;
    });
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', function () {
    initStickyHeader();
    initMobileMenu();
    initMobileDropdowns();
    initBeforeAfter();
    initQuoteForm();
    initContactForm();
    initIcons();
    initReveal();
    initLightbox();
    initChatWidget();
  });
})();
