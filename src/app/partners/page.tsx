import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/links";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Súmate como Partner de Asiste360: comisión recurrente por niveles, panel en tiempo real y certificación oficial.",
};

const TIERS = [
  {
    name: "Partner",
    commission: "30%",
    requirement: "Desde el registro",
    tone: "base" as const,
  },
  {
    name: "Partner Pro",
    commission: "50%",
    requirement: "A partir de 20 clientes activos",
    tone: "mid" as const,
  },
  {
    name: "Embajador",
    commission: "70%",
    requirement: "Sin umbral fijo — se conversa según tu desempeño",
    badge: "A NEGOCIAR CON EL EQUIPO",
    tone: "top" as const,
  },
];

const STEPS = [
  {
    n: "1",
    title: "Regístrate",
    body: "Onboarding abierto y autogestionable — nuestro equipo valida tu perfil durante el proceso.",
  },
  {
    n: "2",
    title: "Activa tu link",
    body: "Una vez calificado, activamos tu link de ventas único para que empieces a referir clientes.",
  },
  {
    n: "3",
    title: "Refiere y da seguimiento",
    body: "Sigue cada cliente referido en tu panel de partner en tiempo real, igual que en la plataforma.",
  },
  {
    n: "4",
    title: "Cobra cada mes",
    body: "Comisión recurrente mientras el cliente esté activo — pago mensual, sin sorpresas.",
  },
];

const BENEFITS = [
  "Comisión recurrente mientras el cliente permanezca activo",
  "Panel de partner en tiempo real (clientes, comisiones, estado)",
  "Descuento delegable para tus clientes referidos, según el plan",
  "Gestión delegada de las cuentas que refieres",
  "Certificación oficial \"Partner Certificado Asiste360\"",
  "Soporte prioritario para ti y tus clientes",
  "Kit de venta listo para usar (piezas, argumentario, demo)",
  "Pipeline propio en nuestro CRM para tus oportunidades",
];

const FAQ = [
  {
    q: "¿Quién puede ser Partner?",
    a: "Agencias, consultores e implementadores que ya trabajan con negocios que podrían beneficiarse de Asiste360.",
  },
  {
    q: "¿Cómo y cuándo se paga la comisión?",
    a: "Pago mensual, mientras el cliente referido esté activo.",
  },
  {
    q: "¿Cómo subo de nivel?",
    a: "De Partner a Partner Pro, al llegar a 20 clientes activos.",
  },
  {
    q: "¿Cómo llego al nivel Embajador?",
    a: "No hay un número fijo de clientes: se evalúa caso a caso según tu desempeño, y se conversa directamente con nuestro equipo.",
  },
  {
    q: "¿Puedo ofrecer descuento a mis referidos?",
    a: "Sí, con un margen delegable que varía según el plan al que apliquen.",
  },
  {
    q: "¿El programa tiene costo?",
    a: "No, el registro es gratuito.",
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

export default function PartnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <SiteNav active="Partners" />
      <main className="flex-1">
        {/* HERO */}
        <section className="dotgrid relative overflow-hidden px-6 py-24 text-center md:px-12">
          <span className="mx-auto mb-5 inline-block w-fit rounded-full bg-violet/10 px-4 py-1.5 font-mono text-xs font-semibold text-violet">
            Programa de Partners
          </span>
          <h1 className="mx-auto max-w-3xl font-heading text-4xl font-extrabold text-navy md:text-5xl">
            Refiere, gana comisión recurrente y crece con Asiste360
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-gray">
            Súmate al programa de partners: comisión mensual mientras tu cliente esté activo, panel en
            tiempo real y un nivel Embajador sin techo fijo para quienes más aportan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.partners)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="cta_whatsapp_click"
              data-page-source="partners_hero"
              className="rounded-xl bg-gradient-to-br from-violet-2 to-violet px-7 py-4 font-semibold text-white"
            >
              Aplica como Partner
            </a>
          </div>
        </section>

        {/* NIVELES */}
        <section className="bg-blue-tint px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-3xl font-bold text-navy">
              Comisión recurrente por niveles
            </h2>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
              {TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={
                    tier.tone === "top"
                      ? "pro-card-hover flex flex-col rounded-3xl bg-gradient-to-br from-navy to-[#372b70] p-7 text-center text-white shadow-[0_30px_60px_-16px_rgba(0,0,0,0.35)] hover:scale-[1.02] md:-translate-y-2.5"
                      : "glass-light card-hover flex flex-col rounded-3xl p-7 text-center"
                  }
                >
                  {tier.badge && (
                    <span className="mx-auto mb-3 w-fit rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold">
                      {tier.badge}
                    </span>
                  )}
                  <h3 className={`font-heading text-lg font-bold ${tier.tone === "top" ? "" : "text-navy"}`}>
                    {tier.name}
                  </h3>
                  <p
                    className={`mt-3 font-heading text-4xl font-extrabold ${
                      tier.tone === "top" ? "" : "text-violet"
                    }`}
                  >
                    {tier.commission}
                  </p>
                  <p className={`mt-3 text-sm ${tier.tone === "top" ? "text-[#C9CCE5]" : "text-gray"}`}>
                    {tier.requirement}
                  </p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-gray">
              Descuento delegable a tus clientes referidos, escalonado según su plan — hasta 10% en
              Starter, 15% en Pro, 20% en Avanzado. Enterprise se negocia con el equipo.
            </p>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-3xl font-bold text-navy">Cómo funciona</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {STEPS.map((step) => (
                <div key={step.n} className="glass-light card-hover rounded-2xl p-6">
                  <span className="font-heading text-3xl font-extrabold text-violet">{step.n}</span>
                  <h3 className="mt-3 font-heading text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="bg-blue-tint px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-3xl font-bold text-navy">
              Beneficios del programa
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="card-hover flex items-start gap-3 rounded-2xl bg-white p-5">
                  <span className="mt-0.5 text-violet">✔</span>
                  <p className="text-sm text-navy">{benefit}</p>
                </div>
              ))}
            </div>
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
            ¿Listo para sumar Asiste360 a tu portafolio?
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.partners)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="cta_whatsapp_click"
              data-page-source="partners_cta_final"
              className="rounded-xl bg-gradient-to-br from-violet-2 to-violet px-7 py-4 font-semibold text-white"
            >
              Aplica como Partner
            </a>
          </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
