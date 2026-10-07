// Re-exports the unified Button component with loading state support for action buttons.
import * as React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"

export type LoadingButtonProps = ButtonProps

// Renders an action button with loading state support.
export const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
  function LoadingButton(props, ref) {
    return <Button ref={ref} {...props} />
  }
)

LoadingButton.displayName = "LoadingButton"
