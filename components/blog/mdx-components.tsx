// Shared MDX components; register consistent article styles and reusable post blocks here.
import type { ComponentProps, ReactNode } from "react"
import type { MDXRemoteProps } from "next-mdx-remote/rsc"

import { Heading } from "@/components/ui/heading"

type BlockProps = {
  title: string
  children: ReactNode
}

export function Block({ title, children }: BlockProps) {
  return (
    <section className="rounded-xl border border-nav-border p-6">
      <Heading level={2} className="text-[1.3rem] leading-snug">
        {title}
      </Heading>
      <div className="mt-3 space-y-3 text-nav-foreground">{children}</div>
    </section>
  )
}

function ArticleH2({ children, ...props }: ComponentProps<"h2">) {
  return (
    <Heading level={2} className="mt-10 text-2xl leading-tight" {...props}>
      {children}
    </Heading>
  )
}

function ArticleH3({ children, ...props }: ComponentProps<"h3">) {
  return (
    <Heading level={3} className="mt-7 text-xl leading-snug" {...props}>
      {children}
    </Heading>
  )
}

function ArticleLink({ children, ...props }: ComponentProps<"a">) {
  return (
    <a
      className="text-nav-foreground underline underline-offset-4 transition-colors hover:text-nav-muted"
      {...props}
    >
      {children}
    </a>
  )
}

function ArticleList({ children, ...props }: ComponentProps<"ul">) {
  return (
    <ul className="list-disc space-y-2 pl-6" {...props}>
      {children}
    </ul>
  )
}

function ArticleOrderedList({ children, ...props }: ComponentProps<"ol">) {
  return (
    <ol className="list-decimal space-y-2 pl-6" {...props}>
      {children}
    </ol>
  )
}

export const mdxComponents: NonNullable<MDXRemoteProps["components"]> = {
  Block,
  h2: ArticleH2,
  h3: ArticleH3,
  a: ArticleLink,
  ul: ArticleList,
  ol: ArticleOrderedList,
}
