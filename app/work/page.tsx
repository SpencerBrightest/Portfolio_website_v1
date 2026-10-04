import { ProjectCard } from "@/components/projects/project-card"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { projects } from "@/data/projects"

export default function WorkPage() {
  return (
    <main className="flex-1 py-20 sm:py-28">
      <Container>
        <section aria-labelledby="work-heading">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-nav-muted">
            Work
          </p>
          <Heading id="work-heading">Selected work</Heading>
          <p className="mt-5 max-w-xl text-base leading-7 text-nav-muted">
            A selection of projects I’ve built and learned from.
          </p>

          {projects.length > 0 ? (
            <ul className="mt-10 grid list-none gap-5 p-0 md:grid-cols-2">
              {projects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-10 rounded-[14px] border border-nav-border p-5 text-nav-muted sm:p-6">
              No projects yet. Check back soon.
            </p>
          )}
        </section>
      </Container>
    </main>
  )
}
