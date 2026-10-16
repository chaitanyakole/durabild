import { Link } from "react-router-dom";
import { Icon } from "./Icon.jsx";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-200";

const variants = {
  primary:
    "bg-brand-500 text-charcoal-950 shadow-lg shadow-brand-500/20 hover:scale-[1.02] hover:bg-brand-400",
  outline: "border border-white/15 text-white hover:border-brand-500 hover:text-brand-400",
  glass: "glass border border-white/10 text-white hover:border-brand-500 hover:text-brand-400",
  dark: "bg-charcoal-900 text-white hover:bg-charcoal-800",
};

export default function Button({ to, href, children, variant = "primary", icon = true, className = "" }) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {icon && <Icon name="arrow" className="h-4 w-4" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes}>
      {content}
    </button>
  );
}
