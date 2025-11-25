# Repository Guidelines

## Project Structure & Module Organization
- Next.js App Router lives in `src/app` (routes: `about`, `contact`, `music`, `press`, `videos`); shared wrappers sit in `layout.tsx` and `template.tsx`, with design tokens in `globals.css`.
- Reusable UI and domain blocks are under `src/components` (home, layout, music, press, video, ui). Shared data/config and helpers live in `src/lib`.
- Static assets sit in `public/` (SVGs and hero images). `OLD_DORSEY/` holds archival reference content—avoid modifying unless migrating legacy material.

## Build, Test, and Development Commands
- `npm install` to sync dependencies (Node 18+ recommended).
- `npm run dev` starts the local server at `http://localhost:3000`.
- `npm run build` creates the production bundle; `npm run start` serves that bundle.
- `npm run lint` runs ESLint (Next core-web-vitals + TypeScript rules) across `src`.

## Coding Style & Naming Conventions
- TypeScript with strict settings; prefer functional components in PascalCase. Route folders use kebab-case; components and utilities use PascalCase or camelCase as appropriate.
- Import via the `@/*` alias from `tsconfig.json`; keep module boundaries shallow rather than deeply nested.
- Styling uses Tailwind CSS v4 tokens set in `src/app/globals.css`. Favor utility classes and existing CSS variables (`--primary`, `--background`, radius tokens) before adding custom rules.
- Keep Framer Motion/Lenis light and performant; add accessibility props on interactive elements.

## Testing Guidelines
- Primary check is linting: run `npm run lint` before pushing. Resolve warnings rather than suppressing.
- For UI changes, sanity-test routes in dev and verify responsiveness; add `aria-*` labels and focus states for new controls.
- When adding automated tests later, use `feature-name.test.tsx` and colocate near components or under a dedicated `src/__tests__` folder.

## Commit & Pull Request Guidelines
- Use short, imperative commit messages (e.g., `Add hero gallery hover states`), consistent with existing history.
- PRs should include a brief summary, linked issue/ticket, screenshots or clips for visual changes, and a checklist of commands run (`npm run lint`, `npm run build` when applicable).
- Update `CHANGELOG.md` with dated notes for notable changes; call out any new configuration or env requirements in the PR description.

## Security & Configuration Tips
- Keep secrets in `.env.local` and avoid committing credentials. Document required env vars when adding integrations.
- Serve static assets from `public/`; avoid hotlinking. Validate any third-party scripts or embeds with maintainers before inclusion.
