import { ArrowRight } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { ButtonLink } from "@/components/ui/button-link"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-[calc(100svh-4rem)] items-center py-16 sm:py-20 nav:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 nav:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] nav:gap-16">
          <div className="max-w-2xl">
            <p className="mb-7 inline-flex min-h-8 items-center gap-2 rounded-full border border-nav-border px-3 text-xs text-nav-muted">
              <span className="size-2 rounded-full bg-status" aria-hidden="true" />
              Available for new work
            </p>

            <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-nav-muted">
              Developer · Builder · Creator
            </p>

            <Heading
              id="hero-heading"
              className="text-5xl leading-[1.03] sm:text-6xl nav:text-7xl"
            >
              Spencer Bright
            </Heading>

            <p className="mt-6 max-w-xl text-lg leading-8 text-nav-muted">
              Portfolio and writing are taking shape. Check back as I share what
              I build and learn.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink
                href="/work"
                className="min-h-11 rounded-full px-6 text-[0.95rem] transition-transform hover:-translate-y-0.5 active:scale-[0.97]"
              >
                View my work
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="/#contact"
                variant="outline"
                className="min-h-11 rounded-full border-nav-border bg-nav-background px-6 text-[0.95rem] text-nav-foreground hover:-translate-y-0.5 hover:bg-nav-hover hover:text-nav-foreground active:scale-[0.97]"
              >
                Get in touch
              </ButtonLink>
            </div>
          </div>

          <div
            role="img"
            aria-label="Portrait upload placeholder"
            className="mx-auto aspect-square w-full max-w-[22rem] rounded-3xl border border-nav-border bg-nav-panel p-3 nav:max-w-[25rem]"
          >
            <div
              aria-hidden="true"
              className="size-full rounded-2xl border border-nav-border bg-nav-background"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
