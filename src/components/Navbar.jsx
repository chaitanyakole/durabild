import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { company, navLinks } from "../data/site.js";
import Logo from "./Logo.jsx";
import { Icon } from "./Icon.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border px-4 relative z-50 transition-all duration-300 sm:h-[68px] sm:px-5 ${
          scrolled || open
            ? "glass border-white/10 shadow-2xl shadow-black/40"
            : "border-white/5 bg-charcoal-950/40 backdrop-blur-sm"
        }`}
      >
        <Logo compact />

        <nav className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/[0.03] p-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand-500 text-charcoal-950"
                    : "text-charcoal-200 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-charcoal-200 transition-colors hover:text-brand-400"
          >
            <Icon name="phone" className="h-4 w-4 text-brand-400" />
            {company.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-charcoal-950 transition-transform hover:scale-[1.03] hover:bg-brand-400"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 rounded bg-current transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-6 rounded bg-current transition-all ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 rounded bg-current transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-0 z-40 origin-top bg-charcoal-950/98 px-5 pb-10 pt-24 overflow-y-auto overscroll-contain transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col divide-y divide-white/5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `flex items-center justify-between py-4 font-display text-xl font-medium uppercase tracking-wide ${
                  isActive ? "text-brand-400" : "text-white"
                }`
              }
            >
              {link.label}
              <Icon name="arrow" className="h-5 w-5 text-charcoal-600" />
            </NavLink>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3">
          <a
            href={company.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full border border-white/10 py-3.5 text-sm font-medium text-charcoal-100"
          >
            <Icon name="phone" className="h-4 w-4 text-brand-400" />
            {company.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-brand-500 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-charcoal-950"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
