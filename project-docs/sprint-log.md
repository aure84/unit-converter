# Sprint Log — unit-converter

**Project:** unit-converter (convert-fast.com)
**Stack:** React 19 + Vite
**Hosting:** Cloudflare Pages (live, connected to GitHub)
**Repo:** github.com/aure84/unit-converter
**Team:** 1 FE Developer (AI-assisted)
**Sprint Length:** 1 week
**Last Updated:** 2026-04-14

---

## Sprint 1 — 2026-04-14 to 2026-04-20

**Sprint Goal:**
Stand up a fully functional, routed converter app with all 8 categories working and the core data layer in place.

**Story Points:** 10 pts — Stories: #1, #2, #3, #4

**Tasks:**

| # | Task | Story | Assigned To | Status |
|---|---|---|---|---|
| 1.1 | Scaffold React 19 + Vite project, replace Vite starter | #1 | Dev | To Do |
| 1.2 | Configure file-based routing with react-router v7 supporting `/[category]/[from]-to-[to]` pattern | #1 | Dev | To Do |
| 1.3 | Set up ESLint + Prettier, verify `npm run build` passes clean | #1 | Dev | To Do |
| 1.4 | Build TypeScript unit registry — all 8 categories, min 5 units each, temperature via formula | #2 | Dev | To Do |
| 1.5 | Export typed registry interfaces; verify all pairs derivable without hardcoding | #2 | Dev | To Do |
| 1.6 | Build bidirectional Converter UI component — live update on either field, no submit button | #3 | Dev | To Do |
| 1.7 | Add unit selector dropdowns, handle decimal + invalid input gracefully, 6 sig-fig accuracy | #3 | Dev | To Do |
| 1.8 | Make Converter component reusable via props (category, defaultFrom, defaultTo) | #3 | Dev | To Do |
| 1.9 | Create all 8 category routes (`/length`, `/weight`, `/temperature`, `/volume`, `/area`, `/speed`, `/time`, `/data-storage`) | #4 | Dev | To Do |
| 1.10 | Set default unit pair per category, add H1 per category page, add global category nav | #4 | Dev | To Do |

**Definition of Done — Sprint 1:**
- `npm run dev` runs locally with no errors
- All 8 category routes load the converter with correct default pairs
- Bidirectional conversion is live on all categories including temperature
- Unit registry is a typed TypeScript module — no pair hardcoded outside it
- `npm run build` produces clean static output
- ESLint + Prettier pass with zero errors

**Progress Summary:**
- Completed: 0 tasks
- In Progress: 0 tasks
- Remaining: 10 tasks

**Blockers:**
- None — infrastructure is live, dev can start immediately

---

### Sprint 1 — Daily Breakdown

---

### Day 1 — 2026-04-14 (Mon) — Project Scaffold

**Stories:** #1
**Tasks:**
- [ ] Run `npm create vite@latest` with React + TypeScript template; delete all boilerplate (App.css, assets, starter JSX)
- [ ] Install react-router v7 (`react-router-dom`); configure `BrowserRouter` in `main.tsx`
- [ ] Define initial route tree: catch-all `/:category` and `/:category/:pair` dynamic segments in `App.tsx`
- [ ] Verify `npm run dev` serves a blank page at `/` with no console errors
- [ ] Install and configure ESLint (`eslint-config-react-app` or `@eslint/js` + `typescript-eslint`) and Prettier; add `.eslintrc` and `.prettierrc`
- [ ] Run `npm run build` — confirm clean static output in `dist/`; commit scaffold to repo

**Acceptance gate:** `npm run dev` runs, `npm run build` passes, ESLint + Prettier report zero errors on empty scaffold.

---

### Day 2 — 2026-04-15 (Tue) — Unit Registry

