import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_MESSAGES, buildWhatsAppLink } from "@/lib/links";

const NAV_LINKS = [
  { href: "/#producto", label: "Producto" },
  { href: "/#equipo-ia", label: "Equipo IA" },
  { href: "/precios", label: "Precios" },
  { href: "/partners", label: "Partners" },
  { href: "/nosotros", label: "Nosotros" },
];

export function SiteNav({ active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-[color:var(--color-bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative inline-flex h-16 w-[82px] flex-none items-center justify-center">
            {/* aro real del logo: queda fijo; solo una chispa recorre la misma linea, como si la flecha arrastrara el trazo */}
            <Image src="/logo-orbit.png" alt="" aria-hidden="true" fill sizes="82px" className="object-contain" />
            <svg
              viewBox="0 0 235 183"
              className="absolute inset-0 h-full w-full"
              style={{ overflow: "visible" }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="cometTailNav" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6C4CF1" stopOpacity="0" />
                  <stop offset="100%" stopColor="#6C4CF1" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              <g transform="rotate(-18 117 98)">
                <path id="orbitTrackNav" d="M217,98 A100,52 0 1 1 17,98 A100,52 0 1 1 217,98" fill="none" />
                <g className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <path d="M10,0 L2,-4 C-10,-3 -22,-1 -22,0 C-22,1 -10,3 2,4 Z" fill="url(#cometTailNav)" />
                  <circle cx="10" cy="0" r="2.4" fill="#ffffff" opacity="0.9" />
                  <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#orbitTrackNav" xlinkHref="#orbitTrackNav" />
                  </animateMotion>
                </g>
              </g>
            </svg>
            <Image
              src="/logo-mark.png"
              alt="Asiste360"
              fill
              sizes="82px"
              priority
              className="relative object-contain"
            />
          </span>
          <span className="font-heading text-xl font-extrabold text-navy">Asiste360</span>
        </Link>
        <nav className="hidden items-center gap-9 text-[15px] font-semibold text-navy md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.label === active ? "text-violet" : "hover:text-violet transition-colors"}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics="cta_whatsapp_click"
          data-page-source="nav"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-violet-2 to-violet px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_-8px_rgba(108,76,241,0.55)]"
        >
          Habla con nuestro Agente
        </a>
      </div>
    </header>
  );
}
