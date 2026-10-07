import { Mail } from "lucide-react"
import { siFacebook, siGithub, siInstagram, siWhatsapp, siYoutube, siX } from "simple-icons"
import { cn } from "cn"

type SocialPlatform = "email" | "github" | "facebook" | "linkedin" | "instagram" | "youtube" | "x" | "whatsapp"

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
        className={`inline-flex items-center justify-center text-sm font-semibold leading-none ${className}`}
        aria-hidden="true"
      >
        in
      </span>
    )
  }

  const brandPath = {
    github: siGithub.path,
    facebook: siFacebook.path,
    instagram: siInstagram.path,
    youtube: siYoutube.path,
    x: siX.path,
    whatsapp: siWhatsapp.path,
  }[platform]
  const brandHoverColor =
    platform === "facebook"
      ? "hover:text-social-facebook group-hover:text-social-facebook group-focus-visible:text-social-facebook"
      : platform === "youtube"
        ? "hover:text-social-youtube group-hover:text-social-youtube group-focus-visible:text-social-youtube"
        : undefined

  return (
    <BrandGlyph
      path={brandPath}
      className={cn("transition-colors", className, brandHoverColor)}
    />
  )
}
