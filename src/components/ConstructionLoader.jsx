import { useEffect } from "react";
import { useLoader } from "../context/useLoader.js";

export default function ConstructionLoader({ variant = "fullscreen", text }) {
  const { isLoading, isExiting, progress, statusText, closeLoader } = useLoader();

  // Allow ESC key to skip
  useEffect(() => {
    if (!isLoading) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeLoader();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLoading, closeLoader]);

  // If used as an inline loader (for forms, cards, etc.)
  if (variant === "inline") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
        <div className="relative">
          {/* Animated mini mixer drum */}
          <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-2.5 text-charcoal-950 shadow-lg shadow-brand-500/25">
            <svg
              viewBox="0 0 24 24"
              className="h-full w-full animate-spin"
              style={{ animationDuration: "3s" }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
          {/* Flashing beacon */}
          <span className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-amber-400" />
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-amber-400" />
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            {text || "Batching Mix & Telemetry..."}
          </p>
          <div className="mx-auto mt-2 h-1.5 w-36 overflow-hidden rounded-full bg-charcoal-800">
            <div className="h-full w-full bg-hazard-stripes" />
          </div>
        </div>
      </div>
    );
  }

  // Fullscreen Site Preloader
  if (!isLoading) return null;

  // Calculate beam elevation and trolley travel based on progress
  const trolleyX = 140 + (progress / 100) * 110; // moves along crane jib
  const cableLength = 48 + Math.sin((progress / 100) * Math.PI) * 16;
  const beamY = 120 + cableLength;
  const buildingHeight = Math.min(100, Math.max(0, (progress - 20) * 1.25));

  return (
    <div
      role="status"
      aria-label="Loading Durabild construction system"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between overflow-hidden bg-charcoal-950 px-4 py-6 transition-all duration-500 ease-out sm:px-8 sm:py-8 ${
        isExiting ? "scale-105 opacity-0 blur-sm pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background blueprint grid & radial glow */}
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[540px] w-[540px] rounded-full bg-brand-500/10 blur-[130px]" />

      {/* Top HUD bar with coordinates & skip button */}
      <div className="relative z-10 flex w-full max-w-5xl items-center justify-between border-b border-white/10 pb-4 text-xs font-mono tracking-wider text-charcoal-400">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
            PLANT 01 // PUNE
          </span>
          <span className="hidden sm:inline text-charcoal-400">
            LAT 18.5204° N · LON 73.8567° E
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-charcoal-400">
            SPEC: IS 456 / IS 10262
          </span>
          <button
            onClick={closeLoader}
            type="button"
            className="group flex items-center gap-2 rounded-full border border-white/15 bg-charcoal-900/80 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-charcoal-200 transition-all hover:border-brand-500 hover:bg-brand-500/10 hover:text-white"
          >
            Skip Intro
            <span className="rounded bg-charcoal-800 px-1.5 py-0.5 text-[10px] text-charcoal-400 group-hover:text-brand-300">
              ESC
            </span>
          </button>
        </div>
      </div>

      {/* Centerpiece: Construction Architectural Rig */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center py-4 w-full max-w-3xl">
        <div className="relative w-full aspect-[16/10] max-h-[380px]">
          <svg
            viewBox="0 0 600 380"
            className="h-full w-full drop-shadow-2xl"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Radial glow for ambient beam */}
              <radialGradient id="crane-glow" cx="50%" cy="30%" r="50%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
              </radialGradient>

              {/* Concrete beam gradient */}
              <linearGradient id="concrete-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38404a" />
                <stop offset="50%" stopColor="#252b33" />
                <stop offset="100%" stopColor="#1a1e24" />
              </linearGradient>

              {/* Steel rebar pattern */}
              <linearGradient id="steel-rebar" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#fdba74" />
              </linearGradient>
            </defs>

            {/* Ambient background glow */}
            <rect width="600" height="380" fill="url(#crane-glow)" />

            {/* Architectural Crosshair markings */}
            <g stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1">
              <line x1="40" y1="20" x2="40" y2="340" />
              <line x1="560" y1="20" x2="560" y2="340" />
              <line x1="20" y1="40" x2="580" y2="40" />
              <line x1="20" y1="320" x2="580" y2="320" />
            </g>

            {/* GROUND LEVEL & FOUNDATION SLAB */}
            <g id="ground">
              {/* Foundation concrete slab */}
              <rect x="30" y="320" width="540" height="40" rx="4" fill="#16181b" stroke="#24272c" strokeWidth="2" />
              {/* Hazard caution bar at base */}
              <rect x="30" y="320" width="540" height="6" fill="#f97316" opacity="0.8" />
              {/* Rebar grid lines */}
              <path
                d="M40 336h520M40 348h520"
                stroke="#f97316"
                strokeWidth="1.5"
                strokeDasharray="4 8"
                opacity="0.4"
              />
            </g>

            {/* RISING BUILDING STRUCTURE ON THE RIGHT (Reacts to progress) */}
            <g id="rising-structure">
              {/* Building Columns */}
              <rect
                x="370"
                y={320 - buildingHeight * 1.2}
                width="20"
                height={buildingHeight * 1.2}
                rx="2"
                fill="#24272c"
                stroke="#383d44"
                strokeWidth="2"
              />
              <rect
                x="440"
                y={320 - buildingHeight * 1.2}
                width="20"
                height={buildingHeight * 1.2}
                rx="2"
                fill="#24272c"
                stroke="#383d44"
                strokeWidth="2"
              />
              <rect
                x="510"
                y={320 - buildingHeight * 1.2}
                width="20"
                height={buildingHeight * 1.2}
                rx="2"
                fill="#24272c"
                stroke="#383d44"
                strokeWidth="2"
              />

              {/* Floor Slabs placed by crane */}
              {progress > 35 && (
                <rect
                  x="360"
                  y="260"
                  width="180"
                  height="12"
                  rx="3"
                  fill="url(#concrete-gradient)"
                  stroke="#f97316"
                  strokeWidth="1"
                />
              )}
              {progress > 70 && (
                <rect
                  x="360"
                  y="200"
                  width="180"
                  height="12"
                  rx="3"
                  fill="url(#concrete-gradient)"
                  stroke="#f97316"
                  strokeWidth="1"
                />
              )}
            </g>

            {/* CEMENT SILO ON THE LEFT */}
            <g id="cement-silo" opacity="0.85">
              <rect x="50" y="160" width="56" height="158" rx="6" fill="#1b1f24" stroke="#2c333d" strokeWidth="2" />
              <path d="M50 160l28-26 28 26z" fill="#242a33" stroke="#2c333d" strokeWidth="2" />
              {/* Silo legs */}
              <line x1="56" y1="318" x2="56" y2="330" stroke="#f97316" strokeWidth="4" />
              <line x1="100" y1="318" x2="100" y2="330" stroke="#f97316" strokeWidth="4" />
              {/* Silo brand stripe */}
              <rect x="50" y="200" width="56" height="14" fill="#f97316" opacity="0.9" />
              <text
                x="78"
                y="210"
                fill="#0b0d0f"
                fontSize="8"
                fontWeight="800"
                fontFamily="sans-serif"
                textAnchor="middle"
                letterSpacing="1"
              >
                DURABILD
              </text>
              <text
                x="78"
                y="250"
                fill="#737c87"
                fontSize="9"
                fontWeight="700"
                fontFamily="sans-serif"
                textAnchor="middle"
              >
                SILO 01
              </text>
            </g>

            {/* TOWER CRANE APPARATUS */}
            <g id="tower-crane">
              {/* Crane Mast (Tower) */}
              <g id="crane-mast">
                <rect x="180" y="70" width="30" height="250" fill="#16181b" stroke="#f97316" strokeWidth="2.5" />
                {/* Lattice truss X-bracing */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const yTop = 70 + i * 31;
                  const yBottom = yTop + 31;
                  return (
                    <g key={i} stroke="#f97316" strokeWidth="1.5" opacity="0.65">
                      <line x1="180" y1={yTop} x2="210" y2={yBottom} />
                      <line x1="210" y1={yTop} x2="180" y2={yBottom} />
                      <line x1="180" y1={yBottom} x2="210" y2={yBottom} />
                    </g>
                  );
                })}
              </g>

              {/* Operator Cabin */}
              <rect x="160" y="52" width="24" height="24" rx="4" fill="#24272c" stroke="#f97316" strokeWidth="2" />
              {/* Cabin window with warm light */}
              <rect x="163" y="55" width="12" height="12" rx="2" fill="#fdba74" opacity="0.85" />

              {/* Crane Peak (Tower Top Apex) */}
              <path d="M180 70l15-38 15 38z" fill="#16181b" stroke="#f97316" strokeWidth="2.5" />
              {/* Flashing aviation beacon at the peak */}
              <circle
                cx="195"
                cy="32"
                r="4.5"
                fill="#ef4444"
                className="animate-[beacon-blink_1s_infinite]"
              />

              {/* Crane Jib (Boom) - extends across */}
              <g id="crane-jib">
                {/* Main forward jib */}
                <line x1="195" y1="50" x2="480" y2="50" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
                <line x1="195" y1="62" x2="480" y2="50" stroke="#f97316" strokeWidth="2" opacity="0.7" />
                {/* Counter jib (rear) */}
                <line x1="195" y1="50" x2="90" y2="50" stroke="#f97316" strokeWidth="4" />
                <line x1="195" y1="62" x2="90" y2="50" stroke="#f97316" strokeWidth="2" opacity="0.7" />
                {/* Counterweights */}
                <rect x="94" y="44" width="28" height="18" rx="2" fill="#383d44" stroke="#f97316" strokeWidth="1.5" />
                <text x="108" y="56" fill="#f97316" fontSize="7" fontWeight="bold" textAnchor="middle">
                  12T
                </text>
                {/* Tie rods from peak to jib */}
                <line x1="195" y1="32" x2="380" y2="50" stroke="#ea580c" strokeWidth="2" />
                <line x1="195" y1="32" x2="110" y2="50" stroke="#ea580c" strokeWidth="2" />
                {/* Warning beacon at jib tip */}
                <circle
                  cx="480"
                  cy="50"
                  r="3.5"
                  fill="#f97316"
                  className="animate-[beacon-blink_1s_infinite]"
                />
              </g>

              {/* Trolley and Suspended Load (moves dynamically) */}
              <g id="trolley-assembly">
                {/* Trolley wheel car on the jib track */}
                <rect
                  x={trolleyX - 12}
                  y="46"
                  width="24"
                  height="10"
                  rx="2"
                  fill="#ffffff"
                  stroke="#0b0d0f"
                  strokeWidth="2"
                />

                {/* Hoist Steel Cables */}
                <line
                  x1={trolleyX - 5}
                  y1="56"
                  x2={trolleyX - 5}
                  y2={beamY}
                  stroke="#fb923c"
                  strokeWidth="1.8"
                  strokeDasharray="3 3"
                />
                <line
                  x1={trolleyX + 5}
                  y1="56"
                  x2={trolleyX + 5}
                  y2={beamY}
                  stroke="#fb923c"
                  strokeWidth="1.8"
                  strokeDasharray="3 3"
                />

                {/* Crane Hook Block */}
                <g transform={`translate(${trolleyX}, ${beamY - 14})`}>
                  <rect x="-8" y="0" width="16" height="12" rx="2" fill="#ea580c" stroke="#16181b" strokeWidth="1.5" />
                  <path
                    d="M0 12v6c0 4 4 4 4 0"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </g>

                {/* Suspended Precast Concrete Girder stamped with Durabild & Grade */}
                <g
                  transform={`translate(${trolleyX}, ${beamY})`}
                  className="animate-[crane-cable_3s_ease-in-out_infinite]"
                  style={{ transformOrigin: `${trolleyX}px 56px` }}
                >
                  {/* Heavy concrete block */}
                  <rect
                    x="-70"
                    y="4"
                    width="140"
                    height="28"
                    rx="4"
                    fill="url(#concrete-gradient)"
                    stroke="#f97316"
                    strokeWidth="2"
                  />

                  {/* Reinforcement steel ends protruding */}
                  <line x1="-76" y1="12" x2="-70" y2="12" stroke="url(#steel-rebar)" strokeWidth="3" />
                  <line x1="-76" y1="24" x2="-70" y2="24" stroke="url(#steel-rebar)" strokeWidth="3" />
                  <line x1="70" y1="12" x2="76" y2="12" stroke="url(#steel-rebar)" strokeWidth="3" />
                  <line x1="70" y1="24" x2="76" y2="24" stroke="url(#steel-rebar)" strokeWidth="3" />

                  {/* Durabild logo icon on block */}
                  <g transform="translate(-56, 10) scale(0.65)" stroke="#f97316" strokeWidth="2.5" fill="none">
                    <path d="M4 19V9l8-4 8 4v10" />
                    <path d="M9 19v-6h6v6" />
                  </g>

                  {/* Stamped text on girder */}
                  <text
                    x="-32"
                    y="22"
                    fill="#ffffff"
                    fontSize="9"
                    fontWeight="800"
                    fontFamily="Oswald, sans-serif"
                    letterSpacing="1"
                  >
                    DURABILD · M40 GRADE
                  </text>
                  <text
                    x="56"
                    y="22"
                    fill="#fb923c"
                    fontSize="8"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    RMC
                  </text>
                </g>
              </g>
            </g>

            {/* LASER SCANNER LINE SWEEP */}
            <line
              x1="30"
              y1={60 + (progress / 100) * 260}
              x2="570"
              y2={60 + (progress / 100) * 260}
              stroke="#f97316"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.75"
            />
          </svg>
        </div>

        {/* Dynamic Construction Progress HUD */}
        <div className="mt-4 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-500 animate-ping" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-400">
                  {progress < 100 ? "System Synchronizing" : "System Calibrated"}
                </span>
              </div>
              <p className="mt-1 font-display text-lg font-bold uppercase tracking-wider text-white sm:text-xl">
                {statusText}
              </p>
            </div>

            {/* Percentage Readout */}
            <div className="flex items-baseline gap-1 self-end font-display">
              <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {progress}
              </span>
              <span className="text-xl font-bold text-brand-500 sm:text-2xl">%</span>
            </div>
          </div>

          {/* HAZARD STRIPED PROGRESS BAR */}
          <div className="relative h-6 w-full overflow-hidden rounded-full border-2 border-charcoal-700 bg-charcoal-900 p-0.5 shadow-2xl shadow-black/80">
            {/* Background subtle hazard pattern */}
            <div className="absolute inset-0 bg-hazard-subtle opacity-40" />

            {/* Filled Animated Hazard Progress */}
            <div
              className="relative h-full rounded-full bg-hazard-stripes shadow-lg shadow-brand-500/40 transition-all duration-150 ease-out"
              style={{ width: `${Math.max(4, progress)}%` }}
            >
              {/* Laser glowing tip on front edge */}
              <span className="absolute right-0 top-0 bottom-0 w-2.5 rounded-full bg-white shadow-[0_0_12px_#ffffff]" />
            </div>
          </div>

          {/* Bottom telemetry indicators */}
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-white/5 bg-charcoal-900/40 p-2.5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-charcoal-400">Mix Grade</p>
              <p className="mt-0.5 font-display text-sm font-semibold uppercase text-brand-400">M10 – M50 RMC</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-charcoal-900/40 p-2.5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-charcoal-400">Slump Test</p>
              <p className="mt-0.5 font-display text-sm font-semibold uppercase text-charcoal-100">120 ± 25 mm</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-charcoal-900/40 p-2.5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-charcoal-400">Transit Fleet</p>
              <p className="mt-0.5 font-display text-sm font-semibold uppercase text-charcoal-100">GPS Tracked</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-charcoal-900/40 p-2.5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-charcoal-400">Lab Compliance</p>
              <p className="mt-0.5 font-display text-sm font-semibold uppercase text-brand-400">IS 456 Certified</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer tagline */}
      <div className="relative z-10 text-center font-display text-xs font-semibold uppercase tracking-[0.3em] text-charcoal-400">
        Durabild Corporation · Strength you can build on
      </div>
    </div>
  );
}
