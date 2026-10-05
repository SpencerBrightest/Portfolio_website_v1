import { ProjectCard } from "@/components/projects/project-card"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { projects } from "@/data/projects"

export function SelectedWork() {
  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="scroll-mt-24 border-t border-nav-border py-12 sm:py-16"
    >
      <Container>
        <p className="mb-7 font-mono text-xs uppercase tracking-[0.14em] text-nav-muted">
          Selected work
        </p>
        <Heading
          id="selected-work-heading"
          level={2}
          className="text-[2rem] leading-tight sm:text-4xl"
        >
          Projects I’ve built
        </Heading>

        <ul className="mt-10 grid list-none grid-cols-1 items-stretch gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <li key={project.slug} className="min-w-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
