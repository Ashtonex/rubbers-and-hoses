# INDUSTRIAL B2B PLATFORM — BUILD & ARCHITECTURE PLAN
**Project:** Chimbetete Rubber & Hose (Commercial Industrial Discovery & RFQ Platform)  
**Target Market:** Zimbabwe (Harare, Bulawayo, Mutare, Kwekwe, Gweru, Chiredzi, mining & agro-industrial corridors)  
**Primary Goal:** Transform industrial requirement into qualified RFQ / WhatsApp direct sales dispatch in < 60 seconds without generic consumer checkout friction.

---

## 1. Architectural Principles & Requirements
1. **Authoritative & Engineered Industrial Aesthetic**:
   - Palette: Deep Industrial Charcoal/Graphite (`#0F1115`), Machine Steel (`#1E222B`), Slate (`#374151`), Light Concrete/Technical White (`#F8FAFC`), Industrial Safety Orange (`#FF5500` / `#EA580C`) as high-contrast primary conversion accent.
   - Typography: Rugged high-impact technical display typography for category/spec headers, razor-sharp clean sans-serif for high-density spec tables and technical data.
   - Disciplined layout: Dense technical spec tables, clear tolerances, working pressure ratings, temperature envelopes, reinforced plies, part numbering schemas.
2. **Critical Factual Guardrails**:
   - Zero hallucinated claims: No invented founding years, unverified branch addresses, fake certificates, or fake customer logos.
   - All company metadata, branch locations, and contact points are isolated in `@/data/company-config.ts` with explicit `[DEMO / PENDING VERIFICATION]` labels until authenticated by the client.
3. **Product Discovery & Technical Search Engine**:
   - Multi-attribute search indexing: Part numbers (`SPB 2600`, `R2AT-08`), synonyms (`fan belt` -> `v-belt`, `layflat` -> `discharge hose`), imperial & metric dimensions (`2"`, `50mm`), and applications (`slurry pump`, `boiler feed`, `tractor PTO`).
   - Dynamic category hierarchies: Rubber Hoses, PVC Hoses, Belts & Power Transmission, Rubber Products, Fittings & Accessories, Conveyor Products.
4. **B2B Industrial RFQ Engine**:
   - Multi-item Quote Basket ("RFQ Project List") alongside instant "Fast-Track Single Item Quote".
   - Contextual WhatsApp dispatch: Deep links pre-filling exact part codes, sizes, and operational context with URL-encoded messages.
   - Server-side validation via Zod, honeypot spam protection, safe attachment mock architecture, and email transport adapter pattern.
5. **SEO & Regional Geo-Targeting**:
   - Target keywords: `industrial hoses Zimbabwe`, `mining slurry hose Zimbabwe`, `V belts Harare Mutare`, `conveyor belting Zimbabwe`, `camlock fittings`.
   - Rich JSON-LD Structured Data: `Product`, `BreadcrumbList`, and configurable `Organization`. Open Graph, Twitter Cards, robots.txt, XML sitemap.

---

## 2. Route Map
- `/` — High-impact Industrial Homepage (5-second value proposition, quick-search engine, category grid, industries served, technical credibility, RFQ dispatch).
- `/catalogue` — Full technical catalogue with live multi-filter (category, application, size, pressure), search bar, and result metrics.
- `/catalogue/[categorySlug]` — Category-specific catalogue landing page with deep technical descriptions and subcategory navigation.
- `/catalogue/[categorySlug]/[productSlug]` — Technical Product Specification View (interactive spec tables, part numbers, CAD/dimension placeholders, related items, pre-populated RFQ trigger, and WhatsApp sales button).
- `/industries` — Industrial application hub (Mining, Agriculture, Manufacturing, Automotive/Transport, Construction).
- `/industries/[industrySlug]` — Dedicated industry solution page highlighting harsh environmental demands and matching product families.
- `/rfq` — Dedicated multi-item or single-item B2B Request For Quote engine with spec pre-fill and technical project details.
- `/technical-resources` — Hose selection guides, belt sizing tables, chemical compatibility charts, and care & maintenance tips.
- `/contact` — Regional branch dispatch, WhatsApp direct lines, RFQ drop-in, emergency breakdowns desk.
- `/about` — Practical expertise, capability profile, and verified company credentials outline.
- `/api/rfq` — Secure API endpoint with Zod schema validation, honeypot spam check, and extensible email/CRM adapter.

