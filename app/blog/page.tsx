// Published blog index listing technical writing and essays.
import type { Metadata } from "next"

import { PostCard } from "@/components/blog/post-card"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { Heading } from "@/components/ui/heading"
import { getPublishedBlogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Personal stories about engineering, projects, software design, and lessons learned by Spencer Bright.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Spencer Bright",
    description:
      "Personal stories about engineering, projects, software design, and lessons learned by Spencer Bright.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Spencer Bright",
    description:
      "Personal stories about engineering, projects, software design, and lessons learned by Spencer Bright.",
  },
}

// Renders the blog articles index page.
export default async function BlogPage() {
  const posts = await getPublishedBlogPosts()

  return (
    <main className="flex-1 py-12 sm:py-16">
      <Container>
        <section aria-labelledby="blog-heading">
          <Reveal>
            <Heading id="blog-heading">Blog</Heading>
            <p className="mt-5 max-w-2xl text-nav-muted">
              Personal stories about things I&apos;ve learned, projects I&apos;m hacking on, and general
              findings — alongside articles I write for other publications.
            </p>
          </Reveal>

          {posts.length > 0 ? (
            <ul className="mt-8 grid list-none gap-4 p-0 sm:mt-10 sm:gap-5">
              {posts.map((post, index) => (
                <li key={post.slug} className="min-w-0">
                  <Reveal delay={index * 0.08}>
                    <PostCard post={post} />
                  </Reveal>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-10 rounded-xl border border-nav-border p-5 text-nav-muted sm:p-6">
              No posts yet. Check back soon.
            </p>
          )}
        </section>
      </Container>
    </main>
  )
}
