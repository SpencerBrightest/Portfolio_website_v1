import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react"

import type { BlogPostSummary } from "@/lib/blog"
import { Heading } from "@/components/ui/heading"

function formatDate(date?: string) {
  if (!date) return "Writing"

  return new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  })
}

type PostCardProps = {
  post: BlogPostSummary
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group overflow-hidden rounded-[14px] border border-nav-border bg-nav-panel transition-colors hover:border-nav-muted">
      <div className="grid md:grid-cols-[minmax(13rem,0.8fr)_minmax(0,1.2fr)] md:items-stretch">
        <Link
          href={`/blog/${post.slug}`}
          aria-label={`Read ${post.title}`}
          className="relative block aspect-[16/9] overflow-hidden bg-nav-hover focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-nav-foreground md:aspect-auto md:min-h-44"
        >
          {post.image ? (
            <Image
              src={post.image.src}
              alt={post.image.alt}
              width={960}
              height={540}
              unoptimized
              sizes="(min-width: 768px) 38vw, 100vw"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : null}
        </Link>

        <div className="flex min-w-0 flex-col justify-center p-4 sm:p-5 md:p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.08em] text-nav-muted">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5" aria-hidden="true" />
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-3.5" aria-hidden="true" />
              {post.readTime ?? (post.readingTime ? `${post.readingTime} min` : "1 min")}
            </span>
          </div>

          <Heading level={2} className="mt-2.5 text-lg font-semibold leading-snug">
            <Link
              href={`/blog/${post.slug}`}
              className="rounded-sm text-nav-foreground transition-colors hover:text-nav-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-foreground"
            >
              {post.title}
            </Link>
          </Heading>

          <p className="mt-2.5 line-clamp-3 text-nav-muted">
            {post.description}
          </p>

          <Link
            href={`/blog/${post.slug}`}
            className="mt-4 inline-flex min-h-10 w-fit items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground dark:text-blue-400 dark:hover:text-blue-300"
          >
            Read article
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
