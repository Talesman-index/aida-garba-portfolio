export const PORTFOLIO_DATA = {
  profile: {
    name: "Aïda Garba",
    title: "AI Product Management & Data Analytics Portfolio",
    tagline: "Student-athlete turning real problems into practical products and data-driven solutions.",
    bio: "Hi, I’m Aïda Garba. I am a Computer Information Systems student at Livingstone College with a 4.0 GPA, an NCAA Division II tennis player, and an academic tutor. Balancing academics, athletics, work, and personal projects has strengthened my discipline, leadership, communication, and time-management skills.",
    gpa: "4.0",
    school: "Livingstone College",
    major: "Computer Information Systems",
    location: "Salisbury, North Carolina, USA",
    email: "garbaim27@gmail.com",
    linkedin: "https://linkedin.com/in/aidagarba",
    github: "https://github me",
    athletics: "NCAA Division II Tennis",
    tutoring: "College Math & Computer Info Systems"
  },

  focusAreas: [
    {
      id: "ai-pm",
      title: "AI Product Management",
      icon: "Sparkles",
      badge: "Product Discovery & AI Workflows",
      description: "Building useful digital products centered around real user needs, prompt engineering, and safety-first AI interaction design."
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      icon: "BarChart3",
      badge: "SQL, Power BI & Python Insights",
      description: "Using data to identify business problems, explain patterns, build interactive dashboards, and support strategic decisions."
    }
  ],

  marqueeSkills: [
    "Product Discovery", "Prompt Engineering", "SQL Querying", "Power BI Dashboards",
    "Python Analytics", "User Flows & Wireframes", "MVP Scoping", "Supervised ML Concepts",
    "Figma Prototyping", "Supabase & Antigravity", "KPI Development", "Data Storytelling"
  ],

  skillsCategorized: {
    productManagement: [
      "Product Discovery",
      "User Research",
      "Problem Definition",
      "MVP Scoping",
      "Feature Prioritization",
      "User Flows",
      "Rapid Prototyping",
      "Product Testing",
      "Prompt Engineering",
      "Product Storytelling"
    ],
    dataAnalytics: [
      "Excel (Pivots, Formulas)",
      "SQL (Joins, Subqueries)",
      "Python (Pandas, EDA)",
      "Power BI",
      "Data Cleaning",
      "KPI Development",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Business Insights"
    ],
    tools: [
      "Excel",
      "SQL",
      "Python",
      "Power BI",
      "Figma",
      "Canva",
      "Antigravity",
      "Supabase",
      "GitHub",
      "Vercel"
    ]
  },

  projects: [
    {
      id: "livingstone-timesheet",
      title: "Livingstone College Digital Timesheet System",
      category: "AI Product Management",
      categoryId: "ai-pm",
      shortDescription: "A digital system created to replace paper tutor timesheets, automatically calculating hours and eliminating submission errors.",
      badge: "Operational PM MVP",
      featured: true,
      impactMetric: "0% Calculation Errors • 70% Time Saved",
      date: "2024",
      tags: ["Antigravity", "Supabase", "Figma", "Process Automation"],
      
      // 10-Point Blueprint
      caseStudy: {
        overview: "A digital management application designed to replace outdated, manual paper-based tutor timesheets at Livingstone College.",
        problem: "The paper timesheet workflow suffered from frequent calculation errors, illegible handwriting, missing required fields, and an excessive administrative burden for supervisors verifying manual entries.",
        users: "Academic Tutors (need fast, error-proof hour logging) and Tutoring Center Supervisors (need automated aggregation, missing data flags, and 1-click approvals).",
        myRole: "Product Manager & UX Designer. I identified the problem through my own experience as a tutor, mapped end-to-end user flows, selected main MVP features, tested prototype iterations, and improved the overall process.",
        process: [
          "Identified paper friction points through tutor & staff interviews.",
          "Mapped dual user journeys for Tutors (Submit) and Supervisors (Approve).",
          "Defined automated validation rules to stop incomplete entries.",
          "Prototyped & tested MVP interface using Antigravity & Supabase.",
          "Gathered tutor feedback and refined the submission flow."
        ],
        solution: "A mobile-responsive web platform featuring automated hour calculations across shift start/end times, input validation for mandatory fields, and a supervisor dashboard with consolidated approvals.",
        toolsUsed: ["Antigravity", "Supabase", "Figma", "GitHub", "Vercel"],
        results: [
          "0% calculation errors across all digital submissions.",
          "70% reduction in supervisor review & payroll processing time.",
          "Instant digital receipt and log confirmation for tutors."
        ],
        whatILearned: "How to transform a real operational problem from daily life into a practical, high-efficiency digital product.",
        visualsNote: "Interactive flow diagram & mobile interface mockup showing automated time calculations and validation warnings."
      }
    },
    {
      id: "shalom-recovery-ai",
      title: "Shalom Recovery AI",
      category: "AI Product Management",
      categoryId: "ai-pm",
      shortDescription: "An AI-assisted postoperative recovery platform designed to support patients after surgery with symptom tracking and safety guardrails.",
      badge: "Healthcare AI PM",
      featured: true,
      impactMetric: "Safety Guardrails • Empathetic AI Triage",
      date: "2024",
      tags: ["AI Prompting", "Healthcare PM", "Figma", "Safety Design"],

      caseStudy: {
        overview: "An AI-assisted postoperative recovery platform designed to empower patients during home recovery with clear instructions, symptom checking, and safety escalation.",
        problem: "Post-surgery recovery can be confusing and anxious. Patients misplace discharge papers, miss medication windows, or struggle to differentiate normal healing symptoms from warning signs requiring emergency medical attention.",
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
        toolsUsed: ["Prompt Engineering", "Figma", "Supabase", "Antigravity", "Python"],
        results: [
          "Designed a safety-focused conversational triage flow.",
          "Established clear user trust disclosures and emergency fallback paths.",
          "Reduced patient anxiety through 24/7 symptom guidance."
        ],
        whatILearned: "How to design an AI product for a sensitive environment while prioritizing safety, clarity, user trust, and medical guardrails.",
        visualsNote: "Conversational UI mockup displaying symptom check-in with safety alert escalation callout."
      }
    },
    {
      id: "evida",
      title: "Evida Campus Events Platform",
      category: "AI Product Management",
      categoryId: "ai-pm",
      shortDescription: "A centralized campus events platform that helps college students discover events, RSVP, and connect with student organizations.",
      badge: "Campus Mobile MVP",
      featured: true,
      impactMetric: "Unified Discovery • Scoped MVP Roadmap",
      date: "2024",
      tags: ["Mobile UX", "MVP Scoping", "Figma", "User Research"],

      caseStudy: {
        overview: "A centralized campus events platform that helps students discover events, RSVP, manage schedules, and connect with campus student organizations.",
        problem: "Campus event announcements were fragmented across emails, physical flyers, and random social media posts, causing low student attendance and missed engagement opportunities.",
        users: "College Students looking for local campus events & clubs, and Student Organizations needing an easy way to promote events and track RSVPs.",
        myRole: "Product Lead & Designer. Defined product vision, identified target user groups, designed platform navigation, prioritized core features, and prototyped the mobile app experience.",
        process: [
          "Conducted campus survey on student event discovery habits.",
          "Created feature prioritization matrix (Must-Have vs. Nice-to-Have).",
          "Structured mobile navigation architecture & event filtering tags.",
          "Designed high-fidelity mobile wireframes in Figma.",
          "Validated prototype usability with student testers."
        ],
        solution: "A mobile-first event discovery app with real-time category filtering (Sports, Academic, Social), 1-tap RSVP, calendar synchronization, and an org directory.",
        toolsUsed: ["Figma", "Canva", "Antigravity", "GitHub", "Vercel"],
        results: [
          "Successfully simplified a broad concept into a crisp, focused Mobile MVP.",
          "Consolidated multi-channel event discovery into a single mobile dashboard."
        ],
        whatILearned: "How to simplify a large product idea, organize multiple user needs, and focus strictly on the most impactful MVP features.",
        visualsNote: "Mobile screen flow showcasing event discovery feed, event details, and 1-tap RSVP button."
      }
    },
    {
      id: "mastercard-challenge",
      title: "Mastercard Inclusive Growth Challenge",
      category: "Data Analytics",
      categoryId: "data-analytics",
      shortDescription: "A team project using community health datasets to address healthcare access challenges in Robeson County, NC.",
      badge: "Challenge Finalist 🏆",
      featured: true,
      impactMetric: "Selected as Finalist • Team Lead",
      date: "2024",
      tags: ["Python EDA", "Community Data", "Team Leadership", "Data Pitch"],

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
          "Selected as a Challenge Finalist 🏆.",
          "Recognized for strong data storytelling and practical community application."
        ],
        whatILearned: "How to lead a multi-disciplinary team, communicate complex data findings clearly, and link demographic insights to practical innovation.",
        visualsNote: "Geographic data heat maps, population access charts, and final pitch presentation deck slide."
      }
    },
    {
      id: "consumer-complaints",
      title: "Consumer Complaint Risk Analysis",
      category: "Data Analytics",
      categoryId: "data-analytics",
      shortDescription: "An Excel & Power BI analytics project evaluating thousands of financial consumer complaints, trends, high-risk products, and response SLAs.",
      badge: "Excel & BI Dashboard",
      featured: true,
      impactMetric: "7 Key Business KPIs • SLA Risk Tracking",
      date: "2024",
      tags: ["Excel Pivots", "Power BI", "KPI Dashboard", "Risk Analysis"],

      caseStudy: {
        overview: "An end-to-end data analytics project examining financial consumer complaints to identify operational risks, product flaws, and institutional response compliance.",
        problem: "Financial institutions receive high volumes of unorganized consumer complaints, making it difficult for executives to identify root-cause product failures or compliance SLA breaches.",
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
    {
      id: "chinook-sql",
      title: "Chinook SQL Relational Database Analysis",
      category: "Data Analytics",
      categoryId: "data-analytics",
      shortDescription: "A SQL project querying a digital music store database to evaluate revenue trends, customer lifetime value, best-selling genres, and sales rep performance.",
      badge: "Advanced SQL Queries",
      featured: true,
      impactMetric: "Multi-Table JOINs • Business Insights",
      date: "2024",
      tags: ["SQL", "Relational DB", "Business Intelligence", "Data Querying"],

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
  ],

  experience: [
    {
      role: "Livingstone College Student Assistant Mentor",
      organization: "Livingstone College — Summer STEM Program",
      location: "Salisbury, NC",
      period: "Summer Program",
      description: "Supported incoming STEM students during their campus transition, guiding them through academic routines, STEM projects, and daily activities.",
      responsibilities: [
        "Mentored students in academic and STEM activities, creating a supportive learning environment.",
        "Assisted program staff with daily logistics, event coordination, and campus navigation.",
        "Encouraged student participation, teamwork, and structured time management.",
        "Strengthened leadership, communication, adaptability, and organizational skills."
      ]
    },
    {
      role: "Academic Tutor — CIS & Mathematics",
      organization: "Livingstone College Tutoring Center",
      location: "Salisbury, NC",
      period: "Academic Year",
      description: "Provide academic coaching for students in College Mathematics and Computer Information Systems courses.",
      responsibilities: [
        "Explain complex technical concepts (algorithms, databases, algebra) in accessible terms.",
        "Guide students through step-by-step problem breakdown to build confidence.",
        "Develop tailored tutoring techniques for diverse learning styles.",
        "Strengthened patience, technical communication, and analytical coaching."
      ]
    }
  ],

  achievements: [
    { title: "4.0 Cumulative GPA", detail: "Livingstone College — Highest Academic Honors", icon: "Award" },
    { title: "NCAA Division II Student-Athlete", detail: "Varsity Tennis Team Competitor", icon: "Activity" },
    { title: "Mastercard Inclusive Growth Challenge Finalist", detail: "National Innovation Challenge Finalist", icon: "Trophy" },
    { title: "Presidential Scholar Merit Award", detail: "Top Academic Merit Recognition", icon: "Star" },
    { title: "Academic Excellence Award", detail: "Recognized for Outstanding CIS Performance", icon: "BookOpen" },
    { title: "Academic Athlete Excellence Award", detail: "Honored for Balancing D-II Sports & 4.0 GPA", icon: "Zap" },
    { title: "STEM White Coat Recipient", detail: "Livingstone College STEM Excellence Distinction", icon: "ShieldCheck" },
    { title: "Honors Society Member", detail: "Active Academic Honor Society Member", icon: "GraduationCap" }
  ]
};
