# Value-Specific Landing Pages — Design Spec
Date: 2026-05-05
Project: convert-fast.com (unit-converter)
Status: Approved

## Problem

GSC data (7-day window, 2026-04-26–05-02) shows 157 queries with positions 4–12 but 0 clicks. All top queries are value-specific: "3300 lbs to kg", "5.81 inch to cm", "3.05 km to miles". Google displays a calculator widget in SERP for generic converter queries, absorbing clicks before users reach the site. Value-specific URLs bypass this widget. AdSense rejected the site for "low value content" — value-specific pages with result + FAQ directly address this.

## Goal

Generate SEO-indexable, content-rich landing pages for value-specific conversion queries (e.g., `/weight/3300-lbs-to-kg`) that:
- Rank for long-tail value queries
- Earn clicks by providing a specific answer Google can't widget-away
- Satisfy AdSense "original content" requirement via value-specific FAQ

## URL Structure

```
/weight/3300-lbs-to-kg
/length/3.05-km-to-miles
/temperature/-10-celsius-to-fahrenheit
```

Format: `/:category/:value-:from-to-:to`

All existing pair URLs (`/weight/lbs-to-kg`) remain unchanged. No new routes added to `App.jsx` — the existing `/:category/:pair` route handles both.

## Architecture

### 1. `parsePair` extension — `src/pages/PairPage.jsx`

Extend the existing `parsePair(pair)` function to detect an optional leading numeric value.

**Detection regex:** `/^(-?[\d.]+)-(.+-to-.+)$/` (anchored — ensures the entire slug matches, not a suffix)

Parsing examples:
```
"3300-lbs-to-kg"         → { value: 3300,  from: 'lbs',       to: 'kg'         }
"3.05-km-to-miles"       → { value: 3.05,  from: 'km',        to: 'miles'      }
"-10-celsius-to-fahrenheit" → { value: -10, from: 'celsius',  to: 'fahrenheit' }
"lbs-to-kg"              → { value: null,  from: 'lbs',       to: 'kg'         }
```

If `value` is `null`, PairPage behaves exactly as today — no regression.

Invalid inputs (unknown units, unparseable numbers) fall back to `value: null`.

### 2. `ValueResult` component — `src/components/ValueResult.jsx`

Rendered at the top of PairPage when `value !== null`, above the converter.

**Layout:**
```
[H1] 3,300 lbs = 1,496.85 kg
[subtitle] Use the converter below to try other values.
```

- H1 contains both the input value and computed result — surfaces in Google SERP snippet
- Result computed via existing `convert(value, fromUnitId, toUnitId, category)` util
- Converter rendered below, pre-filled via existing `defaultValue` prop
- Formats numbers with `toLocaleString('en-US', { maximumFractionDigits: 6 })`

### 3. Value-specific FAQ — `src/pages/PairPage.jsx`

When `value !== null`, inject 2–3 generated FAQ items above the existing pair FAQ.

**Q1 (always):**
> Q: What is {value} {fromLabel} in {toLabel}?
> A: {value} {fromLabel} equals {result} {toLabel}. To convert, multiply by {factor}.

**Q2 (always):**
> Q: How many {toLabel} is {value} {fromLabel}?
> A: {value} {fromUnit} = {result} {toUnit}.

**Q3 (category-specific context, optional):**

| Category    | Template |
|-------------|----------|
| weight      | "Is {value} lbs heavy?" → "{value} lbs ({result} kg) is roughly the weight of [reference]." |
| length      | "How far is {value} {fromUnit}?" → "{value} {fromUnit} ({result} {toUnit}) is about [reference]." |
| temperature | "Is {value}°F hot or cold?" → contextual answer relative to freezing (32°F), body temp (98.6°F), boiling (212°F) |
| others      | Q3 omitted |

Context references (weight: car/horse/elephant thresholds; length: football field/floor height; temperature: fixed landmark values) are defined as a static lookup table in PairPage.

All generated FAQ items are included in the existing **FAQPage JSON-LD** block.

### 4. SEO meta — `src/components/SEOMeta.jsx`

When `value !== null`, PairPage passes value-specific title and description:

```
title:       "3,300 lbs to kg — 1,496.85 Kilograms"
description: "3,300 pounds equals 1,496.85 kilograms. Free converter for any value."
canonical:   "https://convert-fast.com/weight/3300-lbs-to-kg"
```

Generic pair meta unchanged when `value` is null.

### 5. Sitemap — `generate-sitemap.mjs`

A new `VALUE_PAGES` array drives value-specific URL generation. Values are chosen from GSC top queries + round numbers.

Initial scope (~500–800 URLs across 6 pairs):

| Pair | Values |
|------|--------|
| lbs → kg | 50, 100, 150 … 5000 (step 50) + GSC hits |
| kg → lbs | 50, 100 … 200 + GSC hits |
| km → miles | 1, 2 … 100 + GSC hits |
| inch → cm | 1, 2 … 72 + GSC hits |
| cm → inch | 5, 10 … 200 + GSC hits |
| fahrenheit → celsius | -40, -20, 0, 32, 50, 98.6, 100, 212 + GSC hits |

All URLs use `<priority>0.6</priority>` (below category pages at 0.8, above blog at 0.5).

The router handles any value not in the sitemap — unlisted URLs are still fully functional.

## Data Flow

```
URL: /weight/3300-lbs-to-kg
  → React Router matches /:category/:pair
  → PairPage reads useParams()
  → parsePair("3300-lbs-to-kg") → { value: 3300, from: 'lbs', to: 'kg' }
  → convert(3300, 'lbs', 'kg', 'weight') → 1496.85
  → ValueResult renders H1 with result
  → Converter renders pre-filled with 3300
  → Value FAQ renders 3 Q&A items (generated)
  → Existing pair FAQ renders below
  → FAQPage JSON-LD includes all FAQ items
  → SEOMeta renders value-specific title/description
```

## Error Handling

- Unknown unit in value URL (e.g., `/weight/3300-foo-to-kg`) → `parsePair` returns `{ value: null, from: 'foo', to: 'kg' }` → PairPage renders 404 state as today
- `convert()` returns `null` for incompatible pairs → ValueResult shows "—", no crash
- Negative temperature values in URL (e.g., `-10-celsius-to-f`) → correctly parsed as `value: -10`

## Files Changed

| File | Change |
|------|--------|
| `src/pages/PairPage.jsx` | Extend `parsePair`, add value FAQ generation, pass value to SEOMeta |
| `src/components/ValueResult.jsx` | New component |
| `src/components/SEOMeta.jsx` | Add optional `valueTitle` and `valueDescription` props; fall back to existing props when absent |
| `generate-sitemap.mjs` | Add `VALUE_PAGES` array and URL generation loop |

## Testing

- Unit test `parsePair` with value prefix, negative, decimal, and generic inputs
- Playwright: navigate to `/weight/3300-lbs-to-kg` → assert H1 contains "1,496.85", converter pre-filled with 3300, FAQ has ≥2 items, title tag correct
- Playwright: navigate to `/weight/lbs-to-kg` → assert no ValueResult rendered (regression check)
- Validate FAQPage JSON-LD includes generated Q&A via schema.org validator
