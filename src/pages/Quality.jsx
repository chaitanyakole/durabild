import { qualitySteps } from "../data/site.js";
import { Icon } from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import CtaSection from "../components/CtaSection.jsx";
import Figure from "../components/Figure.jsx";

const tests = [
  { name: "Slump & Workability", detail: "Measured before every dispatch to match placement method." },
  { name: "Cube Compressive Strength", detail: "7-day and 28-day testing with reports shared to site." },
  { name: "Aggregate Gradation", detail: "Sieve analysis and silt checks on all incoming material." },
  { name: "Mix Design Verification", detail: "Trial mixes validated against IS code requirements." },
  { name: "Fresh Concrete Temperature", detail: "Controlled for hot-weather and mass concrete pours." },
  { name: "Batch Weighing Accuracy", detail: "Calibrated plants with automatic moisture correction." },
];

const standards = ["IS 456", "IS 10262", "IS 4926", "IS 383", "IS 9103"];

export default function Quality() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Every batch, checked and recorded"
        description="Quality at Durabild is a process, not a promise. From approved raw materials to 28-day strength reports, we test, document and stand behind our concrete."
      />

      <section className="bg-charcoal-950 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Our process"
                title="From batching plant to pour point"
                description="A four-stage quality loop applied to every cubic metre we dispatch."
              />
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <Figure scene="lab" eager className="aspect-[16/10] w-full shadow-2xl shadow-black/40" />
              </Reveal>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualitySteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 90}>
                <div className="card-hover h-full rounded-4xl border border-white/8 bg-charcoal-900/60 p-7 hover:-translate-y-1 hover:border-brand-500/40">
                  <span className="font-display text-4xl font-bold text-gradient">{s.step}</span>
                  <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-300">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-900 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Laboratory"
              title="In-house testing"
              description="Our laboratory runs the checks that matter for structural safety, workability and durability."
            />
            <div className="mt-8 rounded-4xl border border-white/8 bg-charcoal-950 p-6">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-charcoal-500">
                Standards followed
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {standards.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {tests.map((t, i) => (
                <Reveal key={t.name} delay={(i % 2) * 80}>
                  <div className="flex h-full items-start gap-4 rounded-4xl border border-white/8 bg-charcoal-950 p-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-500/10 text-brand-500">
                      <Icon name="shield" className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
                        {t.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal-300">{t.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-charcoal-950 pt-20 lg:pt-28">
        <CtaSection />
      </div>
    </>
  );
}
