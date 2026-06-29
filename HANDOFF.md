# Hafeez Website — Session Handoff / Continue Here

Read this first when resuming. It captures the current state, how things are
wired, and what's left. Supporting context lives in `BRAND.md`, `DESIGN_PLAN.md`,
`ASSETS.md`, and `AD_GALLERY.md`.

## Branch
- Current work branch: `claude/happy-cori-cox92c` (develop + push here only).
- Earlier work was on `claude/hafeez-company-overview-57949s`.

## Latest update (2026-06-29) — brand pages rebuilt from real sites via Firecrawl
All 6 brand pages were rebuilt to **mirror the layout + imagery/video of each
real brand site**, dressed in Hafeez chrome (shared nav/footer, green/yellow
frame, Archivo+Inter, per-brand `--accent`). Layouts came from a Firecrawl
research pass over the live brand sites (paddlesmash.com, liftdown.com,
vacayswimwear.com, lapaz.pt, sunnylife.com, harley-davidson.com).
- **PaddleSmash** — full-bleed **autoplay video hero** (real paddlesmash.com MP4),
  "as seen on" strip, lime marquee, Complete-Set bundle, 2-min steps, lifestyle
  showcase bands, lookbook, reviews. Accent lime `#cde310`.
- **Lift Down** — image hero + dual CTAs, Classic Cap feature w/ inline swatch
  row, swatch-as-product grid, stacked lifestyle banners, Wool Cap feature,
  text-only manifesto. Accent forest `#304130` / cream.
- **Vacay** — slow-zoom lifestyle hero + stacked CTAs, free-tote band, shop-by
  tiles, best-seller carousel w/ strikethrough→sale, 3 stacked sale bands,
  "Join the Vacay family". Accent sand/gold `#c8a97e`.
- **La Paz** — full-bleed seasonal hero w/ corner lockup + outlined Explore,
  "Shop the Look" pinned-mood blocks, editorial campaign band, brand-aim strip;
  square (0-radius) UI on a sand canvas. Accent sea-blue `#1990c6`.
- **SunnyLife** — stacked split-hero tiles (Beach & Poolside / Kids & Baby),
  New-Arrivals carousels w/ badges + swatches + star ratings, lookbook. Accent
  coral `#ff8a5c`.
- **Harley-Davidson** — cinematic hero, authenticity ribbon, "Your ride. Your
  rules." category tiles, men's grid, leather showcase, booth split, "Stories
  from the Road". Accent orange `#ff6900` / near-black.
- New shared CSS components in `assets/site.css`: `.mhero` (media/video hero),
  `.marquee`, `.creds`, `.showcase`, `.steps`, `.lookbook`, `.props`,
  `.ctaband`, `.bundle`, plus card hover-swap/swatches/rating/sale helpers.
- Verified: balanced tags, **no horizontal overflow**, no JS errors (headless
  Chromium render of all 6).
- IMAGERY NOTE: product grids use the real **Hafeez Shopify CDN** images (stable).
  Hero/lifestyle/feature sections **hotlink the real brand CDNs** (paddlesmash /
  liftdown / vacayswimwear / lapaz / sunnylife = Shopify CDN; harley = Contentful)
  and PaddleSmash/Vacay hero/feature **videos**. Approved to use; **re-host before
  production** (download+commit or push to Shopify CDN). Critical heroes have
  `onerror` fallbacks to Shopify/Higgsfield images.

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

## Open items / next steps
1. **Connect Firecrawl (remote MCP)** to read brand sites for layout reference:
   - Add a REMOTE connector in THIS environment's MCP settings:
     `https://mcp.firecrawl.dev/{FIRECRAWL_API_KEY}/v2/mcp`
     (keyless test URL: `https://mcp.firecrawl.dev/v2/mcp`).
   - Put the `fc-` key ONLY in the connector field — never in chat/repo.
   - Do NOT use local `npx firecrawl-mcp` here (it calls api.firecrawl.dev,
     which is blocked by this env's proxy — confirmed 403).
   - Once attached, `firecrawl_*` tools appear; then rebuild brand pages using
     real layouts as REFERENCE (original builds, not copies).
2. **Alternative already available:** Higgsfield Marketing Studio **brand-kit
   URL fetch** crawls on Higgsfield's cloud (bypasses the block) — can pull each
   brand's palette/fonts/imagery for theming.
3. **Re-host the Higgsfield/CDN images** (download + commit, or push to Shopify CDN).
4. **Right-shifted hero** (optional): owner wanted hero off-center right; the
   edit attempt left a grey strip, so it was reverted to the clean centered
   version. Redo via a fresh wide generation composed right, if desired.
5. Add remaining pages: About, a true "Summer & Lifestyle" overview, Sale,
   Privacy/Terms/Refund content pages (footer links are placeholders).
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
