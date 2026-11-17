import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { blogPosts } from "@/data/blog";

export const dynamic = "force-static";

const SITE_URL = "https://caglarcakmak.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = (path: string) => ({
    languages: Object.fromEntries(
      routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`])
    ),
  });

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push(
      {
        url: `${SITE_URL}/${locale}/`,
        changeFrequency: "monthly",
        priority: 1,
        alternates: alternates("/"),
      },
      {
        url: `${SITE_URL}/${locale}/blog/`,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: alternates("/blog/"),
      }
    );
    for (const post of blogPosts) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${post.slug}/`,
        lastModified: new Date(post.date),
        changeFrequency: "yearly",
        priority: 0.6,
        alternates: alternates(`/blog/${post.slug}/`),
      });
    }
  }
  return entries;
}
