// Solid Vercel triangle SVG mark with spin and delayed fade-in animations.
import { cn } from "@/lib/utils"

interface VercelTriangleSpinnerProps {
  className?: string
}

// Renders a spinning Vercel triangle SVG for pending navigation states.
export function VercelTriangleSpinner({ className }: VercelTriangleSpinnerProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn("size-[1em] vercel-spinner", className)}
    >
      <polygon points="12,2 22,22 2,22" fill="currentColor" />
    </svg>
  )
}
