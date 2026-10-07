import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/links";
import { Reveal } from "@/components/reveal";
import { ChannelIcon } from "@/components/channel-icon";

export const metadata: Metadata = {
  title: "Prueba a Sof IA gratis 30 días",
  description:
    "Sof IA responde por ti en WhatsApp, agenda tus citas y nunca deja a un cliente esperando. Pruébala gratis 30 días, sin tarjeta.",
  robots: { index: false, follow: false },
};

const DOLORES = [
  {
    title: "Te escriben y no alcanzas a contestar",
    body: "Cada mensaje sin respuesta a tiempo es una venta que se enfría o se va con otro.",
  },
  {
    title: "Fuera de horario, nadie responde",
    body: "En la noche, el fin de semana, en la madrugada — Sof IA sigue ahí, contestando por ti.",
  },
  {
    title: "No tienes dónde ver todo junto",
    body: "Conversaciones, citas y clientes regados — sin un solo lugar para darles seguimiento.",
  },
];

const FLUJO_PASOS = [
  { n: "1", title: "Contesta", body: "Responde al instante por WhatsApp, a cualquier hora del día." },
  { n: "2", title: "Consulta tu calendario", body: "Revisa la disponibilidad real, sin doble reserva." },
  { n: "3", title: "Agenda y confirma", body: "Deja la cita lista y programa el recordatorio automático." },
  { n: "4", title: "Transfiere si hace falta", body: "Si detecta algo urgente, sabe a quién pasárselo." },
];

const PASOS = [
  { n: "1", title: "Escríbele a Sof IA", body: "Le cuentas en qué negocio estás y qué necesitas." },
  {
    n: "2",
    title: "Ella valida si aplicas",
    body: "Si tu caso encaja con la prueba gratuita, te activa de inmediato.",
  },
  {
    n: "3",
    title: "Pruebas 30 días, sin tarjeta",
    body: "Si te sirve, te quedas. Si no, no pasa nada — no hay compromiso.",
  },
];

