import { BlogPreviewCard } from "@/components/blog/blog-preview-card"
import { Section } from "@/components/ui/section"
import { getPublishedBlogPosts } from "@/lib/blog"

export async function RecentWriting() {
  const posts = (await getPublishedBlogPosts()).slice(0, 2)

  return (
    <Section id="about-writing" eyebrow="On the blog" title="Recent writing">
      {posts.length > 0 ? (
        <ul className="mt-8 grid list-none grid-cols-1 gap-5 p-0 nav:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug} className="h-full min-w-0">
              <BlogPreviewCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 text-nav-muted">New writing will appear here soon.</p>
      )}
    </Section>
  )
}
