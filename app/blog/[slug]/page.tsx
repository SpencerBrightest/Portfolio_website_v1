import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) return { title: "Post not found" }

  return {
    title: `${post.title}${post.isDraft ? " (Draft)" : ""} | Pencer Bright`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) notFound()

  return (
    <main className="flex-1 py-16 sm:py-24">
      <Container>
        <article className="mx-auto max-w-3xl">
          <LinkBack />
          <header className="mb-10 border-b border-nav-border pb-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-nav-muted">
              {post.isDraft ? "Draft · In progress" : "Writing"}
            </p>
            <Heading>{post.title}</Heading>
            {post.description ? (
              <p className="mt-5 max-w-2xl text-lg leading-8 text-nav-muted">
                {post.description}
              </p>
            ) : null}
            {post.publishedAt && !post.isDraft ? (
              <time
                className="mt-5 block font-mono text-xs text-nav-muted"
                dateTime={post.publishedAt}
              >
                {new Date(post.publishedAt).toLocaleDateString("en", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            ) : null}
          </header>

          {post.body ? (
            <div className="prose max-w-none text-base leading-7 text-nav-foreground [&_a]:text-nav-foreground [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-medium [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-medium [&_p]:mb-5 [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_blockquote]:border-l [&_blockquote]:border-nav-border [&_blockquote]:pl-5 [&_blockquote]:text-nav-muted [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-nav-border [&_pre]:p-4">
              <MDXRemote source={post.body} />
            </div>
          ) : (
            <p className="rounded-[14px] border border-nav-border p-5 text-nav-muted sm:p-6">
              This post is a draft and doesn’t have content yet.
            </p>
          )}
        </article>
      </Container>
    </main>
  )
}

function LinkBack() {
  return (
    <Link
      href="/blog"
      className="mb-8 inline-flex min-h-11 items-center rounded-lg text-sm text-nav-muted transition-colors hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground"
    >
      ← All posts
    </Link>
  )
}
