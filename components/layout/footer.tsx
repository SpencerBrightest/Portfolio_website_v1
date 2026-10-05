import { siGithub } from "simple-icons"

import { CurrentYear } from "@/components/layout/current-year"
import { GitHubStars } from "@/components/layout/github-stars"
import { ButtonLink } from "@/components/ui/button-link"
import { Container } from "@/components/ui/container"
import { footerStack } from "@/data/stack"

const repositoryUrl = "https://github.com/SpencerBrightest/Portfolio_website_v1"

type BrandIconProps = {
  path: string
  className?: string
}

function BrandIcon({ path, className }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      focusable="false"
    >
      <path d={path} />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-nav-border bg-nav-background">
      <Container>
        <div className="flex min-h-56 flex-col justify-center gap-7 py-8 nav:grid nav:grid-cols-[1fr_auto] nav:items-center nav:gap-8 nav:py-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-nav-muted">
            <span className="shrink-0 text-nav-foreground">Built with</span>
            <ul
              aria-label="Technology stack"
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              {footerStack.map(({ label, iconPath }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <BrandIcon path={iconPath} className="size-4" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3 text-left nav:items-end nav:text-right">
            <ButtonLink
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View Spencer Bright's GitHub repository"
              className="h-10 gap-2 rounded-xl border border-nav-border bg-nav-panel px-4 text-xs font-medium text-nav-foreground hover:bg-nav-hover hover:text-nav-foreground"
            >
              <BrandIcon path={siGithub.path} className="size-3.5" />
              <span>Stars</span>
              <GitHubStars />
            </ButtonLink>

            <p className="text-xs leading-5 text-nav-muted">
              Copyright © Spencer Bright{" "}
              <CurrentYear initialYear={new Date().getFullYear()} />. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
