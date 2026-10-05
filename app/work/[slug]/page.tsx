import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { ProjectMedia } from "@/components/projects/project-media"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { getProjectBySlug, projects } from "@/data/projects"

type WorkPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return { title: "Project not found | Spencer Bright" }

  return {
    title: `${project.title} | Spencer Bright`,
    description: project.description,
  }
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <main className="flex-1 py-6 sm:py-8">
      <Container>
        <article className="mx-auto max-w-4xl">
          <Link
            href="/#selected-work"
            className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm text-nav-muted transition-colors hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground"
          >
            <span aria-hidden="true">←</span>
            Back to projects
          </Link>

          <ProjectMedia
            project={project}
            variant="detail"
            className="mx-auto w-full max-w-lg border border-nav-border"
          />

          <header className="border-b border-nav-border py-6 sm:py-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-nav-muted">
              {project.category}
            </p>
            <Heading id="project-heading" className="text-4xl sm:text-5xl">
              {project.title}
            </Heading>
            <p className="mt-5 max-w-2xl text-nav-muted">
              {project.description}
            </p>
          </header>

          <div className="grid gap-8 py-6 sm:grid-cols-[minmax(0,1fr)_minmax(12rem,0.65fr)] sm:gap-12 sm:py-8">
            <section aria-labelledby="project-stack-heading">
              <h2
                id="project-stack-heading"
                className="text-sm font-medium text-nav-foreground"
              >
                Built with
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2 p-0" aria-label="Technology stack">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="list-none rounded-md border border-nav-border px-3 py-2 font-mono text-xs text-nav-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </section>

            <dl className="grid gap-5 border-t border-nav-border pt-5 text-sm sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <div>
                <dt className="mb-1 font-medium text-nav-foreground">Posted</dt>
                <dd className="text-nav-muted">
                  {project.postedAt ? (
                    <time dateTime={project.postedAt}>{project.postedAt}</time>
                  ) : (
                    "Coming soon"
                  )}
                </dd>
              </div>
              <div>
                <dt className="mb-1 font-medium text-nav-foreground">GitHub</dt>
                <dd>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-nav-muted underline underline-offset-4 transition-colors hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground"
                    >
                      View repository
                    </a>
                  ) : (
                    <span className="text-nav-muted">Coming soon</span>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </article>
      </Container>
    </main>
  )
}
