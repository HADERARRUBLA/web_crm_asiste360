import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { buildWhatsAppLink, WHATSAPP_MESSAGES, GHL_BOOKING_URL } from "@/lib/links";
import { ChannelIcon, type IconName } from "@/components/channel-icon";
import { CHANNEL_TILES } from "@/lib/channels";
import { TEAM_PROFILES } from "@/lib/team";

const HUB_NODES: { name: string; icon: IconName; color: string; top: string; left: string; shadow: string }[] = [
  { name: "WhatsApp", icon: "whatsapp", color: "#25D366", top: "0%", left: "50%", shadow: "rgba(37,211,102,0.55)" },
  { name: "Instagram", icon: "instagram", color: "#C13584", top: "22.7%", left: "77.3%", shadow: "rgba(193,53,132,0.55)" },
  { name: "Messenger", icon: "messenger", color: "#0866FF", top: "50%", left: "100%", shadow: "rgba(8,102,255,0.55)" },
  { name: "TikTok", icon: "tiktok", color: "#101010", top: "77.3%", left: "77.3%", shadow: "rgba(0,0,0,0.6)" },
  { name: "Telegram", icon: "telegram", color: "#29A9EA", top: "100%", left: "50%", shadow: "rgba(41,169,234,0.55)" },
  { name: "Email", icon: "email", color: "#64748B", top: "77.3%", left: "22.7%", shadow: "rgba(100,116,139,0.5)" },
  { name: "WebChat", icon: "webchat", color: "#6C4CF1", top: "50%", left: "0%", shadow: "rgba(108,76,241,0.55)" },
  { name: "SMS", icon: "sms", color: "#F59E0B", top: "22.7%", left: "22.7%", shadow: "rgba(245,158,11,0.55)" },
];

