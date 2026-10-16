import { equipmentRentals, products } from "../data/site.js";
import { Icon } from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import CtaSection from "../components/CtaSection.jsx";
import Figure from "../components/Figure.jsx";

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Materials graded, tested, delivered"
        description="Ready-mixed concrete and a full basket of construction materials — supplied together so your site stays stocked and on schedule."
      />

      <section className="bg-charcoal-950 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-16 px-5 sm:space-y-20 lg:px-8">
          {products.map((p, i) => (
            <Reveal key={p.id}>
              <article className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <Figure
                    scene={p.scene}
                    className="aspect-[4/3] w-full shadow-2xl shadow-black/40"
                    overlay={false}
                  />
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/10 text-brand-500">
                      <Icon name={p.icon} className="h-7 w-7" />
                    </span>
                    <span className="font-display text-sm uppercase tracking-[0.3em] text-charcoal-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">
                    {p.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-charcoal-300">{p.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.grades.map((g) => (
                      <span
                        key={g}
                        className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-400"
                      >
                        {g}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-3 border-t border-white/8 pt-6">
                    {p.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-charcoal-200">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/15 text-brand-500">
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="m5 12 5 5L20 7" />
                          </svg>
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Equipment Rental"
            title="Plant & machinery on hire"
            description="Hire batching plants, transit mixers and concrete pumps from our fleet — with operators, calibration and maintenance included."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentRentals.map((e, i) => (
              <Reveal key={e.id} delay={i * 100}>
                <div className="card-hover flex h-full flex-col overflow-hidden rounded-4xl border border-white/8 bg-charcoal-950 hover:-translate-y-1 hover:border-brand-500/40">
                  <Figure scene={e.scene} className="aspect-[16/10] w-full" rounded="rounded-none" />
                  <div className="flex flex-1 flex-col p-6 lg:p-7">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-500/10 text-brand-500">
                        <Icon name={e.icon} className="h-6 w-6" />
                      </span>
                      <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                        {e.name}
                      </h3>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-300">{e.text}</p>
                    <ul className="mt-5 space-y-2.5 border-t border-white/8 pt-5">
                      {e.specs.map((s) => (
                        <li key={s} className="flex items-start gap-2.5 text-sm text-charcoal-200">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
