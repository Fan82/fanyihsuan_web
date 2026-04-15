/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // ── Typography ──────────────────────────────────────────
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
      fontSize: {
        // display sizes used in slides & hero
        "display-xl": [
          "clamp(3.5rem, 8vw, 7rem)",
          { lineHeight: "1.0", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(2.5rem, 5vw, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.015em" },
        ],
      },

      // ── Colours ─────────────────────────────────────────────
      // All project accent colours live here — swap per-project via CSS var
      colors: {
        // Global neutrals
        ink: "#050206",
        chalk: "#fafafa",
        muted: "#9d9d9d",
        dim: "#3a3a3a",

        // Per-project accent colours (referenced via CSS var --accent / --accent-dim)
        // You'll pass these as inline style or Tailwind arbitrary values
        project: {
          takeTask: "#FFAE00",
          bookFlight: "#2563EB",
          easyBank: "#2563eb",
          goTravel: "#EA580C",
          publicTransp: "#7C3AED",
          publicTransp: "#05df72",
        },
      },

      // ── Spacing extras ──────────────────────────────────────
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        128: "32rem",
      },

      // ── Transitions ─────────────────────────────────────────
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      transitionDuration: {
        800: "800ms",
      },

      // ── Animations ──────────────────────────────────────────
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scroll-cue": {
          "0%": { opacity: "1", transform: "translateY(-100%)" },
          "20%": { opacity: "1" },
          "100%": { opacity: "1", transform: "translateY(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.19,1,0.22,1) both",
        "fade-in": "fade-in 0.6s ease both",
        "scroll-cue": "scroll-cue 2s ease infinite",
      },
    },
  },
  plugins: [],
};
