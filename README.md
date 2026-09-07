# Asiste360 — sitio web comercial

Sitio comercial de Asiste360 (CRM conversacional multicanal). Construido con
**Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4**.

Contexto completo del proyecto, copy y decisiones de producto en el Project
de Claude "Marketing Bot Asiste 360" (`estrategia-web-asiste360.md`,
`copywriting-sitio-asiste360.md`, `legal-sitio-asiste360.md`,
`tracking-integracion-asiste360.md`).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Estructura

- `src/app/` — páginas (App Router). `page.tsx` es el Home.
- `src/components/` — `SiteNav` y `SiteFooter`, compartidos entre páginas.
- `src/lib/links.ts` — número de WhatsApp, calendario de demos y helpers de
  tracking/UTM (ver Fase 7 de la estrategia).
- `src/app/globals.css` — tokens de marca (colores, tipografías) sobre
  Tailwind v4 (`@theme`).

## Despliegue

Pensado para EasyPanel, a partir del `Dockerfile` incluido (build
multi-stage, `next.config.ts` con `output: "standalone"`). Cada push a
`main` puede disparar un build/deploy en EasyPanel apuntando a este repo.

## Páginas (roadmap de construcción)

- [x] Home (`/`)
- [x] Precios (`/precios`)
- [ ] Partners (`/partners`)
- [ ] Starter (`/starter`)
- [ ] Planes de crecimiento (`/crecimiento`)
- [ ] Nosotros (`/nosotros`)
- [ ] Legal (`/legal/privacidad`, `/legal/terminos`, `/legal/cookies`, `/legal/mensajeria`, `/legal/partners`)
