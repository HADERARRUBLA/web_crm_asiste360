import Link from "next/link";
import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { GHL_BOOKING_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Planes de crecimiento",
  description:
    "El mismo CRM de Starter, con más canales a tu elección y el poder de construir cualquier agente de IA que tu operación necesite. Desde $149/mes.",
};

const TIERS = [
  { name: "Pro", price: "$149/mes", note: "Más popular" },
  { name: "Avanzado", price: "$259/mes" },
  { name: "Enterprise", price: "Personalizado" },
];

const SUPERPOWERS = [
  {
    title: "Más canales a tu elección",
    body: "Hasta 6 en Avanzado, ilimitados en Enterprise, de una lista de 9 canales disponibles.",
  },
  {
    title: "CRM completo",
    body: "Pipeline de ventas, calendario, campañas, constructor de flujos y reportes avanzados.",
  },
  {
    title: "Agentes de IA a medida",
    body: "Para ventas, soporte, cobranza o lo que tu negocio necesite.",
  },
  {
    title: "Integraciones con cualquier sistema",
    body: "Compatible con API y MCP (Model Context Protocol), incluyendo tu ERP.",
  },
  {
    title: "Escalabilidad real",
    body: "Sin límite de usuarios, equipos o volumen de conversaciones (nivel Enterprise).",
  },
];

const CCR = [
  {
    title: "Captura",
    body: "Todos los canales que elijas + tu web + fuentes externas, unificados en un solo pipeline.",
  },
  {
    title: "Convierte",
    body: "Agentes de IA multilingües, calificación avanzada, agenda automática integrada a tu operación.",
  },
  {
    title: "Retiene",
    body: "Seguimiento automatizado, campañas, encuestas de satisfacción, reportes y contexto completo del cliente en cada punto de contacto.",
  },
];

const FAQ = [
  {
    q: "¿Esto reemplaza mi CRM actual?",
    a: "Puede integrarse con él (incluido tu ERP) o ser tu única plataforma — se define contigo.",
  },
  {
    q: "¿Cuánto tarda en implementarse?",
    a: "Depende del nivel de personalización: lo esencial es inmediato, y como nos conectamos vía API o MCP con prácticamente cualquier sistema, los tiempos de integraciones a medida se definen según tu caso.",
  },
  {
    q: "¿Qué tan personalizado puede ser el agente de IA?",
    a: "Tan personalizado como tu operación lo requiera — es la base del plan Enterprise.",
  },
  {
    q: "¿Hay permanencia mínima?",
    a: "No — todos nuestros planes son mes a mes, sin contratos forzosos.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function CrecimientoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <SiteNav />
      <main className="flex-1">
        {/* HERO */}
        <section className="dotgrid relative overflow-hidden px-6 py-24 text-center md:px-12">
          <span className="mx-auto mb-5 inline-block w-fit rounded-full bg-violet/10 px-4 py-1.5 font-mono text-xs font-semibold text-violet">
            Pro · Avanzado · Enterprise
          </span>
          <h1 className="mx-auto max-w-3xl font-heading text-4xl font-extrabold text-navy md:text-5xl">
            Cuando tu negocio ya no cabe en lo básico
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-gray">
            El mismo CRM de Starter, con más canales a tu elección y el poder de construir cualquier
            agente de IA que tu operación necesite.
          </p>
          <p className="mt-3 font-mono text-sm text-violet">Desde $149/mes — sin techo.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={GHL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="demo_booking_click"
              data-page-source="crecimiento_hero"
              className="rounded-xl bg-gradient-to-br from-violet-2 to-violet px-7 py-4 font-semibold text-white"
            >
              Agenda una demo
            </a>
          </div>
        </section>

        {/* PARA QUIEN ES */}
        <section className="bg-blue-tint px-6 py-16 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-navy">¿Para quién es?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray">
              Si ya tienes volumen, necesitas varios canales activos a la vez, o que tu operación
              completa — ventas, soporte, agenda, reportes — viva en un solo lugar con integraciones a
              tus sistemas, este es el camino que crece contigo.
            </p>
          </div>
        </section>

        {/* MISMA BASE */}
        <section className="px-6 py-20 text-center md:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-navy">
              Empiezas simple. Escalas cuando tú digas.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray">
              Arrancas con el CRM esencial activo — igual de fácil que Starter, con más canales a
              elegir (4 en Pro, 6 en Avanzado, ilimitados en Enterprise, de una lista de 9 disponibles).
              Cuando estés listo, activamos contigo los superpoderes: agentes de IA a medida, reportes
              avanzados, integraciones con cualquier sistema — incluido tu ERP.
            </p>
            <div className="mx-auto mt-10 grid max-w-2xl gap-4 md:grid-cols-3">
              {TIERS.map((tier) => (
                <div key={tier.name} className="glass-light rounded-2xl p-5">
                  {tier.note && (
                    <span className="mb-2 inline-block rounded-full bg-violet/10 px-2.5 py-0.5 text-[11px] font-semibold text-violet">
                      {tier.note}
                    </span>
                  )}
                  <p className="font-heading text-lg font-bold text-navy">{tier.name}</p>
                  <p className="text-sm text-gray">{tier.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUPERPODERES */}
        <section className="bg-blue-tint px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-3xl font-bold text-navy">Superpoderes</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SUPERPOWERS.map((s) => (
                <div key={s.title} className="rounded-2xl bg-white p-6">
                  <h3 className="font-heading text-base font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPTURA CONVIERTE RETIENE */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-3xl font-bold text-navy">
              Captura → Convierte → Retiene
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {CCR.map((c) => (
                <div key={c.title} className="glass-light rounded-2xl p-6">
                  <h3 className="font-heading text-lg font-bold text-violet">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRECIO */}
        <section className="bg-blue-tint px-6 py-16 text-center md:px-12">
          <p className="font-heading text-3xl font-extrabold text-navy">Desde $149/mes</p>
          <p className="mt-2 text-sm text-gray">¿Necesitas algo muy a tu medida? Hablemos de un plan Enterprise.</p>
          <Link
            href="/precios"
            className="mt-6 inline-block rounded-xl bg-gradient-to-br from-violet-2 to-violet px-6 py-3 text-sm font-semibold text-white"
          >
            Ver cómo se arma tu plan
          </Link>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-3xl font-bold text-navy">Preguntas frecuentes</h2>
            <div className="mt-10 space-y-4">
              {FAQ.map((item) => (
                <div key={item.q} className="glass-light rounded-2xl p-6">
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
          <h2 className="font-heading text-3xl font-bold text-white">Hablemos de tu escala</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href={GHL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="demo_booking_click"
              data-page-source="crecimiento_cta_final"
              className="rounded-xl bg-white px-7 py-4 font-semibold text-navy"
            >
              Agenda una demo
            </a>
          </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
