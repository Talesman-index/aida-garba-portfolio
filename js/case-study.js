/* ==========================================================================
   AÏDA GARBA PORTFOLIO - CASE STUDY CONTROLLER
   Scrollspy & Smooth Interactions for Dedicated Project Pages
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCaseStudyScrollSpy();
  initSmoothScrollTabs();
});

/* 1. Scrollspy for Sticky Navigation Pills */
function initCaseStudyScrollSpy() {
  const sections = document.querySelectorAll('.cs-content-section, #overview, #problem, #role, #process, #solution, #results');
  const tabs = document.querySelectorAll('.cs-nav-tab');

  if (!sections.length || !tabs.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-120px 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tabs.forEach((tab) => {
          const href = tab.getAttribute('href');
          if (href === `#${id}`) {
            tab.classList.add('active');
          } else {
            tab.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));
}

/* 2. Smooth Scroll on Tab Click with Sticky Offset */
function initSmoothScrollTabs() {
  const tabs = document.querySelectorAll('.cs-nav-tab, .cs-summary-btn');

  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const targetId = tab.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 120;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Update active class immediately
          document.querySelectorAll('.cs-nav-tab').forEach((t) => t.classList.remove('active'));
          if (tab.classList.contains('cs-nav-tab')) {
            tab.classList.add('active');
          }
        }
      }
    });
  });
}
