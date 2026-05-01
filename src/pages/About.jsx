import { useEffect, useRef } from "react";
import { CONTACT } from "../data/contact.js";

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

const SKILLS = {
  Design: [
    "Figma",
    "Adobe XD",
    "User Research",
    "Prototyping",
    "Design Systems",
  ],
  Development: ["Vue.js", "React", "Tailwind CSS", "HTML / CSS", "JavaScript"],
};

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
      el.style.transform = "translateY(16px)";
      el.style.transition = `opacity 0.7s cubic-bezier(0.19,1,0.22,1) ${i * 70}ms,
                             transform 0.7s cubic-bezier(0.19,1,0.22,1) ${i * 70}ms`;
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
      className="pb-32 max-w-[1100px] mt-8 mx-auto px-8 lg:px-16 text-ink"
    >
      {/* ── Hero ── */}
      <section
        data-reveal
        className="flex flex-wrap gap-12 items-end pt-12 pb-16"
      >
        {/* Left: name + bio */}
        <div>
          <h1 className="text-6xl lg:text-8xl font-bold text-ink mb-7">
            Fan
            <br />
            Yi Hsuan
            <p className="text-base  font-normal lg:text-xl mt-2 mb-4">
              Design Engineer
            </p>
          </h1>
          <p className="text-base leading-[1.8] text-ink/60 font-light max-w-[36ch]">
            I design with code in mind and build with an eye for detail. With 6+
            years across UX, UI, and front-end, I focus on crafting polished
            digital interfaces where design and engineering meet. Open to
            full-time and freelance opportunities.
          </p>
        </div>

        {/* Right: photo */}
        <div className="w-20 flex-auto">
          <img
            src="/profolio.webp"
            alt="Fan Yi Hsuan"
            className="w-full h-full object-cover object-top grayscale-[15%]"
          />
        </div>
      </section>

      {/* ── Skills + Experience ── */}
      <section
        data-reveal
        className="flex gap-16 pb-16 flex-wrap"
        aria-label="Skills and experience"
      >
        {/* Skills */}
        <div id="skills" className="w-full lg:w-1/3">
          <p className="text-xs uppercase tracking-widest text-ink/30 mb-5">
            Skills
          </p>
          {Object.entries(SKILLS).map(([label, items]) => (
            <div key={label} className="mb-6">
              <p className="text-xs uppercase tracking-widest text-ink/20 mb-3">
                {label}
              </p>
              <ul className="flex flex-wrap gap-2" role="list">
                {items.map((s) => (
                  <li key={s}>
                    <span className="inline-block text-sm px-3.5 py-1.5 rounded-full border border-ink/10 text-ink">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div id="experience" className="w-full lg:flex-1">
          <p className="text-xs uppercase tracking-widest text-ink/30 mb-5">
            Experience
          </p>

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
        </div>
      </section>
    </main>
  );
}
