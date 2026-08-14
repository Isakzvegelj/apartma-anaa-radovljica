# AGENTS.md

## Project
Apartment Anaa is a small single-page static hospitality website for a 61 m² one-bedroom apartment in Radovljica, Slovenia. The public site is served at https://isakzvegelj.github.io/apartma-anaa-radovljica/ from this repository's `main` branch.

## Layout and key files
- `index.html` — complete page markup, content, SEO metadata, navigation, map, and Bentral widget containers.
- `styles.css` — all site styling, responsive breakpoints, and Bentral widget presentation.
- `app.js` — client-side behavior; loads Bentral calendar, price list, and booking widgets and switches each between English and Slovenian.
- `assets/images/` — verified Apartment Anaa listing photos.

This is a dependency-free static site: do not introduce a framework or build step for ordinary changes. Keep content truthful to the verified listing. Preserve the existing editorial visual style, semantic HTML, responsive behavior, accessible labels, and external-link security attributes.

## Validation and deployment
Run from `/Users/isakzvegelj/ana`:
- `node --check app.js`
- `git diff --check`
- Preview locally with `python3 -m http.server 4173`.
- Verify Bentral embed URLs return HTTP 200 before publishing.

The site is published through GitHub Pages from `main`. Before publishing, review `git status --short` and the diff. After publishing, verify the exact GitHub Pages URL and the availability, pricing, and booking sections—not only the repository state. GitHub Pages CDN caching may require a cache-busting query string during immediate verification.
