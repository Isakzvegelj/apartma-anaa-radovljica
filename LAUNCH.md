# Apartment Anaa publication preparation — 23 October 2026

The release candidate is technically verified. Publication is pending owner approval and confirmation that the current seasonal booking coverage is intended.

Private review: https://vmp.tail8cd004.ts.net:8486/
Public destination: https://isakzvegelj.github.io/apartma-anaa-radovljica/
Release branch: `prepare/publication-20261023`
Production baseline: `144d4ef1ad689f5b84347b02895dae496e47bc76`

## Release contents

- Includes `45edb4b`: individual widget language controls preserve other widgets and unfinished booking forms; selecting the active language avoids redundant reloads.
- Invalid saved language values now fall back consistently to English, including the HTML language attribute.
- Adds an XML sitemap and a sitemap discovery link. Existing canonical and social URLs retain the GitHub Pages destination.
- Corrects the obsolete machine-specific validation path in AGENTS.md.

## Verification

- Chromium at 320, 390, 768 and 1440 px: no horizontal page overflow, valid navigation targets, no uncaught JavaScript errors, English/Slovenian switching and persistence passed.
- All three real Bentral widgets rendered in both languages at every viewport.
- All six provider iframe endpoints returned HTTP 200 using curl. Python urllib requests were initially denied by the provider; actual browser requests and curl succeeded.
- All referenced local assets exist, listing images load, JSON-LD and sitemap XML parse. JavaScript syntax and Git whitespace checks pass.
- Before/after mocked booking-draft regression at 390/1440 px reproduces the original reset and verifies the fix. Mocks establish draft preservation, while separate real-provider checks establish widget rendering.
- Read-only price calculation for two adults, 10–17 June 2027: EUR 1,134.10 including EUR 50 cleaning and EUR 35 tourist tax. A two-night June sample correctly reported a seven-night minimum.
- 10–12 November 2026: provider reports unavailable dates and “Price not defined”. The price-list widget displays seasonal periods May–15 October. Confirm whether winter closure is intentional; if winter bookings are required, the owner must supply/approve rates and open dates in Bentral before launch readiness can be confirmed.

No reservation, guest details, payment or confirmation was submitted. No prices, restrictions, provider identifiers, DNS, production source, or visual design were changed.

Evidence and scripts: `/home/isak/projects/repo-optimization-20261018/anaa-launch-evidence/` on VMP. The private preview serves this checkout; do not point it at a different revision without renewing the review.

## Publication after explicit approval

1. Confirm the approved release revision and intended booking season. Recheck main has not changed since the baseline; integrate and revalidate any newer work.
2. Merge the reviewed release into main. This triggers the existing GitHub Pages deployment; no new hosting platform is needed.
3. Wait for the Pages build to succeed. Verify the public URL with a cache-busting query, exact released app.js, sitemap.xml, and calendar, pricing and booking sections in both languages.
4. Record the deployed commit, deployment result and live checks here and in the project/task handoff.

The older draft PR #1 contains only the booking-state fix and is included in this release. Do not merge it again after this complete release lands.
