// Shared MDX components; add reusable post elements here and register them in mdxComponents.
import type { ReactNode } from "react"
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
      <div className="mt-3 space-y-3 text-nav-foreground">
        {children}
      </div>
    </section>
  )
}

export const mdxComponents: NonNullable<MDXRemoteProps["components"]> = {
  Block,
}