**Stories:** #2
**Tasks:**
- [ ] Create `src/data/registry.ts`; define TypeScript interfaces: `Unit`, `LinearUnit`, `FormulaUnit`, `Category`
- [ ] Add all 8 categories with at least 5 units each — Length (m, ft, in, km, mi), Weight (kg, lb, g, oz, t), Volume (L, mL, gal, fl oz, cup), Area (m², ft², km², acre, ha), Speed (km/h, mph, m/s, knot, ft/s), Time (s, min, h, day, week), Data Storage (B, KB, MB, GB, TB)
- [ ] Implement Temperature as formula-based entries (C, F, K) using `toBase` and `fromBase` functions instead of a multiplication factor
- [ ] Write a `convert(value, fromId, toId, categoryId)` utility in `src/utils/convert.ts`; handle linear (factor multiplication) and formula (C/F/K) branches
- [ ] Write 3-5 inline unit tests (plain assertions or Vitest) covering: km-to-miles, kg-to-lb, C-to-F, F-to-K, GB-to-MB
- [ ] Export registry and convert utility; verify no pair is hardcoded outside `registry.ts`

**Acceptance gate:** All 5 test assertions pass; `convert()` returns correct results to 6 significant figures.

---

### Day 3 — 2026-04-16 (Wed) — Converter UI (Core Logic)

**Stories:** #3
**Tasks:**
- [ ] Create `src/components/Converter.tsx`; accept props: `category: string`, `defaultFrom: string`, `defaultTo: string`
- [ ] Add two controlled `<input type="number">` fields bound to local state (`valueA`, `valueB`)
- [ ] Wire `onChange` on field A: call `convert(valueA, fromUnit, toUnit, category)` and set `valueB`; mirror for field B
- [ ] Handle edge cases: empty string input renders empty output (not NaN or "0"), non-numeric input silently clears output, result formatted to 6 significant figures using `toPrecision(6)` then `parseFloat` to strip trailing zeros
- [ ] Add two `<select>` dropdowns populated from `registry[category].units`; changing a dropdown re-runs conversion immediately
- [ ] Smoke-test the component in isolation by temporarily rendering it at `/` with `category="length"` defaults

**Acceptance gate:** Typing in either field updates the other instantly; switching dropdowns re-converts; no NaN visible under any input condition.

---

### Day 4 — 2026-04-17 (Thu) — Converter UI (Polish + Reusability)

**Stories:** #3
**Tasks:**
- [ ] Confirm `Converter` is fully prop-driven — remove any hardcoded category or unit IDs from inside the component
- [ ] Add basic CSS / Tailwind utility classes for layout: two-column input row, label above each field, select below input; ensure no horizontal overflow at 375px viewport
- [ ] Verify bidirectional sync does not cause infinite re-render loop (use a `lastEdited` ref or conditional update guard)
- [ ] Add a thin `<header>` shell with site name placeholder and a `<nav>` stub (links TBD on Day 5); confirm layout renders without errors
- [ ] Run ESLint + Prettier across `src/`; fix all warnings
- [ ] `npm run build` — confirm no TypeScript errors; commit

**Acceptance gate:** Component passes all Day 3 checks; no TS errors in build; renders correctly on 375px viewport.

---

### Day 5 — 2026-04-18 (Fri) — Category Pages

**Stories:** #4
**Tasks:**
- [ ] Create `src/pages/CategoryPage.tsx`; read `:category` param via `useParams()`; look up category in registry; render `<Converter>` with correct `defaultFrom`/`defaultTo` per category config
- [ ] Define default pairs map in `src/data/defaults.ts`: length→m/ft, weight→kg/lb, temperature→C/F, volume→L/gal, area→m²/ft², speed→km\_h/mph, time→min/s, data-storage→GB/MB
- [ ] Wire `/:category` route in `App.tsx` to `CategoryPage`; verify all 8 slugs load the correct converter
- [ ] Add H1 to `CategoryPage` using registry category label (e.g. "Length Converter")
- [ ] Populate `<nav>` with links to all 8 category pages; verify active route is visually distinct
- [ ] Manually navigate to all 8 routes in `npm run dev`; confirm correct default units load and conversion works

