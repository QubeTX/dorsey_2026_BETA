# CODEX_PROJECT

## TL;DR
- Next.js 16 + TypeScript rebuild of the Leon Lee Dorsey site, using App Router, Tailwind CSS v4 tokens, Framer Motion, Lenis, and shadcn/ui.
- Current state: live public routes (`/`, `/about`, `/videos`, `/store`, `/new-releases`, `/in-the-press`, `/published-articles`, `/fyc25`, `/gear`, `/how-its-made`, `/contact`) render locally with shared layout, smooth scrolling, local Squarespace reference media, and album data in `src/lib/data.ts`.
- Latest direction: faithful recreation of the live Squarespace site (`leonleedorsey.com`) with white/black foundation, coral sketch underlines, cyan hover accents, bold uppercase sans typography, circle patterns, and real album/photo assets served from `public/images/dorsey`.
- Develop with `npm run dev`, validate with `npm run lint`, and ship with `npm run build` followed by `npm run start`.

## Project Summary
The project migrates the prior Squarespace site into a custom Next.js architecture focused on performance, faithful layout recreation, and maintainable componentized content. Styling is token-driven via `globals.css`, with reusable blocks under `src/components` and navigation/data helpers in `src/lib`. Archived reference content from the legacy site remains in `OLD_DORSEY/` for content migration, and downloaded local media from the live Squarespace site now lives under `public/images/dorsey/`.

## Status & Priorities
- Continue tightening the clone component-by-component against `leonleedorsey.com`, especially long-page desktop spacing and any non-nav detail routes under `OLD_DORSEY/dorsey_content`.
- Continue migrating and enriching copy/assets from `OLD_DORSEY/dorsey_content` into typed structures and `public/` images, keeping Tailwind tokens aligned with the reference black/white/coral/cyan palette.
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
│   │   ├── dorsey
│   │   │   ├── about-portrait.jpg
│   │   │   ├── about-slider.jpg
│   │   │   ├── about-vibe.jpg
│   │   │   ├── article-magazine.png
│   │   │   ├── article-new-york.jpg
│   │   │   ├── article-screenshot.png
│   │   │   ├── bill-evans-cover.png
│   │   │   ├── blues-cover.png
│   │   │   ├── cantaloupe-cover.png
│   │   │   ├── contact-portrait.jpg
│   │   │   ├── dorsey-logo.png
│   │   │   ├── freedom-jazz-cover.jpeg
│   │   │   ├── freedom-jazz-dance.png
│   │   │   ├── fyc-clark.jpg
│   │   │   ├── fyc-dorsey.png
│   │   │   ├── fyc-wolff.jpeg
│   │   │   ├── gallery-celebrities.jpg
│   │   │   ├── gallery-jazz-icons.jpg
│   │   │   ├── gallery-uni-pitts.jpg
│   │   │   ├── gear-bass-yard.jpg
│   │   │   ├── gear-case.jpg
│   │   │   ├── mabern-cover.png
│   │   │   ├── mabern-review-cover.jpg
│   │   │   ├── made-assembly.png
│   │   │   ├── made-balcony.jpg
│   │   │   ├── made-body.jpg
│   │   │   ├── made-clamps.jpg
│   │   │   ├── made-finish.jpg
│   │   │   ├── made-garden.jpg
│   │   │   ├── made-polish.jpg
│   │   │   ├── made-room.jpg
│   │   │   ├── maisel-band.jpg
│   │   │   ├── maisel-room.jpg
│   │   │   ├── maisel-selfie.jpg
│   │   │   ├── maisel-set.jpg
│   │   │   ├── monktime-cover.jpg
│   │   │   ├── monktime-review-cover.jpg
│   │   │   ├── monktime-rooftop.jpeg
│   │   │   ├── press-portrait.jpg
│   │   │   ├── sgt-pepper-cover.jpg
│   │   │   ├── uni-pitts.jpg
│   │   │   └── white-house.jpg
│   └── window.svg
├── src
│   ├── app
│   │   ├── about
│   │   ├── contact
│   │   ├── fyc25
│   │   ├── gear
│   │   ├── globals.css
│   │   ├── how-its-made
│   │   ├── in-the-press
│   │   ├── layout.tsx
│   │   ├── music
│   │   ├── new-releases
│   │   ├── page.tsx
│   │   ├── press
│   │   ├── published-articles
│   │   ├── store
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
- `npm run dev` to serve locally with smooth scrolling enabled.
- `npm run lint` for ESLint (Next core-web-vitals + TS) checks; resolve warnings before merging.
- `npm run build` then `npm run start` for production builds/previews.
- There is currently no `npm test` script in `package.json`.
