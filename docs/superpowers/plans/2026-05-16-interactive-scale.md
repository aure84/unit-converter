# Interactive Scale Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an interactive emoji-reference slider to pair pages so users can drag through real-world reference objects and see live unit conversions.

**Architecture:** A discrete slider (snaps to predefined reference objects) renders a big emoji + live conversion + scrollable emoji grid. Data lives in `src/data/scaleObjects.js`, keyed by `category|unitId`. The `InteractiveScale` component is self-contained — it returns `null` when no data exists for a pair. Renders on generic pair pages only (not value-specific pages like `/weight/3300-pound-to-kilogram`).

**Tech Stack:** React 19 + Vite SPA, `useState` + `useMemo`, CSS variables (no hex), `input[type="range"]` with custom `--fill` CSS variable for track fill. All existing patterns: `convert()` from `src/utils/convert.js`, `fmtNum` from `src/utils/format.js`, `cat-content` CSS classes.

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `src/data/scaleObjects.js` | Create | Reference object data per `category\|unitId` |
| `src/components/InteractiveScale.jsx` | Create | Slider + emoji grid component |
| `src/components/InteractiveScale.css` | Create | Slider and grid styles |
| `src/pages/PairPage.jsx` | Modify | Import + render `InteractiveScale` after `<ReferenceTable>` |
| `tests/converter.spec.ts` | Modify | Playwright test for slider interaction |

---

## Task 1: Reference object data

**Files:**
- Create: `src/data/scaleObjects.js`

- [ ] **Step 1: Create the data file**

