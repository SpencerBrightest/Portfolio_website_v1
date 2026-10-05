"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"

import { Container } from "@/components/ui/container"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const navLinkClass =
  "inline-flex min-h-10 items-center justify-center rounded-lg px-3 py-[0.45rem] text-[0.9rem] font-normal text-nav-muted transition-colors hover:bg-nav-hover hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground aria-[current=page]:bg-nav-hover aria-[current=page]:text-nav-foreground"

const mobileLinkClass =
  "flex min-h-11 w-full items-center rounded-lg px-3 py-2 text-base text-nav-muted transition-colors hover:bg-nav-hover hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-foreground aria-[current=page]:bg-nav-hover aria-[current=page]:text-nav-foreground"

function isCurrentPath(pathname: string, target: string) {
  if (target === "/") return pathname === "/"
  return pathname === target || pathname.startsWith(`${target}/`)
}

export function Navbar() {
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

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-nav-border bg-nav-background/88 backdrop-blur-xl"
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-2 nav:grid nav:grid-cols-[1fr_auto_1fr] nav:gap-4">
          <Link
            href="/"
            className="inline-flex min-h-11 shrink-0 items-center rounded-lg text-[2rem] font-semibold tracking-[0.04em] text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground"
            aria-label="Spencer Bright home"
            aria-current={pathname === "/" ? "page" : undefined}
          >
            $B
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

            <NavigationMenu
              className="flex-none"
              popupClassName="rounded-xl border border-nav-border bg-nav-panel text-nav-foreground shadow-nav-dropdown ring-0"
            >
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="min-h-10 h-auto rounded-lg px-3 py-[0.45rem] text-[0.9rem] font-normal text-nav-muted hover:bg-nav-hover hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground data-popup-open:bg-nav-hover data-popup-open:text-nav-foreground">
                    Work
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-2 transition-[opacity,transform,translate] duration-150 data-ending-style:translate-y-1 data-ending-style:opacity-0 data-starting-style:translate-y-1 data-starting-style:opacity-0 data-[motion^=from-]:animate-none data-[motion^=to-]:animate-none motion-reduce:transition-none">
                    <ul className="w-[17rem] max-w-[calc(100vw-3rem)]">
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/work" />}
                          className="group/link flex items-center justify-between rounded-lg px-3 py-3 text-sm text-nav-foreground hover:bg-nav-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-foreground"
                        >
                          <span className="font-medium">All work</span>
                          <ArrowUpRight
                            className="size-4 text-nav-muted transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="min-h-10 h-auto rounded-lg px-3 py-[0.45rem] text-[0.9rem] font-normal text-nav-muted hover:bg-nav-hover hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground data-popup-open:bg-nav-hover data-popup-open:text-nav-foreground">
                    Blog
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-2 transition-[opacity,transform,translate] duration-150 data-ending-style:translate-y-1 data-ending-style:opacity-0 data-starting-style:translate-y-1 data-starting-style:opacity-0 data-[motion^=from-]:animate-none data-[motion^=to-]:animate-none motion-reduce:transition-none">
                    <ul className="w-[17rem] max-w-[calc(100vw-3rem)]">
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/blog" />}
                          className="group/link flex items-center justify-between rounded-lg px-3 py-3 text-sm text-nav-foreground hover:bg-nav-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-foreground"
                        >
                          <span className="font-medium">All posts</span>
                          <ArrowUpRight
                            className="size-4 text-nav-muted transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/#contact" className={navLinkClass}>
              Contact
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
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/work"
              className={mobileLinkClass}
              aria-current={isCurrentPath(pathname, "/work") ? "page" : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/blog"
              className={mobileLinkClass}
              aria-current={isCurrentPath(pathname, "/blog") ? "page" : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className={mobileLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}
