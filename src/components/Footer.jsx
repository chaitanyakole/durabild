import { Link } from "react-router-dom";
import { company, navLinks, products } from "../data/site.js";
import Logo from "./Logo.jsx";
import { Icon } from "./Icon.jsx";
import { useLoader } from "../context/useLoader.js";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { triggerLoader } = useLoader();
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-charcoal-950">
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-charcoal-300">
              Construction material and ready-mixed concrete supplier serving Pune, PCMC and western
              Maharashtra with plant-controlled quality and dependable delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Hadapsar", "Katraj", "Baner", "Shewalewadi"].map((l) => (
                <span
                  key={l}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-charcoal-300"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-charcoal-300 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Products
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    to="/products"
                    className="text-charcoal-300 transition-colors hover:text-brand-400"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Reach Us
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-charcoal-300">
              <li className="flex gap-3">
                <Icon name="pin" className="h-5 w-5 shrink-0 text-brand-400" />
                <span>
                  {company.address}
                  <span className="mt-1 block text-charcoal-400">{company.addressNote}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-brand-400" />
                <span className="flex flex-col gap-1">
                  <a href={company.phoneHref} className="transition-colors hover:text-brand-400">
                    {company.phone}
                  </a>
                  <a href={company.phone2Href} className="transition-colors hover:text-brand-400">
                    {company.phone2}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="h-5 w-5 shrink-0 text-brand-400" />
                <a href={company.emailHref} className="transition-colors hover:text-brand-400">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-charcoal-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {CURRENT_YEAR} {company.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <p>Serving Hadapsar · Katraj · Baner · Shewalewadi · Pune</p>
            <button
              type="button"
              onClick={triggerLoader}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-400 transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-charcoal-950"
              title="Showcase the construction loader animation"
            >
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 19V9l8-4 8 4v10" />
                <path d="M9 19v-6h6v6" />
              </svg>
              Replay Loader
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
