// MDX article route; body content and metadata live in content/blog/*.mdx.
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { headers } from "next/headers"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

import { ArticleSidebar } from "@/components/blog/article-sidebar"
import { FollowLinks } from "@/components/blog/follow-links"
import { mdxComponents } from "@/components/blog/mdx-components"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Reveal } from "@/components/ui/reveal"
import { getBlogPostBySlug, getPublishedBlogPosts, getVisibleBlogPosts } from "@/lib/blog"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getVisibleBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

// Generates dynamic SEO metadata including OG, Twitter, and canonical for an article.
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
    alternates: {
      canonical: `/blog/${slug}`,
    },
    robots: post.isDraft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      url: `/blog/${slug}`,
      title,
      description,
      ...(post.publishedAt ? { publishedTime: post.publishedAt } : {}),
      authors: ["Spencer Bright"],
      ...(post.image ? { images: [post.image.src] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(post.image ? { images: [post.image.src] } : {}),
    },
  }
}


function formatDate(date?: string) {
  if (!date) return undefined

  return new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post || (process.env.NODE_ENV === "production" && post.isDraft)) {
    notFound()
  }

  const publishedPosts = await getPublishedBlogPosts()
  const featuredPosts = publishedPosts.filter((featured) => featured.slug !== post.slug)
  const requestHeaders = await headers()
  const forwardedHost = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host")
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto")?.split(",")[0]?.trim()
  const defaultProtocol =
    forwardedHost?.startsWith("localhost") || forwardedHost?.startsWith("127.0.0.1")
      ? "http"
      : "https"
  const articleUrl = forwardedHost
    ? `${forwardedProtocol || defaultProtocol}://${forwardedHost}/blog/${post.slug}`
    : `/blog/${post.slug}`
  const metadata = [formatDate(post.publishedAt), post.readTime ?? (post.readingTime ? `${post.readingTime} min` : undefined)]
    .filter((value): value is string => Boolean(value))
    .join(" · ")

  return (
    <main className="flex-1 py-10 sm:py-16">
      <Container>
        <Reveal>
          <Link
            href="/blog"
            className="mb-7 inline-flex min-h-11 items-center rounded-sm text-sm text-nav-muted transition-colors hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground"
          >
            ← Back to blog
          </Link>
        </Reveal>

        <article aria-labelledby="article-heading">
          <div className="grid gap-x-12 gap-y-8 nav:grid-cols-[minmax(0,1fr)_15rem] nav:gap-x-10">
            <Reveal className="min-w-0 nav:col-start-1 nav:row-start-1">
            <header className="min-w-0">
              {metadata ? (
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-nav-muted">
                  {metadata}
                </p>
              ) : null}
              <Heading id="article-heading" className="max-w-4xl text-4xl leading-tight sm:text-5xl">
                {post.title}
              </Heading>
              {post.description ? (
                <p className="mt-5 max-w-3xl text-nav-muted">{post.description}</p>
              ) : null}
            </header>
            </Reveal>

            {post.image ? (
              <Reveal className="nav:col-start-1 nav:row-start-2">
              <div className="overflow-hidden rounded-[14px] bg-nav-hover">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  width={1400}
                  height={760}
                  unoptimized
                  sizes="(min-width: 51.25rem) 55rem, 100vw"
                  className="h-auto max-h-[34rem] w-full object-cover"
                />
              </div>
              </Reveal>
            ) : null}

            <Reveal className="border-t border-nav-border pt-6 nav:col-start-2 nav:row-start-1 nav:row-span-3 nav:mt-0 nav:border-t-0 nav:pt-0">
              <ArticleSidebar
                title={post.title}
                url={articleUrl}
                tags={post.tags ?? []}
                featuredPosts={featuredPosts}
              />
            </Reveal>

            <div className="nav:col-start-1 nav:row-start-3">
              {post.body ? (
                <div className="space-y-6 text-nav-muted">
                  <MDXRemote source={post.body} components={mdxComponents} />
                </div>
              ) : (
                <Reveal>
                  <p className="rounded-xl border border-nav-border p-6 text-nav-muted">
                    This post is a draft and doesn’t have content yet.
                  </p>
                </Reveal>
              )}
              <Reveal>
                <FollowLinks />
              </Reveal>
            </div>
          </div>
        </article>
      </Container>
    </main>
  )
}
