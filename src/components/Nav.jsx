import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4"
      style={{ mixBlendMode: "difference" }}
    >
      {/* Logo / name */}
      <Link
        to="/"
        className="text-[1.375rem] font-medium leading-10 text-chalk hover:underline"
      >
        Fan YiHsuan
      </Link>

      {/* Nav links */}
      <nav className="flex items-center gap-2">
        <Link
          to="/about"
          className={`nav-pill  ${pathname === "/about" ? "active" : ""}`}
        >
          about
        </Link>
        <Link
          to="/project"
          className={`nav-pill  ${pathname === "/ProjectDetail" ? "active" : ""}`}
        >
          project
        </Link>
      </nav>
    </header>
  );
}