**Acceptance gate:** All 8 routes render the converter with correct defaults, correct H1, and working nav.

---

### Day 6 — 2026-04-19 (Sat) — Integration + Definition of Done Sweep

**Stories:** #1, #2, #3, #4 (close-out)
**Tasks:**
- [ ] End-to-end smoke test: visit all 8 category pages, convert at least one value on each including temperature
- [ ] Verify unknown route (e.g. `/foo`) does not crash — add a fallback `*` route rendering a simple "Not Found" message
- [ ] Run full ESLint + Prettier pass across the entire `src/` directory; zero errors required
- [ ] Run `npm run build`; inspect `dist/` — confirm static output present and no build warnings
- [ ] Check TypeScript strict mode (`"strict": true` in `tsconfig.json`) — resolve any type errors surfaced
- [ ] Update task statuses 1.1–1.10 in this sprint log to Done; record any carry-over items as blockers

**Acceptance gate:** All 10 tasks marked Done; build is clean; all 8 routes pass smoke test.

---

### Day 7 — 2026-04-20 (Sun) — Buffer / Carry-Over

**Stories:** Any unfinished from Days 1–6
**Tasks:**
- [ ] Complete any tasks that slipped during the week (identified on Day 6)
- [ ] If fully caught up: add `<title>` tags per category page as a lightweight Sprint 2 head-start (no full SEO pipeline — just the title string)
- [ ] Push final branch to GitHub; confirm Cloudflare Pages preview build passes
- [ ] Write Sprint 1 retrospective note (1–3 sentences) at the bottom of this log: what slowed things down, what to carry into Sprint 2 planning

**Note:** Day 7 is intentional slack. Do not pull Sprint 2 work in unless Days 1–6 are fully green.

---

### Sprint 1 — Implementation Steps by Story

---

#### Story #1 — Project Scaffold (2 pts)

1. Bootstrap project with `npm create vite@latest unit-converter -- --template react-ts`; strip all starter boilerplate files
2. Install `react-router-dom` v7; wrap app in `<BrowserRouter>`; define `/:category` and `/:category/:pair` dynamic routes
3. Install ESLint with TypeScript and React plugins; install Prettier; add config files and an npm lint script
4. Verify `npm run dev` serves without errors and `npm run build` outputs clean `dist/`
5. Commit to `main` on GitHub; confirm Cloudflare Pages picks up the build

---

#### Story #2 — Unit Registry (2 pts)

1. Define TypeScript interfaces in `src/data/registry.ts`: `LinearUnit` (id, label, symbol, factor), `FormulaUnit` (id, label, symbol, toBase, fromBase), `Category` (id, label, units)
2. Populate all 8 categories with at least 5 units each using correct SI base units (meter, kilogram, second, liter, etc.)
3. Implement Temperature as `FormulaUnit` with explicit `toBase` (→ Celsius) and `fromBase` (← Celsius) arrow functions for F and K
4. Write `convert(value, fromId, toId, categoryId)` in `src/utils/convert.ts` — linear path: `value * (fromFactor / toFactor)`; formula path: `fromBase(toBase(value))`
5. Add 5 assertion-style unit tests; run with `npx vitest run` or inline `console.assert` — all must pass before story closes

---

#### Story #3 — Converter UI Component (3 pts)

1. Scaffold `src/components/Converter.tsx` with props interface; render two labeled `<input type="number">` fields and two `<select>` dropdowns
2. Implement controlled state: `valueA`, `valueB`, `fromUnit`, `toUnit`; populate selects from `registry[category].units`
3. Wire `onChangeA`: parse float, call `convert()`, set `valueB`; mirror for `onChangeB`; add `lastEdited` ref to prevent feedback loop
4. Add input sanitisation: empty input → set partner to `""`; `isNaN` result → set partner to `""`; valid result → `String(parseFloat(result.toPrecision(6)))`
5. Accept `defaultFrom` and `defaultTo` props; initialise state from them; changing the category prop resets both fields
6. Basic layout CSS: flex row for inputs, full-width on mobile, min touch height 44px on selects and inputs

