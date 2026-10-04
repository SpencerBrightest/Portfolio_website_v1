# DESIGN.md: $SPENCER BRIGHT design system (V1)

The single source of truth for how the site looks. Use these values exactly. If something is not defined here, choose the simplest option that fits the principles below.

## 1. Principles

1. **KISS. Less, but better.** Remove before adding.
2. **Monochrome and calm.** Color appears only in tool-icon hovers and one status dot.
3. **Typography does the work.** Big, confident type and generous whitespace instead of decoration.
4. **One system.** Same tokens, container, spacing and components on every page and in both themes.
5. **Subtle motion.** Fast, smooth, purposeful. Everything respects reduced motion.
6. **Real over fake.** No invented numbers, testimonials or statistics.

## 2. Brand

| | |
|---|---|
| Name | $SPENCER BRIGHT |
| Short mark | $B (set in the text font, weight 600, letter-spacing 0.04em) |
| Role line | Developer · Builder · Creator |
| Footer phrase | Build · Learn · Grow |
| Voice | Direct, specific, personal. First person. No buzzwords ("passionate", "innovative", "cutting-edge"). |

## 3. Color tokens

Components must use tokens, never raw hex values.

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `bg` | `#0B0B0B` | `#FAFAF8` | Page background |
| `surface` | `#131313` | `#F1F1EE` | Thumbnails, image placeholders |
| `panel` | `#0F0F0F` | `#FFFFFF` | Dropdown panels |
| `hover` | `#1A1A19` | `#EDEDEA` | Hovered/active menu items, icon-button hover |
| `fg` | `#F2F2EF` | `#111111` | Primary text, solid buttons, tool icons (default) |
| `muted` | `#9A9A95` | `#5F5F5A` | Secondary text, labels |
| `line` | `#242422` | `#E2E2DE` | All borders and dividers |
| `hover-border` | `#4A4A47` | `#B8B8B2` | Card border on hover |
| `grid-line` | `rgba(255,255,255,.08)` | `rgba(0,0,0,.08)` | Light-theme hero grid |
| `status` | `#3DDC84` | `#1FA85A` | Availability dot only |

