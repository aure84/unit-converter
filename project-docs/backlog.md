# Product Backlog

**Studio:** AI Startup Studio
**Last Updated:** 2026-04-14
**Owner:** PO Agent

---

## Backlog — unit-converter
Last updated: 2026-04-14
Source decisions: DEC-002

---

## MoSCoW Summary

| Priority | Stories |
|---|---|
| Must Have | #1, #2, #3, #4, #5, #6, #7, #8 |
| Should Have | #9, #10, #11, #12 |
| Could Have | #13, #14 |
| Won't Have (v1) | User accounts, currency/crypto, i18n, PWA, blog, custom unit builder |

---

## Must Have

---

### 1. Project Scaffold — React 19 + Vite + File-Based Routing
**Priority:** HIGH
**Effort:** S (2 pts)
**MoSCoW:** Must

**User Story:**
As a developer
I want a working React 19 + Vite project scaffold with file-based routing
So that the team has a stable foundation to build every feature on top of

**Acceptance Criteria:**
- React 19 + Vite installed and running locally with `npm run dev`
- File-based routing configured (react-router v7 or TanStack Router) supporting `/[category]/[pair]` URL pattern
- Route structure supports `/[category]/[from]-to-[to]` (e.g. `/length/meters-to-feet`)
- `npm run build` produces a static output folder with no errors
- ESLint + Prettier configured and passing on initial scaffold

---

### 2. Unit Registry — Conversion Data Model
**Priority:** HIGH
**Effort:** S (2 pts)
**MoSCoW:** Must

**User Story:**
As a developer
I want a single JSON/TypeScript unit registry as the source of truth for all conversions
So that every converter component and SEO page pulls from one consistent, maintainable data source

**Acceptance Criteria:**
- Registry covers all 8 categories: Length, Weight/Mass, Temperature, Volume, Area, Speed, Time, Data Storage
- Each unit entry includes: id, label, symbol, and conversion factor to a base unit (or formula for non-linear units)
- Temperature handled via formula-based conversion (not a simple multiplication factor)
- At least 5 units per category included at launch
- All conversion pairs are derivable from the registry — no individual pair hardcoding
- Registry exported as a typed TypeScript module with defined interfaces

---

### 3. Converter UI Component — Instant Bidirectional Conversion
**Priority:** HIGH
**Effort:** M (3 pts)
**MoSCoW:** Must

**User Story:**
As a user
I want to type a value in either unit field and instantly see the converted result in the other field
So that I can convert units quickly without pressing any button

**Acceptance Criteria:**
- Two numeric input fields, one per unit (e.g. meters and feet)
- Editing either field instantly updates the other — no submit button exists
- Unit selector dropdowns allow switching to any unit within the same category
- Handles decimal inputs correctly
- Handles empty or invalid input gracefully — no NaN or error text displayed to the user
- Conversion accurate to at least 6 significant figures
- Component is reusable across all 8 categories via props (category, defaultFrom, defaultTo)

---

### 4. Category Pages — All 8 Conversion Categories
**Priority:** HIGH
**Effort:** M (3 pts)
**MoSCoW:** Must

**User Story:**
As a user
I want a dedicated page for each conversion category (e.g. /length, /weight)
So that I can navigate directly to the type of conversion I need

**Acceptance Criteria:**
- 8 category routes exist: `/length`, `/weight`, `/temperature`, `/volume`, `/area`, `/speed`, `/time`, `/data-storage`
- Each category page renders the converter UI with that category's units pre-loaded
- Default unit pair on each category page is the most commonly searched pair (e.g. meters/feet for length, kg/lbs for weight)
- Page H1 reflects the category (e.g. "Length Converter")
- Navigation links to all 8 categories are visible on every page

---

### 5. Per-Pair SEO Landing Pages — Static Pre-Rendering
**Priority:** HIGH
**Effort:** L (5 pts)
**MoSCoW:** Must

**User Story:**
As a user searching Google for a specific conversion
I want to land on a dedicated page for exactly that conversion (e.g. "meters to feet")
So that I can immediately use the converter without any additional navigation

