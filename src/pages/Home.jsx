import { Link } from "react-router-dom";
import {
  company,
  capabilities,
  equipmentRentals,
  locations,
  products,
  projects,
  services,
  stats,
} from "../data/site.js";
import { Icon } from "../components/Icon.jsx";
import Button from "../components/Button.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import CtaSection from "../components/CtaSection.jsx";
import Figure from "../components/Figure.jsx";

function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-500/15 blur-[100px] animate-blob" />
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-sky-500/10 blur-[110px] animate-blob" style={{ animationDelay: "4s" }} />
    </div>
  );
}

function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-charcoal-950">
      <Backdrop />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:pt-32 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="lg:col-span-6 lg:pt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
            RMC · Materials · Equipment · Pune
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Concrete that
            <br />
            <span className="text-gradient">holds the line.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-300 sm:text-lg">
            {company.name} manufactures ready-mixed concrete and supplies integrated construction
            materials across Pune — backed by plant-controlled quality, our own fleet and
            engineer-led delivery from footing to finish.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">Request a Quote</Button>
            <Button to="/products" variant="glass">
              Explore Products
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-charcoal-400">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Grades M10 – M50
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {locations.join(" · ")}
            </span>
          </div>
        </div>

        <div className="relative mt-12 lg:col-span-6 lg:mt-0">
          <Reveal>
            <Figure
              scene="hero"
              eager
              className="aspect-[4/3] w-full shadow-2xl shadow-black/50 lg:aspect-[5/4]"
            />
          </Reveal>

          <div
            className={`relative left-4 right-4 mt-6 rounded-3xl border border-white/10 bg-charcoal-900/80 p-5 backdrop-blur-xl lg:absolute lg:-bottom-6 lg:left-4 lg:right-4 lg:animate-float`}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 4).map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-brand-500 sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="text-xs text-charcoal-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

function Marquee() {
  const items = [
    "M10 – M50 Grades",
    "Own Batching Plants",
    "Transit Mixers 6–12 m³",
    "Boom & Line Pumps",
    "AAC Blocks",
    "TMT Fe500D",
    "M-Sand & Aggregates",
    "In-House Lab Testing",
  ];
  return (
    <div className="border-y border-white/5 bg-charcoal-900/50 py-4 overflow-x-hidden">
      <div className="flex w-max animate-marquee gap-10 pr-10">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap text-sm font-medium uppercase tracking-wider text-charcoal-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="bg-charcoal-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="One partner across the pour"
          description="Manufacturing, supply and equipment under a single accountable team."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 100}>
              <div className="group card-hover h-full overflow-hidden rounded-4xl border border-white/8 bg-charcoal-900/60 hover:-translate-y-1 hover:border-brand-500/40">
                <Figure scene={s.scene} className="aspect-[16/10] w-full" rounded="rounded-none" />
                <div className="p-6 lg:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-500/10 text-brand-500">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal-300">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  return (
    <section className="bg-charcoal-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Products"
            title="Materials built for the job"
            description="A complete basket of RMC and construction materials, graded and tested to Indian Standards."
          />
          <Button to="/products" variant="outline" className="shrink-0">
            View all products
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80}>
              <Link
                to="/products"
                className="group card-hover flex h-full flex-col overflow-hidden rounded-4xl border border-white/8 bg-charcoal-900/60 hover:-translate-y-1 hover:border-brand-500/40"
              >
                <div className="relative">
                  <Figure scene={p.scene} className="aspect-[16/10] w-full" rounded="rounded-none" />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl glass border border-white/10 text-brand-400">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                    {p.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-400">{p.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.grades.slice(0, 4).map((g) => (
                      <span
                        key={g}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-charcoal-300"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Equipment() {
  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Equipment Rental"
              title="Plant & machinery on hire"
              description="Scale up without capital spend. Hire batching plants, transit mixers and concrete pumps — operators and maintenance included."
            />
            <div className="mt-8">
              <Button to="/contact" variant="outline">
                Enquire about rental
              </Button>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {equipmentRentals.map((e, i) => (
                <Reveal key={e.id} delay={i * 100}>
                  <div className="card-hover h-full overflow-hidden rounded-4xl border border-white/8 bg-charcoal-950 hover:-translate-y-1 hover:border-brand-500/40">
                    <Figure scene={e.scene} className="aspect-[4/3] w-full" rounded="rounded-none" />
                    <div className="p-6">
                      <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
                        {e.name}
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {e.specs.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-charcoal-300">
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
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="bg-charcoal-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Durabild"
          title="Built to deliver, not just supply"
          description="The infrastructure behind your concrete — capacity, fleet, testing and people."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="card-hover flex h-full gap-5 rounded-4xl border border-white/8 bg-charcoal-900/60 p-7 hover:-translate-y-1 hover:border-brand-500/40">
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
  );
}

function ProjectsPreview() {
  return (
    <section className="bg-charcoal-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Concrete on the skyline"
            description="Residential, commercial and infrastructure work supplied across Pune."
          />
          <Button to="/projects" variant="outline" className="shrink-0">
            See all projects
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="card-hover group h-full overflow-hidden rounded-4xl border border-white/8 bg-charcoal-900/60 hover:-translate-y-1 hover:border-brand-500/40">
                <Figure scene={p.scene} className="aspect-[16/10] w-full" rounded="rounded-none" />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand-500/10 px-3 py-1 font-display text-xs uppercase tracking-[0.2em] text-brand-400">
                      {p.type}
                    </span>
                    <span className="text-xs text-charcoal-500">{p.year}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold uppercase text-white">
                    {p.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-charcoal-400">
                    <Icon name="pin" className="h-4 w-4 text-brand-500" />
                    {p.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-300">{p.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <ProductsPreview />
      <Equipment />
      <Capabilities />
      <ProjectsPreview />
      <CtaSection />
    </>
  );
}
