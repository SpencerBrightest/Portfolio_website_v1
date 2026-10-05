// Published blog index; draft About articles remain separate from these sample posts.
import { PostCard } from "@/components/blog/post-card"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { getPublishedBlogPosts } from "@/lib/blog"

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts()

  return (
    <main className="flex-1 py-12 sm:py-16">
      <Container>
        <section aria-labelledby="blog-heading">
          <Heading id="blog-heading">Blog</Heading>
          <p className="mt-5 max-w-2xl text-nav-muted">
            Personal stories about things I&apos;ve learned, projects I&apos;m hacking on, and general
            findings — alongside articles I write for other publications.
          </p>

          {posts.length > 0 ? (
            <ul className="mt-10 grid list-none gap-5 p-0 sm:mt-12 sm:gap-6">
              {posts.map((post) => (
                <li key={post.slug} className="min-w-0">
                  <PostCard post={post} />
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
