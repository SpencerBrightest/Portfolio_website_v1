// Root application layout configuring fonts, base metadata, theme provider, and shell navigation.
import type { Metadata, Viewport } from "next"
import { Instrument_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google"

import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { WhatsAppFloat } from "@/components/contact/whatsapp-float"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { siteConfig } from "@/data/site"
import "./globals.css"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space-grotesk",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Spencer Bright",
    "Software Engineer",
    "Full Stack Developer",
    "Web Development",
    "Mobile Development",
    "Cybersecurity",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterCreator,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// Renders the root HTML document with custom font variables and theme wrapper.
export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${instrumentSans.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-nav-background text-nav-foreground">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  )
}
