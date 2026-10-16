import { Link } from "react-router-dom";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="grain relative overflow-hidden border-b border-white/5 bg-charcoal-950">
      <div className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full bg-brand-500/12 blur-[110px] animate-blob" />
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-28 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-40">
        <nav className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-charcoal-400">
          <Link to="/" className="transition-colors hover:text-brand-400">
            Home
          </Link>
          <span className="text-charcoal-600">/</span>
          <span className="text-brand-400">{eyebrow}</span>
        </nav>
        <h1 className="max-w-4xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal-300 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
