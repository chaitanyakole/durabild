import { company, capabilities, leadership, locations, stats, values } from "../data/site.js";
import { Icon } from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import CtaSection from "../components/CtaSection.jsx";
import Figure from "../components/Figure.jsx";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Concrete roots, engineered to scale"
        description={`${company.name} is a Pune-based manufacturer of ready-mixed concrete and integrated supplier of construction materials, serving builders, contractors and infrastructure projects since ${company.established}.`}
      />

      <section className="bg-charcoal-950 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Our story"
              title="Built on reliable concrete"
              description="Durabild began with a simple conviction: a project should never wait on its concrete."
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-charcoal-300">
              <p>
                From our base in Shewalewadi on the Pune–Solapur Road, we manufacture
                ready-mixed concrete to design mixes, supply aggregates, cement, blocks, steel and
                admixtures, and hire out the batching plants, transit mixers and pumps that place it.
              </p>
              <p>
                That integration is deliberate. When one team controls the mix, the material and the
                machinery, quality stays consistent and schedules hold — whether it is a villa
                footing in Baner or a continuous raft pour in Hadapsar.
              </p>
              <p>
                Today we operate across Hadapsar, Katraj, Baner and Shewalewadi, backed by an
                in-house laboratory and a team of site engineers who work as an extension of your
                project.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-3xl border border-white/8 bg-charcoal-900/60 p-5"
                >
                  <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-charcoal-400">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <Figure scene="plant" className="aspect-[4/3] w-full shadow-2xl shadow-black/40" />
            </Reveal>
            <div className="mt-6 grid gap-6">
              <div className="rounded-4xl border border-white/8 bg-charcoal-900/60 p-7">
                <p className="font-display text-xs uppercase tracking-[0.3em] text-charcoal-500">
                  Leadership
                </p>
                {leadership.map((person) => (
                  <div key={person.name} className="mt-5">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 font-display text-xl font-bold text-charcoal-950">
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold uppercase text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-wider text-brand-500">
                      {person.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-300">{person.bio}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-4xl border border-white/8 bg-charcoal-900/60 p-7">
                <p className="font-display text-xs uppercase tracking-[0.3em] text-charcoal-500">
                  Operating locations
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-3">
                  {locations.map((l) => (
                    <li key={l} className="flex items-center gap-2 text-sm text-charcoal-200">
                      <Icon name="pin" className="h-4 w-4 text-brand-500" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What drives us"
            title="Values poured into every batch"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card-hover h-full rounded-4xl border border-white/8 bg-charcoal-950 p-7 hover:-translate-y-1 hover:border-brand-500/40">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/10 text-brand-500">
                    <Icon name="shield" className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-white">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-300">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="The infrastructure behind the mix"
            description="Capacity, fleet, testing and experience that keep projects moving."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="flex gap-5 rounded-4xl border border-white/8 bg-charcoal-900/60 p-7">
                  <span className="font-display text-3xl font-bold text-gradient">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-300">{c.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-charcoal-950 pt-4">
        <CtaSection />
      </div>
    </>
  );
}
