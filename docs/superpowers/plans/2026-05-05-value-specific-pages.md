# Value-Specific Landing Pages — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add value-specific landing pages (e.g. `/weight/3300-pound-to-kilogram`) that display a computed result in the H1, pre-fill the converter, and render a value-specific FAQ — targeting long-tail GSC queries with 0-click problem.

**Architecture:** Extend `parsePair()` to detect an optional numeric prefix in the URL slug. When a value is present, PairPage renders a `ValueResult` component (H1 with result) instead of the generic heading, injects 2–3 generated FAQ items above the existing pair FAQ, and passes value-specific title/description to SEOMeta. All routing stays unchanged — existing `/weight/lbs-to-kg` URLs are unaffected. The sitemap gains ~500–800 value-specific URLs covering top GSC pairs.

**Tech Stack:** React 19 + Vite SPA + React Router v7, Playwright E2E tests, `generate-sitemap.mjs` (Node ESM)

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `src/pages/PairPage.jsx` | Modify | Extend `parsePair`, compute `valueResult`, inject value FAQ, pass value meta to SEOMeta, pass `initialValue` to Converter |
| `src/components/ValueResult.jsx` | Create | H1 with formatted value + result, subtitle |
| `generate-sitemap.mjs` | Modify | Add `VALUE_PAGES` array and value-specific URL generation |
| `tests/converter.spec.ts` | Modify | Add Playwright tests for value-specific URLs |

SEOMeta.jsx does **not** need changes — PairPage passes computed `title`/`description` directly.

---

## Dev Server

All Playwright tests require the dev server running:
```bash
cd "/Volumes/SLT/Claude Code/unit-converter" && npm run dev
```

Run tests with:
```bash
npx playwright test tests/converter.spec.ts --project=chromium
```

---

## Task 1: Extend `parsePair` to detect value prefix

**Files:**
- Modify: `src/pages/PairPage.jsx` — `parsePair` function
- Modify: `tests/converter.spec.ts` — add value-page tests

### Steps

- [ ] **Step 1.1: Write failing Playwright test**

Add to the end of `tests/converter.spec.ts`:

```typescript
// ── Value-specific pages ─────────────────────────────────────────────────────

test('value page: /weight/3300-pound-to-kilogram does not show "Converter Not Found"', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  await expect(page.getByText('Converter Not Found')).not.toBeVisible();
});
```

- [ ] **Step 1.2: Run test — confirm it FAILS**

```bash
npx playwright test tests/converter.spec.ts --project=chromium -g "does not show"
```

Expected: FAIL — page currently shows "Converter Not Found" because `parsePair("3300-pound-to-kilogram")` gives `from: "3300_pound"` which is not a registered unit.

- [ ] **Step 1.3: Extend `parsePair` in `src/pages/PairPage.jsx`**

Replace the existing `parsePair` function (lines 35–47) with:

```javascript
function parsePair(pair) {
  if (!pair) return { value: null, from: undefined, to: undefined }

  const normalise = (s) => s.toLowerCase().replace(/[-\s]+/g, '_')

  // Detect optional numeric prefix: "3300-pound-to-kilogram" or "-10-celsius-to-fahrenheit"
  let value = null
  let slug = pair
  const valueMatch = pair.match(/^(-?[\d.]+)-(.+)$/)
  if (valueMatch) {
    const candidate = parseFloat(valueMatch[1])
    const remainder = valueMatch[2]
    if (!isNaN(candidate) && /^.+-to-.+$/.test(remainder)) {
      value = candidate
      slug = remainder
    }
  }

  const match = slug.match(/^(.+?)-to-(.+)$/i)
  if (!match) return { value, from: slug, to: undefined }

  return {
    value,
    from: normalise(match[1]),
    to: normalise(match[2]),
  }
}
```

- [ ] **Step 1.4: Update destructure in `PairPage` component body**

Find this line at the top of the `PairPage()` function:

```javascript
  const { from, to } = parsePair(pair)
```

Replace with:

```javascript
  const { value, from, to } = parsePair(pair)
```

- [ ] **Step 1.5: Run test — confirm it PASSES**

```bash
npx playwright test tests/converter.spec.ts --project=chromium -g "does not show"
```

Expected: PASS

- [ ] **Step 1.6: Run full test suite — no regressions**

```bash
npx playwright test tests/converter.spec.ts --project=chromium
```

Expected: all existing tests still pass.

