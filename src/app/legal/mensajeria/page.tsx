import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Política de Mensajería",
  description: "Política de Mensajería y Consentimiento de Comunicaciones de Asiste360.",
};

export default function MensajeriaPage() {
  return (
    <LegalLayout title="Política de Mensajería y Consentimiento de Comunicaciones">
      <p className="mb-8 text-[15px] leading-relaxed text-gray">
        Aplica a comunicaciones que usted recibe de Asiste360 (como visitante o cliente) y sirve también
        como referencia de las buenas prácticas que sus propios clientes deben ver reflejadas cuando usan
        la plataforma para comunicarse por WhatsApp o SMS.
      </p>

      <LegalSection title="1. Canales de mensajería">
        <p>
          Nos comunicamos con usted, previa su interacción con nuestro agente o el envío de un
          formulario, a través de WhatsApp (como <strong>proveedor habilitado por Meta</strong>, usando
          la API oficial de WhatsApp Business), correo electrónico, y —si usted lo solicita o interactúa
          por ese canal— SMS.
        </p>
      </LegalSection>

      <LegalSection title="2. Consentimiento">
        <p>
          Al escribirle a nuestro Agente por WhatsApp, completar un formulario en el sitio, o registrarse
          en un plan, usted consiente recibir mensajes relacionados con su solicitud, la demo o cita
          agendada, y comunicación comercial de Asiste360. Para SMS y campañas de mensajería masiva, el
          consentimiento es explícito e independiente del uso general de la plataforma.
        </p>
      </LegalSection>

      <LegalSection title="3. Frecuencia y tipo de mensajes">
        <p>
          Mensajes transaccionales (confirmaciones de cita, respuestas a su consulta) y, si usted lo
          permite, mensajes comerciales (novedades, promociones). La frecuencia varía según su
          interacción.
        </p>
      </LegalSection>

      <LegalSection title="4. Cómo darse de baja">
        <p>
          Puede dejar de recibir mensajes comerciales en cualquier momento respondiendo{" "}
          <strong>&quot;STOP&quot;</strong> o <strong>&quot;BAJA&quot;</strong> en la conversación, o
          escribiendo a{" "}
          <a href="mailto:info@solucioneshys.com" className="font-semibold text-violet underline">
            info@solucioneshys.com
          </a>
          . Las comunicaciones estrictamente necesarias para prestar un servicio contratado (ej.
          facturación) no están sujetas a esta baja mientras el servicio esté activo.
        </p>
      </LegalSection>

      <LegalSection title="5. Cumplimiento con políticas de terceros">
        <p>
          Como proveedor habilitado por Meta, cumplimos las políticas de mensajería comercial de WhatsApp
          Business. Para destinatarios en Estados Unidos y Canadá, buscamos alinear nuestras prácticas de
          consentimiento y baja con los estándares usuales de mensajería comercial en esos países (p. ej.
          opt-in claro y mecanismo de opt-out visible).
        </p>
        <p className="text-sm italic text-gray/80">
          Esta sección debe validarse con un abogado si Asiste360 empieza a enviar mensajería masiva —no
          solo conversacional— hacia números de EE.UU./Canadá, dado que regulaciones como el TCPA imponen
          requisitos adicionales de consentimiento por escrito.
        </p>
      </LegalSection>

      <LegalSection title="6. Responsabilidad de nuestros clientes">
        <p>
          Si usted es cliente de Asiste360 y usa la plataforma para comunicarse con sus propios
          contactos, usted es responsable de obtener el consentimiento adecuado de esos contactos y de
          cumplir la normativa de mensajería aplicable a su propio negocio y ubicación.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
