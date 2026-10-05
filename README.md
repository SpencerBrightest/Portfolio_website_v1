# Spencer Bright — Portfolio

A personal portfolio and writing site for Spencer Bright. It brings together selected projects, technical writing, an about page, contact links, and the tools used to build the site.

## Highlights

- Responsive portfolio homepage with an introduction, selected projects, featured writing, tools marquee, and contact section.
- Work index and individual project pages, backed by data in `data/projects.ts`.
- Blog index and MDX article pages with dates, reading times, tags, images, share links, and related posts.
- About page, shared navigation and footer, and a floating WhatsApp contact link.
- Light, dark, and system theme support.
- Contact/social destinations centrally configured in `data/site.ts`.
- Footer GitHub star count fetched from the GitHub repository API; the footer retains a neutral fallback if GitHub is unavailable.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19, TypeScript 5 |
| Styling | Tailwind CSS 4, CSS variables, `tw-animate-css` |
| Components | shadcn/ui v4 (`base-nova` style), Base UI primitives |
| Icons | Lucide React and Simple Icons |
| Motion | Framer Motion |
| Blog content | MDX, `gray-matter`, `next-mdx-remote` |
| Theme | `next-themes` |
| Runtime | Node.js 20 or later; npm and the committed `package-lock.json` |

## Requirements

- Node.js 20+
- npm

No environment variables are required for local development. The site uses public image URLs in article frontmatter and fetches the public GitHub repository's star count in the browser.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available scripts:

```bash
npm run dev          # Start the development server
npm run lint         # Run ESLint
npx tsc --noEmit     # Check TypeScript without emitting files
npm run build        # Create a production build
npm run start        # Serve the production build (after npm run build)
```

## Project structure

```text
app/                         Next.js routes, root layout, and global styles
  about/page.tsx             About page
  blog/page.tsx              Published blog index
  blog/[slug]/page.tsx       MDX article route
  work/page.tsx              Project index
  work/[slug]/page.tsx       Project detail route
  page.tsx                   Homepage section composition
  layout.tsx                 Shared theme provider, navigation, footer, and WhatsApp button
components/
  blog/                      Blog cards, MDX renderers, article sidebar, follow links
  contact/                   Homepage contact and floating WhatsApp action
  hero/                      Homepage introduction and grid background
  layout/                    Navigation, footer, GitHub stars, current year
  projects/                  Project cards, media, and selected work
  stack/                      Animated tools marquee and tool icons
  ui/                          Shared UI primitives and social icons
content/blog/                  Blog articles in MDX format
context/design.md              Project design notes
data/
  content.ts                   Empty placeholder (not currently used)
  projects.ts                 Project content
  site.ts                     Email, WhatsApp, and social destinations
  stack.ts                    Technology marquee and footer icon data
lib/blog.ts                   MDX frontmatter parsing and blog loaders
public/blog/                  Local blog assets, when used
public/projects/              Local project assets, when used
```

## Updating site content

### Projects

Edit `data/projects.ts` to add or change project summaries. Project details are rendered by the `/work` routes.

### Blog posts

Create an `.mdx` file in `content/blog/`, using its filename as the URL slug (for example `content/blog/my-new-post.mdx` becomes `/blog/my-new-post`). The frontmatter supports:

```yaml
---
title: "Post title"
description: "Short summary shown in the index and metadata."
date: "2026-10-05"
category: "Developer tools"
readTime: "5 min read"
image:
  src: "https://example.com/image.jpg"
  alt: "A useful description of the image."
tags:
  - TypeScript
draft: false
---

Article content in Markdown/MDX.
```

Available categories are defined in `BLOG_CATEGORIES` in `lib/blog.ts`. Posts marked `draft: true` are excluded from the published index and production article routes. Featured homepage posts are chosen by slug in `components/blog/blog-preview.tsx`.

### Contact details

Update `data/site.ts` to change the email address, WhatsApp number, or social profile URLs. The floating WhatsApp link builds its `wa.me` URL from this number.

### Technology list

Edit `data/stack.ts` to maintain the tools marquee and footer technology icons. Brand SVG paths and their colors are sourced from Simple Icons.

## Styling and conventions

- Global colors, typography, breakpoints, and theme variables live in `app/globals.css`.
- Tailwind CSS v4 is loaded through `@tailwindcss/postcss` in `postcss.config.mjs`.
- The `@/*` import alias maps to the repository root.
- Shared UI components live in `components/ui/`; route-specific features are grouped under `components/`.

## Deployment

Build with `npm run build`, then deploy the Next.js application to a Node-compatible host or Vercel. For a self-hosted production server, run `npm run start` after the build. See the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying) for hosting options.
