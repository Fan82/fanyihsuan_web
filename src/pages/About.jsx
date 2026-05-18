import { useEffect, useRef } from "react";
import { CONTACT } from "../data/contact.js";

const EXPERIENCE = [
  {
    role: "UI Designer Volunteer",
    company: "One Sky Collective",
    type: "Social Enterprise",
    period: "Nov 2025 – Now",
    tags: ["Figma", "UX"],
  },
  {
    role: "Freelance Content Writer",
    company: "SharkTech",
    type: "Freelance",
    period: "Jul 2025 – Now",
    tags: ["Content", "Tech"],
  },
  {
    role: "UX/UI Designer & Front-End Developer",
    company: "NEUTEC Co., Ltd.",
    type: "Full-time · 3 yrs",
    period: "Feb 2022 – Feb 2025",
    tags: ["Vue.js", "Figma", "Design Systems"],
  },
  {
    role: "UI Designer",
    company: "GOTRUST Co., Ltd.",
    type: "Full-time",
    period: "Apr 2021 – Feb 2022",
    tags: ["UI", "Figma"],
  },
  {
    role: "Web Designer",
    company: "CBES Co., Ltd.",
    type: "Full-time",
    period: "Feb 2019 – Mar 2021",
    tags: ["HTML/CSS", "UI"],
  },
];

const SKILLS = [
  {
    label: "Design",
    items: [
      "Figma",
      "Adobe XD",
      "Design Systems",
      "Prototyping",
      "User Research",
    ],
  },
  {
    label: "Front-End",
    items: ["React", "Vue.js", "JavaScript", "Tailwind CSS", "HTML / CSS"],
  },
  { label: "Tooling", items: ["Claude API", "Vite", "Git", "Vercel"] },
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
      className="pb-40 max-w-[1100px] mx-auto px-8 lg:px-16 text-ink"
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
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-100 mb-6 font-medium">
          Design Engineer · Relocate
        </p>

        {/* Name */}
        <h1
          className="font-bold text-zinc-100 leading-none m-0 mb-6"
          style={{
            fontSize: "clamp(4rem, 10vw, 7.5rem)",
          }}
        >
          Fan
          <br />
          Yi Hsuan
        </h1>

        <p
          className="font-light leading-relaxed text-ink/60"
          style={{
            fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
          }}
        >
          I build products at the intersection of design and engineering. With
          6+ years across UX, UI, and front-end development, I'm most interested
          in creating tools that turn complex workflows into clear, usable
          experiences — and I care about the detail at every layer of the stack.
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
              {link.label}
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

      {/* ── Skills ── */}
      <section
        data-reveal
        className="py-16 border-b border-ink/8"
        aria-label="Skills"
      >
        <div className="flex gap-16 flex-wrap flex-col md:flex-row">
          <div style={{ minWidth: 80, paddingTop: 2 }}>
            <p className="text-xs uppercase tracking-[0.18em] text-muted font-medium whitespace-nowrap">
              Skills
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-10">
            {SKILLS.map(({ label, items }) => (
              <div key={label}>
                <p
                  className="text-xs uppercase tracking-[0.14em] mb-3 font-medium"
                  style={{ color: "rgba(5,2,6,0.3)" }}
                >
                  {label}
                </p>
                <ul className="flex flex-wrap gap-2" role="list">
                  {items.map((s) => (
                    <li key={s}>
                      <span className="inline-block text-sm px-3.5 py-1.5 rounded-full border border-ink/10 text-ink/80 hover:border-ink/30 hover:text-ink transition-colors cursor-default">
                        {s}
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
              Experience
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
                      {job.role}
                    </h4>
                    <span className="text-xs text-muted flex-shrink-0 tabular-nums">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted mb-2">
                    {job.company}
                    <span className="mx-2 opacity-30">·</span>
                    <span className="opacity-60">{job.type}</span>
                  </p>
                  {job.tags && (
                    <div className="flex flex-wrap gap-1.5">
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
                          {t}
                        </span>
                      ))}
                    </div>
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
