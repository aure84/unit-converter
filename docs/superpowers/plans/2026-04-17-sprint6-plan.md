# convert-fast.com Sprint 6 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add pressure presets to bar-to-psi, fix the fuel economy gap page, add FAQPage schema to ingredient pages, and (conditionally) expand ingredients — all without touching unrelated code.

**Architecture:** All changes are additive or minimal modifications to existing JSX components and data files. No new routes needed for presets or schema — these extend existing pages. The fuel economy gap page uses the existing `PairPage` + `pairContent.js` pattern.

**Tech Stack:** React 18 (JSX), Vite, React Router v6, `src/data/units.js`, `src/data/pairContent.js`, `src/utils/ingredientDensity.js`, `src/pages/IngredientPage.jsx`

---

## File Structure (changes only)

```
src/
├── components/
│   └── PresetButtons.jsx          # NEW — reusable preset button row
├── pages/
│   └── PairPage.jsx               # MODIFY — render PresetButtons when presets exist
├── data/
│   ├── units.js                   # MODIFY — add presets array to bar unit
│   └── pairContent.js             # MODIFY — mpg-to-liter_per_100km content
├── utils/
│   └── ingredientDensity.js       # MODIFY (Task 4) — add milk, oats, cornstarch, rice flour
pages/
│   └── IngredientPage.jsx         # MODIFY (Task 4) — add 4 new ingredient entries
generate-sitemap.mjs               # VERIFY — new ingredient slugs appear in sitemap
```

---

### Task 1: PresetButtons Component

**Files:**
- Create: `src/components/PresetButtons.jsx`
- Test: `src/components/PresetButtons.test.jsx`

- [ ] **Step 1: Write failing test**

Create `src/components/PresetButtons.test.jsx`:
```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import PresetButtons from './PresetButtons'

describe('PresetButtons', () => {
  const presets = [
    { label: 'Car tire', value: 2.3 },
    { label: 'Bike tire', value: 6.0 },
  ]

  it('renders a button for each preset', () => {
    render(<PresetButtons presets={presets} onSelect={() => {}} />)
    expect(screen.getByText('Car tire')).toBeInTheDocument()
    expect(screen.getByText('Bike tire')).toBeInTheDocument()
  })

  it('calls onSelect with the correct value when clicked', () => {
    const onSelect = vi.fn()
    render(<PresetButtons presets={presets} onSelect={onSelect} />)
    fireEvent.click(screen.getByText('Car tire'))
    expect(onSelect).toHaveBeenCalledWith(2.3)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- PresetButtons
```
Expected: FAIL — "Cannot find module './PresetButtons'"

- [ ] **Step 3: Implement**

Create `src/components/PresetButtons.jsx`:
```jsx
/**
 * PresetButtons — renders a row of quick-fill preset buttons.
 *
 * Props:
 *   presets: Array<{ label: string, value: number }>
 *   onSelect: (value: number) => void
 */
export default function PresetButtons({ presets, onSelect }) {
  if (!presets || presets.length === 0) return null

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '12px 0' }}>
      <span style={{ fontSize: 13, color: '#6b7280', alignSelf: 'center' }}>Quick fill:</span>
      {presets.map(({ label, value }) => (
        <button
          key={label}
          onClick={() => onSelect(value)}
          style={{
            padding: '4px 12px',
            fontSize: 13,
            border: '1px solid #d1d5db',
            borderRadius: 20,
            background: '#f9fafb',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- PresetButtons
```
Expected: PASS — 2 tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/components/PresetButtons.jsx src/components/PresetButtons.test.jsx
git commit -m "feat: PresetButtons component"
```

---

### Task 2: Wire Presets into PairPage + units.js

**Files:**
- Modify: `src/data/units.js` — add `presets` to bar unit
- Modify: `src/pages/PairPage.jsx` — render PresetButtons when presets exist

- [ ] **Step 1: Add presets to bar unit in units.js**

In `src/data/units.js`, find the `bar` entry inside `pressure` and replace it:
```js
// BEFORE:
{ id: 'bar', label: 'Bar', symbol: 'bar', factor: 100_000 },

