# DigiSalad Landing Page

A polished Vue 3 landing page for DigiSalad, built with Vite and designed for motion-rich storytelling, scroll-based reveals, and responsive interaction.

## Tech Stack

- Vue 3
- Vite
- TypeScript
- SCSS
- GitHub Pages

## Features

- Responsive landing page layout
- Animated hero section with embedded video background
- Scroll reveal transitions for sections and paragraphs
- Showcase carousel with directional transitions
- Side menu modal with slide-in / slide-out motion
- Custom SEO metadata and social sharing tags

## Prerequisites

- Node.js `20.19+` or `22.12+`
- `pnpm` `8.15.5`

## Setup

Install dependencies:

```bash
pnpm install
```

Run the local dev server:

```bash
pnpm dev
```

Create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Linting

Run the available lint checks:

```bash
pnpm lint
```

## Project Structure

- `src/layouts/Index.vue` - page layout and section order
- `src/components/` - reusable landing page sections
- `src/styles/` - global styles, reset, and theme tokens
- `public/` - static files such as `lettuce.png`

## Deployment

This project is configured for GitHub Pages.

- Vite base path is set to `/dgs-landing-page/`
- GitHub Actions workflow is defined in `.github/workflows/static.yml`
- Pushing to `main` triggers a build and deployment

If the repository name changes, update `base` in `vite.config.ts` and the deployment URLs in `index.html`.

## Notes

- The page uses scroll reveal behavior for text and selected blocks.
- Primary and secondary colors are centralized in `src/styles/theme.ts` and CSS variables in `src/styles/global.scss`.
- The favicon uses `public/lettuce.png`.
