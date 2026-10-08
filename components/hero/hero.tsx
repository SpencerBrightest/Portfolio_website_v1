// Homepage hero section with 2-column layout: left text stack + right portrait card with portfolio actions.
import { ArrowRight, Download, Eye } from "lucide-react"

import { ButtonLink } from "@/components/ui/button-link"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { HeroGrid } from "@/components/hero/hero-grid"
import { HeroProfileCard } from "@/components/hero/hero-profile-card"
import { Reveal } from "@/components/ui/reveal"

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
            {/* Left column — text stack and CTAs */}
            <Reveal className="max-w-2xl">
              <p className="mb-2 inline-flex min-h-7 items-center gap-2 rounded-full border border-nav-border px-3 text-xs text-nav-muted nav:mb-6">
                Available for new work
              </p>

              <p className="mb-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-nav-muted sm:text-xs sm:tracking-[0.14em] nav:mb-3">
                HI, I&apos;M SPENCER BRIGHT
              </p>

              <Heading
                id="hero-heading"
                className="text-[2rem] leading-[1.05] sm:text-6xl md:text-[clamp(2.75rem,5.8vw,4.25rem)] xl:text-[5.5rem]"
              >
                Empowering people through{" "}
                <span className="text-about-accent">technology</span> and
                community.
              </Heading>

              <p className="mt-2 max-w-xl text-sm text-nav-muted sm:text-base nav:mt-5">
                I am a software developer and builder passionate about using
                technology to create meaningful impact.
              </p>

              <div className="mt-3 grid w-full grid-cols-2 items-center gap-2 sm:flex sm:w-fit sm:flex-wrap sm:gap-3 nav:mt-7">
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
                  Download
                </ButtonLink>
                <ButtonLink
                  href="/portfolio.pdf"
                  target="_blank"
                  rel="noopener"
                  variant="outline"
                  className="min-h-10 rounded-full border-nav-border bg-nav-background px-2 text-xs text-nav-foreground hover:-translate-y-0.5 hover:bg-nav-hover hover:text-nav-foreground active:scale-[0.97] sm:px-4 sm:text-[0.85rem]"
                >
                  <Eye className="size-3.5" aria-hidden="true" />
                  See portfolio
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  )
}

