import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

const EXPERIENCE = [
  {
    role: "UI Designer Volunteer",
    company: "One Sky Collective (Social Enterprise)",
    period: "Nov 2025 – Now",
  },
  {
    role: "Freelance Content Writer",
    company: "SharkTech",
    period: "July 2025 – Now",
  },
  {
    role: "UX/UI Designer / Front-End Developer",
    company: "NEUTEC Co., Ltd.",
    period: "Feb 2022 – Feb 2025",
  },
  {
    role: "UI Designer",
    company: "GOTRUST Co., Ltd.",
    period: "Apr 2021 – Feb 2022",
  },
  {
    role: "Web Designer",
    company: "CBES Co., Ltd.",
    period: "Feb 2019 – Mar 2021",
  },
  {
    role: "Art Teacher",
    company: "Global ART Co., Ltd.",
    period: "Sep 2017 – Feb 2018",
  },
];

const SKILLS = [
  "Figma",
  "Adobe XD",
  "User Research",
  "Prototyping",
  "Vue.js",
  "React",
  "Tailwind CSS",
  "HTML / CSS",
  "JavaScript",
  "Design Systems",
];

const CONTACT = [
  {
    label: "Resume",
    href: "/FanYiH_resume.pdf",
    download: "FanYiH_resume.pdf",
  },
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
  { label: "Get In Touch", href: "mailto:fys840802@gmail.com" },
];

