// ─────────────────────────────────────────────────────────────
//  projects.js  —  single source of truth for all project data
//
//  Each project has:
//    id          → matches folder name in /public/projects/{id}/
//    theme       → CSS class applied to project page (see index.css)
//    accent      → hex, used for og:theme-color etc.
//    name        → display title
//    tagline     → italic subtitle under title
//    tags        → shown as pills in hero
//    meta        → client / role / year
//    desc        → hero description paragraph
//    demoUrl     → link for "Try the demo" CTA (null to hide)
//    overview    → { problem, solution }
//    inspiration → blockquote string
//    process     → array of { num, title, desc }
//    screens     → array of screen names (images live in /public/projects/{id}/)
//
//  Image paths expected in /public/projects/{id}/:
//    hero-mockup.png, MockUp.png, logo.png,
//    using-mockup.png, userFlow.png, MP4.mp4
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    id: "runApp",
    theme: "theme-runApp",
    accent: "#05df72",
    name: "Running App",
    tagline: "Track your run. Share your pace.",
    tags: ["React", "API Integration"],
    meta: { client: "Fitness", role: "UI + Front-End", year: "2026" },
    desc: "More than a running tracker — this app turns every run into a shared experience. Capture your progress, express your moments, and connect with a community that runs alongside you.",
    demoUrl: null,

    overview: {
      problem:
        "Running apps often focus only on numbers. But motivation comes from emotion, connection, and shared experiences.",

      solution:
        "A hybrid platform that combines performance tracking with social storytelling. Allowing users to not only measure their runs, but also share them, react, and grow together.",
    },

    inspiration:
      '"Running is easier when you are not running alone, every step becomes more meaningful when it’s shared."',

    process: [
      {
        num: "01",
        title: "Live Data Tracking",
        desc: "Capture your distance, pace, and time — every run becomes part of your story.",
      },
      {
        num: "02",
        title: "Social Feed Experience",
        desc: "Share runs, post updates, and interact with others through likes, comments, and engagement.",
      },
      {
        num: "03",
        title: "Seamless Interaction",
        desc: "Smooth transitions between tracking, posting, and browsing — no interruption to the user flow.",
      },
      {
        num: "04",
        title: "Responsive & Active Lifestyle Design",
        desc: "Optimized for on-the-go use, adapting effortlessly across mobile and desktop devices.",
      },
    ],

    screens: [
      "Run Tracking",
      "Activity Feed",
      "Post Detail",
      "User Profile",
      "Mobile",
    ],
  },
  {
    id: "takeTask",
    theme: "theme-takeTask",
    accent: "#FFAE00",
    name: "Plan Task",
    tagline: "Track smarter, do more.",
    tags: ["UX Design", "Mobile App"],
    meta: { client: "Personal Project", role: "UX + Front-End", year: "2024" },
    desc: "An AI-powered to-do app that automatically organises tasks from your calendar, email & messages — so you can focus on doing.",
    demoUrl: "./public/projects/takeTask/plan_task_app.html",
    overview: {
      problem:
        "Most checklist tools lack intelligent prioritisation. Users waste time sorting, typing, and reorganising — the very overhead they wanted to eliminate.",
      solution:
        "Plan Task pulls from calendar, email and messages to build your daily list automatically. Then applies AI to surface what actually matters right now.",
    },
    inspiration:
      '"Get back to basics, focusing on doing — not organising. The best to-do list should be simple, intuitive, and automated. Reduce cognitive load; free up mental energy."',
    process: [
      {
        num: "01",
        title: "Research & UX Strategy",
        desc: "Analysed productivity apps to map friction points and define an efficient task flow.",
      },
      {
        num: "02",
        title: "Wireframe & Prototype",
        desc: "Interactive prototypes to validate task creation, priority setting, and automation flows.",
      },
      {
        num: "03",
        title: "UI Design",
        desc: "Dark-mode first. AI-powered priority badges. Minimal chrome, maximum clarity.",
      },
      {
        num: "04",
        title: "Front-End Dev",
        desc: "Smooth task updates and automation hooks built in React with real-time state.",
      },
      {
        num: "05",
        title: "User Testing",
        desc: "Usability rounds iterated on task input speed, badge legibility, and notification clarity.",
      },
    ],
    screens: [
      "Welcome",
      "Home",
      "Weekly",
      "Monthly",
      "Add Task",
      "Notifications",
    ],
  },

  {
    id: "easyBank",
    theme: "theme-easyBank",
    accent: "#2563eb",
    name: "Easy Bank",
    tagline: "Precision code for a trustworthy banking experience.",
    tags: ["React/CSS", "UI/UX Implementation", "Fintech Design"],
    demoUrl: "./public/projects/easyBank/easy_bank_app.html",
    meta: {
      client: "Personal Project",
      role: "UI",
      year: "2025",
    },
    desc: "A faithful reproduction of a modern digital banking identity. This project explores how front-end architecture—through meticulous typography, color systems, and micro-interactions—communicates 'Security' and 'Professionalism' to the end-user.",
    demoUrl: "./public/projects/easyBank/easy_bank_app.html",
    overview: {
      problem:
        "In the digital finance sector, the challenge lies in presenting dense financial information clearly while maintaining a high-fidelity brand identity that fosters user trust.",
      solution:
        "Utilized a modular React component architecture and a strict CSS variable system to ensure design consistency. Enhanced user engagement through intuitive haptic-like feedback, a clear typographic hierarchy for financial data, and seamless navigation transitions.",
    },
    inspiration:
      "“Exceptional front-end development is the intersection of technical precision and aesthetic sensibility.”",
    process: [
      {
        num: "01",
        title: "Visualizing Brand Authority",
        desc: "Translated a specific brand palette (e.g., #2563eb) and layout constraints into code that prioritizes readability for balances, exchange rates, and transaction history.",
      },
      {
        num: "02",
        title: "Design-to-Code Precision",
        desc: "Implemented a mobile-first responsive layout featuring custom linear gradients, complex box-shadows, and functional components like currency exchange modules and secure transfer forms.",
      },
    ],
    screens: [
      "Asset Overview",
      "Quick Actions",
      "Transaction History",
      "Finance Hub",
      "Mobile Optimization",
    ],
  },
  {
    id: "bookFlight",
    theme: "theme-bookFlight",
    accent: "#2563EB",
    name: "Flight Booking",
    tagline: "Booking your flight, enjoy your life.",
    tags: ["React", "Front-End Dev"],
    meta: { client: "Flight Company", role: "UX + Front-End", year: "2024" },
    desc: "Transforming a seemingly simple booking form into an intelligent interface — exploring Vue.js component architecture and reactive data flow.",
    demoUrl: "./public/projects/bookFlight/flight-booking-demo.html",
    overview: {
      problem:
        "Flight booking forms are notorious for user errors. Wrong return dates, missed passengers, confusing one-way vs return states.",
      solution:
        "A modular Vue component system. With smart validation: return date locks before departure date, one-way mode hides irrelevant fields, the submit button only activates when the form is genuinely complete.",
    },
    inspiration:
      '"A great application requires not only solid technical skills but also a deep understanding of user needs."',
    process: [
      {
        num: "01",
        title: "Data Flow & Validation",
        desc: "Designed a robust validation system — return date can never precede departure date, with instant visual feedback.",
      },
      {
        num: "02",
        title: "Intelligent Interaction Design",
        desc: "Conditional rendering hides the return date section for one-way flights, reducing visual clutter.",
      },
      {
        num: "03",
        title: "Component Architecture",
        desc: "Date Picker, City Picker, Passenger Counter — each a self-contained, reusable Vue component.",
      },
      {
        num: "04",
        title: "Form State Management",
        desc: "Tracked all input state to control the submit button, guiding users smoothly through the process.",
      },
    ],
    screens: ["Search", "Date Picker", "Passenger", "Results", "Confirm"],
  },
  {
    id: "goTravel",
    theme: "theme-goTravel",
    accent: "#ff6000",
    name: "Let's Travel",
    tagline: "Visual storytelling for explorers.",
    tags: ["HTML/CSS", "CSS Grid"],
    meta: {
      client: "Travel Website",
      role: "UI Design",
      year: "2024",
    },
    desc: "A travel site that uses captivating imagery and fluid layout to ignite the desire to explore — built with CSS Grid and a component-based mindset.",
    demoUrl: "./public/projects/goTravel/goTravel-demo.html",
    overview: {
      problem:
        "Travel sites drown users in information. The design challenge: make large amounts of content feel light, digestible, inspiring.",
      solution:
        "Card-based layout with CSS Grid and Flexbox — each destination card as a bounded, scannable object. Mobile-first responsive design that reflows gracefully on any screen.",
    },
    inspiration:
      '"A travel website is more than information — it\'s the starting point for longing."',
    process: [
      {
        num: "01",
        title: "Modular Layout Design",
        desc: "Broke content into independent sections — 'Why Choose Us', 'Top Destinations', 'Blog' — each with its own visual rhythm.",
      },
      {
        num: "02",
        title: "Responsive Web Design",
        desc: "Mobile-first strategy: cards stack vertically on phones, expand to a grid on desktop.",
      },
      {
        num: "03",
        title: "Complex Layout Mastery",
        desc: "Extensive CSS Grid and Flexbox, deeply understanding multi-layered layout control.",
      },
    ],
    screens: ["Hero", "Destinations", "Why Us", "Blog", "Mobile"],
  },
  {
    id: "publicTransp",
    theme: "theme-publicTransp",
    accent: "#7C3AED",
    name: "Zei Qia",
    tagline: "Navigate the city.",
    tags: ["UI Design", "Figma", "Mobile App"],
    meta: { client: "Public Transport", role: "UI + UX", year: "2025" },

    desc: "A real-time transportation app that brings together buses, trains, metro, high-speed rail, and bike systems into one seamless search experience — turning complex live data into calm, reliable information for everyday travel.",

    demoUrl: "./public/projects/publicTransp/public-transport-demo.html",

    overview: {
      problem:
        "How to handle real-time data, asynchronous states, and multiple transport systems. While keeping the experience simple, fast, and stress-free for users on the move.",

      solution:
        "Rather than displaying all available data, the approach focused on filtering and prioritising information. Through clear hierarchy, real-time updates, and responsive search, complex transport data is distilled into a calm, easy-to-navigate experience.",
    },

    inspiration:
      '"Good transit design is not about showing more data — it’s about showing the right data at the right moment."',

    process: [
      {
        num: "01",
        title: "Framing the Problem",
        desc: "Defined the core challenge as managing a large volume of real-time transport data without overwhelming users, focusing on clarity and usability over completeness.",
      },
      {
        num: "02",
        title: "Information Architecture",
        desc: "Structured multiple transport systems — bus, rail, metro, high-speed rail, and bike — into a clear and consistent hierarchy to support quick scanning and understanding.",
      },
      {
        num: "03",
        title: "Designing for Real-Time Behaviour",
        desc: "Mapped how live data should behave in the interface, ensuring updates feel natural and reliable rather than disruptive or confusing.",
      },
      {
        num: "04",
        title: "Interaction & Feedback",
        desc: "Designed instant search and filtering interactions that respond immediately to user input, reducing friction and supporting fast decision-making.",
      },
      {
        num: "05",
        title: "Clarity in Complexity",
        desc: "Refined layouts, spacing, and visual hierarchy to transform dense information into a calm, readable interface suitable for on-the-go use.",
      },
    ],

    screens: ["Search", "Route List", "Stop Detail", "Arrival Times", "Mobile"],
  },
];

// Helper — get a single project by id
export const getProject = (id) => projects.find((p) => p.id === id) ?? null;
