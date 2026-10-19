import { Section } from "@/components/ui/section"

const experience = [
  {
    date: "2024",
    dateTime: "2024",
    title: "Started learning web development",
    organization: "Self-directed learning",
    description:
      "Began learning the foundations of web development at home, focusing on HTML and CSS.",
    type: "Self-learning",
  },
  {
    date: "August 2025",
    dateTime: "2025-08",
    title: "Deepened my web development skills",
    organization: "TIC Foundation · Academic internship",
    description:
      "Built on my web development foundations and explored HTML, CSS, and JavaScript in an academic internship.",
    type: "Internship",
  },
  {
    date: "Early 2026",
    dateTime: "2026",
    title: "Started backend development",
    organization: "Independent learning",
    description:
      "Expanded into server-side development with Node.js, Express, and MongoDB.",
    type: "Self-learning",
  },
  {
    date: "August 2026",
    dateTime: "2026-08",
    title: "Started mobile app development",
    organization: "Innova",
    description: "Developed my mobile application skills with Flutter.",
    type: "Internship",
  },
]

export function ExperienceSection() {
  return (
    <Section id="about-experience" eyebrow="Experience" title="My Journey So Far">
      <ol className="relative mt-8 space-y-8 before:absolute before:bottom-4 before:left-[0.3125rem] before:top-2 before:w-px before:bg-nav-border sm:space-y-10">
        {experience.map((item) => (
          <li
            key={item.date}
            className="relative grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4 sm:grid-cols-[1.5rem_7.5rem_minmax(0,1fr)] sm:gap-x-5"
          >
            <span
              aria-hidden="true"
              className="col-start-1 row-start-1 mt-1.5 size-[0.6875rem] rounded-full border-2 border-nav-foreground bg-nav-background"
            />
            <time
              dateTime={item.dateTime}
              className="col-start-2 row-start-1 font-mono text-xs text-nav-muted sm:col-start-2 sm:pt-0.5"
            >
              {item.date}
            </time>
            <div className="col-start-2 row-start-2 min-w-0 pt-2 sm:col-start-3 sm:row-span-2 sm:row-start-1 sm:pt-0">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium text-nav-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-nav-muted">{item.organization}</p>
                </div>
                <span className="shrink-0 rounded-full border border-nav-border bg-nav-panel px-3 py-1 font-mono text-[0.65rem] text-nav-muted">
                  {item.type}
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-nav-muted">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
