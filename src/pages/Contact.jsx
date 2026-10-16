import { useState } from "react";
import { company, locations, products } from "../data/site.js";
import { Icon } from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  company: "",
  location: "",
  product: "",
  grade: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mapQuery = encodeURIComponent(
    "Durabild Corporation, Shewalewadi, Fursungi, Pune, Maharashtra 412308"
  );

  const details = [
    {
      icon: "pin",
      label: "Registered office",
      value: company.address,
      note: company.addressNote,
    },
    { icon: "phone", label: "Call us", value: company.phone, value2: company.phone2, href: company.phoneHref },
    { icon: "mail", label: "Email", value: company.email, href: company.emailHref },
    { icon: "clock", label: "Working hours", value: company.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's get your pour planned"
        description="Send us your requirement and our team will get back with mix recommendations, pricing and delivery slots."
      />

      <section className="bg-charcoal-950 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex gap-4 rounded-4xl border border-white/8 bg-charcoal-900/60 p-6"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-500/10 text-brand-500">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-xs uppercase tracking-[0.25em] text-charcoal-500">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-1 block text-charcoal-100 transition-colors hover:text-brand-400"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-charcoal-100">{d.value}</p>
                    )}
                    {d.value2 && (
                      <a
                        href={company.phone2Href}
                        className="mt-0.5 block text-charcoal-100 transition-colors hover:text-brand-400"
                      >
                        {d.value2}
                      </a>
                    )}
                    {d.note && <p className="mt-1 text-sm text-charcoal-400">{d.note}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-charcoal-500">
                Operating locations
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {locations.map((l) => (
                  <span
                    key={l}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-charcoal-200"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-4xl border border-white/8">
              <iframe
                title="Durabild Corporation location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-64 w-full grayscale-[0.3]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-4xl border border-white/8 bg-charcoal-900/60 p-6 sm:p-10">
              {submitted ? (
                <Reveal>
                  <div className="flex flex-col items-start py-10">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-charcoal-950">
                      <Icon name="shield" className="h-7 w-7" />
                    </span>
                    <h2 className="mt-6 font-display text-2xl font-bold uppercase text-white">
                      Thank you, {form.name || "there"}!
                    </h2>
                    <p className="mt-3 max-w-md text-charcoal-300">
                      Your enquiry has reached us. A Durabild engineer will contact you shortly on{" "}
                      {form.phone || "your number"} to discuss mix design, quantity and delivery.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setForm(initialForm);
                        setSubmitted(false);
                      }}
                      className="mt-8 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-brand-500 hover:text-brand-400"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </Reveal>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" required>
                      <input
                        required
                        value={form.name}
                        onChange={update("name")}
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Phone" required>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        className={inputClass}
                        placeholder="+91 ..."
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                    </Field>
                    <Field label="Company / Firm">
                      <input
                        value={form.company}
                        onChange={update("company")}
                        className={inputClass}
                        placeholder="Builder / contractor"
                      />
                    </Field>
                    <Field label="Project location">
                      <input
                        value={form.location}
                        onChange={update("location")}
                        className={inputClass}
                        placeholder="e.g. Baner, Pune"
                      />
                    </Field>
                    <Field label="Material required">
                      <select value={form.product} onChange={update("product")} className={inputClass}>
                        <option value="">Select a product</option>
                        {products.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                        <option value="Equipment Rental">Equipment Rental</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Grade / quantity">
                    <input
                      value={form.grade}
                      onChange={update("grade")}
                      className={inputClass}
                      placeholder="e.g. M30, 500 m³"
                    />
                  </Field>

                  <Field label="Message">
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={update("message")}
                      className={inputClass}
                      placeholder="Tell us about your pour schedule, site access and any special requirements."
                    />
                  </Field>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-charcoal-950 shadow-lg shadow-brand-500/20 transition-all hover:scale-[1.01] hover:bg-brand-400 sm:w-auto"
                  >
                    Send enquiry
                    <Icon name="arrow" className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-charcoal-950 px-4 py-3 text-base text-white placeholder-charcoal-500 outline-none transition-colors focus:border-brand-500";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-2 block font-display text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-400">
        {label}
        {required && <span className="text-brand-500"> *</span>}
      </span>
      {children}
    </label>
  );
}
