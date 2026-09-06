import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/links";

const CHANNELS = [
  { name: "WhatsApp", color: "#25D366" },
  { name: "Instagram", color: "#C13584" },
  { name: "Messenger", color: "#0866FF" },
  { name: "TikTok", color: "#101010" },
  { name: "Telegram", color: "#29A9EA" },
  { name: "Email", color: "#64748B" },
  { name: "WebChat", color: "#6C4CF1" },
  { name: "Voz IA", color: "#14B8A6" },
  { name: "SMS", color: "#F59E0B" },
];

const FAQ = [
  {
    q: "¿Esto es solo un chatbot de WhatsApp?",
    a: "No. Es un CRM conversacional completo: además de automatizar tus canales, gestionas contactos, pipeline de ventas, calendario, tareas, campañas y reportes desde un solo lugar.",
  },
  {
    q: "¿Cuál es la diferencia entre los planes?",
    a: "Principalmente cuántos canales puedes tener activos a la vez (2 en Starter, hasta ilimitados en Enterprise) y qué tan avanzadas son las herramientas de IA e integraciones.",
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "No — Starter se configura de forma 100% visual. Los planes superiores pueden ser tan simples o tan avanzados como tu equipo necesite.",
  },
  {
    q: "¿Uso WhatsApp oficial?",
    a: "Sí — somos proveedor habilitado por Meta y trabajamos con la API oficial de WhatsApp Business (también con conexión QR).",
  },
  {
    q: "¿Cuánto tarda en implementarse?",
    a: "Lo esencial puede estar funcionando el mismo día. Si necesitas integraciones a medida, el tiempo depende del nivel de personalización — nuestro sistema se conecta con cualquier plataforma que maneje API o MCP (Model Context Protocol).",
  },
  {
    q: "¿Puedo cambiar de plan después?",
    a: "Sí, en cualquier momento, sin perder tu historial ni configuración.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteNav active="Producto" />
      <main className="flex-1">
        {/* HERO */}
        <section className="dotgrid relative overflow-hidden bg-gradient-to-br from-navy via-navy-2 to-[#3a2e80] px-6 py-24 text-center md:px-12">
          <div className="animate-pulse-glow pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(155,123,255,0.32),transparent_70%)] blur-sm" />
          <div className="relative mx-auto max-w-3xl">
            <p className="font-mono text-[13px] font-semibold uppercase tracking-wider text-violet-2">
              CRM conversacional multicanal
            </p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Todos tus canales. Un solo lugar para gestionarlos, automatizarlos y vender más.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#C9CCE5]">
              Asiste360 centraliza WhatsApp, Instagram, Facebook, TikTok, correo y más — con pipeline de
              ventas, calendario y automatización con IA, todo en un solo lugar.
            </p>
            <p className="mt-2 font-heading italic text-[#9FE8C0]">
              Simple para empezar. Imparable para escalar.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="cta_whatsapp_click"
                data-page-source="home_hero"
                className="rounded-xl bg-gradient-to-br from-violet-2 to-violet px-7 py-4 font-semibold text-white shadow-[0_12px_24px_-8px_rgba(108,76,241,0.55)]"
              >
                Habla con nuestro Agente por WhatsApp
              </a>
              <Link
                href="/precios"
                data-analytics="cta_view_pricing"
                className="rounded-xl border border-white/30 px-7 py-4 font-semibold text-white"
              >
                Ver planes y precios
              </Link>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-b border-line px-6 py-8 md:px-12">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4">
            <p className="w-full text-center text-sm font-semibold text-gray">
              Centralizando y automatizando canales de negocios en LatAm
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <span className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white">
                Proveedor habilitado por Meta
              </span>
              {["Salud", "Educación", "E-commerce", "Servicios con cita"].map((chip) => (
                <span key={chip} className="rounded-full bg-blue-tint px-4 py-2 text-sm font-semibold text-navy">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PLANES */}
        <section id="producto" className="px-6 py-20 md:px-12">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            <div className="glass-light rounded-3xl p-9">
              <h2 className="font-heading text-2xl font-bold text-navy">Empieza hoy, a tu ritmo</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-gray">
                Centraliza 2 canales a tu elección, gestiona tus contactos y tu pipeline de ventas en
                minutos, sin depender de nadie.
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-navy">
                <li>✓ Configuración 100% visual</li>
                <li>✓ Autogestión total</li>
                <li>✓ Desde $79/mes</li>
              </ul>
              <Link href="/starter" className="mt-6 inline-block font-semibold text-violet">
                Ver Starter →
              </Link>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-navy to-[#372b70] p-9 text-white">
              <h2 className="font-heading text-2xl font-bold">Escala sin techo, con nuestro equipo detrás</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#C9CCE5]">
                Hasta 6 canales (o ilimitados en Enterprise), CRM completo, agentes de IA a medida e
                integraciones ilimitadas — para negocios que ya saben que quieren crecer.
              </p>
              <ul className="mt-5 space-y-1.5 text-sm">
                <li>✓ Todo lo de Starter</li>
                <li>✓ Más canales a elección</li>
                <li>✓ Agentes de IA a medida</li>
                <li>✓ Integraciones con cualquier sistema (API/MCP)</li>
                <li>✓ Desde $149/mes</li>
              </ul>
              <Link href="/crecimiento" className="mt-6 inline-block font-semibold text-violet-2">
                Ver planes de crecimiento →
              </Link>
            </div>
          </div>
        </section>

        {/* CAPTURA CONVIERTE RETIENE */}
        <section className="bg-blue-tint px-6 py-20 md:px-12">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="font-heading text-3xl font-bold text-navy">Un solo lugar, todo el ciclo de tu cliente</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Captura",
                  text: "Recibe y centraliza leads de los canales que elijas (WhatsApp, Instagram, Facebook y más) en un pipeline de ventas único.",
                },
                {
                  title: "Convierte",
                  text: "Califica automáticamente, responde preguntas frecuentes y agenda la cita o demo directo en tu calendario, sin que nadie tenga que estar pendiente.",
                },
                {
                  title: "Retiene",
                  text: "Da seguimiento, gestiona tareas y campañas, y mantiene el historial y los reportes completos de cada cliente.",
                },
              ].map((step) => (
                <div key={step.title} className="glass-light rounded-2xl p-7 text-left">
                  <h3 className="font-heading text-lg font-bold text-violet">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CANALES */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="font-heading text-3xl font-bold text-navy">
              Elige tus canales, nosotros los centralizamos
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {CHANNELS.map((channel) => (
                <div
                  key={channel.name}
                  className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold text-navy"
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: channel.color }} />
                  {channel.name}
                </div>
              ))}
            </div>
            <p className="mt-6 font-mono text-sm text-gray">
              Cuántos puedes activar: Starter 2 · Pro 4 · Avanzado 6 · Enterprise ilimitados
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-blue-tint px-6 py-20 md:px-12">
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
          <h2 className="font-heading text-3xl font-bold text-white">
            Tu próximo cliente ya te está escribiendo — desde el canal que prefiera
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="cta_whatsapp_click"
              data-page-source="home_cta_final"
              className="rounded-xl bg-gradient-to-br from-violet-2 to-violet px-7 py-4 font-semibold text-white"
            >
              Habla con nuestro Agente por WhatsApp
            </a>
            <Link href="/precios" className="rounded-xl border border-white/30 px-7 py-4 font-semibold text-white">
              Ver planes y precios
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
