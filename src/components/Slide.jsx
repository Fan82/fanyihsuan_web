/**
 * Slide.jsx
 *
 * A single full-viewport slide. Receives:
 *   title    — bold display text (e.g. "UI/UX Design.")
 *   slogan   — muted subtitle below
 *   progress — 0–1, how far through this slide the scroll is
 *              (used for scale / opacity effects)
 */
export default function Slide({ title, slogan, progress = 0 }) {
  // Subtle scale-up as user scrolls through the slide
  const scale = 1 + progress * 0.5;

  return (
    <div
      className="w-full h-full flex flex-col justify-center items-start px-8 md:px-16"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "left center",
        transition: "transform 0.1s linear",
        willChange: "transform",
      }}
    >
      <h4
        className="font-sans font-bold text-display-xl text-ink m-0"
        style={{ letterSpacing: "0.016em" }}
      >
        {title}
      </h4>
      <p
        className="text-xl text-muted mt-4 whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {slogan}
      </p>
    </div>
  );
}
