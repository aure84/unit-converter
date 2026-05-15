# Design Spec: Organic Traffic Growth — convert-fast.com
Date: 2026-05-16

## Problem

711 impressions, 0 clicks, avg. position 58.5 over 28 days. Only 48 of 987 sitemap URLs are indexed. Google's calculator widget intercepts all generic converter queries. AdSense rejected for "low value content."

Two root causes:
1. Pages are too thin — Google won't rank or index them.
2. Generic pair URLs trigger the calculator widget, so even ranked pages get no clicks.

## Strategy

Approach 2: Content enrichment + blog sprint. Fix thin content on value-specific pages while publishing a burst of blog articles that target widget-resistant queries. Internal linking drives Google to crawl deeper into the site.

---

## Section 1: Blog Sprint

**20 articles, ~1,000 words each, published 1 per day (drip schedule).**

Every article includes:
- Intro paragraph with the answer up front
- 3–4 H2 sections with practical content
- At least one SVG visual (diagram, chart, or infographic)
- 3–5 FAQ items with FAQ schema (JSON-LD)
- 1–2 internal links to relevant converter pair pages

### Article List

| # | Title | Type |
|---|---|---|
| 1 | What Is 2.5 Bar in PSI? Tire Pressure Guide | Context |
| 2 | Bar to PSI Conversion Chart (Full Reference) | Reference |
| 3 | How Big Is 1 Hectare? Comparisons + Examples | Context |
| 4 | Hectare to Square Km — When and Why It Matters | How-to |
| 5 | Pounds to Kilograms: The Complete Guide | How-to |
| 6 | How Many Steps Is 1 km? | Context |
| 7 | Celsius to Fahrenheit: Quick Reference + Formula | Reference |
| 8 | Inches to cm Chart — Clothes, Height, Screens | Reference |
| 9 | What Is a Kilowatt-Hour? Energy Explained | Context |
| 10 | Horsepower vs kW vs PS — What's the Difference? | Context |
| 11 | Liters to Gallons: US vs UK Explained | Context |
| 12 | How to Read Tire Pressure: Bar, PSI, kPa | Context |
| 13 | Joules to Calories: Food Energy Explained | Context |
| 14 | MPG to L/100km — EU vs US Fuel Economy | How-to |
| 15 | Metric vs Imperial: The Complete Cheat Sheet | Reference |
| 16 | The Mars Climate Orbiter Crash — A $327M Unit Mistake | Conversion Fail |
| 17 | Columbus's Miscalculation That Discovered America | Conversion Fail |
| 18 | The Gimli Glider: When a Boeing 767 Ran Out of Fuel Mid-Air | Conversion Fail |
| 19 | The Vasa Warship Disaster — Asymmetric Measurements Sank a Navy | Conversion Fail |
| 20 | When a Hospital Gave 10x the Medication Dose | Conversion Fail |

### Publishing Schedule

Write all 20 articles in one session (AI-assisted). Stage them in `src/data/blogPosts.js` with future `date` values so they publish automatically via the drip schedule. One article per day, starting the day after the sprint ships.

---

## Section 2: Value-Specific Page Enrichment

Target: top ~50 value-specific URLs by GSC query volume (weight, length, temperature categories first).

Each enriched page adds:

| Element | Description |
|---|---|
| **Context block** | 2–3 sentences placing the value in a real-world frame. "3,300 lbs is roughly the weight of a mid-size sedan." |
| **Formula block** | One-line formula + one-line explanation. "Divide pounds by 2.205 to get kilograms." |
| **Related values** | 5 nearby values as links. `/weight/3000-pound-to-kilogram`, `/weight/3100-pound-to-kilogram`, etc. |
| **Extended FAQ** | 5 Q&A items, category-specific. Weight pages discuss body weight. Length pages discuss height. |
| **SVG visual** | Scale diagram showing where the value sits relative to common reference points. |

Context copy and FAQ content live in a `VALUE_ENRICHMENT` map in `src/data/pairContent.js`, keyed by `category|from|to`. The `ValueResult` component reads from this map and renders the enrichment block below the result.

---

## Section 3: Internal Linking

Google has indexed only 48 of 987 pages. More internal links push Google's crawler deeper into the site.

| Source | Destination | Method |
|---|---|---|
| Category page (`/weight`) | Top 5 value-specific URLs for that category | Add to "Popular conversions" section |
| Pair page (`/weight/pound-to-kilogram`) | Top 5 value-specific for that pair | New "Common values" block below the converter |
| Blog article | 1–2 relevant pair pages + 1 value-specific page | Inline link in body text |
| SVG scale diagrams | Value-specific pages at each tick mark | Clickable SVG elements |

---

## Section 4: Visual Component Library

All visuals are inline SVG React components — no external image files. They use CSS variables from `src/index.css` for automatic dark mode support.

**Components to build:**

| Component | Used in | Description |
|---|---|---|
| `<ScaleDiagram>` | Value-specific pages, blog | Horizontal scale with the converted value marked. Color zones (green/yellow/red) for context. |
| `<ComparisonChart>` | Blog articles | Side-by-side visual comparing two units or values. |
| `<ReferenceTable>` | Blog articles | Color-coded table with zone indicators (already exists for pair pages — extend for blog use). |
| `<StepDiagram>` | How-to blog articles | Numbered step sequence with icons. |
| `<SizeComparison>` | Hectare, large weight values | Object silhouettes at relative scale (football field, car, elephant). |

All components accept a `darkMode` prop or read from the document's `data-theme` attribute.

File location: `src/components/visuals/` — one file per component.

---

## Section 5: Technical Fixes

| Task | Action |
|---|---|
| GSC sitemap resubmit | Submit updated sitemap (ps URLs, new blog posts) via GSC |
| ads.txt "not found" | Verify `public/ads.txt` deploys correctly on Cloudflare Pages |
| AdSense resubmission | Submit after blog sprint + enrichment ships |
| GSC "Validate fix" | Click after soft 404 fix deploys (already shipped) |

---

## Success Metrics (4 weeks after shipping)

| Metric | Current | Target |
|---|---|---|
| Indexed pages | 48 | 300+ |
| Monthly impressions | ~750 | 3,000+ |
| Monthly clicks | 0 | 50+ |
| Avg. position | 58.5 | 40 or better |
| AdSense status | Rejected | Resubmitted |
