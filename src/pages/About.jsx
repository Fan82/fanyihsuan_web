import { useEffect, useRef } from "react";
import { tx, useLanguage } from "../i18n/LanguageContext.jsx";

const EXPERIENCE = [
  {
    role: {
      en: "UI Design Volunteer",
      zh: "UI設計志願者",
    },
    company: "One Sky Collective",
    period: "Nov 2025 – Feb 2026",
    tags: ["Figma", "UX", "Stakeholder Needs"],
    details: [
      {
        en: "Support product and content decisions by turning social-impact goals into clear user flows.",
        zh: "協助把社會影響力目標轉化為清楚的使用流程，支援產品與內容決策。",
      },
      {
        en: "Visualized requirements into interface concepts that were easier for users to understand.",
        zh: "將需求視覺化，讓所有使用者能理解的介面概念。",
      },
    ],
  },
  {
    role: {
      en: "Content Creator",
      zh: "內容創作者",
    },
    company: "SharkTech",
    period: "Jul 2025 – Feb 2026",
    tags: ["Technical Writing", "Product Communication"],
    details: [
      {
        en: "Write technical content that explains product value, use cases, and implementation context clearly.",
        zh: "撰寫技術內容，清楚說明產品價值、使用情境與導入脈絡。",
      },
      {
        en: "Practice turning complex technical topics into language that customers can understand.",
        zh: "練習將複雜技術主題轉換成客戶能理解的產品語言。",
      },
    ],
  },
  {
    role: "UX/UI Designer & Front-End Developer",
    company: "NEUTEC Co., Ltd.",
    period: "Feb 2022 – Feb 2025",
    tags: ["Front-End", "Figma", "Design Systems", "Requirements"],
    details: [
      {
        en: "Clarified product workflows with teammates, then translated them into UI specs and front-end implementation.",
        zh: "與同事釐清產品流程，並轉化為 UI 規格與前端實作。",
      },
      {
        en: "Bridged design and engineering decisions across prototypes, production screens, and design-system patterns.",
        zh: "在原型、正式產品畫面與 design system 之間銜接設計與工程決策。",
      },
    ],
  },
  {
    role: "UI Designer",
    company: "GOTRUST Co., Ltd.",
    period: "Apr 2021 – Feb 2022",
    tags: ["UI", "Figma", "Product UX"],
    details: [
      {
        en: "Designed product interfaces with attention to onboarding clarity, task flow, and user confidence.",
        zh: "設計產品介面時重視 onboarding 清晰度、任務流程與使用者信任感。",
      },
    ],
  },
  {
    role: "Web Designer",
    company: "CBES Co., Ltd.",
    period: "Feb 2019 – Mar 2021",
    tags: ["Web Designer", "Graphic Design"],
    details: [
      {
        en: "Built client-facing web experiences and learned to balance visual quality, delivery constraints, and business needs.",
        zh: "建置面向客戶的網站體驗，並學習在視覺品質、交付限制與商業需求之間取得平衡。",
      },
    ],
  },
];

