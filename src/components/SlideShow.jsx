import { useRef, useState, useEffect, useCallback } from "react";
import Slide from "./Slide";
import { useScrollLock } from "../hooks/useScrollLock";

const SLIDES = [
  {
    title: "UI/UX Design.",
    slogan: "Bridging Vision and Execution in Every Product.",
  },
  { title: "Front-End.", slogan: "100% Human-Centered, 0% Bootstrap." },
  {
    title: "Design Systems.",
    slogan: "Half designer, half engineer — Full-time problem solver.",
  },
  { title: "Startup Mindset.", slogan: "Agile Driven, Rapid Prototyping." },
];

export default function SlideShow({ onComplete }) {
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [done, setDone] = useState(false);

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
          title={currentSlide.title}
          slogan={currentSlide.slogan}
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
        <button
          onClick={complete}
          className="text-sm text-muted hover:text-ink transition-colors"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
