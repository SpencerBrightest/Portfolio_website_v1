// Homepage blog section; add a featured post by creating its MDX file and listing its slug below.
import Link from "next/link"

import { BlogPreviewCard } from "@/components/blog/blog-preview-card"
import { BlogReveal } from "@/components/blog/blog-reveal"
import { Section } from "@/components/ui/section"
import { getVisibleBlogPosts, type BlogPostSummary } from "@/lib/blog"

const featuredSlugs = ["my-approach", "nahpi-hackathon-2026"] as const

export async function BlogPreview() {
  const posts = await getVisibleBlogPosts()
  const postsBySlug = new Map(posts.map((post) => [post.slug, post]))
  const featuredPosts = featuredSlugs
    .map((slug) => postsBySlug.get(slug))
    .filter((post): post is BlogPostSummary => post !== undefined)

  if (featuredPosts.length === 0) return null

  return (
    <Section
      id="blog"
      eyebrow="From the blog"
      title="Thoughts, lessons & things I'm building."
    >
      <ul className="mt-8 grid list-none grid-cols-1 gap-6 p-0 nav:grid-cols-2">
        {featuredPosts.map((post, index) => (
          <li key={post.slug} className="h-full">
            <BlogReveal delay={index * 0.08}>
              <BlogPreviewCard post={post} />
            </BlogReveal>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <Link
          href="/blog"
          className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium text-nav-foreground underline-offset-4 transition-colors hover:text-nav-muted hover:underline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground"
        >
          View all articles <span aria-hidden="true">→</span>
        </Link>
      </p>
    </Section>
  )
}
