import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransitionLoader() {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Avoid triggering on initial mount since ConstructionLoader handles initial visit
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setActive(true);
    setProgress(20);

    const step1 = setTimeout(() => setProgress(65), 80);
    const step2 = setTimeout(() => setProgress(90), 180);
    const step3 = setTimeout(() => setProgress(100), 280);
    const step4 = setTimeout(() => {
      setActive(false);
      setProgress(0);
    }, 450);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
      clearTimeout(step4);
    };
  }, [location.pathname, location.search]);

  if (!active && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-1.5 overflow-hidden bg-charcoal-900/60"
    >
      <div
        className="h-full bg-hazard-stripes shadow-[0_0_12px_#f97316] transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
          transition: "width 150ms ease-out, opacity 200ms ease-out 150ms",
        }}
      >
        <span className="absolute right-0 top-0 bottom-0 w-3 bg-white shadow-[0_0_8px_#ffffff]" />
      </div>
    </div>
  );
}