```js
// src/data/scaleObjects.js
// Reference objects for the interactive scale, keyed by "category|unitId".
// Each array must be sorted by value ascending.
export const SCALE_OBJECTS = {
  'weight|pound': [
    { value: 0.09,  emoji: '🪶', label: 'feather' },
    { value: 0.5,   emoji: '🍎', label: 'apple' },
    { value: 1.1,   emoji: '🍞', label: 'bread loaf' },
    { value: 5,     emoji: '💻', label: 'laptop' },
    { value: 8.5,   emoji: '🪣', label: 'gallon of water' },
    { value: 15,    emoji: '👶', label: 'newborn' },
    { value: 50,    emoji: '🐕', label: 'large dog' },
    { value: 155,   emoji: '🧍', label: 'adult person' },
    { value: 1500,  emoji: '🐎', label: 'horse' },
    { value: 3000,  emoji: '🚗', label: 'car' },
  ],

  'weight|kilogram': [
    { value: 0.04,  emoji: '🪶', label: 'feather' },
    { value: 0.23,  emoji: '🍎', label: 'apple' },
    { value: 0.5,   emoji: '🍞', label: 'bread loaf' },
    { value: 2.3,   emoji: '💻', label: 'laptop' },
    { value: 3.8,   emoji: '🪣', label: 'gallon of water' },
    { value: 7,     emoji: '👶', label: 'newborn' },
    { value: 25,    emoji: '🐕', label: 'large dog' },
    { value: 70,    emoji: '🧍', label: 'adult person' },
    { value: 700,   emoji: '🐎', label: 'horse' },
    { value: 1400,  emoji: '🚗', label: 'car' },
  ],

  'length|meter': [
    { value: 0.01,  emoji: '📌', label: 'thumbtack' },
    { value: 0.1,   emoji: '📱', label: 'smartphone' },
    { value: 0.3,   emoji: '📏', label: 'ruler' },
    { value: 1.75,  emoji: '🧍', label: 'person' },
    { value: 4.5,   emoji: '🚗', label: 'car' },
    { value: 12,    emoji: '🚌', label: 'bus' },
    { value: 100,   emoji: '⚽', label: 'football field' },
    { value: 324,   emoji: '🗼', label: 'Eiffel Tower' },
    { value: 1000,  emoji: '🏃', label: '1 kilometer' },
  ],

  'length|kilometer': [
    { value: 0.1,   emoji: '🏘️', label: 'city block' },
    { value: 0.5,   emoji: '🚶', label: '6-min walk' },
    { value: 1,     emoji: '🏃', label: '15-min walk' },
    { value: 5,     emoji: '🏅', label: '5K run' },
    { value: 42,    emoji: '🎖️', label: 'marathon' },
    { value: 100,   emoji: '🚗', label: 'road trip' },
    { value: 500,   emoji: '🚆', label: 'intercity train' },
    { value: 2000,  emoji: '✈️', label: 'short flight' },
  ],

  'length|foot': [
    { value: 0.25,  emoji: '🪙', label: 'coin' },
    { value: 1,     emoji: '🦶', label: 'one foot' },
    { value: 5.9,   emoji: '🧍', label: 'avg person' },
    { value: 12,    emoji: '🚗', label: 'car' },
    { value: 40,    emoji: '🏠', label: 'house' },
    { value: 300,   emoji: '⚽', label: 'football field' },
    { value: 1454,  emoji: '🏙️', label: 'Empire State' },
    { value: 5280,  emoji: '📍', label: '1 mile' },
  ],

  'length|centimeter': [
    { value: 1,     emoji: '📌', label: 'thumbtack' },
    { value: 2.54,  emoji: '👆', label: '1 inch' },
    { value: 15,    emoji: '📏', label: 'ruler' },
    { value: 30,    emoji: '🦶', label: '1 foot' },
    { value: 91,    emoji: '📐', label: '1 yard' },
    { value: 170,   emoji: '🧍', label: 'person' },
    { value: 450,   emoji: '🚗', label: 'car length' },
  ],

  'length|inch': [
    { value: 0.9,   emoji: '📎', label: 'paperclip' },
    { value: 3,     emoji: '💳', label: 'credit card' },
    { value: 6,     emoji: '📱', label: 'smartphone' },
    { value: 12,    emoji: '📏', label: 'ruler' },
    { value: 36,    emoji: '🪑', label: '1 yard' },
    { value: 72,    emoji: '🧍', label: '6-foot person' },
    { value: 120,   emoji: '🚗', label: "car length" },
  ],

  'length|mile': [
    { value: 0.06,  emoji: '🏘️', label: 'city block' },
    { value: 0.5,   emoji: '🚶', label: 'short walk' },
    { value: 1,     emoji: '🏃', label: '1-mile run' },
    { value: 3.1,   emoji: '🏅', label: '5K' },
    { value: 26.2,  emoji: '🎖️', label: 'marathon' },
    { value: 100,   emoji: '🚗', label: 'road trip' },
    { value: 600,   emoji: '✈️', label: 'regional flight' },
  ],

  'temperature|celsius': [
    { value: -40,   emoji: '🥶', label: 'Siberian winter' },
    { value: -18,   emoji: '❄️', label: 'freezer' },
    { value: 0,     emoji: '🧊', label: 'freezing' },
    { value: 10,    emoji: '🧥', label: 'cold day' },
    { value: 20,    emoji: '🌤️', label: 'mild day' },
    { value: 37,    emoji: '🤒', label: 'body temp' },
    { value: 60,    emoji: '☕', label: 'hot coffee' },
    { value: 100,   emoji: '♨️', label: 'boiling' },
  ],

  'temperature|fahrenheit': [
    { value: -40,   emoji: '🥶', label: 'Siberian winter' },
    { value: 0,     emoji: '❄️', label: 'very cold' },
    { value: 32,    emoji: '🧊', label: 'freezing' },
    { value: 50,    emoji: '🧥', label: 'cold day' },
    { value: 68,    emoji: '🌤️', label: 'room temp' },
    { value: 98.6,  emoji: '🤒', label: 'body temp' },
    { value: 140,   emoji: '☕', label: 'hot coffee' },
    { value: 212,   emoji: '♨️', label: 'boiling' },
  ],

  'speed|kilometer_per_hour': [
    { value: 1.5,   emoji: '🐢', label: 'turtle' },
    { value: 5,     emoji: '🚶', label: 'walking' },
    { value: 15,    emoji: '🚴', label: 'cycling' },
    { value: 50,    emoji: '🚗', label: 'city driving' },
    { value: 100,   emoji: '🛣️', label: 'highway' },
    { value: 200,   emoji: '🚄', label: 'fast train' },
    { value: 600,   emoji: '🛫', label: 'propeller plane' },
    { value: 900,   emoji: '✈️', label: 'jet airliner' },
  ],

  'speed|mile_per_hour': [
    { value: 1,     emoji: '🐢', label: 'turtle' },
    { value: 3,     emoji: '🚶', label: 'walking' },
    { value: 10,    emoji: '🚴', label: 'cycling' },
    { value: 30,    emoji: '🚗', label: 'city driving' },
    { value: 65,    emoji: '🛣️', label: 'highway' },
    { value: 125,   emoji: '🚄', label: 'fast train' },
    { value: 400,   emoji: '🛫', label: 'propeller plane' },
    { value: 575,   emoji: '✈️', label: 'jet airliner' },
  ],
}
```

