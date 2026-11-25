import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { LANGUAGES, UI_COPY, useLanguage } from "../i18n/LanguageContext";

const EMAIL = "mailto:fys840802@gmail.com";

export default function Nav() {
  const { pathname } = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else if (document.body.style.overflow === "hidden") {
      // Only reset if Nav itself set it
      document.body.style.overflow = "";
    }
    return () => {
      if (menuOpen) document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isWorkActive = pathname === "/" || pathname.startsWith("/projects");
  const isAbout = pathname === "/about";
  const languageLabel = language === "en" ? LANGUAGES.zh : LANGUAGES.en;
  const mobileLink =
    "text-3xl font-medium text-ink py-4 border-b border-ink/8 hover:text-ink/50 transition-colors";

  return (
    <>
      <a href="#main" className="skip-link">
        {t(UI_COPY.nav.skip)}
      </a>

      <header
        // Keyboard users never land on links inside a hidden header
        onFocus={() => setVisible(true)}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 transition-transform duration-300 ease-in-out
          ${visible || menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Link
          to="/"
          className="text-[1.375rem] font-medium leading-10 text-ink hover:underline"
        >
          Fan YiHsuan
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-2"
          aria-label={t(UI_COPY.nav.main)}
        >
          <Link
            to={{ pathname: "/", hash: "#work" }}
            className={`nav-pill ${isWorkActive ? "active" : ""}`}
          >
            {t(UI_COPY.nav.work)}
          </Link>
          <Link
            to="/about"
            className={`nav-pill ${isAbout ? "active" : ""}`}
            aria-current={isAbout ? "page" : undefined}
          >
            {t(UI_COPY.nav.about)}
          </Link>
          <a href={EMAIL} className="nav-pill">
            {t(UI_COPY.nav.contact)}
          </a>
          <button
            onClick={toggleLanguage}
            className="nav-pill uppercase"
            aria-label={t(UI_COPY.nav.toggleLanguage)}
          >
            {languageLabel}
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? t(UI_COPY.nav.closeMenu) : t(UI_COPY.nav.openMenu)
          }
        >
          <span
            className="block w-5 h-px bg-ink transition-all duration-300 origin-center"
            style={{
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-px bg-ink transition-all duration-300"
            style={{
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? "scaleX(0)" : "none",
            }}
          />
          <span
            className="block w-5 h-px bg-ink transition-all duration-300 origin-center"
            style={{
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 bg-white flex flex-col px-6 pt-24 pb-12 md:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          transition: "opacity 0.25s ease, visibility 0.25s",
        }}
      >
        <nav
          className="flex flex-col gap-1 flex-1"
          aria-label={t(UI_COPY.nav.main)}
        >
          <Link
            to={{ pathname: "/", hash: "#work" }}
            onClick={() => setMenuOpen(false)}
            className={mobileLink}
          >
            {t(UI_COPY.nav.work)}
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={mobileLink}
            aria-current={isAbout ? "page" : undefined}
          >
            {t(UI_COPY.nav.about)}
          </Link>
          <a
            href={EMAIL}
            onClick={() => setMenuOpen(false)}
            className={mobileLink}
          >
            {t(UI_COPY.nav.contact)}
          </a>
          <button
            onClick={toggleLanguage}
            className={`${mobileLink} text-left`}
          >
            {languageLabel}
          </button>
        </nav>

        <p className="text-xs" style={{ letterSpacing: "0.1em" }}>
          {t(UI_COPY.nav.wordmark)}
        </p>
      </div>
    </>
  );
}
