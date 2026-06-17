export const projects = [
  // ─── 01 Role Fit Analyzer ─────────────────────────────────────
  {
    id: "roleFitAnalyzer",
    theme: "theme-rfa",
    accent: "#05df72",
    name: "Role Fit Analyzer",
    tagline: "Know before you apply.",
    tags: ["Claude API", "React", "Product Tool"],
    meta: {
      Role: "Product + Design + Engineering",
      Stack: "React · Claude API · Vite",
      Year: "2026",
      Status: "Shipped",
    },
    desc: "A decision-support tool built from a real job-search pain point: paste a job description, get a match score, strengths, and skill gaps in seconds.",
    focus: "AI product strategy · Decision support",
    demoUrl: "https://role-fit-analyzer.vercel.app/",
    demoMobile: true,

    // overview kept for HeroSection context
    overview: {
      problemSummary:
        "Job hunting is slow because you can't tell fast enough if a role is worth pursuing.",
      problem:
        "Every application cycle looks the same: read a job description, guess whether you qualify, then spend time writing a cover letter. By the time you realise the match is low, you've already paid the decision cost.",
      solutionSummary:
        "An AI tool that reads a job description and returns your match score, strengths, and skill gaps.",
      solution:
        "Paste a job description and get back a match percentage, strengths and gaps, per-skill comparisons, and a clear summary of whether the role is worth applying to. Results are saved so you can compare different roles.",
    },

    // story — triggers the new StorySection in ProjectDetail
    story: [
      {
        label: "Problem",
        heading:
          "I was applying for jobs and couldn't tell fast enough if a role was worth it.",
        body: "I was in a career transition with a UX/UI background, aiming for Design Engineer or Product Engineer roles. Every job description asked for something slightly different, and I often spent 20–30 minutes preparing an application before realising the match was low. I needed a faster way to judge whether a role was worth it.",
      },
      {
        label: "Decision",
        heading:
          "Build a tool that does the comparison — not just a checklist.",
        body: "A manual checklist would have been easy, but it would not match the real job-search situation. I wanted users to paste a job description and receive a contextual judgment. That made Claude API a good fit: the input was clear, the output could be structured, and the problem was real enough to matter.",
      },
      {
        label: "Trade-off",
        heading:
          "The prompt is the core, which also makes it the easiest place for things to go wrong.",
        body: "The analysis quality depends heavily on the prompt. Early versions returned inconsistent results that broke the UI. If a job description lacks clear requirements, the tool shows unmatched skills instead of pretending the analysis is still reliable.",
      },
      {
        label: "Build",
        heading: "React frontend, Claude API, deployed on Vercel in a weekend.",
        body: "This is a single-page React app. The main screen is a textarea and analyse button; structured JSON drives the score ring, skill bars, and summary card. I also added localStorage history so multiple job descriptions can be compared.",
      },
      {
        label: "Result",
        heading: "I actually used it. It changed which jobs I applied to.",
        body: "Not metaphorically — I used it during the job search that prompted building it. It cut my application time by about half. More importantly, it changed my selection criteria: I stopped applying to roles under 60% match and started focusing on roles where the gaps were learnable rather than fundamental. Comparing saved results also helped me understand the market more clearly.",
      },
    ],

    productLens: [
      {
        label: "User",
        value:
          "Career switchers and job seekers who need to decide quickly whether a role is worth applying to.",
      },
      {
        label: "Product Goal",
        value:
          "Reduce decision time before applying and make skill gaps explicit enough to act on.",
      },
      {
        label: "Key Decision",
        value:
          "Use AI to compare a full job description against a candidate profile instead of forcing users through a manual checklist.",
      },
      {
        label: "Measure",
        value:
          "Application time saved, confidence in apply/skip decisions, and repeat usage across multiple job descriptions.",
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
    tagline: "Run together, even from different places.",
    tags: ["React", "Supabase", "Product Flow"],
    meta: {
      Role: "Product Design + Front-End",
      Stack: "React · Supabase · Leaflet.js",
      Year: "2026",
    },
    desc: "Designed and built an end-to-end running product with authentication, live GPS tracking, and a social loop to support motivation.",
    focus: "End-to-end product flow · Social loop",
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

    inspiration: '"One message: want to go for a run together?"',

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

    productLens: [
      {
        label: "User",
        value:
          "Casual runners who track progress but need social motivation to keep the habit going.",
      },
      {
        label: "Product Goal",
        value:
          "Move beyond tracking metrics by creating a lightweight feedback loop between running, posting, and encouragement.",
      },
      {
        label: "Key Decision",
        value:
          "Prioritize real auth, saved runs, and a social feed so the demo behaves like a real product, not a static prototype.",
      },
      {
        label: "Measure",
        value:
          "Run completion, post creation, return visits, and how often users interact with friends' activity.",
      },
    ],

    screenCount: 10,
  },

  // ─── 03 Planify ───────────────────────────────────────────────
  {
    id: "planify",
    theme: "theme-planify",
    accent: "#FFAE00",
    name: "Planify",
    tagline: "Turn goals into action.",
    tags: ["Vue", "Productivity"],
    meta: {
      Role: "Product UX + Front-End",
      Stack: "Vue · Vite",
      Year: "2026",
    },
    desc: "A workspace planning tool that turns goals into execution steps, then keeps team tasks, owners, deadlines, and focus work in one place.",
    focus: "Goal planning · Team execution",
    demoUrl: "https://planify-gilt-theta.vercel.app/",
    demoMode: "desktop",
    demoMobile: false,

    overview: {
      problemSummary:
        "Team task tools often track work, but they do not always help people decide what to do next.",
      problem:
        "When goals, project boards, owners, due dates, and personal priorities live in separate mental spaces, planning becomes another task. The real issue is not only tracking work, but turning a goal into clear steps and helping each person focus on the next useful action.",
      solutionSummary:
        "Planify connects goal planning, kanban execution, personal focus, and calendar timing in one workspace.",
      solution:
        "Users can create a goal plan, and Planify breaks it into success criteria, first milestone, next action, and review tasks. The same work then appears across project boards, personal focus lists, and timeline views so teams can move from planning to execution without losing context.",
    },

    inspiration: '"A plan is only useful when it tells you what to do next."',

    process: [
      {
        num: "01",
        title: "Goal-first task creation",
        desc: "Designed a creation flow that lets users start with an outcome, then generates the first execution steps instead of asking them to manually invent every task.",
      },
      {
        num: "02",
        title: "Workspace-level structure",
        desc: "Built project selection, members, owners, priorities, and statuses so the board can support team planning rather than only personal task tracking.",
      },
      {
        num: "03",
        title: "Focus view for personal execution",
        desc: "Added a My Tasks view that recommends the next task based on status, priority, and due date, then separates due today, upcoming, review, and completed work.",
      },
      {
        num: "04",
        title: "Delivery views beyond the board",
        desc: "Connected board, list, timeline, and settings views so work can be reviewed from different planning angles without duplicating task data.",
      },
    ],

    productLens: [
      {
        label: "User",
        value:
          "Small teams and solo builders who need to turn goals into visible tasks, ownership, and next actions.",
      },
      {
        label: "Product Goal",
        value:
          "Reduce the gap between planning and execution by keeping goals, team boards, and personal focus in one system.",
      },
      {
        label: "Key Decision",
        value:
          "Make goal planning the starting point, then distribute generated work into board, personal, and timeline contexts.",
      },
      {
        label: "Measure",
        value:
          "Time from goal creation to first action, open task progress, overdue tasks, and whether users can identify their next task quickly.",
      },
    ],

    screenCount: 0,
  },

  // ─── 04 Easy Bank ─────────────────────────────────────────────
  {
    id: "easyBank",
    theme: "theme-easyBank",
    accent: "#2563eb",
    name: "Easy Bank",
    tagline: "Precise front-end for a banking experience people can trust.",
    tags: ["React", "CSS", "Trust UX"],
    meta: { Role: "UI Strategy + Front-End", Year: "2025" },
    desc: "A product-interface study on how banking apps communicate trust through hierarchy, feedback, and consistent implementation.",
    focus: "Trust UX · Design systems",
    demoUrl: "./easyBank/easy_bank_app.html",
    demoMobile: true,

    overview: {
      problemSummary:
        "Banking has to feel secure and trustworthy, without feeling distant.",
      problem:
        "Digital banking interfaces must communicate trustworthiness through visual language alone. Studying real apps revealed how much work colour, hierarchy, and micro-interactions are quietly doing.",
      solutionSummary:
        "A modular React component system with a strict design token structure.",
      solution:
        "I did not copy existing banking apps directly. Instead, I started from what I would want to improve as a user, then used CSS variables to keep every component consistent.",
    },

    inspiration:
      '"Good front-end implementation makes prosperity feel unstoppable."',

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

    productLens: [
      {
        label: "User",
        value:
          "Banking customers who need to understand account status, transactions, and actions without second-guessing the interface.",
      },
      {
        label: "Product Goal",
        value:
          "Make financial actions feel clear, consistent, and trustworthy through visual hierarchy and interaction feedback.",
      },
      {
        label: "Key Decision",
        value:
          "Build a token-based component system so trust signals stay consistent across cards, lists, and transaction flows.",
      },
      {
        label: "Measure",
        value:
          "Task clarity, error prevention, perceived trust, and speed of locating key account information.",
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
    tagline: "Book the flight, take the leave, and go.",
    tags: ["React", "Form UX", "Error Prevention"],
    meta: { Role: "UI/UX + Front-End", Year: "2024" },
    desc: "A booking-flow prototype focused on preventing common user errors through validation rules and conditional interface states.",
    focus: "Business rules · Error prevention",
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
      '"Endless waiting for the next long weekend. I want to go now."',

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

    productLens: [
      {
        label: "User",
        value:
          "Travelers who need to complete a booking flow quickly without making date, route, or passenger mistakes.",
      },
      {
        label: "Product Goal",
        value:
          "Lower booking friction by preventing invalid inputs before the user reaches submission.",
      },
      {
        label: "Key Decision",
        value:
          "Encode business rules directly into UI states, including one-way trips, date order, and completion requirements.",
      },
      {
        label: "Measure",
        value:
          "Form completion rate, validation errors avoided, time to booking readiness, and field correction frequency.",
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
    tagline: "Travel that feels close enough to imagine.",
    tags: ["HTML/CSS", "Content Strategy", "Layout"],
    meta: { Role: "UI/UX + Design System", Year: "2024" },
    desc: "A travel interface study on how imagery, content hierarchy, and screen layout can guide exploration.",
    focus: "Content hierarchy · Exploration UX",
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

    inspiration: '"The place I long for is always the next stop."',

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

    productLens: [
      {
        label: "User",
        value:
          "Travelers browsing destinations who need quick emotional and practical signals before reading details.",
      },
      {
        label: "Product Goal",
        value:
          "Help users scan destination options by letting imagery lead and content support decision-making.",
      },
      {
        label: "Key Decision",
        value:
          "Use a visual-first grid so destination variety is understood at a glance across desktop and mobile.",
      },
      {
        label: "Measure",
        value:
          "Destination click-through, scroll depth, saved destinations, and whether users can compare options quickly.",
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
    tagline: "Know exactly where you are.",
    tags: ["UI Design", "Information Architecture", "Mobile"],
    meta: { Role: "Product UI/UX + Design System", Year: "2025" },
    desc: "A transit product concept shaped by cross-city observation: show the right real-time information at the moment of decision. Good transit design is not about showing more data, but showing the right data at the right time.",
    focus: "Information architecture · Real-time UX",
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

    inspiration: '"Please stop striking. I just want to get home."',

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

    productLens: [
      {
        label: "User",
        value:
          "Commuters and travelers navigating dense transit systems under time pressure.",
      },
      {
        label: "Product Goal",
        value:
          "Make real-time transit information easier to trust and act on by filtering what the user sees.",
      },
      {
        label: "Key Decision",
        value:
          "Design around information priority instead of data volume, especially for search, live updates, and route scanning.",
      },
      {
        label: "Measure",
        value:
          "Time to route decision, search success, missed-transfer reduction, and confidence in live status updates.",
      },
    ],

    screenCount: 5,
  },
];

// Helper — get a single project by id
export const getProject = (id) => projects.find((p) => p.id === id) ?? null;