- [ ] **Step 2: Commit**

```bash
git add src/data/scaleObjects.js
git commit -m "feat: add scaleObjects reference data for 12 unit keys"
```

---

## Task 2: InteractiveScale component + styles

**Files:**
- Create: `src/components/InteractiveScale.jsx`
- Create: `src/components/InteractiveScale.css`

- [ ] **Step 1: Create the CSS file**

```css
/* src/components/InteractiveScale.css */
.interactive-scale {
  margin-top: 2rem;
}

.interactive-scale__result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 1.25rem;
  background: var(--code-bg);
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1.25rem;
}

.interactive-scale__emoji-big {
  font-size: 3rem;
  line-height: 1;
}

.interactive-scale__label-big {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-h);
}

.interactive-scale__conversion {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent);
  font-family: var(--mono);
}

/* Range slider */
.interactive-scale__slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    to right,
    var(--accent) 0%,
    var(--accent) var(--fill, 50%),
    var(--border) var(--fill, 50%),
    var(--border) 100%
  );
}

.interactive-scale__slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--accent);
  cursor: pointer;
  border: 2px solid var(--bg);
  box-shadow: 0 0 0 2px var(--accent);
}

.interactive-scale__slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--accent);
  cursor: pointer;
  border: 2px solid var(--bg);
  box-shadow: 0 0 0 2px var(--accent);
}

.interactive-scale__slider::-moz-range-progress {
  background: var(--accent);
  height: 6px;
  border-radius: 3px;
}

/* Emoji grid */
.interactive-scale__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.interactive-scale__obj {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  padding: 0.5rem 0.6rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--bg);
  cursor: pointer;
  min-width: 64px;
  transition: border-color 0.1s, background 0.1s;
}

.interactive-scale__obj:hover {
  border-color: var(--accent-border);
  background: var(--accent-bg);
}

.interactive-scale__obj--active {
  border-color: var(--accent);
  background: var(--accent-bg);
}

.interactive-scale__obj-emoji {
  font-size: 1.6rem;
  line-height: 1;
}

.interactive-scale__obj-label {
  font-size: 0.7rem;
  color: var(--text-h);
  text-align: center;
  line-height: 1.2;
}

.interactive-scale__obj-value {
  font-size: 0.65rem;
  color: var(--text);
  font-family: var(--mono);
}

.interactive-scale__obj--active .interactive-scale__obj-emoji {
  font-size: 2rem;
}

.interactive-scale__obj--active .interactive-scale__obj-label {
  color: var(--accent);
  font-weight: 600;
}
```

- [ ] **Step 2: Create the component**

