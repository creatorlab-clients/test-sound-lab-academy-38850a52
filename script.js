/* ============================================================
   template-musica-002 — Sound Lab Academy
   script.js — Vanilla JS / ES5 IIFE
   ============================================================ */

/* ── Vercel Blob CDN frames ── */
var FRAME_PATH   = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/musica-002/frames/';
var FRAME_PREFIX = 'frame_';
var FRAME_PAD    = 4;
var FRAME_EXT    = '.webp';
var FRAME_COUNT  = 151;

/* ── Image fallback ── */
window.__imgFallback = function(img, label) {
  var text = encodeURIComponent(label || 'Sound Lab');
  img.onerror = null;
  img.src = 'data:image/svg+xml,' + [
    '%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22',
    ' width%3D%22600%22 height%3D%22450%22%3E',
    '%3Crect width%3D%22600%22 height%3D%22450%22 fill%3D%22%23F9F7FF%22/%3E',
    '%3Crect x%3D%220%22 y%3D%220%22 width%3D%224%22 height%3D%22450%22 fill%3D%22%235B21B6%22/%3E',
    '%3Ctext x%3D%22300%22 y%3D%22225%22 font-family%3D%22sans-serif%22',
    ' font-size%3D%2218%22 fill%3D%22%236E6884%22 text-anchor%3D%22middle%22',
    ' dominant-baseline%3D%22middle%22%3E' + text + '%3C/text%3E',
    '%3C/svg%3E'
  ].join('');
};

/* ── Phosphor Regular icons ── */
var PHOSPHOR_ICONS = {
  WhatsappLogo: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M128 28C72.6 28 28 72.6 28 128c0 17.4 4.6 33.7 12.6 47.8L28 228l54.4-14.2A99.1 99.1 0 00128 228c55.4 0 100-44.6 100-100S183.4 28 128 28z"/><path d="M100.4 80c-1.8-4.4-3.7-4.5-5.4-4.6-1.4-.1-3-.1-4.6-.1-1.6 0-4.2.6-6.4 2.8-2.2 2.2-8.4 8.2-8.4 20s8.6 23.2 9.8 24.8c1.2 1.6 16.6 26.6 41 36.4 20.3 8 24.4 6.4 28.8 6s13.8-5.6 15.8-11c2-5.4 2-10 1.4-11-.6-1-2.2-1.6-4.6-2.8s-14.2-7-16.4-7.8c-2.2-.8-3.8-1.2-5.4 1.2s-6.2 7.8-7.6 9.4c-1.4 1.6-2.8 1.8-5.2.6s-10.2-3.8-19.4-12c-7.2-6.4-12-14.2-13.4-16.6s-.2-3.8 1-5c1.2-1.2 2.6-3 3.8-4.6 1.2-1.6 1.6-2.6 2.4-4.4.8-1.8.4-3.4-.2-4.8s-5.2-13-7.2-18z"/></svg>',
  InstagramLogo: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><rect x="32" y="32" width="192" height="192" rx="48"/><circle cx="128" cy="128" r="40"/><circle cx="180" cy="76" r="8" fill="currentColor" stroke="none"/></svg>',
  ArrowRight: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"><path d="M40 128h176M136 64l80 64-80 64"/></svg>',
  ArrowUpRight: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"><path d="M64 192L192 64M80 64h112v112"/></svg>',
  MapPin: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M128 24C93.1 24 64 53.1 64 88c0 53 64 144 64 144s64-91 64-144c0-34.9-29.1-64-64-64z"/><circle cx="128" cy="88" r="24"/></svg>',
  Clock: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><circle cx="128" cy="128" r="96"/><path d="M128 72v56l40 24"/></svg>',
  Phone: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M164.4 164.4l-27.6 27.6C100.2 175.7 80.3 155.8 64 119.2l27.6-27.6-24-56L36 36c-4 68 24 140 72 188s120 76 188 72l-36-31.6-55.6-20z"/></svg>',
  MusicNote: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M96 216V80l112-24v136"/><circle cx="72" cy="216" r="24"/><circle cx="184" cy="192" r="24"/></svg>',
  MicrophoneStage: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><rect x="88" y="24" width="80" height="120" rx="40"/><path d="M48 128c0 44.2 35.8 80 80 80s80-35.8 80-80M128 208v24M88 232h80"/></svg>',
  Guitar: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M152 104L40 216"/><path d="M104 152c-8 8-40 8-56 24s-4 44 16 44 40-8 48-16 8-16 0-24-16-8-8-16 32-32 40-24"/><path d="M152 104l-32-32 64-64 32 32-64 64z"/></svg>',
  Headphones: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M128 56C83.8 56 48 91.8 48 136v40a24 24 0 0048 0v-32a24 24 0 00-48 0M128 56c44.2 0 80 35.8 80 80v40a24 24 0 01-48 0v-32a24 24 0 0148 0"/></svg>',
  Piano: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><rect x="32" y="64" width="192" height="128" rx="8"/><path d="M80 64v80M128 64v80M176 64v80M104 64v56M152 64v56"/></svg>',
  Star: '<svg viewBox="0 0 256 256" fill="currentColor"><path d="M239.2 97.3a16 16 0 00-13.8-11l-60.3-5.5-23.1-56.4a15.9 15.9 0 00-29.6 0L89.2 80.8 28.8 86.3a16 16 0 00-9.1 28.1l45.3 39.6-13.4 59.7a16 16 0 0023.9 17.3L128 201.1l52.5 29.9a16 16 0 0023.9-17.3l-13.4-59.7 45.3-39.6a16 16 0 004.9-16.1z"/></svg>',
  User: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><circle cx="128" cy="96" r="56"/><path d="M24 216c0-44.2 46.6-80 104-80s104 35.8 104 80"/></svg>',
  Play: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M72 39.9l168 88.1-168 88.1z"/></svg>',
  ChevronDown: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"><path d="M48 96l80 80 80-80"/></svg>',
  CalendarBlank: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><rect x="32" y="48" width="192" height="176" rx="8"/><path d="M176 24v48M80 24v48M32 96h192"/></svg>',
  CheckCircle: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><circle cx="128" cy="128" r="96"/><path d="M80 128l32 32 64-64"/></svg>',
  Plus: '<svg viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round"><path d="M128 40v176M40 128h176"/></svg>'
};