**Acceptance Criteria:**
- URL pattern: `/[category]/[from-unit]-to-[to-unit]` (e.g. `/length/meters-to-feet`)
- All pair pages are statically pre-rendered at build time from the unit registry
- Each page loads the converter pre-populated with the correct from/to units
- Each page has a unique H1: "[From Unit] to [To Unit] Converter" (e.g. "Meters to Feet Converter")
- Reverse pair page also exists (e.g. `/length/feet-to-meters`) and pre-loads units in reverse
- Invalid or unknown pair slugs fall back to the parent category page — no 500 error

---

### 6. SEO Metadata Pipeline
**Priority:** HIGH
**Effort:** M (3 pts)
**MoSCoW:** Must

**User Story:**
As the site owner
I want every page to have complete, unique SEO metadata generated automatically from the unit registry
So that Google can correctly index and rank each page without requiring manual metadata entry per page

**Acceptance Criteria:**
- Every page has a unique `<title>` tag — format: "[From] to [To] Converter | UnitConverter"
- Every page has a unique `<meta name="description">` mentioning both units and the conversion action
- `<link rel="canonical">` tag present on every page pointing to its own canonical URL
- Open Graph tags present on every page: `og:title`, `og:description`, `og:url`, `og:type`
- JSON-LD structured data (`WebApplication` or `FAQPage` schema) present on all per-pair pages
- `robots.txt` present at site root, permitting full crawl
- `sitemap.xml` generated at build time listing all static routes with correct `<loc>` entries

---

### 7. Google AdSense Integration
**Priority:** HIGH
**Effort:** S (2 pts)
**MoSCoW:** Must

**User Story:**
As the site owner
I want Google AdSense ad slots placed in the header, in-content area, and footer
So that the site generates ad revenue from organic traffic from day one

**Acceptance Criteria:**
- Three ad slot placements defined: header (below nav), in-content (below converter), footer (above page bottom)
- AdSense script loads asynchronously and does not block page rendering
- Ad slots render as empty reserved-space placeholders in the development environment
- AdSense publisher ID injected via environment variable — not hardcoded in source
- Each ad slot has explicit width/height dimensions reserved to prevent CLS
- Ad slots do not load until after the converter component is interactive (lazy loaded)

---

### 8. GA4 + Google Search Console Integration
**Priority:** HIGH
**Effort:** S (2 pts)
**MoSCoW:** Must

**User Story:**
As the site owner
I want GA4 event tracking and Search Console ownership verification on every page
So that I can monitor traffic, behavior, and search performance from the moment the site goes live

**Acceptance Criteria:**
- GA4 measurement script present in `<head>` on all pages
- GA4 Measurement ID injected via environment variable
- GA4 script uses `async` attribute — does not block render
- GA4 calls are suppressed in local development (gated by env var or hostname check)
- `page_view` event fires on each client-side route navigation
- Search Console ownership verified via HTML meta tag or DNS record before launch

---

## Should Have

---

### 9. Copy-to-Clipboard
**Priority:** MEDIUM
**Effort:** S (1 pt)
**MoSCoW:** Should

**User Story:**
As a user
I want to copy the converted result to my clipboard with one click
So that I can paste the value into another app without manually selecting text

**Acceptance Criteria:**
- Copy button appears adjacent to each result field
- Clicking copies the numeric result (with unit symbol) to the system clipboard
- Button shows visual confirmation (e.g. label changes to "Copied!" for 2 seconds, then resets)
- Uses Navigator Clipboard API with a `document.execCommand` fallback for older browsers
- Works on iOS and Android mobile browsers

---

### 10. Shareable URLs via Query Params
**Priority:** MEDIUM
**Effort:** S (2 pts)
**MoSCoW:** Should

**User Story:**
As a user
I want the page URL to update as I type a value so I can share or bookmark a pre-filled conversion
So that I can send someone a link that opens the converter with my value already entered

**Acceptance Criteria:**
- URL query param `?value=` updates in real time as the user types (e.g. `/length/meters-to-feet?value=100`)
- Loading a URL with `?value=` pre-fills the input field and displays the converted result immediately
- URL updates use `history.replaceState` — not `pushState` — so back button is not polluted
- Works on all per-pair pages and category pages
- No additional UI element required — URL bar update is the share mechanism

---

### 11. Mobile-First Responsive Layout
**Priority:** HIGH
**Effort:** M (3 pts)
**MoSCoW:** Should