```jsx
// src/components/InteractiveScale.jsx
import { useState, useMemo } from 'react'
import { SCALE_OBJECTS } from '../data/scaleObjects.js'
import { convert } from '../utils/convert.js'
import { fmtNum } from '../utils/format.js'
import './InteractiveScale.css'

function InteractiveScale({ category, fromUnit, toUnit, fromSymbol, toSymbol, fromLabel }) {
  const objects = SCALE_OBJECTS[`${category}|${fromUnit}`] ?? null
  const [index, setIndex] = useState(() => objects ? Math.floor(objects.length / 2) : 0)

  const converted = useMemo(() => {
    if (!objects) return null
    try { return convert(objects[index].value, fromUnit, toUnit, category) }
    catch { return null }
  }, [objects, index, fromUnit, toUnit, category])

  if (!objects) return null

  const obj = objects[index]
  const fillPct = `${(index / (objects.length - 1)) * 100}%`

  return (
    <section className="interactive-scale cat-content">
      <h2 className="cat-content__section-title">Explore {fromLabel}</h2>

      <div className="interactive-scale__result" aria-live="polite" aria-atomic="true">
        <span className="interactive-scale__emoji-big" role="img" aria-label={obj.label}>
          {obj.emoji}
        </span>
        <span className="interactive-scale__label-big">{obj.label}</span>
        <span className="interactive-scale__conversion">
          {fmtNum(obj.value)} {fromSymbol}
          {converted !== null ? ` = ${fmtNum(converted)} ${toSymbol}` : ''}
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={objects.length - 1}
        step={1}
        value={index}
        onChange={(e) => setIndex(parseInt(e.target.value, 10))}
        className="interactive-scale__slider"
        style={{ '--fill': fillPct }}
        aria-label={`Select ${fromLabel} reference object`}
        aria-valuetext={`${obj.label}: ${fmtNum(obj.value)} ${fromSymbol}`}
      />

      <div className="interactive-scale__grid" role="group" aria-label={`${fromLabel} reference objects`}>
        {objects.map((o, i) => (
          <button
            key={o.value}
            className={`interactive-scale__obj${i === index ? ' interactive-scale__obj--active' : ''}`}
            onClick={() => setIndex(i)}
            aria-pressed={i === index}
            type="button"
          >
            <span className="interactive-scale__obj-emoji" role="img" aria-label={o.label}>
              {o.emoji}
            </span>
            <span className="interactive-scale__obj-label">{o.label}</span>
            <span className="interactive-scale__obj-value">{fmtNum(o.value)} {fromSymbol}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default InteractiveScale
```

- [ ] **Step 3: Verify build**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter" && npm run build 2>&1 | tail -5
```

Expected: `✓ built in ...`

- [ ] **Step 4: Commit**

```bash
git add src/components/InteractiveScale.jsx src/components/InteractiveScale.css
git commit -m "feat: add InteractiveScale component with emoji grid and live conversion"
```

---

## Task 3: Wire up in PairPage

**Files:**
- Modify: `src/pages/PairPage.jsx`

- [ ] **Step 1: Add import**

The current imports at the top of `src/pages/PairPage.jsx` end with:
```js
import { fmtNum } from '../utils/format.js'
```

Add after it:
```js
import InteractiveScale from '../components/InteractiveScale.jsx'
```

- [ ] **Step 2: Add component to JSX**

Find the `<ReferenceTable ... />` block in the JSX return (lines ~276-280):

```jsx
      <ReferenceTable
        category={category}
        fromUnit={from}
        toUnit={to}
      />
```

Add `<InteractiveScale>` immediately after it:

```jsx
      <ReferenceTable
        category={category}
        fromUnit={from}
        toUnit={to}
      />
      {!isValuePage && (
        <InteractiveScale
          category={category}
          fromUnit={from}
          toUnit={to}
          fromSymbol={fromObj?.symbol ?? from}
          toSymbol={toObj?.symbol ?? to}
          fromLabel={fromLabel}
        />
      )}
