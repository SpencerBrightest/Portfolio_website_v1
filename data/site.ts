// Add real destinations here to turn the contact actions into working links.
export type SiteContact = {
  email?: string
  socials: Partial<Record<"facebook" | "linkedin" | "instagram" | "youtube" | "x", string>>
}

export const siteContact: SiteContact = {
  socials: {},
}
