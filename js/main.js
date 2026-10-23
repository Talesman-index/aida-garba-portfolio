/* ==========================================================================
   AÏDA GARBA PORTFOLIO - VANILLA JAVASCRIPT CONTROLLER (WITH FRAMER MOTION ANIMATIONS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProjectFilters();
  initProjectModals();
  initContactForm();
  
  /* Framer Motion Style Scroll Interactions & Animations */
  initScrollAnimations();
  initScrollSpy();
  initMagneticButtons();
  init3DHeroTilt();
});

/* 1. Header & Mobile Menu Controller */
function initNavbar() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });
  }
}

/* 2. Framer Motion Style Scroll Reveal Observer */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(`
    .gitos-hero-stage-card,
    .skills-clean-title,
    .skills-clean-card,
    .about-gitos-card,
    .projects-dark-title,
    .gitos-project-row,
    .process-left-content,
    .process-right-container,
    .process-step-item,
    .gitos-exp-header-wrap,
    .gitos-exp-clean-card,
    .section-title-wrap,
    .protfolis-card,
    .footer-top-cta,
    .footer-columns-grid
  `);

  revealElements.forEach((el, index) => {
    el.classList.add('reveal-on-scroll');

    // Add staggered delay for grid & list items
    if (el.classList.contains('skills-clean-card') || el.classList.contains('protfolis-card')) {
      const stagger = (index % 2) * 0.12;
      el.style.transitionDelay = `${stagger}s`;
    } else if (el.classList.contains('gitos-project-row')) {
      const rowStagger = (index % 6) * 0.08;
      el.style.transitionDelay = `${rowStagger}s`;
    } else if (el.classList.contains('process-step-item') || el.classList.contains('gitos-exp-clean-card')) {
      const stepNum = (index % 4) * 0.1;
      el.style.transitionDelay = `${stepNum}s`;
    }
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => scrollObserver.observe(el));
}

/* 3. Active Navigation Scrollspy */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (!sections.length || !navLinks.length) return;

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach((section) => spyObserver.observe(section));
}

/* 4. Magnetic Micro-Interaction on Buttons & Cards */
function initMagneticButtons() {
  const magneticButtons = document.querySelectorAll(`
    .btn-hire-me,
    .btn-black-pill,
    .btn-footer-cta,
    .btn-learn-more,
    .btn-gitos-primary,
    .btn-gitos-secondary,
    .social-circle-btn,
    .filter-btn,
    .gitos-dark-filter-btn
  `);

  magneticButtons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.03)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = `translate(0px, 0px) scale(1)`;
    });
  });
}

