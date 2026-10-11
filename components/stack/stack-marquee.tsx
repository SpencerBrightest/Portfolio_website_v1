// Loops a duplicated tools list; add or reorder tools in data/stack.ts.
import { TechIcon } from "@/components/stack/tech-icon"
import { stack } from "@/data/stack"
import { useReducedMotion } from "framer-motion"

const toolsPerCopy = stack

function ToolCopy({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className="stack-marquee-copy m-0 list-none p-0"
      aria-hidden={duplicate || undefined}
    >
      {toolsPerCopy.map((tool, index) => (
        <li
          key={`${tool.icon}-${index}`}
          className="w-max shrink-0 list-none"
          aria-hidden={index >= stack.length || undefined}
        >
          <TechIcon tool={tool} />
        </li>
      ))}
    </ul>
  )
}

export function StackMarquee() {
  const prefersReducedMotion = useReducedMotion() ?? false

  return (
    <div
      role="region"
      aria-label="Tools I work with"
      className="stack-marquee mt-9 w-full"
    >
      <div
        className="stack-marquee-track"
        style={prefersReducedMotion ? undefined : { willChange: "transform" }}
      >
        <ToolCopy />
        <ToolCopy duplicate />
      </div>
    </div>
  )
}
