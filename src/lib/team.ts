import { WHATSAPP_MESSAGES } from "@/lib/links";

export type StatItem = {
  value: string;
  label: string;
  note?: string;
};

export type CaseTag = {
  text: string;
  tone: "amber" | "teal" | "navy" | "violet";
};

export type CaseCard = {
  contact: string;
  channelIcon: "whatsapp" | "instagram" | "messenger" | "email";
  channelLabel: string;
  timeLabel: string;
  headerTag: CaseTag;
  message: string;
  tags: CaseTag[];
};

export type TeamSlug = "sofi" | "leo" | "clara" | "marco";

export type TeamProfile = {
  slug: TeamSlug;
  name: string;
  role: string;
  photo: string;
  copy: string;
  tag: string;
  tagStyle: string;
  whatsapp: string;
  heroDescription: string;
  stats: StatItem[];
  caseHeading: string;
  caseDescription: string;
  caseCard: CaseCard;
};

export const TEAM_PROFILES: TeamProfile[] = [
  {
    slug: "sofi",
    name: "Sofi",
    role: "Recepción y agenda",
    photo: "/team/ana.jpg",
    copy: "Contesto al instante, agendo tu cita, confirmo disponibilidad y precios — y si detecto algo urgente, sé a quién pasárselo.",
    tag: "Incluida en todos los planes",
    tagStyle: "bg-blue-tint text-navy",
    whatsapp: WHATSAPP_MESSAGES.equipoSofi,
    heroDescription:
      "Contesto al instante en cualquier canal, agendo tu cita en el calendario en tiempo real, confirmo disponibilidad y precios — y si detecto algo urgente o fuera de lo común, sé exactamente a quién pasárselo dentro de tu equipo.",
    stats: [
      { value: "100%", label: "de las citas quedan en tu calendario, sin doble reserva" },
      { value: "25%", label: "menos inasistencias con recordatorios automáticos", note: "según estudios sobre recordatorios automatizados" },
      { value: "5 seg", label: "máx. para agrupar tus mensajes -- responde en bloques claros, con emojis, nunca en un bloque gigante" },
    ],
    caseHeading: "Así Sofi agenda y confirma cada cita",
    caseDescription:
      "Revisa la disponibilidad real de tu calendario, confirma el horario con tu cliente y deja programado el recordatorio — sin que nadie tenga que estar pendiente.",
    caseCard: {
      contact: "Miguel Torres",
      channelIcon: "whatsapp",
      channelLabel: "WhatsApp",
      timeLabel: "hace 1 min",
      headerTag: { text: "Cita nueva", tone: "teal" },
      message: "¿Tienen disponibilidad el jueves en la tarde para una consulta general?",
      tags: [
        { text: "Agendado: jueves 3:00 p.m.", tone: "teal" },
        { text: "Servicio: Consulta general", tone: "navy" },
        { text: "Recordatorio: 1 día antes", tone: "violet" },
      ],
    },
  },
  {
    slug: "leo",
    name: "Leo",
    role: "Leads y reactivación",
    photo: "/team/leo.jpg",
    copy: "Califico cada lead nuevo y reviso tu base de contactos dormidos para encontrar oportunidades que nadie está mirando.",
    tag: "Incluido en todos los planes",
    tagStyle: "bg-blue-tint text-navy",
    whatsapp: WHATSAPP_MESSAGES.equipoLeo,
    heroDescription:
      "Califico cada lead nuevo que entra por cualquier canal y lo dejo listo en tu pipeline — y además reviso tu base de contactos dormidos para encontrar oportunidades que ya pagaste por conseguir, pero que nadie está mirando.",
    stats: [
      { value: "100%", label: "de los leads nuevos quedan calificados y en tu pipeline" },
      { value: "45%", label: "más respuesta al recontactar por WhatsApp que por email", note: "según estudios de marketing conversacional" },
      { value: "Toda tu base", label: "revisada automáticamente en busca de oportunidades que nadie está mirando" },
    ],
    caseHeading: "Así Leo reactiva tu base de contactos",
    caseDescription:
      "Detecta leads sin actividad reciente, los recontacta con un mensaje personalizado y marca quién quedó interesado — listo para que tu equipo cierre.",
    caseCard: {
      contact: "Base de contactos",
      channelIcon: "instagram",
      channelLabel: "Instagram",
      timeLabel: "hoy",
      headerTag: { text: "128 leads dormidos", tone: "amber" },
      message: "\"Hola de nuevo — vi que preguntaste por nuestros planes hace un tiempo. ¿Sigue interesándote?\"",
      tags: [
        { text: "Reactivados esta semana: 14", tone: "teal" },
        { text: "Interesados: 6", tone: "violet" },
        { text: "Agendados: 2", tone: "navy" },
      ],
    },
  },
  {
    slug: "clara",
    name: "Clara",
    role: "PQR y satisfacción",
    photo: "/team/sofi.jpg",
    copy: "Recibo cada queja o solicitud, la documento y la escalo según su urgencia — y cierro el ciclo preguntando qué tan satisfecho quedó tu cliente.",
    tag: "Disponible desde Escala",
    tagStyle: "bg-violet text-white",
    whatsapp: WHATSAPP_MESSAGES.equipoClara,
    heroDescription:
      "Recibo cada queja, petición o reclamo que llega por cualquier canal, la documento en tu CRM y la escalo según la urgencia que reporta tu cliente. Cuando el caso se cierra, pregunto qué tan satisfecho quedó — para que ninguna señal de alerta se te escape.",
    stats: [
      { value: "100%", label: "de los casos documentados y con historial completo" },
      { value: "Inmediato", label: "escala a un humano en cuanto detecta que no puede resolverlo, o el cliente lo pide" },
      { value: "32%", label: "de tasa de respuesta en la encuesta, cuando llega justo después de la conversación", note: "dato de referencia (SurveyMonkey)" },
    ],
    caseHeading: "Así Sofi documenta y prioriza cada caso",
    caseDescription:
      "Clasifica el tipo de solicitud, asigna una prioridad según lo que reporta tu cliente y deja todo registrado con fecha, canal e historial — listo para auditar cuando lo necesites.",
    caseCard: {
      contact: "Olivia Zhen",
      channelIcon: "whatsapp",
      channelLabel: "WhatsApp",
      timeLabel: "hace 4 min",
      headerTag: { text: "Prioridad alta", tone: "amber" },
      message: "\"Recibí el pedido incompleto, ya es la segunda vez que pasa.\"",
      tags: [
        { text: "Categoría: Reclamo de producto", tone: "amber" },
        { text: "Escalado a: Soporte N2", tone: "navy" },
        { text: "SLA: 2h restantes", tone: "teal" },
      ],
    },
  },
  {
    slug: "marco",
    name: "Marco",
    role: "Cobranza y acuerdos",
    photo: "/team/marco.jpg",
    copy: "Doy seguimiento a pagos pendientes, registro acuerdos y notifico fechas clave — y te aviso cuando la conversación necesita a un humano.",
    tag: "Disponible desde Escala",
    tagStyle: "bg-violet text-white",
    whatsapp: WHATSAPP_MESSAGES.equipoMarco,
    heroDescription:
      "Doy seguimiento a pagos pendientes por el canal que tu cliente prefiera, registro los acuerdos de pago que se negocian y notifico las fechas clave — y te aviso a ti apenas la conversación necesita a un humano.",
    stats: [
      { value: "100%", label: "de los acuerdos de pago quedan registrados y con seguimiento" },
      { value: "45%", label: "más respuesta en cobranza vía WhatsApp que por email", note: "dato de referencia de la industria" },
      { value: "70-90%", label: "de los casos se resuelven sin intervención humana", note: "benchmark de automatización conversacional" },
    ],
    caseHeading: "Así Marco da seguimiento a un pago pendiente",
    caseDescription:
      "Contacta al cliente con la mora exacta, negocia un acuerdo de pago dentro de los parámetros que definas y programa las notificaciones de cada cuota.",
    caseCard: {
      contact: "Carlos Medina",
      channelIcon: "email",
      channelLabel: "Email",
      timeLabel: "hace 20 min",
      headerTag: { text: "Factura vencida: 5 días", tone: "amber" },
      message: "\"Podemos ponernos al día, ¿es posible pagar en 3 cuotas?\"",
      tags: [
        { text: "Acuerdo: 3 cuotas", tone: "teal" },
        { text: "Próximo pago: 15 sep", tone: "navy" },
        { text: "Estado: Al día", tone: "teal" },
      ],
    },
  },
];

export function getTeamProfile(slug: string): TeamProfile | undefined {
  return TEAM_PROFILES.find((member) => member.slug === slug);
}
