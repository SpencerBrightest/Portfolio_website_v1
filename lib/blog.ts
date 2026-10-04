import { readdir, readFile } from "node:fs/promises"
import path from "node:path"

import matter from "gray-matter"

const blogDirectory = path.join(process.cwd(), "content", "blog")
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

type Frontmatter = {
  title?: unknown
  description?: unknown
  date?: unknown
  draft?: unknown
}

export type BlogPostSummary = {
  slug: string
  title: string
  description: string
  publishedAt?: string
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

function toPost(slug: string, rawContent: string): BlogPost {
  const { content, data } = matter(rawContent)
  const frontmatter = data as Frontmatter
  const body = content.trim()
  const isDraft = frontmatter.draft === true || body.length === 0
  const title =
    typeof frontmatter.title === "string" && frontmatter.title.trim()
      ? frontmatter.title.trim()
      : titleFromSlug(slug)
  const excerpt =
    typeof frontmatter.description === "string"
      ? frontmatter.description.trim()
      : getExcerpt(body)
  const wordCount = body ? body.split(/\s+/).length : 0

  return {
    slug,
    title,
    description:
      excerpt || (isDraft ? "This post is a draft and is still being written." : ""),
    publishedAt: safeDate(frontmatter.date),
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