- [ ] **Step 1.7: Commit**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter"
git add src/pages/PairPage.jsx tests/converter.spec.ts
git commit -m "feat: extend parsePair to detect numeric value prefix in URL slug"
```

---

## Task 2: ValueResult component + PairPage integration

**Files:**
- Create: `src/components/ValueResult.jsx`
- Modify: `src/pages/PairPage.jsx` — compute `valueResult`, render `ValueResult`, pre-fill Converter

### Steps

- [ ] **Step 2.1: Write failing Playwright test**

Add to `tests/converter.spec.ts`:

```typescript
test('value page: H1 shows computed result for 3300 pound to kilogram', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  const h1 = page.getByRole('heading', { level: 1 });
  await expect(h1).toContainText('3,300');
  await expect(h1).toContainText('1,496');
});

test('value page: converter is pre-filled with the URL value', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  const inputs = page.locator('input[type="number"]');
  const fromVal = await inputs.first().inputValue();
  expect(parseFloat(fromVal)).toBeCloseTo(3300, 0);
});

test('value page: generic pair page H1 unchanged (no regression)', async ({ page }) => {
  await page.goto(`${BASE}/weight/pound-to-kilogram`);
  const h1 = page.getByRole('heading', { level: 1 });
  await expect(h1).toContainText('Pound to Kilogram Converter');
});
```

- [ ] **Step 2.2: Run tests — confirm they FAIL**

```bash
npx playwright test tests/converter.spec.ts --project=chromium -g "value page: H1|pre-filled|unchanged"
```

Expected: 3 FAILs — ValueResult doesn't exist yet.

- [ ] **Step 2.3: Create `src/components/ValueResult.jsx`**

```jsx
import { convert } from '../utils/convert.js'

function fmtNum(n) {
  return parseFloat(n.toPrecision(6)).toLocaleString('en-US')
}

function ValueResult({ value, from, to, fromSymbol, toSymbol, category }) {
  let result
  try {
    result = convert(value, from, to, category)
  } catch {
    return null
  }
  if (result == null || !isFinite(result)) return null

  return (
    <div className="value-result">
      <h1>
        {fmtNum(value)} {fromSymbol} = {fmtNum(result)} {toSymbol}
      </h1>
      <p>Use the converter below to try other values.</p>
    </div>
  )
}

export default ValueResult
```

- [ ] **Step 2.4: Add `valueResult` computation block to PairPage**

In `src/pages/PairPage.jsx`, add this import at the top:

```javascript
import ValueResult from '../components/ValueResult.jsx'
import { convert } from '../utils/convert.js'
```

Then, inside the `PairPage()` function body, after the early-return guard for unknown units, add:

```javascript
  // Compute value-specific result (null if no value or conversion fails)
  let valueResult = null
  if (value !== null && fromObj && toObj) {
    try {
      valueResult = convert(value, from, to, category)
    } catch {
      // Unknown units — treat as generic pair page
    }
  }

  const converterInitialValue = (value !== null && valueResult !== null)
    ? String(value)
    : initialValue
```

- [ ] **Step 2.5: Replace H1 and Converter in PairPage JSX**

Find this block in the `return (...)`:

```jsx
      <h1>{h1}</h1>
      <Converter
        key={`${category}/${from}/${to}`}
        category={category}
        defaultFrom={from}
        defaultTo={to}
        initialValue={initialValue}
      />
```

Replace with:

```jsx
      {value !== null && valueResult !== null ? (
        <ValueResult
          value={value}
          from={from}
          to={to}
          fromSymbol={fromObj.symbol}
          toSymbol={toObj.symbol}
          category={category}
        />
      ) : (
        <h1>{h1}</h1>
      )}
      <Converter
        key={`${category}/${from}/${to}`}
        category={category}
        defaultFrom={from}
        defaultTo={to}
        initialValue={converterInitialValue}
      />
```

- [ ] **Step 2.6: Run tests — confirm they PASS**

```bash
npx playwright test tests/converter.spec.ts --project=chromium -g "value page: H1|pre-filled|unchanged"
```

Expected: 3 PASSes.

- [ ] **Step 2.7: Run full suite — no regressions**

```bash
npx playwright test tests/converter.spec.ts --project=chromium
```

Expected: all pass.

- [ ] **Step 2.8: Commit**

```bash
git add src/components/ValueResult.jsx src/pages/PairPage.jsx tests/converter.spec.ts
git commit -m "feat: add ValueResult component and pre-fill converter on value-specific pages"
```

---

## Task 3: Value-specific FAQ generation

**Files:**
- Modify: `src/pages/PairPage.jsx` — add `generateValueFaq` function, inject into FAQ rendering and JSON-LD

### Steps

- [ ] **Step 3.1: Write failing Playwright test**

Add to `tests/converter.spec.ts`:

```typescript
test('value page: FAQ contains value-specific question', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  // The FAQ section should have a question about "3,300"
  await expect(page.getByText(/What is 3,300/i)).toBeVisible();
});

