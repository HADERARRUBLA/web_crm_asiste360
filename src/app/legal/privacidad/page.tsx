import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de Tratamiento de Datos Personales de Asiste360.",
};

export default function PrivacidadPage() {
  return (
    <LegalLayout title="Política de Tratamiento de Datos Personales">
      <LegalSection title="1. Responsable del tratamiento">
        <p>
          H&amp;S Soluciones y Servicios Integrales (NIT 900.413.035), con domicilio en Medellín,
          Colombia, operando comercialmente bajo la marca <strong>Asiste360</strong> (&quot;nosotros&quot;,
          &quot;Asiste360&quot;), es responsable del tratamiento de los datos personales que usted
          (&quot;el titular&quot;) nos suministra al usar nuestro sitio web, contratar nuestros planes, o
          interactuar con nuestro agente por WhatsApp u otros canales conectados a la plataforma.
        </p>
      </LegalSection>

      <LegalSection title="2. Normatividad aplicable">
        <p>
          Esta política se rige principalmente por la <strong>Ley 1581 de 2012</strong> y el{" "}
          <strong>Decreto 1377 de 2013</strong> de Colombia (régimen general de protección de datos
          personales — habeas data). Para visitantes o clientes ubicados en Estados Unidos o Canadá,
          aplicamos además estándares razonables de privacidad y consentimiento para comunicaciones (ver
          también la Política de Mensajería).
        </p>
      </LegalSection>

      <LegalSection title="3. Datos que recolectamos">
        <ul className="list-disc space-y-2 pl-5">
          <li>Datos de identificación y contacto: nombre, empresa, correo, teléfono/WhatsApp.</li>
          <li>
            Datos de la conversación con nuestro agente (WhatsApp y demás canales que usted mismo
            active): mensajes, preferencias, intención de compra, citas agendadas.
          </li>
          <li>
            Datos de uso del sitio web y del producto (analítica básica de navegación, si aplica cookies
            — ver Política de Cookies).
          </li>
          <li>
            Datos de facturación asociados a su plan (gestionados a través de nuestra pasarela de pago;
            no almacenamos números de tarjeta directamente).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Finalidades del tratamiento">
        <ul className="list-disc space-y-2 pl-5">
          <li>Responder sus solicitudes, calificar su interés y agendar demos o citas.</li>
          <li>
            Prestar el servicio contratado (CRM conversacional, automatización de canales, pipeline,
            calendario, etc.).
          </li>
          <li>Facturación y gestión de la relación comercial.</li>
          <li>
            Enviar comunicaciones comerciales y de producto (con opción de darse de baja en cualquier
            momento — ver Política de Mensajería).
          </li>
          <li>Mejorar nuestro producto y nuestro sitio web.</li>
          <li>Cumplir obligaciones legales y contractuales.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Derechos del titular">
        <p>
          Como titular de los datos, usted tiene derecho a: conocer, actualizar y rectificar sus datos;
          solicitar prueba de la autorización otorgada; ser informado del uso dado a sus datos; presentar
          quejas ante la autoridad competente (en Colombia, la Superintendencia de Industria y Comercio);
          revocar la autorización y/o solicitar la supresión de sus datos cuando no exista un deber legal
          o contractual que impida eliminarlos; acceder de forma gratuita a sus datos.
        </p>
      </LegalSection>

      <LegalSection title="6. Cómo ejercer sus derechos">
        <p>
          Puede ejercer estos derechos escribiendo a{" "}
          <a href="mailto:info@solucioneshys.com" className="font-semibold text-violet underline">
            info@solucioneshys.com
          </a>
          , indicando su nombre completo, el derecho que desea ejercer y los datos que le identifican.
          Responderemos dentro de los términos establecidos por la ley colombiana (consultas: máx. 10
          días hábiles; reclamos: máx. 15 días hábiles, prorrogable).
        </p>
      </LegalSection>

      <LegalSection title="7. Transferencia internacional y transmisión de datos">
        <p>
          Sus datos son alojados en infraestructura de <strong>Microsoft Azure</strong>, cuyos servidores
          pueden estar ubicados fuera de Colombia. Al usar nuestros servicios, usted acepta esta
          transferencia internacional, la cual realizamos adoptando las garantías razonables exigidas por
          la normatividad colombiana de protección de datos (Decreto 1377 de 2013, artículo 26) para
          asegurar un nivel adecuado de protección en el país de destino.{" "}
          <em>
            [Precisar región/país exacto de los servidores Azure cuando se confirme, para nombrarlo
            explícitamente.]
          </em>{" "}
          Sus datos también pueden ser tratados por proveedores tecnológicos que nos prestan servicios de
          mensajería (Meta/WhatsApp, como proveedor habilitado) y CRM (GoHighLevel), bajo acuerdos de
          confidencialidad y tratamiento de datos.
        </p>
      </LegalSection>

      <LegalSection title="8. Seguridad de la información">
        <p>
          Adoptamos medidas técnicas, humanas y administrativas razonables para proteger sus datos frente
          a acceso no autorizado, pérdida o uso indebido, incluyendo los estándares de seguridad de
          nuestro proveedor de infraestructura en la nube. No vendemos su información personal a
          terceros.
        </p>
      </LegalSection>

      <LegalSection title="9. Vigencia">
        <p>
          Esta política rige a partir de <em>[fecha de publicación del sitio]</em> y podrá actualizarse;
          los cambios se publicarán en esta misma página.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