---

#### Story #4 — Category Pages (3 pts)

1. Create `src/data/defaults.ts` exporting a `DEFAULT_PAIRS` map keyed by category slug with `{ from, to }` unit IDs
2. Build `src/pages/CategoryPage.tsx`: read `useParams().category`, look up registry entry and default pair, render `<h1>[Label] Converter</h1>` and `<Converter>`
3. Register route `<Route path="/:category" element={<CategoryPage />} />` in `App.tsx`; add a `<Route path="*" element={<NotFound />} />` fallback
4. Build `src/components/Nav.tsx` listing all 8 category links; mark current route active via `NavLink`; import into root layout
5. Manual verification pass: open each of the 8 slugs in browser, confirm correct H1, correct default units, working conversion, and nav highlights correct link

---

## Sprint 2 — 2026-04-21 to 2026-04-27

**Sprint Goal:**
Make the site indexable and monetizable — ship per-pair SEO landing pages, full metadata pipeline, analytics, and ad slots so the site is ready for production deploy and Google crawl.

**Story Points:** 25 pts — Stories: #5, #6, #7, #8, #9, #10, #11, #12

**Tasks:**

| # | Task | Story | Assigned To | Status |
|---|---|---|---|---|
| 2.1 | Generate all per-pair routes at build time from unit registry (`/[category]/[from]-to-[to]`) | #5 | Dev | To Do |
| 2.2 | Pre-populate converter on each pair page with correct from/to units; reverse pair pages also exist | #5 | Dev | To Do |
| 2.3 | Fallback from unknown pair slugs to parent category page — no 500 errors | #5 | Dev | To Do |
| 2.4 | Implement unique `<title>` and `<meta description>` generated from registry for every page | #6 | Dev | To Do |
| 2.5 | Add canonical tags and Open Graph tags (`og:title`, `og:description`, `og:url`, `og:type`) to all pages | #6 | Dev | To Do |
| 2.6 | Add JSON-LD structured data (`WebApplication` or `FAQPage`) on all per-pair pages | #6 | Dev | To Do |
| 2.7 | Generate `sitemap.xml` at build time listing all static routes; add `robots.txt` permitting full crawl | #6 | Dev | To Do |
| 2.8 | Place three AdSense ad slots (header, in-content, footer) with explicit reserved dimensions to prevent CLS | #7 | Dev | To Do |
| 2.9 | Load AdSense script async, lazy-load slots after converter is interactive, inject publisher ID via env var | #7 | Dev | To Do |
| 2.10 | Add GA4 `<script async>` in `<head>` with Measurement ID from env var; suppress in local dev | #8 | Dev | To Do |
| 2.11 | Fire `page_view` event on each client-side route navigation | #8 | Dev | To Do |
| 2.12 | Add Search Console ownership verification meta tag | #8 | Dev | To Do |
| 2.13 | Add copy-to-clipboard button per result field with "Copied!" feedback; Clipboard API + execCommand fallback | #9 | Dev | To Do |
| 2.14 | Update URL with `?value=` on input change via `replaceState`; pre-fill value on page load | #10 | Dev | To Do |
| 2.15 | Implement mobile-first responsive layout — no horizontal scroll at 320px+, 44px touch targets, 16px inputs | #11 | Dev | To Do |
| 2.16 | Test layout on iPhone SE (375px) and Pixel 5 (393px) via Chrome DevTools emulation | #11 | Dev | To Do |
| 2.17 | Audit and fix render-blocking resources — all scripts deferred/async, fonts use preconnect + `font-display: swap` | #12 | Dev | To Do |
| 2.18 | Run Lighthouse CI on mobile simulation: LCP < 1.5s, CLS < 0.05, INP < 100ms, Perf score >= 90 | #12 | Dev | To Do |
| 2.19 | Fix any CWV failures before deploy (ad slot dimensions, image sizing, script order) | #12 | Dev | To Do |

