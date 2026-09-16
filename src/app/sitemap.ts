import type { MetadataRoute } from "next";
import { TEAM_PROFILES } from "@/lib/team";

const BASE_URL = "https://asiste360.com";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/precios", priority: 0.9, changeFrequency: "weekly" },
  { path: "/starter", priority: 0.8, changeFrequency: "monthly" },
  { path: "/crecimiento", priority: 0.8, changeFrequency: "monthly" },
  { path: "/partners", priority: 0.7, changeFrequency: "monthly" },
  { path: "/nosotros", priority: 0.6, changeFrequency: "monthly" },
  { path: "/legal/privacidad", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/terminos", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/cookies", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/mensajeria", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/partners", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const teamEntries: MetadataRoute.Sitemap = TEAM_PROFILES.map((member) => ({
    url: `${BASE_URL}/equipo/${member.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...teamEntries];
}