test('value page: FAQ JSON-LD contains value-specific Q&A', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  const faqLd = await page.evaluate(() => {
    const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
    for (const s of scripts) {
      try {
        const data = JSON.parse(s.textContent);
        if (data['@type'] === 'FAQPage') return data;
      } catch { /* skip */ }
    }
    return null;
  });
  expect(faqLd).not.toBeNull();
  const questions = faqLd.mainEntity.map((e) => e.name);
  expect(questions.some((q) => q.includes('3,300'))).toBe(true);
});
```

- [ ] **Step 3.2: Run tests — confirm they FAIL**

```bash
npx playwright test tests/converter.spec.ts --project=chromium -g "FAQ contains value"
```

Expected: 2 FAILs.

- [ ] **Step 3.3: Add `generateValueFaq` to `src/pages/PairPage.jsx`**

Add this function after `toTitle()`, before `PairPage()`:

```javascript
function fmtNum(n) {
  return parseFloat(n.toPrecision(6)).toLocaleString('en-US')
}

const VALUE_CONTEXT = {
  weight: (value, result, fromUnit, toUnit) => {
    if (fromUnit !== 'pound' || toUnit !== 'kilogram') return null
    let ref
    if (value < 10)         ref = 'a small bag of groceries'
    else if (value < 50)    ref = 'a large dog'
    else if (value < 200)   ref = 'an average adult'
    else if (value < 1000)  ref = 'a grand piano'
    else if (value < 4000)  ref = 'a mid-size car'
    else                    ref = 'a large commercial truck'
    return {
      q: `Is ${fmtNum(value)} lbs heavy?`,
      a: `${fmtNum(value)} lbs (${fmtNum(result)} kg) is roughly the weight of ${ref}.`,
    }
  },
  length: (value, result, fromUnit, toUnit) => {
    if (fromUnit !== 'kilometer' || toUnit !== 'mile') return null
    let ref
    if (value < 1)        ref = 'a short walk'
    else if (value < 5)   ref = 'a brisk morning jog'
    else if (value < 100) ref = 'a short road trip'
    else                  ref = 'a long drive between cities'
    return {
      q: `How far is ${fmtNum(value)} km?`,
      a: `${fmtNum(value)} km (${fmtNum(result)} miles) is about the distance of ${ref}.`,
    }
  },
  temperature: (value, result, fromUnit, toUnit) => {
    if (fromUnit !== 'fahrenheit' || toUnit !== 'celsius') return null
    let desc
    if (value <= 32)       desc = 'at or below freezing — water turns to ice at 32°F'
    else if (value < 60)   desc = 'cold — you\'ll want a coat'
    else if (value < 80)   desc = 'mild and comfortable'
    else if (value < 100)  desc = 'warm — a hot summer day'
    else if (value < 212)  desc = 'hot — above normal body temperature (98.6°F)'
    else                   desc = 'at or above the boiling point of water'
    return {
      q: `Is ${value}°F hot or cold?`,
      a: `${value}°F (${fmtNum(result)}°C) is ${desc}.`,
    }
  },
}

function generateValueFaq(value, result, fromLabel, toLabel, fromSymbol, toSymbol, from, to, category) {
  const fv = fmtNum(value)
  const fr = fmtNum(result)
  const items = [
    {
      q: `What is ${fv} ${fromLabel} in ${toLabel}?`,
      a: `${fv} ${fromLabel} equals ${fr} ${toLabel}.`,
    },
    {
      q: `How many ${toLabel} is ${fv} ${fromLabel}?`,
      a: `${fv} ${fromSymbol} = ${fr} ${toSymbol}.`,
    },
  ]
  const ctx = VALUE_CONTEXT[category]?.(value, result, from, to)
  if (ctx) items.push(ctx)
  return items
}
```

- [ ] **Step 3.4: Integrate value FAQ into PairPage render**

In `PairPage()`, after the `valueResult` computation block, find:

```javascript
  const { faq } = (fromObj && toObj) ? generatePairContent(category, fromObj, toObj) : { faq: [] }