**Definition of Done — Sprint 2:**
- All per-pair pages are statically pre-rendered at build time from the registry
- Every page has unique title, description, canonical, OG tags, and JSON-LD
- `sitemap.xml` and `robots.txt` present in build output
- AdSense slots render as reserved-space placeholders; publisher ID from env var only
- GA4 fires `page_view` on every route; suppressed in local dev
- Search Console verification tag present
- Copy-to-clipboard works on mobile browsers
- Shareable `?value=` URLs pre-fill the converter on load
- No horizontal scroll at 320px; all touch targets >= 44px
- Lighthouse mobile: Performance >= 90, LCP < 1.5s, CLS < 0.05, INP < 100ms
- Site deployed to Cloudflare Pages and sitemap submitted to Search Console

**Progress Summary:**
- Completed: 0 tasks
- In Progress: 0 tasks
- Remaining: 19 tasks

**Blockers:**
- AdSense publisher ID required before task 2.9 can be fully wired — keep env var slot ready; confirm ID with site owner before deploy
- GA4 Measurement ID required before task 2.10 — same approach; confirm before deploy

---

## Sprint 3 — 2026-04-28 to 2026-05-04

**Sprint Goal:**
Complete the Could Have polish items — homepage directory and reference tables — to improve discoverability and dwell time for organic search visitors.

**Story Points:** 4 pts — Stories: #13, #14

**Prerequisite:** Sprint 3 only executes if Sprint 2 ships clean. If Sprint 2 tasks carry over, they take priority here and these stories are deferred.

**Tasks:**

| # | Task | Story | Assigned To | Status |
|---|---|---|---|---|
| 3.1 | Build homepage (`/`) with 8 category cards linking to category pages | #13 | Dev | To Do |
| 3.2 | Add 2-3 popular pair quick links per category card; H1 "Unit Converter"; unique title + meta description | #13 | Dev | To Do |
| 3.3 | Add statically rendered reference table (8-10 pre-calculated rows) below converter on all per-pair pages | #14 | Dev | To Do |
| 3.4 | Generate table rows from unit registry at build time — no per-page hardcoding; verify mobile readability | #14 | Dev | To Do |

**Definition of Done — Sprint 3:**
- Homepage at `/` statically renders with all 8 category cards and popular pair links
- Homepage has unique H1 "Unit Converter", unique title and meta description
- Reference table appears on every per-pair page, below converter, above footer ad
- Table values are pre-calculated at build time (static HTML, not client-side JS)
- Table is readable on mobile without horizontal scroll
- `sitemap.xml` updated to include homepage and any new routes
- Deployed to Cloudflare Pages

**Progress Summary:**
- Completed: 0 tasks
- In Progress: 0 tasks
- Remaining: 4 tasks

**Blockers:**
- None — depends on Sprint 2 completion only

---

## Velocity Reference

| Sprint | Stories | Points | Scope |
|---|---|---|---|
| Sprint 1 | #1, #2, #3, #4 | 10 pts | Foundation + Core UI |
| Sprint 2 | #5, #6, #7, #8, #9, #10, #11, #12 | 25 pts | SEO + Monetization + Polish |
| Sprint 3 | #13, #14 | 4 pts | Homepage + Reference Tables |
| **Total** | **14 stories** | **39 pts** | |

**Sprint 2 load note:** 25 pts is heavy for a solo developer. Tasks 2.1-2.12 are the hard dependency chain (SEO + analytics + ads) — the site cannot deploy without them. Tasks 2.13-2.19 (Should Have) can slip into Sprint 3 if time pressure hits. Priority order if cutting is needed: #5 > #6 > #8 > #7 > #11 > #12 > #9 > #10.
