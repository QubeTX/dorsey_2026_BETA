# CODEX_PROJECT

## TL;DR
- Next.js 16 + TypeScript rebuild of the Leon Lee Dorsey site, using App Router, Tailwind CSS v4 tokens, Framer Motion, Lenis, and shadcn/ui for a high-end “Jazz Bauhaus” aesthetic.
- Current state: core routes (`about`, `contact`, `gear`, `music`, `press`, `videos`) with shared layout, smooth scrolling, custom cursor, and album data in `src/lib/data.ts`.
- Develop with `npm run dev`, validate with `npm run lint`, and ship with `npm run build` followed by `npm run start`.

## Project Summary
The project migrates the prior Squarespace site into a custom Next.js architecture focused on performance, tactile motion, and curated typography (Bodoni Moda + Inter). Styling is token-driven via `globals.css`, with reusable blocks under `src/components` and navigation/data helpers in `src/lib`. Archived reference content from the legacy site remains in `OLD_DORSEY/` for content migration.

## Status & Priorities
- Migrate and enrich copy/assets from `OLD_DORSEY/dorsey_content` into typed structures and `public/` images, keeping Tailwind tokens aligned with the gold/coral palette.
- Keep motion performant (Framer Motion + Lenis) and accessible; ensure keyboard focus states accompany custom interactions.
- Use `src/lib/navigation.ts` for nav updates and prefer path alias `@/*` for imports to keep module boundaries shallow.
- No env vars are required yet; document any future configuration in README + PRs.

## File Tree (key paths)
```
.
├── AGENTS.md
├── CHANGELOG.md
├── CODEX_PROJECT.md
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── images
│   └── window.svg
├── src
│   ├── app
│   │   ├── about
│   │   ├── contact
│   │   ├── gear
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── music
│   │   ├── page.tsx
│   │   ├── press
│   │   ├── template.tsx
│   │   └── videos
│   ├── components
│   │   ├── home
│   │   ├── layout
│   │   ├── music
│   │   ├── press
│   │   ├── ui
│   │   └── video
│   └── lib
│       ├── data.ts
│       ├── navigation.ts
│       └── utils.ts
├── OLD_DORSEY
│   ├── dorsey_content
│   └── visual_overview.md
└── node_modules/ (not versioned)
```

## Commands
- `npm install` to install dependencies (Node 18+ recommended).
- `npm run dev` to serve locally with smooth scrolling and custom cursor enabled.
- `npm run lint` for ESLint (Next core-web-vitals + TS) checks; resolve warnings before merging.
- `npm run build` then `npm run start` for production builds/previews.
