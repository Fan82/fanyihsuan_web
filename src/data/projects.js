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
    id: "bookFlight",
    theme: "theme-bookFlight",
    accent: "#2563EB",
    name: "Flight Booking",
    tagline: "Booking your flight, enjoy your life.",
    tags: ["Vue.js", "Front-End Dev"],
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
    id: "easyBank",
    theme: "theme-easyBank",
    accent: "#16A34A",
    name: "Easy Bank",
    tagline: "Clean code, trusted brand.",
    tags: ["HTML/CSS", "Brand Design"],
    meta: { client: "Easy Bank", role: "Front-End Dev", year: "2023" },
    desc: "Faithfully reproducing a modern fintech brand's identity through a static website — an exploration of how front-end code communicates brand trust.",
    demoUrl: null,
    overview: {
      problem:
        "How to make code not only readable and maintainable but also a vehicle for brand identity and user trust.",
      solution:
        "Careful colour selection, typographic hierarchy, and hover micro-interactions bring the Easybank brand — simple, easy, modern — to life in every detail.",
    },
    inspiration:
      '"A good front-end developer must possess both technical skill and aesthetic sensibility."',
    process: [
      {
        num: "01",
        title: "Visualising Brand Identity",
        desc: "Translated colour, type, and layout into code that communicates simplicity and trust.",
      },
      {
        num: "02",
        title: "Design-to-Code",
        desc: "Converted spacing, typography, and layout from mockup into precise, clean CSS.",
      },
    ],
    screens: ["Hero", "Features", "Articles", "Footer", "Mobile"],
  },
  {
    id: "goTravel",
    theme: "theme-goTravel",
    accent: "#EA580C",
    name: "Let's Travel",
    tagline: "Visual storytelling for explorers.",
    tags: ["HTML/CSS", "CSS Grid"],
    meta: {
      client: "Travel Website",
      role: "Design + Front-End",
      year: "2023",
    },
    desc: "A travel site that uses captivating imagery and fluid layout to ignite the desire to explore — built with CSS Grid and a component-based mindset.",
    demoUrl: null,
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
    name: "Public Transportation",
    tagline: "Real-time data, zero stress.",
    tags: ["Vue.js", "API Integration"],
    meta: { client: "Public Transport", role: "UX + Front-End", year: "2024" },
    desc: "A real-time bus tracker that transforms a stream of live API data into a clear, intuitive query interface — because nobody should stress about missing their bus.",
    demoUrl: null,
    overview: {
      problem:
        "How to manage async operations, error states, and multi-component data coordination in Vue — while keeping the interface calm and informative.",
      solution:
        "Live filtering as you type, auto-refresh without manual page reload, full responsive design. Complex data made simple.",
    },
    inspiration:
      '"Why should a bus tracker update in real-time? Because a 2-minute-old arrival time is worse than no arrival time at all."',
    process: [
      {
        num: "01",
        title: "Real-Time Data Integration",
        desc: "Async JS requests to a live transit API, with automatic update intervals — no manual refresh needed.",
      },
      {
        num: "02",
        title: "Fluid Interface Interaction",
        desc: "Real-time keyword filtering — results update as you type, no page reload.",
      },
      {
        num: "03",
        title: "Responsive Design",
        desc: "Automatically adapts to any screen size — phone or desktop.",
      },
      {
        num: "04",
        title: "User-Centric Thinking",
        desc: "Every technical decision traced back to a real user need.",
      },
    ],
    screens: ["Search", "Route List", "Stop Detail", "Arrival Times", "Mobile"],
  },
  {
    id: "runApp",
    theme: "theme-runApp",
    accent: "#05df72",
    name: "Running App",
    tagline: "Real-time data, zero stress.",
    tags: ["Vue.js", "API Integration"],
    meta: { client: "Gym", role: "UI + Front-End", year: "2026" },
    desc: "A real-time bus tracker that transforms a stream of live API data into a clear, intuitive query interface — because nobody should stress about missing their bus.",
    demoUrl: null,
    overview: {
      problem:
        "How to manage async operations, error states, and multi-component data coordination in Vue — while keeping the interface calm and informative.",
      solution:
        "Live filtering as you type, auto-refresh without manual page reload, full responsive design. Complex data made simple.",
    },
    inspiration:
      '"Why should a bus tracker update in real-time? Because a 2-minute-old arrival time is worse than no arrival time at all."',
    process: [
      {
        num: "01",
        title: "Real-Time Data Integration",
        desc: "Async JS requests to a live transit API, with automatic update intervals — no manual refresh needed.",
      },
      {
        num: "02",
        title: "Fluid Interface Interaction",
        desc: "Real-time keyword filtering — results update as you type, no page reload.",
      },
      {
        num: "03",
        title: "Responsive Design",
        desc: "Automatically adapts to any screen size — phone or desktop.",
      },
      {
        num: "04",
        title: "User-Centric Thinking",
        desc: "Every technical decision traced back to a real user need.",
      },
    ],
    screens: ["Search", "Route List", "Stop Detail", "Arrival Times", "Mobile"],
  },
];

// Helper — get a single project by id
export const getProject = (id) => projects.find((p) => p.id === id) ?? null;
