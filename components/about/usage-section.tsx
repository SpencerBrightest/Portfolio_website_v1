import { Section } from "@/components/ui/section"
import { stack } from "@/data/stack"

type StackToolName = (typeof stack)[number]["name"]
type UsageGroup = {
  label: string
  tools: StackToolName[]
}

const usageGroups: UsageGroup[] = [
  { label: "Mobile Development", tools: ["Flutter"] },
  {
    label: "Frontend Web Development",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  { label: "Backend & Data", tools: ["Node.js", "MongoDB", "Firebase"] },
  { label: "Development & Design Tools", tools: ["Git", "Figma"] },
]

export function UsageSection() {
  return (
    <Section id="about-usage" eyebrow="Tools I use" title="Usage">
      <p className="mt-3 max-w-2xl text-nav-muted">
        Tools, technologies and gadgets I use on a daily basis — but not limited to.
      </p>

      <div className="mt-8 max-w-2xl rounded-2xl border border-nav-border bg-nav-panel p-6 sm:p-8">
        <dl className="space-y-6">
          {usageGroups.map((group) => {
            const groupTools = new Set<string>(group.tools)
            const tools = stack.filter((tool) => groupTools.has(tool.name))

            return (
              <div key={group.label}>
                <dt className="text-sm font-semibold text-nav-foreground">{group.label}</dt>
                <dd className="mt-2.5 text-sm leading-6 text-nav-muted">
                  {tools.map((tool) => tool.name).join(", ")}
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </Section>
  )
}
