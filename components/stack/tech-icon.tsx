// Renders one labeled brand SVG; add tools and theme colors in data/stack.ts.
import type { CSSProperties } from "react"

import { stackIconPaths, type StackTool } from "@/data/stack"

type TechIconStyle = CSSProperties & {
  "--icon-hover-dark": string
  "--icon-hover-light": string
}

function resolveHoverColor(color: StackTool["hoverDark"]) {
  return color === "fg" ? "var(--nav-foreground)" : color
}

export function TechIcon({ tool }: { tool: StackTool }) {
  const style: TechIconStyle = {
    "--icon-hover-dark": resolveHoverColor(tool.hoverDark),
    "--icon-hover-light": resolveHoverColor(tool.hoverLight),
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label={tool.name}
      className="stack-tech-icon h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
      style={style}
    >
      <title>{tool.name}</title>
      <path d={stackIconPaths[tool.icon]} />
    </svg>
  )
}
