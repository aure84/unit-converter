# Decision Log

**Purpose:** Permanent record of significant project and studio decisions. Every go/no-go, pivot, or major resource commitment gets an entry here.

---

## Format Guide

Each entry uses the following structure:

```
## [DEC-###] Title
**Date:** YYYY-MM-DD
**Made By:** [Person or Agent]
**Status:** Accepted | Rejected | Superseded

### Decision Summary
One or two sentences describing what was decided.

### Priority
[Critical / High / Medium / Low] — brief rationale.

### MVP Scope
What is explicitly IN scope for the first version, and what is explicitly OUT.

### Next Steps
- Actionable items with owners and due dates.

### Scoring Table
| Criterion | Weight | Score (1-5) | Weighted |
|---|---|---|---|
| Market Size | 25% | | |
| Differentiation | 20% | | |
| Build Speed | 20% | | |
| Revenue Potential | 20% | | |
| Founder Fit | 15% | | |
| **Total** | 100% | | **/5.00** |
```

---

## Log

---

## [DEC-001] Studio Formation and Initial Operating Model
**Date:** 2026-04-13
**Made By:** CEO Agent
**Status:** Accepted

### Decision Summary
Establish the AI startup studio with a project-based portfolio model. All new ideas will be evaluated using a structured scoring rubric before any build resources are committed.

### Priority
Critical — sets the operating foundation for all subsequent decisions.

### MVP Scope
**In scope:**
- Decision logging process (this file)
- Project tracking (project-overview.md)
- Idea intake and scoring rubric

**Out of scope (for now):**
- Formal investor reporting
- External team hiring process
- Legal entity structure decisions

### Next Steps
- [ ] Define first batch of project ideas to evaluate — Owner: CEO Agent — Due: 2026-04-20
- [ ] Set concrete budget and runway figures in project-overview.md — Owner: CEO Agent — Due: 2026-04-20
- [ ] Establish weekly review cadence for active projects — Owner: CEO Agent — Due: 2026-04-20

### Scoring Table
| Criterion | Weight | Score (1-5) | Weighted |
|---|---|---|---|
| Strategic Necessity | 25% | 5 | 1.25 |
| Differentiation | 20% | 4 | 0.80 |
| Build Speed | 20% | 5 | 1.00 |
| Revenue Potential | 20% | 3 | 0.60 |
| Founder Fit | 15% | 5 | 0.75 |
| **Total** | 100% | | **4.40/5.00** |

---

## [DEC-002] Unit Converter — MVP Scope Approval
**Date:** 2026-04-14
**Made By:** CEO Agent
**Status:** Accepted

### Decision Summary
Approve build of a SEO-first Unit Converter web app on React 19 + Vite, monetized via Google Ads. MVP ships a tight set of high-traffic conversion categories with per-pair landing pages to capture long-tail organic search.

### Priority
High — low complexity, fast time-to-market, proven search demand, and a clean ads monetization path.

### MVP Scope
**In scope:**
- React 19 + Vite project scaffold with file-based routing
- Core categories: Length, Weight/Mass, Temperature, Volume, Area, Speed, Time, Data Storage
- Instant bidirectional conversion UI (no submit button)
- Per-pair SEO landing pages (e.g. /length/meters-to-feet) with static pre-rendering
- Sitemap.xml, robots.txt, canonical tags, Open Graph, JSON-LD schema
- Core Web Vitals optimized (LCP < 1.5s, CLS ~0)
- Google Ads slots (header, in-content, footer) with lazy loading
- GA4 + Search Console integration
- Mobile-first responsive layout
- Copy-to-clipboard and shareable URLs with query params

**Out of scope (v1):**
- User accounts, history, favorites
- Currency/crypto conversion (live API = cost + maintenance)
- i18n / multi-language
- PWA / offline mode
- Custom unit builder
- Blog/CMS

### Next Steps
1. Scaffold Vite + React 19 project at /Volumes/SLT/Claude Code/unit-converter/ — Owner: Eng — Due: 2026-04-15
2. Finalize conversion data model and unit registry (JSON source of truth) — Owner: Eng — Due: 2026-04-16
3. Build converter component + routing for 8 categories — Owner: Eng — Due: 2026-04-20
4. Implement SSG for per-pair pages + SEO metadata pipeline — Owner: Eng — Due: 2026-04-22
5. Integrate Google AdSense placeholders + GA4 — Owner: Eng — Due: 2026-04-23
6. Lighthouse/CWV pass, deploy to Vercel/Cloudflare Pages, submit sitemap — Owner: Eng — Due: 2026-04-25
7. Define kill criteria: < 5k organic sessions/month by day 90 — Owner: CEO — Due: 2026-04-15

### Scoring Table
| Criterion | Weight | Score (1-5) | Weighted |
|---|---|---|---|
| ROI Potential | 20% | 4 | 0.80 |
| Time to Market | 20% | 5 | 1.00 |
| Complexity (inverse) | 20% | 5 | 1.00 |
| Scalability | 20% | 5 | 1.00 |
| Monetization Potential | 20% | 3 | 0.60 |
| **Total (raw 1-5 sum)** | — | **22/25** | **4.40/5.00** |

Aggregate 22/25 -> **High** priority.

---

## [DEC-003] Hosting és Domain — Cloudflare
**Date:** 2026-04-14
**Made By:** CEO / User
**Status:** Accepted

### Decision Summary
A projekt hostingját Cloudflare Pages biztosítja (ingyenes), a domaint Cloudflare Registrar-on keresztül vásároljuk (~$9.15/év .com). Minden infrastruktúra egy helyen kezelve.

### Priority
High — az egyetlen fix költség a domain, minden más ingyenes.

### Scope
**In scope:**
- Cloudflare Pages — hosting és automatikus deploy (GitHub integráció)
- Cloudflare Registrar — .com domain vásárlás (~$9.15/év)
- Cloudflare DNS — automatikus SSL, CDN, DDoS védelem
- Custom .com domain (Google AdSense követelmény)

**Out of scope:**
- Vercel (kiváltva Cloudflare Pages-szel)
- Fizetős hosting megoldások

### Next Steps
1. ~~.com domain név kiválasztása és elérhetőség ellenőrzése~~ — **DONE** — `convert-fast.com`
2. ~~Domain regisztrálása Cloudflare Registrar-on~~ — **DONE** — $10.46/év
3. Cloudflare Pages projekt létrehozása, GitHub repo összekapcsolása — Owner: Eng — Due: 2026-04-15
