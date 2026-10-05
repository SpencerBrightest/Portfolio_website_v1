// Configure the public contact destinations used across the site.
export type SiteContact = {
  email?: string
  whatsapp?: string
  socials: Partial<Record<"github" | "facebook" | "linkedin" | "instagram" | "youtube" | "x", string>>
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
