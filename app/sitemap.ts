import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

const PAGES = [
  { path: "/", priority: 1 },
  { path: "/partners/", priority: 0.8 },
  { path: "/careers/", priority: 0.8 },
  { path: "/about/", priority: 0.6 },
  { path: "/contact/", priority: 0.7 },
  { path: "/privacy/", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGES.map((page) => ({
    url: `${SITE.url}${page.path}`,
    lastModified,
    priority: page.priority,
  }));
}
