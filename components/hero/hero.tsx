// Homepage introduction; update the copy and layout here while keeping HeroGrid behind the readable foreground.
import { ArrowRight } from "lucide-react"

import { ButtonLink } from "@/components/ui/button-link"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { HeroGrid } from "@/components/hero/hero-grid"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-4.0625rem)] items-start overflow-hidden py-3 nav:pb-6 nav:pt-8"
    >
      <HeroGrid />
      <div className="relative z-10 w-full">
        <Container>
          <div className="grid items-start gap-3 sm:gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-8 nav:grid-cols-[minmax(0,1.28fr)_minmax(0,0.72fr)] nav:gap-12 md:max-xl:gap-8">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex min-h-8 items-center gap-2 rounded-full border border-nav-border px-3 text-[0.8125rem] text-nav-muted nav:mb-6">
                <span className="size-2 rounded-full bg-status" aria-hidden="true" />
                Available for new work
              </p>

              <p className="mb-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-nav-muted sm:text-xs sm:tracking-[0.14em] nav:mb-3">
                Developer · Builder · Creator
              </p>

              <Heading
                id="hero-heading"
                className="text-[clamp(2.6rem,10vw,3rem)] leading-[1.03] sm:text-6xl md:text-[clamp(2.75rem,5.8vw,4.25rem)] xl:text-[5.5rem]"
              >
                Spencer Bright
              </Heading>

              <p className="mt-3 max-w-xl text-base leading-7 text-nav-muted sm:text-lg sm:leading-8 nav:mt-5">
                Portfolio and writing are taking shape. Check back as I share what
                I build and learn.
              </p>

              <div className="mt-4 grid w-full grid-cols-2 items-center gap-2 sm:flex sm:w-fit sm:flex-wrap sm:gap-3 nav:mt-7">
                <ButtonLink
                  href="/work"
                  className="min-h-10 rounded-full px-2 text-xs transition-transform hover:-translate-y-0.5 active:scale-[0.97] sm:min-h-11 sm:px-6 sm:text-[0.95rem]"
                >
                  View my work
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink
                  href="/#contact"
                  variant="outline"
                  className="min-h-10 rounded-full border-nav-border bg-nav-background px-2 text-xs text-nav-foreground hover:-translate-y-0.5 hover:bg-nav-hover hover:text-nav-foreground active:scale-[0.97] sm:min-h-11 sm:px-6 sm:text-[0.95rem]"
                >
                  Get in touch
                </ButtonLink>
              </div>
            </div>

            <div
              role="img"
              aria-label="Portrait upload placeholder"
              className="mx-auto aspect-square w-full max-w-[22rem] rounded-3xl border border-nav-border bg-nav-panel p-3 md:ml-auto md:mx-0 md:mt-3 md:max-xl:mt-0 nav:max-w-[25rem]"
            >
              <div
                aria-hidden="true"
                className="size-full rounded-2xl border border-nav-border bg-nav-background"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
