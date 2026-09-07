import type { ReactNode } from "react";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const LEGAL_LINKS = [
  { href: "/legal/privacidad", label: "Privacidad" },
  { href: "/legal/terminos", label: "Términos de Uso" },
  { href: "/legal/cookies", label: "Cookies" },
  { href: "/legal/mensajeria", label: "Mensajería" },
  { href: "/legal/partners", label: "Términos de Partners" },
];

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <section className="border-b border-line bg-blue-tint px-6 py-14 md:px-12">
          <div className="mx-auto max-w-3xl">
            <span className="mb-4 inline-block w-fit rounded-full bg-amber-100 px-3 py-1 font-mono text-[11px] font-semibold text-amber-800">
              BORRADOR · PENDIENTE REVISIÓN LEGAL
            </span>
            <h1 className="font-heading text-3xl font-extrabold text-navy md:text-4xl">{title}</h1>
            <p className="mt-3 text-sm text-gray">
              H&amp;S Soluciones y Servicios Integrales (NIT 900.413.035) — Medellín, Colombia. Este
              contenido es un borrador de trabajo, aún no revisado por un abogado ni publicado
              oficialmente.
            </p>
            <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              {LEGAL_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-violet hover:underline">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section className="px-6 py-14 md:px-12">
          <div className="mx-auto max-w-3xl">{children}</div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="font-heading text-lg font-bold text-navy">{title}</h2>
      <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-gray">{children}</div>
    </div>
  );
}
