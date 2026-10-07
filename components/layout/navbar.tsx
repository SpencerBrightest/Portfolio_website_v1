// Sticky site header providing primary navigation, theme switching, and mobile menu.
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"

import { Container } from "@/components/ui/container"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import type { Project } from "@/data/projects"
import type { BlogPostSummary } from "@/lib/blog"

const navLinkClass =
  "inline-flex min-h-10 items-center justify-center rounded-lg px-3 py-[0.45rem] text-[0.9rem] font-normal text-nav-muted transition-colors hover:bg-nav-hover hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground aria-[current=page]:bg-nav-hover aria-[current=page]:text-nav-foreground"

const mobileLinkClass =
  "flex min-h-11 w-full items-center rounded-lg px-3 py-2 text-base text-nav-muted transition-colors hover:bg-nav-hover hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-foreground aria-[current=page]:bg-nav-hover aria-[current=page]:text-nav-foreground"

// Determines whether the current path matches or is nested within a target route.
function isCurrentPath(pathname: string, target: string) {
  if (target === "/") return pathname === "/"
  return pathname === target || pathname.startsWith(`${target}/`)
}

type NavbarProject = Pick<Project, "slug" | "title" | "category">
type NavbarPost = Pick<BlogPostSummary, "slug" | "title" | "category">

export type NavbarProps = {
  projects?: NavbarProject[]
  latestPosts?: NavbarPost[]
}

// Renders the main top navigation bar with desktop links and mobile drawer.
export function Navbar({}: NavbarProps = {}) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!mobileMenuOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("pointerdown", handlePointerDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [mobileMenuOpen])

  // Closes the mobile navigation overlay.
  function closeMobileMenu() {
    setMobileMenuOpen(false)
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-nav-border bg-nav-background/88 backdrop-blur-xl"
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-2 nav:grid nav:grid-cols-[1fr_auto_1fr] nav:gap-4">
          <Link
            href="/"
            className="inline-flex min-h-11 shrink-0 items-center rounded-lg text-[2rem] font-semibold tracking-[-0.08em] text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground"
            aria-label="Spencer Bright home"
            aria-current={pathname === "/" ? "page" : undefined}
          >
            $<span className="text-about-accent">B</span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 nav:flex nav:justify-self-center"
          >
            <Link
              href="/"
              className={navLinkClass}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={navLinkClass}
              aria-current={isCurrentPath(pathname, "/about") ? "page" : undefined}
            >
              About
            </Link>
            <Link
              href="/work"
              className={navLinkClass}
              aria-current={isCurrentPath(pathname, "/work") ? "page" : undefined}
            >
              Work
            </Link>
            <Link
              href="/blog"
              className={navLinkClass}
              aria-current={isCurrentPath(pathname, "/blog") ? "page" : undefined}
            >
              Blog
            </Link>
          </nav>

          <div className="hidden items-center justify-self-end nav:flex">
            <ThemeToggle />
          </div>

          <div className="flex items-center justify-self-end gap-1 nav:hidden">
            <ThemeToggle />
            <Button
              ref={menuButtonRef}
              type="button"
              variant="ghost"
              size="icon-lg"
              className="size-11 rounded-lg text-nav-foreground hover:bg-nav-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-panel"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        <div
          id="mobile-navigation-panel"
          data-state={mobileMenuOpen ? "open" : "closed"}
          aria-hidden={!mobileMenuOpen}
          inert={!mobileMenuOpen}
          className="overflow-hidden border-t border-nav-border transition-[max-height,opacity,padding] duration-200 ease-out motion-reduce:transition-none nav:hidden data-[state=closed]:max-h-0 data-[state=closed]:border-transparent data-[state=closed]:py-0 data-[state=closed]:opacity-0 data-[state=open]:max-h-[calc(100svh-4rem)] data-[state=open]:overflow-y-auto data-[state=open]:py-3 data-[state=open]:opacity-100"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            <Link
              href="/"
              className={mobileLinkClass}
              aria-current={pathname === "/" ? "page" : undefined}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={mobileLinkClass}
              aria-current={isCurrentPath(pathname, "/about") ? "page" : undefined}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/work"
              className={mobileLinkClass}
              aria-current={isCurrentPath(pathname, "/work") ? "page" : undefined}
              onClick={closeMobileMenu}
            >
              Work
            </Link>
            <Link
              href="/blog"
              className={mobileLinkClass}
              aria-current={isCurrentPath(pathname, "/blog") ? "page" : undefined}
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}
