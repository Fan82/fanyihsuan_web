export const projects = [
  {
    id: "runApp",
    theme: "theme-runApp",
    accent: "#05df72",
    name: "Running App",
    screenCount: 10,
    tagline: "Track your run. Share your pace.",
    tags: ["React", "API Integration"],
    meta: { client: "Fitness", role: "UI + Front-End", year: "2026" },
    desc: "I started running and wanted an app that actually fit my life. So I built one. A full-stack running app with real Supabase authentication, live GPS tracking via Leaflet.js, and a social feed to share runs with friends.",
    demoUrl: "https://fan82.github.io/runnnnn/",
    demoExternal: true,
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
        desc: "Capture your distance, pace, and time. Every run becomes part of your story.",
      },
      {
        num: "02",
        title: "Social Feed Experience",
        desc: "Share runs, post updates, and interact with others through likes, comments and engagement.",
      },
      {
        num: "03",
        title: "Seamless Interaction",
        desc: "Smooth transitions between tracking, posting, and browsing. No interruption to the user flow.",
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
    desc: "Started from a personal frustration too many tasks scattered across too many places. Went through 3 design iterations, used AI to help consolidate feature requirements, and landed on the simplest version that actually solves the problem.",
    demoUrl: "/projects/takeTask/plan_task_app.html",

    overview: {
      problem:
        "Most checklist tools lack intelligent prioritisation. After 3 rounds of redesign, the core insight was clear: the real problem isn't organisation. It's cognitive overload from deciding what to do next.",
      solution:
        "Plan Task pulls from calendar, email and messages to build your daily list automatically. AI surfaces what actually matters right now, so you spend less time organising and more time doing.",
    },

    inspiration:
      '"Get back to basics, focusing on doing which not organising. The best to-do list should be simple, intuitive, and automated. Reduce cognitive load, free up mental energy."',

    process: [
      {
        num: "01",
        title: "Research & 3 Rounds of Redesign",
        desc: "Iterated through 3 design versions which each one stripping away complexity until the core flow felt effortless.",
      },
      {
        num: "02",
        title: "AI-Assisted Feature Scoping",
        desc: "Had too many features I wanted to build. Used AI to help consolidate and prioritise requirements, keeping the product focused.",
      },
      {
        num: "03",
        title: "Wireframe & Prototype",
        desc: "Interactive prototypes to validate task creation, priority setting, and automation flows before writing any code.",
      },
      {
        num: "04",
        title: "UI Design",
        desc: "Dark-mode first. AI-powered priority badges. Minimal chrome, maximum clarity.",
      },
      {
        num: "05",
        title: "Front-End Dev",
        desc: "Smooth task updates and automation hooks built in React with real-time state.",
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
    screenCount: 6,
  },

  {
    id: "easyBank",
    theme: "theme-easyBank",
    accent: "#2563eb",
    name: "Easy Bank",
    tagline: "Precision code for a trustworthy banking experience.",
    tags: ["React/CSS", "UI Implementation", "Fintech Design"],
    demoUrl: "/projects/easyBank/easy_bank_app.html",
    meta: {
      client: "Personal Project",
      role: "UI + Front-End",
      year: "2025",
    },
    desc: "After studying the design patterns of multiple banking apps, I built my own interpretation — exploring how typography, color, and micro-interactions communicate trust and security in financial products.",

    overview: {
      problem:
        "Digital banking interfaces carry a unique design burden: they must feel secure and professional while remaining approachable. Studying real banking apps revealed how much visual language does the heavy lifting.",
      solution:
        "Built a modular React component system with a strict CSS variable design token structure — translating observed patterns into code, and adding micro-interactions that reinforce confidence at every touchpoint.",
    },

    inspiration:
      '"Exceptional front-end development is the intersection of technical precision and aesthetic sensibility."',

    process: [
      {
        num: "01",
        title: "Competitive Research",
        desc: "Studied multiple banking apps to identify shared visual patterns — how colour, spacing, and hierarchy build perceived trustworthiness.",
      },
      {
        num: "02",
        title: "Design Interpretation",
        desc: "Rather than copying, distilled the research into my own design language — same trust signals, different aesthetic voice.",
      },
      {
        num: "03",
        title: "Design Token System",
        desc: "Built a CSS variable system to enforce consistency across components — colours, spacing, and typography all driven by tokens.",
      },
      {
        num: "04",
        title: "Component Architecture",
        desc: "Modular React components for balance cards, transaction lists, exchange modules, and transfer forms — each self-contained and reusable.",
      },
    ],

    screens: [
      "Asset Overview",
      "Quick Actions",
      "Transaction History",
      "Finance Hub",
      "Mobile Optimization",
    ],
    screenCount: 5,
  },

  {
    id: "goTravel",
    theme: "theme-goTravel",
    accent: "#ff6000",
    name: "Let's Travel",
    tagline: "Visual storytelling for explorers.",
    tags: ["HTML/CSS", "CSS Grid"],
    meta: {
      client: "Personal Project",
      role: "UI Design",
      year: "2024",
    },
    desc: "Arriving somewhere unfamiliar and wanting to join a local tour that feeling inspired this project. A travel site designed to make destinations feel inviting and tours easy to discover, built with CSS Grid and a visual-first layout.",
    demoUrl: "/projects/goTravel/goTravel-demo.html",

    overview: {
      problem:
        "When you arrive somewhere new, the last thing you want is to dig through walls of text to find something to do. Travel sites often drown users in information instead of inspiring them to explore.",
      solution:
        "A card-based visual layout that lets destinations and tours speak for themselves. CSS Grid and Flexbox keep the content light and scannable mobile-first, so it works wherever you are.",
    },

    inspiration:
      '"A travel website is more than information — it\'s the starting point for longing."',

    process: [
      {
        num: "01",
        title: "Designing for Arrival",
        desc: "Focused on the mindset of someone already in a new place curious, a little lost, looking for the next experience rather than planning ahead.",
      },
      {
        num: "02",
        title: "Visual-First Layout",
        desc: "Let imagery lead. Each destination card is designed to evoke a feeling before communicating information.",
      },
      {
        num: "03",
        title: "Modular Sections",
        desc: "Broke content into independent sections — 'Why Choose Us', 'Top Destinations', 'Blog'. Each with its own visual rhythm.",
      },
      {
        num: "04",
        title: "Responsive Design",
        desc: "Mobile first strategy: cards stack vertically on phones, expand to a full grid on desktop works wherever you are in the world.",
      },
    ],

    screens: ["Hero", "Destinations", "Why Us", "Blog", "Mobile"],
    screenCount: 5,
  },

  {
    id: "bookFlight",
    theme: "theme-bookFlight",
    accent: "#2563EB",
    name: "Flight Booking",
    tagline: "Booking your flight, enjoy your life.",
    tags: ["React", "Front-End Dev"],
    meta: { client: "Personal Project", role: "UX + Front-End", year: "2024" },
    desc: "As someone who travels frequently, I've felt the frustration of clunky booking forms firsthand. This project explores how smart validation and conditional UI can turn a stressful process into a smooth one.",
    demoUrl: "/projects/bookFlight/flight-booking-demo.html",

    overview: {
      problem:
        "Flight booking forms are notorious for user errors — wrong return dates, missed passengers, confusing one-way vs return states. As a frequent traveller, I wanted to design the experience I wish existed.",
      solution:
        "A modular Vue component system with smart validation: return date locks before departure date, one-way mode hides irrelevant fields, and the submit button only activates when the form is genuinely complete.",
    },

    inspiration:
      '"A great application requires not only solid technical skills but also a deep understanding of user needs."',

    process: [
      {
        num: "01",
        title: "Designing from Personal Frustration",
        desc: "Mapped out every pain point I'd experienced as a traveller booking flights — wrong dates, unclear passenger counts, confusing form states.",
      },
      {
        num: "02",
        title: "Smart Validation",
        desc: "Return date can never precede departure date, with instant visual feedback — eliminating the most common booking error.",
      },
      {
        num: "03",
        title: "Conditional UI",
        desc: "One-way mode hides the return date section entirely, reducing visual clutter and guiding users through only what's relevant.",
      },
      {
        num: "04",
        title: "Component Architecture",
        desc: "Date Picker, City Picker, Passenger Counter — each a self-contained, reusable component with its own state and validation logic.",
      },
    ],

    screens: ["Search", "Date Picker", "Passenger", "Results", "Confirm"],
    screenCount: 5,
  },
  {
    id: "publicTransp",
    theme: "theme-publicTransp",
    accent: "#dc2626",
    name: "Zei Qia",
    tagline: "Navigate the city.",
    tags: ["UI Design", "Figma", "Mobile App"],
    meta: { client: "Personal Project", role: "UI + UX", year: "2025" },
    desc: "Designed while living in Taiwan, where public transport is complex but reliable. Moving to London made the need feel even more real — a city with an incredible transit network, but an experience that still leaves a lot to be desired.",
    demoUrl: "/projects/publicTransp/public-transport-demo.html",

    overview: {
      problem:
        "How to handle real-time data, asynchronous states, and multiple transport systems — bus, train, metro, high-speed rail, bike — while keeping the experience simple and stress-free for users on the move.",
      solution:
        "Rather than displaying all available data, the approach focused on filtering and prioritising information. Clear hierarchy, real-time updates, and responsive search distil complex transport data into a calm, easy-to-navigate experience.",
    },

    inspiration:
      '"Good transit design is not about showing more data — it\'s about showing the right data at the right moment."',

    process: [
      {
        num: "01",
        title: "Cross-Cultural Observation",
        desc: "Observed transit UX in Taiwan daily, then moved to London and immediately noticed the same pain points at a larger scale — the problem was universal.",
      },
      {
        num: "02",
        title: "Information Architecture",
        desc: "Structured multiple transport types into a consistent hierarchy — supporting quick scanning without overwhelming users with every available option.",
      },
      {
        num: "03",
        title: "Designing for Real-Time Behaviour",
        desc: "Mapped how live data should behave in the interface — updates that feel natural and reliable rather than disruptive or confusing.",
      },
      {
        num: "04",
        title: "Clarity in Complexity",
        desc: "Refined layouts, spacing, and visual hierarchy to transform dense information into a calm, readable interface suitable for on-the-go use.",
      },
      {
        num: "05",
        title: "Interaction & Feedback",
        desc: "Instant search and filtering that responds immediately to user input — reducing friction and supporting fast decision-making.",
      },
    ],

    screens: ["Search", "Route List", "Stop Detail", "Arrival Times", "Mobile"],
    screenCount: 5,
  },
];

// Helper — get a single project by id
export const getProject = (id) => projects.find((p) => p.id === id) ?? null;
