import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"

export default function Home() {
  return (
    <main className="flex-1">
      <section className="flex min-h-[calc(100svh-4rem)] items-center py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-nav-muted">
              Developer · Builder · Creator
            </p>
            <Heading className="text-5xl leading-[1.03] sm:text-7xl">
              Pencer Bright
            </Heading>
            <p className="mt-6 max-w-xl text-lg leading-8 text-nav-muted">
              Portfolio and writing are taking shape. Check back as I share what
              I build and learn.
            </p>
          </div>
        </Container>
      </section>

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
