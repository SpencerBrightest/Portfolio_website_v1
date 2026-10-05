import { ProjectCard } from "@/components/projects/project-card"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Reveal } from "@/components/ui/reveal"
import { projects } from "@/data/projects"

export default function WorkPage() {
  return (
    <main className="flex-1 py-16 sm:py-20">
      <Container>
        <section aria-labelledby="work-heading">
          <Reveal>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-nav-muted">
              Work
            </p>
            <Heading id="work-heading">Projects I’ve built</Heading>
            <p className="mt-4 max-w-xl text-nav-muted">
              A selection of projects I’ve built and learned from.
            </p>
          </Reveal>

          <ul className="mt-10 grid list-none grid-cols-1 items-stretch gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {projects.map((project, index) => (
              <li key={project.slug} className="min-w-0">
                <Reveal delay={index * 0.08}>
                  <ProjectCard project={project} />
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  )
}
