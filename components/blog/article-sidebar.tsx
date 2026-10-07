import Link from "next/link"

import { SocialIcon } from "@/components/ui/social-icon"
import type { BlogPostSummary } from "@/lib/blog"

type SharePlatform = "x" | "linkedin" | "facebook" | "whatsapp"

type ArticleSidebarProps = {
  title: string
  url: string
  tags: string[]
  featuredPosts: BlogPostSummary[]
}

const sharePlatforms: { label: string; platform: SharePlatform }[] = [
  { label: "X", platform: "x" },
  { label: "LinkedIn", platform: "linkedin" },
  { label: "Facebook", platform: "facebook" },
  { label: "WhatsApp", platform: "whatsapp" },
]

function shareUrl(platform: SharePlatform, title: string, url: string) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  switch (platform) {
    case "x":
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    case "whatsapp":
      return `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
  }
}

export function ArticleSidebar({ title, url, tags, featuredPosts }: ArticleSidebarProps) {
  return (
    <aside className="space-y-7 nav:sticky nav:top-24 nav:self-start">
      <section aria-labelledby="article-author-heading">
        <h2 id="article-author-heading" className="sr-only">
          Author
        </h2>
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid size-11 shrink-0 place-items-center rounded-full bg-nav-hover font-heading text-sm font-semibold text-nav-foreground"
          >
            SB
          </span>
          <div>
            <p className="text-sm font-semibold text-nav-foreground">Spencer Bright</p>
            <p className="text-xs text-nav-muted">Developer · Builder · Creator</p>
          </div>
        </div>
      </section>

      <section className="border-t border-nav-border pt-5" aria-labelledby="article-tags-heading">
        <h2 id="article-tags-heading" className="text-sm font-semibold text-nav-foreground">
          Tags
        </h2>
        {tags.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-nav-border px-2 py-1 text-xs text-nav-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-nav-muted">No tags for this post.</p>
        )}
      </section>

      <section className="border-t border-nav-border pt-5" aria-labelledby="article-share-heading">
        <h2 id="article-share-heading" className="text-sm font-semibold text-nav-foreground">
          Share Post
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {sharePlatforms.map(({ label, platform }) => (
            <li key={platform}>
              <a
                href={shareUrl(platform, title, url)}
                target="_blank"
                rel="noreferrer"
                aria-label={`Share ${title} on ${label}`}
                title={`Share on ${label}`}
                className="group inline-flex size-11 items-center justify-center rounded-lg border border-nav-border text-nav-foreground transition-colors hover:bg-nav-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-foreground"
              >
                <SocialIcon platform={platform} className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      {featuredPosts.length > 0 ? (
        <section className="border-t border-nav-border pt-5" aria-labelledby="featured-posts-heading">
          <h2 id="featured-posts-heading" className="text-sm font-semibold text-nav-foreground">
            Featured
          </h2>
          <ul className="mt-3 space-y-3">
            {featuredPosts.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm leading-5 text-nav-muted transition-colors hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-foreground"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </aside>
  )
}
