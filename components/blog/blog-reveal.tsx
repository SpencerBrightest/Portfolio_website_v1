// Blog-only in-view reveal for preview cards; keep the stagger subtle and reduced-motion safe.
"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

type BlogRevealProps = {
  children: ReactNode
  delay?: number
}

export function BlogReveal({ children, delay = 0 }: BlogRevealProps) {
  const prefersReducedMotion = useReducedMotion() ?? false

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: "easeOut",
        delay: prefersReducedMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  )
}