/* 5. 3D Parallax Tilt for Hero Portrait Stage */
function init3DHeroTilt() {
  const stage = document.querySelector('.gitos-hero-portrait-stage');
  const container = document.querySelector('.gitos-hero-portrait-container');

  if (!stage || !container || window.innerWidth < 992) return;

  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    const tiltX = (y / rect.height) * -12;
    const tiltY = (x / rect.width) * 12;

    container.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.03)`;
  });

  stage.addEventListener('mouseleave', () => {
    container.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  });
}

/* 6. Project Category Filtering */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn, .gitos-dark-filter-btn, .filter-btn');
  const projectCards = document.querySelectorAll('.project-grid-card, .gitos-project-row, .project-card-wrap');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px) scale(0.97)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* 7. Interactive Case Study Modal */
function initProjectModals() {
  const modalOverlay = document.getElementById('project-modal');
  const modalContainer = document.getElementById('modal-body-container');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay) return;

  const triggers = document.querySelectorAll('[data-project-id]');

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const projectId = trigger.getAttribute('data-project-id');
      const project = PROJECTS_DATA[projectId];

      if (project) {
        renderModalContent(project, modalContainer);
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* 10-Point Blueprint Modal Renderer (Gitos Luxury Minimalist Design) */
function renderModalContent(project, container) {
  const cs = project.caseStudy;

  container.innerHTML = `
    <!-- Header Block -->
    <div style="margin-bottom: 2rem; border-bottom: 1px solid #EAECF0; padding-bottom: 1.5rem; text-align: left;">
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.85rem; flex-wrap: wrap;">
        <span style="background: #111111; color: #FFFFFF; font-size: 0.75rem; font-weight: 800; padding: 0.35rem 1rem; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.04em;">${project.category}</span>
        <span style="background: #F3F4F6; color: #111111; border: 1px solid #EAECF0; font-size: 0.75rem; font-weight: 800; padding: 0.35rem 1rem; border-radius: 999px;">${project.badge}</span>
        ${project.date ? `<span style="background: #FAFAFA; color: #6B7280; border: 1px solid #EAECF0; font-size: 0.75rem; font-weight: 700; padding: 0.35rem 0.85rem; border-radius: 999px;">📅 ${project.date}</span>` : ''}
      </div>
      <h2 style="font-size: 2.2rem; font-weight: 800; color: #111111; line-height: 1.25; letter-spacing: -0.02em;">${project.title}</h2>
      <p style="font-size: 1.05rem; color: #4B5563; margin-top: 0.65rem; line-height: 1.6; font-weight: 500;">${project.shortDescription}</p>
    </div>

    <!-- Points 1 & 2: Overview & Problem -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 1.25rem; text-align: left;">
      <div style="background: #FAFAFA; border: 1px solid #EAECF0; padding: 1.5rem; border-radius: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
        <h4 style="color: #111111; font-size: 0.95rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
          <span style="color: #6B7280;">01.</span> Overview
        </h4>
        <p style="font-size: 0.9rem; color: #4B5563; line-height: 1.6; font-weight: 500;">${cs.overview}</p>
      </div>

      <div style="background: #FAFAFA; border: 1px solid #EAECF0; padding: 1.5rem; border-radius: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
        <h4 style="color: #111111; font-size: 0.95rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
          <span style="color: #6B7280;">02.</span> Problem Statement
        </h4>
        <p style="font-size: 0.9rem; color: #4B5563; line-height: 1.6; font-weight: 500;">${cs.problem}</p>
      </div>
    </div>

    <!-- Points 3 & 4: Users & My Role -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 1.25rem; text-align: left;">
      <div style="background: #FAFAFA; border: 1px solid #EAECF0; padding: 1.5rem; border-radius: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
        <h4 style="color: #111111; font-size: 0.95rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
          <span style="color: #6B7280;">03.</span> Target Users
        </h4>
        <p style="font-size: 0.9rem; color: #4B5563; line-height: 1.6; font-weight: 500;">${cs.users}</p>
      </div>

      <div style="background: #FAFAFA; border: 1px solid #EAECF0; padding: 1.5rem; border-radius: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
        <h4 style="color: #111111; font-size: 0.95rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
          <span style="color: #6B7280;">04.</span> My Role & Responsibility
        </h4>
        <p style="font-size: 0.9rem; color: #4B5563; line-height: 1.6; font-weight: 500;">${cs.myRole}</p>
      </div>
    </div>

    <!-- Point 5: Process Steps -->
    <div style="margin-bottom: 1.5rem; text-align: left;">
      <h4 style="color: #111111; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.75rem;">
        05. Process & Methodology
      </h4>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        ${cs.process.map((step, i) => `
          <div style="background: #F9FAFB; border: 1px solid #EAECF0; padding: 0.75rem 1.15rem; border-radius: 14px; font-size: 0.875rem; color: #111111; font-weight: 600; display: flex; align-items: center; gap: 0.75rem;">
            <span style="background: #111111; color: #FFFFFF; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.725rem; font-weight: 800; flex-shrink: 0;">${i + 1}</span>
            <span>${step}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Point 6: Solution -->
    <div style="background: #FFFFFF; border: 1.5px solid #111111; padding: 1.5rem; border-radius: 20px; margin-bottom: 1.5rem; text-align: left; box-shadow: 0 10px 25px rgba(0,0,0,0.04);">
      <h4 style="color: #111111; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.4rem;">
        06. Solution & Core Features
      </h4>
      <p style="font-size: 0.95rem; color: #111111; font-weight: 600; line-height: 1.6;">${cs.solution}</p>
    </div>

    <!-- Point 7: Tools -->
    <div style="margin-bottom: 1.5rem; text-align: left;">
      <h4 style="color: #111111; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.6rem;">
        07. Tech Stack & Tools Used
      </h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${cs.toolsUsed.map(t => `<span style="background: #111111; color: #FFFFFF; padding: 0.4rem 1rem; border-radius: 999px; font-size: 0.775rem; font-weight: 700;">${t}</span>`).join('')}
      </div>
    </div>

    <!-- Point 8: Results -->
    <div style="margin-bottom: 1.5rem; text-align: left;">
      <h4 style="color: #111111; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.6rem;">
        08. Results & Measurable Impact
      </h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.65rem;">
        ${cs.results.map(r => `
          <div style="background: #F3F4F6; border: 1px solid #EAECF0; padding: 0.85rem 1rem; border-radius: 14px; font-size: 0.85rem; font-weight: 700; color: #111111; display: flex; align-items: center; gap: 0.5rem;">
            <span style="color: #059669; font-weight: 900;">✓</span>
            <span>${r}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Point 9: Takeaways -->
    <div style="background: #FAFAFA; border: 1px solid #EAECF0; padding: 1.5rem; border-radius: 20px; margin-bottom: 1.5rem; text-align: left;">
      <h4 style="color: #111111; font-size: 0.95rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.3rem;">
        09. Key Takeaways & Lessons
      </h4>
      <p style="font-size: 0.925rem; color: #4B5563; font-style: italic; font-weight: 500; line-height: 1.6;">"${cs.whatILearned}"</p>
    </div>

    <!-- Point 10: Visual Blueprint Note -->
    <div style="background: #F3F4F6; border: 1px solid #EAECF0; padding: 1rem 1.25rem; border-radius: 16px; text-align: center;">
      <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: #6B7280; letter-spacing: 0.05em;">10. Visuals Blueprint Note</div>
      <p style="font-size: 0.85rem; color: #111111; font-weight: 600; margin-top: 0.25rem;">${cs.visualsNote}</p>
    </div>
  `;
}

/* 8. Contact Form Handler */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('contact-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (successMsg) {
        successMsg.style.display = 'block';
        form.reset();
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 4000);
      }
    });
  }
}

/* Complete Project Data Repository (8 Core Projects) */
const PROJECTS_DATA = {
  "livingstone-timesheet": {
    title: "Digital Timesheet System",
    category: "AI Product Builder",
    badge: "Operational MVP",
    date: "June 2026",
    shortDescription: "A digital alternative to paper tutor timesheets, automatically calculating daily, weekly, and monthly work hours and producing a downloadable PDF.",
    caseStudy: {
      overview: "While working as a tutor at Livingstone College’s Student Success Center, I experienced the paper process for recording work hours. I built a digital alternative designed directly around that real workflow.",
      problem: "The manual paper process for logging hours required calculating daily and monthly totals by hand and handling physical sheets, creating an everyday administrative burden.",
      users: "Academic tutors recording shift hours and supervisors reviewing timesheet records at the Student Success Center.",
      myRole: "I identified the need, worked out the exact information tutors needed to record, and designed, built, and refined the MVP as a usable operational tool.",
      process: [
        "Observed firsthand friction points in the Student Success Center paper timesheet workflow.",
        "Identified essential recording fields: date, day, time in, time out, and total hours.",
        "Designed and built an MVP with automated hour calculations across shifts.",
        "Added calculations for weekly and monthly hour totals.",
        "Implemented a downloadable PDF export feature for required record-keeping."
      ],
      solution: "A functional web timesheet MVP that captures date, day, time in, time out, and total hours, supports automated hour calculations with weekly and monthly totals, and generates a downloadable PDF. (Sending the PDF directly to a supervisor is an ongoing improvement).",
      toolsUsed: ["Web Development", "UI Design", "Automated Calculations", "PDF Generation"],
      results: [
        "Successfully transformed a manual paper workflow into a working digital MVP.",
        "Automated calculations for daily hours as well as weekly and monthly totals.",
        "Created downloadable PDF timesheet records reflecting the required institutional format."
      ],
      whatILearned: "How to take ownership of an everyday operational problem, identify essential user requirements, and build a practical, functioning digital tool.",
      visualsNote: "Desktop and mobile screens of the working timesheet interface and downloadable PDF output."
    }
  },
  "shalom-recovery-ai": {
    title: "Shalom Recovery AI",
    category: "AI Product Builder",
    badge: "Sprint 2nd Place",
    date: "June 2026",
    shortDescription: "An AI assistant prototype providing support for patients after surgery between discharge and follow-up through daily check-ins and routine guidance.",
    caseStudy: {
      overview: "A team project exploring support for surgical patients during home recovery between hospital discharge and follow-up, centered on an AI assistant for recovery questions and routine support.",
      problem: "After surgery, patients often have questions about routine recovery, daily healing patterns, and keeping track of medication and follow-up appointment schedules.",
      users: "Post-operative surgical patients during home recovery seeking answers to common recovery questions and routine schedule support.",
      myRole: "I contributed to the product idea, user flow, AI knowledge and prompt design, and the MVP prototype.",
      process: [
        "Explored patient communication needs during the critical transition between hospital discharge and follow-up.",
        "Mapped user flows centered on routine support and daily post-operative check-ins.",
        "Designed AI knowledge and prompt structures to provide clear answers to common recovery questions.",
        "Built out the interactive MVP prototype featuring daily check-ins and reminder schedules.",
        "Delivered the prototype for the Healthcare Innovation Sprint."
      ],
      solution: "A post-operative AI assistant MVP prototype featuring daily check-ins, answers to common recovery questions, and medication or appointment reminders. (Future phase concepts such as provider dashboards, authentication, risk scoring, follow-up workflows, and alerts were kept separate).",
      toolsUsed: ["AI Knowledge & Prompt Design", "User Flow Mapping", "UI Prototyping", "MVP Development"],
      results: [
        "Earned Second Place in the Healthcare Innovation Sprint.",
        "Delivered a focused, working MVP prototype for post-discharge patient support.",
        "Established a clear product scope separating core prototype features from future provider integrations."
      ],
      whatILearned: "How to design AI prompts and user flows for supportive health environments while maintaining clear boundaries around completed prototype scope.",
      visualsNote: "Mobile prototype screens showing conversational daily check-ins and recovery question interactions."
    }
  },
  "stem-camp": {
    title: "STEM Camp Website",
    category: "AI Product Builder",
    badge: "Program Initiative",
    date: "June 2026",
    shortDescription: "A website proposed and created on my own initiative to support Livingstone College's Summer STEM program and complement hands-on mentoring activities.",
    caseStudy: {
      overview: "While working as a student assistant mentor in Livingstone College’s Summer STEM program supporting youth in robotics and virtual reality, I proposed and created a website to support the camp and my mentoring work.",
      problem: "The hands-on summer camp lacked a dedicated web resource to represent the program and support daily mentoring activities for participating students.",
      users: "Youth STEM camp participants, mentors, and program coordinators seeking a dedicated digital home for camp activities.",
      myRole: "I brought the website idea forward and created it as an additional contribution to the program. Building the website was outside my assigned job responsibilities; I voluntarily took on the extra work.",
      process: [
        "Recognized an opportunity in my work environment to provide a digital resource beyond assigned mentor duties.",
        "Proposed the concept of creating a dedicated camp website to program leadership.",
        "Leveraged day-to-day mentoring context supporting youth in robotics and virtual reality.",
        "Designed and built the website structure to showcase camp activities and technology themes.",
        "Delivered the site as an extra voluntary contribution to enhance the program."
      ],
      solution: "A dedicated website designed to support the Livingstone College Summer STEM camp, providing a digital presence for camp activities and supporting hands-on technology mentorship.",
      toolsUsed: ["Web Design", "Voluntary Initiative", "Mentoring Context", "HTML/CSS"],
      results: [
        "Recognized a workplace need and proactively built a digital resource outside assigned responsibilities.",
        "Created a dedicated web platform supporting youth robotics and VR technology activities.",
        "Contributed a valuable digital asset to the Summer STEM program."
      ],
      whatILearned: "How to demonstrate initiative by identifying opportunities in my immediate environment and building digital solutions that add value beyond standard expectations.",
      visualsNote: "Camp website overview displaying hands-on technology activity sections and camp highlights."
    }
  },
  "evida": {
    title: "Evida Campus Events",
    category: "AI Product Builder",
    badge: "Web App Design",
    date: "July 2026",
    shortDescription: "User interface design and MVP contributions for a student-focused web app for discovering and engaging with campus events.",
    caseStudy: {
      overview: "A student-focused web app for discovering and engaging with campus events. My friend had already established the concept and begun the project before I joined, and I came on board as the web app designer.",
      problem: "Campus events and student organization activities were often hard for students to find, creating a need for an engaging, well-structured event discovery interface.",
      users: "College students looking to discover campus events and student organizations seeking to present their activities.",
      myRole: "I was the web app designer. I designed the interface, helped improve the experience, and contributed to the first MVP, developing and improving an existing idea through design.",
      process: [
        "Collaborated with the project founder to understand the existing vision and target student audience.",
        "Structured interface layouts for a Livingstone / For You view and an Explore section.",
        "Designed UI components for event cards, calendar views, and the RSVP flow.",
        "Mapped interface wireframes for event creation, student profiles, and activity streams.",
        "Contributed to building the first working MVP through collaborative design iterations."
      ],
      solution: "A clean user interface for the Evida web app MVP, featuring structured layouts for event discovery, calendar RSVP interactions, student profiles, and event creation.",
      toolsUsed: ["Interface Design", "Figma", "UI/UX Prototyping", "Design Systems"],
      results: [
        "Designed the complete user interface for the first Evida web app MVP.",
        "Improved the user experience for exploring campus events, viewing calendars, and RSVPing.",
        "Successfully contributed design expertise to advance a collaborative student project."
      ],
      whatILearned: "How to collaborate on an existing project concept, crediting original foundations while driving meaningful improvements through user-centered interface design.",
      visualsNote: "Interface screens displaying the Livingstone event feed, Explore view, and RSVP interaction flow."
    }
  },
  "lc-stem": {
    title: "LC STEM Student Showcase Website",
    category: "AI Product Builder",
    badge: "Student Showcase",
    date: "August 2026",
    shortDescription: "A collaborative website created to showcase Livingstone College's STEM students, their work, and diverse academic pathways.",
    caseStudy: {
      overview: "A website created to showcase Livingstone College’s STEM students and their work. It helps people exploring a field connect that subject with real students and their experiences.",
      problem: "Students exploring STEM fields often lack visibility into real student journeys, coursework, and projects within the academic community.",
      users: "Current and prospective students exploring STEM pathways, peers, faculty, and visitors interested in collegiate student work.",
      myRole: "I collaborated on creating the website as a shared project, focusing on student representation and visibility across STEM pathways such as Data Analytics.",
      process: [
        "Collaborated with project partners to establish student visibility as the central mission.",
        "Structured pathways allowing visitors to explore STEM fields through real student work.",
        "Contributed personal profile and project content representing Data Analytics and Computer Information Systems.",
        "Designed website layouts that highlight student experiences, academic journeys, and work.",
        "Maintained a focus on student representation rather than just an institutional information page."
      ],
      solution: "A shared showcase website highlighting Livingstone College STEM students, providing authentic student profiles and project work to help visitors explore STEM disciplines.",
      toolsUsed: ["Web Design", "Student Representation", "Content Strategy", "HTML/CSS"],
      results: [
        "Collaboratively built a web platform centered on student visibility and academic storytelling.",
        "Represented real student pathways in Data Analytics and Computer Information Systems.",
        "Provided an inspiring, relatable showcase for individuals exploring STEM fields."
      ],
      whatILearned: "How digital representation and genuine student visibility help connect prospective learners with academic pathways in a relatable, authentic way.",
      visualsNote: "Showcase page layout featuring student profiles, project highlights, and STEM pathway overviews."
    }
  },
  "wonder-draw": {
    title: "Wonder Draw",
    category: "AI Product Builder",
    badge: "Personal Learning Tool",
    date: "October 2026",
    shortDescription: "A personal learning web app adapted from an existing concept, designed to explore topics across categories and practice conversational explanation.",
    caseStudy: {
      overview: "A personal learning web app designed to help me broaden my knowledge in a fun way and become more comfortable talking about what I learn with other people.",
      problem: "Gaining new knowledge can easily stay passive unless paired with an engaging way to select subjects, explore ideas, and practice explaining them clearly in conversation.",
      users: "Personal learning use case—developed for my own learning routine and for anyone looking to turn curiosity into active conversational practice.",
      myRole: "I adapted an existing concept into my own version, organized around categories and subjects I am learning, supporting choosing topics within these areas to explore.",
      process: [
        "Defined core personal learning objectives: expand general knowledge and build conversational confidence.",
        "Studied an existing digital concept and adapted it into my own personalized version.",
        "Organized topic categories around subjects and areas I am actively learning.",
        "Implemented an interface flow for selecting and exploring topics within those categories.",
        "Used the tool regularly to practice articulating and explaining learned concepts."
      ],
      solution: "A personal learning web application organized around learning categories and subjects, enabling users to choose topics and practice conversational explanation.",
      toolsUsed: ["Web Development", "UI Prototyping", "Learning Design", "Concept Adaptation"],
      results: [
        "Successfully adapted an existing concept into a personal learning tool.",
        "Established an organized topic selection framework across areas of active study.",
        "Achieved the confirmed outcome of creating my own functional learning and practice tool."
      ],
      whatILearned: "How to adapt existing concepts into personalized digital tools that connect curiosity, continuous learning, and effective verbal communication.",
      visualsNote: "Web app interface screens showing category selection and topic prompt cards."
    }
  },
  "mastercard-challenge": {
    title: "Mastercard Inclusive Growth Challenge",
    category: "Data Analytics",
    badge: "Challenge Finalist",
    date: "Spring 2026",
    shortDescription: "A team data analytics project exploring socioeconomic barriers in Robeson County, NC, connecting community indicators to a proposed solution called Strive.",
    caseStudy: {
      overview: "As part of a four-person team called Tech Mongers, we explored barriers to inclusive growth in Robeson County, North Carolina, and connected community indicators to a practical response called Strive.",
      problem: "Robeson County communities face complex, multi-dimensional barriers to inclusive growth that require synthesizing multiple community indicators into an actionable strategy.",
      users: "Community stakeholders, economic development leaders, and competition evaluators seeking evidence-backed inclusive growth solutions.",
      myRole: "I served as team lead and business analyst. I helped organize the analysis, connect the evidence to a community problem, and shape the proposed solution.",
      process: [
        "Examined community indicators including internet access, labor market engagement, female poverty, early education, and health insurance.",
        "Analyzed reported index scores across these areas (18, 29, 20, 22, and 24 respectively; index scores, not percentages).",
        "Led the four-person Tech Mongers team in synthesizing findings and connecting evidence to community problems.",
        "Shaped the proposed solution, Strive, as a practical response to identified barriers.",
        "Prepared and delivered the team's presentation to the competition evaluation panel."
      ],
      solution: "A structured data analysis and recommendation framework called Strive, connecting five key community indicator index scores to a practical community response in Robeson County.",
      toolsUsed: ["Data Analysis", "Community Indicators", "Team Leadership", "Business Analysis"],
      results: [
        "Our team became a Challenge Finalist.",
        "Successfully synthesized five key community indicators into an evidence-based recommendation.",
        "Led a four-person team in delivering a comprehensive social innovation proposal."
      ],
      whatILearned: "How to lead an analytical team, translate multi-dimensional community indicators into a proposed solution, and build actionable recommendations from evidence.",
      visualsNote: "Community indicator data charts and final challenge presentation slides."
    }
  },
  "chinook-sql": {
    title: "Chinook Data Analysis",
    category: "Data Analytics",
    badge: "SQL Analysis",
    date: "July 2026",
    shortDescription: "An independent relational SQL analysis querying the Chinook music-store database to investigate sales patterns across customers, invoices, and catalog data.",
    caseStudy: {
      overview: "An independent SQL analysis of the Chinook sample music-store database, exploring business questions about sales and purchasing patterns across customers, invoices, tracks, artists, genres, and employees.",
      problem: "Understanding business dynamics across an e-commerce music store requires querying relational schemas to evaluate purchasing trends, invoice distributions, and employee sales patterns.",
      users: "Business analysts, store managers, and decision-makers seeking quantitative evidence from relational database transactions.",
      myRole: "I used MySQL Workbench to query related tables, with filtering, grouping, joins, aggregations, and subqueries, focusing on converting business questions into queries and interpreting returned data.",
      process: [
        "Explored the Chinook relational database schema and table relationships in MySQL Workbench.",
        "Formulated SQL queries to investigate sales and purchasing patterns.",
        "Utilized filtering, grouping, joins, aggregations, and subqueries to query related tables.",
        "Executed queries and inspected returned data rows for consistency and relational integrity.",
        "Interpreted the query results to extract clear, data-backed business insights."
      ],
      solution: "A comprehensive SQL analysis querying related tables in MySQL Workbench to answer key business questions regarding invoice patterns, customer purchases, and catalog metrics.",
      toolsUsed: ["SQL", "MySQL Workbench", "Relational Database Querying"],
      results: [
        "Successfully converted key business questions into multi-table SQL queries.",
        "Queried relational tables using joins, groupings, aggregations, and subqueries in MySQL Workbench.",
        "Interpreted query results to provide clear evidence on purchasing and sales patterns."
      ],
      whatILearned: "How to query multi-table relational databases in MySQL Workbench, translate business inquiries into SQL, and interpret returned data accurately.",
      visualsNote: "SQL query code snippets and resulting query output tables in MySQL Workbench."
    }
  }
};