const FAQ = [
  { q: "¿Necesito tarjeta para probarla?", a: "No — 30 días gratis, sin tarjeta." },
  {
    q: "¿Cualquier negocio aplica?",
    a: "La mayoría de negocios pequeños y medianos aplican. Sof IA lo valida contigo en la conversación — no tarda más de unos minutos.",
  },
  {
    q: "¿Qué pasa si no me sirve?",
    a: "No hay compromiso ni permanencia mínima. Si no te convence, simplemente no continúas.",
  },
  {
    q: "¿Es el WhatsApp oficial de un negocio?",
    a: "Sí — Asiste360 es proveedor habilitado por Meta, trabajamos por la vía oficial de WhatsApp Business.",
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

/** "Sof" + "IA" en degradado de marca — el guiño Sofía/IA pedido para esta landing. */
function SofIA() {
  return (
    <>
      Sof
      <span className="bg-gradient-to-r from-violet-2 to-violet bg-clip-text text-transparent">
        IA
      </span>
    </>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
      <path
        d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="#fff" strokeWidth="1.5" />
      <path d="M4 9h16" stroke="#fff" strokeWidth="1.5" />
      <path d="M8 3v3M16 3v3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 14l2 2 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlowNode({
  color,
  label,
  highlighted = false,
  children,
}: {
  color: "teal" | "violet" | "blue";
  label: string;
  highlighted?: boolean;
  children: ReactNode;
}) {
  const bg =
    color === "teal"
      ? "bg-teal-500"
      : color === "violet"
        ? "bg-gradient-to-br from-violet-2 to-violet"
        : "bg-blue-600";
  return (
    <div className="flex flex-col items-center gap-2 px-4">
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-md ${bg} ${
          highlighted ? "animate-pulse-ring" : ""
        }`}
      >
        {children}
      </div>
      <span className="text-xs font-semibold text-navy">{label}</span>
    </div>
  );
}

function FlowArrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 rotate-90 text-violet/50 sm:rotate-0" fill="none">
      <path
        d="M4 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function SofiPromoPage({
  searchParams,
}: {
  searchParams: Promise<{ utm_campaign?: string; utm_source?: string }>;
}) {
  const params = await searchParams;
  const campaignTag = params.utm_campaign ? ` [campaña: ${params.utm_campaign}]` : "";
  const message = `${WHATSAPP_MESSAGES.volantePromo}${campaignTag}`;
  const ctaHref = buildWhatsAppLink(message);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <main className="flex-1 pb-24 md:pb-0">
        {/* TOP BAR — solo marca, sin navegación, sin salidas. Logo grande con
            la misma animación de cometa-en-el-aro ya aprobada en el sitio
            (site-nav.tsx), aquí siempre activa en vez de solo al hover. */}
        <div className="flex items-center justify-center gap-3 border-b border-line px-6 py-5">
          <span className="relative inline-flex h-14 w-[72px] flex-none items-center justify-center">
            <Image src="/logo-orbit.png" alt="" aria-hidden="true" fill sizes="72px" className="object-contain" />
            <svg
              viewBox="0 0 235 183"
              className="absolute inset-0 h-full w-full"
              style={{ overflow: "visible" }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="cometTailPromo" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6C4CF1" stopOpacity="0" />
                  <stop offset="100%" stopColor="#6C4CF1" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              <g transform="rotate(-18 117 98)">
                <path id="orbitTrackPromo" d="M217,98 A100,52 0 1 1 17,98 A100,52 0 1 1 217,98" fill="none" />
                <g>
                  <path d="M10,0 L2,-4 C-10,-3 -22,-1 -22,0 C-22,1 -10,3 2,4 Z" fill="url(#cometTailPromo)" />
                  <circle cx="10" cy="0" r="2.4" fill="#ffffff" opacity="0.9" />
                  <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#orbitTrackPromo" xlinkHref="#orbitTrackPromo" />
                  </animateMotion>
                </g>
              </g>
            </svg>
            <Image
              src="/logo-mark.png"
              alt="Asiste360"
              fill
              sizes="72px"
              priority
              className="relative object-contain"
            />
          </span>
          <span className="font-heading text-base font-bold text-navy">Asiste360</span>
        </div>

        {/* HERO */}
        <section className="dotgrid relative overflow-hidden px-6 py-16 text-center md:px-12 md:py-24">
          {/* blobs de fondo, puramente decorativos */}
          <div
            aria-hidden
            className="animate-blob pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet/20 blur-3xl"
          />
          <div
            aria-hidden
            className="animate-blob pointer-events-none absolute -right-20 top-32 h-80 w-80 rounded-full bg-blue-tint blur-3xl"
            style={{ animationDelay: "-5s" }}
          />

          <div className="relative">
            <span className="animate-fade-up mx-auto mb-5 inline-block w-fit rounded-full bg-violet/10 px-4 py-1.5 font-mono text-xs font-semibold text-violet">
              Oferta por tiempo limitado
            </span>
            <h1
              className="animate-fade-up mx-auto max-w-2xl font-heading text-4xl font-extrabold text-navy md:text-5xl"
              style={{ animationDelay: "0.08s" }}
            >
              <SofIA /> contesta por ti, al instante — pruébala gratis 30 días
            </h1>
            <p
              className="animate-fade-up mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-gray"
              style={{ animationDelay: "0.16s" }}
            >
              Es tu recepcionista con inteligencia artificial en WhatsApp: responde, agenda tu cita y
              nunca deja a un cliente esperando. Sin tarjeta, sin compromiso.
            </p>
            <div className="animate-fade-up mt-8 flex justify-center" style={{ animationDelay: "0.24s" }}>
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="cta_whatsapp_click"
                data-page-source="promo_volante_hero"
                className="animate-pulse-ring rounded-xl bg-gradient-to-br from-violet-2 to-violet px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105"
              >
                Probar a Sof IA gratis por WhatsApp
              </a>
            </div>
            <p
              className="animate-fade-up mt-4 text-xs text-gray"
              style={{ animationDelay: "0.3s" }}
            >
              30 días gratis · sin tarjeta · cancelas cuando quieras
            </p>
          </div>
        </section>

        {/* ASI TRABAJA SOF IA — diagrama de flujo, nodo a nodo al hacer scroll */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="mx-auto mb-4 inline-block w-fit rounded-full bg-violet/10 px-4 py-1.5 font-mono text-xs font-semibold text-violet">
                Así funciona
              </span>
            </Reveal>
            <Reveal delayMs={60}>
              <h2 className="font-heading text-2xl font-bold text-navy md:text-3xl">
                Así trabaja <SofIA /> en cada conversación
              </h2>
            </Reveal>

            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-0">
              <Reveal delayMs={150}>
                <FlowNode color="teal" label="WhatsApp">
                  <ChannelIcon name="whatsapp" size={28} />
                </FlowNode>
              </Reveal>
              <Reveal delayMs={320}>
                <FlowArrow />
              </Reveal>
              <Reveal delayMs={420}>
                <FlowNode color="violet" label="Sof IA" highlighted>
                  <SparkleIcon />
                </FlowNode>
              </Reveal>
              <Reveal delayMs={600}>
                <FlowArrow />
              </Reveal>
              <Reveal delayMs={700}>
                <FlowNode color="blue" label="Agenda / CRM">
                  <CalendarCheckIcon />
                </FlowNode>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-5 text-left sm:grid-cols-2">
              {FLUJO_PASOS.map((step, i) => (
                <Reveal key={step.n} delayMs={850 + i * 90}>
                  <div className="flex items-start gap-3 rounded-2xl bg-blue-tint p-4">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-violet text-xs font-bold text-white">
                      {step.n}
                    </span>
                    <div>
                      <p className="font-semibold text-navy">{step.title}</p>
                      <p className="mt-0.5 text-sm text-gray">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DOLORES */}
        <section className="bg-blue-tint px-6 py-16 md:px-12">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-center font-heading text-2xl font-bold text-navy md:text-3xl">
                ¿Te suena familiar?
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {DOLORES.map((d, i) => (
                <Reveal key={d.title} delayMs={i * 100}>
                  <div className="h-full rounded-2xl bg-white p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="font-heading text-base font-bold text-navy">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray">{d.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SOF IA EN ACCION */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[220px_1fr]">
            <Reveal>
              <div className="relative mx-auto h-[220px] w-[220px]">
                <div className="animate-pulse-ring absolute inset-0 rounded-3xl" />
                <div className="animate-float-y relative h-full w-full overflow-hidden rounded-3xl bg-blue-tint">
                  <Image src="/team/ana.jpg" alt="Sof IA" fill className="object-cover" />
                </div>
                <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-navy shadow">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                  </span>
                  En línea
                </span>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div>
                <h2 className="font-heading text-2xl font-bold text-navy md:text-3xl">
                  Conoce a <SofIA />, tu recepcionista con IA
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-gray">
                  Contesta al instante en WhatsApp, agenda tu cita en el calendario en tiempo real,
                  confirma disponibilidad y precios — y si detecta algo urgente, sabe exactamente a
                  quién pasárselo.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="glass-light rounded-2xl p-4 text-center transition-transform duration-300 hover:-translate-y-1">
                    <p className="font-heading text-2xl font-extrabold text-violet">100%</p>
                    <p className="mt-1 text-xs leading-snug text-gray">
                      de las citas quedan en tu calendario, sin doble reserva
                    </p>
                  </div>
                  <div className="glass-light rounded-2xl p-4 text-center transition-transform duration-300 hover:-translate-y-1">
                    <p className="font-heading text-2xl font-extrabold text-violet">25%</p>
                    <p className="mt-1 text-xs leading-snug text-gray">
                      menos inasistencias con recordatorios automáticos
                    </p>
                  </div>
                  <div className="glass-light rounded-2xl p-4 text-center transition-transform duration-300 hover:-translate-y-1">
                    <p className="font-heading text-2xl font-extrabold text-violet">5 seg</p>
                    <p className="mt-1 text-xs leading-snug text-gray">
                      máx. para agrupar tus mensajes y responder en bloques claros
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* COMO FUNCIONA LA PRUEBA */}
        <section className="bg-blue-tint px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-center font-heading text-2xl font-bold text-navy md:text-3xl">
                Así de simple para empezar
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {PASOS.map((step, i) => (
                <Reveal key={step.n} delayMs={i * 100}>
                  <div className="h-full rounded-2xl bg-white p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                    <span className="font-heading text-3xl font-extrabold text-violet">{step.n}</span>
                    <h3 className="mt-3 font-heading text-base font-bold text-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONFIANZA */}
        <section className="px-6 py-12 text-center md:px-12">
          <p className="mx-auto max-w-md text-xs font-semibold uppercase tracking-wide text-gray">
            Proveedor habilitado por Meta · WhatsApp Business oficial
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-blue-tint px-6 py-20 md:px-12">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-center font-heading text-2xl font-bold text-navy md:text-3xl">
                Preguntas frecuentes
              </h2>
            </Reveal>
            <div className="mt-10 space-y-4">
              {FAQ.map((item, i) => (
                <Reveal key={item.q} delayMs={i * 70}>
                  <div className="rounded-2xl bg-white p-6">
                    <p className="font-semibold text-navy">{item.q}</p>
                    <p className="mt-2 text-sm leading-relaxed text-gray">{item.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <Reveal className="mx-6 my-20 md:mx-12">
          <section className="dotgrid relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-[#372b70] px-8 py-16 text-center">
            <div className="relative">
              <h2 className="font-heading text-3xl font-bold text-white">
                Dale a <SofIA /> 5 minutos de tu tiempo
              </h2>
              <p className="mt-3 text-sm text-[#C9CCE5]">30 días gratis, sin tarjeta, sin compromiso.</p>
              <div className="mt-7 flex justify-center">
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="cta_whatsapp_click"
                  data-page-source="promo_volante_cta_final"
                  className="rounded-xl bg-white px-8 py-4 font-semibold text-navy transition-transform duration-200 hover:scale-105"
                >
                  Probar a Sof IA gratis por WhatsApp
                </a>
              </div>
            </div>
          </section>
        </Reveal>

        {/* FOOTER MINIMO — sin navegación de salida, solo legal */}
        <footer className="border-t border-line px-6 py-8 text-center">
          <p className="text-xs text-gray">
            © {new Date().getFullYear()} Asiste360 — H&amp;S Soluciones y Servicios Integrales.{" "}
            <a href="/legal/privacidad" className="underline">
              Privacidad
            </a>{" "}
            ·{" "}
            <a href="/legal/terminos" className="underline">
              Términos
            </a>
          </p>
        </footer>
      </main>

      {/* CTA STICKY MOVIL — tráfico frío de volante, recorrido corto siempre a la vista */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 px-4 py-3 backdrop-blur md:hidden">
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics="cta_whatsapp_click"
          data-page-source="promo_volante_sticky"
          className="block rounded-xl bg-gradient-to-br from-violet-2 to-violet px-6 py-3.5 text-center text-sm font-semibold text-white"
        >
          Probar a Sof IA gratis por WhatsApp
        </a>
      </div>
    </>
  );
}
