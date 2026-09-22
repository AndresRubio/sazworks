// Progressive enhancement only. The page is fully usable without JS.

function initScrollReveal(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });

  elements.forEach((el) => observer.observe(el));
}

function initActiveNav(sections, navLinks) {
  const linkBySectionId = new Map();
  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('#')) linkBySectionId.set(href.slice(1), link);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      });
      const link = linkBySectionId.get(entry.target.id);
      if (link) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'true');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach((section) => observer.observe(section));
}

function initMobileNav(toggle, nav) {
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => {
    setOpen(!nav.classList.contains('is-open'));
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.site-nav a');

  if ('IntersectionObserver' in window) {
    initScrollReveal(revealElements);
    initActiveNav(sections, navLinks);
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  initMobileNav(document.querySelector('.nav-toggle'), document.getElementById('site-nav'));
});
