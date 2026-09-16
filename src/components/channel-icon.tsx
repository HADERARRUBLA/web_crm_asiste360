export type IconName =
  | "whatsapp"
  | "instagram"
  | "messenger"
  | "tiktok"
  | "telegram"
  | "email"
  | "webchat"
  | "voz"
  | "sms";

/**
 * Set de iconos de canal en trazo blanco (pensados para ir sobre un fondo de
 * color, como en el hub del hero, los tiles de "Elige tus canales" y la
 * grilla de canales de los perfiles de "Tu equipo de IA"). Un solo lugar —
 * se reutiliza en cualquier página que necesite mostrar canales.
 */
export function ChannelIcon({ name, size = 24 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none" as const };
  switch (name) {
    case "whatsapp":
      return (
        <svg {...common}>
          <path
            d="M12 3C7.03 3 3 7.03 3 12c0 1.77.52 3.42 1.4 4.8L3 21l4.34-1.36A8.93 8.93 0 0 0 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9Z"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="5" stroke="#fff" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="3.4" stroke="#fff" strokeWidth="1.6" />
        </svg>
      );
    case "messenger":
      return (
        <svg {...common}>
          <path
            d="M14 8.5h2V5h-2c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v6h3v-6H16l.5-3h-3V8.9c0-.3.2-.4.5-.4Z"
            stroke="#fff"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path
            d="M9 8l6-4v3.2c3.3.6 6 2.6 6 6.3 0 1-.2 1.9-.5 2.6-.6-1.7-2.4-3-5.5-3v3.4L9 12l6-4Z"
            stroke="#fff"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "telegram":
      return (
        <svg {...common}>
          <path
            d="M21 4 3 11l6 2.5M21 4l-3.5 16-8-5.5M21 4 9.5 13.5v5"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );
    case "email":
      return (
        <svg {...common}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="#fff" strokeWidth="1.5" />
          <path d="M4.5 6.5 12 12l7.5-5.5" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "webchat":
      return (
        <svg {...common}>
          <path d="M5 5h14v10H9l-4 4V5Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "voz":
      return (
        <svg {...common}>
          <path d="M15 4a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 11v1a7 7 0 0 0 7 7v0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "sms":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="2.5" stroke="#fff" strokeWidth="1.5" />
          <path d="M10 17h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}
