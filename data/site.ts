// Site metadata and public contact destinations used across the application.
export type SiteContact = {
  email?: string
  whatsapp?: string
  socials: Partial<Record<"github" | "facebook" | "linkedin" | "instagram" | "youtube" | "x", string>>
}

export const siteConfig = {
  name: "Spencer Bright",
  title: "Spencer Bright — Developer, Builder, Creator",
  description: "Portfolio and writing by Spencer Bright, Software Engineer & Computer Engineering Student.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://spencerbright.dev",
  ogImage: "/og.png",
  twitterCreator: "@spencer_bright",
}

export const siteContact: SiteContact = {
  email: "spenzerbrightest@gmail.com",
  whatsapp: "+237650987627",
  socials: {
    github: "https://github.com/SpencerBrightest",
    facebook: "https://www.facebook.com/spencer_brightest/",
    linkedin: "https://cm.linkedin.com/in/spencer-brightest",
    instagram: "https://www.instagram.com/spencer_brightest/",
    youtube: "https://youtube.com/@spencerbrightestbryanjr?si=BIh31fPItw29dm3a",
  },
}
