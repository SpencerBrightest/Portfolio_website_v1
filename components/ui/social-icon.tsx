import { Mail } from "lucide-react"
import { siInstagram, siYoutube, siX } from "simple-icons"

type SocialPlatform = "email" | "linkedin" | "instagram" | "youtube" | "x"

type SocialIconProps = {
  platform: SocialPlatform
  className?: string
}

type BrandGlyphProps = {
  path: string
  className?: string
}

function BrandGlyph({ path, className }: BrandGlyphProps) {
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

export function SocialIcon({ platform, className = "size-4" }: SocialIconProps) {
  if (platform === "email") {
    return <Mail className={className} strokeWidth={1.8} aria-hidden="true" />
  }

  if (platform === "linkedin") {
    return (
      <span
        className={`inline-flex size-4 items-center justify-center text-xs font-semibold leading-none ${className}`}
        aria-hidden="true"
      >
        in
      </span>
    )
  }

  const brandPath = {
    instagram: siInstagram.path,
    youtube: siYoutube.path,
    x: siX.path,
  }[platform]

  return <BrandGlyph path={brandPath} className={className} />
}
