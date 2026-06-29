# Hafeez — Extracted Assets & Current-Site Review

> Source: live Shopify Admin API for the real store (Hafeez International,
> hafeez.shop). The public site itself is blocked by this environment's network
> policy and no Firecrawl tool is connected, so assets were pulled directly from
> Shopify — the same source the storefront renders from (cleaner + full-res).

## Real image assets in use in the mockup (Shopify CDN — public URLs)
- **Store photo (authenticity / booth section):**
  `/collections/Hafeez_Store_Photo.jpg`
- **Summer & Lifestyle tile:** Vacay swimwear `/collections/1-2_1_1802x_...webp`
- **PaddleSmash band:** `/files/paddlesmash_paddle_lifestyle_small_...png`
- **Best sellers (real products + KWD):**
  - Bar Font Colorblock Pullover Hoodie — 38.000 — `96714-25VM_F.jpg`
  - Live By It Switchback Cap, Green — 20.000 — `97749-25VM_F.webp`
  - Willie G Skull Leather Riding Gloves — 48.000 — `97109-25vm.jpg`
  - PaddleSmash Complete Set — 68.000 — `Image1.jpg`
- **Summer band:** Lift Down `ClassicCapAmberOrangeHero-0072.png`, La Paz `IMG-20240513-WA0043...jpg`

## Other usable assets found
- Collection lifestyle images: Headwear (`pexels-rodnae-...`), Accessories
  (`pexels-francesco-...`), Lift Down (WhatsApp lifestyle).
- Brand logos as collection images: PaddleSmash, SunnyLife, DOIY, La Paz, EMS,
  Monoak (useful for a "shop by brand" strip).
- Product packshots: hundreds of recent (2025) studio shots on white — ideal for
  clean product grids.

## Gaps to fill from owner's own library
1. **Hero image** — need one striking H-D rider/lifestyle shot (landscape, space
   for text). Currently a topical placeholder; flag for replacement.
2. **Harley-Davidson world tile** — needs an H-D lifestyle shot (placeholder now).
3. Optional: a PaddleSmash action video clip for the spotlight band.

## Review of the CURRENT website's content (issues to fix in redesign)
- **Inconsistent product titles:** many are raw SKU + ALL CAPS, e.g.
  "97429-20VM-Men's More Than A Machine Jacket", "CMC-COLLECTIBLE CHIPS",
  "WR-52156-TAGS -S POLISHED STAINLESS". Hurts scannability and SEO.
- **Inconsistent imagery:** mix of clean studio packshots, low-res WhatsApp
  photos, and generic stock (pexels) — no uniform treatment. Biggest visual drag.
- **Mixed file formats** (jpg/png/webp) and varying aspect ratios → uneven grids.
- **Collection chaos:** 28 collections incl. junk ("Best Sellers" 1,139,
  "New Arrivals" 1,418, "All" 1,420, empty "Brands", duplicate "Lift Down").
- **~730 of 1,421 products in draft** — half the catalog not visible.
- **Vendor field misuse:** nearly everything tagged "Harley Davidson Kuwait"
  even for Vacay/La Paz/DOIY/Lift Down items → brand filtering is unreliable.

### Redesign implications
- Establish a consistent product-photography standard (uniform crop/background).
- Rewrite titles to a clean human + SKU-hidden convention.
- Rebuild collections into the world-based IA; archive junk collections.
- Fix vendor/brand metadata so "shop by brand" works.
