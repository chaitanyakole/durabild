import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-charcoal-950">
      <div className="mx-auto flex max-w-7xl flex-col items-start px-5 pb-24 pt-40 lg:px-8 lg:pt-48">
        <span className="font-display text-7xl font-bold text-brand-500 sm:text-9xl">404</span>
        <h1 className="mt-6 font-display text-3xl font-semibold uppercase text-white sm:text-4xl">
          This pour doesn&apos;t exist
        </h1>
        <p className="mt-4 max-w-md text-charcoal-300">
          The page you are looking for has moved or never made it to site. Let&apos;s get you back on
          solid ground.
        </p>
        <div className="mt-8">
          <Button to="/">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
