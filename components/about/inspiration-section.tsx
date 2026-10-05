import { Section } from "@/components/ui/section"

export function InspirationSection() {
  return (
    <Section
      id="about-inspiration"
      eyebrow="Inspiration"
      title="Heroes"
      className="pb-28 sm:pb-36"
    >
      <blockquote className="mt-8 max-w-3xl border-l-2 border-nav-border pl-5 sm:pl-8">
        <p className="text-xl leading-relaxed text-nav-foreground sm:text-2xl">
          “I have no special talent. I am only passionately curious.”
        </p>
        <footer className="mt-4 text-sm text-nav-muted">
          — <cite className="not-italic">Albert Einstein</cite>
        </footer>
      </blockquote>
    </Section>
  )
}
