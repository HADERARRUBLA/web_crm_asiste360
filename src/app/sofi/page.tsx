import type { Metadata } from "next";
import Image from "next/image";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/links";
import { Reveal } from "@/components/reveal";
import { ChannelIcon, type IconName } from "@/components/channel-icon";

export const metadata: Metadata = {
  title: "Prueba a Sof IA gratis 30 días",
  description:
    "Sof IA responde por ti en WhatsApp, agenda tus citas y nunca deja a un cliente esperando. Pruébala gratis 30 días, sin tarjeta.",
  robots: { index: false, follow: false },
};

const DOLORES = [
  { label: "Sin respuesta a tiempo", rotate: "-rotate-2" },
  { label: "Fuera de horario, nadie contesta", rotate: "rotate-1" },
  { label: "Varios canales, todo disperso", rotate: "-rotate-1" },
  { label: "No hay un solo lugar para verlo todo", rotate: "rotate-2" },
  { label: "No te alcanza el tiempo", rotate: "-rotate-2" },
  { label: "Cada cliente perdido es plata que se va", rotate: "rotate-1" },
];

const CHANNELS_ENTRADA: { name: string; icon: IconName; color: string }[] = [
  { name: "WebChat", icon: "webchat", color: "#6C4CF1" },
  { name: "Instagram", icon: "instagram", color: "#C13584" },
  { name: "Messenger", icon: "messenger", color: "#0866FF" },
  { name: "WhatsApp", icon: "whatsapp", color: "#25D366" },
];

const ACCIONES = ["Analiza", "Consulta", "Responde", "Comparte", "Registra", "Escala"];

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

