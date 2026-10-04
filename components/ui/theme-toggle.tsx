"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

import { Button } from "@/components/ui/button"

const subscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  )
  const { setTheme, theme } = useTheme()
  const isDark = theme !== "light"
  const nextTheme = isDark ? "light" : "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-lg"
      className="size-10 rounded-lg text-nav-muted hover:bg-nav-hover hover:text-nav-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nav-foreground"
      aria-label={mounted ? `Switch to ${nextTheme} mode` : "Theme toggle"}
      title={mounted ? `Switch to ${nextTheme} mode` : "Theme toggle"}
      disabled={!mounted}
      onClick={() => setTheme(nextTheme)}
    >
      <span className="relative grid size-5 place-items-center" aria-hidden="true">
        <Sun
          className={`absolute size-[18px] text-nav-foreground transition-[transform,opacity] duration-200 ${
            mounted && isDark ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
          }`}
          strokeWidth={1.75}
        />
        <Moon
          className={`absolute size-[18px] text-nav-foreground transition-[transform,opacity] duration-200 ${
            mounted && !isDark ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
          strokeWidth={1.75}
        />
      </span>
    </Button>
  )
}
