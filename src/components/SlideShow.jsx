import { useRef, useState, useEffect, useCallback } from "react";
import Slide from "./Slide";
import { useScrollLock } from "../hooks/useScrollLock";
import { useLanguage } from "../i18n/LanguageContext";

const SLIDES = [
  {
    title: {
      en: "Product-Minded UI Engineer.",
      zh: "產品思維 UI Engineer.",
    },
    slogan: {
      en: "Turning needs into working product experiences.",
      zh: "把需求轉化成清楚、可使用、可落地的產品體驗。",
    },
  },
  {
    title: {
      en: "Technical Product Thinking.",
      zh: "Technical Product Thinking.",
    },
    slogan: {
      en: "From ambiguous requirements to demo-ready prototypes.",
      zh: "從模糊需求，到可以展示與驗證的產品原型。",
    },
  },
  {
    title: {
      en: "Solutions + Implementation.",
      zh: "Solutions + Implementation.",
    },
    slogan: {
      en: "Bridging customers, design, and engineering.",
      zh: "連接客戶需求、設計判斷與工程實作。",
    },
  },
  {
    title: { en: "AI-Powered Tools.", zh: "AI-Powered Tools." },
    slogan: {
      en: "Built with Claude. Shipped to users.",
      zh: "使用 Claude 打造，並真正部署給使用者。",
    },
  },
];

export default function SlideShow({ onComplete }) {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [hideSkip, setHideSkip] = useState(false);

  useScrollLock(!done);

  const complete = useCallback(() => {
    document.body.style.overflow = ""; // ← 加這行
    setDone(true);
    onComplete?.();
  }, [onComplete]);

  const handleScroll = useCallback(
    (e) => {
      const el = e.currentTarget;
      const p = Math.min(el.scrollTop / (el.scrollHeight - el.clientHeight), 1);

      setProgress(p);
      setSlideIndex(Math.min(Math.floor(p * SLIDES.length), SLIDES.length - 1));

      if (p >= 0.95) {
        setHideSkip(true); // ← 先隱藏 skip
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(complete, 400);
      }
    },
    [complete],
  );

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  if (done) return null;

  const currentSlide = SLIDES[slideIndex];

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-y-auto"
      onScroll={handleScroll}
      style={{ scrollBehavior: "auto" }}
    >
      {/* Tall spacer drives the scroll */}
      <div className="h-[400vh] w-px" aria-hidden />

      {/* Fixed slide frame */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <Slide
          title={t(currentSlide.title)}
          slogan={t(currentSlide.slogan)}
          progress={progress}
        />
      </div>

      {/* Scroll cue arrow */}
      <div
        className="fixed left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
        style={{ bottom: "80px" }}
        aria-hidden
      >
        <div className="relative overflow-hidden w-px h-20 flex flex-col justify-end">
          <div className="absolute top-0 animate-scroll-cue bg-muted w-full h-7" />
          <div
            className="w-2 h-2 border-t border-l border-muted"
            style={{ transform: "rotate(-135deg)", marginBottom: "4px" }}
          />
        </div>
        {!hideSkip && (
          <button
            onClick={complete}
            className="text-sm text-muted hover:text-ink transition-colors transition-opacity duration-300"
            style={{
              opacity: hideSkip ? 0 : 1,
              pointerEvents: hideSkip ? "none" : "auto",
            }}
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
}
