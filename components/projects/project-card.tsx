import Link from "next/link"

import { ProjectMedia } from "@/components/projects/project-media"
import { Heading } from "@/components/ui/heading"
import type { Project } from "@/data/projects"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`View ${project.title} project details`}
      className="group block h-full rounded-[14px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-foreground"
    >
      <article className="flex h-full flex-col rounded-[14px] border border-nav-border p-4 transition-[border-color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:border-nav-muted sm:p-4">
        <ProjectMedia project={project} className="mb-5 w-full" />
        <p className="font-mono text-[0.68rem] text-nav-muted">{project.category}</p>
        <Heading level={2} className="mt-2 text-lg font-medium tracking-[-0.02em]">
          {project.title}
        </Heading>
        <p className="mt-2 text-sm leading-6 text-nav-muted">
          {project.description}
        </p>
        <p
          className="mt-auto pt-5 font-mono text-[0.68rem] leading-5 text-nav-muted"
          aria-label={`Built with ${project.tags.join(", ")}`}
        >
          {project.tags.map((tag, index) => (
            <span key={tag}>
              {index > 0 ? <span aria-hidden="true"> · </span> : null}
              {tag}
            </span>
          ))}
        </p>
      </article>
    </Link>
  )
}