(function() {
  'use strict';

  /* ── 1. Inject icons ── */
  document.querySelectorAll('[data-icon]').forEach(function(el) {
    var name = el.getAttribute('data-icon');
    if (PHOSPHOR_ICONS[name]) {
      el.innerHTML = PHOSPHOR_ICONS[name];
    }
  });

  /* ── 2. Current year ── */
  document.querySelectorAll('[data-year]').forEach(function(el) {
    el.textContent = new Date().getFullYear();
  });

  /* ── 3. Navbar scroll ── */
  var navbar = document.querySelector('.navbar');
  if (navbar && !navbar.classList.contains('scrolled')) {
    function onScroll() {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── 4. Mobile nav toggle ── */
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      var isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });
    document.addEventListener('click', function(e) {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
      }
    });
  }

  /* ── 5. Hero sequential fade-up ── */
  var heroFades = document.querySelectorAll('.hero-fade-up');
  if (heroFades.length) {
    setTimeout(function() {
      heroFades.forEach(function(el) { el.classList.add('is-visible'); });
    }, 80);
  }

  /* ── 6. IntersectionObserver — fade-up + stagger ── */
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up, .stagger-card').forEach(function(el) {
      observer.observe(el);
    });

    /* Scroll overlay text reveal */
    var overlayH = document.querySelector('.scroll-overlay-headline');
    var overlaySub = document.querySelector('.scroll-overlay-sub');
    if (overlayH || overlaySub) {
      var overlayObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            if (overlayH) overlayH.classList.add('visible');
            if (overlaySub) overlaySub.classList.add('visible');
          }
        });
      }, { threshold: 0.5 });
      var pin = document.querySelector('.scroll-anim-pin');
      if (pin) overlayObserver.observe(pin);
    }
  } else {
    /* Fallback: show all */
    document.querySelectorAll('.fade-up, .stagger-card').forEach(function(el) {
      el.classList.add('is-visible');
    });
  }

  /* ── 7. Course accordion (cursos.html) ── */
  var accordionItems = document.querySelectorAll('.course-accordion-item');
  if (accordionItems.length) {
    accordionItems.forEach(function(item) {
      var trigger = item.querySelector('.course-accordion-trigger');
      if (!trigger) return;
      trigger.addEventListener('click', function() {
        var isOpen = item.classList.contains('open');
        /* Close all */
        accordionItems.forEach(function(i) { i.classList.remove('open'); });
        if (!isOpen) { item.classList.add('open'); }
      });
    });
  }

  /* ── 8. Scroll animation (canvas) ── */
  var section = document.querySelector('.scroll-animation');
  var canvas  = document.getElementById('scroll-canvas');
  if (!section || !canvas) return; /* guard — sub-pages without animation */

  var ctx  = canvas.getContext('2d');
  var DPR  = Math.min(devicePixelRatio || 1, 2);
  var pinEl = section.querySelector('.scroll-anim-pin');

  var frames  = new Array(FRAME_COUNT);
  var loaded  = 0;
  var current = -1;

  function pad(n) {
    var s = String(n);
    while (s.length < FRAME_PAD) { s = '0' + s; }
    return s;
  }

  function setupCanvas() {
    var w = pinEl.clientWidth;
    var h = pinEl.clientHeight;
    canvas.width  = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width  = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function renderFrame(img) {
    var cw = canvas.width  / DPR;
    var ch = canvas.height / DPR;
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    if (!iw || !ih) return;
    var scale = Math.max(cw / iw, ch / ih);
    var sw = iw * scale;
    var sh = ih * scale;
    var sx = (cw - sw) / 2;
    var sy = (ch - sh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }

  function showFrame(idx) {
    idx = Math.max(0, Math.min(FRAME_COUNT - 1, idx));
    if (idx === current) return;
    current = idx;
    if (frames[idx] && frames[idx].complete && frames[idx].naturalWidth) {
      renderFrame(frames[idx]);
    }
  }

  function onScroll() {
    var rect   = section.getBoundingClientRect();
    var total  = section.offsetHeight - window.innerHeight;
    var progress = Math.max(0, Math.min(1, -rect.top / total));
    showFrame(Math.round(progress * (FRAME_COUNT - 1)));
  }

  function loadFrames() {
    for (var i = 0; i < FRAME_COUNT; i++) {
      (function(i) {
        var img = new Image();
        img.onload = function() {
          loaded++;
          if (i === 0 || i === current) renderFrame(img);
          if (loaded === 1) { setupCanvas(); renderFrame(frames[0]); }
        };
        img.src = FRAME_PATH + FRAME_PREFIX + pad(i + 1) + FRAME_EXT;
        frames[i] = img;
      })(i);
    }
  }

  setupCanvas();
  loadFrames();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function() {
    setupCanvas();
    if (frames[current] && frames[current].complete) renderFrame(frames[current]);
  });
  onScroll();

})();
