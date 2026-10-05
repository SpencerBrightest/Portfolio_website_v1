import { Hero } from "@/components/hero/hero"
import { SelectedWork } from "@/components/projects/selected-work"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <SelectedWork />

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-20 border-t border-nav-border py-20 sm:py-28"
      >
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-nav-muted">
              Contact
            </p>
            <Heading id="contact-heading" level={2}>
              Get in touch
            </Heading>
            <p className="mt-5 max-w-xl text-base leading-7 text-nav-muted">
              Contact details will be added here soon.
            </p>
          </div>
        </Container>
      </section>
    </main>
  )
}
