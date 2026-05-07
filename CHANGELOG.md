# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Changed - 2026-05-07

- **Squarespace reference recreation pass**: Reworked the site toward the live `leonleedorsey.com` visual language instead of the earlier “Jazz Bauhaus” reinterpretation.
  - Added local copies of key Squarespace media under `public/images/dorsey/` to avoid hotlinking.
  - Rebuilt the home hero with oversized role marquee typography, white/circle-pattern background, DORSEY logo treatment, coral sketch underline, and cleaner mobile composition.
  - Rebuilt home release, Maisel, quote, gallery, About, Music Store, Header, Footer, and album card surfaces using the original site’s content hierarchy, black/white/coral/cyan palette, uppercase sans typography, and real album artwork.
  - Retuned mobile scaling against the live site for the header, About hero, circular image, quote, and mobile navigation sheet.
  - Rebuilt the mobile sheet to match the live Squarespace menu: full-white overlay, small top logo, simple centered top-level links, and collapsed Press/Gear rows with chevrons.
  - Removed the custom cursor/noise/page-cover transition effects that were visually diverging from the reference and could obscure browser QA.
  - Pinned Turbopack root in `next.config.ts` so local dependency resolution uses this repository instead of the parent workspace.
- **Live URL and secondary page fidelity pass**: Built out the public live-site navigation routes and tightened the remaining top-level pages against the Squarespace source.
  - Added live URL aliases for `/store`, `/new-releases`, `/in-the-press`, `/published-articles`, `/fyc25`, `/how-its-made`, and `/gear`.
  - Reworked Store to match the live photo-first layout with two large intro headings followed by the Music Store product grid.
  - Reworked New Releases, Published Articles, FYC, Gear, and How It’s Made page intros to better match the live page order, headings, image placement, and copy.
  - Fixed the mobile navigation sheet so it opens as a full-screen white menu instead of a partial right drawer.
  - Verified the affected routes in the in-app browser after restarting the stale dev server.

### Fixed - 2026-05-07

- **Lint cleanup**: Escaped JSX quotes in the gear page and removed unused imports from press/video cards.

### Changed

- **Hero component text readability**: Enhanced visibility of main title text against overlapping photo collage (`src/components/home/Hero.tsx`)
  - Implemented dual-layer text rendering approach for improved legibility
  - Added base text layer with 80% opacity and soft white glow effect (`text-shadow: 0 0 60px rgba(255,255,255,0.8), 0 0 120px rgba(255,255,255,0.4)`)
  - Retained top layer with `mix-blend-difference` for visual interest while ensuring text remains readable against all background states
  - Base layer positioned at z-20 with `pointer-events-none` to maintain click-through behavior
  - Improved user experience by making "LEON LEE DORSEY" title more legible without sacrificing design aesthetic

### Fixed

- **Git repository bloat**: Fixed `.gitignore` missing exclusions for legacy audio files
  - Added `OLD_DORSEY/GITIGNORED_DORSEY/` to `.gitignore`
  - Added exclusions for large media files (`*.wav`, `*.mp3`, `*.zip`, `*.flac`, `*.aiff`, `*.m4a`)
  - Removed 4.3GB of accidentally tracked audio files from git history using BFG Repo-Cleaner
  - Repository size reduced from **4.30 GB to 2.34 MB**

- **Hydration error**: Fixed nested `<a>` tags in Header navigation causing React hydration mismatch and color instability after page load (`src/components/layout/Header.tsx`)
  - Changed non-dropdown nav items to use `NavigationMenuLink` with `asChild` prop wrapping Next.js `Link`, matching the pattern already used for dropdown items

- **Text content**: Updated informal language to professional tone
  - `src/lib/data.ts`: Changed "bad ass swinger" to "hard-swinging classic" in Blues On Top album description
  - `src/app/press/new-releases/page.tsx`: Changed "bad ass swinger" to "hard-swinging masterclass" in Blues On Top review excerpt
