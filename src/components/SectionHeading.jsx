export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && (
        <div className={`flex ${centered ? "justify-center" : ""}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-charcoal-300 sm:text-lg">{description}</p>
      )}
    </div>
  );
}
