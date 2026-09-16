import type { IconName } from "@/components/channel-icon";

/**
 * Los 10 canales que ofrece Asiste360 — una sola fuente de verdad para la
 * sección "Elige tus canales" del Home y la grilla de canales de cada
 * perfil en "Tu equipo de IA".
 */
export const CHANNEL_TILES: { name: string; icon: IconName; color: string; shadow: string }[] = [
  { name: "WhatsApp API", icon: "whatsapp", color: "#25D366", shadow: "rgba(37,211,102,0.55)" },
  { name: "WhatsApp QR", icon: "whatsapp", color: "#1BAA57", shadow: "rgba(27,170,87,0.55)" },
  { name: "Instagram", icon: "instagram", color: "#C13584", shadow: "rgba(193,53,132,0.55)" },
  { name: "Facebook Messenger", icon: "messenger", color: "#0866FF", shadow: "rgba(8,102,255,0.55)" },
  { name: "TikTok", icon: "tiktok", color: "#101010", shadow: "rgba(0,0,0,0.6)" },
  { name: "Telegram", icon: "telegram", color: "#29A9EA", shadow: "rgba(41,169,234,0.55)" },
  { name: "Email", icon: "email", color: "#64748B", shadow: "rgba(100,116,139,0.5)" },
  { name: "WebChat", icon: "webchat", color: "#6C4CF1", shadow: "rgba(108,76,241,0.55)" },
  { name: "Llamadas IA", icon: "voz", color: "#14B8A6", shadow: "rgba(20,184,166,0.55)" },
  { name: "SMS", icon: "sms", color: "#F59E0B", shadow: "rgba(245,158,11,0.55)" },
];
