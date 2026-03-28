# NoelRook.github.io

Modern resume and portfolio site built with Astro, TypeScript, and Three.js for GitHub Pages.

## Stack

- Astro (static site generation)
- TypeScript
- Three.js (interactive hero scene)
- GitHub Actions (automated GitHub Pages deployment)

## Project Structure

- src/pages: Route entrypoints
- src/components: Reusable UI and scene components
- src/layouts: Shared page layout wrappers
- src/data: Typed resume and project content
- src/styles: Global styling
- .github/workflows: CI/CD deployment pipeline

## Local Development

1. Install dependencies:

	npm install

2. Start the development server:

	npm run dev

3. Build for production:

	npm run build

4. Preview production output:

	npm run preview

## Deployment

Deployment is configured via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

On each push to main:

1. Dependencies are installed.
2. Astro builds the static output to dist.
3. The artifact is deployed to GitHub Pages.

## Content Updates

Update your resume information in [src/data/resume.ts](src/data/resume.ts). This keeps your content separate from layout and animation logic.
