// Homepage hero section with 2-column layout: left text stack + right portrait card with portfolio actions.
import { ArrowRight, Download, Eye } from "lucide-react"

import { ButtonLink } from "@/components/ui/button-link"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { HeroGrid } from "@/components/hero/hero-grid"
import { HeroProfileCard } from "@/components/hero/hero-profile-card"
import { Reveal } from "@/components/ui/reveal"

// Main homepage hero component displaying introduction, educational credentials, and profile card.
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-0 items-start overflow-hidden py-6 nav:min-h-[calc(100svh-4.0625rem)] nav:items-center nav:pb-6 nav:pt-8"
    >
      <HeroGrid />
      <div className="relative z-10 w-full">
        <Container>
          <div className="grid items-start gap-4 sm:gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-8 nav:grid-cols-[minmax(0,1.28fr)_minmax(0,0.72fr)] nav:gap-12 md:max-xl:gap-8">
            {/* Left column — text stack, credentials cards, and CTAs */}
            <Reveal className="max-w-2xl">
              <p className="mb-2 inline-flex min-h-7 items-center gap-2 rounded-full border border-nav-border px-3 text-xs text-nav-muted nav:mb-4">
                Available for new work
              </p>

              <p className="mb-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-nav-muted sm:text-xs sm:tracking-[0.14em] nav:mb-2">
                HI, I&apos;M SPENCER BRIGHT
              </p>

              <Heading
                id="hero-heading"
                className="text-xl leading-snug sm:text-3xl md:text-4xl lg:text-[2.75rem]"
              >
                Empowering people through{" "}
                <span className="text-about-accent">technology</span> and
                community.
              </Heading>

              <p className="mt-2 max-w-xl text-sm text-nav-muted sm:text-base nav:mt-4">
               I code build and innovate using the latest technologies to solve real life problems
              </p>

              {/* Status and university credentials cards */}
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-2.5 nav:mt-5">
                <div className="rounded-2xl border border-nav-border bg-nav-panel p-2.5">
                  <p className="font-mono text-[0.65rem] uppercase tracking-wider text-nav-muted">
                    Current
                  </p>
                  <p className="mt-1 text-xs font-semibold text-nav-foreground sm:text-[0.82rem] leading-tight">
                    Computer Engineering Student
                  </p>
                </div>
                <div className="rounded-2xl border border-nav-border bg-nav-panel p-2.5">
                  <p className="font-mono text-[0.65rem] uppercase tracking-wider text-nav-muted">
                    University
                  </p>
                  <p className="mt-1 text-xs font-semibold text-nav-foreground sm:text-[0.82rem] leading-tight">
                    University of Bamenda
                  </p>
                </div>
                <div className="rounded-2xl border border-nav-border bg-nav-panel p-2.5">
                  <p className="font-mono text-[0.65rem] uppercase tracking-wider text-nav-muted">
                    Expected Graduation
                  </p>
                  <p className="mt-1 text-xs font-semibold text-nav-foreground sm:text-[0.82rem] leading-tight">
                    2028
                  </p>
                </div>
              </div>

              {/* Left column action buttons aligned in a 2-column grid */}
              <div className="mt-4 grid w-full max-w-xs grid-cols-2 items-center gap-2 sm:max-w-sm nav:mt-6">
                <ButtonLink
                  href="/work"
                  className="min-h-10 rounded-full px-2 text-xs transition-transform hover:-translate-y-0.5 active:scale-[0.97] sm:px-4 sm:text-xs"
                >
                  View my work
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink
                  href="/#contact"
                  variant="outline"
                  className="min-h-10 rounded-full border-nav-border bg-nav-background px-2 text-xs text-nav-foreground hover:-translate-y-0.5 hover:bg-nav-hover hover:text-nav-foreground active:scale-[0.97] sm:px-4 sm:text-xs"
                >
                  Get in touch
                </ButtonLink>
              </div>
            </Reveal>

            {/* Right column — portrait card, profile info, and portfolio actions */}
            <Reveal className="mx-auto w-full max-w-[13rem] sm:max-w-[18rem] md:ml-auto md:mx-0 nav:max-w-[25rem]">
              <div
                role="img"
                aria-label="Portrait upload placeholder"
                className="aspect-square rounded-3xl border border-nav-border bg-nav-panel p-2 nav:p-3"
              >
                <div
                  aria-hidden="true"
                  className="size-full rounded-2xl border border-nav-border bg-nav-background"
                />
              </div>
              <HeroProfileCard />

              {/* Portfolio download and view actions */}
              <div className="mt-2 grid grid-cols-2 gap-2 nav:mt-3">
                <ButtonLink
                  href="/portfolio.pdf"
                  download
                  className="min-h-10 rounded-full px-2 text-xs transition-transform hover:-translate-y-0.5 active:scale-[0.97] sm:px-4 sm:text-[0.85rem]"
                >
                  <Download className="size-3.5" aria-hidden="true" />
                  Download CV
                </ButtonLink>
                <ButtonLink
                  href="/portfolio.pdf"
                  target="_blank"
                  rel="noopener"
                  variant="outline"
                  className="min-h-10 rounded-full border-nav-border bg-nav-background px-2 text-xs text-nav-foreground hover:-translate-y-0.5 hover:bg-nav-hover hover:text-nav-foreground active:scale-[0.97] sm:px-4 sm:text-[0.85rem]"
                >
                  <Eye className="size-3.5" aria-hidden="true" />
                  See CV
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  )
}
