import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de Cookies del sitio Asiste360.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de Cookies">
      <LegalSection title="1. Qué son las cookies">
        <p>
          Pequeños archivos que se almacenan en su navegador al visitar nuestro sitio, usados para que
          funcione correctamente, recordar preferencias y medir el desempeño de nuestra publicidad.
        </p>
      </LegalSection>

      <LegalSection title="2. Tipos de cookies que usamos">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Esenciales</strong>: necesarias para el funcionamiento del sitio (navegación,
            seguridad).
          </li>
          <li>
            <strong>Analíticas</strong> — recomendado: Google Analytics 4, para entender cómo se usa el
            sitio y mejorar la experiencia.
          </li>
          <li>
            <strong>Publicitarias</strong> — recomendado: Meta Pixel (medición y optimización de
            campañas en Instagram/Facebook) y Google Ads Conversion Tracking (medición de conversiones en
            campañas pagas), dado que se hace publicidad hacia Colombia y Norteamérica.
          </li>
          <li>
            <strong>Opcional, sin cookies</strong>: dado que ya usamos Cloudflare como DNS/CDN, Cloudflare
            Web Analytics es una capa adicional de analítica que no depende de cookies ni requiere
            consentimiento explícito bajo la mayoría de marcos regulatorios — puede complementar (no
            reemplazar) a GA4.
          </li>
        </ul>
        <p className="text-sm italic text-gray/80">
          Esta es una recomendación a confirmar por el equipo técnico; la lista final debe reflejar
          únicamente lo que realmente quede instalado en el sitio.
        </p>
      </LegalSection>

      <LegalSection title="3. Gestión de cookies">
        <p>
          Usted puede configurar su navegador para bloquear o eliminar cookies. Bloquear cookies
          esenciales puede afectar el funcionamiento del sitio. Al instalar cookies analíticas o
          publicitarias, mostraremos un banner de consentimiento que le permitirá aceptar o rechazar las
          categorías no esenciales antes de que se carguen.
        </p>
      </LegalSection>

      <LegalSection title="4. Cambios">
        <p>Esta política puede actualizarse cuando cambien las herramientas de analítica o publicidad utilizadas.</p>
      </LegalSection>
    </LegalLayout>
  );
}
