import { Link } from "react-router-dom";

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Durabild home">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-charcoal-950 shadow-lg shadow-brand-500/20 transition-transform group-hover:scale-105 sm:h-11 sm:w-11">
        <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
          <path d="M4 19V9l8-4 8 4v10" />
          <path d="M9 19v-6h6v6" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-bold uppercase tracking-[0.16em] text-white sm:text-xl">
          Durabild
        </span>
        {!compact && (
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.3em] text-brand-400">
            Corporation Pvt. Ltd.
          </span>
        )}
      </span>
    </Link>
  );
}
