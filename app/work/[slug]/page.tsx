import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { getProjectBySlug, projects } from "@/data/projects"

type WorkPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return { title: "Project not found" }

  return {
    title: `${project.title} | Pencer Bright`,
    description: project.description,
  }
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <main className="flex-1 py-16 sm:py-24">
      <Container>
        <article className="mx-auto max-w-3xl">
          <Link
            href="/work"
            className="mb-8 inline-flex min-h-11 items-center rounded-lg text-sm text-nav-muted transition-colors hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground"
          >
            ← All work
          </Link>
          <header className="border-b border-nav-border pb-8">
            <p className="mb-4 text-sm text-nav-muted">{project.category}</p>
            <Heading>{project.title}</Heading>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-nav-muted">
              {project.description}
            </p>
            {project.year ? (
              <p className="mt-5 font-mono text-xs text-nav-muted">{project.year}</p>
            ) : null}
          </header>
          {project.tags.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-2 p-0" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="list-none rounded-md border border-nav-border px-2 py-1 font-mono text-xs text-nav-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
          {project.href ? (
            <p className="mt-8">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-lg text-sm text-nav-foreground underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground"
              >
                Visit project
              </a>
            </p>
          ) : null}
        </article>
      </Container>
    </main>
  )
}
