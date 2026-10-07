import { LoaderCircle } from "lucide-react"
import * as React from "react"

import { cn } from "cn"

type LoadingButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  variant?: "primary" | "secondary" | "navigation"
}

const variantStyles: Record<NonNullable<LoadingButtonProps["variant"]>, string> = {
  navigation:
    "border-transparent bg-transparent text-nav-muted hover:border-transparent hover:bg-nav-hover hover:text-nav-foreground focus-visible:ring-nav-foreground",
  primary:
    "border-neutral-950 bg-neutral-950 text-white hover:border-neutral-800 hover:bg-neutral-800 focus-visible:ring-neutral-500 dark:border-white dark:bg-white dark:text-neutral-950 dark:hover:border-neutral-200 dark:hover:bg-neutral-200 dark:focus-visible:ring-neutral-400",
  secondary:
    "border-neutral-200 bg-white text-neutral-950 hover:bg-neutral-50 focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:border-neutral-700 dark:hover:bg-neutral-800 dark:focus-visible:ring-neutral-600",
}

export const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
  function LoadingButton(
    {
      children,
      className,
      disabled = false,
      isLoading = false,
      type = "button",
      variant = "primary",
      ...props
    },
    ref
  ) {
    return (
      <button
        {...props}
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        aria-live="polite"
        className={cn(
          "relative inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,transform] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background enabled:active:scale-[0.98] disabled:cursor-not-allowed motion-reduce:transition-none",
          variantStyles[variant],
          disabled && "opacity-55",
          className
        )}
      >
        <span
          className={cn(
            "transition-opacity duration-150 motion-reduce:transition-none",
            isLoading && "opacity-0"
          )}
        >
          {children}
        </span>
        <LoaderCircle
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 m-auto size-4 animate-spin opacity-0 motion-reduce:animate-none",
            isLoading && "opacity-100"
          )}
        />
        <span className="sr-only">{isLoading ? "Loading" : ""}</span>
      </button>
    )
  }
)

LoadingButton.displayName = "LoadingButton"
