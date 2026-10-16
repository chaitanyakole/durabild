import { locations, projects } from "../data/site.js";
import { Icon } from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import CtaSection from "../components/CtaSection.jsx";
import Figure from "../components/Figure.jsx";

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Concrete across Pune"
        description="From high-rise towers and IT campuses to industrial sheds and flyovers — Durabild keeps challenging pours on schedule."
      />

      <section className="bg-charcoal-950 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-full border border-white/8 bg-charcoal-900/60 px-5 py-3 text-sm text-charcoal-400">
            <span className="font-display text-xs uppercase tracking-[0.25em] text-brand-500">
              Delivering in
            </span>
            {locations.map((l) => (
              <span key={l} className="flex items-center gap-1.5">
                <Icon name="pin" className="h-4 w-4 text-charcoal-500" />
                {l}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 90}>
                <article className="card-hover group h-full overflow-hidden rounded-4xl border border-white/8 bg-charcoal-900/60 hover:-translate-y-1 hover:border-brand-500/40">
                  <Figure scene={p.scene} className="aspect-[16/10] w-full" rounded="rounded-none" />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-brand-500/10 px-3 py-1 font-display text-xs uppercase tracking-[0.2em] text-brand-400">
                        {p.type}
                      </span>
                      <span className="text-xs text-charcoal-500">{p.year}</span>
                    </div>
                    <h2 className="mt-4 font-display text-xl font-bold uppercase leading-tight text-white">
                      {p.name}
                    </h2>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-charcoal-400">
                      <Icon name="pin" className="h-4 w-4 text-brand-500" />
                      {p.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-300">{p.detail}</p>
                    <div className="mt-5 h-1 w-0 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-16" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-charcoal-950 pt-20 lg:pt-28">
        <CtaSection />
      </div>
    </>
  );
}
