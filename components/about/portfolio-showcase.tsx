import { ProjectCard } from "@/components/projects/project-card"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Reveal } from "@/components/ui/reveal"
import { projects } from "@/data/projects"

export function PortfolioShowcase() {
  return (
    <section
      id="about-projects"
      aria-labelledby="about-projects-heading"
      className="scroll-mt-24 border-t border-nav-border bg-nav-background py-14 sm:py-20"
    >
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Heading
              id="about-projects-heading"
              level={2}
              className="font-about-display text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-bold tracking-[-0.03em] text-about-heading"
            >
              A few things I&apos;ve <span className="text-about-accent">built.</span>
            </Heading>
            <p className="mt-4 max-w-2xl text-about-text">
              A look at projects I&apos;ve worked on across web and mobile.
            </p>
          </div>
        </Reveal>

        <ul className="mt-9 grid list-none grid-cols-1 items-stretch gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, index) => (
            <li key={project.slug} className="min-w-0">
              <Reveal delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
