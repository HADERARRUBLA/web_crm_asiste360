import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/links";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Asiste360 nació de una idea simple: ningún negocio debería perder un cliente solo porque nadie estaba disponible para responder a tiempo.",
};

export default function NosotrosPage() {
  return (
    <>
      <SiteNav active="Nosotros" />
      <main className="flex-1">
        {/* HERO */}
        <section className="dotgrid relative overflow-hidden px-6 py-24 text-center md:px-12">
          <span className="mx-auto mb-5 inline-block w-fit rounded-full bg-amber-100 px-4 py-1.5 font-mono text-xs font-semibold text-amber-800">
            BORRADOR · PENDIENTE VALIDAR
          </span>
          <h1 className="mx-auto max-w-3xl font-heading text-4xl font-extrabold text-navy md:text-5xl">
            Simple para empezar. Imparable para escalar — y lo mismo aplica a cómo construimos esto.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-left text-[15px] leading-relaxed text-gray">
            Asiste360 nació de una idea simple: ningún negocio debería perder un cliente solo porque
            nadie estaba disponible para responder a tiempo. Empezamos resolviendo eso con automatización
            real, hecha a la medida — y en el camino nos dimos cuenta de algo que la mayoría de
            plataformas no resuelve: no todos los negocios necesitan lo mismo. Algunos solo quieren
            encender su asistente hoy y avanzar. Otros están listos para tener un CRM completo,
            multicanal, que escale sin límite. Por eso Asiste360 ofrece exactamente eso: un mismo punto
            de partida, y tantos niveles de crecimiento como tu negocio necesite.
          </p>
        </section>

        {/* DIFERENCIADOR */}
        <section className="bg-blue-tint px-6 py-20 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-navy">
              Vendemos con la misma IA que tú vas a usar
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray">
              El agente que te atendió por WhatsApp es el mismo tipo de tecnología que vas a tener
              funcionando en tu negocio. No te lo contamos: te lo demostramos desde el primer mensaje. Y
              somos proveedor habilitado por Meta, así que trabajas con la vía oficial desde el primer
              día.
            </p>
          </div>
        </section>

        {/* COMPROMISO CON LOS DATOS */}
        <section className="px-6 py-20 text-center md:px-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-heading text-2xl font-bold text-navy">Compromiso con tus datos</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray">
              Tratamos tus datos y los de tus clientes con seriedad, siguiendo la normatividad
              colombiana de protección de datos personales. Puedes ver el detalle completo en nuestra
              política de privacidad.
            </p>
            <Link
              href="/legal/privacidad"
              className="mt-4 inline-block text-sm font-semibold text-violet underline"
            >
              Ver política de privacidad
            </Link>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="dotgrid relative mx-6 my-20 overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-[#372b70] px-8 py-16 text-center md:mx-12">
          <h2 className="font-heading text-3xl font-bold text-white">Conversemos</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="cta_whatsapp_click"
              data-page-source="nosotros_cta_final"
              className="rounded-xl bg-white px-7 py-4 font-semibold text-navy"
            >
              Habla con nuestro Agente por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
