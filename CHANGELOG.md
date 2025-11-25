# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

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