function SparkleIcon({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: size, height: size }} fill="none">
      <path
        d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
      <path
        d="M12 3.5l2.2 1.3 2.5-.3 1 2.3 2.1 1.4-.6 2.5.6 2.5-2.1 1.4-1 2.3-2.5-.3L12 18l-2.2-1.3-2.5.3-1-2.3-2.1-1.4.6-2.5-.6-2.5 2.1-1.4 1-2.3 2.5.3Z"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 flex-none text-violet/60" fill="none">
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChannelBadge({ name, icon, color, delayMs }: { name: string; icon: IconName; color: string; delayMs: number }) {
  return (
    <Reveal delayMs={delayMs} className="reveal-pop">
      <div className="flex flex-col items-center gap-2">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl shadow-md sm:h-14 sm:w-14"
          style={{ backgroundColor: color }}
        >
          <ChannelIcon name={icon} size={24} />
        </div>
        <span className="text-[11px] font-semibold text-navy">{name}</span>
      </div>
    </Reveal>
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
            la misma animación de cometa sobre el aro ya usada en
            site-nav.tsx, aquí siempre activa (no solo al hover). */}
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
            <p className="animate-fade-up mt-4 text-xs text-gray" style={{ animationDelay: "0.3s" }}>
              30 días gratis · sin tarjeta · cancelas cuando quieras
            </p>
          </div>
        </section>

        {/* DOLORES — chips dispersos, para identificarnos con el problema antes de mostrar la solución */}
        <section className="bg-blue-tint px-6 py-16 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-heading text-2xl font-bold text-navy md:text-3xl">¿Te suena familiar?</h2>
            </Reveal>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {DOLORES.map((d, i) => (
                <Reveal key={d.label} delayMs={i * 90} className={`reveal-pop ${d.rotate}`}>
                  <span className="inline-block rounded-xl border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm font-medium text-amber-900 shadow-sm">
                    {d.label}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ASI APARECE SOF IA + DIAGRAMA DE FLUJO */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="mx-auto max-w-md text-[15px] leading-relaxed text-gray">
                ¿Y si una sola persona —disponible 24/7, en todos tus canales— pudiera con todo eso?
              </p>
            </Reveal>

            {/* Sof IA entra en escena */}
            <Reveal delayMs={120} className="reveal-pop">
              <div className="relative mx-auto mt-10 h-24 w-24">
                <div className="animate-pulse-ring absolute inset-0 rounded-full" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-violet-2 to-violet shadow-lg">
                  <SparkleIcon size={36} />
                </div>
              </div>
            </Reveal>
            <Reveal delayMs={220}>
              <p className="mt-4 font-heading text-xl font-bold text-navy">
                Así aparece <SofIA />
              </p>
            </Reveal>

            {/* Canales convergiendo */}
            <Reveal delayMs={320}>
              <p className="mt-12 font-mono text-xs font-semibold uppercase tracking-wide text-violet">
                Un solo lugar para todos tus canales
              </p>
            </Reveal>
            <div className="mx-auto mt-6 flex max-w-md justify-center gap-6 sm:gap-10">
              {CHANNELS_ENTRADA.map((ch, i) => (
                <ChannelBadge key={ch.name} name={ch.name} icon={ch.icon} color={ch.color} delayMs={420 + i * 100} />
              ))}
            </div>
            <div className="relative mx-auto -mt-1 h-12 w-full max-w-sm">
              <svg viewBox="0 0 320 50" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
                <path d="M40,0 L160,45" className="flow-line" stroke="#6C4CF1" strokeWidth="2" fill="none" opacity="0.45" />
                <path d="M120,0 L160,45" className="flow-line" stroke="#6C4CF1" strokeWidth="2" fill="none" opacity="0.45" />
                <path d="M200,0 L162,45" className="flow-line" stroke="#6C4CF1" strokeWidth="2" fill="none" opacity="0.45" />
                <path d="M280,0 L164,45" className="flow-line" stroke="#6C4CF1" strokeWidth="2" fill="none" opacity="0.45" />
              </svg>
            </div>
            <Reveal delayMs={800} className="reveal-pop">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-2 to-violet shadow-md">
                <SparkleIcon size={24} />
              </div>
            </Reveal>

            {/* Cadena de acciones */}
            <Reveal delayMs={950}>
              <p className="mt-12 font-mono text-xs font-semibold uppercase tracking-wide text-violet">
                Y en segundos
              </p>
            </Reveal>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-3">
              {ACCIONES.map((accion, i) => (
                <div key={accion} className="flex items-center gap-1.5">
                  <Reveal delayMs={1000 + i * 120} className="reveal-pop">
                    <span className="inline-block rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white sm:text-sm">
                      {accion}
                    </span>
                  </Reveal>
                  {i < ACCIONES.length - 1 && <ChevronRight />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOF IA EN ACCION — foto, descripción y stats reales */}
        <section className="bg-blue-tint px-6 py-20 md:px-12">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[220px_1fr]">
            <Reveal>
              <div className="relative mx-auto h-[220px] w-[220px]">
                <div className="animate-pulse-ring absolute inset-0 rounded-3xl" />
                <div className="animate-float-y relative h-full w-full overflow-hidden rounded-3xl bg-white">
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

        {/* CONFIANZA — Meta, con mas peso visual */}
        <section className="px-6 py-16 md:px-12">
          <Reveal className="mx-auto max-w-2xl">
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-line bg-white px-6 py-8 text-center shadow-sm sm:flex-row sm:text-left">
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-[#0866FF] shadow-md">
                <VerifiedIcon />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-navy">Proveedor habilitado por Meta</p>
                <p className="mt-1 text-sm leading-relaxed text-gray">
                  Trabajamos por la vía oficial de WhatsApp Business — tu número, verificado y protegido
                  desde el primer día.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* COMO EMPEZAR */}
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

        {/* FAQ */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-center font-heading text-2xl font-bold text-navy md:text-3xl">
                Preguntas frecuentes
              </h2>
            </Reveal>
            <div className="mt-10 space-y-4">
              {FAQ.map((item, i) => (
                <Reveal key={item.q} delayMs={i * 70}>
                  <div className="rounded-2xl bg-blue-tint p-6">
                    <p className="font-semibold text-navy">{item.q}</p>
                    <p className="mt-2 text-sm leading-relaxed text-gray">{item.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <Reveal className="mx-6 mb-20 md:mx-12">
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
