# Leon Lee Dorsey Website (2026 Beta)

This is the modern rebuild of the Leon Lee Dorsey website, migrating from Squarespace to a custom Next.js architecture with a high-end "Jazz Bauhaus" aesthetic.

## Tech Stack

- **Framework**: Next.js 16.0.4 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 (via @tailwindcss/postcss)
- **Animation**: Framer Motion (Parallax, Magnetic, Page Transitions)
- **Scrolling**: Lenis (Smooth Scroll)
- **Components**: shadcn/ui (New York style) with Radix UI primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

## Design System

- **Typography**:
  - **Headings**: `Bodoni Moda` (Modern, High-Contrast Serif)
  - **Body**: `Inter` (Clean Sans-Serif)
- **Colors**: Rich Black base, Gold/Brass accents (`oklch(0.75 0.15 85)`), Coral secondary.
- **Visuals**: Noise textures, mix-blend modes, parallax depth.

## Key Features

- **Smooth Scrolling**: Global momentum scrolling via Lenis.
- **Page Transitions**: Curtain wipe effect between routes.
- **Custom Cursor**: Interactive cursor with hover states.
- **Magnetic Navigation**: Floating header with magnetic links.
- **Vinyl Animations**: Interactive album cards with spinning vinyl effect.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** to view the site.

## Deployment

This project is ready for deployment on Vercel.