```

Replace with:

```javascript
  const { faq: pairFaq } = (fromObj && toObj) ? generatePairContent(category, fromObj, toObj) : { faq: [] }

  const valueFaq = (value !== null && valueResult !== null)
    ? generateValueFaq(value, valueResult, fromLabel, toLabel, fromObj.symbol, toObj.symbol, from, to, category)
    : []

  const faq = [...valueFaq, ...pairFaq]
```

- [ ] **Step 3.5: Run tests — confirm they PASS**

```bash
npx playwright test tests/converter.spec.ts --project=chromium -g "FAQ contains value"
```

Expected: 2 PASSes.

- [ ] **Step 3.6: Run full suite — no regressions**

```bash
npx playwright test tests/converter.spec.ts --project=chromium
```

Expected: all pass.

- [ ] **Step 3.7: Commit**

```bash
git add src/pages/PairPage.jsx tests/converter.spec.ts
git commit -m "feat: inject value-specific FAQ on value pages (weight, length, temperature context)"
```

---

## Task 4: SEO meta for value-specific pages

**Files:**
- Modify: `src/pages/PairPage.jsx` — compute value-specific title/description/canonical

### Steps

- [ ] **Step 4.1: Write failing Playwright test**

Add to `tests/converter.spec.ts`:

```typescript
test('value page: <title> contains value and result', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  const title = await page.title();
  expect(title).toContain('3,300');
  expect(title).toContain('1,496');
});

test('value page: meta description contains value and result', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('3,300');
  expect(desc).toContain('1,496');
});

test('value page: canonical points to value-specific URL', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  expect(canonical).toBe('https://convert-fast.com/weight/3300-pound-to-kilogram');
});
```

- [ ] **Step 4.2: Run tests — confirm they FAIL**

```bash
npx playwright test tests/converter.spec.ts --project=chromium -g "value page: <title>|meta description|canonical"
```

Expected: title and description FAILs — canonical may already pass (the `pair` param already includes the value prefix, so no change needed there).

- [ ] **Step 4.3: Compute value-specific meta in PairPage**

In `src/pages/PairPage.jsx`, find the block that builds `h1`, `pageTitle`, `description`, and `canonical`:

```javascript
  const h1 = `${fromLabel} to ${toLabel} Converter`
  const pageTitle = `${fromLabel} to ${toLabel} Converter | Convert Fast`
  const pairKey = `${from}|${to}`
  const description = PAIR_META[pairKey]?.description
    ?? `Convert ${fromLabel} to ${toLabel} instantly. Free online ${toTitle(category)} converter.`
  const canonical = `${SITE_URL}/${segment}/${pair}`
```

Replace with:

```javascript
  const h1 = `${fromLabel} to ${toLabel} Converter`
  const pairKey = `${from}|${to}`

  const isValuePage = value !== null && valueResult !== null

  const pageTitle = isValuePage
    ? `${fmtNum(value)} ${fromLabel} to ${toLabel} — ${fmtNum(valueResult)} ${toLabel} | Convert Fast`
    : `${fromLabel} to ${toLabel} Converter | Convert Fast`

  const description = isValuePage
    ? `${fmtNum(value)} ${fromLabel} equals ${fmtNum(valueResult)} ${toLabel}. Free converter for any value.`
    : (PAIR_META[pairKey]?.description
        ?? `Convert ${fromLabel} to ${toLabel} instantly. Free online ${toTitle(category)} converter.`)

  const canonical = `${SITE_URL}/${segment}/${pair}`
```

- [ ] **Step 4.4: Run tests — confirm they PASS**

```bash
npx playwright test tests/converter.spec.ts --project=chromium -g "value page: <title>|meta description|canonical"
```

Expected: 3 PASSes.

- [ ] **Step 4.5: Run full suite — no regressions**

```bash
npx playwright test tests/converter.spec.ts --project=chromium
```

Expected: all pass.

- [ ] **Step 4.6: Commit**

```bash
git add src/pages/PairPage.jsx tests/converter.spec.ts
git commit -m "feat: value-specific title, description, and canonical meta on value pages"
```

---

## Task 5: Sitemap — value-specific URLs

**Files:**
- Modify: `generate-sitemap.mjs` — add `VALUE_PAGES` array and generation loop

### Steps

- [ ] **Step 5.1: Add `VALUE_PAGES` and generation loop to `generate-sitemap.mjs`**

Add this block immediately before the `// ── Assemble` comment at the end of the file:

