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
    .gitos-services-title,
    .gitos-service-card,
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
    if (el.classList.contains('gitos-service-card') || el.classList.contains('protfolis-card')) {
      const stagger = (index % 3) * 0.12;
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
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-wrap');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
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
      </div>
      <h2 style="font-size: 2.2rem; font-weight: 800; color: #111111; line-height: 1.25; letter-spacing: -0.02em;">${project.title}</h2>
      <p style="font-size: 1.05rem; color: #4B5563; margin-top: 0.65rem; line-height: 1.6; font-weight: 500;">${project.shortDescription}</p>
    </div>

    <!-- Points 1 & 2: Overview & Problem -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem; margin-bottom: 1.25rem; text-align: left;">
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
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem; margin-bottom: 1.25rem; text-align: left;">
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

/* Complete Project Data Repository */
const PROJECTS_DATA = {
  "livingstone-timesheet": {
    title: "Livingstone College Digital Timesheet System",
    category: "AI Product Management",
    badge: "Operational PM MVP",
    shortDescription: "A digital system created to replace paper tutor timesheets, automatically calculating work hours and eliminating submission errors.",
    caseStudy: {
      overview: "A digital management application designed to replace outdated, manual paper-based tutor timesheets at Livingstone College.",
      problem: "Paper timesheet workflows suffered from frequent calculation errors, illegible handwriting, missing required fields, and an excessive administrative burden for supervisors.",
      users: "Academic Tutors (need fast, error-proof hour logging) and Tutoring Center Supervisors (need automated aggregation, missing data flags, and 1-click approvals).",
      myRole: "Product Manager & UX Designer. Identified the problem through personal tutoring experience, mapped end-to-end user flows, selected main MVP features, and tested interface iterations.",
      process: [
        "Identified paper friction points through tutor & staff interviews.",
        "Mapped dual user journeys for Tutors (Submit) and Supervisors (Approve).",
        "Defined automated validation rules to stop incomplete entries.",
        "Prototyped MVP interface using Lovable & Supabase.",
        "Gathered tutor feedback and refined submission flow."
      ],
      solution: "A mobile-responsive web platform featuring automated hour calculations across shift start/end times, input validation for mandatory fields, and a supervisor dashboard with consolidated approvals.",
      toolsUsed: ["Lovable", "Supabase", "Figma", "GitHub", "Vercel"],
      results: [
        "0% calculation errors across all digital submissions.",
        "70% reduction in supervisor review & payroll processing time.",
        "Instant digital receipt and log confirmation for tutors."
      ],
      whatILearned: "How to transform a real operational problem from daily life into a practical, high-efficiency digital product.",
      visualsNote: "Interactive flow diagram & mobile interface mockup showing automated time calculations and validation warnings."
    }
  },
  "shalom-recovery-ai": {
    title: "Shalom Recovery AI",
    category: "AI Product Management",
    badge: "Healthcare AI PM",
    shortDescription: "An AI-assisted postoperative recovery platform designed to support patients after surgery with symptom tracking and safety guardrails.",
    caseStudy: {
      overview: "An AI-assisted postoperative recovery platform designed to empower patients during home recovery with clear instructions, symptom checking, and safety escalation.",
      problem: "Post-surgery recovery can be confusing and anxious. Patients misplace discharge papers, miss medication windows, or struggle to differentiate normal healing symptoms from warning signs.",
      users: "Post-operative Patients & Caregivers seeking clear guidance, and Healthcare Providers wanting better adherence and fewer non-emergency readmissions.",
      myRole: "AI Product Lead. Researched patient recovery challenges, defined target user personas, created conversational AI prompts, structured safety guardrails, and mapped escalation protocols.",
      process: [
        "Researched post-op patient pain points and discharge compliance.",
        "Defined medical safety criteria & red-flag symptom triggers.",
        "Engineered AI prompt rules for empathetic, non-diagnostic guidance.",
        "Designed user flows with explicit emergency call escalations.",
        "Iterated interface wireframes focusing on high readability for elderly patients."
      ],
      solution: "A web platform featuring intelligent symptom logging, automated medication/appointment reminders, and a safety-first triage engine that immediately directs critical symptoms to emergency medical support.",
      toolsUsed: ["Prompt Engineering", "Figma", "Supabase", "Lovable", "Python"],
      results: [
        "Designed a safety-focused conversational triage flow.",
        "Established clear user trust disclosures and emergency fallback paths.",
        "Reduced patient anxiety through 24/7 symptom guidance."
      ],
      whatILearned: "How to design an AI product for a sensitive environment while prioritizing safety, clarity, user trust, and medical guardrails.",
      visualsNote: "Conversational UI mockup displaying symptom check-in with safety alert escalation callout."
    }
  },
  "evida": {
    title: "Evida Campus Events Platform",
    category: "AI Product Management",
    badge: "Campus Mobile MVP",
    shortDescription: "A centralized campus events platform that helps college students discover events, RSVP, and connect with student organizations.",
    caseStudy: {
      overview: "A centralized campus events platform that helps students discover events, RSVP, manage schedules, and connect with campus student organizations.",
      problem: "Campus event announcements were fragmented across emails, physical flyers, and random social media posts, causing low student attendance.",
      users: "College Students looking for local campus events & clubs, and Student Organizations needing an easy way to promote events.",
      myRole: "Product Lead & Designer. Defined product vision, identified target user groups, designed platform navigation, prioritized core features, and prototyped the mobile app experience.",
      process: [
        "Conducted campus survey on student event discovery habits.",
        "Created feature prioritization matrix (Must-Have vs. Nice-to-Have).",
        "Structured mobile navigation architecture & event filtering tags.",
        "Designed high-fidelity mobile wireframes in Figma.",
        "Validated prototype usability with student testers."
      ],
      solution: "A mobile-first event discovery app with real-time category filtering, 1-tap RSVP, calendar synchronization, and an org directory.",
      toolsUsed: ["Figma", "Canva", "Lovable", "GitHub", "Vercel"],
      results: [
        "Successfully simplified a broad concept into a crisp, focused Mobile MVP.",
        "Consolidated multi-channel event discovery into a single mobile dashboard."
      ],
      whatILearned: "How to simplify a large product idea, organize multiple user needs, and focus strictly on the most impactful MVP features.",
      visualsNote: "Mobile screen flow showcasing event discovery feed, event details, and 1-tap RSVP button."
    }
  },
  "mastercard-challenge": {
    title: "Mastercard Inclusive Growth Challenge",
    category: "Data Analytics",
    badge: "Challenge Finalist",
    shortDescription: "A team project using community health datasets to address healthcare access challenges in Robeson County, NC.",
    caseStudy: {
      overview: "A team-based analytics and social innovation project investigating healthcare access disparities and testing bottlenecks in Robeson County, North Carolina.",
      problem: "Rural communities in Robeson County face severe healthcare access barriers, transportation limitations, and delayed medical testing response times.",
      users: "Rural North Carolina residents, local health clinics, and community healthcare organizers.",
      myRole: "Team Lead & Lead Data Analyst. Directed team research, analyzed demographic and community health datasets, connected data insights to our solution, and delivered the final presentation pitch.",
      process: [
        "Ingested and cleaned county-level health & socioeconomic datasets.",
        "Executed Exploratory Data Analysis (EDA) in Python to highlight access gaps.",
        "Formulated the 'Smart Petri Dish & Digital Platform' intervention.",
        "Synthesized analytical findings into compelling visual slides.",
        "Pitched team proposal to Mastercard innovation judges."
      ],
      solution: "A combined Smart Petri Dish diagnostic device and digital tracking platform designed to bring low-cost, rapid diagnostic testing directly to community health hubs.",
      toolsUsed: ["Python", "Excel", "Power BI", "Canva"],
      results: [
        "Selected as a Challenge Finalist.",
        "Recognized for strong data storytelling and practical community application."
      ],
      whatILearned: "How to lead a multi-disciplinary team, communicate complex data findings clearly, and link demographic insights to practical innovation.",
      visualsNote: "Geographic data heat maps, population access charts, and final pitch presentation deck slide."
    }
  },
  "consumer-complaints": {
    title: "Consumer Complaint Risk Analysis",
    category: "Data Analytics",
    badge: "Excel & BI Dashboard",
    shortDescription: "An Excel & Power BI analytics project evaluating thousands of financial consumer complaints, trends, high-risk products, and response SLAs.",
    caseStudy: {
      overview: "An end-to-end data analytics project examining financial consumer complaints to identify operational risks, product flaws, and institutional response compliance.",
      problem: "Financial institutions receive high volumes of unorganized consumer complaints, making it difficult for executives to identify root-cause product failures.",
      users: "Financial Risk Managers, Customer Experience Directors, and Compliance Officers.",
      myRole: "Sole Data Analyst. Defined the business problem, cleaned raw data, established KPIs, engineered PivotTables/charts, designed an interactive dashboard, and authored strategic executive recommendations.",
      process: [
        "Ingested & cleaned raw dataset (removed duplicates, fixed missing values).",
        "Calculated key business metrics (Total Complaints, Timely Response Rate %).",
        "Built dynamic PivotTables & PivotCharts categorized by Product & State.",
        "Designed an executive dashboard with interactive visual slicers.",
        "Drafted operational recommendations for high-risk credit reporting issues."
      ],
      solution: "An interactive Excel/Power BI Executive Dashboard tracking 7 core KPIs: Total Complaints, Top Product (Credit Reporting), Top Issue (Report Accuracy), Timely Response %, Complaints by Company, Geographic Distribution, and Monthly Trends.",
      toolsUsed: ["Excel (PivotTables, VLOOKUP, Advanced Charts)", "Power BI"],
      results: [
        "Identified Credit Reporting & Debt Collection as top 80% complaint drivers.",
        "Highlighted geographic complaint spikes across key US states.",
        "Delivered actionable recommendations to improve SLA response rates."
      ],
      whatILearned: "How to complete a full data-analysis project end-to-end—from understanding business goals to producing executive recommendations.",
      visualsNote: "Interactive Excel Dashboard displaying complaint trendlines, bar charts, and state heat maps."
    }
  },
  "chinook-sql": {
    title: "Chinook SQL Relational Database Analysis",
    category: "Data Analytics",
    badge: "Advanced SQL Queries",
    shortDescription: "A SQL project querying a digital music store database to evaluate revenue trends, customer spend, best-selling genres, and sales rep performance.",
    caseStudy: {
      overview: "A comprehensive SQL database analysis of the Chinook digital music store, dissecting sales performance, customer spend, geographic revenue, and artist popularity.",
      problem: "Store executives lacked visibility into customer purchasing frequency, regional revenue distribution, top sales representatives, and genre profitability.",
      users: "E-commerce Business Managers, Inventory Planners, and Sales Leadership.",
      myRole: "SQL Analyst. Explored relational schema, wrote complex multi-table JOIN queries, aggregated metrics, validated results, and converted SQL outputs into strategic business recommendations.",
      process: [
        "Analyzed 11-table relational schema (Invoices, Customers, Tracks, Albums, Artists, Employees).",
        "Wrote SQL queries utilizing INNER/LEFT JOINs, GROUP BY, HAVING, and Subqueries.",
        "Analyzed top revenue-generating countries & average invoice values.",
        "Evaluated employee sales performance against customer assignments.",
        "Summarized query outputs into executive presentation charts."
      ],
      solution: "A suite of optimized SQL business intelligence queries answering key strategic questions regarding global revenue hubs, top music genres (Rock/Alternative), and customer churn patterns.",
      toolsUsed: ["SQL (SQLite / PostgreSQL)", "Excel", "Data Visualization"],
      results: [
        "Identified USA, Canada, and France as top revenue countries.",
        "Pinpointed top-performing sales support agents.",
        "Provided data-driven playlist & promotional recommendations."
      ],
      whatILearned: "How to leverage SQL to answer real business questions and communicate technical database findings clearly to stakeholders.",
      visualsNote: "SQL query code snippets and resulting bar charts illustrating revenue by country and genre."
    }
  }
};
