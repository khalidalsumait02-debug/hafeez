# Hafeez — Company & Brand Profile

> Working document. Captures everything provided so we understand the company
> before building the new (off-Shopify) storefront. Catalog section is a stub
> until product data is supplied (live site hafeez.shop is unreachable from the
> build environment — blocked by network policy).

## Company

- **Name:** Hafeez (Arabic wordmark: حفيظ)
- **Website:** hafeez.shop (currently on Shopify — planning to migrate off)
- **Market:** Kuwait-based; ships across the **GCC**
- **Currency:** KWD (all pricing)
- **Physical presence:** Booth inside **Harley-Davidson Kuwait**
- **Official status:** Official **Harley-Davidson merchandise reseller in Kuwait**

## What we sell

- Harley-Davidson official merchandise (the core of the catalog)
- Hats / caps (Headwear)
- **PaddleSmash** — a viral paddle game
- Summer / lifestyle items from other brands: SunnyLife, Vacay Swimwear,
  La Paz, DOIY, Lift Down, Monoak SA
- Store legal name: **Hafeez International** · admin email: aziz@cmc.com.kw

## Catalog snapshot (live Shopify, pulled 2026-06-29)

- **1,421 total products** · 709 active · 711 draft · 1 archived
- **~691 products active AND published to the Online Store** (these are live and
  shoppable). So the site is NOT empty — roughly half the catalog is live, the
  other half (~730) sits in draft / unpublished and is invisible.
- Sales channels connected: Online Store, Point of Sale, Facebook & Instagram,
  Google & YouTube (~706 products on each except Online Store at 691).
- **28 collections**, but the collection structure is messy — lots of
  app-generated / junk collections:
  - Real/curated: Clothing (779), Headwear (173), Accessories & Collectables
    (262), Gifts & Accessories (270), Collectables (107), Clearance (350),
    Flash Sale! (229), H-D 120th Anniversary (71), PaddleSmash (5),
    SunnyLife (29), Vacay Swimwear (19), La Paz (37), DOIY (7), EMS (32),
    Harley-Davidson (1,250), Merchandise (629)
  - Junk / app cruft to clean up: "AVADA - Best Sellers" (695),
    "Recommended products (Seguno)" (695), "Ultimate Search - Do not delete"
    (1,420), "Best Sellers" (1,139 — meaningless), "New Arrivals" (1,418),
    duplicate "Lift Down" / "Lift Down Fall Collection", empty "Brands" (0).
- Category mix (store-wide, by product_type):
  - Men Clothing 414 · Women Clothing 115 · Headwear 151 · Accessories 141 ·
    Bags 58 · Shoes 24 · PaddleSmash ~6 (plus Knives, Gloves, Belts, Promotions)
- Vendor: almost everything tagged **Harley Davidson Kuwait**.
- Price range observed: ~KWD 3 (bottle opener, decals) up to ~KWD 248
  (leather jackets). Mid-range clothing KWD 15–75; leather KWD 99–175+.

### Diagnosis of "the website doesn't work" (confirmed by owner)
The catalog IS live (~691 products published), so the problem is NOT an empty
store. Confirmed issues:
- Layout and images are unoptimized and don't look good.
- Navigation is broken.
- No real landing pages.
- Overall: needs a full redesign.

## Redesign brief (owner direction)

- **Goal:** move off Shopify onto a new, owned website.
- **Approach owner prefers:** create a NEW design first, then import/implement it
  (design-first, not tweak-the-existing-theme).
- Must keep the existing **Hafeez branding** (logo set + palette above).
- Must fix: visual quality, image optimization, navigation, and add proper
  landing pages.
- Constraint from owner: **low maintenance** — little time for ads/social, so the
  site needs to look good and convert on its own.
- Confirmed: business summary above is accurate. Target customer not yet defined.

### Open decisions before any build
1. Target platform/stack for the new owned site (custom build vs. hosted).
2. Where the product data + images come from at launch (reuse the 691 live
   Shopify products via export/API, or curate a subset).
3. Define the target customer (riders / gifters / summer-beach / tourists).
4. What "import the design in" means in practice (Figma → code, or a theme/
   page-builder the new platform supports).

## Positioning notes

- Owner likes the existing **branding** (keep brand identity in the migration)
- Business is currently underperforming; goal is to revamp the online footprint
  and move sales onto an owned website instead of Shopify.

## Brand assets

### Logo
- Wordmark: stylized Arabic "حفيظ" with "HAFEEZ" in Latin caps beneath.
- Provided in 8 variants (Hafeez_Logo-01 … -08) across color backgrounds:
  - 01: dark mark on white
  - 02: light mark on black
  - 03: orange mark on pale yellow
  - 04: pale-yellow mark on green (primary / hero lockup)
  - 05: yellow mark on black
  - 06: green mark on mint
  - 07: light-green mark on dark green
  - 08: yellow mark on orange

### Color palette (from brand Canva)
| Role            | Hex       |
|-----------------|-----------|
| Primary green   | `#26d07c` |
| Pale yellow     | `#fff19f` |
| Orange          | `#ff6900` |
| Dark green      | `#005844` |
| Mint            | `#b5e3d8` |
| Black           | `#000000` |

Hero lockup = pale-yellow wordmark on primary green (`#fff19f` on `#26d07c`).

## Open questions / still needed

1. **Full product catalog** — titles, categories, prices (KWD), images,
   inventory. Live site is blocked here, so this needs to come via: Shopify
   admin connection (switch the connected store to the real Hafeez store), a
   CSV/product export, or pasted content.
2. Customer profile (riders, tourists, gifters?) and best-selling SKUs.
3. **What "not doing well" means:** very little sales; owner has no time to
   optimize ads or post on social; current website is "terrible and doesn't
   even work." → New site must be low-maintenance and actually functional.
4. Target stack / hosting preference for the new site.
