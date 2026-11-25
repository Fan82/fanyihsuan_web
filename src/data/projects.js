export const projects = [
  // ─── Shopify Translation Workflow Tool (latest) ───────────────
  {
    id: "shopifyTranslation",
    theme: "theme-shopifyTranslation",
    // Work section layout (see components/Work.jsx).
    // Fill `fields` with one real product from the Taiwan store rebuild:
    // same field, English source and the Traditional Chinese translation.
    // Until every field has both sides, the section uses the wide layout.
    work: {
      layout: "comparison",
      comparison: {
        source: {
          lang: "en",
          label: { en: "English · source", zh: "英文 · 原文" },
        },
        target: {
          lang: "zh-Hant",
          label: { en: "繁體中文 · translation", zh: "繁體中文 · 譯文" },
        },
        fields: [
          // { label: "Product title", source: "", target: "" },
          // { label: "Description", source: "", target: "" },
        ],
      },
    },
    accent: "#3f51d6",
    name: "Shopify Translation Workflow Tool",
    tagline: "A guided tool for rebuilding a store in another language.",
    tags: ["Workflow Design", "UX Design", "HTML / JavaScript"],
    meta: {
      Role: "Frontend Engineer · Sole designer, developer and user",
      Stack: "HTML · JavaScript · Browser APIs",
      Year: "2026",
      Status: "In use",
    },
    desc: "To rebuild an overseas luxury brand client's Singapore store as a Traditional Chinese store for Taiwan, I turned a long chain of exports, cleanup, merges and imports into an eight-step browser tool.",
    focus: "Workflow design · Problem solving",
    demoUrl: "https://fan82.github.io/shopify-translation-demo/",
    demoMode: "desktop",

    story: [
      {
        label: "Background",
        heading:
          "It looked like a translation task. It was a chain of different jobs.",
        body: "My job at an HK e-commerce company included rebuilding existing Shopify stores in another language. The first was an overseas luxury brand client: its English Singapore store, rebuilt as a separate Traditional Chinese store for Taiwan. That meant exporting translation data, sorting what actually needed translating, merging the translations, then handling the theme, products and images, each with its own file format and its own corner of the Shopify admin. I had joined in July 2026 and had never used Shopify before.",
      },
      {
        label: "Problem",
        heading:
          "The difficulty wasn't any single step. It was how much I had to remember and re-check.",
        body: "Each step's output fed the next, so one wrong file broke everything after it. The export mixed real copy with handles, URLs, JSON and the same sentence repeated across products, all of which had to be sorted before marketing could translate. And the details lived in my memory: Excel turning IDs into 8.1E+12, translations dropping HTML tags, theme images found only by exact file name, and content types with no CSV import at all.",
      },
      {
        label: "Approach",
        heading:
          "Turn the know-how in my head into a process I can simply follow.",
        body: "Writing the workflow down, a fixed order appeared, in four stages: prepare the data, translate, migrate the content, then check the new store. Eight steps in all. If the order never changes, it can live in one interface that shows which step I'm on, which files it needs and where to find them in the admin, and hands back files already named for the next step.",
      },
      {
        label: "Solution",
        heading:
          "Guidance instead of memory, and checks where mistakes happen.",
        body: "Steps unlock only when the previous one is done. The translator file shows each sentence once, turns numbers into {1} and HTML into markers like 〔1〕text〔/1〕, and skips handles, URLs, theme sample text and customer fields, logging every skipped row with its reason. At merge, a translation that breaks a marker keeps the original text and is flagged in the report, so broken HTML never reaches the store.",
      },
      {
        label: "Trade-off",
        heading:
          "One HTML file with no libraries, because my work computer can't run a terminal.",
        body: "Python and Node scripts were out, and custom apps aren't allowed on this store. So I wrote the ZIP, XLSX and CSV handling on native browser APIs (CompressionStream, DOMParser, Blob). It means more code to maintain, but it runs anywhere with a double-click, and every file stays on my computer.",
      },
      {
        label: "Reflection",
        heading:
          "Design can start from a daily work problem, not only a product idea.",
        body: "Being the requester, the designer and the user at once meant asking which problems were real and which were just my own habits. If the marketing team or colleagues running other markets start using the tool, I'll test the flow and guidance again with them.",
      },
    ],

    process: [
      {
        num: "01",
        title: "Source store data",
        desc: "Load the translation CSV and theme zip from the current store, and catch wrong or Excel-damaged files before any work starts.",
      },
      {
        num: "02",
        title: "Translation scope",
        desc: "Confirm what needs translating. Default rules leave out text that never appears on the site.",
      },
      {
        num: "03",
        title: "Translation worksheet",
        desc: "Create the Excel worksheet for translators: each sentence once, with HTML turned into markers they can move but not break.",
      },
      {
        num: "04",
        title: "Import translations",
        desc: "Upload the completed worksheet. The tool checks every marker and applies the translations to the source store data.",
      },
      {
        num: "05",
        title: "Theme & images",
        desc: "Prepare the translated theme zip and collect the images the theme uses from the source store.",
      },
      {
        num: "06",
        title: "Products",
        desc: "Fill the translations into the source store's product CSV, ready to import, with a partial re-import for products that fail.",
      },
      {
        num: "07",
        title: "Manual content",
        desc: "List the collections, pages, blogs, policies and menus that have to be created by hand, with their translations.",
      },
      {
        num: "08",
        title: "Check the result",
        desc: "Check the new store item by item: products, theme, collections, pages, menus, both screen sizes and the publishing settings.",
      },
    ],

    productLens: [
      {
        label: "User",
        value:
          "Me, as the engineer rebuilding the store, and the marketing team, who should only ever see clean text to translate.",
      },
      {
        label: "Product Goal",
        value:
          "Make a long, order-dependent workflow easy to follow, and catch errors before they reach a live store.",
      },
      {
        label: "Key Decision",
        value:
          "Guide the whole workflow step by step, instead of speeding up any single step.",
      },
      {
        label: "Measure",
        value:
          "Rows sent to translators, marker errors caught at merge, and products filled without manual edits.",
      },
    ],

    screenCount: 0,
  },

  // ─── 01 Role Fit Analyzer ─────────────────────────────────────
  {
    id: "roleFitAnalyzer",
    theme: "theme-rfa",
    work: { layout: "wide" },
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

  {
    id: "shuppatsu",
    theme: "theme-shuppatsu",
    work: { layout: "wide" },
    accent: "#F5CF2E",
    name: "Shuppatsu!",
    tagline: "Know when to go.",
    tags: ["iOS", "Productivity", "Multisensory Design"],
    meta: {
      Role: "Product UX + Development",
      Stack: "React Native · Expo · TypeScript",
      Year: "2026",
    },
    desc: "A widget-first iOS app that helps people know when to leave through glanceable countdowns, playful illustrations, and progressively urgent sound and haptic feedback.",
    focus: "Glanceable UX · Multisensory interaction",
    demoUrl: "/projects/shuppatsu/demo.html",
    demoMode: "mobile",
    demoMobile: true,

    overview: {
      problemSummary:
        "Knowing the current time is different from knowing how much time you have left.",
      problem:
        "Getting ready to leave often involves repeatedly checking the clock and mentally calculating how much time remains. Traditional alarms signal when time is up, but offer limited awareness of the time leading up to departure. The challenge is to communicate remaining time without demanding constant visual attention.",
      solutionSummary:
        "Shuppatsu makes departure time visible, audible, and tangible through a widget-first experience.",
      solution:
        "Users can schedule a departure or start a countdown with customizable presets. Home Screen widgets provide glanceable time awareness, while expressive penguin illustrations communicate countdown states. Progressive sound, haptic feedback, and local notifications signal increasing urgency as departure approaches.",
    },

    inspiration:
      '"What if you could feel time passing without constantly looking at a screen?"',

    process: [
      {
        num: "01",
        title: "Widget-first experience",
        desc: "Designed the Home Screen widget as the primary information surface, allowing users to check remaining time without repeatedly opening the app. Small and Medium widgets share the same departure time and countdown state.",
      },
      {
        num: "02",
        title: "State-driven interaction",
        desc: "Defined three distinct states: idle, active, and overdue. Each state pairs clear time information with an expressive penguin illustration. Instead of stopping at zero, the countdown continues to show how much time has elapsed.",
      },
      {
        num: "03",
        title: "Personalized departure routines",
        desc: "Designed scheduled departures and customizable Quick Start presets to accommodate different daily routines. Users can start a countdown instantly or adjust their preferred durations without navigating a complex settings system.",
      },
      {
        num: "04",
        title: "A rhythm of urgency",
        desc: "Developed three woodblock-inspired sound patterns with progressively faster rhythms, higher pitches, and synchronized haptic feedback. Local notifications extend departure awareness to background and locked-screen contexts.",
      },
    ],

    productLens: [
      {
        label: "User",
        value:
          "People who manage daily departure routines and want to stay aware of remaining time while getting ready, without constantly checking their phones.",
      },
      {
        label: "Product Goal",
        value:
          "Reduce the cognitive effort of tracking time before departure through glanceable information and context-aware sensory feedback.",
      },
      {
        label: "Key Decision",
        value:
          "Treat the Home Screen widget as the primary information surface, supported by state-based illustrations, progressive sound, and haptic feedback.",
      },
      {
        label: "Measure",
        value:
          "Frequency of manual time checks, time required to start a countdown, recognition of sensory cues, and whether users perceive the feedback as helpful rather than disruptive.",
      },
    ],

    screenCount: 0,
  },
];

// Helper — get a single project by id
export const getProject = (id) => projects.find((p) => p.id === id) ?? null;
