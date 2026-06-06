export const projects = [
  // ─── 01 Role Fit Analyzer ─────────────────────────────────────
  {
    id: "roleFitAnalyzer",
    theme: "theme-rfa",
    accent: "#05df72",
    name: "Role Fit Analyzer",
    tagline: "Know before you apply.",
    tags: ["Claude API", "React", "AI Tool"],
    meta: {
      Role: "Solo — Design + Engineering",
      Stack: "React · Claude API · Vite",
      Year: "2026",
      Status: "Shipped",
    },
    desc: "Built it while job hunting. Paste a JD, get a match score and skill-gap breakdown in seconds.",
    demoUrl: "https://role-fit-analyzer.vercel.app/",
    demoMobile: true,

    // overview kept for HeroSection context
    overview: {
      problemSummary:
        "Job hunting is slow because you can't tell fast enough if a role is worth pursuing.",
      problem:
        "Every application cycle looks the same: read a JD, vaguely sense whether you qualify, then spend 30 minutes writing a cover letter to find out. There's no fast way to know if a role is worth pursuing — you only find out after you've already invested time.",
      solutionSummary:
        "An AI tool that reads a JD and tells you your match score, strengths, and gaps in one shot.",
      solution:
        "Paste a JD and get back a match percentage, a breakdown of strong skills vs. gaps, a per-skill comparison against the JD's requirements, and a plain-English summary of whether to apply. Results are saved so you can compare roles over time.",
    },

    // story — triggers the new StorySection in ProjectDetail
    story: [
      {
        label: "Problem",
        heading:
          "I was applying for jobs and couldn't tell fast enough if a role was worth it.",
        body: "I was mid-career-pivot — background in UX/UI, trying to move into Design Engineer or Product Engineer roles. Every JD looked slightly different. Some wanted Figma, some wanted React, some wanted both. I kept spending 20–30 minutes writing cover letters for roles that turned out to be 40% matches. I needed a faster gut-check before committing.",
      },
      {
        label: "Decision",
        heading:
          "Build a tool that does the comparison — not just a checklist.",
        body: "The obvious version is a form where you tick which skills you have. I didn't want that — it's manual, it doesn't scale, and it doesn't give you nuance. I wanted to paste a JD and get an answer. That meant AI. I'd been looking for a real reason to use the Claude API, and this was it: a clear input, a clear output, and a problem I'd actually feel the answer to.",
      },
      {
        label: "Trade-off",
        heading:
          "The prompt does most of the work — which made it both the hardest and most fragile part.",
        body: "Because the analysis is entirely Claude's output, quality lives or dies in the prompt. Early versions returned inconsistent JSON that broke the UI. I went through about 8 prompt iterations — adding schema constraints, specifying score rubrics, handling vague JDs explicitly. The trade-off I accepted: if someone pastes a terrible JD with no requirements section, the analysis degrades. I handle that with an explicit 'no skills detected' state instead of pretending the output is still valid.",
      },
      {
        label: "Build",
        heading: "React frontend, Claude API, deployed on Vercel in a weekend.",
        body: "Single-page React app. The main screen is a textarea + analyse button; results come back as structured JSON that drives the score ring, skill breakdown bars, and summary card. I added a History view (localStorage) so you can track and compare multiple JDs without re-analysing. The skill breakdown component shows your level vs. the JD requirement side-by-side — that came from realising 'gap' alone isn't useful, you want to know how big the gap is.",
      },
      {
        label: "Result",
        heading: "I actually used it. It changed which jobs I applied to.",
        body: "Not metaphorically — I used it during the job search that prompted building it. Cut my application time by about half. More importantly it changed my selection criteria: I stopped applying to roles under 60% match and started focusing on roles where the gaps were learnable rather than fundamental. The history feature turned out to be the most useful part; seeing 15 results side-by-side told me more about the market than any individual JD did.",
      },
    ],

    screenCount: 0,
  },

  // ─── 02 Running App ───────────────────────────────────────────
  {
    id: "runApp",
    theme: "theme-runApp",
    accent: "#05df72",
    name: "Running App",
    screenCount: 10,
    tagline: "Track your run. Share your pace.",
    tags: ["React", "Supabase", "GPS"],
    meta: {
      Role: "Design + Front-End",
      Stack: "React · Supabase · Leaflet.js",
      Year: "2026",
    },
    desc: "Designed the full UX then built it end-to-end — real authentication, live GPS tracking, social feed. No third-party UI kit.",
    demoUrl: "https://fan82.github.io/runnnnn/",
    demoMobile: true,

    overview: {
      problemSummary:
        "Running apps track numbers well. They're bad at making you want to run tomorrow.",
      problem:
        "I started running and kept trying apps that gave me great data but no reason to come back. The motivation to keep going came from friends, not metrics — but none of the apps made sharing a run feel natural.",
      solutionSummary:
        "A full-stack running app that combines GPS tracking with a social feed — built from scratch, no UI kit.",
      solution:
        "Real Supabase authentication, live GPS tracking via Leaflet.js, and a social feed where you can post runs, react, and follow friends. Designed and built solo — from Figma to deployed app.",
    },

    inspiration: '"Running is easier when you\'re not running alone."',

    process: [
      {
        num: "01",
        title: "Design first, then build",
        desc: "Started in Figma with the full user flow — tracking, posting, browsing — before writing a line of code. The design constraints shaped the component architecture.",
      },
      {
        num: "02",
        title: "Real backend, not mock data",
        desc: "Supabase for auth and database. Every run is actually stored, every user is real. Made the social features feel genuine rather than simulated.",
      },
      {
        num: "03",
        title: "Live GPS via Leaflet.js",
        desc: "Browser geolocation API feeding into Leaflet.js for real-time map tracking. Had to handle the edge cases: permissions denied, GPS drift, background tracking.",
      },
      {
        num: "04",
        title: "Mobile-first throughout",
        desc: "You're on your phone when you run. Every interaction — starting a run, posting, reacting — was designed for one hand, on the move.",
      },
    ],

    screenCount: 10,
  },

  // ─── 03 Plan Task ─────────────────────────────────────────────
  {
    id: "takeTask",
    theme: "theme-takeTask",
    accent: "#FFAE00",
    name: "Plan Task",
    tagline: "Track smarter, do more.",
    tags: ["UX Design", "React", "Mobile App"],
    meta: { Role: "UX + Front-End", Year: "2024" },
    desc: "Three rounds of redesign to strip it down to one thing: show me what to do next, nothing else.",
    demoUrl: "./takeTask/plan_task_app.html",
    demoMobile: true,

    overview: {
      problemSummary:
        "The problem isn't organisation. It's deciding what to do next.",
      problem:
        "I had tasks in too many places and kept spending time organising instead of doing. After two redesigns that added features, I realised I was solving the wrong problem — the issue wasn't missing functionality, it was cognitive overhead.",
      solutionSummary:
        "A task app that surfaces what matters right now, automatically.",
      solution:
        "Plan Task pulls from calendar, email, and messages to build your daily list automatically. AI surfaces what actually matters right now, so you spend less time organising and more time doing.",
    },

    inspiration: '"The best to-do list is the one you don\'t have to manage."',

    process: [
      {
        num: "01",
        title: "3 rounds of redesign",
        desc: "Each iteration stripped away a layer of complexity. The first version had too many features. The third version had one job.",
      },
      {
        num: "02",
        title: "AI-assisted feature scoping",
        desc: "Used AI to help consolidate requirements — not to generate ideas, but to kill them. Kept only what directly reduced cognitive load.",
      },
      {
        num: "03",
        title: "Prototype to validate, then build",
        desc: "Interactive prototypes to test task creation and priority flows before writing code. Caught two major UX problems before they became code problems.",
      },
      {
        num: "04",
        title: "Dark-mode first UI",
        desc: "AI-powered priority badges. Minimal chrome. The visual design choices all serve the same goal: get out of the user's way.",
      },
    ],

    screenCount: 6,
  },

  // ─── 04 Easy Bank ─────────────────────────────────────────────
  {
    id: "easyBank",
    theme: "theme-easyBank",
    accent: "#2563eb",
    name: "Easy Bank",
    tagline: "Precision code for a trustworthy banking experience.",
    tags: ["React", "CSS", "UI Implementation"],
    meta: { Role: "UI + Front-End", Year: "2025" },
    desc: "A frontend execution exercise — studying how banking apps use typography, colour, and micro-interactions to communicate trust, then building my own interpretation from scratch.",
    demoUrl: "./easyBank/easy_bank_app.html",
    demoMobile: true,

    overview: {
      problemSummary:
        "Banking interfaces carry a unique burden: they must feel secure without feeling cold.",
      problem:
        "Digital banking interfaces must communicate trustworthiness through visual language alone. Studying real apps revealed how much work colour, hierarchy, and micro-interactions are quietly doing.",
      solutionSummary:
        "A modular React component system with a strict design token structure.",
      solution:
        "Built from observed patterns rather than copied from them — a CSS variable design token system enforcing consistency across every component, with micro-interactions that reinforce confidence at each touchpoint.",
    },

    inspiration:
      '"Good front-end development is where technical precision meets visual language."',

    process: [
      {
        num: "01",
        title: "Study before building",
        desc: "Analysed multiple banking apps to understand how visual patterns create perceived trustworthiness — not just how they look, but why they work.",
      },
      {
        num: "02",
        title: "Design token system",
        desc: "CSS variables for every colour, spacing step, and typography size. Enforced consistency without fighting the cascade.",
      },
      {
        num: "03",
        title: "Component architecture",
        desc: "Balance cards, transaction lists, exchange modules, transfer forms — each self-contained, each reusable, each testable in isolation.",
      },
    ],

    screenCount: 5,
  },

  // ─── 05 Flight Booking ────────────────────────────────────────
  {
    id: "bookFlight",
    theme: "theme-bookFlight",
    accent: "#2563EB",
    name: "Flight Booking",
    tagline: "Booking your flight, enjoy your life.",
    tags: ["React", "Form UX", "Front-End"],
    meta: { Role: "UX + Front-End", Year: "2024" },
    desc: "Flight booking forms have the same UX problems everywhere. Smart validation and conditional UI can fix most of them.",
    demoUrl: "./bookFlight/flight_booking_app.html",
    demoMobile: true,

    overview: {
      problemSummary:
        "Flight forms are full of errors users shouldn't be able to make.",
      problem:
        "As a frequent traveller I'd felt the frustration firsthand — wrong return dates, confusing one-way vs return states, submit buttons that activate before the form is actually valid. These aren't edge cases, they're the default experience.",
      solutionSummary:
        "A form system where the UI does the validation work so the user doesn't have to.",
      solution:
        "Return date locks before departure date. One-way mode hides irrelevant fields. Submit only activates when the form is genuinely complete. Each component — Date Picker, City Picker, Passenger Counter — is self-contained with its own state and validation.",
    },

    inspiration:
      '"A great form doesn\'t just collect data — it prevents mistakes before they happen."',

    process: [
      {
        num: "01",
        title: "Map the failure modes",
        desc: "Listed every booking error I'd personally made or seen. Wrong dates, wrong passenger counts, unclear one-way states. Each became a design constraint.",
      },
      {
        num: "02",
        title: "Smart date validation",
        desc: "Return date can never precede departure — enforced in the component, with instant visual feedback. Eliminates the most common booking error.",
      },
      {
        num: "03",
        title: "Conditional UI",
        desc: "One-way mode removes the return date section entirely. Showing only what's relevant at each step reduces errors and cognitive load simultaneously.",
      },
    ],

    screenCount: 5,
  },

  // ─── 06 Let's Travel ──────────────────────────────────────────
  {
    id: "goTravel",
    theme: "theme-goTravel",
    accent: "#ff6000",
    name: "Let's Travel",
    tagline: "Visual storytelling for explorers.",
    tags: ["HTML/CSS", "CSS Grid", "Layout"],
    meta: { Role: "UI Design", Year: "2024" },
    desc: "A CSS Grid layout exercise focused on one question: can a travel site make you feel something before you read anything?",
    demoUrl: "./goTravel/go_travel_app.html",
    demoMobile: true,

    overview: {
      problemSummary: "Travel sites bury the feeling under information.",
      problem:
        "When you arrive somewhere new, the last thing you want is walls of text. Most travel sites prioritise completeness over experience — they tell you everything and make you feel nothing.",
      solutionSummary:
        "A visual-first layout where destinations speak before text does.",
      solution:
        "Card-based layout built with CSS Grid and Flexbox. Images lead. Text supports. Mobile-first so it works wherever you actually are.",
    },

    inspiration: '"A travel site is the starting point for longing."',

    process: [
      {
        num: "01",
        title: "Visual-first constraint",
        desc: "Set a rule: every section should communicate its purpose through imagery before the user reads a word. Forced every layout decision to serve that goal.",
      },
      {
        num: "02",
        title: "CSS Grid as structure",
        desc: "Used Grid for the destination cards and Flexbox for everything else. The layout itself communicates variety and abundance — core feelings for a travel product.",
      },
      {
        num: "03",
        title: "Mobile-first",
        desc: "Cards stack on phones, expand to grid on desktop. Designed for someone who's already travelling — phone in hand, looking for what to do next.",
      },
    ],

    screenCount: 5,
  },

  // ─── 07 Zei Qia ───────────────────────────────────────────────
  {
    id: "publicTransp",
    theme: "theme-publicTransp",
    accent: "#dc2626",
    name: "Zei Qia",
    tagline: "Navigate the city.",
    tags: ["UI Design", "Figma", "Mobile"],
    meta: { Role: "UI + UX Design", Year: "2025" },
    desc: "Designed in Taiwan. Validated in London. A transit app focused on showing the right data at the right moment — not all of it.",
    demoUrl: "./publicTransp/public_transport_app.html",
    demoMobile: true,

    overview: {
      problemSummary:
        "Transit apps show too much. The problem is filtering, not fetching.",
      problem:
        "Living in Taiwan gave me daily exposure to a complex but reliable transit system. Moving to London made the same problem feel bigger — incredible network, overwhelming experience. The issue isn't missing data, it's that apps don't know what to hide.",
      solutionSummary:
        "A transit interface that prioritises information rather than displaying it all.",
      solution:
        "Clear hierarchy, real-time updates, and responsive search that distil complex transport data into a calm, easy-to-navigate experience — designed for someone on the move, not sitting at a desk.",
    },

    inspiration:
      '"Good transit design is not about showing more data — it\'s about showing the right data at the right moment."',

    process: [
      {
        num: "01",
        title: "Cross-cultural observation",
        desc: "Observed transit UX daily in Taiwan, then moved to London and immediately noticed the same pain points at a larger scale. The problem was universal.",
      },
      {
        num: "02",
        title: "Information hierarchy",
        desc: "Structured multiple transport types — bus, train, metro, high-speed rail — into a consistent hierarchy that supports fast scanning without overwhelming.",
      },
      {
        num: "03",
        title: "Designing for real-time behaviour",
        desc: "Mapped how live data should behave — updates that feel reliable rather than disruptive. Stability matters more than speed when you're trying to catch a train.",
      },
      {
        num: "04",
        title: "Instant search and filtering",
        desc: "Responds immediately to input, reducing friction for fast decisions. The interaction model is built around someone who already knows where they want to go.",
      },
    ],

    screenCount: 5,
  },
];

// Helper — get a single project by id
export const getProject = (id) => projects.find((p) => p.id === id) ?? null;