---

## 3. Component Hierarchy
- **Layout & Shell**:
  - `Header`: Industrial top-bar with regional sales status, direct WhatsApp hotline, main navigation, RFQ Basket trigger badge.
  - `Footer`: Comprehensive industrial directory, compliance & ISO placeholder notice, regional coverage, quick links.
  - `MobileStickyBar`: Ergonomic thumb-zone bar for mobile: instant "WhatsApp Sales" + "Quick RFQ" without obstructing content.
- **Search & Filtering**:
  - `ProductSearchModal` & `InlineSearch`: Instant live search with keyboard shortcuts (`Cmd+K`), highlighting part numbers and category matches.
  - `CatalogueFilterSidebar`: Responsive accordion filters for material, pressure rating, reinforcement, and application.
- **Product Display**:
  - `ProductCard`: Industrial data-dense card displaying part code, pressure rating, material, and quick RFQ button.
  - `SpecTable`: Responsive, scroll-locked technical specification table supporting arbitrary technical dimensions.
  - `QuoteBasketDrawer`: Slide-over drawer to manage multi-product bill of materials for consolidated RFQ submission.
- **Forms & Actions**:
  - `RfqForm`: Multi-step or streamlined high-conversion technical inquiry form with file upload support architecture.
  - `ContextualWhatsAppButton`: Auto-generating localized WhatsApp links with pre-filled technical specs.

---

## 4. Content & Data Schema (TypeScript)
- `CompanyConfig`: Company name, regional branches, verified status flags, contact channels.
- `Category`: `id`, `slug`, `name`, `heroImage`, `description`, `subcategories`, `applications`.
- `Product`: `id`, `slug`, `name`, `code`, `categorySlug`, `subcategory`, `shortDesc`, `longDesc`, `materials`, `temperatureRange`, `workingPressure`, `burstPressure`, `reinforcement`, `sizes`, `specifications` (flexible key-value table), `applications`, `industries`, `searchKeywords`, `featured`.
- `Industry`: `id`, `slug`, `title`, `overview`, `criticalDemands`, `featuredProductIds`.
- `RFQSubmission`: Zod schema for validated procurement inquiries.

---

## 5. Development Milestones
- **M1: Foundation & Scaffold**: Next.js App Router, Tailwind CSS, Lucide Icons, industrial design tokens, base layout, and typography.
- **M2: Data Layer & Central Config**: TypeScript definitions, comprehensive realistic demo dataset (20+ rich industrial items across 6 categories), and company config layer.
- **M3: Navigation, Search & Layout Shell**: Topbar, responsive header, RFQ basket context state, mobile sticky conversion bar, footer.
- **M4: Industrial Homepage**: 5-second value hero, quick search, interactive category grid, industries showcase, technical authority block, RFQ banner.
- **M5: Catalogue Engine & Filters**: Multi-faceted filter system, full-text client-side search, product grid, empty states.
- **M6: Deep Technical Product Detail**: Flexible spec tables, variant selectors, datasheet placeholder, dynamic WhatsApp CTA, pre-populated RFQ trigger.
- **M7: RFQ Engine & API**: Multi-item Quote Basket, complete RFQ form, Zod validation, honeypot protection, success confirmation modal with SLA notice.
- **M8: Industry Landing Pages & Technical Guides**: Specialized industry pages matching severe conditions to rugged product lines.
- **M9: Technical SEO, Accessibility & Performance**: Semantic schema (JSON-LD), robots.txt, sitemap.xml, keyboard navigation, Lighthouse optimization.
- **M10: Verification, QA & Documentation**: Production build check, linting, visual QA, README.md, and CLIENT_CONTENT_CHECKLIST.md.
