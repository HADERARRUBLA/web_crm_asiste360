import type { Metadata } from "next";
import Image from "next/image";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/links";

export const metadata: Metadata = {
  title: "Prueba a Sofi gratis 30 días",
  description:
    "Sofi responde por ti en WhatsApp, agenda tus citas y nunca deja a un cliente esperando. Pruébala gratis 30 días, sin tarjeta.",
  robots: { index: false, follow: false },
};

const DOLORES = [
  {
    title: "Te escriben y no alcanzas a contestar",
    body: "Cada mensaje sin respuesta a tiempo es una venta que se enfría o se va con otro.",
  },
  {
    title: "Fuera de horario, nadie responde",
    body: "En la noche, el fin de semana, en la madrugada — Sofi sigue ahí, contestando por ti.",
  },
  {
    title: "No tienes dónde ver todo junto",
    body: "Conversaciones, citas y clientes regados — sin un solo lugar para darles seguimiento.",
  },
];

const PASOS = [
  { n: "1", title: "Escríbele a Sofi", body: "Le cuentas en qué negocio estás y qué necesitas." },
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
    a: "La mayoría de negocios pequeños y medianos aplican. Sofi lo valida contigo en la conversación — no tarda más de unos minutos.",
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
        {/* TOP BAR — solo marca, sin navegación, sin salidas */}
        <div className="flex items-center justify-center gap-2 border-b border-line px-6 py-4">
          <div className="relative h-7 w-7">
            <Image src="/logo-orbit.png" alt="" fill className="object-contain" />
            <Image src="/logo-mark.png" alt="" fill className="object-contain" />
          </div>
          <span className="font-heading text-sm font-bold text-navy">Asiste360</span>
        </div>

        {/* HERO */}
        <section className="dotgrid relative overflow-hidden px-6 py-16 text-center md:px-12 md:py-24">
          <span className="mx-auto mb-5 inline-block w-fit rounded-full bg-violet/10 px-4 py-1.5 font-mono text-xs font-semibold text-violet">
            Oferta por tiempo limitado
          </span>
          <h1 className="mx-auto max-w-2xl font-heading text-4xl font-extrabold text-navy md:text-5xl">
            Sofi contesta por ti, al instante — pruébala gratis 30 días
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-gray">
            Es tu recepcionista con IA en WhatsApp: responde, agenda tu cita y nunca deja a un cliente
            esperando. Sin tarjeta, sin compromiso.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="cta_whatsapp_click"
              data-page-source="promo_volante_hero"
              className="rounded-xl bg-gradient-to-br from-violet-2 to-violet px-8 py-4 text-base font-semibold text-white shadow-lg"
            >
              Probar a Sofi gratis por WhatsApp
            </a>
          </div>
          <p className="mt-4 text-xs text-gray">30 días gratis · sin tarjeta · cancelas cuando quieras</p>
        </section>

        {/* DOLORES */}
        <section className="bg-blue-tint px-6 py-16 md:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-2xl font-bold text-navy md:text-3xl">
              ¿Te suena familiar?
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {DOLORES.map((d) => (
                <div key={d.title} className="rounded-2xl bg-white p-6">
                  <h3 className="font-heading text-base font-bold text-navy">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOFI EN ACCION */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[220px_1fr]">
            <div className="relative mx-auto h-[220px] w-[220px] overflow-hidden rounded-3xl bg-blue-tint">
              <Image src="/team/ana.jpg" alt="Sofi" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy md:text-3xl">
                Conoce a Sofi, tu recepcionista con IA
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-gray">
                Contesta al instante en WhatsApp, agenda tu cita en el calendario en tiempo real,
                confirma disponibilidad y precios — y si detecta algo urgente, sabe exactamente a
                quién pasárselo.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="glass-light rounded-2xl p-4 text-center">
                  <p className="font-heading text-2xl font-extrabold text-violet">100%</p>
                  <p className="mt-1 text-xs leading-snug text-gray">
                    de las citas quedan en tu calendario, sin doble reserva
                  </p>
                </div>
                <div className="glass-light rounded-2xl p-4 text-center">
                  <p className="font-heading text-2xl font-extrabold text-violet">25%</p>
                  <p className="mt-1 text-xs leading-snug text-gray">
                    menos inasistencias con recordatorios automáticos
                  </p>
                </div>
                <div className="glass-light rounded-2xl p-4 text-center">
                  <p className="font-heading text-2xl font-extrabold text-violet">5 seg</p>
                  <p className="mt-1 text-xs leading-snug text-gray">
                    máx. para agrupar tus mensajes y responder en bloques claros
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="bg-blue-tint px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-2xl font-bold text-navy md:text-3xl">
              Así de simple
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {PASOS.map((step) => (
                <div key={step.n} className="rounded-2xl bg-white p-6">
                  <span className="font-heading text-3xl font-extrabold text-violet">{step.n}</span>
                  <h3 className="mt-3 font-heading text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{step.body}</p>
                </div>
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
            <h2 className="text-center font-heading text-2xl font-bold text-navy md:text-3xl">
              Preguntas frecuentes
            </h2>
            <div className="mt-10 space-y-4">
              {FAQ.map((item) => (
                <div key={item.q} className="rounded-2xl bg-white p-6">
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
              Dale a Sofi 5 minutos de tu tiempo
            </h2>
            <p className="mt-3 text-sm text-[#C9CCE5]">30 días gratis, sin tarjeta, sin compromiso.</p>
            <div className="mt-7 flex justify-center">
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="cta_whatsapp_click"
                data-page-source="promo_volante_cta_final"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-navy"
              >
                Probar a Sofi gratis por WhatsApp
              </a>
            </div>
          </div>
        </section>

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
          Probar a Sofi gratis por WhatsApp
        </a>
      </div>
    </>
  );
}
