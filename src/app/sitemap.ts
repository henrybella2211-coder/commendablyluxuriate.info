import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/guides",
    "/about",
    "/contact",
    "/privacy-policy",
    "/cookie-policy",
    "/terms",
    "/editorial-policy",
    "/age-notice",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date("2026-09-15"),
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${SITE_URL}/guides/${article.slug}`,
    lastModified: new Date(article.lastUpdatedISO),
  }));

  return [...staticRoutes, ...articleRoutes];
}
