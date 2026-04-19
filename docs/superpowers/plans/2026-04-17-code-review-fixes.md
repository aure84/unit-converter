# Code Review Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all Critical and Important issues found in the Sprint 5 code review.

**Architecture:** Targeted fixes across existing files — no new abstractions unless required. Tasks are ordered by impact: quick wins first, then HTML/SEO fixes, then structured data, then security.

**Tech Stack:** React 19, Vite, React Helmet Async, Playwright, Cloudflare Pages

---

## File Map

| File | Change |
|------|--------|
| `src/pages/HomePage.jsx` | Fix kWh→MJ label (#4), remove "no ads" copy (#5) |
| `generate-sitemap.mjs` | Dynamic date (#8) |
| `src/pages/NotFoundPage.jsx` | Add noindex (#11) |
| `src/components/SEOMeta.jsx` | Add og:image, og:site_name, twitter:card props (#6, #18) |
| `src/components/CategoryContent.jsx` | Fix invalid dl/details HTML (#1) |
| `src/components/PairContent.jsx` | Fix invalid dl/details HTML (#1) |
| `src/components/IngredientConverter.jsx` | Add swap button (#9), fix label/input association (#10) |
| `src/pages/PairPage.jsx` | Add FAQPage JSON-LD (#2) |
| `src/pages/CategoryPage.jsx` | Add FAQPage JSON-LD (#2) |
| `src/pages/BlogPostPage.jsx` | Add author to Article JSON-LD (#17) |
| `public/_headers` | Create Cloudflare security headers (#7) |

---

## Task 1: Quick wins — label, copy, sitemap date, noindex

**Files:**
- Modify: `src/pages/HomePage.jsx:126,177`
- Modify: `generate-sitemap.mjs:9`
- Modify: `src/pages/NotFoundPage.jsx:7-11`

- [ ] **Step 1: Fix kWh→MJ label in HomePage**

In `src/pages/HomePage.jsx` line 126, change:
```jsx
{ label: 'kWh → MJ',    path: '/energy/kilowatt_hour-to-kilojoule' },
```
to:
```jsx
{ label: 'kWh → kJ',    path: '/energy/kilowatt_hour-to-kilojoule' },
```

- [ ] **Step 2: Remove "no ads in the way" copy**

In `src/pages/HomePage.jsx` line 177, change:
```jsx
          Convert Fast is a free online unit converter that handles all the measurements you need — length, weight, temperature, volume, area, speed, time, and data storage. No sign-up, no ads in the way, just instant, accurate results.
```
to:
```jsx
          Convert Fast is a free online unit converter that handles all the measurements you need — length, weight, temperature, volume, area, speed, time, and data storage. No sign-up required, just instant, accurate results.
```

- [ ] **Step 3: Fix hardcoded sitemap date**

In `generate-sitemap.mjs` line 9, change:
```js
const TODAY = '2026-04-15';
```
to:
```js
const TODAY = new Date().toISOString().slice(0, 10);
```

- [ ] **Step 4: Add noindex to 404 page**

In `src/pages/NotFoundPage.jsx`, replace the `<SEOMeta>` call:
```jsx
      <SEOMeta
        title="Page Not Found | Convert Fast"
        description="The page you are looking for does not exist."
        canonical="https://convert-fast.com/404"
        noindex
      />
```

- [ ] **Step 5: Add noindex support to SEOMeta**

In `src/components/SEOMeta.jsx`, add `noindex` prop and render it:
```jsx
function SEOMeta({ title, description, canonical, ogTitle, ogDescription, jsonLd, noindex }) {
  const resolvedOgTitle = ogTitle ?? title
  const resolvedOgDesc = ogDescription ?? description

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDesc} />
      <meta property="og:url" content={canonical} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
}
```

- [ ] **Step 6: Verify dev server still starts**

Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/`
Expected: `200`

- [ ] **Step 7: Commit**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter"
git add src/pages/HomePage.jsx generate-sitemap.mjs src/pages/NotFoundPage.jsx src/components/SEOMeta.jsx
git commit -m "fix: kWh label, remove pre-AdSense copy, dynamic sitemap date, 404 noindex"
```

---

## Task 2: Fix invalid FAQ HTML (dl + details)

**Files:**
- Modify: `src/components/CategoryContent.jsx`
- Modify: `src/components/PairContent.jsx`

The current `<dl>` wrapper with `<details>` children is invalid HTML. Replace the `<dl>` with a plain `<div>`, and wrap each accordion item in a `<div>` instead.

- [ ] **Step 1: Fix CategoryContent.jsx**

Replace the entire `<div className="cat-content__faq">` block:
```jsx
      <div className="cat-content__faq">
        <h2 className="cat-content__faq-title">Frequently Asked Questions</h2>
        <div className="cat-content__faq-list">
          {content.faq.map(({ q, a }) => (
            <details key={q} className="cat-content__faq-item">
              <summary className="cat-content__faq-q">{q}</summary>
              <p className="cat-content__faq-a">{a}</p>
            </details>
          ))}
        </div>
      </div>
```

- [ ] **Step 2: Fix PairContent.jsx**

Replace the entire `<div className="cat-content__faq">` block:
```jsx
      <div className="cat-content__faq">
        <h2 className="cat-content__faq-title">Frequently Asked Questions</h2>
        <div className="cat-content__faq-list">
          {faq.map(({ q, a }) => (
            <details key={q} className="cat-content__faq-item">
              <summary className="cat-content__faq-q">{q}</summary>
              <p className="cat-content__faq-a">{a}</p>
            </details>
          ))}
        </div>
      </div>
```

- [ ] **Step 3: Check CSS still applies**

In `src/components/CategoryContent.css`, verify `.cat-content__faq-list` and `.cat-content__faq-a` styles exist and don't rely on `dl`/`dd` element selectors. If they do, update them to use the class selectors only.

Run: `curl -s http://localhost:5173/length | grep -o 'faq'`
Expected: any output (page loads)

- [ ] **Step 4: Commit**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter"
git add src/components/CategoryContent.jsx src/components/PairContent.jsx
git commit -m "fix: replace invalid dl+details FAQ HTML with div+details"
```

---

## Task 3: IngredientConverter — swap button + label associations

**Files:**
- Modify: `src/components/IngredientConverter.jsx`

- [ ] **Step 1: Add swap handler and fix labels**

Replace the entire component body (keep imports and helper functions unchanged). The key changes:
1. Add `handleSwap` function
2. Replace `<div className="ingredient-converter__arrow">` with a `<button>`
3. Add `id` to inputs and `htmlFor` to labels

```jsx
function IngredientConverter({ ingredient, initialGrams }) {
  const density = INGREDIENT_DENSITIES[ingredient]
  const [activeValue, setActiveValue] = useState(initialGrams ?? '')
  const [activeSide, setActiveSide] = useState('grams')

  const calcCups = useCallback(
    (raw) => {
      if (raw === '' || raw === '-') return ''
      const num = parseFloat(raw)
      if (!isFinite(num) || num <= 0) return ''
      try { return formatResult(gramsToIngredientCups(num, ingredient)) }
      catch { return '' }
    },
    [ingredient],
  )

  const calcGrams = useCallback(
    (raw) => {
      if (raw === '' || raw === '-') return ''
      const num = parseFloat(raw)
      if (!isFinite(num) || num <= 0) return ''
      try { return formatResult(ingredientCupsToGrams(num, ingredient)) }
      catch { return '' }
    },
    [ingredient],
  )

  const gramsValue = activeSide === 'grams' ? activeValue : calcGrams(activeValue)
  const cupsValue  = activeSide === 'cups'  ? activeValue : calcCups(activeValue)

  function handleGramsInput(e) {
    setActiveSide('grams')
    setActiveValue(e.target.value)
  }

  function handleCupsInput(e) {
    setActiveSide('cups')
    setActiveValue(e.target.value)
  }

  function handleSwap() {
    if (activeSide === 'grams') {
      setActiveSide('cups')
      setActiveValue(calcCups(activeValue))
    } else {
      setActiveSide('grams')
      setActiveValue(calcGrams(activeValue))
    }
  }

  if (!density) return null

  return (
    <div className="ingredient-converter">
      <div className="ingredient-converter__field">
        <label htmlFor="ingredient-grams" className="ingredient-converter__label">Grams (g)</label>
        <input
          id="ingredient-grams"
          type="number"
          className="ingredient-converter__input"
          value={gramsValue}
          onChange={handleGramsInput}
          placeholder="0"
          inputMode="decimal"
          min="0"
        />
      </div>

      <button
        type="button"
        className="ingredient-converter__swap"
        onClick={handleSwap}
        aria-label="Swap units"
      >
        ⇄
      </button>

      <div className="ingredient-converter__field">
        <label htmlFor="ingredient-cups" className="ingredient-converter__label">Cups (US)</label>
        <input
          id="ingredient-cups"
          type="number"
          className="ingredient-converter__input"
          value={cupsValue}
          onChange={handleCupsInput}
          placeholder="0"
          inputMode="decimal"
          min="0"
        />
      </div>

      <p className="ingredient-converter__hint">
        1 cup {density.symbol} = {density.gPerCup} g
      </p>
    </div>
  )
}
```

- [ ] **Step 2: Update CSS — rename arrow class to swap**

In `src/components/IngredientConverter.css`, find `.ingredient-converter__arrow` and add/update `.ingredient-converter__swap` to match the existing arrow styling (cursor: pointer, appearance reset, etc.). Keep both classes if the old one is used elsewhere, otherwise rename.

- [ ] **Step 3: Verify swap works on ingredient page**

Open `http://localhost:5173/cooking/grams-to-cups-flour`, type `100` in grams, click ⇄, verify the cups value moves to the grams field.

- [ ] **Step 4: Commit**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter"
git add src/components/IngredientConverter.jsx src/components/IngredientConverter.css
git commit -m "fix: add swap button and label associations to IngredientConverter"
```

---

## Task 4: FAQPage JSON-LD on PairPage and CategoryPage

**Files:**
- Modify: `src/pages/PairPage.jsx`
- Modify: `src/pages/CategoryPage.jsx`

FAQPage JSON-LD unlocks expandable FAQ rich results in Google Search. The FAQ data already exists — we just need to serialize it.

- [ ] **Step 1: Add FAQPage JSON-LD to PairPage**

In `src/pages/PairPage.jsx`, import `generatePairContent` and `getUnit`:
```jsx
import { generatePairContent } from '../data/pairContent.js'
import { getUnit } from '../data/units.js'
```

Then inside `PairPage()`, after the `jsonLd` WebApplication object, add:
```jsx
  const fromObj = getUnit(category, from)
  const toObj   = getUnit(category, to)
  const { faq } = (fromObj && toObj) ? generatePairContent(category, fromObj, toObj) : { faq: [] }

  const faqJsonLd = faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null
```

Then pass both to SEOMeta as an array:
```jsx
      <SEOMeta
        title={pageTitle}
        description={description}
        canonical={canonical}
        jsonLd={faqJsonLd ? [jsonLd, faqJsonLd] : jsonLd}
      />
```

- [ ] **Step 2: Update SEOMeta to handle array jsonLd**

In `src/components/SEOMeta.jsx`, update the JSON-LD rendering block to support both single objects and arrays:
```jsx
      {/* JSON-LD */}
      {jsonLd && (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
```

- [ ] **Step 3: Add FAQPage JSON-LD to CategoryPage**

In `src/pages/CategoryPage.jsx`, import `categoryContent`:
```jsx
import { categoryContent } from '../data/content.js'
```

Inside the page component, after building `jsonLd`, add:
```jsx
  const catFaq = categoryContent[registryKey]?.faq ?? []
  const faqJsonLd = catFaq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: catFaq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null
```

Pass to SEOMeta:
```jsx
        jsonLd={faqJsonLd ? [jsonLd, faqJsonLd] : jsonLd}
```

- [ ] **Step 4: Verify JSON-LD renders**

Run: `curl -s http://localhost:5173/length/meter-to-foot | grep -o 'FAQPage'`
Expected: `FAQPage`

- [ ] **Step 5: Commit**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter"
git add src/pages/PairPage.jsx src/pages/CategoryPage.jsx src/components/SEOMeta.jsx
git commit -m "feat: add FAQPage JSON-LD to pair and category pages"
```

---

## Task 5: Open Graph image + og:site_name + Twitter Card + Blog author

**Files:**
- Modify: `src/components/SEOMeta.jsx`
- Modify: `src/pages/BlogPostPage.jsx`
- Create: `public/og-image.png` (1200×630px — use a placeholder if no image exists yet)

- [ ] **Step 1: Add og:image and twitter card to SEOMeta**

In `src/components/SEOMeta.jsx`, update the signature and Open Graph block:
```jsx
const OG_IMAGE = 'https://convert-fast.com/og-image.png'

function SEOMeta({ title, description, canonical, ogTitle, ogDescription, jsonLd, noindex }) {
  const resolvedOgTitle = ogTitle ?? title
  const resolvedOgDesc = ogDescription ?? description

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Convert Fast" />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDesc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDesc} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* JSON-LD */}
      {jsonLd && (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  )
}
```

- [ ] **Step 2: Create placeholder OG image**

Check if `public/og-image.png` exists:
```bash
ls "/Volumes/SLT/Claude Code/unit-converter/public/og-image.png" 2>/dev/null || echo "MISSING"
```

If missing, create a simple SVG-based placeholder and convert, OR note that a real image should be created. For now, create a minimal placeholder:
```bash
cd "/Volumes/SLT/Claude Code/unit-converter/public"
# Create a simple text file as placeholder — replace with real 1200×630 PNG before launch
echo "PLACEHOLDER — replace with real 1200x630 PNG" > og-image-placeholder.txt
```
Note: A real OG image must be created separately (design task). The meta tag can be committed now so it's wired up.

- [ ] **Step 3: Add author to Blog Article JSON-LD**

In `src/pages/BlogPostPage.jsx`, add `author` to the `jsonLd` object:
```jsx
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: 'Convert Fast',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Convert Fast',
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  }
```

- [ ] **Step 4: Commit**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter"
git add src/components/SEOMeta.jsx src/pages/BlogPostPage.jsx
git commit -m "feat: add og:image, og:site_name, twitter:card, blog article author JSON-LD"
```

---

## Task 6: Cloudflare security headers

**Files:**
- Create: `public/_headers`

- [ ] **Step 1: Create `public/_headers`**

```
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

- [ ] **Step 2: Verify file is committed**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter"
cat public/_headers
```
Expected: the four header lines above.

- [ ] **Step 3: Commit**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter"
git add public/_headers
git commit -m "feat: add Cloudflare security response headers"
```

---

## Task 7: Run full E2E suite to verify no regressions

- [ ] **Step 1: Start dev server if not running**

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/ || (cd "/Volumes/SLT/Claude Code/unit-converter" && npm run dev &)
sleep 3
```

- [ ] **Step 2: Run all Playwright tests**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter" && npx playwright test --reporter=list
```
Expected: `57 passed`

- [ ] **Step 3: If any test fails, investigate and fix before proceeding**

---

## Self-Review Checklist

- [x] #4 kWh→MJ label — Task 1 Step 1
- [x] #5 "no ads in the way" — Task 1 Step 2
- [x] #8 hardcoded sitemap date — Task 1 Step 3
- [x] #11 404 noindex — Task 1 Step 4–5
- [x] #1 invalid dl+details HTML — Task 2
- [x] #9 IngredientConverter swap button — Task 3
- [x] #10 IngredientConverter label associations — Task 3
- [x] #2 FAQPage JSON-LD — Task 4
- [x] #6 og:image + Twitter Card — Task 5
- [x] #17 Blog author JSON-LD — Task 5
- [x] #18 og:site_name — Task 5
- [x] #7 security headers — Task 6
- [ ] #12 SITE_URL constant extraction — deferred (low risk, no bug, separate refactor PR)
- [ ] #3 Converter hardcoded IDs — deferred (no current bug, `useId()` refactor separate)
- [ ] og:image real PNG — design task, separate