```

- [ ] **Step 3: Verify build**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter" && npm run build 2>&1 | tail -5
```

Expected: `✓ built in ...`

- [ ] **Step 4: Commit**

```bash
git add src/pages/PairPage.jsx
git commit -m "feat: render InteractiveScale on generic pair pages"
```

---

## Task 4: Playwright tests

**Files:**
- Modify: `tests/converter.spec.ts`

- [ ] **Step 1: Find the BASE constant and last test**

Open `tests/converter.spec.ts`. Find the `BASE` constant (likely `const BASE = 'http://localhost:5173'` near the top) and find the last `test(...)` block to append after it.

- [ ] **Step 2: Add tests**

Append to the test file:

```typescript
test('interactive scale renders on weight pair page', async ({ page }) => {
  await page.goto(`${BASE}/weight/pound-to-kilogram`)
  await expect(page.getByRole('heading', { name: /explore pound/i })).toBeVisible()
  // emoji grid buttons exist
  const buttons = page.locator('.interactive-scale__obj')
  expect(await buttons.count()).toBeGreaterThan(4)
  // conversion display shows "=" sign
  await expect(page.locator('.interactive-scale__conversion')).toContainText('=')
})

test('interactive scale updates conversion on slider move', async ({ page }) => {
  await page.goto(`${BASE}/weight/pound-to-kilogram`)
  const slider = page.locator('.interactive-scale__slider')
  await slider.waitFor()
  const initialText = await page.locator('.interactive-scale__conversion').textContent()
  // Move slider to position 0 (first object)
  await slider.evaluate((el: HTMLInputElement) => {
    el.value = '0'
    el.dispatchEvent(new Event('input', { bubbles: true }))
    el.dispatchEvent(new Event('change', { bubbles: true }))
  })
  const updatedText = await page.locator('.interactive-scale__conversion').textContent()
  // Text changed (initial was at midpoint, now at 0)
  expect(updatedText).not.toBe(initialText)
})

test('interactive scale not rendered on value-specific page', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`)
  await expect(page.locator('.interactive-scale')).not.toBeVisible()
})

test('interactive scale not rendered for unsupported pair', async ({ page }) => {
  // torque has no scaleObjects entry
  await page.goto(`${BASE}/torque/newton_meter-to-foot_pound`)
  await expect(page.locator('.interactive-scale')).not.toBeVisible()
})
```

- [ ] **Step 3: Run dev server + tests**

In one terminal: `npm run dev`

In another:
```bash
cd "/Volumes/SLT/Claude Code/unit-converter" && npx playwright test --reporter=line 2>&1 | tail -20
```

Expected: all tests pass (new ones + existing suite).

- [ ] **Step 4: Commit**

```bash
git add tests/converter.spec.ts
git commit -m "test: interactive scale — renders, updates on slider, hidden on value pages"
```

---

## Self-Review

**Spec coverage:**
- ✅ Slider snapping through predefined objects
- ✅ Live conversion updates as slider moves
- ✅ Emoji + label + value for each reference object
- ✅ Active object highlighted (larger emoji, accent border)
- ✅ Object buttons are clickable (click to jump)
- ✅ Only on generic pair pages (`!isValuePage`)
- ✅ Returns `null` gracefully for unsupported categories (torque, pressure, etc.)
- ✅ 12 unit keys covered: weight (lb, kg), length (m, km, ft, cm, in, mi), temperature (°C, °F), speed (km/h, mph)
- ✅ Accessible: `aria-live`, `aria-pressed`, `aria-valuetext`, `role="img"` on emoji spans

**Placeholder scan:** No TBDs, all code is complete.

**Type consistency:** `SCALE_OBJECTS` key format `category|unitId` matches usage in `InteractiveScale.jsx`. Props match between PairPage and InteractiveScale. `fmtNum`, `convert` are imported correctly.
