export type Project = {
  slug: string
  title: string
  category: string
  description: string
  tags: string[]
  image?: {
    src: string
    alt: string
  }
  githubUrl?: string
  postedAt?: string
}

export const projects: Project[] = [
  {
    slug: "ai-feedback-tracker",
    title: "AI Feedback Tracker",
    category: "Web app",
    description: "A focused space for collecting and managing feedback from users.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
  },
  {
    slug: "waitlist-saas",
    title: "Waitlist SaaS",
    category: "Web app",
    description: "A simple waitlist flow with an admin dashboard for growing products.",
    tags: ["Next.js", "Tailwind", "Node.js"],
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    category: "Mobile app",
    description: "A clean mobile experience for keeping everyday spending in view.",
    tags: ["Flutter", "Firebase"],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null
}
