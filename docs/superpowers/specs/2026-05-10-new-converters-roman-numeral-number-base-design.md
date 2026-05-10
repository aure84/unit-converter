# Design: Roman Numeral + Number Base Converters

Date: 2026-05-10
Status: Approved

## Overview

Two new standalone converter categories for convert-fast.com:
1. **Roman Numeral Converter** — `/roman-numerals`
2. **Number Base Converter** — `/number-base`

Both follow the CurrencyPage pattern: standalone Page component + dedicated converter component. Routes added to `App.jsx`. Cards added to `HomePage.jsx`.

---

## 1. Roman Numeral Converter

### Route
`/roman-numerals`

### Purpose
Bidirectional conversion between decimal integers (1–3999) and Roman numerals. Two live-updating fields — edit either to update the other instantly.

### UI
- Two input fields side by side:
  - **Decimal** (number input, 1–3999)
  - **Roman** (text input, uppercase, e.g. MCMXCIX)
- Editing Decimal → Roman updates live
- Editing Roman → Decimal updates live
- Input validation:
  - Decimal: integer 1–3999 only (show error outside range)
  - Roman: valid Roman numeral only (show "Invalid Roman numeral" for bad input)
- Quick reference table below converter: I=1, V=5, X=10, L=50, C=100, D=500, M=1000
- Common examples table: 2026 → MMXXVI, 1999 → MCMXCIX, 42 → XLII, etc.

### Logic (`src/components/RomanNumeralConverter.jsx`)

```
const ROMAN_MAP = [
  [1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],
  [100,'C'],[90,'XC'],[50,'L'],[40,'XL'],
  [10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']
]

toRoman(n): iterate map, subtract and append symbol
fromRoman(s): validate with regex, iterate and sum
```

Roman validation regex: `/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i`

### Files
```
src/components/RomanNumeralConverter.jsx  — converter logic + UI
src/pages/RomanNumeralPage.jsx           — full page (SEOMeta, h1, converter, reference table, FAQ)
```

### SEO
- Title: `Roman Numeral Converter — Decimal to Roman & Back`
- Meta: `Convert any number 1–3999 to Roman numerals instantly. Also converts Roman numerals back to decimal. Free, no sign-up.` (≤160 chars)
- H1: `Roman Numeral Converter`
- Canonical: `https://convert-fast.com/roman-numerals`
- FAQ: "What is the Roman numeral for 2026?", "What is the largest Roman numeral?", "How do you write 1999 in Roman numerals?"

### content.js entry
Add `roman_numerals` key to `categoryContent` with intro, examples, faq arrays for the CategoryContent component — OR inline the SEO content directly in RomanNumeralPage.jsx (preferred since the page has a custom layout).

### Internal links
**From this page → existing:**
- Number Base Converter (`/number-base`) — "other number converters"
- Length Converter (`/length`) — homepage cross-link

**From existing pages → this page:**
- `HomePage.jsx` grid card — add Roman Numeral tile
- `App.jsx` — add route
- Blog post `columbus-unit-error` relatedLinks → add Roman Numeral (historical/numbers angle)
- Blog post `us-metric-history` relatedLinks → add Roman Numeral

---

## 2. Number Base Converter

### Route
`/number-base`

### Purpose
Four-way live converter: Decimal ↔ Binary ↔ Hexadecimal ↔ Octal. Editing any field updates all others instantly.

### UI
- Four input fields in a grid (2×2 on mobile, 4×1 on desktop):
  - **Decimal** (base 10) — digits 0–9
  - **Binary** (base 2) — digits 0–1
  - **Hexadecimal** (base 16) — digits 0–9, A–F (display uppercase)
  - **Octal** (base 8) — digits 0–7
- Each field labeled clearly with its base name and base number (e.g. "Binary (Base 2)")
- Editing any field → parse → convert to integer → fill all other fields
- Validation per field: reject characters not valid for that base
- Range: 0 to 4,294,967,295 (2³² − 1, unsigned 32-bit max)
- Show error if value exceeds 32-bit range
- Quick reference table: 0–15 in all four bases (covers all single hex digits)

### Logic (`src/components/NumberBaseConverter.jsx`)

State: `{ activeField, decimalValue }` — always store canonical decimal internally, derive display values.

```
parseInput(value, base): parseInt(value, base) → NaN if invalid
formatOutput(decimal, base): decimal.toString(base).toUpperCase()
```

On field change:
1. Parse input in that base → get decimal integer
2. If valid and in range: update decimalValue state → all fields re-derive their display value
3. If invalid: show field-level error, don't update other fields

### Files
```
src/components/NumberBaseConverter.jsx  — converter logic + UI
src/pages/NumberBasePage.jsx           — full page (SEOMeta, h1, converter, reference table, FAQ)
```

### SEO
- Title: `Number Base Converter — Decimal, Binary, Hex, Octal`
- Meta: `Convert numbers between decimal, binary, hexadecimal, and octal instantly. Free online base converter — no sign-up required.` (≤160 chars)
- H1: `Number Base Converter`
- Canonical: `https://convert-fast.com/number-base`
- FAQ: "How do you convert decimal to binary?", "What is hexadecimal used for?", "How do you convert binary to octal?"

### Internal links
**From this page → existing:**
- Roman Numeral Converter (`/roman-numerals`) — "other number tools"
- Data Storage Converter (`/data-storage`) — "binary and data"

**From existing pages → this page:**
- `HomePage.jsx` grid — add Number Base tile
- `App.jsx` — add route
- Blog post `data-storage-units` relatedLinks → add Number Base
- Blog post `us-metric-history` relatedLinks → add Number Base (counting systems angle)

---

## Implementation Checklist

### unit-converter

- [ ] `src/components/RomanNumeralConverter.jsx`
- [ ] `src/pages/RomanNumeralPage.jsx`
- [ ] `src/components/NumberBaseConverter.jsx`
- [ ] `src/pages/NumberBasePage.jsx`
- [ ] `src/App.jsx` — add 2 routes + imports
- [ ] `src/pages/HomePage.jsx` — add 2 grid cards
- [ ] Internal links: outgoing (from new pages) + incoming (existing blog posts)
- [ ] Syntax check
- [ ] Commit + push
