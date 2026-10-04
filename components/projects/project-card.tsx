import Link from "next/link"

import type { Project } from "@/data/projects"
import { Heading } from "@/components/ui/heading"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-[14px] border border-nav-border p-5 transition-colors hover:border-nav-muted sm:p-6">
      <p className="mb-3 text-sm text-nav-muted">{project.category}</p>
      <Heading level={2} className="text-xl">
        <Link
          href={`/work/${project.slug}`}
          className="rounded-sm text-nav-foreground outline-none transition-colors hover:text-nav-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-foreground"
        >
          {project.title}
        </Link>
      </Heading>
      <p className="mt-3 text-sm leading-6 text-nav-muted">
        {project.description}
      </p>
      {project.tags.length > 0 ? (
        <ul className="mt-5 flex flex-wrap gap-2 p-0" aria-label="Technologies">
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
    </article>
  )
}
