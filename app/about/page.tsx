import Link from "next/link"

import { InspirationSection } from "@/components/about/inspiration-section"
import { RecentWriting } from "@/components/about/recent-writing"
import { UsageSection } from "@/components/about/usage-section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"

export default function AboutPage() {
  return (
    <main className="flex-1 bg-nav-background text-about-heading">
      <Container className="py-14 sm:py-20">
        <article className="mx-auto w-full max-w-[46.875rem]" aria-labelledby="about-heading">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-about-text">
            HI, I&apos;M SPENCER
          </p>
          <Heading
            id="about-heading"
            className="mt-4 font-about-display text-[clamp(2.4rem,7vw,3.2rem)] leading-[1.15] font-bold tracking-[-0.03em] text-about-heading"
          >
            About Me
          </Heading>

          <div className="mt-8 space-y-6 text-about-text sm:mt-10 sm:space-y-7">
            <p>
              I am a Level 400 Computer Engineering student at the National Higher Polytechnic
              Institute of the University of Bamenda (NAHPI UBA). My ultimate career vision is to
              become a leading <span className="text-about-accent">cybersecurity expert</span>. To
              build the strongest possible foundation for securing digital infrastructure, I am
              currently anchoring my skills in robust{" "}
              <span className="text-about-accent">software engineering principles</span>—firmly
              believing that one must thoroughly understand how complex systems are built from the
              inside out to effectively protect them against advanced threats.
            </p>

            <p>
              Over the past two years, I have actively translated academic theory into practical,
              industry-level applications. I began my journey in{" "}
              <span className="text-about-accent">web development</span> in 2024, which quickly
              opened doors to an academic internship at the TIC Foundation in 2025 where I honed my
              core engineering workflows. Building on that momentum, I completed a{" "}
              <span className="text-about-accent">mobile application development internship</span>{" "}
              at Innova in 2026, diversifying my developer toolkit across both web and mobile
              ecosystems.
            </p>

            <p>
              I am always eager to collaborate on innovative{" "}
              <span className="text-about-accent">Software Engineering</span> projects and also
              open for remote roles.{" "}
              <Link
                href="/#contact"
                className="text-about-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-about-heading"
              >
                Let’s connect
              </Link>{" "}
              to build something secure and impactful together!
            </p>
          </div>
        </article>
      </Container>
      <RecentWriting />
      <UsageSection />
      <InspirationSection />
    </main>
  )
}
