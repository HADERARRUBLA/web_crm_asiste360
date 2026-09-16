import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import {
  buildWhatsAppLink,
  GHL_BOOKING_URL,
  WHATSAPP_MESSAGES,
} from "@/lib/links";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Starter, Pro, Avanzado o Enterprise — elige tu plan, cuántos canales necesitas y cuántos usuarios. Sin permanencia mínima.",
};

type Plan = {
  id: "starter" | "pro" | "avanzado" | "enterprise";
  name: string;
  badge?: string;
  price: string;
  priceAnnual: string;
  channels: string;
  crm: string;
  users: string;
  extraUsers: string;
  permanence: string;
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$79/mes",
    priceAnnual: "$790/año (2 meses gratis)",
    channels: "2 a elección",
    crm: "Esencial (contactos, pipeline básico, calendario, tareas)",
    users: "5",
    extraUsers: "Bloques de 5 × $12/mes",
    permanence: "Ninguna — mes a mes",
    ctaLabel: "Prueba gratis 30 días",
    ctaHref: buildWhatsAppLink(WHATSAPP_MESSAGES.starterTrial),
  },
  {
    id: "pro",
    name: "Pro",
    badge: "⭐ Más popular",
    price: "$149/mes",
    priceAnnual: "$1,490/año (2 meses gratis)",
    channels: "4 a elección",
    crm: "CRM completo + campañas",
    users: "10",
    extraUsers: "Bloques de 10 × $20/mes",
    permanence: "Ninguna — mes a mes",
    ctaLabel: "Agenda una demo",
    ctaHref: GHL_BOOKING_URL,
    highlighted: true,
  },
  {
    id: "avanzado",
    name: "Avanzado",
    price: "$259/mes",
    priceAnnual: "$2,590/año (2 meses gratis)",
    channels: "6 a elección",
    crm: "CRM completo + reportes avanzados + constructor de flujos",
    users: "10",
    extraUsers: "Bloques de 10 × $24/mes",
    permanence: "Ninguna — mes a mes",
    ctaLabel: "Agenda una demo",
    ctaHref: GHL_BOOKING_URL,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Personalizado",
    priceAnnual: "A convenir",
    channels: "Ilimitados",
    crm: "Todo + a medida",
    users: "Ilimitados",
    extraUsers: "Incluidos",
    permanence: "A convenir",
    ctaLabel: "Habla con Ventas",
    ctaHref: buildWhatsAppLink(WHATSAPP_MESSAGES.planEnterprise),
  },
];

type ScopeSection = {
  title: string;
  badge?: { label: string; tone: "closed" | "draft" };
  rows: { feature: string; values: [string, string, string, string] }[];
};

const SCOPE: ScopeSection[] = [
  {
    title: "Canales",
    badge: { label: "CERRADO", tone: "closed" },
    rows: [
      { feature: "Cantidad de canales a elección", values: ["2", "4", "6", "Ilimitados"] },
    ],
  },
  {
    title: "CRM & Productividad",
    badge: { label: "BORRADOR · PENDIENTE VALIDAR", tone: "draft" },
    rows: [
      { feature: "Bandeja de entrada centralizada", values: ["✔", "✔", "✔", "✔"] },
      { feature: "Gestión de contactos", values: ["✔", "✔", "✔", "✔"] },
      { feature: "Pipeline de ventas", values: ["✔ básico", "✔", "✔", "✔ a medida"] },
      { feature: "Calendario y agenda", values: ["✔", "✔", "✔", "✔"] },
      { feature: "Tareas", values: ["✔", "✔", "✔", "✔"] },
      { feature: "Campañas / difusiones", values: ["✔ básicas", "✔", "✔", "✔"] },
      { feature: "Constructor de flujos visuales", values: ["—", "✔", "✔", "✔"] },
      { feature: "Reportes básicos", values: ["✔", "✔", "✔", "✔"] },
      { feature: "Reportes avanzados/personalizados", values: ["—", "—", "✔", "✔"] },
      { feature: "Integración con ERP y sistemas propios", values: ["—", "—", "✔ (vía API/MCP)", "✔ ilimitado"] },
    ],
  },
  {
    title: "IA & Automatización",
    rows: [
      { feature: "Chatbot con reglas", values: ["✔", "✔", "✔", "✔"] },
      { feature: "Calificación automática de leads", values: ["✔ básica", "✔", "✔", "✔"] },
      { feature: "Agente de IA conversacional", values: ["—", "✔ básico", "✔ avanzado", "✔ a medida"] },
      { feature: "Agendamiento automático de citas/demos", values: ["—", "✔", "✔", "✔"] },
      { feature: "Agentes de IA a medida (tareas específicas)", values: ["—", "—", "✔", "✔"] },
      { feature: "Soporte multilenguaje", values: ["—", "✔", "✔", "✔"] },
    ],
  },
  {
    title: "Soporte y Éxito del Cliente",
    rows: [
      { feature: "Soporte estándar (chat/correo)", values: ["✔", "✔", "✔", "✔"] },
      { feature: "Soporte prioritario", values: ["—", "✔", "✔", "✔"] },
      { feature: "Onboarding guiado", values: ["—", "✔", "✔", "✔ dedicado"] },
      { feature: "Gerente de cuenta dedicado", values: ["—", "—", "Add-on", "✔"] },
    ],
  },
  {
    title: "Plataforma & Seguridad",
    rows: [
      { feature: "Autenticación de dos factores (2FA)", values: ["✔", "✔", "✔", "✔"] },
      { feature: "Roles y permisos de equipo", values: ["Básico", "Avanzado", "Avanzado", "Avanzado"] },
      { feature: "Espacios de trabajo múltiples", values: ["—", "—", "✔", "Custom"] },
    ],
  },
];

