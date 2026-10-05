import { ArrowRight } from "lucide-react"

import { SocialIcon } from "@/components/ui/social-icon"
import { ButtonLink } from "@/components/ui/button-link"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { siteContact } from "@/data/site"

type ContactSocial = {
  label: string
  platform: "email" | "linkedin" | "instagram" | "youtube" | "x"
  href?: string
}

const socialLinks: ContactSocial[] = [
  {
    label: "Gmail",
    platform: "email",
    href: siteContact.email ? `mailto:${siteContact.email}` : undefined,
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
  { label: "X", platform: "x", href: siteContact.socials.x },
]

function SocialItem({ label, platform, href }: ContactSocial) {
  const content = (
    <>
      <SocialIcon platform={platform} className="size-4" />
      <span className="text-[0.7rem] leading-4">{label}</span>
    </>
  )
  const className =
    "flex min-w-10 flex-col items-center justify-center gap-1 text-nav-muted transition-colors hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground"

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
      className="scroll-mt-20 border-t border-nav-border bg-nav-background py-3 sm:py-4"
    >
      <Container>
        <div className="grid items-center gap-6 nav:grid-cols-[minmax(0,1fr)_auto_auto] nav:gap-10">
          <div className="max-w-xl">
            <p className="mb-1.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-nav-muted">
              Let’s connect
            </p>
            <Heading
              id="contact-heading"
              level={2}
              className="text-lg leading-snug sm:text-xl"
            >
              Have a project in mind or just want to talk?
            </Heading>
            <p className="mt-1.5 max-w-lg text-nav-muted">
              I’m always open to new opportunities, collaborations and interesting conversations.
            </p>
          </div>

          {siteContact.email ? (
            <ButtonLink
              href={`mailto:${siteContact.email}`}
              className="min-h-11 w-fit gap-2 rounded-md bg-nav-foreground px-4 text-xs font-medium text-nav-background hover:bg-nav-muted hover:text-nav-background"
            >
              Send a Message
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </ButtonLink>
          ) : (
            <span
              aria-disabled="true"
              title="Add an email address in data/site.ts to enable messaging"
              className="inline-flex min-h-11 w-fit cursor-not-allowed items-center gap-2 rounded-md bg-nav-foreground px-4 text-xs font-medium text-nav-background opacity-55"
            >
              Send a Message
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </span>
          )}

          <ul aria-label="Contact and social links" className="flex items-center gap-4 sm:gap-5">
            {socialLinks.map((link) => (
              <SocialItem key={link.label} {...link} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
