// Homepage hero section with a cleaner two-column layout and restrained utility icons.
import { ArrowRight, Download, Eye, Mail, MapPin } from "lucide-react"

import { ButtonLink } from "@/components/ui/button-link"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { HeroGrid } from "@/components/hero/hero-grid"
import { Reveal } from "@/components/ui/reveal"
import { siteContact } from "@/data/site"

const actionButtonClass =
  "min-h-11 rounded-full px-4 text-sm font-medium transition-transform hover:-translate-y-0.5 active:scale-[0.98] sm:text-[0.85rem]"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-0 items-start overflow-hidden py-6 nav:min-h-[calc(100svh-4.0625rem)] nav:items-center nav:pb-6 nav:pt-8"
    >
      <HeroGrid />
      <div className="relative z-10 w-full">
        <Container>
          <div className="grid items-center gap-5 sm:gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:gap-8 nav:gap-12">
            <Reveal className="order-2 w-full max-w-2xl md:order-1">
              <p className="mb-3 hidden items-center gap-2 rounded-full border border-nav-border px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-nav-muted md:inline-flex">
                Available for new work
              </p>

              <p className="mb-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-nav-muted sm:text-xs sm:tracking-[0.14em]">
                Hi, I&apos;m Spencer Bright
              </p>

              <Heading
                id="hero-heading"
                className="text-[2rem] leading-[0.98] tracking-[-0.05em] text-nav-foreground sm:text-4xl md:text-[2.75rem] lg:text-[4.5rem]"
              >
                Better <span className="text-about-accent"> technology </span> starts with people.
              </Heading>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-nav-muted sm:text-base">
                I build web and mobile apps for real users, and I share what I learn so others can
                build too.
              </p>

              <div className="mt-6 grid w-full max-w-[28rem] grid-cols-2 items-center gap-2.5">
                <ButtonLink href="/work" className={`${actionButtonClass} bg-primary text-primary-foreground`}>
                  View my work
                  <ArrowRight className="size-3.5 text-current" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink
                  href="/#contact"
                  variant="outline"
                  className={`${actionButtonClass} border-nav-border bg-nav-background text-nav-foreground hover:bg-nav-hover`}
                >
                  Get in touch
                </ButtonLink>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-nav-muted">
                <a
                  href={`mailto:${siteContact.email}`}
                  className="inline-flex items-center gap-1.5 text-nav-muted transition-colors hover:text-nav-foreground"
                >
                  <Mail className="size-3.5 shrink-0 text-neutral-400" aria-hidden="true" />
                  <span>{siteContact.email}</span>
                </a>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5 shrink-0 text-neutral-400" aria-hidden="true" />
                  <span>Bamenda, Cameroon</span>
                </span>
              </div>
            </Reveal>

            <Reveal className="order-1 w-full max-w-[13rem] justify-self-center sm:max-w-[18rem] md:order-2 md:ml-auto md:mr-0 md:max-w-[25rem] md:-translate-y-2">
              <div
                role="img"
                aria-label="Portrait upload placeholder"
                className="aspect-square rounded-[1.6rem] border border-nav-border bg-nav-panel p-2 nav:p-3"
              >
                <div
                  aria-hidden="true"
                  className="size-full rounded-[1.25rem] border border-nav-border bg-nav-background"
                />
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <ButtonLink
                  href="/portfolio.pdf"
                  download
                  className={`${actionButtonClass} w-full bg-primary text-primary-foreground`}
                >
                  <Download className="size-3.5 text-current" aria-hidden="true" />
                  Download CV
                </ButtonLink>
                <ButtonLink
                  href="/portfolio.pdf"
                  target="_blank"
                  rel="noopener"
                  variant="outline"
                  className={`${actionButtonClass} w-full border-nav-border bg-nav-background text-nav-foreground hover:bg-nav-hover`}
                >
                  <Eye className="size-3.5 text-neutral-400" aria-hidden="true" />
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
