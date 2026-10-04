export type Project = {
  slug: string
  title: string
  category: string
  description: string
  tags: string[]
  year?: string
  href?: string
}

// Keep this empty until real projects are ready to publish.
export const projects: Project[] = []

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null
}
