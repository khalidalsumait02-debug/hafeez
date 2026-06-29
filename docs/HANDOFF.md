# Hafeez Website — Session Handoff / Continue Here

Read this first when resuming. It captures the current state, how things are
wired, and what's left. Supporting context lives in `BRAND.md`, `DESIGN_PLAN.md`,
`ASSETS.md`, and `AD_GALLERY.md`.

## Branch
- Work branch: `claude/handoff-continuation-6dafkb` (develop + push here only).
- Prior branch (history): `claude/hafeez-company-overview-57949s`.

## What this is
A new front-end for **Hafeez International** — Kuwait's official Harley-Davidson®
merchandise reseller (a subsidiary of Harley-Davidson Kuwait) + PaddleSmash and
summer/lifestyle brands (Lift Down, Vacay, La Paz, SunnyLife, DOIY). Shopify
stays the backend/engine; this is the new storefront design. Static HTML/CSS/JS
mockup for now (no live cart/checkout).

## Live site (GitHub Pages)
- URL: **https://khalidalsumait02-debug.github.io/hafeez/**
- Repo is **public**. Pages is enabled (served from the branch; site exists at
  BOTH repo root and `/docs/` so it works whichever folder Pages points at).
- `.github/workflows/deploy-pages.yml` exists (manual `workflow_dispatch` only).
- IMPORTANT: keep root and `/docs/` copies in sync on every change
  (`cp <page>.html docs/` and `cp assets/* docs/assets/`).

## File map (all at repo root, mirrored in /docs)
- `index.html` — homepage
- `paddlesmash.html`, `lift-down.html`, `vacay.html`, `la-paz.html`,
  `sunnylife.html`, `harley-davidson.html` — brand pages
- `assets/site.css` — shared design system (all pages link this)
- `assets/site.js` — shared mobile-menu behaviour
- `assets/hafeez-logo-green.png` — the real Hafeez logo (only brand asset kept)
- `mockups/` — older homepage iterations (history; not the live source)

## Design system (assets/site.css)
- Palette vars: --green #26d07c, --green-d #005844, --yellow #fff19f,
  --mint #b5e3d8, --orange #ff6900, --ink #0a0c0b. Per-brand pages override
  `--accent` / `--accent-ink` in an inline `<style>` in their head.
- Type: Archivo (display) + Inter (body). Sharp corners; Nike-style structure;
  brand green as the accent/chrome.
- Components: util bar, sticky header, working mobile menu (burger→slide-in),
  hero, trust strip, two-up, category rail, split features, product carousel
  (.pscroll) / grid (.pgrid), reviews, brand grid, newsletter, footer (with
  legal links), brand-page hero (.bhero) + story.

## Imagery — how it works (important)
- **Shopify CDN images** (`cdn.shopify.com/...`) = stable, the store's real
  product photos. Safe to keep.
- **Higgsfield CDN images** (`d8j0ntlcm91z4.cloudfront.net/...`) = AI-generated
  campaign shots + edits. Currently **hotlinked**; should be re-hosted before
  real launch (download + commit, or upload to Shopify CDN). Could not download
  them here — see Constraints.
- Hero in use: `hf_20260629_103709_b705ce1f...png` (beach scene: Arab men,
  Vacay swimwear, accurate PaddleSmash, single ball — centered/clean version).
- PaddleSmash feature: `hf_20260629_100207_05bbb6b8...png` (4 men, product-accurate).
- Higgsfield account: Plus plan; the 31 Hafeez ad creatives live in the
  **Marketing Studio** tab (indexed in AD_GALLERY.md).

## Done so far
- Company/brand/catalog understood (BRAND.md); plan locked (DESIGN_PLAN.md).
- Homepage built + iterated; audit #1 and #2 fixes applied:
  working mobile nav, wide multi-brand/beach hero, trust strip, brand colour,
  varied split layouts, category vs brand deduped, SEO/meta/OG/JSON-LD/favicon,
  a11y (skip link, aria, focus), perf (lazy/preload/preconnect), reviews/social
  proof, legal footer, correct heading order, brand-linked nav.
