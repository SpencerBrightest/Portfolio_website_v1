// Application footer component displaying technology stack, repository star count, and copyright notice.
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
  color?: string
}

// Renders an SVG brand or technology icon from Simple Icons vector path data.
function BrandIcon({ path, className, color }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      style={color ? { color } : undefined}
      fill="currentColor"
      focusable="false"
    >
      <path d={path} />
    </svg>
  )
}

// Main page footer featuring responsive mobile layout and GitHub star count badge.
export function Footer() {
  return (
    <footer className="border-t border-nav-border bg-nav-background">
      <Container>
        <div className="flex flex-col gap-6 py-8 sm:gap-8 nav:grid nav:grid-cols-[1fr_auto] nav:items-center nav:gap-8 nav:py-10">
          <div className="flex flex-col gap-3 text-sm text-nav-muted sm:flex-row sm:items-center sm:gap-4">
            <span className="shrink-0 font-medium text-nav-foreground">Built with</span>
            <ul
              aria-label="Technology stack"
              className="flex flex-wrap items-center gap-x-4 gap-y-2.5"
            >
              {footerStack.map(({ label, iconPath, iconColor }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-medium transition-colors hover:text-nav-foreground sm:text-sm"
                >
                  <BrandIcon path={iconPath} className="size-4 shrink-0 sm:size-4.5" color={iconColor} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4 border-t border-nav-border/60 pt-6 text-left sm:flex-row sm:items-center sm:justify-between nav:border-t-0 nav:pt-0 nav:flex-col nav:items-end nav:gap-2.5 nav:text-right">
            <ButtonLink
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View Spencer Bright's GitHub repository"
              className="h-9 gap-2 rounded-xl border border-nav-border bg-nav-panel px-3.5 text-xs font-medium text-nav-foreground transition-colors hover:bg-nav-hover hover:text-nav-foreground shadow-xs sm:h-10 sm:px-4"
            >
              <BrandIcon path={siGithub.path} className="size-4 shrink-0" />
              <span>Star on GitHub</span>
              <span className="ml-0.5 inline-flex items-center rounded-md border border-nav-border/80 bg-nav-background px-1.5 py-0.5 font-mono text-[0.7rem] font-semibold text-nav-muted">
                <GitHubStars />
              </span>
            </ButtonLink>

            <p className="text-xs leading-relaxed text-nav-muted">
              Copyright © Spencer Bright{" "}
              <CurrentYear initialYear={new Date().getFullYear()} />. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

