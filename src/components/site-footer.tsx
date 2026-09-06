import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-line px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Asiste360" width={28} height={28} className="h-7 w-7 object-contain" />
          <span className="font-heading text-base font-extrabold">Asiste360</span>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
