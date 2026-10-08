// Profile name and location card displayed beneath the hero portrait.
export function HeroProfileCard() {
  return (
    <section
      aria-label="Profile and location"
      className="mt-2 rounded-3xl border border-nav-border bg-nav-panel p-2 nav:mt-4 nav:p-2.5"
    >
      <div className="flex min-h-12 items-center justify-between rounded-2xl border border-nav-border bg-nav-background px-3 py-2 nav:min-h-16 nav:px-4 nav:py-3">
        <div>
          <p className="text-sm font-semibold text-nav-foreground">Spencer Bright</p>
          <p className="mt-0.5 text-xs text-nav-muted">Bamenda, Cameroon</p>
        </div>
      </div>
    </section>
  )
}

