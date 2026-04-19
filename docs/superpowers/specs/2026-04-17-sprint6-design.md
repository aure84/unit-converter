# convert-fast.com Sprint 6 — Design Spec

**Date:** 2026-04-17  
**Status:** Approved  
**Project path:** `/Volumes/SLT/Claude Code/unit-converter/`  
**Domain:** convert-fast.com (live, Cloudflare Pages)

---

## Overview

Sprint 6 focuses on SEO and UX improvements to existing high-traffic pages based on Sprint 5 data. No new categories — optimize what's live. Two HIGH-priority items, two MEDIUM items conditional on GSC data.

---

## Sprint 6 Scope

### HIGH — Pressure Presets (bar-to-psi)

**Page:** `/pressure/bar-to-psi`  
**What:** Add preset buttons for common real-world pressure values.

| Preset | Value | Context |
|---|---|---|
| Car tire | 2.3 bar | Standard passenger car |
| Bike tire (road) | 6.0 bar | Road bicycle |
| Bike tire (MTB) | 2.5 bar | Mountain bike |
| Football | 0.8 bar | FIFA standard |
| Basketball | 0.8 bar | NBA standard |

Clicking a preset fills the input and immediately shows the result. Same behavior as typing a value.

---

### HIGH — Fuel Economy Gap Page

**Page:** `/fuel-economy/mpg-to-liter_per_100km`  
**What:** Dedicated landing page for mpg → L/100km direction. Currently missing or low-visibility — inverse direction `/fuel-economy/liter_per_100km-to-mpg` already has better indexing.

Differences from existing pair page:
- H1: "MPG to L/100km Converter"
- Meta description targeting "mpg to l/100km" searches
- Reference table: common mpg values (15, 20, 25, 30, 35, 40, 50) → L/100km equivalents
- Note: fuel economy is inverse (higher mpg = lower L/100km)

---

### MEDIUM — Recipe Schema Markup

**Pages:** All ingredient pages (`/cooking/{ingredient}-grams-to-cups`)  
**What:** Add `FAQPage` JSON-LD structured data to cooking/ingredient pages.

Each ingredient page gets a `FAQPage` schema with 3 questions:
1. "How many grams is 1 cup of {ingredient}?"
2. "How do I convert {ingredient} grams to cups?"
3. "What is the density of {ingredient}?"

Expected outcome: rich snippet eligibility → higher CTR from Google.

---

### MEDIUM — Ingredient Page Expansion

**Condition:** Only if Sprint 5 ingredient pages show organic impressions in GSC after 2–3 weeks.  
**New ingredients:** milk, oats, cornstarch, rice flour  
**Same format** as Sprint 5 ingredients.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 (JSX), Vite |
| Routing | React Router v6 |
| Data | `src/data/units.js` (unit registry) |
| Pages | `src/pages/` — JSX components |
| SEO | `src/components/SEOMeta.jsx` |
| Sitemap | `generate-sitemap.mjs` (build-time) |
| Hosting | Cloudflare Pages (auto-deploy from GitHub) |

---

## File Structure (changes only)

```
src/
├── components/
│   └── PresetButtons.jsx        # NEW — reusable preset button row
├── pages/
│   └── PairPage.jsx             # MODIFY — accept presets prop
├── data/
│   ├── units.js                 # MODIFY — add presets config to pressure
│   └── pairContent.js           # MODIFY — add fuel economy gap + ingredient FAQs
generate-sitemap.mjs             # MODIFY — ensure new page is indexed
```

---

## Out of Scope

- New unit categories
- Multilingual pages
- User-defined custom density input
- Images / illustrations
- Currency converter improvements
