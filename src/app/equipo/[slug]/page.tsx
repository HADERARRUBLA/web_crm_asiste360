import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { buildWhatsAppLink, GHL_BOOKING_URL } from "@/lib/links";
import { ChannelIcon } from "@/components/channel-icon";
import { CHANNEL_TILES } from "@/lib/channels";
import { TEAM_PROFILES, getTeamProfile, type CaseTag } from "@/lib/team";

const TONE_STYLES: Record<CaseTag["tone"], string> = {
  amber: "bg-[rgba(245,158,11,0.14)] text-[#b45309]",
  teal: "bg-[rgba(20,184,166,0.14)] text-[#0f766e]",
  navy: "bg-blue-tint text-navy",
  violet: "bg-violet/10 text-violet",
};

const STAT_ICONS = [
  <path key="check" d="M9 11l3 3L22 4" />,
  <path key="clock" d="M12 6v6l4 2" />,
  <path key="users" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />,
];

export function generateStaticParams() {
  return TEAM_PROFILES.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamProfile(slug);
  if (!member) return {};
  const title = `${member.name} — ${member.role}`;
  return {
    title,
    description: member.copy,
    openGraph: {
      title: `${title} | Asiste360`,
      description: member.copy,
      type: "profile",
      images: [{ url: member.photo, width: 640, height: 640, alt: member.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Asiste360`,
      description: member.copy,
      images: [member.photo],
    },
  };
}

export default async function EmpleadoIAPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamProfile(slug);
  if (!member) notFound();

  const whatsappHref = buildWhatsAppLink(member.whatsapp);
  const isSofi = member.slug === "sofi";
  const ctaHref = isSofi ? whatsappHref : GHL_BOOKING_URL;
  const ctaLabel = isSofi ? `Chatea en vivo con ${member.name}` : "Agenda una demo";
  const ctaAnalytics = isSofi ? "cta_whatsapp_click" : "demo_booking_click";

  return (
    <>
      <SiteNav active="Producto" />
      <main className="flex-1">
        <section className="px-6 pt-8 pb-4 md:px-12">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/#equipo-ia"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray transition-colors hover:text-violet"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Volver a &ldquo;Tu equipo de IA&rdquo;
            </Link>
          </div>
        </section>

        {/* HERO */}
        <section className="px-6 pb-6 md:px-12">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[400px_1fr] lg:items-stretch">
            {/* photo card */}
            <div className="relative min-h-[420px] overflow-hidden rounded-[28px]">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover"
                priority
              />

              <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-navy">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                {member.name} · activa ahora
              </span>

              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-4 shadow-[0_16px_32px_-18px_rgba(22,27,51,0.35)]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-navy">{member.caseCard.contact}</span>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10.5px] font-semibold ${TONE_STYLES[member.caseCard.headerTag.tone]}`}>
                    {member.caseCard.headerTag.text}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-gray">&ldquo;{member.caseCard.message}&rdquo;</p>
                <p className="mt-2.5 text-[11px] font-medium text-violet">
                  {member.caseCard.channelLabel} · {member.caseCard.timeLabel}
                </p>
              </div>
            </div>

            {/* intro copy */}
            <div className="flex flex-col justify-center">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-wider text-violet">{member.role}</p>
              <h1 className="mt-2.5 font-heading text-3xl font-extrabold leading-tight text-navy md:text-4xl">
                Hola, soy <span className="text-violet">{member.name}</span>, tu {member.role.toLowerCase()}
              </h1>
              <p className="mt-3.5 max-w-xl text-[15px] leading-relaxed text-gray">{member.heroDescription}</p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics={ctaAnalytics}
                  data-page-source={`equipo_${member.slug}_hero`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-violet-2 to-violet px-6 py-3.5 text-sm font-semibold text-white"
                >
                  {ctaLabel}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#como-funciona" className="text-[13px] font-semibold text-violet hover:text-navy">
                  Ver cómo funciona ↓
                </a>
              </div>
              <p className="mt-3 max-w-md text-[12px] leading-relaxed text-gray">
                {isSofi
                  ? "30 días gratis, sin tarjeta."
                  : "Se entrena a la medida de tu empresa -- conversemos sobre tu caso."}
              </p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="px-6 py-8 md:px-12">
          <div className="mx-auto grid max-w-6xl gap-4.5 sm:grid-cols-3">
            {member.stats.map((stat, index) => (
              <div key={stat.label} className="rounded-[20px] bg-blue-tint p-5.5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6c4cf1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {STAT_ICONS[index % STAT_ICONS.length]}
                </svg>
                <p className="mt-2.5 font-heading text-[26px] font-extrabold text-navy">{stat.value}</p>
                <p className="mt-0.5 text-[13px] leading-relaxed text-gray">
                  {stat.label}
                  {stat.note && <span className="font-medium text-violet-2"> · {stat.note}</span>}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROOF */}
        <section id="como-funciona" className="px-6 py-10 md:px-12">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
            {/* case documentation mockup */}
            <div>
              <h2 className="font-heading text-xl font-bold text-navy">
                Así <span className="text-violet">{member.name}</span> documenta cada caso
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-gray">{member.caseDescription}</p>

              <div className="mt-5 rounded-[18px] border border-line bg-white p-4.5 shadow-[0_16px_32px_-20px_rgba(22,27,51,0.25)]">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                    {member.caseCard.contact
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="text-[12.5px] font-bold text-navy">{member.caseCard.contact}</p>
                    <p className="text-[11px] text-gray">
                      {member.caseCard.channelLabel} · {member.caseCard.timeLabel}
                    </p>
                  </div>
                  <span className={`ml-auto inline-flex items-center rounded-full px-2.5 py-1 text-[10.5px] font-semibold ${TONE_STYLES[member.caseCard.headerTag.tone]}`}>
                    {member.caseCard.headerTag.text}
                  </span>
                </div>
                <div className="mt-3 rounded-xl bg-background px-3.5 py-3 text-[12.5px] leading-relaxed text-navy">
                  &ldquo;{member.caseCard.message}&rdquo;
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {member.caseCard.tags.map((tag) => (
                    <span
                      key={tag.text}
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10.5px] font-semibold ${TONE_STYLES[tag.tone]}`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* channels grid */}
            <div>
              <h2 className="font-heading text-xl font-bold text-navy">
                <span className="text-violet">Un solo lugar</span>, todos tus canales
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-gray">
                No importa por dónde llegue el mensaje — {member.name} lo recibe y lo gestiona igual, sin
                que tengas que revisar canal por canal.
              </p>

              <div className="mt-5 rounded-[18px] border border-line bg-white p-5 shadow-[0_16px_32px_-20px_rgba(22,27,51,0.25)]">
                <div className="grid grid-cols-5 gap-3">
                  {CHANNEL_TILES.map((tile) => (
                    <div key={tile.name} className="flex flex-col items-center gap-1.5">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ backgroundColor: tile.color }}
                      >
                        <ChannelIcon name={tile.icon} size={16} />
                      </div>
                      <span className="text-center text-[10px] font-semibold text-gray">{tile.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 py-10 md:px-12">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 rounded-3xl bg-gradient-to-br from-navy to-[#372b70] px-8 py-9 text-white">
            <div>
              <h2 className="font-heading text-xl font-bold">
                {member.slug === "sofi"
                  ? `¿Quieres una ${member.name} trabajando en tu negocio?`
                  : `¿Le damos la bienvenida a ${member.name} en tu equipo?`}
              </h2>
              <p className="mt-1.5 text-[13px] text-[#C9CCE5]">{member.tag}.</p>
            </div>
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics={ctaAnalytics}
              data-page-source={`equipo_${member.slug}_final`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-navy"
            >
              {ctaLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