const SKILLS = [
  {
    label: { en: "Product", zh: "產品" },
    items: [
      { en: "Requirement Mapping", zh: "需求整理" },
      { en: "User Stories", zh: "User Stories" },
      { en: "Feature Prioritization", zh: "功能優先級" },
      { en: "Workflow Analysis", zh: "流程分析" },
      { en: "Product Demos", zh: "產品 Demo" },
    ],
  },
  {
    label: { en: "Solutions", zh: "解決方案" },
    items: [
      { en: "Discovery Questions", zh: "需求訪談問題" },
      { en: "Proposal Support", zh: "提案支援" },
      { en: "Technical Documentation", zh: "技術文件" },
      { en: "Customer Onboarding", zh: "客戶導入" },
    ],
  },
  {
    label: { en: "Design", zh: "設計" },
    items: [
      "Figma",
      "Adobe XD",
      "Design Systems",
      "Prototyping",
      "User Research",
    ],
  },
  {
    label: { en: "Front-End", zh: "前端" },
    items: ["React", "Vue.js", "JavaScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    label: { en: "Tooling", zh: "工具" },
    items: ["Claude API", "Supabase", "Vite", "Git", "Vercel"],
  },
];

const ROLE_DIRECTIONS = [
  {
    title: {
      en: "Technical Product Specialist",
      zh: "Technical Product Specialist",
    },
    body: {
      en: "Use design and front-end fluency to explain product behavior, clarify requirements, and support technical product decisions.",
      zh: "運用設計與前端能力說明產品行為、釐清需求，並支援技術產品決策。",
    },
  },
  {
    title: {
      en: "Solutions Consultant / Pre-sales",
      zh: "Solutions Consultant / Pre-sales",
    },
    body: {
      en: "Turn customer workflows into clear demos, discovery questions, and implementation-aware product recommendations.",
      zh: "把客戶流程轉化為清楚 demo、需求訪談問題，以及考量導入可行性的產品建議。",
    },
  },
  {
    title: {
      en: "Customer Success / Implementation PM",
      zh: "Customer Success / Implementation PM",
    },
    body: {
      en: "Help teams adopt products by connecting user needs, onboarding flows, documentation, and engineering constraints.",
      zh: "透過使用者需求、onboarding 流程、文件與工程限制的整合，協助團隊成功導入產品。",
    },
  },
];

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fanyihsuan/",
    external: true,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/congee_88",
    external: true,
  },
  { label: "Email", href: "mailto:fys840802@gmail.com" },
  { label: "Resume EN", href: "/FanYiH_resume.pdf", download: true },
  { label: "Resume 中文", href: "/范翊萱_履歷.pdf", download: true },
];

