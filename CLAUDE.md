# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a **Next.js 16 (App Router)** portfolio website for jazz bassist Leon Lee Dorsey, featuring a "Jazz Bauhaus" aesthetic with sophisticated animations.

### Tech Stack
- **Next.js 16.0.4** with App Router
- **React 19** + TypeScript 5 (strict mode)
- **Tailwind CSS v4** (via @tailwindcss/postcss)
- **Framer Motion** for animations (parallax, page transitions, magnetic effects)
- **Lenis** for smooth momentum scrolling
- **shadcn/ui** (New York style) with Radix UI primitives
- **React Hook Form + Zod** for form validation

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, Header, Footer, SmoothScroll)
│   ├── template.tsx        # Page transition animations (curtain wipe)
│   ├── globals.css         # Theme tokens (OKLCH colors), Tailwind config
│   ├── about/
│   ├── contact/
│   ├── music/
│   ├── videos/
│   ├── press/              # Nested: new-releases, reviews, articles, fyc
│   └── gear/               # Nested: how-its-made, instruments
├── components/
│   ├── ui/                 # shadcn/ui components + custom (CustomCursor, Magnetic, Noise)
│   ├── layout/             # Header, Footer, SmoothScroll
│   ├── home/               # Hero, AlbumShowcase, MaiselFeature, PhotoGallery
│   ├── music/              # VinylCard
│   ├── press/              # PressArticle
│   └── video/              # VideoCard
└── lib/
    ├── data.ts             # Static album data (6 albums with metadata)
    ├── navigation.ts       # Navigation structure with nested menus
    └── utils.ts            # cn() helper (clsx + tailwind-merge)
```

### Key Architectural Patterns

**Client/Server Components**: Layout is server-side; Template and interactive components use `"use client"` for Framer Motion animations.

**Animation Strategy**:
- Global smooth scrolling via `SmoothScroll` component (Lenis wrapper)
- Page transitions in `template.tsx` (curtain wipe with scaleY)
- `Magnetic` component for hover effects on navigation
- `CustomCursor` with spring physics
- Scroll-triggered parallax using `useScroll` + `useTransform`

**Design System** (defined in `globals.css`):
- OKLCH color space for theme colors
- Primary: Gold/Brass `oklch(0.75 0.15 85)`
- Secondary: Coral `oklch(0.6 0.2 20)`
- Typography: Bodoni Moda (headings), Inter (body)
- Noise texture overlay via `Noise` component

### Path Aliases

Import with `@/*` which maps to `./src/*`:
```typescript
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

## Development Notes

- **Adding shadcn/ui components**: Use `npx shadcn@latest add <component>`
- **Animations**: Use Framer Motion's `whileInView`, `useScroll`, `useTransform` for scroll effects
- **New pages**: Follow existing pattern with title animation + staggered content reveals
- **Images**: Use Next.js `Image` component with `fill` prop and `object-cover`
