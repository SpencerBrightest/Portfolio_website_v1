import type { Metadata } from "next"

import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { siteContact } from "@/data/site"

export const metadata: Metadata = {
  title: "About Me | Spencer Bright",
  description:
    "About Spencer Bright, a Computer Engineering student building a foundation in software engineering and cybersecurity.",
}

const contactHref = siteContact.email
  ? `mailto:${siteContact.email}`
  : "mailto:?subject=Let's%20connect"

export default function Home() {
  return (
    <main
      data-page="about"
      className="min-h-[calc(100svh-4rem)] bg-about-background font-about-body text-about-text"
    >
      <Container className="max-w-[798px]">
        <article className="mx-auto w-full max-w-[750px] py-16 sm:py-24">
          <div className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-about-text sm:mb-6">
            HI, I'M SPENCER
          </div>

          <Heading
            id="about-heading"
            className="mb-8 font-about-display text-[3.2rem] leading-[1.15] font-bold tracking-[-0.03em] text-about-heading sm:mb-10"
          >
            About Me
          </Heading>

          <div className="space-y-6 text-[1.125rem] leading-[1.6] text-about-text sm:space-y-7">
            <p>
              I am a Level 400 Computer Engineering student at the National Higher
              Polytechnic Institute of the University of Bamenda (NAHPI UBA). My
              ultimate career vision is to become a leading{" "}
              <span className="font-medium text-about-accent">cybersecurity expert</span>.
              To build the strongest possible foundation for securing digital
              infrastructure, I am currently anchoring my skills in robust{" "}
              <span className="font-medium text-about-accent">software engineering</span>{" "}
              principles—firmly believing that one must thoroughly understand how
              complex systems are built from the inside out to effectively protect
              them against advanced threats.
            </p>

            <p>
              Over the past two years, I have actively translated academic theory
              into practical, industry-level applications. I began my journey in
              web development in 2024, which quickly opened doors to an academic
              internship at the TIC Foundation in 2025 where I honed my core
              engineering workflows. Building on that momentum, I completed a
              mobile application development internship at Innova in 2026,
              diversifying my developer toolkit across both web and mobile
              ecosystems.
            </p>

            <p>
              I am always eager to collaborate on innovative SWE projects or
              discuss emerging patterns in <span className="font-medium text-about-accent">network security</span>.
              Let’s connect to build something secure and impactful together!
            </p>
          </div>

          <footer
            id="contact"
            className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-about-divider pt-5 text-sm sm:mt-12 sm:pt-6"
          >
            <p className="text-about-text">
              © 2026 Spencer. Built with passion and code.
            </p>
            <a
              href={contactHref}
              aria-label="Get in touch with Spencer by email"
              className="inline-flex min-h-11 items-center font-medium tracking-[0.04em] text-about-heading transition-colors hover:text-about-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-about-accent"
            >
              GET IN TOUCH <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </footer>
        </article>
      </Container>
    </main>
  )
}
