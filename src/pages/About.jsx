import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const EXPERIENCE = [
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
    href: "/FanYiH_resume.pdf", // 移掉 /public
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
  {
    label: "Get In Touch",
    href: "mailto:fys840802@gmail.com",
    external: false,
  },
];

export default function About() {
  const sectionRef = useRef(null);

  // Staggered fade-up on mount
  useEffect(() => {
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
  }, []);

  return (
    <main
      ref={sectionRef}
      className="pt-[10vh] pb-32 max-w-[1200px] mx-auto px-8 lg:px-16 text-ink relative"
    >
      {/* Back 按鈕 */}
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
      {/* Background watermark — profolio.webp tiled */}
      <div
        className="w-full h-[50vh] -z-10"
        style={{
          backgroundImage: "url(/profolio.webp)",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          mixBlendMode: "",
        }}
        aria-hidden
      />

      {/* ── Name + titles ───────────────────────────────── */}
      <h1 data-reveal className="text-6xl font-bold leading-20 mb-4 mt-4">
        Fan Yi Hsuan
      </h1>

      <div data-reveal className="flex flex-wrap gap-x-0 mb-6">
        {["UI/ UX Designer", "Front-End Developer", "Design Developer"].map(
          (t, i) => (
            <h2
              key={t}
              className="text-base inline-block px-1 py-0.5 lg:text-xl"
              style={{ background: i === 0 ? "none" : "none" }}
            >
              {t}
              {i < 2 && <span className="text-muted mx-1">/</span>}
            </h2>
          ),
        )}
      </div>

      {/* ── Bio ─────────────────────────────────────────── */}
      <p data-reveal className="font-light mb-16 leading-6">
        Hellooooo — I'm a Design Engineer from Taiwan, currently based in
        London. I bridge the gap between design and code — turning ideas into
        interfaces that are both beautiful and functional. With 6+ years across
        UX, UI, and front-end development, I'm now open to full-time and
        freelance opportunities in London and remote, where I can bring both
        design sensibility and engineering execution to the same table.
      </p>

      {/* ── Skills ──────────────────────────────────────── */}
      <div data-reveal className="mb-16">
        <h3 className="text-xl mb-4">Skills</h3>
        <ol className="flex flex-wrap gap-x-4 gap-y-2">
          {SKILLS.map((s) => (
            <li key={s} className="text-muted">
              {s}
            </li>
          ))}
        </ol>
      </div>

      {/* ── Work Experience ─────────────────────────────── */}
      <div data-reveal className="mb-16">
        <h3 className="text-xl mb-4">Work Experience</h3>
        <ul className="space-y-6">
          {EXPERIENCE.map((job) => (
            <li key={job.company}>
              <h4 className="text-xl font-light mb-2">{job.role}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-muted">{job.company}</span>
                <span className="text-muted">•</span>
                <span className="text-muted">{job.period}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Contact ─────────────────────────────────────── */}
      <div data-reveal>
        <h3 className="text-xl mb-4">Contact me</h3>
        <ol className="flex flex-wrap gap-3">
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
        </ol>
      </div>

      {/* Floating Contact button (sticky bottom) */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
        <a
          href="mailto:fys840802@gmail.com"
          className="px-10 py-3 rounded-full bg-chalk text-ink text-sm font-medium shadow-[0_0_20px_rgba(5,2,6,0.15)] hover:shadow-[0_0_32px_rgba(5,2,6,0.25)] transition-shadow"
        >
          Contact
        </a>
      </div>
    </main>
  );
}
