/* ==========================================================================
   AÏDA GARBA PORTFOLIO - CASE STUDY CONTROLLER
   Sticky Navigation Bar, Smooth Scrollspy & Subtle Glowing Active Tabs
   Desktop & Mobile Responsive
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCaseStudyStickyNav();
});

function initCaseStudyStickyNav() {
  const header = document.querySelector('.cs-nav-header');
  const stickyNav = document.querySelector('.cs-sticky-nav-bar');
  const navInner = document.querySelector('.cs-sticky-nav-inner');
  const tabs = Array.from(document.querySelectorAll('.cs-nav-tab'));

  const sectionIds = ['overview', 'problem', 'role', 'process', 'solution', 'results'];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!tabs.length || !sections.length) return;

  // 1. Dynamic Header & Sticky Nav Height Synchronization
  function updateLayoutDimensions() {
    const headerHeight = header ? header.offsetHeight : 64;
    const navHeight = stickyNav ? stickyNav.offsetHeight : 52;
    document.documentElement.style.setProperty('--cs-header-height', `${headerHeight}px`);
    document.documentElement.style.setProperty('--cs-sticky-nav-height', `${navHeight}px`);
  }

  updateLayoutDimensions();
  window.addEventListener('resize', updateLayoutDimensions, { passive: true });
  window.addEventListener('orientationchange', updateLayoutDimensions, { passive: true });

  function getStickyOffset() {
    const headerH = header ? header.offsetHeight : 64;
    const navH = stickyNav ? stickyNav.offsetHeight : 52;
    return headerH + navH;
  }

  // 2. Horizontally Center Active Tab in Mobile Navigation Bar
  function centerActiveTabOnMobile(activeTab) {
    if (!activeTab || !navInner) return;
    if (navInner.scrollWidth <= navInner.clientWidth) return;

    const tabRect = activeTab.getBoundingClientRect();
    const innerRect = navInner.getBoundingClientRect();
    const currentScroll = navInner.scrollLeft;
    const targetScroll = currentScroll + (tabRect.left - innerRect.left) - (innerRect.width / 2) + (tabRect.width / 2);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    navInner.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  }

  // 3. Set Active Tab with Subtle Glow Highlighting
  let currentActiveId = null;

  function setActiveTab(id) {
    if (currentActiveId === id) return;
    currentActiveId = id;

    let activeTab = null;
    tabs.forEach((tab) => {
      const href = tab.getAttribute('href');
      if (href === `#${id}`) {
        tab.classList.add('active');
        tab.setAttribute('aria-current', 'true');
        activeTab = tab;
      } else {
        tab.classList.remove('active');
        tab.removeAttribute('aria-current');
      }
    });

    if (activeTab) {
      centerActiveTabOnMobile(activeTab);
    }
  }

  // 4. Scrollspy Engine using requestAnimationFrame
  let isManualScrolling = false;
  let manualScrollTimeout = null;
  let ticking = false;

  function checkScrollPosition() {
    // A. Toggle 'is-stuck' class for glass elevation shadow
    if (stickyNav && header) {
      const headerH = header.offsetHeight;
      const stickyNavTop = stickyNav.getBoundingClientRect().top;
      if (stickyNavTop <= headerH + 2) {
        stickyNav.classList.add('is-stuck');
      } else {
        stickyNav.classList.remove('is-stuck');
      }
    }

    // Skip tab auto-switching during manual smooth click scroll
    if (isManualScrolling) {
      ticking = false;
      return;
    }

    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const windowH = window.innerHeight;
    const docH = document.documentElement.scrollHeight;

    // B. Check if user reached the bottom of the page (activate last section: results)
    if (scrollY + windowH >= docH - 60) {
      const lastSection = sections[sections.length - 1];
      if (lastSection) {
        setActiveTab(lastSection.id);
      }
      ticking = false;
      return;
    }

    // C. Find currently visible section based on sticky offset zone
    const stickyOffset = getStickyOffset();
    let visibleSection = sections[0]; // Defaults to 'overview'

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();
      // Section is active when its top is within or above the sticky header line + 60px lookahead
      if (rect.top <= stickyOffset + 60) {
        visibleSection = section;
      } else {
        break;
      }
    }

    if (visibleSection) {
      setActiveTab(visibleSection.id);
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(checkScrollPosition);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // 5. Smooth Tab & CTA Click Handling with Offset Compensation
  const navClickTargets = document.querySelectorAll(
    '.cs-nav-tab, .cs-summary-btn, a[href^="#overview"], a[href^="#problem"], a[href^="#role"], a[href^="#process"], a[href^="#solution"], a[href^="#results"]'
  );

  navClickTargets.forEach((target) => {
    target.addEventListener('click', (e) => {
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      e.preventDefault();

      // Immediately highlight clicked tab & lock scrollspy during animation
      isManualScrolling = true;
      setActiveTab(targetId);

      const stickyOffset = getStickyOffset();
      const elementTop = targetElement.getBoundingClientRect().top;
      // Scroll to land with 14px breathing room below sticky nav
      const scrollTarget = elementTop + window.pageYOffset - stickyOffset + 14;

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({
        top: scrollTarget,
        behavior: prefersReduced ? 'auto' : 'smooth'
      });

      // Update URL hash without abrupt jumps
      if (history.replaceState) {
        history.replaceState(null, null, `#${targetId}`);
      }

      clearTimeout(manualScrollTimeout);
      manualScrollTimeout = setTimeout(() => {
        isManualScrolling = false;
        checkScrollPosition();
      }, 850);
    });
  });

  // 6. Handle Initial Hash or Initial Page Position
  if (window.location.hash) {
    const hashId = window.location.hash.substring(1);
    const targetSection = document.getElementById(hashId);
    if (targetSection) {
      setTimeout(() => {
        const stickyOffset = getStickyOffset();
        const elementTop = targetSection.getBoundingClientRect().top;
        window.scrollTo({
          top: elementTop + window.pageYOffset - stickyOffset + 14,
          behavior: 'smooth'
        });
        setActiveTab(hashId);
      }, 100);
    } else {
      checkScrollPosition();
    }
  } else {
    checkScrollPosition();
  }
}
