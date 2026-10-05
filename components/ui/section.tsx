import type { ReactNode } from "react"

import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Reveal } from "@/components/ui/reveal"
import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
  className?: string
}

// Shared section heading and container; add new titled home sections with this primitive.
export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "scroll-mt-24 border-t border-nav-border bg-nav-background py-12 sm:py-16",
        className
      )}
    >
      <Container>
        <Reveal>
          <p className="mb-7 font-mono text-xs uppercase tracking-[0.14em] text-nav-muted">
            {eyebrow}
          </p>
          <Heading id={headingId} level={2} className="text-[2rem] leading-tight sm:text-4xl">
            {title}
          </Heading>
        </Reveal>
        {children}
      </Container>
    </section>
  )
}
