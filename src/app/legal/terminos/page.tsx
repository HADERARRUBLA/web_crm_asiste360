import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso",
  description: "Términos y Condiciones de Uso de la plataforma Asiste360.",
};

export default function TerminosPage() {
  return (
    <LegalLayout title="Términos y Condiciones de Uso">
      <LegalSection title="1. Aceptación de los términos">
        <p>
          Al acceder a este sitio o contratar cualquier plan de Asiste360, operado por H&amp;S
          Soluciones y Servicios Integrales (NIT 900.413.035, Medellín, Colombia), usted acepta estos
          Términos y Condiciones.
        </p>
      </LegalSection>

      <LegalSection title="2. Elegibilidad">
        <p>
          Debe ser mayor de 18 años y tener capacidad legal para contratar. Si se registra en nombre de
          una empresa, usted declara tener la autoridad para vincularla a estos términos. Nos reservamos
          el derecho de rechazar el servicio a cualquier persona.
        </p>
      </LegalSection>

      <LegalSection title="3. Descripción del servicio">
        <p>
          Asiste360 es una plataforma de CRM conversacional multicanal (WhatsApp, Instagram, Facebook
          Messenger, TikTok, Telegram, Email, WebChat, llamadas de voz con IA y SMS) que permite
          centralizar canales, automatizar conversaciones con IA, gestionar contactos, pipeline de
          ventas, calendario, tareas, campañas y reportes. El alcance funcional exacto varía según el
          plan contratado (Starter, Pro, Avanzado, Enterprise), según se describe en{" "}
          <Link href="/precios" className="font-semibold text-violet underline">
            /precios
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="4. Planes, facturación y permanencia">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Los planes Starter, Pro y Avanzado se facturan mensual o anualmente, en dólares (USD),{" "}
            <strong>sin permanencia mínima</strong> — usted puede cancelar en cualquier momento.
          </li>
          <li>
            El plan Enterprise se acuerda de forma personalizada; cualquier permanencia se define por
            escrito entre las partes.
          </li>
          <li>El pago anual equivale a 10 meses de suscripción, con 2 meses adicionales sin costo.</li>
          <li>
            La facturación mensual se cobra en la fecha aniversario de su suscripción (o la fecha más
            cercana disponible ese mes).
          </li>
          <li>
            Cambios de plan (upgrade o downgrade) pueden solicitarse en cualquier momento; se facturan
            según las condiciones vigentes al momento del cambio, aplicándose desde el siguiente ciclo de
            cobro en caso de downgrade.
          </li>
          <li>
            Los usuarios adicionales a los incluidos en cada plan se facturan por bloques, según las
            tarifas publicadas en /precios.
          </li>
          <li>
            Usted autoriza el cobro recurrente a su método de pago registrado y es responsable de
            mantenerlo vigente; la falta de pago puede resultar en la suspensión del servicio, previo
            aviso.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Política de reembolsos">
        <p>
          No se realizan reembolsos por bloqueos o restricciones impuestas por las redes de mensajería
          (por ejemplo, suspensiones de WhatsApp/Meta u operadores de SMS) sobre las cuales Asiste360 no
          tiene control directo. Fuera de ese caso, los reembolsos se evalúan caso por caso a discreción
          de Asiste360.
        </p>
      </LegalSection>

      <LegalSection title="6. Cuenta y responsabilidades del usuario">
        <p>
          Usted es responsable de la veracidad de la información suministrada, de mantener la
          confidencialidad de sus credenciales de acceso y de toda actividad realizada desde su cuenta, y
          de notificarnos de inmediato ante cualquier uso no autorizado. Usted es responsable del uso que
          haga de la plataforma para comunicarse con sus propios clientes — incluyendo el cumplimiento de
          las políticas de mensajería de Meta/WhatsApp y de la normativa aplicable a sus propias
          comunicaciones comerciales.
        </p>
      </LegalSection>

      <LegalSection title="7. Uso aceptable">
        <p>
          No está permitido usar Asiste360 para: enviar spam o mensajes no solicitados; contenido ilegal,
          fraudulento, obsceno, amenazante, difamatorio u ofensivo; suplantar a terceros; ni violar las
          políticas de las plataformas de mensajería conectadas (WhatsApp, Instagram, etc.). El
          incumplimiento puede resultar en suspensión o terminación del servicio sin reembolso, previa
          notificación salvo en casos de infracciones reiteradas o graves.
        </p>
      </LegalSection>

      <LegalSection title="8. Reporte de abuso">
        <p>
          Si detecta un uso indebido de la plataforma por parte de otro usuario (spam, contenido que
          infringe derechos de autor, etc.), puede reportarlo a{" "}
          <a href="mailto:info@solucioneshys.com" className="font-semibold text-violet underline">
            info@solucioneshys.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Propiedad intelectual">
        <p>
          El software, la marca Asiste360, su diseño, contenidos y documentación son propiedad de H&amp;S
          Soluciones y Servicios Integrales. La contratación de un plan no transfiere derechos de
          propiedad intelectual, solo una licencia de uso durante la vigencia del contrato. Los datos y
          contenidos que usted cargue a la plataforma (contactos, conversaciones, configuraciones) siguen
          siendo de su propiedad.
        </p>
      </LegalSection>

      <LegalSection title="10. Uso de nombre y marca con fines de referencia">
        <p>
          Podemos mencionar su nombre comercial y logo como referencia de clientes en nuestro material de
          marketing, salvo que usted nos indique lo contrario por escrito. Esto nunca incluye datos
          personales de sus contactos, conversaciones en la plataforma, ni información de facturación.
        </p>
      </LegalSection>

      <LegalSection title="11. Disponibilidad del servicio">
        <p>
          Haremos esfuerzos comercialmente razonables para mantener el servicio disponible, pero no
          garantizamos disponibilidad ininterrumpida. Mantenimientos programados se informarán con
          antelación cuando sea posible.
        </p>
      </LegalSection>

      <LegalSection title="12. Limitación de responsabilidad">
        <p>
          Asiste360 no será responsable por daños indirectos, incidentales, punitivos o consecuentes, ni
          por lucro cesante o pérdida de datos derivados de un uso indebido del servicio, fallas de
          terceros (incluyendo Meta/WhatsApp, operadores de SMS, proveedores de hosting o pasarelas de
          pago), o causas de fuerza mayor. En cualquier caso, nuestra responsabilidad total no excederá el
          monto pagado por usted en el mes inmediatamente anterior al hecho que la origina.
        </p>
      </LegalSection>

      <LegalSection title="13. Garantías">
        <p>
          El servicio se presta &quot;tal cual&quot; (&quot;as is&quot;), sin garantías expresas o
          implícitas de comerciabilidad o idoneidad para un propósito particular, más allá de lo que la
          ley exija de forma imperativa.
        </p>
      </LegalSection>

      <LegalSection title="14. Indemnización">
        <p>
          Usted acepta indemnizar a H&amp;S Soluciones y Servicios Integrales frente a reclamos, pérdidas
          o gastos (incluyendo honorarios legales razonables) que surjan del incumplimiento de estos
          términos o del uso indebido del servicio por su parte o de las personas autorizadas en su
          cuenta.
        </p>
      </LegalSection>

      <LegalSection title="15. Terminación">
        <p>
          Cualquiera de las partes puede terminar la relación en cualquier momento, dando aviso. H&amp;S
          Soluciones y Servicios Integrales podrá suspender o terminar el servicio de inmediato ante
          incumplimiento grave de estos términos o de las políticas de las plataformas conectadas. Tras
          la terminación, sus datos podrán eliminarse de forma permanente luego de un período razonable
          de gracia. <em>[Definir el período exacto de gracia antes de publicar, ej. 30 días.]</em>
        </p>
      </LegalSection>

      <LegalSection title="16. Modificaciones">
        <p>
          Estos términos pueden actualizarse; los cambios se publicarán en esta página con la fecha de la
          última actualización, con al menos 10 días de antelación para cambios sustanciales antes de que
          entren en vigor.
        </p>
      </LegalSection>

      <LegalSection title="17. Ley aplicable y jurisdicción">
        <p>
          Estos términos se rigen por las leyes de Colombia. Cualquier controversia se someterá a los
          jueces y tribunales competentes de <strong>Medellín, Colombia</strong>, salvo que la ley
          aplicable disponga otra cosa para usuarios ubicados fuera de Colombia.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