// AFTER:
{
  id: 'bar',
  label: 'Bar',
  symbol: 'bar',
  factor: 100_000,
  presets: [
    { label: 'Car tire (2.3 bar)', value: 2.3 },
    { label: 'Bike road (6.0 bar)', value: 6.0 },
    { label: 'Bike MTB (2.5 bar)', value: 2.5 },
    { label: 'Football (0.8 bar)', value: 0.8 },
    { label: 'Basketball (0.8 bar)', value: 0.8 },
  ],
},
```

- [ ] **Step 2: Read PairPage.jsx to find where the Converter is rendered**

```bash
grep -n "Converter\|fromUnit\|preset" "/Volumes/SLT/Claude Code/unit-converter/src/pages/PairPage.jsx"
```

- [ ] **Step 3: Import PresetButtons and pass presets to Converter area**

In `src/pages/PairPage.jsx`, add the import at the top:
```jsx
import PresetButtons from '../components/PresetButtons.jsx'
```

Find where `<Converter` is rendered. Directly above it, add:
```jsx
{fromUnit?.presets && (
  <PresetButtons
    presets={fromUnit.presets}
    onSelect={(val) => setFromValue(String(val))}
  />
)}
```

Where `fromUnit` is the unit object from the registry for the current `from` unit, and `setFromValue` is the state setter for the converter's input. Adjust variable names to match what PairPage.jsx actually uses.

- [ ] **Step 4: Verify manually**

```bash
npm run dev
```

Navigate to `http://localhost:5173/pressure/bar-to-psi`. Verify:
- 5 preset buttons appear below the input
- Clicking "Car tire (2.3 bar)" fills the input with 2.3 and shows ~33.4 psi
- No buttons appear on non-pressure pages (e.g. /length/meter-to-foot)

- [ ] **Step 5: Commit**

```bash
git add src/data/units.js src/pages/PairPage.jsx
git commit -m "feat: pressure presets on bar-to-psi page"
```

---

### Task 3: Fuel Economy Gap Page Content

**Files:**
- Modify: `src/data/pairContent.js` — add entry for `mpg_to_liter_per_100km`

- [ ] **Step 1: Check existing pairContent pattern**

```bash
grep -n "fuel_economy\|mpg\|liter_per" "/Volumes/SLT/Claude Code/unit-converter/src/data/pairContent.js" | head -10
```

- [ ] **Step 2: Add pairContent entry**

In `src/data/pairContent.js`, add the following entry using the same key pattern as existing entries (e.g. `mile_per_gallon_liter_per_100km` or whatever the existing reverse key is named — match the pattern exactly):

```js
mile_per_gallon_to_liter_per_100km: {
  intro: `
    <p>
      Miles per gallon (mpg) and liters per 100 kilometers (L/100km) are the two dominant fuel
      economy standards worldwide — mpg in the US and UK, L/100km across Europe, Asia, and
      most of the rest of the world. Unlike most unit conversions, these two are <strong>inversely
      related</strong>: better fuel economy means a <em>higher</em> mpg but a <em>lower</em> L/100km.
    </p>
    <p>
      The conversion formula is: <strong>L/100km = 235.215 ÷ mpg</strong>. So a car rated at
      30 mpg gets 235.215 ÷ 30 = 7.84 L/100km. A 50 mpg hybrid: 4.7 L/100km.
    </p>
    <p>
      Use this converter when comparing a US-spec vehicle listing with European fuel economy
      figures, or when reading international car reviews.
    </p>
  `,
  faq: [
    {
      q: 'What is 30 mpg in L/100km?',
      a: '30 mpg is approximately 7.84 L/100km. Formula: 235.215 ÷ 30 = 7.84.',
    },
    {
      q: 'What is 40 mpg in L/100km?',
      a: '40 mpg is approximately 5.88 L/100km. Formula: 235.215 ÷ 40 = 5.88.',
    },
    {
      q: 'Why are mpg and L/100km inversely related?',
      a: 'MPG measures distance per unit of fuel (more is better). L/100km measures fuel per unit of distance (less is better). Dividing a constant by one gives the other.',
    },
    {
      q: 'Is US mpg the same as UK mpg?',
      a: 'No. UK mpg uses the imperial gallon (4.546 L) vs the US gallon (3.785 L). UK mpg is about 20% higher than US mpg for the same vehicle. This converter uses US mpg.',
    },
  ],
},
```

- [ ] **Step 3: Verify the page**

```bash
npm run dev
```

Navigate to `http://localhost:5173/fuel-economy/mile_per_gallon-to-liter_per_100km` (use the actual slug format the app generates — check an existing fuel economy pair URL for the pattern).

Verify:
- Intro paragraph renders correctly
- FAQ section shows 4 questions
- Converter works: 30 mpg → 7.84 L/100km

- [ ] **Step 4: Regenerate sitemap**

```bash
node generate-sitemap.mjs
```

Verify the fuel economy mpg→L/100km URL appears in `public/sitemap.xml`.

- [ ] **Step 5: Commit**