```javascript
// ── Value-specific pages ─────────────────────────────────────────────────────
// Values chosen from GSC top queries + round numbers. Router handles any value
// not listed here — these are sitemap hints only.

function range(start, end, step = 1) {
  const out = []
  for (let v = start; v <= end; v += step) out.push(v)
  return out
}

const VALUE_PAGES = [
  {
    category: 'weight',
    from: 'pound', to: 'kilogram',
    values: [
      ...range(50, 500, 50),
      ...range(550, 2000, 50),
      2500, 3000, 3300, 3500, 4000, 4500, 4900, 5000,
    ],
  },
  {
    category: 'weight',
    from: 'kilogram', to: 'pound',
    values: [50, 60, 70, 75, 80, 85, 90, 95, 100, 110, 120, 130, 140, 150, 200],
  },
  {
    category: 'length',
    from: 'kilometer', to: 'mile',
    values: [...range(1, 50), 60, 70, 80, 90, 100],
  },
  {
    category: 'length',
    from: 'inch', to: 'centimeter',
    values: [...range(1, 72)],
  },
  {
    category: 'length',
    from: 'centimeter', to: 'inch',
    values: [...range(5, 200, 5)],
  },
  {
    category: 'temperature',
    from: 'fahrenheit', to: 'celsius',
    values: [-40, -20, -10, 0, 10, 20, 30, 32, 40, 50, 60, 70, 72, 75, 80, 85, 90, 95, 98, 98.6, 100, 105, 110, 120, 130, 140, 150, 200, 212, 250, 300, 350, 400, 450],
  },
  {
    category: 'temperature',
    from: 'celsius', to: 'fahrenheit',
    values: [-40, -20, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 37, 40, 50, 60, 70, 80, 90, 100],
  },
]

const valueSection = []
for (const { category, from, to, values } of VALUE_PAGES) {
  for (const v of values) {
    valueSection.push(
      `  <url><loc>${BASE}/${category}/${v}-${from}-to-${to}</loc><lastmod>${TODAY}</lastmod><priority>0.6</priority></url>`
    )
  }
}
sections.push(`  <!-- Value-specific pages -->\n` + valueSection.join('\n'))
```

- [ ] **Step 5.2: Run the sitemap generator**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter" && node generate-sitemap.mjs
```

Expected output (approximate):
```
✓ sitemap.xml generated — 1150 URLs
```

The count will be the previous ~701 plus the new value URLs.

- [ ] **Step 5.3: Spot-check the generated sitemap**

```bash
grep "3300-pound-to-kilogram" public/sitemap.xml
grep "value-specific" public/sitemap.xml | head -3
```

Expected: one matching line for the lbs→kg value, and a `<!-- Value-specific pages -->` comment.

- [ ] **Step 5.4: Commit**

```bash
git add generate-sitemap.mjs public/sitemap.xml
git commit -m "feat: add value-specific URLs to sitemap (~500-800 new entries)"
```

---

## Task 6: Final verification

- [ ] **Step 6.1: Run full Playwright suite across all browsers**

```bash
npx playwright test tests/converter.spec.ts
```

Expected: all tests pass across chromium, firefox, webkit.

- [ ] **Step 6.2: Manual smoke-test in browser**

Start dev server (`npm run dev`) and verify in browser:
- `/weight/3300-pound-to-kilogram` → H1 shows "3,300 lb = 1,496.86 kg", converter pre-filled with 3300
- `/weight/-10-kilogram-to-pound` → H1 shows negative value correctly, no crash
- `/weight/pound-to-kilogram` → H1 still shows "Pound to Kilogram Converter" (no regression)
- `/weight/3300-foo-to-kg` → shows "Converter Not Found" (unknown unit graceful fallback)

- [ ] **Step 6.3: Validate FAQ JSON-LD**

Navigate to `/weight/3300-pound-to-kilogram`, open DevTools → Network, find the page source. Copy the `FAQPage` JSON-LD block and validate at https://validator.schema.org.

- [ ] **Step 6.4: Final commit + push**

```bash
git push origin main
```

Cloudflare Pages auto-deploys on push to main.

After deploy: submit updated sitemap in GSC → `https://convert-fast.com/sitemap.xml`.
