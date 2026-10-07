import { ArrowRight } from "lucide-react"

import { SocialIcon } from "@/components/ui/social-icon"
import { ButtonLink } from "@/components/ui/button-link"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { Heading } from "@/components/ui/heading"
import { siteContact } from "@/data/site"

type ContactSocial = {
  label: string
  platform: "email" | "github" | "linkedin" | "instagram" | "youtube" | "facebook"
  href?: string
}

const socialLinks: ContactSocial[] = [
  {
    label: "Gmail",
    platform: "email",
    href: siteContact.email ? `mailto:${siteContact.email}` : undefined,
  },
  {
    label: "GitHub",
    platform: "github",
    href: siteContact.socials.github,
  },
  {
    label: "LinkedIn",
    platform: "linkedin",
    href: siteContact.socials.linkedin,
  },
  {
    label: "Instagram",
    platform: "instagram",
    href: siteContact.socials.instagram,
  },
  {
    label: "YouTube",
    platform: "youtube",
    href: siteContact.socials.youtube,
  },
  { label: "Facebook", platform: "facebook", href: siteContact.socials.facebook },
]

function SocialItem({ label, platform, href }: ContactSocial) {
  const content = (
    <>
      <SocialIcon platform={platform} className="size-7" />
      <span className="text-sm leading-5">{label}</span>
    </>
  )
  const className =
    "flex min-h-16 min-w-16 flex-col items-center justify-center gap-2 rounded-lg text-about-text transition-colors hover:text-about-accent focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-about-heading"

  return (
    <li>
      {href ? (
        <a
          href={href}
          aria-label={`Open ${label}${platform === "email" ? " email" : " profile"}`}
          className={className}
          {...(platform !== "email" ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {content}
        </a>
      ) : (
        <span className={`${className} cursor-default`} aria-label={`${label} link not configured`}>
          {content}
        </span>
      )}
    </li>
  )
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-t border-nav-border bg-nav-background py-12 sm:py-20"
    >
      <Container>
        <Reveal>
          <div className="grid gap-8 rounded-2xl border border-nav-border bg-nav-panel p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-x-10 sm:gap-y-8 sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-nav-muted">
                Let’s connect
              </p>
              <Heading
                id="contact-heading"
                level={2}
                className="font-about-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] font-bold tracking-[-0.03em] text-about-heading"
              >
                Have a <span className="text-about-accent">project</span> in mind or just want to
                talk?
              </Heading>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-nav-muted">
                I’m always open to new opportunities, collaborations and interesting conversations.
              </p>
            </div>

            {siteContact.email ? (
              <ButtonLink
                href={`mailto:${siteContact.email}`}
                className="min-h-12 w-fit gap-2 rounded-full bg-nav-foreground px-6 text-sm font-medium text-nav-background hover:bg-nav-muted hover:text-nav-background sm:justify-self-end"
              >
                Send a Message
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            ) : (
              <span
                aria-disabled="true"
                title="Add an email address in data/site.ts to enable messaging"
                className="inline-flex min-h-12 w-fit cursor-not-allowed items-center gap-2 rounded-full bg-nav-foreground px-6 text-sm font-medium text-nav-background opacity-55"
              >
                Send a Message
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            )}

            <ul
              aria-label="Contact and social links"
              className="flex flex-wrap items-center gap-2 border-t border-nav-border pt-5 sm:col-span-2 sm:gap-4"
            >
              {socialLinks.map((link) => (
                <SocialItem key={link.label} {...link} />
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
