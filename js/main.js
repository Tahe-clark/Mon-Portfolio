/* ══════════════════════════════════════════════
   Portfolio — Kelyan Tahe
   1. Apparition des sections au défilement
   2. Filtres des projets
   3. Navbar : ombre au défilement + fermeture du menu mobile
   4. Copier l'adresse courriel
   5. Année automatique dans le footer
══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

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
        const match = filter === 'all' || item.dataset.category === filter;
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
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = '<i class="bi bi-check2" aria-hidden="true"></i><span>Copié !</span>';
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.innerHTML = '<i class="bi bi-clipboard" aria-hidden="true"></i><span>Copier</span>';
        }, 2000);
      } catch (e) { /* le lien mailto reste disponible */ }
    });
  } else if (copyBtn) {
    copyBtn.hidden = true;
  }

  /* ── 5. Année ── */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
