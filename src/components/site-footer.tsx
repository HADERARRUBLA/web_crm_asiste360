import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-line px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="group flex items-center gap-2.5">
          <span className="relative inline-flex h-12 w-[62px] flex-none items-center justify-center">
            <Image src="/logo-orbit.png" alt="" aria-hidden="true" fill sizes="62px" className="object-contain" />
            <svg
              viewBox="0 0 235 183"
              className="absolute inset-0 h-full w-full"
              style={{ overflow: "visible" }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="cometTailFooter" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6C4CF1" stopOpacity="0" />
                  <stop offset="100%" stopColor="#6C4CF1" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              <g transform="rotate(-18 117 98)">
                <path id="orbitTrackFooter" d="M217,98 A100,52 0 1 1 17,98 A100,52 0 1 1 217,98" fill="none" />
                <g className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <path d="M10,0 L2,-4 C-10,-3 -22,-1 -22,0 C-22,1 -10,3 2,4 Z" fill="url(#cometTailFooter)" />
                  <circle cx="10" cy="0" r="2.4" fill="#ffffff" opacity="0.9" />
                  <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#orbitTrackFooter" xlinkHref="#orbitTrackFooter" />
                  </animateMotion>
                </g>
              </g>
            </svg>
            <Image
              src="/logo-mark.png"
              alt="Asiste360"
              fill
              sizes="62px"
              className="relative object-contain"
            />
          </span>
          <span className="font-heading text-lg font-extrabold">Asiste360</span>
        </div>
        <div className="grid grid-cols-3 gap-10 text-sm text-gray">
          <div className="flex flex-col gap-2.5">
            <div className="font-semibold text-navy">Producto</div>
            <Link href="/starter">Starter</Link>
            <Link href="/crecimiento">Planes de crecimiento</Link>
            <Link href="/precios">Precios</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="font-semibold text-navy">Compañía</div>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/partners">Partners</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="font-semibold text-navy">Legal</div>
            <Link href="/legal/privacidad">Privacidad</Link>
            <Link href="/legal/terminos">Términos</Link>
            <Link href="/legal/cookies">Cookies</Link>
            <Link href="/legal/mensajeria">Mensajería</Link>
            <Link href="/legal/partners">Términos de Partners</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