export default function About() {
  const { language, t } = useLanguage();
  const pageRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const els = pageRef.current?.querySelectorAll("[data-reveal]");
    if (!els) return;

    els.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = `opacity 0.8s cubic-bezier(0.19,1,0.22,1) ${i * 90}ms,
                             transform 0.8s cubic-bezier(0.19,1,0.22,1) ${i * 90}ms`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
      });
    });
  }, []);

  return (
    <main
      ref={pageRef}
      className="pb-40 max-w-[1200px] mx-auto px-8 lg:px-16 text-ink"
    >
      {/* Right: photo */}
      <div className="absolute right-0 top-0 -z-10 w-full max-h-[70vh] overflow-hidden md:-top-1/3">
        <img
          src="/profolio.webp"
          alt="Fan Yi Hsuan"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      {/* ── Hero ── */}
      <section data-reveal className="pt-36 pb-10 md:pt-24">
        <p className="uppercase text-muted text-zinc-100 mb-6 font-medium">
          Product-minded UI Engineer · Technical Product · Solutions
        </p>

        {/* Name */}
        <h1
          className="font-bold text-zinc-100 leading-none m-0 mb-6"
          style={{
            fontSize: "clamp(4rem, 10vw, 7.5rem)",
          }}
        >
          {t({
            en: "Fan",
            zh: "范",
          })}
          <br />

          {t({
            en: "Yi Hsuan",
            zh: "翊萱",
          })}
        </h1>

        <p
          className="leading-relaxed text-ink/60"
          style={{
            fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
          }}
        >
          {t({
            en: "I translate user needs and business workflows into clear product demos, prototypes, and implementation-ready interfaces. With 5+ years across UX, UI, and front-end development, I'm now focused on technical product, solutions consulting, and implementation roles where design judgment, customer communication, and engineering fluency can work together.",
            zh: "我擅長把使用者需求與商業流程轉化為清楚的產品 demo、原型與可交付工程實作的介面。累積 5 年以上 UX、UI 與前端開發經驗後，我現在希望往 technical product、solutions consulting 與 implementation 相關角色發展，讓設計判斷、客戶溝通與工程理解能一起發揮價值。",
          })}
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-8">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              download={link.download || undefined}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border border-ink/12 text-ink hover:bg-red-500 hover:text-chalk hover:border-ink/0 transition-all duration-200"
            >
              {tx(link.label, language)}
              {link.external && (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 8L8 2M4 2h4v4" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* ── Direction ── */}
      <section
        data-reveal
        className="py-16 border-b border-ink/8"
        aria-label="Target roles"
      >
        <div className="flex gap-16 flex-wrap flex-col md:flex-row">
          <div style={{ minWidth: 80, paddingTop: 6 }}>
            <p className="text-xs uppercase tracking-[0.18em] text-muted font-medium whitespace-nowrap">
              {t({ en: "Direction", zh: "方向" })}
            </p>
          </div>
          <div className="flex-1 grid gap-4 md:grid-cols-3">
            {ROLE_DIRECTIONS.map((role) => (
              <div
                key={role.title.en}
                className="border border-ink/10 rounded-lg p-5 bg-white/70"
              >
                <h3 className="text-base font-medium mb-3 text-ink">
                  {t(role.title)}
                </h3>
                <p className="text-sm leading-relaxed text-ink/55">
                  {t(role.body)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section
        data-reveal
        className="py-16 border-b border-ink/8"
        aria-label="Skills"
      >
        <div className="flex gap-16 flex-wrap flex-col md:flex-row">
          <div style={{ minWidth: 80, paddingTop: 2 }}>
            <p className="text-xs uppercase tracking-[0.18em] text-muted font-medium whitespace-nowrap">
              {t({ en: "Skills", zh: "技能" })}
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-10">
            {SKILLS.map(({ label, items }) => (
              <div key={tx(label, "en")}>
                <p
                  className="text-xs uppercase tracking-[0.14em] mb-3 font-medium"
                  style={{ color: "rgba(5,2,6,0.3)" }}
                >
                  {t(label)}
                </p>
                <ul className="flex flex-wrap gap-2" role="list">
                  {items.map((s) => (
                    <li key={tx(s, "en")}>
                      <span className="inline-block text-sm px-3.5 py-1.5 rounded-full border border-ink/10 text-ink/80 hover:border-ink/30 hover:text-ink transition-colors cursor-default">
                        {tx(s, language)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section data-reveal className="py-16" aria-label="Experience">
        <div className="flex gap-16 flex-wrap flex-col md:flex-row">
          {/* Label */}
          <div style={{ minWidth: 80, paddingTop: 6 }}>
            <p className="text-xs uppercase tracking-[0.18em] text-muted font-medium whitespace-nowrap">
              {t({ en: "Experience", zh: "經歷" })}
            </p>
          </div>

          {/* Timeline */}
          <ul className="flex-1 min-w-0" role="list" style={{ marginLeft: 0 }}>
            {EXPERIENCE.map((job, i) => (
              <li
                key={`${job.company}-${job.period}`}
                className="group relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Vertical line */}
                {i < EXPERIENCE.length - 1 && (
                  <div
                    className="absolute left-[5px] top-5 bottom-0 w-px bg-ink/10 group-last:hidden"
                    aria-hidden="true"
                  />
                )}

                {/* Dot */}
                <div
                  className="relative z-10 mt-1.5 rounded-full border-2 border-chalk bg-ink/20 group-hover:bg-ink transition-colors flex-shrink-0"
                  style={{ width: 11, height: 11 }}
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="flex-1 min-w-0 -mt-0.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 mb-1">
                    <h4 className="text-base font-medium text-ink">
                      {t(job.role)}
                    </h4>
                    <span className="text-xs text-muted flex-shrink-0 tabular-nums">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted mb-2">
                    {job.company}
                    {job.type && (
                      <>
                        <span className="mx-2 opacity-30">·</span>
                        <span className="opacity-60">{t(job.type)}</span>
                      </>
                    )}
                  </p>
                  {job.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-block text-xs px-2.5 py-0.5 rounded-full"
                          style={{
                            background: "rgba(5,2,6,0.04)",
                            color: "rgba(5,2,6,0.5)",
                            border: "1px solid rgba(5,2,6,0.07)",
                          }}
                        >
                          {tx(t, language)}
                        </span>
                      ))}
                    </div>
                  )}
                  {job.details && (
                    <ul className="space-y-1.5" role="list">
                      {job.details.map((detail) => (
                        <li
                          key={tx(detail, "en")}
                          className="text-sm leading-relaxed text-ink/55"
                        >
                          {t(detail)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
