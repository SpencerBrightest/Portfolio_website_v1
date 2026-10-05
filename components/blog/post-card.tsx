import Link from "next/link"

import type { BlogPostSummary } from "@/lib/blog"
import { Heading } from "@/components/ui/heading"

type PostCardProps = {
  post: BlogPostSummary
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-[14px] border border-nav-border p-5 transition-colors hover:border-nav-muted sm:p-6">
      <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-nav-muted">
        {post.isDraft ? (
          <span>Draft · In progress</span>
        ) : (
          <>
            {post.publishedAt ? (
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            ) : (
              <span>Writing</span>
            )}
            {post.readingTime ? <span>· {post.readingTime} min read</span> : null}
          </>
        )}
      </div>
      <Heading level={2} className="text-xl">
        <Link
          href={`/blog/${post.slug}`}
          className="rounded-sm text-nav-foreground outline-none transition-colors hover:text-nav-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-foreground"
        >
          {post.title}
        </Link>
      </Heading>
      <p className="mt-3 max-w-2xl text-nav-muted">
        {post.description}
      </p>
    </article>
  )
}
