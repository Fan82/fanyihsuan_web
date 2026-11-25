import { useEffect, useLayoutEffect, useRef } from "react";
import { tx, useLanguage } from "../i18n/LanguageContext.jsx";
import "../styles/about.css";

// ─── Content ──────────────────────────────────────────────────

const HERO = {
  intro: {
    en: "I’m a front-end developer based in Taiwan. I started in UI/UX design and now build storefronts and membership experiences.",
    zh: "我是在台灣的前端工程師，從 UI/UX 設計起步，現在負責打造電商店面與會員體驗。",
  },
  photoAlt: { en: "YiHsuan Fan", zh: "范翊萱" },
};

// Strengths and weaknesses, told through how I travel.
const TRAITS = {
  before: { en: "I book the hotel first. The rest I leave ", zh: "我會先訂好飯店，其他的就" },
  em: { en: "open.", zh: "留白" },
  after: { en: "", zh: "。" },
  groups: [
    {
      label: { en: "What I'm good at", zh: "我擅長的" },
      items: [
        {
          en: "I plan the big things early, then stay flexible, so plans can change on the way.",
          zh: "重要的事我會先規劃好，其他保留彈性，路上隨時可以調整。",
        },
        {
          en: "If I don't know something, I say so. If I don't agree, I say that too, kindly, and then we decide together.",
          zh: "不知道就說不知道。不同意也會說出來，但說得客氣，然後一起決定。",
        },
        {
          en: "I moved to the UK alone for a working holiday. It wasn't easy at first, but it made me more confident.",
          zh: "我一個人去英國打工度假。一開始不容易，但讓我更有自信。",
        },
      ],
    },
    {
      label: { en: "What I'm working on", zh: "我還在練習的" },
      items: [
        {
          en: "I used to wait until I felt ready. I didn't feel ready for the UK either, but I went anyway. Now I start first and improve along the way.",
          zh: "我以前常等到覺得準備好才開始。去英國前我也沒準備好，但還是去了。現在我會先開始，邊做邊改進。",
        },
        {
          en: "I can compare hotels for hours. Now I decide what matters most first, and let the rest go.",
          zh: "我可以比較飯店比好幾個小時。現在我會先決定什麼最重要，其他就放下。",
        },
      ],
    },
  ],
};

