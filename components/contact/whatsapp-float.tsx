import { SocialIcon } from "@/components/ui/social-icon"
import { siteContact } from "@/data/site"

export function WhatsAppFloat() {
  const phoneNumber = siteContact.whatsapp?.replace(/\D/g, "")

  if (!phoneNumber) return null

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Spencer on WhatsApp"
      title="Chat with me on WhatsApp"
      className="fixed right-5 bottom-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-foreground motion-reduce:transition-none sm:right-6 sm:bottom-6"
    >
      <SocialIcon platform="whatsapp" className="size-7" />
    </a>
  )
}
