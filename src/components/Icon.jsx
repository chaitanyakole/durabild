export function Icon({ name, className = "h-6 w-6" }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
  }
  switch (name) {
    case "truck":
      return (
        <svg {...common}>
          <path d="M3 7h11v9H3z" />
          <path d="M14 10h4l3 3v3h-7z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      )
    case "stones":
      return (
        <svg {...common}>
          <path d="M4 19h16" />
          <path d="M6 19c0-2.5 1.5-4 3-4s3 1.5 3 4" />
          <path d="M12 19c0-3 2-5 4-5s3 2 2 5" />
          <circle cx="8" cy="10" r="2.5" />
        </svg>
      )
    case "bag":
      return (
        <svg {...common}>
          <path d="M6 8h12v12H6z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
          <path d="M9 13h6" />
        </svg>
      )
    case "brick":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="8" height="5" rx="0.5" />
          <rect x="13" y="6" width="8" height="5" rx="0.5" />
          <rect x="3" y="13" width="8" height="5" rx="0.5" />
          <rect x="13" y="13" width="8" height="5" rx="0.5" />
        </svg>
      )
    case "rebar":
      return (
        <svg {...common}>
          <path d="M5 21 19 3" />
          <path d="M8 18l3 3" />
          <path d="M13 12l3 3" />
          <path d="M7 8l3 3" />
        </svg>
      )
    case "drop":
      return (
        <svg {...common}>
          <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
        </svg>
      )
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case "crane":
      return (
        <svg {...common}>
          <path d="M6 21V4h12" />
          <path d="M6 8h12" />
          <path d="M14 4v5" />
          <path d="M14 9l-2 4" />
          <path d="M9 4v2" />
        </svg>
      )
    case "plant":
      return (
        <svg {...common}>
          <path d="M3 20h18" />
          <path d="M5 20V9l5-3 5 3v11" />
          <path d="M8 20v-4h3v4" />
          <path d="M17 20v-6h4v6" />
        </svg>
      )
    case "pump":
      return (
        <svg {...common}>
          <rect x="3" y="11" width="7" height="6" rx="1" />
          <path d="M10 14h4l5-6" />
          <path d="M16 6h4v4" />
          <circle cx="6.5" cy="20" r="1.5" />
          <circle cx="14" cy="20" r="1.5" />
        </svg>
      )
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      )
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
      )
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="1.5" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      )
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      )
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      )
    default:
      return null
  }
}
