import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_MESSAGES, buildWhatsAppLink } from "@/lib/links";

const NAV_LINKS = [
  { href: "/#producto", label: "Producto" },
  { href: "/precios", label: "Precios" },
  { href: "/partners", label: "Partners" },
  { href: "/nosotros", label: "Nosotros" },
];

export function SiteNav({ active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-[color:var(--color-bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Asiste360" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="font-heading text-lg font-extrabold text-navy">Asiste360</span>
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