Rules: no gradients, glows, glass or drop-shadow decoration (the only shadow is the dropdown panel's soft shadow). Body and muted text must meet WCAG AA contrast in both themes.

## 4. Typography

| Role | Font |
|---|---|
| Text | **Instrument Sans** (400, 500, 600) |
| Mono (labels, tags, hero label) | **JetBrains Mono** (400) |

Fallbacks: `system-ui, -apple-system, "Segoe UI", sans-serif` and `ui-monospace, monospace`.

| Style | Size | Weight | Notes |
|---|---|---|---|
| Hero H1 | `clamp(2.6rem, 7.5vw, 5.5rem)` | 500 | Line height 1.03, letter-spacing -0.03em. Second line uses `muted`. |
| Section H2 | `clamp(1.6rem, 3.4vw, 2.1rem)` | 500 | Line height 1.2, letter-spacing -0.02em |
| Contact H2 | `clamp(2rem, 5vw, 3.25rem)` | 500 | Larger closing statement |
| Card title (H3) | 1.2rem | 500 | |
| Body | 1rem (16px minimum) | 400 | Line height 1.6 |
| Lead sentence | 1.125rem | 400 | `muted`, max width about 34rem |
| Eyebrow | 0.75rem | 400 | Uppercase, letter-spacing 0.14em, `muted` |
| Label / tag | 0.72 to 0.85rem | 400 | Mono, `muted` |

## 5. Spacing and layout

| Token | Desktop | Under 820px | Use |
|---|---|---|---|
| `gutter` | 1.5rem | 1.5rem | Page side padding |
| `section` | 5rem | 4rem | Top and bottom padding of every section |
| `hero` | 7rem | 4.5rem | Space above hero content |
| `heading` | 2.5rem | 2rem | Section title to its content |
| `stack` | 1.75rem | 1.75rem | Between related text elements |
| `block` | 1.5rem | 1.5rem | Gaps between cards and columns |

- **Container:** max width **1100px**, centered, side padding `gutter`. Nav, hero, every section and footer share it, so all edges align.
- **Section:** 1px `line` border on top, vertical padding `section`. Optional heading = eyebrow + H2.
- **Grids:** 3 equal columns for projects and blog (1 column under 820px); 2 columns for latest content.
- Never use one-off spacing values. Change a token once and the site follows.

## 6. Shape, borders, elevation

| Element | Radius |
|---|---|
| Card | 14px |
| Image thumbnail | 9px |
| Button | 999px (pill) |
| Chip / tag | 6 to 8px |
| Menu item | 8px |
| Dropdown panel | 12px |

All borders are 1px `line`. Cards gain `hover-border` on hover. The dropdown panel is the only element with a shadow: `0 12px 32px rgba(0,0,0,.5)` in dark, much lighter in light theme.

## 7. Components

### Navigation
- Sticky, 4rem tall, `bg` at 88% opacity with background blur, 1px bottom border.
- Left: `$B` logo. Right: Home, Work ▾, Blog ▾, Contact, then the theme toggle.
- Items: 0.9rem, `muted`, padding .45rem .8rem, radius 8px. Hover and active: `hover` background and `fg` text. Trigger chevron rotates 180° when open.
- Dropdown panel: 17rem wide, `panel` background, 1px `line` border, radius 12px, soft shadow. Rows: title in `fg`, small subtitle in `muted`; hover uses `hover`. Last row is a muted "All ... →" link above a thin divider.
- Mobile: logo, theme toggle, menu button; panel slides down full width.

### Buttons
- Pill, padding .8rem 1.5rem, 0.95rem.
- **Solid:** `fg` background, `bg` text, weight 500.
- **Outline:** transparent, 1px `line` border; hover border becomes `muted`.
- Hover: lift 2px. Press: scale .97.

### Cards (project, blog, content)
- 1px `line` border, radius 14px, padding .75rem. Hover: `hover-border`.
- **Project card:** thumbnail (16:10, `surface`, radius 9px), category (muted, 0.8rem), name (H3), description (muted), tag row, link row.
- **Blog card:** banner (shorter, 16:6), `Category · N min read` (muted), title (H3), date (muted, small).
- **Content card:** platform label, one-line description, CTA link ("Follow on Instagram →").
- Tags: mono, 0.72rem, 1px `line` border, radius 6px, `muted`.

### Hero
- Full-bleed `hero-wireframe.jpg` covering the **entire** hero evenly, with one uniform overlay of `rgba(11,11,11,.62)`. No gradients or fades. Content sits above, left-aligned.
- Light theme: flat `bg` with the grid drawn in `grid-line` across the whole hero.
- Availability line: small `status` dot + text, `muted`, beside a thin vertical divider.

### Tools carousel
- One row, icons only (no visible names), scrolling right to left forever (about 40s per loop), both ends faded with a mask (transparent to opaque over 12%).
- Icon size: 64px desktop, 56px tablet, 48px mobile. Gap: 4rem (3rem mobile).
- Default: `fg` at about 70% opacity. Hover: original brand color, full opacity, scale 1.1, 250ms ease. Pauses while hovered.
- Hover colors (dark / light): Next.js `fg` / `fg`; React `#61DAFB` / `#0E8FB3`; TypeScript `#3178C6`; Tailwind CSS `#06B6D4` / `#0891B2`; Node.js `#5FA04E` / `#4C8A3E`; MongoDB `#47A248` / `#3D8B3E`; Flutter `#54C5F8` / `#02569B`; Firebase `#DD2C00`; Git `#F05032`; Figma `#F24E1E`.
- Reduced motion: no animation; a static, centered, wrapping grid.

### Theme toggle
- 40px square icon button, radius 8px, `hover` background on hover. Shows the icon of the theme you will switch to (sun in dark, moon in light). Icons swap with a 0.2s rotate and fade.

### Footer
- Thin top border, `muted` 0.8rem text. Left: `$B` (`fg`) and the copyright. Right: "Build · Learn · Grow".

## 8. Iconography and imagery

- UI icons: Lucide, 1.5 to 2px stroke, sized to the text. Tool icons: official brand glyphs from Simple Icons.
- Screenshots: bright, cropped to show what the app does; 1px `line` border so they never blend into the page.
- No stock photos, no photo of the owner, no illustrations. The wireframe image is the only decorative image.

## 9. Motion

| Effect | Spec |
|---|---|
| Page fade-in | 0.4s ease-out on route change |
| Scroll reveal | Opacity 0 to 1, y 12px to 0, 0.5s ease-out, once; 0.08s stagger between cards |
| Hero entrance | Label, headline, sentence, buttons and meta row stagger in (0.08s apart) |
| Buttons | Lift 2px on hover, scale .97 on press, 0.15s |
| Project image | Scale 1.03 on card hover, 0.5s |
| Dropdown | 150ms fade and 6px slide; chevron rotates |
| Tools carousel | CSS only, linear, infinite, pauses on hover |
| Theme toggle | 0.2s rotate and fade |

**Cursor trail:** a canvas line that follows the pointer. Thin (max 2.2px), tapering, `fg` color at up to 45% opacity (about 55% in light theme), fading over 450ms. Monochrome, no glow. Off on touch devices and with reduced motion; never hides the real cursor or blocks clicks.

**Reduced motion:** disable reveals, page fade, the carousel animation and the cursor trail; keep color and hover changes.

## 10. Accessibility

- Text contrast WCAG AA in both themes; body text at least 16px.
- Visible focus ring on every interactive element: 2px `fg` outline, 3px offset.
- Keyboard-operable navigation and theme toggle with proper aria labels; Escape closes menus.
- Tap targets at least 44px on touch devices.
- Alt text on every image; decorative layers are `aria-hidden`.
- One H1 per page and a logical heading order.

## 11. Responsive

- Main breakpoint: **820px**. Under it: card grids become one column, spacing tokens tighten, dropdown panels span the viewport width.
- Test at 360, 390, 768, 1024 and 1440px. No horizontal scrolling at any width.
- Design mobile deliberately: shorter hero, stacked buttons if needed, same hierarchy.

## 12. Do and don't

| Do | Don't |
|---|---|
| Use tokens for color and spacing | Hard-code hex values or one-off spacing |
| Let whitespace and type carry the design | Add decoration to fill space |
| Show real projects, links and posts | Show fake numbers or testimonials |
| Keep one consistent hero treatment | Use gradients, fades or patchwork backgrounds |
| Keep motion subtle and optional | Add marquees (except the tools row), 3D, or loading screens |
| Use one slogan per area | Repeat slogans in every section |