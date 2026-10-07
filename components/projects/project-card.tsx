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
      <article className="flex h-full flex-col rounded-[14px] border border-nav-border p-4 transition-[border-color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:border-nav-muted sm:p-5">
        {/* Project Image */}
        <ProjectMedia project={project} className="mb-4 w-full" />
        
        {/* Category Badge */}
        <p className="font-mono text-[0.68rem] uppercase tracking-wider text-nav-muted">
          {project.category}
        </p>

        {/* Title */}
        <Heading level={2} className="mt-1.5 text-lg font-medium tracking-[-0.02em]">
          {project.title}
        </Heading>

        {/* 3-line intro description */}
        <p className="mt-2 line-clamp-3 text-sm text-nav-muted leading-relaxed">
          {project.shortDescription || project.description}
        </p>

        {/* See More Arrow Button */}
        <div className="mt-auto pt-5 flex items-center gap-1.5 text-xs font-mono text-nav-foreground transition-colors group-hover:text-nav-foreground group-hover:underline">
          <span>See more</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </div>
      </article>
    </Link>
  )
}

