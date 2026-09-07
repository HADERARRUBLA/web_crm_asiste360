import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Términos del Programa de Partners",
  description: "Términos del Programa de Partners de Asiste360.",
};

export default function PartnersLegalPage() {
  return (
    <LegalLayout title="Términos del Programa de Partners">
      <LegalSection title="1. Naturaleza del acuerdo">
        <p>
          Al aplicar y ser aceptado como Partner de Asiste360 (operado por H&amp;S Soluciones y Servicios
          Integrales), usted celebra un acuerdo de referidos no exclusivo, revocable, que le permite
          recomendar Asiste360 a través de su link de ventas personal y recibir una comisión recurrente
          por los clientes activos que refiera.
        </p>
      </LegalSection>

      <LegalSection title="2. Niveles y comisión">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Partner</strong>: 30% de comisión recurrente desde el registro.
          </li>
          <li>
            <strong>Partner Pro</strong>: 50% de comisión recurrente, a partir de 20 clientes activos
            referidos.
          </li>
          <li>
            <strong>Embajador</strong>: 70% de comisión recurrente. Sin un umbral numérico fijo de
            clientes — el acceso a este nivel se define por criterio de Asiste360, evaluado caso a caso
            según el desempeño y volumen de referidos del Partner, y queda abierto como campo de
            negociación directa entre el Partner y el equipo comercial.
          </li>
        </ul>
        <p>
          La comisión se calcula sobre el valor efectivamente pagado por el cliente referido, mientras
          dicho cliente permanezca activo y al día en sus pagos.
        </p>
      </LegalSection>

      <LegalSection title="3. Descuentos delegables">
        <p>
          El Partner puede ofrecer, a su discreción, un descuento a los clientes que refiera dentro de
          los siguientes topes: hasta 10% en Starter, 15% en Pro, 20% en Avanzado; en Enterprise el
          descuento se negocia directamente con el equipo comercial de Asiste360.{" "}
          <em>[Rangos propuestos, pendientes de confirmación final.]</em>
        </p>
      </LegalSection>

      <LegalSection title="4. Pago de comisiones">
        <p>Las comisiones se liquidan y pagan mensualmente, sobre los cobros efectivamente recaudados el mes anterior.</p>
      </LegalSection>

      <LegalSection title="5. Onboarding y aprobación">
        <p>
          El registro al programa es abierto, pero la activación del link de ventas está sujeta a la
          validación del perfil del Partner por parte del equipo de Asiste360 durante el proceso de
          onboarding.
        </p>
      </LegalSection>

      <LegalSection title="6. Obligaciones del Partner">
        <p>
          Actuar de buena fe, no hacer representaciones falsas sobre Asiste360, no usar prácticas de spam
          o engañosas para conseguir referidos, y respetar la marca y los materiales oficiales entregados
          en el kit de venta.
        </p>
      </LegalSection>

      <LegalSection title="7. Terminación">
        <p>
          Cualquiera de las partes puede terminar este acuerdo en cualquier momento. Las comisiones ya
          generadas y no pagadas al momento de la terminación se liquidan conforme al ciclo de pago
          mensual vigente. Asiste360 podrá terminar el acuerdo de inmediato ante incumplimiento de estas
          condiciones.
        </p>
      </LegalSection>

      <LegalSection title="8. Confidencialidad">
        <p>
          El Partner se compromete a mantener confidencial la información no pública a la que tenga
          acceso sobre Asiste360 y sus clientes referidos.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
