// Blog article route; add MDX components in components/blog/mdx-components.tsx and MDX files in content/blog.
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

import { mdxComponents } from "@/components/blog/mdx-components"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { getBlogPostBySlug, getVisibleBlogPosts } from "@/lib/blog"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getVisibleBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post || (process.env.NODE_ENV === "production" && post.isDraft)) {
    return {
      title: "Post not found",
      robots: { index: false, follow: false },
    }
  }

  const description = post.description.includes("Spencer Bright")
    ? post.description
    : `${post.description} By Spencer Bright.`
  const title = `${post.title}${post.isDraft ? " (Draft)" : ""} | Spencer Bright`

  return {
    title,
    description,
    robots: post.isDraft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title,
      description,
      ...(post.publishedAt ? { publishedTime: post.publishedAt } : {}),
      authors: ["Spencer Bright"],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post || (process.env.NODE_ENV === "production" && post.isDraft)) {
    notFound()
  }

  const metadata = [
    post.category,
    post.readTime ?? (post.readingTime ? `${post.readingTime} min read` : undefined),
  ]
    .filter((value): value is string => Boolean(value))
    .join(" · ")

  return (
    <main className="flex-1 py-16 sm:py-24">
      <Container>
        <article className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex min-h-11 items-center rounded-sm text-sm text-nav-muted transition-colors hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground"
          >
            ← Back to blog
          </Link>
          <header className="mb-10 border-b border-nav-border pb-8">
            {metadata ? (
              <p className="mb-4 font-mono text-xs text-nav-muted">{metadata}</p>
            ) : null}
            <Heading>{post.title}</Heading>
            {post.description ? (
              <p className="mt-5 max-w-2xl text-nav-muted">
                {post.description}
              </p>
            ) : null}
            {post.publishedAt ? (
              <time
                className="mt-5 block font-mono text-xs text-nav-muted"
                dateTime={post.publishedAt}
              >
                {new Date(post.publishedAt).toLocaleDateString("en", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </time>
            ) : null}
          </header>

          {post.body ? (
            <div className="space-y-6">
              <MDXRemote source={post.body} components={mdxComponents} />
            </div>
          ) : (
            <p className="rounded-xl border border-nav-border p-6 text-nav-muted">
              This post is a draft and doesn’t have content yet.
            </p>
          )}
        </article>
      </Container>
    </main>
  )
}
