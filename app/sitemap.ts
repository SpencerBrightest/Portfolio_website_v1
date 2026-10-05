// Published sitemap entries; set NEXT_PUBLIC_SITE_URL to the canonical site origin when configured.
import type { MetadataRoute } from "next"

import { getPublishedBlogPosts } from "@/lib/blog"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (!siteUrl) return []

  const origin = new URL(siteUrl)
  const posts = await getPublishedBlogPosts()

  return posts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, origin).toString(),
    ...(post.publishedAt ? { lastModified: post.publishedAt } : {}),
  }))
}