**User Story:**
As a user on a mobile device
I want the converter and all navigation to be fully usable on a small screen
So that I can convert units on the go without zooming, pinching, or horizontal scrolling

**Acceptance Criteria:**
- No horizontal scroll on viewport widths 320px and above
- All input fields and dropdowns meet minimum 44px touch target height
- Ad slots stack vertically on mobile and do not overflow their container
- Navigation collapses or stacks gracefully on small screens
- Converter layout tested and verified on Chrome DevTools emulation for iPhone SE (375px) and Pixel 5 (393px) viewports
- Font sizes remain legible at mobile viewport widths (minimum 16px for inputs to prevent iOS zoom)

---

### 12. Core Web Vitals Optimization
**Priority:** HIGH
**Effort:** M (3 pts)
**MoSCoW:** Should

**User Story:**
As the site owner
I want the site to pass Core Web Vitals thresholds
So that Google's ranking algorithm does not penalize the site and organic rankings are competitive

**Acceptance Criteria:**
- LCP < 1.5s measured on Lighthouse mobile simulation (throttled CPU + network)
- CLS < 0.05 — no layout shifts caused by ads, web fonts, or images
- INP < 100ms — converter input response is instant
- No render-blocking resources in `<head>` (all scripts deferred or async; fonts use preconnect + `font-display: swap`)
- Lighthouse Performance score >= 90 on mobile
- All above verified with a `npm run build` + Lighthouse CI run before deploy

---

## Could Have

---

### 13. Homepage — Category Directory
**Priority:** LOW
**Effort:** S (2 pts)
**MoSCoW:** Could

**User Story:**
As a first-time visitor arriving at the root URL
I want a homepage that lists all 8 conversion categories with popular pair links
So that I can quickly find the type of conversion I need

**Acceptance Criteria:**
- Root `/` route renders a homepage (statically rendered)
- All 8 categories displayed as tappable cards or links
- Each card links to its category page
- 2-3 most popular pairs listed per category as direct quick links (e.g. "Meters to Feet")
- Page H1 targets the head keyword "Unit Converter"
- Unique meta description and title tag on the homepage

---

### 14. Common Conversions Reference Table on Per-Pair Pages
**Priority:** LOW
**Effort:** S (2 pts)
**MoSCoW:** Could

**User Story:**
As a user on a meters-to-feet page
I want to see a table of pre-calculated common values (e.g. 1m, 5m, 10m expressed in feet)
So that I can look up a value at a glance without typing

**Acceptance Criteria:**
- Reference table shows 8-10 common input values and their pre-calculated converted outputs
- Table is rendered at build time — values are static HTML, not calculated client-side
- Table placed below the converter UI, above the footer ad slot
- Table rows generated automatically from the unit registry — no per-page hardcoding
- Table is readable on mobile viewports without horizontal scroll

---

## Won't Have (v1)

The following are explicitly out of scope per DEC-002. They will not be added to this backlog until a new decision log entry approves them:

- User accounts, saved history, or favorites
- Currency or cryptocurrency conversion (requires live external API — adds cost and maintenance)
- Internationalization (i18n) or multi-language support
- PWA / offline mode / service worker
- Custom unit builder (user-defined units)
- Blog or CMS content layer
- Dark mode toggle

---

## Story Point Summary

| # | Story | Points | MoSCoW |
|---|---|---|---|
| 1 | Project Scaffold | 2 | Must |
| 2 | Unit Registry | 2 | Must |
| 3 | Converter UI Component | 3 | Must |
| 4 | Category Pages | 3 | Must |
| 5 | Per-Pair SEO Landing Pages | 5 | Must |
| 6 | SEO Metadata Pipeline | 3 | Must |
| 7 | Google AdSense Integration | 2 | Must |
| 8 | GA4 + Search Console | 2 | Must |
| 9 | Copy-to-Clipboard | 1 | Should |
| 10 | Shareable URLs | 2 | Should |
| 11 | Mobile-First Layout | 3 | Should |
| 12 | Core Web Vitals | 3 | Should |
| 13 | Homepage Directory | 2 | Could |
| 14 | Reference Table | 2 | Could |
| | **Total** | **35** | |

**Must Have:** 22 pts
**Should Have:** 9 pts
**Could Have:** 4 pts