export default function About() {
  const sectionRef = useRef(null);
  const floatingRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const els = sectionRef.current?.querySelectorAll("[data-reveal]");
    if (!els) return;

    els.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = `opacity 0.7s cubic-bezier(0.19,1,0.22,1) ${i * 80}ms,
                             transform 0.7s cubic-bezier(0.19,1,0.22,1) ${i * 80}ms`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
      });
    });

    const handleClickOutside = (e) => {
      if (!floatingRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ✅ Background watermark — 移到 <main> 外層，z-index 完全獨立 */}
      <div
        className="relative top-0 left-0 w-full h-[40vh] -z-10 pointer-events-none"
        style={{
          backgroundImage: "url(/profolio.webp)",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
        aria-hidden
      />
      <main
        ref={sectionRef}
        className="pt-4 pb-32 max-w-[1200px] mx-auto px-8 lg:px-16 text-ink relative"
      >
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors mb-8 mt-4"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 8L2 12L6 16" />
            <path d="M2 12H22" />
          </svg>
          Back
        </Link>

        {/* ── Name + titles ── */}
        <h1 data-reveal className="text-6xl font-bold leading-20 mb-4 mt-4">
          Fan Yi Hsuan
        </h1>

        <div data-reveal className="flex flex-wrap gap-x-0 mb-6">
          {/* ✅ "Design Developer" → "Design Engineer"，與 bio 統一 */}
          {["UI/ UX Designer", "Front-End Developer", "Design Engineer"].map(
            (t, i) => (
              <h2
                key={t}
                className="text-base inline-block px-1 py-0.5 lg:text-xl"
              >
                {t}
                {i < 2 && <span className="text-muted mx-1">/</span>}
              </h2>
            ),
          )}
        </div>

        {/* ── Bio ── */}
        {/* ✅ 精煉內容，去除重複語意 */}
        <p data-reveal className="font-light mb-16 leading-6">
          I'm a Design Engineer from Taiwan, based in London. I bridge design
          and code — turning ideas into interfaces that are both beautiful and
          functional. With 6+ years across UX, UI, and front-end development, I
          bring design sensibility and engineering execution to the same table.
          Open to full-time and freelance opportunities in London and remote.
        </p>

        {/* ── Skills ── */}
        {/* ✅ div → section + aria-labelledby；ol → ul（無順序語意） */}
        <section
          data-reveal
          id="skills"
          className="mb-16"
          aria-labelledby="skills-heading"
        >
          <h3 id="skills-heading" className="text-xl mb-6">
            Skills
          </h3>

          {[
            {
              label: "Design",
              items: [
                "Figma",
                "Adobe XD",
                "User Research",
                "Prototyping",
                "Design Systems",
              ],
            },
            {
              label: "Development",
              items: [
                "Vue.js",
                "React",
                "Tailwind CSS",
                "HTML / CSS",
                "JavaScript",
              ],
            },
          ].map(({ label, items }) => (
            <div key={label} className="mb-4">
              <p className="text-xs uppercase tracking-widest text-ink mb-2">
                {label}
              </p>
              <ul className="flex flex-wrap gap-2" role="list">
                {items.map((s) => (
                  <li key={s}>
                    <span className="inline-block text-sm px-3.5 py-1.5 rounded-full border border-ink/10 text-ink bg-transparent hover:bg-ink hover:text-chalk hover:border-ink transition-colors cursor-default">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ── Work Experience ── */}
        <section
          data-reveal
          id="experience"
          className="mb-16"
          aria-labelledby="experience-heading"
        >
          <h3 id="experience-heading" className="text-xl mb-6">
            Work Experience
          </h3>

          <ul
            className="relative pl-5 border-l border-ink/10 space-y-1"
            role="list"
          >
            {EXPERIENCE.map((job) => (
              <li
                key={`${job.company}-${job.period}`}
                className="relative pl-5 py-3 rounded-xlhover:bg-ink/[0.03] transition-colors group cursor-default"
              >
                {/* timeline dot */}
                <span className="absolute -left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white bg-ink/20 group-hover:bg-ink group-hover:scale-12 transition-all" />
                <span className="text-xs text-muted shrink-0">
                  {job.period}
                </span>
                <div className="flex justify-between items-baseline gap-3">
                  <h4 className="text-base font-medium">{job.role}</h4>
                </div>
                <p className="text-sm text-muted mt-0.5">{job.company}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Contact ── */}
        {/* ✅ ol → ul + section */}
        {/* <section data-reveal id="contact" aria-labelledby="contact-heading">
          <h3 id="contact-heading" className="text-xl mb-4">
            Contact me
          </h3>
          <ul className="flex flex-wrap gap-3" role="list">
            {CONTACT.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  download={c.download || undefined}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-ink text-chalk text-sm hover:bg-dim transition-colors"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </section> */}

        {/* Floating Contact button */}
        <div
          ref={floatingRef}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center"
        >
          <div
            className="mb-2 bg-white rounded-xl border overflow-hidden min-w-[140px] shadow-lg transition-all duration-150"
            style={{
              opacity: open ? 1 : 0,
              pointerEvents: open ? "auto" : "none",
              transform: open ? "translateY(0)" : "translateY(6px)",
            }}
          >
            {CONTACT.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                download={c.download || undefined}
                className="block px-4 py-2.5 text-sm text-ink hover:bg-gray-50 border-b border-ink/5 last:border-0 transition-colors"
              >
                {c.label}
              </a>
            ))}
          </div>

          {/* 觸發按鈕 */}
          <button
            onClick={() => setOpen(!open)}
            className="px-10 py-3 rounded-full bg-chalk text-ink text-sm font-medium shadow-[0_0_20px_rgba(5,2,6,0.15)] hover:shadow-[0_0_32px_rgba(5,2,6,0.25)] transition-shadow"
          >
            Contact
          </button>
        </div>
        {/* <div
          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white rounded-xl border overflow-hidden min-w-[140px] shadow-lg transition-all duration-150"
          style={{
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
            transform: open ? "translateY(0)" : "translateY(6px)",
          }}
          ref={ref}
        >
          <a
            href="/FanYiH_resume.pdf"
            className="transition-colors hover:text-red-500"
            download
          >
            Resume
          </a>
          <a
            href="mailto:fys840802@gmail.com"
            className="transition-colors hover:text-red-500"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/fanyihsuan/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-red-500"
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net/congee_88"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-red-500"
          >
            Behance
          </a>
        </div> */}
      </main>
    </>
  );
}
