import type { Metadata } from "next"

import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { WhatsAppFloat } from "@/components/contact/whatsapp-float"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { projects } from "@/data/projects"
import { getPublishedBlogPosts } from "@/lib/blog"
import "./globals.css"

export const metadata: Metadata = {
  title: "Spencer Bright — Developer, Builder, Creator",
  description: "Portfolio and writing by Spencer Bright.",
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const latestPosts = (await getPublishedBlogPosts())
    .slice(0, 3)
    .map(({ slug, title, category }) => ({ slug, title, category }))
  const projectLinks = projects.map(({ slug, title, category }) => ({ slug, title, category }))

  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-nav-background text-nav-foreground">
        <ThemeProvider>
          <Navbar projects={projectLinks} latestPosts={latestPosts} />
          {children}
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  )
}