```bash
git add src/data/pairContent.js public/sitemap.xml
git commit -m "feat: mpg to L/100km gap page content + sitemap"
```

---

### Task 4: FAQPage Schema on Ingredient Pages

**Files:**
- Modify: `src/pages/IngredientPage.jsx` — inject FAQPage JSON-LD per ingredient

- [ ] **Step 1: Check how SEOMeta works**

```bash
grep -n "SEOMeta\|jsonLd\|schema\|script" "/Volumes/SLT/Claude Code/unit-converter/src/components/SEOMeta.jsx"
```

- [ ] **Step 2: Check if SEOMeta already accepts JSON-LD prop**

If `SEOMeta` already has a `jsonLd` prop, use it. If not, add a `<script type="application/ld+json">` tag directly in `IngredientPage.jsx`.

- [ ] **Step 3: Add FAQPage schema to IngredientPage**

In `src/pages/IngredientPage.jsx`, find where the page renders (around the `return` statement). After the existing `<SEOMeta>` component, add:

```jsx
{ingredient && INGREDIENT_CONTENT[ingredient] && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: INGREDIENT_CONTENT[ingredient].faq.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }),
    }}
  />
)}
```

Where `INGREDIENT_CONTENT` is the ingredient data object (check the actual variable name in `IngredientPage.jsx`) and `ingredient` is the current ingredient key from params.

- [ ] **Step 4: Verify schema output**

```bash
npm run dev
```

Open `http://localhost:5173/cooking/flour-grams-to-cups`. Open DevTools → Elements → search for `application/ld+json`. Verify:
- One `<script type="application/ld+json">` present
- Contains `"@type": "FAQPage"`
- `mainEntity` array has 3-4 questions matching the flour FAQ

- [ ] **Step 5: Commit**

```bash
git add src/pages/IngredientPage.jsx
git commit -m "feat: FAQPage JSON-LD schema on ingredient pages"
```

---

### Task 5: Ingredient Expansion (Conditional — run only if GSC shows impressions on Sprint 5 pages)

**Files:**
- Modify: `src/utils/ingredientDensity.js` — add 4 new ingredients
- Modify: `src/pages/IngredientPage.jsx` — add content for 4 new ingredients

- [ ] **Step 1: Check GSC data**

Before running this task, verify in Google Search Console that at least one of the 8 Sprint 5 ingredient pages has organic impressions. If no impressions after 3 weeks, skip this task.

- [ ] **Step 2: Add densities**

In `src/utils/ingredientDensity.js`, add to `INGREDIENT_DENSITIES`:
```js
milk:          { gPerCup: 240,  label: 'Milk (whole)',     symbol: 'milk' },
oats:          { gPerCup: 90,   label: 'Rolled oats',      symbol: 'oats' },
cornstarch:    { gPerCup: 128,  label: 'Cornstarch',       symbol: 'cornstarch' },
rice_flour:    { gPerCup: 158,  label: 'Rice flour',       symbol: 'rice flour' },
```

- [ ] **Step 3: Add content in IngredientPage.jsx**

In `src/pages/IngredientPage.jsx`, add entries for `milk`, `oats`, `cornstarch`, `rice_flour` following the exact same structure as the existing `flour` entry:

