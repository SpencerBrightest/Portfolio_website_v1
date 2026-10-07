// Full-area home blog link; update the card layout here and add its metadata to the MDX frontmatter.
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import type { BlogPostSummary } from "@/lib/blog"
import { Heading } from "@/components/ui/heading"

type BlogPreviewCardProps = {
  post: BlogPostSummary
}

function getReadTime(post: BlogPostSummary) {
  if (post.readTime) return post.readTime
  return post.readingTime ? `${post.readingTime} min read` : undefined
}

export function BlogPreviewCard({ post }: BlogPreviewCardProps) {
  const metadata = [post.category, getReadTime(post)].filter(Boolean).join(" · ")

  return (
    <Link
      href={`/blog/${post.slug}`}
      aria-label={post.title}
      className="group block h-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground"
    >
      <article className="flex h-full flex-col rounded-xl border border-nav-border p-3 transition-colors duration-200 group-hover:border-nav-muted">
        <div className="relative mb-4 aspect-[8/3] overflow-hidden rounded-[9px] bg-nav-hover">
          {post.image ? (
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              unoptimized
              sizes="(min-width: 51.25rem) 32rem, 100vw"
              className="object-cover object-top"
            />
          ) : null}
        </div>

        {metadata ? (
          <p className="font-mono text-xs text-nav-muted">{metadata}</p>
        ) : null}
        <Heading level={3} className="mt-2 text-xl font-medium">
          {post.title}
        </Heading>
        <p className="mt-2 line-clamp-1 text-nav-muted">
          {post.description}
        </p>
        <div className="mt-auto flex justify-end pt-5">
          <ArrowUpRight
            className="size-5 text-nav-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </div>
      </article>
    </Link>
  )
}