- 6 brand pages built (original, themed per brand, real licensed products).
- Block distribution rebalanced to ~25% PaddleSmash / 25% Lift Down /
  25% summer / 15% Harley / 10% other.
- **Firecrawl now works cloud-side here** (the remote MCP is connected — the old
  block was only the local `npx` version). Used it to scrape each brand's real
  homepage.
- **(item #5 done) 9 content/legal pages added + all footer/nav placeholder
  links wired:** about, contact, shipping (#track), returns (#refund), privacy,
  terms, faq, size-guide, sale. Styles in the `content/info/legal` block of
  site.css. Only intentional `#` links remain (New In, Instagram, العربية,
  in-page CTAs, search/quick-add).
- **(item #1 done) 6 brand pages rebuilt as homepage replicas** of each brand's
  real site (layout + section order + the brand's own imagery), themed in the
  brand's palette/fonts, wrapped in the Hafeez frame. Built+verified via a
  fan-out workflow; fidelity 0.90–0.96. Brand images are **hotlinked from each
  brand's own CDN** (use approved by the brands) — see re-host note below.

## Open items / next steps
1. ~~Connect Firecrawl + rebuild brand pages from real layouts.~~ **DONE.**
   Firecrawl remote MCP is connected and works cloud-side; all 6 brand pages
   were rebuilt as replicas of the real brand homepages.
2. **Verify hotlinked brand images render on the live Pages site.** Brand pages
   now hotlink images from each brand's own CDN (liftdown.com/cdn, lapaz.pt/cdn,
   vacayswimwear.com/cdn, sunnylife.com.au/cdn, paddlesmash.com/cdn,
   harley-davidson.com/ctfasset — all Shopify/Contentful, generally hotlink-OK).
   Could not be HTTP-checked from the sandbox (proxy denies non-allowlisted
   hosts). Open the live URL and confirm; if any brand blocks hotlinking, fall
   back to re-hosting (item #3).
3. **Re-host images** (brand-CDN hotlinks + the older Higgsfield CDN shots) by
   committing local copies or pushing to Shopify CDN. NOTE: cannot download
   server-side here — cloudfront/brand CDNs are on the proxy deny list (403).
   Either ingest by URL via Shopify `fileCreate`, or do it from an unblocked env.
4. **Right-shifted hero** (optional): see prior note; redo via a fresh wide
   generation composed right if desired.
5. ~~Add About / Sale / Privacy / Terms / Refund content pages.~~ **DONE** (plus
   contact, shipping, returns, faq, size-guide; all footer/nav links wired).
   Still TODO: a true "Summer & Lifestyle" *overview* landing (vacay.html is now
   a Vacay-Swimwear replica, not a multi-brand summer hub).
6. Real bilingual EN/AR + RTL (currently decorative).
7. Convert to a publishable **Shopify theme** (Liquid/sections) + zip-upload —
   the eventual production step (owner is fine keeping Shopify backend).

## Constraints (environment) — keep in mind
- Outbound network is locked to an allowlist. CANNOT fetch external sites
  (hafeez.shop, harley-davidson.com, api.firecrawl.dev) or download the
  Higgsfield CDN images server-side — all return 403/000 via the proxy.
- No Firecrawl/scraper tool is connected; a locally-installed scraper would hit
  the same block. Only CLOUD-side fetchers (hosted Firecrawl MCP, Higgsfield
  brand-kit) bypass it.
- GitHub MCP is scoped to `khalidalsumait02-debug/hafeez` only.
- Shopify is connected to the real store **Hafeez International** (hafeez.shop).

## How to resume
1. `git pull origin claude/hafeez-company-overview-57949s`
2. Read this file + DESIGN_PLAN.md.
3. Edit pages at repo root; mirror to `/docs`; commit + push.
4. Verify at the Pages URL (allow ~1 min to rebuild).
