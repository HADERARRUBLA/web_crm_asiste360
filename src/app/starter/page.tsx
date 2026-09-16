import Link from "next/link";
import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/links";

export const metadata: Metadata = {
  title: "Starter",
  description:
    "Centraliza 2 canales a tu elección, tus contactos y tu pipeline de ventas — sin escribir una línea de código. Desde $79/mes.",
};

const STEPS = [
  {
    n: "1",
    title: "Elige tus 2 canales",
    body: "WhatsApp y el que prefieras de la lista completa — los conectas en minutos.",
  },
  {
    n: "2",
    title: "Configura tu agente y tu pipeline",
    body: "De forma visual: qué responde, cuándo deriva a un humano, cómo se organizan tus contactos.",
  },
  {
    n: "3",
    title: "Recibe, califica y da seguimiento",
    body: "A tus clientes, automáticamente — sin depender de nadie más.",
  },
];

const FEATURES = [
  {
    title: "Chatbot con IA",
    body: "Respuestas automáticas a preguntas frecuentes y calificación básica de leads.",
  },
  {
    title: "CRM esencial",
    body: "Contactos, pipeline de ventas básico, calendario y tareas.",
  },
  {
    title: "Difusiones",
    body: "Mensajes masivos y recordatorios a tu lista de contactos.",
  },
];

const FAQ = [
  { q: "¿Necesito tarjeta para probarlo?", a: "No — 30 días gratis sin tarjeta." },
  {
    q: "¿Puedo elegir cualquier combinación de 2 canales?",
    a: "Sí, de la lista completa disponible.",
  },
  { q: "¿Qué pasa si mi negocio crece?", a: "Subes de plan cuando quieras, sin perder nada." },
  { q: "¿Hay permanencia mínima?", a: "No — cancelas cuando quieras, sin contratos forzosos." },
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

export default function StarterPage() {
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
            Plan Starter
          </span>
          <h1 className="mx-auto max-w-3xl font-heading text-4xl font-extrabold text-navy md:text-5xl">
            Tu CRM conversacional, listo en minutos
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-gray">
            Centraliza 2 canales a tu elección, tus contactos y tu pipeline de ventas — sin escribir
            una línea de código ni depender de nadie más.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.starterTrial)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="cta_whatsapp_click"
              data-page-source="starter_hero"
              className="rounded-xl bg-gradient-to-br from-violet-2 to-violet px-7 py-4 font-semibold text-white"
            >
              Prueba gratis 30 días — sin tarjeta
            </a>
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="cta_whatsapp_click"
              data-page-source="starter_hero_secondary"
              className="rounded-xl border border-line px-7 py-4 font-semibold text-navy"
            >
              Habla con nuestro Agente
            </a>
          </div>
        </section>

        {/* PARA QUIEN ES */}
        <section className="bg-blue-tint px-6 py-16 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-navy">¿Para quién es Starter?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray">
              Si tienes un negocio pequeño o mediano y quieres centralizar tus canales, calificar
              clientes y darles seguimiento sin depender de un equipo técnico — Starter es tu punto de
              partida.
            </p>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-3xl font-bold text-navy">Cómo funciona</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {STEPS.map((step) => (
                <div key={step.n} className="glass-light rounded-2xl p-6">
                  <span className="font-heading text-3xl font-extrabold text-violet">{step.n}</span>
                  <h3 className="mt-3 font-heading text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-blue-tint px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-3xl font-bold text-navy">Qué incluye</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {FEATURES.map((f) => (
                <div key={f.title} className="rounded-2xl bg-white p-6">
                  <h3 className="font-heading text-base font-bold text-navy">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CANALES */}
        <section className="px-6 py-20 text-center md:px-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-heading text-2xl font-bold text-navy">Canales soportados</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray">
              <b className="text-navy">2 canales a tu elección</b> de la lista completa: WhatsApp API
              oficial/QR, Instagram, Facebook, TikTok, Telegram, Email, WebChat, Voz con IA, SMS. Somos
              proveedor habilitado por Meta.
            </p>
            <p className="mt-3 text-sm text-gray">
              ¿Necesitas más de 2 canales? Es momento de ver los{" "}
              <Link href="/crecimiento" className="font-semibold text-violet underline">
                planes de crecimiento
              </Link>
              .
            </p>
          </div>
        </section>

        {/* PRECIO */}
        <section className="bg-blue-tint px-6 py-16 md:px-12">
          <div className="glass-light mx-auto max-w-md rounded-3xl p-8 text-center">
            <p className="font-heading text-4xl font-extrabold text-navy">$79/mes</p>
            <p className="mt-2 text-sm text-gray">
              Incluye 5 usuarios y 2 canales a tu elección — usuarios adicionales en bloques de 5 por
              $12/mes.
            </p>
            <Link
              href="/precios"
              className="mt-6 inline-block rounded-xl bg-gradient-to-br from-violet-2 to-violet px-6 py-3 text-sm font-semibold text-white"
            >
              Ver el plan completo
            </Link>
          </div>
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
          <h2 className="font-heading text-3xl font-bold text-white">Empieza gratis hoy</h2>
          <p className="mt-3 text-sm text-[#C9CCE5]">30 días, sin tarjeta.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.starterTrial)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="cta_whatsapp_click"
              data-page-source="starter_cta_final"
              className="rounded-xl bg-white px-7 py-4 font-semibold text-navy"
            >
              Empieza gratis
            </a>
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="cta_whatsapp_click"
              data-page-source="starter_cta_final_secondary"
              className="rounded-xl border border-white/30 px-7 py-4 font-semibold text-white"
            >
              Habla con nuestro Agente
            </a>
          </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
