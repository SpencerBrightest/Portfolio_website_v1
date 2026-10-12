import Image from "next/image"

import type { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

type ProjectMediaProps = {
  project: Project
  variant?: "card" | "detail"
  className?: string
}

export function ProjectMedia({
  project,
  variant = "card",
  className,
}: ProjectMediaProps) {
  const aspectClass = variant === "card" ? "aspect-[2.1/1]" : "aspect-video"

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[10px] bg-nav-panel",
        aspectClass,
        className
      )}
    >
      {project.image ? (
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes={variant === "card" ? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 768px) 75vw, 100vw"}
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`${project.title} image placeholder`}
          className="absolute inset-0 grid place-items-center bg-nav-panel font-mono text-xs text-nav-muted"
        >
          <span>{project.category}</span>
        </div>
      )}
    </div>
  )
}
