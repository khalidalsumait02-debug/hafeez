# Hafeez — Shopify theme

This is the Hafeez storefront design ported from the static HTML site (root of
this repo) into a real **Online Store 2.0** Shopify theme. The look is identical
— same `site.css`, same typography, same sections — but everything is now driven
by live Shopify data (products, collections, cart, checkout, navigation) and is
fully editable in the Shopify theme editor.

## What maps to what

| Static site | Shopify theme |
| --- | --- |
| `index.html` | `templates/index.json` (Hero, Trust bar, Two-up, Category scroller, Split feature, Featured products, Brand grid, Reviews, Newsletter) |
| `paddlesmash.html` | `templates/page.paddlesmash.json` (Media hero, Creds, Marquee, Bundle, Steps, Showcase ×2, Featured products, Lookbook, Reviews, CTA band) — a worked example of rebuilding a brand page |
| `harley-davidson.html`, `lift-down.html`, `vacay.html`, `la-paz.html`, `sunnylife.html`, `summer.html` | Build as **Pages** (or **Collections**) by adding the same sections in the editor |
| `new-in.html`, `sale.html` | Best built as **Collections** → `templates/collection.json` |
| Hard-coded product cards | Real products via `snippets/product-card.liquid` (image hover-swap, swatches, sale badge, quick-add to cart) |
| Fake "Bag (2)" | Native Shopify cart (`templates/cart.json`) + checkout |
| `privacy.html`, `terms.html`, `refund.html` | Shopify **Policy pages** (Settings → Policies) or Pages → `templates/page.json` |
| Header / footer nav | Shopify navigation menus (Online Store → Navigation) |

## Sections library (re-usable in the editor)

Homepage / general: `hero`, `trust-bar`, `two-up`, `category-scroller`,
`split-feature`, `featured-products`, `brand-grid`, `reviews`, `newsletter`.

Brand-page building blocks: `media-hero` (image **or** autoplay video),
`marquee`, `creds`, `showcase`, `steps`, `lookbook`, `bundle`, `cta-band`.

Every section has a `{% schema %}` with presets, so they show up under **Add
section** with the Hafeez defaults pre-filled.

## Deploy it

You need the product/collection data in the store first (the design renders
placeholders until then). Then push the theme with the Shopify CLI:

```bash
# from this directory
shopify theme dev      # live local preview against your store
shopify theme push     # upload as a new unpublished theme
```

Or zip the `shopify-theme/` folder and upload via **Online Store → Themes →
Add theme → Upload zip**.

## One-time store setup the theme expects

1. **Navigation menus** (Online Store → Navigation):
   - `main-menu`: New In, PaddleSmash, Lift Down, Summer & Lifestyle,
     Harley-Davidson, Sale
   - `footer`: Privacy Policy, Terms of Service, Refund Policy
   - Plus three footer column menus (Shop / Support / Hafeez) wired to the
     footer section's "Menu column" blocks.
2. **Products & collections** — create the brands as collections
   (`paddlesmash`, `lift-down`, `vacay`, `la-paz`, `sunnylife`,
   `harley-davidson`, plus `new-in` / `sale`). The homepage "Best sellers"
   and brand pages point at these.
3. **Currency** — set the store currency to KWD so prices render as
   `68.000 KWD` (Shopify formats the 3-decimal KWD automatically).
4. **Payments** — enable a KNET gateway + Shopify Payments / Apple Pay for the
   Kuwait/GCC setup shown in the trust bar and footer.

## Not included (Theme-Store-only / optional)

`blog`, `article`, `password`, and `gift_card` templates are not included — the
store works without them. Add later if needed.