// Matches the current résumé (public/FanYiH_resume.pdf).
// The UK volunteer work is the One Sky Collective role.
const EXPERIENCE = [
  {
    period: { en: "Jul 2026 – Present", zh: "2026.07 – 至今" },
    company: "BlueBell Co., Ltd.",
    role: { en: "Front-End Developer", zh: "前端工程師" },
    details: [
      {
        en: "Owned the front-end build of a new Singapore storefront for a luxury brand, from requirements through launch.",
        zh: "負責精品品牌新加坡官網的前端建置，從需求到上線。",
      },
      {
        en: "Built a gift-with-purchase campaign on native Shopify with automated gift limits; gift-set sales grew 3.7x in 15 days.",
        zh: "以 Shopify 原生功能打造滿額贈活動，並自動控管贈品數量；禮盒銷售在 15 天內成長 3.7 倍。",
      },
      {
        en: "Built a member loyalty campaign flow in C# with a backend developer, covering survey, profile updates and points issuance, plus edge cases such as repeat submissions and expired campaigns.",
        zh: "與後端工程師以 C# 建置會員活動流程，涵蓋問卷、會員資料更新與點數發放，並處理重複送出、活動過期等邊界情況。",
      },
      {
        en: "Created self-serve tools for non-engineering teams, including theme settings for marketing to manage non-shipping dates and a browser-based translation tool for store localization.",
        zh: "為非工程團隊打造自助工具，包括讓行銷自行管理不出貨日期的主題設定，以及用於商店在地化的瀏覽器翻譯工具。",
      },
      {
        en: "Collaborate in English with teams in Japan, Hong Kong, Korea, Singapore and Malaysia on market-specific specs.",
        zh: "以英文與日本、香港、韓國、新加坡和馬來西亞團隊協作，確認各市場的規格。",
      },
    ],
    tags: ["Shopify", "C#", { en: "Front-End", zh: "前端" }],
  },
  {
    period: { en: "Nov 2025 – Jan 2026", zh: "2025.11 – 2026.01" },
    company: { en: "One Sky Collective (Social Enterprise)", zh: "One Sky Collective（社會企業）" },
    role: { en: "Volunteer UI Designer", zh: "UI 設計志工" },
    details: [
      {
        en: "Designed user flows, data visualization, and reward features for a sustainability app, collaborating remotely with international PMs and a React Native team.",
        zh: "為一款永續 App 設計使用流程、數據視覺化與獎勵功能，並與國際 PM 及 React Native 團隊遠端協作。",
      },
    ],
    tags: ["Figma", "UX", { en: "Remote Collaboration", zh: "遠端協作" }],
  },
  {
    period: { en: "Feb 2022 – Feb 2025", zh: "2022.02 – 2025.02" },
    company: "Neutec Co., Ltd.",
    role: { en: "UI/UX Designer & Front-End Developer", zh: "UI/UX 設計師暨前端工程師" },
    details: [
      {
        en: "Designed and developed interfaces for gaming platforms, working with PMs and engineers from concept to release.",
        zh: "設計並開發遊戲平台介面，與 PM 和工程師合作，從概念到上線。",
      },
      {
        en: "Simplified game lobby user flows and information architecture, cutting unnecessary steps and improving usability.",
        zh: "簡化遊戲大廳的使用流程與資訊架構，減少不必要的步驟並提升易用性。",
      },
      {
        en: "Created reusable design system components, improving UI consistency and reducing duplicate design and engineering work.",
        zh: "建立可重複使用的 design system 元件，提升介面一致性，減少重複的設計與工程工作。",
      },
      {
        en: "Identified product improvements through user research, usability testing and behavioral data analysis.",
        zh: "透過使用者研究、易用性測試與行為數據分析，找出產品改善方向。",
      },
      {
        en: "Contributed to +30% user retention, +25% engagement and 20% faster page loads through UX and performance work.",
        zh: "透過 UX 與效能優化，協助使用者留存提升 30%、互動提升 25%，頁面載入加快 20%。",
      },
    ],
    tags: [
      { en: "Front-End", zh: "前端" },
      "Figma",
      { en: "Design Systems", zh: "設計系統" },
      { en: "User Research", zh: "使用者研究" },
    ],
  },
  {
    period: { en: "Apr 2021 – Feb 2022", zh: "2021.04 – 2022.02" },
    company: "Gotrust Co., Ltd.",
    role: { en: "UI Designer", zh: "UI 設計師" },
    details: [
      {
        en: "Redesigned the mobile purchase flow for security products, lifting conversion 10% and cutting cart abandonment 12%.",
        zh: "重新設計資安產品的行動版購買流程，轉換率提升 10%，購物車放棄率降低 12%。",
      },
      {
        en: "Created wireframes, prototypes and UI specs in Figma, partnering with developers on responsive builds.",
        zh: "以 Figma 製作 wireframe、原型與 UI 規格，並與工程師合作完成響應式開發。",
      },
    ],
    tags: ["UI", "Figma", { en: "Product UX", zh: "產品 UX" }],
  },
];

const SKILLS = [
  {
    label: { en: "Front-End Development", zh: "前端開發" },
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    label: { en: "Front-End Engineering", zh: "前端工程" },
    items: [
      "RESTful APIs",
      "GraphQL",
      { en: "Responsive Web Design", zh: "響應式網頁設計" },
      { en: "Accessibility", zh: "無障礙設計" },
      { en: "Web Performance Optimization", zh: "網頁效能優化" },
    ],
  },
  {
    label: { en: "UI/UX & Product", zh: "UI/UX 與產品" },
    items: [
      { en: "User Research", zh: "使用者研究" },
      { en: "Usability Testing", zh: "易用性測試" },
      { en: "Behavioral Data Analysis", zh: "行為數據分析" },
      { en: "Design Systems", zh: "設計系統" },
      { en: "Prototyping", zh: "原型設計" },
    ],
  },
  {
    label: { en: "E-commerce Development", zh: "電商開發" },
    items: [
      "Shopify Liquid",
      "Shopify Functions",
      { en: "Shopify App Development", zh: "Shopify App 開發" },
      { en: "E-commerce Business Logic", zh: "電商商業邏輯" },
    ],
  },
  {
    label: { en: "Tools & Collaboration", zh: "工具與協作" },
    items: ["Git", "GitHub", "npm", "Figma", "Vercel"],
  },
];

const FOOTER_LINKS = [
  {
    label: { en: "View résumé", zh: "查看履歷" },
    href: { en: "/FanYiH_resume.pdf", zh: "/范翊萱_履歷.pdf" },
    newTab: true,
  },
  {
    label: { en: "Get in touch", zh: "聯絡我" },
    href: "mailto:fys840802@gmail.com",
  },
  {
    label: { en: "LinkedIn", zh: "LinkedIn" },
    href: "https://www.linkedin.com/in/fanyihsuan/",
    newTab: true,
  },
];

