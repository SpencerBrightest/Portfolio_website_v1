// Central project data and helpers used across the portfolio work pages.
export type Project = {
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string
  tags: string[]
  image?: {
    src: string
    alt: string
  }
  githubUrl?: string
  liveUrl?: string
  postedAt?: string
}

export const projects: Project[] = [
  {
    slug: "mixtas-ecommerce",
    title: "Mixtas E-commerce App",
    category: "E-commerce · Full-stack Web App",
    shortDescription: "A modern e-commerce platform built with Next.js, Supabase, and Tailwind CSS. Features seamless NotchPay API payment integration in sandbox mode, real-time product catalogues, and responsive UI.",
    description: `Mixtas is a full-featured, modern e-commerce platform built to showcase the future of online retail in Cameroon and across Francophone Africa. The platform was designed from the ground up with a premium shopping experience in mind — combining a clean, editorial aesthetic with robust engineering under the hood.

The storefront features a dynamic product catalogue with category filtering, real-time stock indicators, and a fully responsive layout optimised for both desktop and mobile. Customers can browse collections, view detailed product pages with image galleries, save favourites to a wishlist, and complete purchases through a streamlined multi-step checkout flow.

Payments are handled via the NotchPay API integrated in sandbox mode — Cameroon's leading payment gateway — supporting Mobile Money (MTN MoMo, Orange Money), card payments, and bank transfers. The checkout securely tokenises payment details, communicates with the NotchPay sandbox endpoint, and returns a real-time transaction status to the user without ever storing raw payment data on the server.

Authentication is powered by Supabase Auth, supporting email/password sign-in, magic link login, and OAuth providers. Each user account persists a cart, wishlist, and order history in a Supabase PostgreSQL database using Row Level Security policies to ensure complete data isolation between customers.

The admin panel (accessible at /admin) allows store managers to create and update products, manage inventory levels, review orders, and process refunds — all backed by Supabase real-time subscriptions so changes propagate instantly to the storefront without a page reload.

On the frontend, the UI is built entirely with Tailwind CSS using a custom design system that enforces consistent typography, spacing, and color tokens. Framer Motion powers the page transitions and micro-animations, giving the storefront a premium, polished feel that matches the brand's editorial direction.

The project is deployed on Vercel with automatic preview deployments for every pull request, environment variable management for the NotchPay sandbox keys, and edge-optimised image delivery via Next.js Image Optimization. The result is a fast, SEO-friendly storefront with Core Web Vitals scores consistently in the green.`,
    tags: ["Next.js", "Supabase", "Tailwind CSS", "NotchPay API", "TypeScript", "PostgreSQL", "Framer Motion", "Vercel"],
    image: {
      src: "/images/projects/mixtas-hero-image.jpg",
      alt: "Mixtas e-commerce storefront hero — woman wearing colorful sunglasses against teal background with Jackets for the modern man headline",
    },
    githubUrl: "https://github.com/SpencerBrightest/Mixtas",
    liveUrl: "https://mixtas.vercel.app",
    postedAt: "07/06/2026",
  },
  {
    slug: "waitlist-saas",
    title: "Waitlist SaaS",
    category: "Web app",
    shortDescription: "A streamlined waitlist service for early-stage SaaS products. Features automated email verification, referral tracking, and an admin dashboard for user queue management.",
    description: "A simple waitlist flow with an admin dashboard for growing products.",
    tags: ["Next.js", "Tailwind", "Node.js"],
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    category: "Mobile app",
    shortDescription: "A clean, intuitive mobile experience for keeping everyday spending in view. Provides budget tracking, dynamic spending categorization, and cloud synchronization.",
    description: "A clean mobile experience for keeping everyday spending in view.",
    tags: ["Flutter", "Firebase"],
  },
]

// Returns the project matching the given slug, or null if not found.
export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null
}
