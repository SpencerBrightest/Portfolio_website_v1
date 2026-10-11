// Homepage section order; add blog articles through content/blog and feature their slugs in BlogPreview.
import { Hero } from "@/components/hero/hero"
import { SelectedWork } from "@/components/projects/selected-work"
import { Reveal } from "@/components/ui/reveal"
import { Section } from "@/components/ui/section"
import dynamic from "next/dynamic"

const BlogPreview = dynamic(() => import("@/components/blog/blog-preview").then((mod) => mod.BlogPreview), {
  loading: () => null,
})

const StackMarquee = dynamic(() => import("@/components/stack/stack-marquee").then((mod) => mod.StackMarquee), {
  loading: () => null,
})

const Contact = dynamic(() => import("@/components/contact/contact").then((mod) => mod.Contact), {
  loading: () => null,
})

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <SelectedWork />
      <BlogPreview />
      <Section id="tools" eyebrow="Stack" title="Tools I work with">
        <Reveal>
          <StackMarquee />
        </Reveal>
      </Section>
      <Contact />
    </main>
  )
}