const FAQ = [
  { q: "¿Puedo cambiar de plan luego?", a: "Sí, en cualquier momento." },
  {
    q: "¿Hay permanencia mínima?",
    a: "No en Starter, Pro y Avanzado — son mes a mes. En Enterprise se puede conversar un esquema anual si te conviene mejor precio, pero no es obligatorio.",
  },
  {
    q: "¿Qué pasa si supero mi número de usuarios?",
    a: "Se factura el siguiente bloque de usuarios adicionales según tu plan.",
  },
  { q: "¿Puedo cambiar cuáles canales tengo activos?", a: "Sí, dentro del límite de tu plan." },
  { q: "¿En qué moneda son los precios?", a: "Dólares estadounidenses (USD)." },
  {
    q: "¿Cómo funciona el pago anual?",
    a: "Pagas el equivalente a 10 meses y tienes 12 — 2 meses gratis.",
  },
];

const PRODUCT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Asiste360",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "CRM conversacional multicanal con IA que centraliza WhatsApp, Instagram, Facebook y más — pipeline de ventas, calendario, tareas y campañas en un solo lugar.",
  url: "https://asiste360.com/precios",
  offers: PLANS.filter((plan) => plan.id !== "enterprise").map((plan) => ({
    "@type": "Offer",
    name: `Asiste360 ${plan.name}`,
    price: plan.price.replace(/[^0-9.]/g, ""),
    priceCurrency: "USD",
    url: "https://asiste360.com/precios",
    description: `${plan.channels} canales · ${plan.users} usuarios incluidos · ${plan.crm}`,
  })),
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function PreciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <SiteNav />
      <main className="flex-1">
        {/* HEADER */}
        <section className="px-6 py-20 text-center md:px-12">
          <h1 className="font-heading text-4xl font-extrabold text-navy">
            Un precio para cada forma de crecer
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-gray">
            Elige tu plan, cuántos canales necesitas y cuántos usuarios — te mostramos exactamente qué
            incluye. Sin permanencia mínima: cancela cuando quieras.
          </p>
          <p className="mt-3 font-mono text-sm text-violet">
            Paga 10 meses, recibe 12 — 2 meses gratis al pagar anual.
          </p>
        </section>

        {/* PLANES */}
        <section className="px-6 pb-16 md:px-12">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={
                  plan.highlighted
                    ? "pro-card-hover flex flex-col rounded-3xl bg-gradient-to-br from-navy to-[#372b70] p-7 text-white shadow-[0_30px_60px_-16px_rgba(0,0,0,0.35)] hover:scale-[1.02] md:-translate-y-2.5"
                    : "glass-light card-hover flex flex-col rounded-3xl p-7"
                }
              >
                {plan.badge && (
                  <span className="mb-3 inline-block w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                    {plan.badge}
                  </span>
                )}
                <h2 className={`font-heading text-xl font-bold ${plan.highlighted ? "" : "text-navy"}`}>
                  {plan.name}
                </h2>
                <p className={`mt-2 font-heading text-3xl font-extrabold ${plan.highlighted ? "" : "text-navy"}`}>
                  {plan.price}
                </p>
                <p className={`text-xs ${plan.highlighted ? "text-[#C9CCE5]" : "text-gray"}`}>
                  {plan.priceAnnual}
                </p>

                <ul
                  className={`mt-5 flex-1 space-y-2 text-sm ${
                    plan.highlighted ? "text-[#C9CCE5]" : "text-gray"
                  }`}
                >
                  <li>
                    <b className={plan.highlighted ? "text-white" : "text-navy"}>{plan.channels}</b> canales
                  </li>
                  <li>{plan.crm}</li>
                  <li>{plan.users} usuarios incluidos</li>
                  <li>Adicionales: {plan.extraUsers}</li>
                  <li>Permanencia: {plan.permanence}</li>
                </ul>

                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics={plan.ctaHref === GHL_BOOKING_URL ? "demo_booking_click" : "cta_whatsapp_click"}
                  data-plan-interes={plan.name}
                  className={
                    plan.highlighted
                      ? "mt-6 rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-navy"
                      : "mt-6 rounded-xl bg-gradient-to-br from-violet-2 to-violet px-5 py-3 text-center text-sm font-semibold text-white"
                  }
                >
                  {plan.ctaLabel}
                </a>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-gray">
            Lista completa de canales para elegir: WhatsApp Business API oficial/QR, Instagram Direct,
            Facebook Messenger, TikTok, Telegram, Email, WebChat, Llamadas de voz con IA, SMS — 9 en
            total.
          </p>
        </section>

        {/* TABLA DE ALCANCE */}
        <section className="bg-blue-tint px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl space-y-14">
            <h2 className="text-center font-heading text-3xl font-bold text-navy">
              Tabla de alcance completa
            </h2>
            {SCOPE.map((section) => (
              <div key={section.title}>
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="font-heading text-lg font-bold text-navy">{section.title}</h3>
                  {section.badge && (
                    <span
                      className={
                        section.badge.tone === "closed"
                          ? "rounded-full bg-emerald-100 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-700"
                          : "rounded-full bg-amber-100 px-3 py-1 font-mono text-[11px] font-semibold text-amber-800"
                      }
                    >
                      {section.badge.label}
                    </span>
                  )}
                </div>
                <div className="overflow-x-auto rounded-2xl border border-line bg-white">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-line text-xs uppercase tracking-wide text-gray">
                        <th className="px-4 py-3 font-semibold">Función</th>
                        <th className="px-4 py-3 font-semibold">Starter</th>
                        <th className="px-4 py-3 font-semibold">Pro</th>
                        <th className="px-4 py-3 font-semibold">Avanzado</th>
                        <th className="px-4 py-3 font-semibold">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row) => (
                        <tr key={row.feature} className="border-b border-line last:border-0">
                          <td className="px-4 py-3 font-medium text-navy">{row.feature}</td>
                          {row.values.map((value, i) => (
                            <td
                              key={i}
                              className={value === "—" ? "px-4 py-3 text-gray/50" : "px-4 py-3 text-navy"}
                            >
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
            <p className="text-center text-xs text-gray">
              El sitio real permite elegir plan + canales + usuarios adicionales de forma interactiva y
              ver el precio total y la fila de alcance correspondiente resaltada.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-3xl font-bold text-navy">Preguntas frecuentes</h2>
            <div className="mt-10 space-y-4">
              {FAQ.map((item) => (
                <div key={item.q} className="glass-light card-hover rounded-2xl p-6">
                  <p className="font-semibold text-navy">{item.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="dotgrid relative mx-6 my-20 overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-[#372b70] px-8 py-16 text-center md:mx-12">
          <div className="relative">
          <h2 className="font-heading text-3xl font-bold text-white">
            ¿Listo para elegir tu plan?
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.starterTrial)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-br from-violet-2 to-violet px-7 py-4 font-semibold text-white"
            >
              Empieza gratis
            </a>
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.planEnterprise)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/30 px-7 py-4 font-semibold text-white"
            >
              Habla con Ventas
            </a>
          </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
