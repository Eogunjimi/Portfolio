import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Clock from "./Clock";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[64px] max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          className="font-mono text-[12px] font-medium tracking-[0.12em] text-ink uppercase"
          onClick={() => setMenuOpen(false)}
        >
          Ayodeji Atanda
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-1.5 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors ${
                  isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="h-[5px] w-[5px] rounded-full bg-accent" />
                  )}
                  {link.label}
                </>
              )}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-1.5 rounded-full border border-ink/70 px-4 py-1.5 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:bg-ink hover:text-cream ${
                isActive ? "bg-ink text-cream" : "text-ink"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="h-[5px] w-[5px] rounded-full bg-accent" />}
                Contact
              </>
            )}
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <Clock />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-[1.5px] w-6 bg-ink transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-[1.5px] w-6 bg-ink transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-6 border-t border-line/70 bg-cream px-6 py-8 md:hidden">
          {[...links, { to: "/contact", label: "Contact" }].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm tracking-[0.14em] text-ink uppercase"
            >
              {link.label}
            </NavLink>
          ))}
          <Clock />
        </div>
      )}
    </header>
  );
}