const FAQ = [
  {
    q: "¿Cuál es la diferencia entre los planes?",
    a: "Principalmente la cantidad de canales que puedes centralizar a la vez: Starter incluye 2, Pro 4, Avanzado 6 y Enterprise ilimitados — tú eliges cuáles, de una lista de 10. Los planes superiores también activan superpoderes de IA e integraciones ilimitadas.",
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "No — Starter se configura de forma 100% visual. Los planes superiores pueden ser tan simples o tan avanzados como tu equipo necesite.",
  },
  {
    q: "¿Cuánto tarda en implementarse?",
    a: "Lo esencial puede estar funcionando el mismo día. Nuestro sistema se conecta con cualquier plataforma que maneje API o MCP, así que los tiempos de integraciones a medida dependen de tu nivel de personalización.",
  },
  {
    q: "¿Es seguro conectar mi WhatsApp Business?",
    a: "Sí — somos proveedor habilitado por Meta, así que trabajas por la vía oficial desde el primer día.",
  },
  {
    q: "¿Puedo cambiar de plan después?",
    a: "Sí, en cualquier momento, sin perder tu historial ni configuración.",
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

export default function HomePage() {
  const sofi = TEAM_PROFILES.find((member) => member.slug === "sofi")!;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <SiteNav active="Producto" />
      <main className="flex-1">
        {/* HERO */}
        <section className="dotgrid relative overflow-hidden bg-gradient-to-br from-navy via-navy-2 to-[#3a2e80] px-6 py-24 text-center md:px-12 lg:py-28 lg:text-left">
          <div className="animate-pulse-glow pointer-events-none absolute -top-40 right-[-100px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(155,123,255,0.32),transparent_70%)] blur-sm lg:left-auto" />
          <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-14 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="font-mono text-[13px] font-semibold uppercase tracking-wider text-violet-2">
                CRM conversacional · multicanal
              </p>
              <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl">
                Todos tus canales. Un solo lugar para gestionarlos, automatizarlos y vender más.
              </h1>
              <p className="mt-6 text-lg font-semibold text-white">
                Menos mensajes sin responder. Más citas agendadas.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-[#C9CCE5]">
                Asiste360 centraliza WhatsApp, Instagram, Facebook y más — con IA que califica, agenda y
                vende, y un CRM completo (pipeline, calendario, tareas, campañas) detrás de cada
                conversación.
              </p>
              <div className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 font-mono text-xs text-[#9FE8C0]">
                canales.conectar() → crm.centralizar() → ventas.crecer()
              </div>
              <div className="mt-3 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 font-mono text-xs text-[#9FE8C0]">
                Lo que no se mide, no se mejora — y aquí se mide todo.
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGES.equipoSofi)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="cta_whatsapp_click"
                  data-page-source="home_hero"
                  className="rounded-xl bg-gradient-to-br from-violet-2 to-violet px-7 py-4 font-semibold text-white shadow-[0_12px_24px_-8px_rgba(108,76,241,0.55)]"
                >
                  Contrata a Sofi, tu primera empleada IA →
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

            {/* HUB VISUAL: canales convergiendo hacia el CRM */}
            <div className="hidden flex-none flex-col items-center lg:flex">
              <div className="relative h-[320px] w-[320px]">
              <svg viewBox="0 0 320 320" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="hub-line" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9B7BFF" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#9B7BFF" stopOpacity="0.55" />
                  </linearGradient>
                </defs>
                {HUB_NODES.map((node) => (
                  <line
                    key={node.name}
                    x1={(parseFloat(node.left) / 100) * 320}
                    y1={(parseFloat(node.top) / 100) * 320}
                    x2={160}
                    y2={160}
                    stroke="url(#hub-line)"
                    strokeWidth="1.5"
                  />
                ))}
                {/* señal viajando de cada canal hacia el centro, en bucle */}
                {HUB_NODES.map((node, i) => {
                  const x1 = (parseFloat(node.left) / 100) * 320;
                  const y1 = (parseFloat(node.top) / 100) * 320;
                  return (
                    <circle key={`${node.name}-dot`} r="3" fill="#fff">
                      <animateMotion
                        dur="2.6s"
                        repeatCount="indefinite"
                        begin={`${i * 0.3}s`}
                        path={`M${x1},${y1} L160,160`}
                      />
                    </circle>
                  );
                })}
              </svg>

              <div className="animate-spin-slow absolute left-1/2 top-1/2 h-28 w-28 rounded-full blur-[2px] [background:conic-gradient(from_0deg,rgba(155,123,255,0.5),rgba(108,76,241,0)_60%,rgba(155,123,255,0.5)_100%)]" />

              <div className="glass-light absolute left-1/2 top-1/2 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-[0_0_50px_rgba(155,123,255,0.5)]">
                <span className="font-heading text-xl font-extrabold text-navy">360</span>
              </div>

              {HUB_NODES.map((node) => (
                <div
                  key={node.name}
                  className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/25"
                  style={{ top: node.top, left: node.left, background: node.color, boxShadow: `0 8px 20px -6px ${node.shadow}` }}
                  title={node.name}
                >
                  <ChannelIcon name={node.icon} size={19} />
                </div>
              ))}
              </div>

              {/* Preview: Sofi respondiendo en vivo -- agente real en produccion */}
              <div className="relative z-10 mt-4 w-[260px] rounded-2xl bg-white/95 p-4 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-navy">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                    Sofi · activa ahora
                  </span>
                  <span className="inline-flex items-center rounded-full bg-[rgba(20,184,166,0.14)] px-2 py-0.5 text-[10px] font-semibold text-[#0f766e]">
                    {sofi.caseCard.headerTag.text}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-gray">
                  &ldquo;{sofi.caseCard.message}&rdquo;
                </p>
                <p className="mt-2 text-[11px] font-medium text-violet">
                  {sofi.caseCard.channelLabel} · {sofi.caseCard.timeLabel}
                </p>
              </div>
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
                <span key={chip} className="chip-hover rounded-full bg-blue-tint px-4 py-2 text-sm font-semibold text-navy">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* BAJO EL CAPO */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="text-center font-mono text-[13px] font-semibold uppercase tracking-wider text-violet">
              Bajo el capó
            </p>
            <h2 className="mt-3 text-center font-heading text-3xl font-bold text-navy md:text-4xl">
              Un CRM completo, no solo una bandeja de chats
            </h2>

            {/* tarjeta de IA — usa todo el ancho de la página */}
            <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy to-[#372b70] p-8 md:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-lg">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 font-mono text-[11px] font-semibold text-[#9FE8C0]">
                    IA · TIEMPO REAL
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold text-white md:text-2xl">
                    IA conversacional que califica y vende
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#C9CCE5]">
                    Responde, agenda y crea la oportunidad automáticamente — y esa cita entra sola a tu
                    calendario y tu pipeline. Todo lo que ves abajo se actualiza solo, en tiempo real.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[420px] lg:flex-none">
                  {[
                    { title: "10 canales", text: "En un solo lugar" },
                    { title: "100% visual", text: "Sin código para empezar" },
                    { title: "API · MCP", text: "Conecta cualquier sistema" },
                    { title: "Meta", text: "Proveedor habilitado" },
                  ].map((stat) => (
                    <div
                      key={stat.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center sm:text-left"
                    >
                      <p className="font-heading text-base font-bold text-white">{stat.title}</p>
                      <p className="mt-1 text-[11px] leading-snug text-[#C9CCE5]">{stat.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-[220px_1fr_1fr] lg:items-end">
                {/* mini mockup: chat — protagonista, se reproduce en bucle */}
                <div className="mx-auto w-[220px] rounded-[28px] bg-[#0B0D1A] p-2 shadow-[0_24px_48px_-14px_rgba(0,0,0,0.6)] lg:mx-0">
                  <div className="overflow-hidden rounded-[22px] bg-white">
                    <div className="flex items-center gap-2 bg-navy px-3 py-2.5">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-violet-2 font-heading text-[10px] font-bold text-white">
                        A
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-white">Agente Asiste360</div>
                        <div className="text-[9px] text-[#9CA3C4]">en línea</div>
                      </div>
                    </div>
                    <div className="flex h-[220px] flex-col gap-1.5 bg-blue-tint p-3">
                      <div className="demo-msg-1 ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-violet px-2.5 py-1.5 text-[10px] text-white">
                        Hola, quiero agendar una cita
                      </div>
                      <div className="demo-typing-1 flex w-fit items-center gap-1 rounded-xl rounded-tl-sm bg-white px-2.5 py-2 shadow-sm">
                        <span className="dot-bounce h-1 w-1 rounded-full bg-line" style={{ animationDelay: "0s" }} />
                        <span className="dot-bounce h-1 w-1 rounded-full bg-line" style={{ animationDelay: "0.15s" }} />
                        <span className="dot-bounce h-1 w-1 rounded-full bg-line" style={{ animationDelay: "0.3s" }} />
                      </div>
                      <div className="demo-msg-2 max-w-[88%] rounded-xl rounded-tl-sm bg-white px-2.5 py-1.5 text-[10px] shadow-sm">
                        ¡Claro! ¿Qué día te queda mejor?
                      </div>
                      <div className="demo-msg-3 ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-violet px-2.5 py-1.5 text-[10px] text-white">
                        El jueves en la tarde
                      </div>
                      <div className="demo-typing-2 flex w-fit items-center gap-1 rounded-xl rounded-tl-sm bg-white px-2.5 py-2 shadow-sm">
                        <span className="dot-bounce h-1 w-1 rounded-full bg-line" style={{ animationDelay: "0s" }} />
                        <span className="dot-bounce h-1 w-1 rounded-full bg-line" style={{ animationDelay: "0.15s" }} />
                        <span className="dot-bounce h-1 w-1 rounded-full bg-line" style={{ animationDelay: "0.3s" }} />
                      </div>
                      <div className="demo-msg-4 max-w-[90%] rounded-xl rounded-tl-sm bg-white px-2.5 py-1.5 text-[9px] text-gray shadow-sm">
                        Listo, quedó agendada y registrada en tu pipeline
                      </div>
                    </div>
                  </div>
                </div>

                {/* mini mockup: pipeline de servicios — con movimiento ya registrado */}
                <div className="rounded-2xl bg-white p-4 shadow-[0_20px_40px_-14px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-navy">Tu pipeline</span>
                    <span className="rounded-full bg-blue-tint px-2 py-0.5 font-mono text-[8.5px] text-violet">
                      AUTO-SYNC
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {[
                      { stage: "Nuevo lead", clients: ["Carlos", "Sofía", "Diego"] },
                      { stage: "Contactado", clients: ["Lucía", "Andrés"] },
                      { stage: "Cita agendada", clients: ["Pedro", "Valentina"] },
                      { stage: "Cliente", clients: ["María", "Camilo"] },
                    ].map((col) => (
                      <div key={col.stage} className="flex flex-col gap-1">
                        <span className="text-center text-[7px] font-semibold uppercase leading-tight text-gray">
                          {col.stage}
                        </span>
                        <div className="flex flex-col gap-1">
                          {col.clients.map((name) => (
                            <span
                              key={name}
                              className="rounded bg-blue-tint px-1 py-1.5 text-center text-[7px] font-semibold text-navy"
                            >
                              {name}
                            </span>
                          ))}
                          {col.stage === "Cita agendada" && (
                            <span className="demo-pipeline-card rounded bg-gradient-to-br from-violet-2 to-violet px-1 py-1.5 text-center text-[7px] font-semibold text-white">
                              Ana
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* mini mockup: calendario — con citas ya registradas */}
                <div className="rounded-2xl bg-white p-4 shadow-[0_20px_40px_-14px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-navy">Tu calendario</span>
                    <span className="rounded-full bg-blue-tint px-2 py-0.5 font-mono text-[8.5px] text-violet">
                      AUTO-SYNC
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-[16px_repeat(5,1fr)] gap-1 text-center font-mono text-[8px] font-semibold text-gray">
                    <span></span>
                    <span>LUN</span>
                    <span>MAR</span>
                    <span>MIÉ</span>
                    <span>JUE</span>
                    <span>VIE</span>
                  </div>
                  {(
                    [
                      { day: "9", cells: [{ name: "Carlos", color: "teal", animated: false }, null, null, null, null] },
                      {
                        day: "11",
                        cells: [null, { name: "Lucía", color: "amber", animated: false }, null, null, { name: "Sofía", color: "sky", animated: false }],
                      },
                      { day: "1", cells: [null, null, { name: "Pedro", color: "pink", animated: false }, null, null] },
                      { day: "3", cells: [null, null, null, { name: "Ana", color: "violet", animated: true }, null] },
                    ] as { day: string; cells: ({ name: string; color: string; animated: boolean } | null)[] }[]
                  ).map((row) => (
                    <div key={row.day} className="mt-1 grid grid-cols-[16px_repeat(5,1fr)] gap-1">
                      <span className="self-center text-[8px] text-gray">{row.day}</span>
                      {row.cells.map((cell, i) => {
                        if (!cell) return <div key={i} className="h-7 rounded bg-blue-tint" />;
                        if (cell.animated) {
                          return (
                            <div
                              key={i}
                              className="demo-calendar-slot flex h-7 flex-col items-center justify-center rounded bg-gradient-to-br from-violet-2 to-violet leading-none text-white"
                            >
                              <span className="text-[7px] font-bold">{cell.name}</span>
                              <span className="text-[6px]">3:00pm</span>
                            </div>
                          );
                        }
                        const styles: Record<string, string> = {
                          teal: "bg-teal-500/15 border border-teal-500/40 text-teal-700",
                          amber: "bg-amber-500/15 border border-amber-500/40 text-amber-700",
                          sky: "bg-sky-500/15 border border-sky-500/40 text-sky-700",
                          pink: "bg-pink-500/15 border border-pink-500/40 text-pink-700",
                        };
                        return (
                          <div key={i} className={`flex h-7 items-center justify-center rounded text-[6.5px] font-bold ${styles[cell.color]}`}>
                            {cell.name}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                  <p className="mt-3 text-[10px] text-gray">
                    Jue · 3:00pm — <span className="font-semibold text-violet">Ana (WhatsApp)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* tarjetas de apoyo — también a todo el ancho */}
            <div className="dotgrid-navy mt-5 rounded-3xl bg-blue-tint/40 p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  {
                    title: "Pipeline de ventas",
                    text: "Sigue cada oportunidad de principio a fin.",
                    icon: <path d="M4 5h16l-6 8v6l-4-2v-4L4 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
                  },
                  {
                    title: "Calendario & tareas",
                    text: "Agenda citas y da seguimiento sin fricción.",
                    icon: (
                      <>
                        <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.4" />
                        <path d="M4 9.5h16M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      </>
                    ),
                  },
                  {
                    title: "Constructor de flujos",
                    text: "Automatiza cualquier proceso, sin código.",
                    icon: <path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
                  },
                  {
                    title: "Integraciones ilimitadas",
                    text: "Se conecta con cualquier sistema que hable API o MCP — incluido tu ERP.",
                    badge: "API · MCP",
                    icon: (
                      <>
                        <path d="M4 17 10 11 14 15 20 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 7h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </>
                    ),
                  },
                  {
                    title: "Bandeja unificada + Campañas + Reportes",
                    text: "Toda la conversación y los números de tu negocio, en un solo lugar.",
                    icon: <path d="M4 4h16v12H8l-4 4V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
                  },
                ].map((card) => (
                  <div key={card.title} className="feature-card rounded-3xl border border-line p-7">
                    <div className="feature-card-watermark text-violet">
                      <svg width="96" height="96" viewBox="0 0 24 24" fill="none">
                        {card.icon}
                      </svg>
                    </div>
                    <div className="feature-card-content">
                      {card.badge ? (
                        <span className="mb-3 inline-block rounded-full bg-blue-tint px-3 py-1 font-mono text-[11px] font-semibold text-violet">
                          {card.badge}
                        </span>
                      ) : (
                        <div className="feature-card-icon flex h-[46px] w-[46px] items-center justify-center rounded-[13px] text-white">
                          <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                            {card.icon}
                          </svg>
                        </div>
                      )}
                      <h3 className="mt-4 font-heading text-base font-bold text-navy">{card.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-gray">{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* CAPTURA CONVIERTE RETIENE */}
        <section className="bg-blue-tint px-6 py-20 md:px-12">
          <div className="mx-auto max-w-6xl text-center">
            <p className="font-mono text-[13px] font-semibold uppercase tracking-wider text-violet">El ciclo completo</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
              Un solo agente, todo el ciclo de tu cliente
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Captura",
                  text: "Recibe leads desde los canales que elijas — WhatsApp, Instagram, Facebook y más — todos en una sola bandeja.",
                },
                {
                  title: "Convierte",
                  text: "Califica automáticamente, responde preguntas frecuentes y agenda la cita o demo sin que nadie tenga que estar pendiente.",
                },
                {
                  title: "Retiene",
                  text: "Da seguimiento, envía recordatorios y mantiene el historial completo de cada cliente.",
                },
              ].map((step) => (
                <div key={step.title} className="glass-light card-hover rounded-2xl p-7 text-left">
                  <h3 className="font-heading text-lg font-bold text-violet">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REPORTES EN TIEMPO REAL */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="text-center font-mono text-[13px] font-semibold uppercase tracking-wider text-violet">
              Datos, no corazonadas
            </p>
            <h2 className="mt-3 text-center font-heading text-3xl font-bold text-navy md:text-4xl">
              Reportes en tiempo real, sin armar una sola tabla dinamica
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-gray">
              El modulo de Analiticas te muestra como va tu negocio en vivo. ¿Necesitas algo mas
              profundo? Nos conectamos a la API de tu cuenta y construimos el reporte exacto que
              buscas.
            </p>

            <div className="mt-12 space-y-8">
              <div className="dotgrid-navy rounded-3xl bg-blue-tint/40 p-5 md:p-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      title: "Funnel de conversion",
                      text: "Cuantos leads entran, cuantos agendan y cuantos se convierten en cliente, por canal.",
                      icon: <path d="M3 4h18l-7 8v7l-4 2v-9L3 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
                    },
                    {
                      title: "Tiempos de respuesta",
                      text: "Cuanto tarda tu equipo -- o tu agente IA -- en responder, en promedio y por canal.",
                      icon: (
                        <>
                          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </>
                      ),
                    },
                    {
                      title: "Volumen por canal",
                      text: "Cuantos mensajes recibe cada canal, para saber donde enfocar tu inversion.",
                      icon: <path d="M5 19V10M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />,
                    },
                    {
                      title: "Satisfaccion del cliente",
                      text: "Encuestas automaticas despues de cada conversacion resuelta.",
                      icon: <path d="M12 3.5l2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 15.5l-4.6 2.4.9-5.2-3.8-3.7 5.2-.8L12 3.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />,
                    },
                    {
                      title: "Desempeno del equipo",
                      text: "Compara resultados entre agentes humanos y agentes de IA.",
                      icon: (
                        <>
                          <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
                          <circle cx="17" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.3" />
                          <path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                          <path d="M14.5 15c2.3.2 4 2 4 4.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                        </>
                      ),
                    },
                    {
                      title: "Reportes a la medida via API",
                      text: "¿Necesitas algo que no esta en el panel? Nos conectamos a la API de tu cuenta y lo construimos.",
                      icon: (
                        <>
                          <path d="M4 17 10 11 14 15 20 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15 7h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </>
                      ),
                    },
                  ].map((card) => (
                    <div key={card.title} className="feature-card rounded-2xl border border-line p-6">
                      <div className="feature-card-watermark text-violet">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                          {card.icon}
                        </svg>
                      </div>
                      <div className="feature-card-content">
                        <div className="feature-card-icon flex h-10 w-10 items-center justify-center rounded-[11px] text-white">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            {card.icon}
                          </svg>
                        </div>
                        <h3 className="mt-3 font-heading text-base font-bold text-navy">{card.title}</h3>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-gray">{card.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-navy to-[#372b70] p-4 shadow-[0_30px_70px_-30px_rgba(22,27,51,0.55)] md:p-6">
                <div className="mb-5 flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff6159]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 rounded-md bg-white/10 px-3 py-1 font-mono text-[11px] text-white/60">
                    app.asiste360.com/analiticas
                  </span>
                </div>

                <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="font-heading text-[15px] font-bold text-white">
                      Panel de analitica -- todos los canales
                    </p>
                    <p className="mt-0.5 text-[11.5px] text-white/50">
                      Vista ilustrativa -- no corresponde a datos reales de ningun cliente
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-[11.5px] font-medium text-white/80">
                    Ultimos 14 dias
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { label: "Conversaciones atendidas", value: "12,480", trend: "+18%", arrow: "▲" },
                    { label: "Tiempo de respuesta prom.", value: "42 s", trend: "-12%", arrow: "▼" },
                    { label: "Tasa de conversion", value: "34%", trend: "+6%", arrow: "▲" },
                    { label: "Satisfaccion (CSAT)", value: "4.8/5", trend: "+0.3", arrow: "▲" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <p className="text-[11px] font-medium text-white/55">{kpi.label}</p>
                      <p className="mt-2 font-heading text-xl font-bold text-white">{kpi.value}</p>
                      <span className="mt-2 inline-block rounded-full bg-[#0d9488]/25 px-2 py-0.5 text-[11px] font-semibold text-[#6ee7c8]">
                        {kpi.arrow} {kpi.trend}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                    <p className="text-[13px] font-semibold text-white">
                      Conversaciones totales vs. resueltas por IA
                    </p>
                    <p className="mt-0.5 text-[11px] text-white/45">Ultimos 14 dias</p>
                    <svg viewBox="0 0 640 220" className="mt-2 h-[180px] w-full" role="img" aria-label="Grafico de lineas: conversaciones totales y resueltas por IA en los ultimos 14 dias">
                      <line x1="34" y1="194.0" x2="630" y2="194.0" stroke="rgba(255,255,255,0.09)" />
                      <line x1="34" y1="149.5" x2="630" y2="149.5" stroke="rgba(255,255,255,0.09)" />
                      <line x1="34" y1="105.0" x2="630" y2="105.0" stroke="rgba(255,255,255,0.09)" />
                      <line x1="34" y1="60.5" x2="630" y2="60.5" stroke="rgba(255,255,255,0.09)" />
                      <line x1="34" y1="16.0" x2="630" y2="16.0" stroke="rgba(255,255,255,0.09)" />
                      <text x="2" y="197" fill="rgba(255,255,255,0.4)" fontSize="9.5">0</text>
                      <text x="0" y="153" fill="rgba(255,255,255,0.4)" fontSize="9.5">140</text>
                      <text x="0" y="108" fill="rgba(255,255,255,0.4)" fontSize="9.5">280</text>
                      <text x="0" y="64" fill="rgba(255,255,255,0.4)" fontSize="9.5">420</text>
                      <text x="0" y="19" fill="rgba(255,255,255,0.4)" fontSize="9.5">560</text>

                      <path
                        d="M34.0,194.0 L34.0,92.3 L79.8,86.6 L125.7,94.8 L171.5,78.0 L217.4,70.7 L263.2,75.1 L309.1,66.2 L354.9,68.4 L400.8,57.3 L446.6,50.3 L492.5,53.8 L538.3,45.2 L584.2,39.5 L630.0,33.5 L630.0,194.0 Z"
                        fill="#7c5cff"
                        opacity="0.13"
                      />
                      <polyline
                        points="34.0,131.1 79.8,126.0 125.7,128.5 171.5,117.4 217.4,110.7 263.2,112.9 309.1,104.7 354.9,105.3 400.8,96.1 446.6,90.4 492.5,92.9 538.3,85.6 584.2,80.5 630.0,75.8"
                        fill="none"
                        stroke="#0d9488"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="34.0,92.3 79.8,86.6 125.7,94.8 171.5,78.0 217.4,70.7 263.2,75.1 309.1,66.2 354.9,68.4 400.8,57.3 446.6,50.3 492.5,53.8 538.3,45.2 584.2,39.5 630.0,33.5"
                        fill="none"
                        stroke="#7c5cff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="630.0" cy="33.5" r="4" fill="#7c5cff" stroke="#161b33" strokeWidth="1.5" />
                      <circle cx="630.0" cy="75.8" r="4" fill="#0d9488" stroke="#161b33" strokeWidth="1.5" />

                      <line x1="400.8" y1="16" x2="400.8" y2="194" stroke="rgba(255,255,255,0.18)" strokeDasharray="3,3" />
                      <circle cx="400.8" cy="57.3" r="4.5" fill="#7c5cff" stroke="#fff" strokeWidth="1.5" />
                      <circle cx="400.8" cy="96.1" r="4.5" fill="#0d9488" stroke="#fff" strokeWidth="1.5" />
                      <g transform="translate(346,4)">
                        <rect x="0" y="0" width="110" height="42" rx="8" fill="#161b33" stroke="rgba(255,255,255,0.15)" />
                        <text x="10" y="15" fill="rgba(255,255,255,0.6)" fontSize="9">Dia 9</text>
                        <text x="10" y="28" fill="#fff" fontSize="10.5" fontWeight="600">Total: 430</text>
                        <text x="10" y="39" fill="rgba(255,255,255,0.6)" fontSize="9">IA: 308 (72%)</text>
                      </g>
                    </svg>
                    <div className="mt-2 flex flex-wrap gap-4">
                      <span className="flex items-center gap-1.5 text-[11.5px] text-white/70">
                        <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: "#7c5cff" }} />
                        Conversaciones totales
                      </span>
                      <span className="flex items-center gap-1.5 text-[11.5px] text-white/70">
                        <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: "#0d9488" }} />
                        Resueltas por IA
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                    <p className="text-[13px] font-semibold text-white">Mensajes por canal</p>
                    <p className="mt-0.5 text-[11px] text-white/45">Distribucion del periodo</p>
                    <div className="mt-3 flex items-center gap-4">
                      <svg viewBox="0 0 180 180" className="h-[120px] w-[120px] shrink-0" role="img" aria-label="Grafico de dona: distribucion de mensajes por canal">
                        <path d="M90.00,16.00 A74,74 0 1 1 80.73,163.42 L84.23,135.64 A46,46 0 1 0 90.00,44.00 Z" fill="#7c5cff" />
                        <path d="M80.73,163.42 A74,74 0 0 1 16.58,99.27 L44.36,95.77 A46,46 0 0 0 84.23,135.64 Z" fill="#0d9488" />
                        <path d="M16.58,99.27 A74,74 0 0 1 50.35,27.52 L65.35,51.16 A46,46 0 0 0 44.36,95.77 Z" fill="#d97706" />
                        <path d="M50.35,27.52 A74,74 0 0 1 90.00,16.00 L90.00,44.00 A46,46 0 0 0 65.35,51.16 Z" fill="#2563eb" />
                        <text x="90" y="86" textAnchor="middle" fontFamily="var(--font-heading)" fontWeight="700" fill="#fff" fontSize="17">100%</text>
                        <text x="90" y="100" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9">4 canales</text>
                      </svg>
                      <div className="flex flex-col gap-2">
                        {[
                          { name: "WhatsApp", pct: "52%", color: "#7c5cff" },
                          { name: "Instagram", pct: "21%", color: "#0d9488" },
                          { name: "Chat web", pct: "18%", color: "#d97706" },
                          { name: "Otros", pct: "9%", color: "#2563eb" },
                        ].map((c) => (
                          <span key={c.name} className="flex items-center gap-2 text-[11.5px] text-white/75">
                            <span className="h-2.5 w-2.5 shrink-0 rounded-[3px]" style={{ background: c.color }} />
                            {c.name}
                            <b className="ml-auto font-semibold text-white">{c.pct}</b>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                  <p className="text-[13px] font-semibold text-white">Desempeno por agente (IA + humano)</p>
                  <p className="mt-0.5 text-[11px] text-white/45">Conversaciones resueltas -- ultimos 14 dias</p>
                  <svg viewBox="0 0 560 170" className="mt-2 h-[130px] w-full" role="img" aria-label="Grafico de barras: conversaciones resueltas por agente">
                    <line x1="30" y1="146" x2="550" y2="146" stroke="rgba(255,255,255,0.09)" />
                    <rect x="41.0" y="18.9" width="108.0" height="127.1" rx="6" fill="#7c5cff" />
                    <rect x="171.0" y="64.4" width="108.0" height="81.6" rx="6" fill="#0d9488" />
                    <rect x="301.0" y="75.9" width="108.0" height="70.1" rx="6" fill="#d97706" />
                    <rect x="431.0" y="41.1" width="108.0" height="104.9" rx="6" fill="#2563eb" />
                    <text x="95" y="160" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="10">Sofia IA</text>
                    <text x="225" y="160" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="10">Agente Ana</text>
                    <text x="355" y="160" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="10">Agente Luis</text>
                    <text x="485" y="160" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="10">Bot Ventas</text>
                    <g transform="translate(41,-8)">
                      <rect x="0" y="0" width="108" height="38" rx="8" fill="#161b33" stroke="rgba(255,255,255,0.15)" />
                      <text x="10" y="16" fill="#fff" fontSize="10.5" fontWeight="600">486 conversaciones</text>
                      <text x="10" y="29" fill="rgba(255,255,255,0.6)" fontSize="9">Tiempo prom.: 28s</text>
                    </g>
                  </svg>

                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full min-w-[420px] border-collapse text-[12px]">
                      <thead>
                        <tr>
                          <th className="border-b border-white/10 px-2.5 pb-2 text-left text-[10.5px] font-medium uppercase tracking-wide text-white/45">Agente</th>
                          <th className="border-b border-white/10 px-2.5 pb-2 text-left text-[10.5px] font-medium uppercase tracking-wide text-white/45">Conversaciones</th>
                          <th className="border-b border-white/10 px-2.5 pb-2 text-left text-[10.5px] font-medium uppercase tracking-wide text-white/45">Tiempo prom.</th>
                          <th className="border-b border-white/10 px-2.5 pb-2 text-left text-[10.5px] font-medium uppercase tracking-wide text-white/45">CSAT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: "Sofia", ia: true, color: "#7c5cff", conv: "486", time: "28s", csat: "4.9/5" },
                          { name: "Bot Ventas", ia: true, color: "#2563eb", conv: "401", time: "35s", csat: "4.7/5" },
                          { name: "Ana", ia: false, color: "#0d9488", conv: "312", time: "58s", csat: "4.8/5" },
                          { name: "Luis", ia: false, color: "#d97706", conv: "268", time: "64s", csat: "4.6/5" },
                        ].map((row) => (
                          <tr key={row.name} className="border-b border-white/[0.06] last:border-0">
                            <td className="px-2.5 py-2 text-white/85">
                              <span className="mr-1.5 inline-block h-2 w-2 rounded-full" style={{ background: row.color }} />
                              {row.name}
                              {row.ia && (
                                <span className="ml-2 rounded-full bg-[#e9e3ff] px-1.5 py-0.5 text-[9.5px] font-semibold text-navy">
                                  IA
                                </span>
                              )}
                            </td>
                            <td className="px-2.5 py-2 text-white/85">{row.conv}</td>
                            <td className="px-2.5 py-2 text-white/85">{row.time}</td>
                            <td className="px-2.5 py-2 text-white/85">{row.csat}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="mt-4 border-t border-white/10 pt-4 text-[10px] leading-relaxed text-[#8B90B8]">
                  Vista ilustrativa -- no corresponde a datos reales de ningun cliente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TU EQUIPO DE IA */}
        <section id="equipo-ia" className="border-y-2 border-violet bg-blue-tint px-6 py-20 md:px-12">
          <div className="mx-auto max-w-6xl text-center">
            <p className="font-mono text-[13px] font-semibold uppercase tracking-wider text-violet">Tu equipo de IA</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">No es un bot. Es tu nuevo equipo.</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-gray">
              Cuatro especialistas de IA que ya saben cómo se hacen las cosas en tu negocio — desde el
              primer mensaje hasta el último pago.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM_PROFILES.map((member) => (
                <div
                  key={member.slug}
                  className="card-hover overflow-hidden rounded-[22px] border border-violet/10 bg-white text-left shadow-[0_16px_32px_-22px_rgba(22,27,51,0.25)]"
                >
                  <Link href={`/equipo/${member.slug}`} className="block">
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                      {member.slug === "sofi" ? (
                        <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10.5px] font-semibold text-teal-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                          Pruébala en vivo
                        </span>
                      ) : (
                        <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10.5px] font-semibold text-violet">
                          <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                          Agenda demo
                        </span>
                      )}
                    </div>

                    <div className="bg-navy px-4.5 py-3">
                      <h3 className="font-heading text-lg font-bold text-white">{member.name}</h3>
                      <p className="mt-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-violet-2">
                        {member.role}
                      </p>
                    </div>
                  </Link>

                  <div className="px-4.5 pt-4 pb-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-gray">Estado</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-[11px] font-semibold text-teal-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                        Activa
                      </span>
                    </div>
                    <p className="mt-2.5 text-[12.5px] leading-relaxed text-gray">&ldquo;{member.copy}&rdquo;</p>
                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#25D366" }} />
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#C13584" }} />
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#0866FF" }} />
                      <span className="h-2.5 w-2.5 rounded-full bg-violet" />
                      <span className="ml-1 text-[10.5px] text-gray">y más canales</span>
                    </div>
                    <span className={`mt-3 inline-block rounded-full px-2.5 py-1 text-[10.5px] font-semibold ${member.tagStyle}`}>
                      {member.tag}
                    </span>
                    <Link
                      href={`/equipo/${member.slug}`}
                      className="mt-3.5 block rounded-xl border border-violet/30 px-4 py-2.5 text-center text-[12.5px] font-semibold text-violet transition-colors hover:bg-blue-tint"
                    >
                      Ver perfil completo →
                    </Link>
                    <a
                      href={member.slug === "sofi" ? buildWhatsAppLink(member.whatsapp) : GHL_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics={member.slug === "sofi" ? "cta_whatsapp_click" : "demo_booking_click"}
                      data-page-source={`home_equipo_${member.slug}`}
                      className="mt-2 block rounded-xl bg-gradient-to-br from-violet-2 to-violet px-4 py-2.5 text-center text-[12.5px] font-semibold text-white"
                    >
                      {member.slug === "sofi" ? `Chatea en vivo con ${member.name} →` : "Agenda una demo"}
                    </a>
                    <p className="mt-1.5 text-center text-[10.5px] text-gray">
                      {member.slug === "sofi" ? "30 días gratis, sin tarjeta" : "Se entrena a la medida de tu empresa"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANES */}
        <section id="producto" className="px-6 py-20 md:px-12">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            <div className="glass-light card-hover rounded-3xl p-9">
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
            <div className="card-hover rounded-3xl bg-gradient-to-br from-navy to-[#372b70] p-9 text-white">
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

        {/* DEMO EN VIVO */}
        <section className="px-6 py-20 text-center md:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-[13px] font-semibold uppercase tracking-wider text-violet">
              Pruébalo ahora mismo
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
              No te lo contamos, te lo mostramos
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="glass-light card-hover rounded-3xl p-10">
                <h3 className="font-heading text-xl font-bold text-navy">Recorrido interactivo</h3>
                <p className="mt-2 text-sm text-gray">Explora el producto por tu cuenta, sin registrarte.</p>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="cta_whatsapp_click"
                  data-page-source="home_demo_tour"
                  className="mt-6 inline-block rounded-xl border border-line px-6 py-3 font-semibold text-navy"
                >
                  Ver recorrido interactivo
                </a>
              </div>
              <div className="glass-light card-hover rounded-3xl p-10">
                <h3 className="font-heading text-xl font-bold text-navy">O pruébalo tú mismo, ahora</h3>
                <p className="mt-2 text-sm text-gray">Escríbele al agente real y mira cómo responde.</p>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="cta_whatsapp_click"
                  data-page-source="home_demo_self"
                  className="mt-6 inline-block rounded-xl bg-gradient-to-br from-violet-2 to-violet px-6 py-3 font-semibold text-white"
                >
                  Habla con nuestro Agente por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CANALES */}
        <section className="dotgrid relative mx-6 my-6 overflow-hidden rounded-[32px] bg-navy px-6 py-16 md:mx-12 md:px-12">
          <div className="animate-pulse-glow pointer-events-none absolute -left-20 -top-24 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(155,123,255,0.22),transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="font-mono text-[13px] font-semibold uppercase tracking-wider text-violet-2">
              Tú decides dónde te contactan
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-white md:text-3xl">
              Elige tus canales, nosotros los centralizamos
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#C9CCE5]">
              Cada plan incluye una cuota de canales a tu elección de esta lista — no una lista fija.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {CHANNEL_TILES.map((tile) => (
                <div key={tile.name} className="w-[92px] text-center text-white">
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 transition-transform duration-200 hover:scale-110"
                    style={{ background: tile.color, boxShadow: `0 8px 20px -6px ${tile.shadow}` }}
                  >
                    <ChannelIcon name={tile.icon} size={22} />
                  </div>
                  <div className="mt-3 text-xs leading-tight">{tile.name}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">Starter: 2 canales</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">Pro: 4 canales</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">Avanzado: 6 canales</span>
              <span className="rounded-full bg-gradient-to-br from-violet-2 to-violet px-4 py-2 text-sm font-semibold text-white">
                Enterprise: ilimitados
              </span>
            </div>
          </div>
        </section>

        {/* INDUSTRIAS */}
        <section className="px-6 py-20 text-center md:px-12">
          <p className="font-mono text-[13px] font-semibold uppercase tracking-wider text-violet">
            Hecho para negocios como el tuyo
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-navy md:text-3xl">Ideal para tu industria</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Salud y clínicas", "Educación y academias", "E-commerce", "Servicios con cita", "Automotriz"].map(
              (chip) => (
                <span key={chip} className="chip-hover rounded-full border border-line px-4 py-2 text-sm font-semibold text-navy">
                  {chip}
                </span>
              ),
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-blue-tint px-6 py-20 md:px-12">
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
