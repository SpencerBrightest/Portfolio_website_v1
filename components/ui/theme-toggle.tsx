"use client"

import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

import { Button } from "@/components/ui/button"

const subscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

const themeOptions = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "Device", Icon: Monitor },
] as const

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  )
  const { setTheme, theme } = useTheme()
  const activeTheme = mounted ? theme ?? "system" : "system"

  return (
    <div
      role="group"
      aria-label="Color theme"
      className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-nav-border bg-nav-panel p-1"
    >
      {themeOptions.map(({ value, label, Icon }) => {
        const isActive = activeTheme === value

        return (
          <Button
            key={value}
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label={`${label} theme`}
            aria-pressed={isActive}
            title={`${label} theme`}
            className={`size-9 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-foreground ${
              isActive
                ? "bg-nav-hover text-nav-foreground"
                : "text-nav-muted hover:bg-nav-hover hover:text-nav-foreground"
            }`}
            onClick={() => setTheme(value)}
          >
            <Icon className="size-[18px]" aria-hidden="true" strokeWidth={1.75} />
            <span className="sr-only">{label}</span>
          </Button>
        )
      })}
    </div>
  )
}
