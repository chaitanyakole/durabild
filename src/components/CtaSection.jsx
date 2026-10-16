import { Link } from "react-router-dom";
import { company } from "../data/site.js";

export default function CtaSection() {
  return (
    <section className="bg-charcoal-950 px-5 pb-20 pt-4 lg:px-8 lg:pb-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400 p-8 sm:p-12 lg:p-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #000 0, #000 1px, transparent 1px, transparent 16px)",
          }}
        />
        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-xl font-display text-3xl font-bold uppercase leading-tight text-charcoal-950 sm:text-4xl lg:text-5xl">
              Ready to pour? Let&apos;s get your concrete on site.
            </h2>
            <p className="mt-4 max-w-xl text-charcoal-900/80">
              Share your drawing, grades and pour schedule — our engineers will suggest the right mix
              and a delivery plan for your project.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal-950 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:scale-[1.03] hover:bg-charcoal-900"
            >
              Request a Quote
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal-950/30 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-charcoal-950 transition-colors hover:border-charcoal-950"
            >
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
