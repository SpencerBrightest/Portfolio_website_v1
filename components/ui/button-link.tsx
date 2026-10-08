// ButtonLink component wrapping Next.js Link with pending navigation indicator via useLinkStatus.
"use client"

import Link from "next/link"
import { useLinkStatus } from "next/link"
import type { ComponentProps, ReactNode } from "react"
import type { VariantProps } from "class-variance-authority"

import { buttonVariants } from "@/components/ui/button"
import { VercelTriangleSpinner } from "@/components/ui/vercel-triangle-spinner"
import { cn } from "@/lib/utils"

type ButtonLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants>

// Reads pending navigation status from Link context and swaps content for spinning triangle.
function ButtonLinkContent({ children }: { children: ReactNode }) {
  const { pending } = useLinkStatus()

  return (
    <span
      className="relative inline-flex items-center justify-center gap-inherit"
      aria-busy={pending}
    >
      <span
        className={cn(
          "inline-flex items-center gap-inherit transition-opacity duration-150 motion-reduce:transition-none",
          pending && "opacity-0"
        )}
      >
        {children}
      </span>
      {pending && (
        <span className="absolute inset-0 flex items-center justify-center">
          <VercelTriangleSpinner />
          <span className="sr-only">Loading...</span>
        </span>
      )}
    </span>
  )
}

// Styled link component with automatic pending navigation state feedback.
export function ButtonLink({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn("relative", buttonVariants({ variant, size, className }))}
      {...props}
    >
      <ButtonLinkContent>{children}</ButtonLinkContent>
    </Link>
  )
}

