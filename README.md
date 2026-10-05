# rubbers-and-hoses

# Rubber & Hose — B2B Industrial Discovery & RFQ Platform

A production-grade, authoritative B2B sales and Request For Quotation (RFQ) website engineered specifically for an established Zimbabwean supplier of industrial rubber products, hydraulic hoses, PVC hoses, drive belts, narrow wedge belts, conveyor belting, and fittings.

---

## 1. Commercial Architecture & Purpose

Unlike consumer e-commerce stores, industrial buyers (mining engineers, plant fitters, commercial farmers, and procurement officers) require:
1. **Immediate Spec Discovery:** Finding correct products via part numbers (`SPB 2600`, `R2AT-08`), dimensions (`2"`, `50mm`), and applications (`slurry pump`, `jaw crusher`, `dam suction`).
2. **Contextual WhatsApp Sales Dispatch:** 1-tap messaging that auto-populates part codes and sizes for urgent breakdown or pricing enquiries.
3. **B2B RFQ Project Engine:** Assembling multi-product Bills of Materials (BOM) with drawings/attachments and delivery site details to obtain itemized tax proforma invoices.
4. **Dual Currency Invoicing:** Clear pricing denomination in USD and statutory RBZ interbank ZiG with VAT compliance.

---

## 2. Technical Stack

- **Framework:** Next.js 15+ (App Router, Server Components by default)
- **Language:** TypeScript 5.8 (Strict type checking)
- **Styling:** Tailwind CSS with custom industrial color tokens (`#090B0E` graphite, `#FF5500` safety orange accent, `#1C222E` steel)
- **State Management:** React Context (`QuoteBasketContext`) with persistent `localStorage` synchronization
- **Validation:** Zod schema validation for all procurement submissions
- **Icons:** Lucide React engineering iconography
- **SEO & Structured Data:** Semantic HTML5, dynamic XML sitemaps, Open Graph, and JSON-LD `Product` & `Organization` schemas

---

## 3. Getting Started

### Prerequisites
- Node.js 18.18+ or 20+ (tested on Node v24)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd Chimbetete_Rubber&Hose

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## 4. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Base Application URL
NEXT_PUBLIC_SITE_URL=https://chimbeteterubber.co.zw

# Email Service Configuration (When ready to connect real SMTP/Resend)
# EMAIL_PROVIDER=resend # or 'smtp'
# RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
# SMTP_HOST=smtp.mailgun.org
# SMTP_PORT=587
# SMTP_USER=postmaster@chimbeteterubber.co.zw
# SMTP_PASS=xxxxxxxxxxxxxxxx
# NOTIFICATION_EMAIL=quotes@chimbeteterubber.co.zw
```

*Note: The platform is shipped with a resilient `ConsoleEmailAdapter` that safely simulates and logs all incoming RFQ payloads without crashing if email API keys are absent.*

---

## 5. Content Architecture & Global Config

### How to Replace Demo Company Information
All company metadata, phone lines, branch depots, and disclaimers are centralized in a single file:
👉 **`src/data/company-config.ts`**

Update:
```typescript
export const COMPANY_CONFIG: CompanyConfig = {
  companyName: "Your Confirmed Company Name",
  primaryWhatsAppNumber: "+26377xxxxxxx",
  primaryPhone: "+263242xxxxxx",
  salesEmail: "sales@yourcompany.co.zw",
  rfqEmail: "quotes@yourcompany.co.zw",
  branches: [ ... ]
};
```

### How to Add or Replace Products
Product specifications and variants are defined in:
👉 **`src/data/catalogue-data.ts`**

Each product entry supports:
- `code`: Primary series SKU (e.g. `CRH-R2AT-2SN`)
- `workingPressureRangeBar`: Working pressure envelope (e.g. `105 to 415 bar`)
- `temperatureRange`: Min/max thermal envelope
- `reinforcement`: Braids, spiral wire, or plies
- `specifications`: Arbitrary key-value engineering benchmarks
- `variants`: Size-specific rows with part codes and nominal dimensions
- `searchKeywords`: Synonyms and alternative terms (`fan belt` -> V-belt)

---

## 6. Request For Quote (RFQ) Engine

- **Endpoint:** `/api/rfq` (POST)
- **Validation:** Enforced via `src/lib/rfq-schema.ts` with Zod
- **Anti-Spam Strategy:**
  - Invisible honeypot field (`company_tax_check`) that catches automated bots without disrupting human users.
  - In-memory rate limiting (max 10 requests per minute per IP).
- **Extensibility:** The transport layer uses an interface pattern (`IEmailAdapter` in `src/lib/email-adapter.ts`). You can seamlessly plug in Nodemailer, SendGrid, Postmark, or a webhook to your ERP/CRM system (SAP, Odoo, Sage).

---

## 7. Contextual WhatsApp Architecture

WhatsApp deep links are dynamically computed via `src/lib/whatsapp.ts`.
When a customer clicks WhatsApp on a product page or specific variant, the system encodes:
- Company greeting
- Product name and Part Code
- Selected variant size/dimensions
- Inquiry intent ("Please assist with availability and a formal proforma")

---

## 8. SEO & Regional Targeting

- High-intent industrial Zimbabwean search targeting:
  - `industrial hoses Zimbabwe`
  - `hydraulic hoses Harare`
  - `SPB 2600 wedge belts Bulawayo`
  - `mining slurry hose Mutare`
  - `conveyor belting Zimbabwe`
- Complete `sitemap.xml` dynamically generated at `/sitemap.xml` covering every product, category, and industry page.
- Semantic JSON-LD schema injected automatically for Google rich snippets.

---

## 9. CMS & Database Migration Roadmap

The data layer in `src/data/` is strictly typed and decoupled from presentation components. When migrating to a headless CMS or database:
1. **Payload CMS / Sanity / Strapi:** Map the `Product` and `Category` TypeScript interfaces directly to your collection schemas.
2. **Supabase / PostgreSQL:** Use the provided types in `src/types/industrial.ts` to generate SQL tables.
3. Replace the static arrays with standard `fetch()` or ORM queries in `src/data/`. Presentation components will require zero modification.

---

## 10. Production Build & Deployment

```bash
# Verify TypeScript types
npm run typecheck

# Build for production
npm run build

# Start production server
npm run start
```
