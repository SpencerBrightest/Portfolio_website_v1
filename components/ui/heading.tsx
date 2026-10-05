import type { ComponentPropsWithoutRef, ElementType } from "react"

import { cn } from "@/lib/utils"

type HeadingLevel = 1 | 2 | 3

type HeadingProps = ComponentPropsWithoutRef<"h1"> & {
  level?: HeadingLevel
}

const headingStyles: Record<HeadingLevel, string> = {
  1: "font-heading text-4xl font-medium tracking-[-0.03em] text-nav-foreground sm:text-5xl",
  2: "font-heading text-2xl font-medium tracking-[-0.02em] text-nav-foreground sm:text-3xl",
  3: "font-heading text-xl font-medium tracking-[-0.02em] text-nav-foreground",
}

export function Heading({ level = 1, className, ...props }: HeadingProps) {
  const Tag = `h${level}` as ElementType

  return <Tag className={cn(headingStyles[level], className)} {...props} />
}
