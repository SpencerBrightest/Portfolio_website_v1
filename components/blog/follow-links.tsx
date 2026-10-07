import { Heading } from "@/components/ui/heading"
import { SocialIcon } from "@/components/ui/social-icon"
import { siteContact } from "@/data/site"

type FollowPlatform = "facebook" | "instagram" | "linkedin" | "youtube"

const followPlatforms: { label: string; platform: FollowPlatform }[] = [
  { label: "Facebook", platform: "facebook" },
  { label: "Instagram", platform: "instagram" },
  { label: "LinkedIn", platform: "linkedin" },
  { label: "YouTube", platform: "youtube" },
]

export function FollowLinks() {
  return (
    <section
      className="mt-14 border-t border-nav-border pt-8 sm:mt-16"
      aria-labelledby="follow-me-heading"
    >
      <Heading id="follow-me-heading" level={2} className="text-2xl">
        Follow me
      </Heading>
      <p className="mt-2 max-w-xl text-nav-muted">
        Follow along for new projects, notes, and what I’m learning next.
      </p>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {followPlatforms.map(({ label, platform }) => {
          const href = siteContact.socials[platform]
          const content = (
            <>
              <SocialIcon platform={platform} className="size-5" />
              <span className="text-sm font-medium">{label}</span>
            </>
          )
          const className =
            "group flex min-h-12 items-center justify-center gap-2 rounded-lg border border-nav-border px-3 text-nav-foreground transition-colors hover:bg-nav-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-foreground"

          return (
            <li key={platform}>
              {href ? (
                <a href={href} target="_blank" rel="noreferrer" className={className}>
                  {content}
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  title={`${label} profile link is not configured`}
                  className={`${className} cursor-default text-nav-muted`}
                >
                  {content}
                </span>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
