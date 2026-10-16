import { useId } from "react";

const W = 400;
const H = 300;

function Scene({ id, children, sky = ["#13212b", "#0b0d0f"], glow = "#f97316" }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={sky[0]} />
          <stop offset="100%" stopColor={sky[1]} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.72" cy="0.28" r="0.7">
          <stop offset="0%" stopColor={glow} stopOpacity="0.55" />
          <stop offset="60%" stopColor={glow} stopOpacity="0.08" />
          <stop offset="100%" stopColor={glow} stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-grain`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
      <rect width={W} height={H} fill={`url(#${id}-sky)`} />
      <rect width={W} height={H} fill={`url(#${id}-glow)`} />
      {children}
      <rect width={W} height={H} filter={`url(#${id}-grain)`} opacity="0.05" />
    </svg>
  );
}

function Bars({ x, y, w, h, n, gap, fill }) {
  return (
    <g>
      {Array.from({ length: n }).map((_, i) => (
        <rect key={i} x={x + i * gap} y={y} width={w} height={h} fill={fill} />
      ))}
    </g>
  );
}

export default function Illustration({ scene = "skyline" }) {
  const uid = useId().replace(/:/g, "");
  switch (scene) {
    case "skyline":
      return (
        <Scene id={uid}>
          <circle cx="300" cy="80" r="26" fill="#fb923c" opacity="0.9" />
          {/* distant skyline */}
          <g fill="#1b2a35">
            <rect x="20" y="150" width="42" height="120" />
            <rect x="66" y="120" width="30" height="150" />
            <rect x="100" y="170" width="52" height="100" />
            <rect x="200" y="140" width="38" height="130" />
            <rect x="244" y="110" width="34" height="160" />
            <rect x="300" y="165" width="46" height="105" />
            <rect x="350" y="135" width="34" height="135" />
          </g>
          {/* lit windows */}
          <g fill="#fb923c" opacity="0.55">
            <Bars x={26} y={166} w={6} h={8} n={5} gap={10} />
            <Bars x={72} y={136} w={6} h={8} n={3} gap={9} />
            <Bars x={250} y={126} w={5} h={7} n={3} gap={9} />
          </g>
          {/* cranes */}
          <g stroke="#3a4a56" strokeWidth="3" fill="none">
            <path d="M150 210V70M150 70h70M150 70l-30 24" />
            <path d="M220 70v22" />
            <path d="M330 210v-60M330 150h50M330 150l20 16" />
          </g>
          <rect x="216" y="92" width="10" height="14" fill="#fb923c" />
          <rect x="346" y="166" width="9" height="12" fill="#f97316" />
          {/* ground */}
          <rect x="0" y="252" width={W} height="48" fill="#0e1114" />
          <rect x="0" y="252" width={W} height="3" fill="#f97316" opacity="0.5" />
        </Scene>
      );
    case "plant":
      return (
        <Scene id={uid}>
          {/* batching plant */}
          <g fill="#22313c">
            <rect x="60" y="120" width="70" height="120" rx="4" />
            <rect x="70" y="80" width="50" height="44" rx="4" />
            <rect x="150" y="60" width="34" height="180" rx="4" />
            <rect x="196" y="60" width="34" height="180" rx="4" />
          </g>
          <path d="M60 150l90 -30" stroke="#3a4a56" strokeWidth="6" />
          <path d="M150 150l-70 20" stroke="#3a4a56" strokeWidth="5" />
          <g fill="#fb923c" opacity="0.85">
            <rect x="72" y="86" width="46" height="6" rx="3" />
            <rect x="152" y="72" width="30" height="8" rx="4" />
            <rect x="198" y="72" width="30" height="8" rx="4" />
          </g>
          <rect x="66" y="180" width="58" height="10" fill="#0e1114" />
          {/* mixer truck */}
          <g>
            <rect x="250" y="170" width="90" height="46" rx="8" fill="#2b3a45" />
            <circle cx="276" cy="220" r="13" fill="#0e1114" stroke="#3a4a56" strokeWidth="4" />
            <circle cx="322" cy="220" r="13" fill="#0e1114" stroke="#3a4a56" strokeWidth="4" />
            <path d="M250 176l90 0" stroke="#fb923c" strokeWidth="4" />
            <rect x="342" y="182" width="40" height="34" rx="6" fill="#22313c" />
            <circle cx="366" cy="220" r="11" fill="#0e1114" stroke="#3a4a56" strokeWidth="4" />
            <rect x="372" y="188" width="10" height="10" rx="2" fill="#fb923c" />
          </g>
          <rect x="0" y="252" width={W} height="48" fill="#0e1114" />
        </Scene>
      );
    case "mixer":
      return (
        <Scene id={uid}>
          <circle cx="320" cy="70" r="30" fill="#fb923c" opacity="0.35" />
          {/* drum body */}
          <g>
            <path d="M70 110c0-16 30-26 70-26s70 10 70 26-30 26-70 26-70-10-70-26z" fill="#2b3a45" />
            <path d="M70 110v50c0 16 30 26 70 26s70-10 70-26v-50" fill="#22313c" />
            <path d="M92 112l96 0" stroke="#fb923c" strokeWidth="5" opacity="0.9" />
            <path d="M92 138l96 0" stroke="#fb923c" strokeWidth="5" opacity="0.6" />
          </g>
          {/* cab */}
          <g>
            <rect x="210" y="120" width="70" height="72" rx="10" fill="#2b3a45" />
            <rect x="230" y="132" width="38" height="26" rx="4" fill="#8fbfd6" opacity="0.6" />
            <rect x="280" y="140" width="20" height="52" rx="4" fill="#22313c" />
          </g>
          <circle cx="108" cy="206" r="20" fill="#0e1114" stroke="#3a4a56" strokeWidth="6" />
          <circle cx="108" cy="206" r="6" fill="#f97316" />
          <circle cx="252" cy="206" r="20" fill="#0e1114" stroke="#3a4a56" strokeWidth="6" />
          <circle cx="252" cy="206" r="6" fill="#f97316" />
          <rect x="0" y="226" width={W} height="74" fill="#0e1114" />
        </Scene>
      );
    case "aggregates":
      return (
        <Scene id={uid}>
          <circle cx="90" cy="80" r="26" fill="#fb923c" opacity="0.4" />
          <g fill="#2b3a45">
            <path d="M0 230l70-90 70 90z" />
            <path d="M90 230l60-70 60 70z" fill="#22313c" />
            <path d="M210 230l80-110 80 110z" fill="#31424d" />
          </g>
          <g fill="#fb923c" opacity="0.5">
            <circle cx="70" cy="180" r="4" />
            <circle cx="120" cy="200" r="5" />
            <circle cx="260" cy="180" r="4" />
            <circle cx="310" cy="205" r="5" />
          </g>
          <rect x="0" y="230" width={W} height="70" fill="#0e1114" />
          <rect x="0" y="230" width={W} height="3" fill="#f97316" opacity="0.5" />
        </Scene>
      );
    case "cement":
      return (
        <Scene id={uid}>
          <circle cx="310" cy="74" r="30" fill="#fb923c" opacity="0.35" />
          {/* silo */}
          <rect x="140" y="70" width="90" height="150" rx="6" fill="#2b3a45" />
          <path d="M140 70l45-30 45 30z" fill="#22313c" />
          <rect x="150" y="70" width="70" height="8" fill="#fb923c" opacity="0.8" />
          <path d="M185 220v30" stroke="#3a4a56" strokeWidth="6" />
          {/* bags stack */}
          <g>
            <rect x="40" y="180" width="70" height="22" rx="4" fill="#31424d" />
            <rect x="46" y="156" width="70" height="22" rx="4" fill="#2b3a45" />
            <rect x="40" y="132" width="70" height="22" rx="4" fill="#31424d" />
            <rect x="48" y="184" width="54" height="4" fill="#fb923c" opacity="0.7" />
            <rect x="54" y="160" width="54" height="4" fill="#fb923c" opacity="0.7" />
            <rect x="48" y="136" width="54" height="4" fill="#fb923c" opacity="0.7" />
          </g>
          <rect x="0" y="240" width={W} height="60" fill="#0e1114" />
        </Scene>
      );
    case "blocks":
      return (
        <Scene id={uid}>
          <circle cx="80" cy="74" r="26" fill="#fb923c" opacity="0.35" />
          <g>
            {[0, 1, 2, 3].map((row) =>
              [0, 1, 2].map((col) => (
                <rect
                  key={`${row}-${col}`}
                  x={60 + col * 92 + (row % 2 ? 46 : 0)}
                  y={180 - row * 46}
                  width="84"
                  height="42"
                  rx="4"
                  fill={row % 2 ? "#22313c" : "#2b3a45"}
                  stroke="#0e1114"
                  strokeWidth="3"
                />
              ))
            )}
          </g>
          <rect x="0" y="226" width={W} height="74" fill="#0e1114" />
          <rect x="0" y="226" width={W} height="3" fill="#f97316" opacity="0.5" />
        </Scene>
      );
    case "steel":
      return (
        <Scene id={uid}>
          <circle cx="320" cy="72" r="28" fill="#fb923c" opacity="0.35" />
          <g stroke="#31424d" strokeWidth="12" strokeLinecap="round">
            <path d="M40 200h320" />
            <path d="M40 224h320" />
          </g>
          <g stroke="#fb923c" strokeWidth="12" strokeLinecap="round" opacity="0.85">
            <path d="M40 176h320" />
          </g>
          {/* cut ends */}
          <g fill="#22313c">
            <circle cx="44" cy="176" r="7" />
            <circle cx="44" cy="200" r="7" />
            <circle cx="44" cy="224" r="7" />
          </g>
          {/* ribbing */}
          <g stroke="#0e1114" strokeWidth="2" opacity="0.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <path key={i} d={`M${70 + i * 24} 168l0 64`} />
            ))}
          </g>
          <rect x="0" y="248" width={W} height="52" fill="#0e1114" />
        </Scene>
      );
    case "admixtures":
      return (
        <Scene id={uid}>
          <circle cx="90" cy="76" r="26" fill="#fb923c" opacity="0.4" />
          <g fill="#f97316">
            <path d="M180 60v14l10 14v96a10 10 0 0 1-10 10h-8a10 10 0 0 1-10-10V88l10-14V60z" opacity="0.9" />
            <path d="M240 70v12l9 12v84a10 10 0 0 1-10 10h-8a10 10 0 0 1-10-10V94l9-12V70z" opacity="0.7" />
          </g>
          <g fill="#fdba74">
            <circle cx="172" cy="150" r="3" />
            <circle cx="236" cy="158" r="3" />
          </g>
          {/* drops */}
          <g fill="#fb923c" opacity="0.75">
            <path d="M310 120c0 0 12 14 12 24a12 12 0 0 1-24 0c0-10 12-24 12-24z" />
            <path d="M340 150c0 0 8 10 8 16a8 8 0 0 1-16 0c0-6 8-16 8-16z" opacity="0.6" />
          </g>
          <rect x="0" y="240" width={W} height="60" fill="#0e1114" />
        </Scene>
      );
    case "pump":
      return (
        <Scene id={uid}>
          <circle cx="310" cy="70" r="28" fill="#fb923c" opacity="0.35" />
          {/* boom */}
          <path d="M120 190l90-90 70 30" stroke="#3a4a56" strokeWidth="8" fill="none" strokeLinejoin="round" />
          <path d="M280 130l50 20" stroke="#fb923c" strokeWidth="8" strokeLinecap="round" />
          <path d="M120 190l-20 20" stroke="#3a4a56" strokeWidth="8" />
          {/* truck */}
          <g>
            <rect x="60" y="188" width="140" height="46" rx="8" fill="#2b3a45" />
            <rect x="200" y="196" width="44" height="38" rx="6" fill="#22313c" />
            <rect x="212" y="202" width="22" height="16" rx="3" fill="#8fbfd6" opacity="0.55" />
            <circle cx="92" cy="238" r="14" fill="#0e1114" stroke="#3a4a56" strokeWidth="5" />
            <circle cx="150" cy="238" r="14" fill="#0e1114" stroke="#3a4a56" strokeWidth="5" />
            <circle cx="222" cy="238" r="14" fill="#0e1114" stroke="#3a4a56" strokeWidth="5" />
            <rect x="60" y="200" width="140" height="5" fill="#fb923c" />
          </g>
          <rect x="0" y="252" width={W} height="48" fill="#0e1114" />
        </Scene>
      );
    case "lab":
      return (
        <Scene id={uid}>
          <circle cx="90" cy="74" r="26" fill="#fb923c" opacity="0.35" />
          {/* cubes */}
          <g>
            <rect x="70" y="180" width="60" height="60" rx="6" fill="#2b3a45" stroke="#0e1114" strokeWidth="3" />
            <rect x="150" y="150" width="60" height="60" rx="6" fill="#31424d" stroke="#0e1114" strokeWidth="3" />
            <rect x="230" y="170" width="60" height="60" rx="6" fill="#2b3a45" stroke="#0e1114" strokeWidth="3" />
            <rect x="76" y="186" width="48" height="6" fill="#fb923c" opacity="0.7" />
            <rect x="156" y="156" width="48" height="6" fill="#fb923c" opacity="0.7" />
            <rect x="236" y="176" width="48" height="6" fill="#fb923c" opacity="0.7" />
          </g>
          {/* gauge */}
          <g transform="translate(300 70)">
            <path d="M0 40a40 40 0 0 1 80 0" fill="none" stroke="#3a4a56" strokeWidth="8" strokeLinecap="round" />
            <path d="M40 40L64 14" stroke="#fb923c" strokeWidth="6" strokeLinecap="round" />
            <circle cx="40" cy="40" r="6" fill="#fb923c" />
          </g>
          <rect x="0" y="240" width={W} height="60" fill="#0e1114" />
        </Scene>
      );
    default:
      return (
        <Scene id={uid}>
          <rect x="0" y="230" width={W} height="70" fill="#0e1114" />
        </Scene>
      );
  }
}
