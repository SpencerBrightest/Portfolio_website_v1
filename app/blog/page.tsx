import { PostCard } from "@/components/blog/post-card"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { getAllBlogPosts } from "@/lib/blog"

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <main className="flex-1 py-20 sm:py-28">
      <Container>
        <section aria-labelledby="blog-heading">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-nav-muted">
            Writing
          </p>
          <Heading id="blog-heading">Notes and ideas</Heading>
          <p className="mt-5 max-w-xl text-base leading-7 text-nav-muted">
            Thoughts and lessons from what I’m building and learning.
          </p>

          {posts.length > 0 ? (
            <ul className="mt-10 grid list-none gap-5 p-0 md:grid-cols-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-10 rounded-[14px] border border-nav-border p-5 text-nav-muted sm:p-6">
              No posts yet. Check back soon.
            </p>
          )}
        </section>
      </Container>
    </main>
  )
}
