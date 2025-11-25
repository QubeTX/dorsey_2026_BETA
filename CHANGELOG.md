# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Fixed

- **Hydration error**: Fixed nested `<a>` tags in Header navigation causing React hydration mismatch and color instability after page load (`src/components/layout/Header.tsx`)
  - Changed non-dropdown nav items to use `NavigationMenuLink` with `asChild` prop wrapping Next.js `Link`, matching the pattern already used for dropdown items

- **Text content**: Updated informal language to professional tone
  - `src/lib/data.ts`: Changed "bad ass swinger" to "hard-swinging classic" in Blues On Top album description
  - `src/app/press/new-releases/page.tsx`: Changed "bad ass swinger" to "hard-swinging masterclass" in Blues On Top review excerpt
