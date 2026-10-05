// Keep existing blog call sites compatible while sharing one site-wide reveal pattern.
import { Reveal } from "@/components/ui/reveal"
import type { ReactNode } from "react"

type BlogRevealProps = {
  children: ReactNode
  delay?: number
}

export function BlogReveal({ children, delay = 0 }: BlogRevealProps) {
  return <Reveal delay={delay}>{children}</Reveal>
}
