import type { Metadata } from "next"

import { Navbar } from "@/components/layout/navbar"
import { ThemeProvider } from "@/components/ui/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pencer Bright — Developer, Builder, Creator",
  description: "Portfolio and writing by Pencer Bright.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-nav-background text-nav-foreground">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
