// Homepage section order; add blog articles through content/blog and feature their slugs in BlogPreview.
import { BlogPreview } from "@/components/blog/blog-preview"
import { Contact } from "@/components/contact/contact"
import { Hero } from "@/components/hero/hero"
import { SelectedWork } from "@/components/projects/selected-work"
import { StackMarquee } from "@/components/stack/stack-marquee"
import { Section } from "@/components/ui/section"

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <SelectedWork />
      <BlogPreview />
      <Section id="tools" eyebrow="Stack" title="Tools I work with">
        <StackMarquee />
      </Section>
      <Contact />
    </main>
  )
}
