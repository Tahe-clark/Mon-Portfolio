/* ══════════════════════════════════════════════
   Portfolio — Kelyan Tahe
   0. Langue FR / EN
   1. Apparition des sections au défilement
   2. Filtres des projets
   3. Navbar : ombre au défilement + fermeture du menu mobile
   4. Copier l'adresse courriel
   5. Vidéos des projets (FR / EN)
   6. Année automatique dans le footer
══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── 0. Langue FR / EN ──
     Le français est dans le HTML ; l'anglais vient de js/i18n.js.
     Au chargement, on mémorise le français pour pouvoir y revenir. */
  const EN = window.I18N_EN || {};
  const FR_EXTRA = { 'contact.copied': 'Copié !' };   // textes utilisés seulement en JS
  const frText = new Map();
  const frAttr = new Map();

  document.querySelectorAll('[data-i18n]').forEach((el) => frText.set(el, el.innerHTML));
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const saved = {};
    el.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attr] = pair.split(':');
      saved[attr] = el.getAttribute(attr);
    });
    frAttr.set(el, saved);
  });

  let currentLang = 'fr';
  const t = (key) => (currentLang === 'en' ? EN[key] : FR_EXTRA[key]) || FR_EXTRA[key] || key;

  const setLang = (lang) => {
    currentLang = lang === 'en' ? 'en' : 'fr';
    document.documentElement.lang = currentLang;

    frText.forEach((fr, el) => {
      const key = el.dataset.i18n;
      el.innerHTML = currentLang === 'en' && EN[key] ? EN[key] : fr;
    });
    frAttr.forEach((saved, el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':');
        el.setAttribute(attr, currentLang === 'en' && EN[key] ? EN[key] : saved[attr]);
      });
    });

    document.querySelectorAll('.lang-btn[data-lang]').forEach((btn) => {
      const on = btn.dataset.lang === currentLang;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    try { localStorage.setItem('lang', currentLang); } catch (e) { /* navigation privée */ }
  };

  document.querySelectorAll('.lang-btn[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Langue de départ : choix précédent, sinon langue du navigateur, sinon français
  let startLang = null;
  try { startLang = localStorage.getItem('lang'); } catch (e) { /* ignore */ }
  if (!startLang) startLang = (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'fr';
  if (startLang === 'en') setLang('en');


  /* ── 1. Apparition au défilement ──
     IntersectionObserver ne fait aucun calcul pendant le défilement :
     c'est ce qui garde la page fluide. */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);   // une seule fois
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealEls.forEach((el, i) => {
      // Petit décalage pour les cartes d'une même rangée
      el.style.transitionDelay = `${(i % 3) * 70}ms`;
      observer.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ── 2. Filtres des projets ── */
  const buttons = document.querySelectorAll('.filter-btn');
  const items   = document.querySelectorAll('.project-item');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      buttons.forEach((b) => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      items.forEach((item) => {
        const match = filter === 'all' || item.dataset.category.split(' ').includes(filter);
        item.classList.toggle('is-hidden', !match);
        if (match) item.classList.add('is-visible');
      });
    });
  });

  /* ── 3. Navbar ── */
  const nav = document.getElementById('main-nav');
  let ticking = false;
  const updateNav = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    ticking = false;
  };
  updateNav();
  window.addEventListener('scroll', () => {
    if (!ticking) {                 // au plus une mise à jour par image affichée
      requestAnimationFrame(updateNav);
      ticking = true;
    }
  }, { passive: true });

  // Sur mobile, fermer le menu après un clic sur un lien
  const menu = document.getElementById('navMenu');
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('show') && window.bootstrap) {
        (bootstrap.Collapse.getInstance(menu) || new bootstrap.Collapse(menu, { toggle: false })).hide();
      }
    });
  });

  /* ── 4. Copier le courriel ── */
  const copyBtn = document.getElementById('copy-email');
  if (copyBtn && navigator.clipboard) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(copyBtn.dataset.email);
        const label = copyBtn.querySelector('[data-i18n]');
        const icon  = copyBtn.querySelector('i');
        copyBtn.classList.add('copied');
        icon.className = 'bi bi-check2';
        label.textContent = t('contact.copied');
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          icon.className = 'bi bi-clipboard';
          label.innerHTML = currentLang === 'en' ? EN['contact.copy'] : frText.get(label);
        }, 2000);
      } catch (e) { /* le lien mailto reste disponible */ }
    });
  } else if (copyBtn) {
    copyBtn.hidden = true;
  }

  /* ── 5. Vidéos des projets (FR / EN) ── */
  const videoModalEl = document.getElementById('video-modal');
  const player = document.getElementById('video-player');
  if (videoModalEl && player && window.bootstrap) {
    const videoModal = new bootstrap.Modal(videoModalEl);
    let sources = { fr: '', en: '' };

    const playIn = (lang) => {
      player.src = sources[lang] || sources.fr;
      videoModalEl.querySelectorAll('.video-lang').forEach((b) => {
        const on = b.dataset.vlang === lang;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      player.play().catch(() => { /* lecture auto refusée : l'usager appuie sur lecture */ });
    };

    document.querySelectorAll('.video-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        sources = { fr: btn.dataset.videoFr, en: btn.dataset.videoEn };
        document.getElementById('video-modal-title').textContent = btn.dataset.videoTitle;
        videoModal.show();
        playIn(currentLang);          // la vidéo démarre dans la langue du site
      });
    });

    videoModalEl.querySelectorAll('.video-lang').forEach((b) => {
      b.addEventListener('click', () => playIn(b.dataset.vlang));
    });

    // À la fermeture : on arrête la vidéo et on libère le fichier
    videoModalEl.addEventListener('hidden.bs.modal', () => {
      player.pause();
      player.removeAttribute('src');
      player.load();
    });
  }

  /* ── 6. Année ── */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
