// Decorative perspective grid for the hero only; tune perspective, spacing, line width, and fade here.
export function HeroGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden [perspective:700px]"
    >
      <div
        className="absolute inset-x-[-50%] bottom-0 h-[160%] origin-bottom [transform:rotateX(62deg)] bg-[linear-gradient(to_right,var(--grid-line)_1.5px,transparent_1.5px),linear-gradient(to_bottom,var(--grid-line)_1.5px,transparent_1.5px)] [background-size:72px_72px] [mask-image:linear-gradient(to_top,black_40%,rgba(0,0,0,0.25))]"
      />
    </div>
  )
}
