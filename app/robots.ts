// Generates robots.txt rules and search engine sitemap reference.
import type { MetadataRoute } from "next"

import { siteConfig } from "@/data/site"

// Returns crawling directives and the absolute sitemap URL.
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url.replace(/\/$/, "")

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
