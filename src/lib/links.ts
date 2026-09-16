// Datos de contacto y utilidades de tracking centralizadas (Fase 7 — tracking-integracion-asiste360.md)
// Un solo lugar para el número de WhatsApp y el calendario de demos, así como
// para armar los enlaces con mensaje prellenado / UTM.

export const WHATSAPP_NUMBER = "573161350500"; // +57 316 1350500, sin signos
export const GHL_BOOKING_URL =
  "https://ghl.asiste360.com/widget/booking/OjusUpgUrhbe0SPnDEkp";

/**
 * Arma un enlace de WhatsApp con mensaje prellenado, para que el agente
 * reciba contexto desde el primer mensaje (página de origen / plan de interés).
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  general: "Hola, quiero conocer más sobre Asiste360",
  starterTrial: "Quiero probar Starter gratis por 30 días",
  planPro: "Vi el plan Pro en asiste360.com y quiero hablar con ventas",
  planAvanzado: "Vi el plan Avanzado en asiste360.com y quiero hablar con ventas",
  planEnterprise: "Quiero hablar sobre un plan Enterprise para mi negocio",
  partners: "Quiero aplicar como Partner de Asiste360",
  equipoSofi: "Hola Sofi, vengo de asiste360.com y quiero ver cómo trabajas en vivo",
  equipoLeo: "Vi a Leo (Leads y reactivación) en asiste360.com y quiero saber más",
  equipoClara: "Vi a Clara (PQR y satisfacción) en asiste360.com y quiero saber más",
  equipoMarco: "Vi a Marco (Cobranza y acuerdos) en asiste360.com y quiero saber más",
} as const;

/** Eventos de analítica sugeridos por CTA (ver Fase 7) — nombre estándar GA4. */
export type Ga4Event =
  | "cta_whatsapp_click"
  | "cta_view_pricing"
  | "cta_view_plan_tier"
  | "cta_view_interactive_demo"
  | "demo_booking_click"
  | "partner_apply_submit"
  | "contact_form_submit";

/**
 * Dispara un evento a GA4 (gtag) si está presente en window; no falla si el
 * script de medición todavía no se ha instalado (ver pendientes de Fase 7).
 */
export function trackEvent(event: Ga4Event, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", event, params);
  }
}
