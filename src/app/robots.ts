import type { MetadataRoute } from "next";

// Política: permitimos tanto los bots de búsqueda/respuesta de IA (para
// aparecer citados en respuestas en tiempo real) como los de entrenamiento
// (para que los modelos "conozcan" Asiste360 por defecto). Todo el contenido
// del sitio es promocional y está pensado para difundirse — no hay nada que
// proteger bloqueando el acceso. Decisión tomada explícitamente con el
// usuario (no es el valor por defecto de Next.js).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Bots de búsqueda/respuesta en tiempo real
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "DuckAssistBot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      // Bots/tokens de entrenamiento
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
    ],
    sitemap: "https://asiste360.com/sitemap.xml",
  };
}
