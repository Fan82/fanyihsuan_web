import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { CONTACT } from "../data/contact";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const contactRef = useRef(null);
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

  // Close contact dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!contactRef.current?.contains(e.target)) setContactOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // Only reset if Nav itself set it — don't interfere with SlideShow's lock
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "";
      }
    }
    return () => {
      if (menuOpen) document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function handleProjects(e) {
    e.preventDefault();
    setMenuOpen(false);
    if (pathname === "/") {
      window.dispatchEvent(new Event("skipSlideshow"));
    } else {
      navigate("/?scroll=projects");
    }
  }

  const isProjectsActive = pathname === "/" || pathname.startsWith("/projects");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between px-6 lg:px-12 py-4 transition-transform duration-300 ease-in-out
          ${visible || menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Link
          to="/"
          className="text-[1.375rem] font-medium leading-10 text-ink hover:underline"
        >
          Fan YiHsuan
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <a
            href="/#projects"
            onClick={handleProjects}
            className={`nav-pill ${isProjectsActive ? "active" : ""}`}
          >
            Projects
          </a>

          <Link
            to="/about"
            className={`nav-pill ${pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>

          <div ref={contactRef} className="relative">
            <button
              onClick={() => setContactOpen(!contactOpen)}
              className="nav-pill"
            >
              contact
            </button>

            <div
              className="absolute top-full right-0 mt-2 bg-white rounded-xl border overflow-hidden min-w-[140px] shadow-lg transition-all duration-150"
              style={{
                opacity: contactOpen ? 1 : 0,
                pointerEvents: contactOpen ? "auto" : "none",
                transform: contactOpen ? "translateY(0)" : "translateY(6px)",
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
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
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
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.25s ease",
        }}
      >
        {/* Nav links */}
        <nav className="flex flex-col gap-1 flex-1">
          <a
            href="/#projects"
            onClick={handleProjects}
            className="text-3xl font-medium text-ink py-4 border-b border-ink/8 hover:text-ink/50 transition-colors"
          >
            Projects
          </a>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-medium text-ink py-4 border-b border-ink/8 hover:text-ink/50 transition-colors"
          >
            About
          </Link>

          {/* Contact links expanded inline */}
          {CONTACT.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer" : undefined}
              download={c.download || undefined}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-medium text-ink py-4 border-b border-ink/8 hover:text-ink/50 transition-colors flex items-center justify-between"
            >
              {c.label}
              {c.external && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 16L16 4M8 4h8v8" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* Bottom wordmark */}
        <p className="text-xs text-muted" style={{ letterSpacing: "0.1em" }}>
          Fan YiHsuan · Design Engineer
        </p>
      </div>
    </>
  );
}