```js
milk: {
  title: 'Milk Grams to Cups Converter',
  metaDesc: 'Convert milk grams to cups instantly. Whole milk: 240g = 1 cup. Free online milk converter.',
  slug: 'milk-grams-to-cups',
  intro: `<p>Whole milk has a density of approximately <strong>240 grams per US cup</strong>, very close to water (which is 237g/cup). This makes milk one of the easiest liquid ingredients to convert. For practical baking purposes, 1 cup of milk weighs 240 grams.</p>`,
  faq: [
    { q: 'How many grams is 1 cup of milk?', a: '1 cup of whole milk weighs approximately 240 grams.' },
    { q: 'How many cups is 500g of milk?', a: '500g of milk is approximately 2.08 cups (500 ÷ 240).' },
    { q: 'Does milk type affect the weight?', a: 'Slightly. Whole milk (240g/cup), 2% milk (244g/cup), and skim milk (245g/cup) are very close — use 240g for all practical purposes.' },
  ],
},
oats: {
  title: 'Oats Grams to Cups Converter',
  metaDesc: 'Convert oats grams to cups. Rolled oats: 90g = 1 cup. Free oatmeal converter for baking and meal prep.',
  slug: 'oats-grams-to-cups',
  intro: `<p>Rolled oats are light and fluffy, with a density of approximately <strong>90 grams per US cup</strong>. This is one of the most commonly misestimated baking ingredients — a cup looks large but weighs little. Quick oats are slightly denser (~95g/cup) due to finer processing.</p>`,
  faq: [
    { q: 'How many grams is 1 cup of oats?', a: '1 cup of rolled oats is approximately 90 grams.' },
    { q: 'How many cups is 100g of oats?', a: '100g of rolled oats is approximately 1.1 cups.' },
    { q: 'Are quick oats the same weight as rolled oats?', a: 'Not exactly. Quick oats weigh slightly more (~95g/cup) because they are cut finer and pack more densely.' },
  ],
},
cornstarch: {
  title: 'Cornstarch Grams to Cups Converter',
  metaDesc: 'Convert cornstarch grams to cups. 1 cup cornstarch = 128g. Free converter for baking and thickening.',
  slug: 'cornstarch-grams-to-cups',
  intro: `<p>Cornstarch (also called cornflour in the UK) has a density of approximately <strong>128 grams per US cup</strong>. It is a fine powder used as a thickening agent. Like flour, it compresses easily — spoon it gently into the measuring cup for consistent results.</p>`,
  faq: [
    { q: 'How many grams is 1 cup of cornstarch?', a: '1 cup of cornstarch is approximately 128 grams.' },
    { q: 'How many cups is 30g of cornstarch?', a: '30g of cornstarch is approximately 0.23 cups, or about 3.5 tablespoons.' },
    { q: 'Is cornstarch the same as cornflour?', a: 'In the US and Australia, yes. In the UK, cornflour refers to the same fine white starch. The density is the same: 128g/cup.' },
  ],
},
rice_flour: {
  title: 'Rice Flour Grams to Cups Converter',
  metaDesc: 'Convert rice flour grams to cups. 1 cup rice flour = 158g. Essential for gluten-free baking.',
  slug: 'rice-flour-grams-to-cups',
  intro: `<p>White rice flour has a density of approximately <strong>158 grams per US cup</strong>. It is denser than all-purpose flour (125g/cup) and almond flour (96g/cup). Rice flour is a staple in gluten-free baking and East Asian cooking. Brown rice flour is slightly heavier (~160g/cup).</p>`,
  faq: [
    { q: 'How many grams is 1 cup of rice flour?', a: '1 cup of white rice flour is approximately 158 grams.' },
    { q: 'How many cups is 200g of rice flour?', a: '200g of rice flour is approximately 1.27 cups.' },
    { q: 'Is rice flour heavier than all-purpose flour?', a: 'Yes. Rice flour (158g/cup) is about 26% heavier than all-purpose flour (125g/cup) by volume.' },
  ],
},
```

- [ ] **Step 4: Regenerate sitemap**

```bash
node generate-sitemap.mjs
```

Verify 4 new ingredient slugs appear in `public/sitemap.xml`.

- [ ] **Step 5: Verify pages load**

```bash
npm run dev
```

Visit `/cooking/milk-grams-to-cups`, `/cooking/oats-grams-to-cups`, `/cooking/cornstarch-grams-to-cups`, `/cooking/rice-flour-grams-to-cups`. Each should show the converter, reference table, intro, and FAQ.

- [ ] **Step 6: Commit**

```bash
git add src/utils/ingredientDensity.js src/pages/IngredientPage.jsx public/sitemap.xml
git commit -m "feat: ingredient expansion — milk, oats, cornstarch, rice flour"
```

---

### Task 6: Final Build + Deploy

- [ ] **Step 1: Run full build**

```bash
npm run build
```
Expected: No errors, `dist/` generated cleanly.

- [ ] **Step 2: Smoke test**

```bash
npm run preview
```

Verify:
- `/pressure/bar-to-psi` — 5 preset buttons visible, clicking fills converter
- `/fuel-economy/mile_per_gallon-to-liter_per_100km` — intro + FAQ rendered
- `/cooking/flour-grams-to-cups` — FAQPage JSON-LD in page source
- (If Task 5 ran) 4 new ingredient pages load correctly

- [ ] **Step 3: Push to GitHub**

```bash
git push origin main
```

Expected: Cloudflare Pages auto-deploys. Verify live on `https://convert-fast.com`.

---

## Self-Review

**Spec coverage:**
- [x] Pressure presets on bar-to-psi — Tasks 1, 2
- [x] PresetButtons reusable (not hardcoded to pressure only) — Task 1
- [x] Fuel economy gap page content — Task 3
- [x] FAQPage JSON-LD on ingredient pages — Task 4
- [x] Ingredient expansion (conditional) — Task 5
- [x] sitemap.xml updated — Tasks 3, 5
- [x] Final build + deploy — Task 6
