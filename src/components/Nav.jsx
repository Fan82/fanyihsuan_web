import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { CONTACT } from "../data/contact";

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true); // nav 是否顯示
  const contactRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setVisible(true); // 最頂部永遠顯示
      } else if (currentY > lastScrollY.current) {
        setVisible(false); // 向下滾 → 隱藏
      } else {
        setVisible(true); // 向上滾 → 顯示
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!contactRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between px-6 lg:px-12 py-4 transition-transform duration-300 ease-in-out
      ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Link
        to="/"
        className="text-[1.375rem] font-medium leading-10 text-ink hover:underline"
      >
        Fan YiHsuan
      </Link>

      <nav className="flex items-center gap-2">
        <Link
          to="/about"
          className={`nav-pill ${pathname === "/about" ? "active" : ""}`}
        >
          about
        </Link>

        {/* Contact button + dropdown */}
        <div ref={contactRef} className="relative">
          <button onClick={() => setOpen(!open)} className="nav-pill">
            contact
          </button>

          {/* Dropdown */}
          <div
            className="absolute top-full right-0 mt-2 bg-white rounded-xl border overflow-hidden min-w-[140px] shadow-lg transition-all duration-150"
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
        </div>
      </nav>
    </header>
  );
}
