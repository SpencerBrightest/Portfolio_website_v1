// Server-side blog content loader; add posts by placing a categorized MDX file in content/blog.
import { readdir, readFile } from "node:fs/promises"
import path from "node:path"

import matter from "gray-matter"

const blogDirectory = path.join(process.cwd(), "content", "blog")
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

// Add new categories here so frontmatter is validated against the same list.
export const BLOG_CATEGORIES = [
  "About",
  "Community",
  "Mobile",
  "Product",
  "Developer tools",
] as const
export type BlogCategory = (typeof BLOG_CATEGORIES)[number]

export type BlogImage = {
  src: string
  alt: string
}

type Frontmatter = {
  title?: unknown
  description?: unknown
  date?: unknown
  category?: unknown
  readTime?: unknown
  image?: unknown
  tags?: unknown
  draft?: unknown
}

export type BlogPostSummary = {
  slug: string
  title: string
  description: string
  publishedAt?: string
  category?: BlogCategory
  readTime?: string
  image?: BlogImage
  tags?: string[]
  readingTime?: number
  isDraft: boolean
  hasContent: boolean
}

export type BlogPost = BlogPostSummary & {
  body: string
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function safeDate(value: unknown) {
  if (typeof value !== "string" && !(value instanceof Date)) return undefined

  const date = value instanceof Date ? value : new Date(value)
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString()
}

function getExcerpt(body: string) {
  return body
    .replace(/^\s*#+\s+/gm, "")
    .replace(/[`*_>#\[\]()]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180)
}

function parseCategory(value: unknown): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((category) => category === value)
}

function parseImage(value: unknown): BlogImage | undefined {
  if (typeof value !== "object" || value === null) return undefined

  const image = value as Record<string, unknown>
  if (typeof image.src !== "string" || typeof image.alt !== "string") {
    return undefined
  }

  const src = image.src.trim()
  const alt = image.alt.trim()
  return src && alt ? { src, alt } : undefined
}

function parseTags(value: unknown): string[] {
  if (!Array.isArray(value)) return []

  return value.filter((tag): tag is string => typeof tag === "string").map((tag) => tag.trim()).filter(Boolean)
}

function toPost(slug: string, rawContent: string): BlogPost {
  const { content, data } = matter(rawContent)
  const frontmatter = data as Frontmatter
  const body = content.trim()
  const containsPlaceholder = /\bTODO\s*\(my words\):/i.test(body)
  const isDraft = frontmatter.draft === true || body.length === 0 || containsPlaceholder
  const title =
    typeof frontmatter.title === "string" && frontmatter.title.trim()
      ? frontmatter.title.trim()
      : titleFromSlug(slug)
  const excerpt =
    typeof frontmatter.description === "string"
      ? frontmatter.description.trim()
      : getExcerpt(body)
  const wordCount = body ? body.split(/\s+/).length : 0
  const readTime =
    typeof frontmatter.readTime === "string" && frontmatter.readTime.trim()
      ? frontmatter.readTime.trim()
      : undefined

  return {
    slug,
    title,
    description:
      excerpt || (isDraft ? "This post is a draft and is still being written." : ""),
    publishedAt: safeDate(frontmatter.date),
    category: parseCategory(frontmatter.category),
    readTime,
    image: parseImage(frontmatter.image),
    tags: parseTags(frontmatter.tags),
    readingTime: wordCount > 0 ? Math.max(1, Math.ceil(wordCount / 200)) : undefined,
    isDraft,
    hasContent: body.length > 0,
    body,
  }
}

export async function getAllBlogPosts(): Promise<BlogPostSummary[]> {
  const entries = await readdir(blogDirectory, { withFileTypes: true })
  const filenames = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b))

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.slice(0, -".mdx".length)
      const source = await readFile(path.join(blogDirectory, filename), "utf8")
      return toPost(slug, source)
    })
  )

  return posts.sort((a, b) => {
    if (a.publishedAt && b.publishedAt) {
      return b.publishedAt.localeCompare(a.publishedAt)
    }
    if (a.publishedAt) return -1
    if (b.publishedAt) return 1
    return a.title.localeCompare(b.title)
  })
}

export async function getPublishedBlogPosts(): Promise<BlogPostSummary[]> {
  const posts = await getAllBlogPosts()
  return posts.filter((post) => !post.isDraft)
}

export async function getVisibleBlogPosts(): Promise<BlogPostSummary[]> {
  const posts = await getAllBlogPosts()
  return process.env.NODE_ENV === "development"
    ? posts.filter((post) => !post.isDraft || post.hasContent)
    : posts.filter((post) => !post.isDraft)
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!slugPattern.test(slug)) return null

  try {
    const source = await readFile(path.join(blogDirectory, `${slug}.mdx`), "utf8")
    return toPost(slug, source)
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return null
    }
    throw error
  }
}