const COPY = {
  experience: { en: "Experience", zh: "經歷" },
  skills: { en: "Skills", zh: "技能" },
  contact: { en: "Résumé and contact", zh: "履歷與聯絡方式" },
  tagsLabel: { en: "Skills used", zh: "使用技能" },
  newTab: { en: "(opens in a new tab)", zh: "（在新分頁開啟）" },
};

// ─── Page ─────────────────────────────────────────────────────

export default function About() {
  const { language, t } = useLanguage();
  const pageRef = useRef(null);
  const nameRef = useRef(null);
  const traitsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Entrance motion: the name on load, the traits title the first time it
  // enters the viewport (scrolling back doesn't replay it). Under reduced
  // motion nothing is set, so the text is simply shown.
  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    page.dataset.motion = "on";
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        nameRef.current.dataset.entered = "";
      });
    });

    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        traitsRef.current.dataset.entered = "";
        io.disconnect();
      }
    });
    io.observe(traitsRef.current);

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
    };
  }, []);

  return (
    <main id="main" tabIndex={-1} ref={pageRef} className="about">
      {/* ── Name and photo ── */}
      <section className="about-hero" aria-labelledby="about-name">
        <h1 id="about-name" ref={nameRef} className="about-hero__name" data-enter="">
          YiHsuan <span className="about-hero__last">Fan.</span>
        </h1>
        <picture className="about-hero__photo">
          <source
            srcSet="/portrait-still.webp"
            media="(prefers-reduced-motion: reduce)"
          />
          <img
            src="/portrait.webp"
            width="720"
            height="552"
            alt={t(HERO.photoAlt)}
            decoding="async"
          />
        </picture>
        <p className="about-hero__intro">{t(HERO.intro)}</p>
      </section>

      {/* ── Strengths and weaknesses ── */}
      <section className="about-traits" aria-labelledby="about-traits">
        <h2
          id="about-traits"
          ref={traitsRef}
          className="about-traits__title"
          data-enter=""
        >
          {t(TRAITS.before)}
          <em className="about-traits__em">{t(TRAITS.em)}</em>
          {t(TRAITS.after)}
        </h2>
        <div className="about-traits__groups">
          {TRAITS.groups.map((group) => (
            <div key={tx(group.label, "en")} className="about-traits__group">
              <h3 className="about-traits__label">{t(group.label)}</h3>
              <ul className="about-traits__list">
                {group.items.map((item) => (
                  <li key={tx(item, "en")}>{t(item)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="about-exp" aria-labelledby="about-exp-title">
        <h2 id="about-exp-title" className="about-section-title">
          {t(COPY.experience)}
        </h2>
        <ol className="about-timeline">
          {EXPERIENCE.map((job) => (
            <li key={`${tx(job.company, "en")}-${tx(job.period, "en")}`} className="about-job">
              <p className="about-job__date">{t(job.period)}</p>
              <div className="about-job__body">
                <h3 className="about-job__role">{t(job.role)}</h3>
                <p className="about-job__company">{t(job.company)}</p>
                <ul className="about-job__details">
                  {job.details.map((detail) => (
                    <li key={tx(detail, "en")}>{t(detail)}</li>
                  ))}
                </ul>
                <ul className="about-job__tags" aria-label={t(COPY.tagsLabel)}>
                  {job.tags.map((tag) => (
                    <li key={tx(tag, "en")}>{t(tag)}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Skills ── */}
      <section className="about-skills" aria-labelledby="about-skills-title">
        <h2 id="about-skills-title" className="about-section-title">
          {t(COPY.skills)}
        </h2>
        <dl className="about-skills__list">
          {SKILLS.map(({ label, items }) => (
            <div key={tx(label, "en")} className="about-skills__group">
              <dt>{t(label)}</dt>
              {items.map((item) => (
                <dd key={tx(item, "en")}>{t(item)}</dd>
              ))}
            </div>
          ))}
        </dl>
      </section>

      {/* ── Résumé and contact ── */}
      <footer className="about-footer" aria-labelledby="about-contact-title">
        <h2 id="about-contact-title" className="sr-only">
          {t(COPY.contact)}
        </h2>
        <ul className="about-footer__links">
          {FOOTER_LINKS.map((link) => (
            <li key={tx(link.label, "en")}>
              <a
                href={tx(link.href, language)}
                className="about-footer__link"
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noreferrer" : undefined}
              >
                {t(link.label)}
                {link.newTab && <span className="sr-only"> {t(COPY.newTab)}</span>}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 11L11 3M5 3h6v6" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
