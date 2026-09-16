import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Asiste360",
  legalName: "H&S Soluciones y Servicios Integrales",
  url: "https://asiste360.com",
  logo: "https://asiste360.com/logo.png",
  description:
    "CRM conversacional multicanal que centraliza WhatsApp, Instagram, Facebook y más, con IA que califica, agenda y vende.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Medellín",
    addressCountry: "CO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+57-316-135-0500",
    contactType: "sales",
    areaServed: "CO",
    availableLanguage: ["es"],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://asiste360.com"),
  title: {
    default: "Asiste360 — CRM conversacional multicanal",
    template: "%s | Asiste360",
  },
  description:
    "Centraliza WhatsApp, Instagram, Facebook, TikTok, correo y más en un solo CRM conversacional con IA. Simple para empezar. Imparable para escalar.",
  openGraph: {
    siteName: "Asiste360",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
