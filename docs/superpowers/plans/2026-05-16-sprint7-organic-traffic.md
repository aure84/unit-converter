# Sprint 7 — Organic Traffic Growth Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship 20 blog articles with visuals + FAQ schema, enrich top value-specific pages, and add internal linking to grow indexed pages from 48 → 300+ and earn organic clicks.

**Architecture:** SVG visual components built as inline React SVG using CSS variables (dark mode automatic). Blog posts extended with `faqs` and per-section `visual` fields. `VALUE_ENRICHMENT` map added to `pairContent.js`; `ValueResult` reads it to render context, formula, related values, extended FAQ, and scale diagram. Internal linking added via `featuredPairs` updates and a new "Common values" block in PairPage.

**Tech Stack:** React 19 + Vite SPA, Cloudflare Pages, react-router, Playwright E2E

**Run tests:** `npx playwright test --reporter=line` (requires `npm run dev` in another terminal)

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `src/components/visuals/ScaleDiagram.jsx` | Create | Horizontal scale SVG showing value position |
| `src/components/visuals/ComparisonChart.jsx` | Create | Horizontal bar chart SVG |
| `src/components/visuals/StepDiagram.jsx` | Create | Numbered step sequence SVG |
| `src/components/visuals/SizeComparison.jsx` | Create | Emoji/object relative size SVG |
| `src/pages/BlogPostPage.jsx` | Modify | Add Context tag, FAQ rendering, visual rendering, FAQ JSON-LD |
| `src/pages/BlogIndexPage.jsx` | Modify | Add Context tag, date filtering (hide future posts) |
| `src/data/blogPosts.js` | Modify | Add 20 articles with drip dates |
| `src/data/pairContent.js` | Modify | Add VALUE_ENRICHMENT export |
| `src/components/ValueResult.jsx` | Modify | Render enrichment blocks |
| `src/pages/PairPage.jsx` | Modify | Pass enrichment props to ValueResult; add Common values block |
| `src/data/content.js` | Modify | Add value-specific links to weight/length/temperature featuredPairs |
| `public/sitemap.xml` | Regenerate | `node generate-sitemap.mjs` after blog articles are added |
| `tests/converter.spec.ts` | Modify | Add tests for new blog FAQ, enrichment, date filtering |

---

## Task 1: ScaleDiagram SVG component

**Files:**
- Create: `src/components/visuals/ScaleDiagram.jsx`

- [ ] **Step 1: Create the component**

```jsx
// Horizontal scale showing where a value sits among reference markers.
// Props: value (number), unit (string), min (number), max (number),
//        markers ([{value, label}]), label (string, figcaption)
function ScaleDiagram({ value, unit, min, max, markers = [], label }) {
  const toX = (v) => 30 + Math.min(1, Math.max(0, (v - min) / (max - min))) * 340
  const vx = toX(value)
  const fmt = (n) =>
    n >= 1000 ? `${(n / 1000).toLocaleString('en-US')}k` : n.toLocaleString('en-US')

  return (
    <figure style={{ margin: '1.5rem 0' }}>
      {label && (
        <figcaption style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
          {label}
        </figcaption>
      )}
      <svg
        viewBox="0 0 400 90"
        role="img"
        aria-label={label ?? `Scale: ${value} ${unit}`}
        style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}
      >
        <rect x="30" y="42" width="340" height="8" rx="4" fill="var(--border)" />
        {markers.map((m, i) => {
          const mx = toX(m.value)
          return (
            <g key={i}>
              <line x1={mx} y1="38" x2={mx} y2="54" stroke="var(--text)" strokeWidth="1.5" />
              <text x={mx} y="30" textAnchor="middle" fontSize="9" fill="var(--text)">
                {m.label}
              </text>
              <text x={mx} y="68" textAnchor="middle" fontSize="9" fill="var(--text)">
                {fmt(m.value)}
              </text>
            </g>
          )
        })}
        <circle cx={vx} cy="46" r="8" fill="var(--accent)" />
        <text x={vx} y="82" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-h)">
          {fmt(value)} {unit}
        </text>
      </svg>
    </figure>
  )
}

export default ScaleDiagram
```

- [ ] **Step 2: Commit**

```bash
git add src/components/visuals/ScaleDiagram.jsx
git commit -m "feat: add ScaleDiagram SVG component"
```

---

## Task 2: ComparisonChart SVG component

**Files:**
- Create: `src/components/visuals/ComparisonChart.jsx`

- [ ] **Step 1: Create the component**

```jsx
// Horizontal bar chart for comparing values side-by-side.
// Props: items ([{label, value, unit, highlight?}]), label (string)
function ComparisonChart({ items, label }) {
  const maxVal = Math.max(...items.map((i) => i.value))
  const rowH = 36
  const totalH = items.length * rowH + 40

  return (
    <figure style={{ margin: '1.5rem 0' }}>
      {label && (
        <figcaption style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
          {label}
        </figcaption>
      )}
      <svg
        viewBox={`0 0 400 ${totalH}`}
        role="img"
        aria-label={label ?? 'Comparison chart'}
        style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}
      >
        {items.map((item, i) => {
          const barW = Math.max(4, (item.value / maxVal) * 240)
          const y = 20 + i * rowH
          const fill = item.highlight ? 'var(--accent)' : 'var(--border)'
          const valFill = item.highlight ? 'var(--accent)' : 'var(--text)'
          return (
            <g key={i}>
              <text x="0" y={y + 14} fontSize="11" fill="var(--text)" dominantBaseline="middle">
                {item.label}
              </text>
              <rect x="120" y={y} width={barW} height="22" rx="3" fill={fill} />
              <text x={120 + barW + 6} y={y + 14} fontSize="11" fill={valFill} dominantBaseline="middle">
                {item.value.toLocaleString('en-US')} {item.unit}
              </text>
            </g>
          )
        })}
      </svg>
    </figure>
  )
}

export default ComparisonChart
```

- [ ] **Step 2: Commit**

```bash
git add src/components/visuals/ComparisonChart.jsx
git commit -m "feat: add ComparisonChart SVG component"
```

---

## Task 3: StepDiagram SVG component

**Files:**
- Create: `src/components/visuals/StepDiagram.jsx`

- [ ] **Step 1: Create the component**

```jsx
// Numbered step sequence with dashed connector lines.
// Props: steps ([{title, description}]), label (string)
function StepDiagram({ steps, label }) {
  const rowH = 64
  const totalH = steps.length * rowH + 20

  return (
    <figure style={{ margin: '1.5rem 0' }}>
      {label && (
        <figcaption style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
          {label}
        </figcaption>
      )}
      <svg
        viewBox={`0 0 400 ${totalH}`}
        role="img"
        aria-label={label ?? 'Step diagram'}
        style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}
      >
        {steps.map((step, i) => {
          const y = 10 + i * rowH
          const isLast = i === steps.length - 1
          return (
            <g key={i}>
              {!isLast && (
                <line
                  x1="22" y1={y + 42} x2="22" y2={y + rowH}
                  stroke="var(--border)" strokeWidth="2" strokeDasharray="4 3"
                />
              )}
              <circle cx="22" cy={y + 20} r="18" fill="var(--accent)" />
              <text x="22" y={y + 25} textAnchor="middle" fontSize="13" fontWeight="700" fill="white">
                {i + 1}
              </text>
              <text x="52" y={y + 16} fontSize="12" fontWeight="600" fill="var(--text-h)">
                {step.title}
              </text>
              <text x="52" y={y + 33} fontSize="10" fill="var(--text)">
                {step.description}
              </text>
            </g>
          )
        })}
      </svg>
    </figure>
  )
}

export default StepDiagram
```

- [ ] **Step 2: Commit**

```bash
git add src/components/visuals/StepDiagram.jsx
git commit -m "feat: add StepDiagram SVG component"
```

---

## Task 4: SizeComparison SVG component

**Files:**
- Create: `src/components/visuals/SizeComparison.jsx`

- [ ] **Step 1: Create the component**

```jsx
// Emoji objects displayed at relative scale.
// Props: items ([{label, emoji, relativeSize}]) relativeSize 0–1, label (string)
function SizeComparison({ items, label }) {
  const colW = 90
  const totalW = items.length * colW + 40

  return (
    <figure style={{ margin: '1.5rem 0' }}>
      {label && (
        <figcaption style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
          {label}
        </figcaption>
      )}
      <svg
        viewBox={`0 0 ${totalW} 140`}
        role="img"
        aria-label={label ?? 'Size comparison'}
        style={{ width: '100%', maxWidth: Math.min(560, totalW * 1.5), display: 'block', margin: '0 auto' }}
      >
        {items.map((item, i) => {
          const cx = 20 + i * colW + colW / 2
          const fontSize = Math.max(12, item.relativeSize * 52)
          return (
            <g key={i}>
              <text x={cx} y="90" textAnchor="middle" fontSize={fontSize} dominantBaseline="alphabetic">
                {item.emoji}
              </text>
              <text x={cx} y="112" textAnchor="middle" fontSize="10" fill="var(--text)">
                {item.label}
              </text>
            </g>
          )
        })}
      </svg>
    </figure>
  )
}

export default SizeComparison
```

- [ ] **Step 2: Commit**

```bash
git add src/components/visuals/SizeComparison.jsx
git commit -m "feat: add SizeComparison SVG component"
```

---

## Task 5: Extend BlogPostPage and BlogIndexPage

**Files:**
- Modify: `src/pages/BlogPostPage.jsx`
- Modify: `src/pages/BlogIndexPage.jsx`

- [ ] **Step 1: Update BlogPostPage**

Replace the entire file content with:

```jsx
import { useParams, Link } from 'react-router'
import SEOMeta from '../components/SEOMeta.jsx'
import ScaleDiagram from '../components/visuals/ScaleDiagram.jsx'
import ComparisonChart from '../components/visuals/ComparisonChart.jsx'
import StepDiagram from '../components/visuals/StepDiagram.jsx'
import SizeComparison from '../components/visuals/SizeComparison.jsx'
import { getPostBySlug } from '../data/blogPosts.js'
import './BlogPage.css'

const SITE_URL = 'https://convert-fast.com'

const TAG_CLASS = {
  'How-To Guide':    'blog-tag--how-to',
  'Quick Reference': 'blog-tag--quick-ref',
  'Conversion Fail': 'blog-tag--fail',
  'Context':         'blog-tag--context',
}

const VISUAL_COMPONENTS = {
  ScaleDiagram,
  ComparisonChart,
  StepDiagram,
  SizeComparison,
}

function BlogTag({ tag }) {
  if (!tag) return null
  return <span className={`blog-tag ${TAG_CLASS[tag] ?? ''}`}>{tag}</span>
}

function BlogVisual({ visual }) {
  if (!visual) return null
  const Component = VISUAL_COMPONENTS[visual.type]
  if (!Component) return null
  return <Component {...visual.props} />
}

function BlogPostPage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <main className="blog-post">
        <h1>Article Not Found</h1>
        <p>This article does not exist. <Link to="/blog">Back to Blog →</Link></p>
      </main>
    )
  }

  const faqJsonLd = post.faqs?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Convert Fast', url: SITE_URL },
    url: `${SITE_URL}/blog/${post.slug}`,
    publisher: { '@type': 'Organization', name: 'Convert Fast', url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
  }

  const jsonLd = faqJsonLd ? [articleJsonLd, faqJsonLd] : articleJsonLd

  return (
    <main className="blog-post">
      <SEOMeta
        title={`${post.title} | Convert Fast`}
        description={post.description}
        canonical={`${SITE_URL}/blog/${post.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />

      <nav className="blog-post__breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true"> › </span>
        <Link to="/blog">Blog</Link>
        <span aria-hidden="true"> › </span>
        <span>{post.title}</span>
      </nav>

      <article className="blog-post__article">
        <header className="blog-post__header">
          <BlogTag tag={post.tag} />
          <h1>{post.title}</h1>
          <time className="blog-post__date" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </header>

        {post.image && (
          <img
            src={post.image.url}
            alt={post.image.alt}
            className="blog-post__hero"
            loading="lazy"
          />
        )}

        <p className="blog-post__intro">{post.intro}</p>

        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {section.list && (
              <ul>
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.visual && <BlogVisual visual={section.visual} />}
          </section>
        ))}

        <section>
          <h2>Conclusion</h2>
          <p>{post.conclusion}</p>
        </section>

        {post.faqs?.length > 0 && (
          <section className="blog-post__faq">
            <h2>Frequently Asked Questions</h2>
            <div className="cat-content__faq-list">
              {post.faqs.map(({ q, a }) => (
                <details key={q} className="cat-content__faq-item">
                  <summary className="cat-content__faq-q">{q}</summary>
                  <p className="cat-content__faq-a">{a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {post.relatedLinks?.length > 0 && (
          <aside className="blog-post__related">
            <h3>Try Our Free Converters</h3>
            <ul>
              {post.relatedLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </article>

      <div className="blog-post__back">
        <Link to="/blog">← Back to Blog</Link>
      </div>
    </main>
  )
}

export default BlogPostPage
```

- [ ] **Step 2: Add Context tag CSS to BlogPage.css**

Open `src/pages/BlogPage.css` and add at the end:
```css
.blog-tag--context {
  background: rgba(22, 163, 74, 0.12);
  color: var(--currency);
  border: 1px solid rgba(22, 163, 74, 0.3);
}

.blog-post__faq {
  margin-top: 2rem;
}
```

- [ ] **Step 3: Update BlogIndexPage — add Context tag + date filtering**

In `src/pages/BlogIndexPage.jsx`, update `TAG_CLASS` to add `'Context': 'blog-tag--context'`, and update the post list to filter by date:

Replace:
```jsx
      <ul className="blog-index__list">
        {[...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
```

With:
```jsx
      <ul className="blog-index__list">
        {[...blogPosts]
          .filter((p) => p.date <= new Date().toISOString().slice(0, 10))
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((post) => (
```

Also add `'Context': 'blog-tag--context'` to `TAG_CLASS` in BlogIndexPage.jsx.

- [ ] **Step 4: Start dev server and verify**

```bash
npm run dev
```

Open `/blog` — confirm existing posts load. Open a post — confirm layout unchanged. No console errors.

- [ ] **Step 5: Commit**

```bash
git add src/pages/BlogPostPage.jsx src/pages/BlogIndexPage.jsx src/pages/BlogPage.css
git commit -m "feat: blog — Context tag, FAQ rendering, visual sections, date filtering"
```

---

## Task 6: Write 20 blog articles

**Files:**
- Modify: `src/data/blogPosts.js`

**Drip dates:** Start 2026-05-18 (day after assumed deploy), one per day through 2026-06-06.

**Schema for new articles:**
```js
{
  slug: 'string',
  title: 'string',
  tag: 'Context' | 'Reference' | 'How-To Guide' | 'Conversion Fail',
  date: 'YYYY-MM-DD',
  description: 'string (meta, ~155 chars)',
  intro: 'string (1 paragraph, answer up front)',
  sections: [
    {
      heading: 'string (H2)',
      paragraphs: ['string', ...],
      list: ['string', ...],    // optional
      visual: { type: 'ComponentName', props: { ... } },  // optional
    }
  ],
  conclusion: 'string',
  faqs: [{ q: 'string', a: 'string' }],  // 3–5 items
  relatedLinks: [{ label: 'string', path: '/path' }],
}
```

- [ ] **Step 1: Add article 1 — "What Is 2.5 Bar in PSI? Tire Pressure Guide"**

Append before the closing `]` in `blogPosts.js`:

```js
  {
    slug: 'what-is-2-5-bar-in-psi-tire-pressure',
    title: 'What Is 2.5 Bar in PSI? Tire Pressure Guide',
    tag: 'Context',
    date: '2026-05-18',
    description: '2.5 bar equals 36.3 PSI. Learn what this means for your tires, how to check tire pressure correctly, and what the ideal range is for most cars.',
    intro: '2.5 bar equals approximately 36.3 PSI (pounds per square inch). For most passenger cars, the recommended tire pressure falls between 30 and 35 PSI (2.1–2.4 bar) — so 2.5 bar is at the high end of normal, or slightly above recommended for some vehicles. Always check your car\'s door jamb sticker for the exact figure.',
    sections: [
      {
        heading: 'Bar vs PSI: What\'s the Difference?',
        paragraphs: [
          'Bar and PSI both measure pressure, but they come from different unit systems. The bar is a metric unit roughly equal to atmospheric pressure at sea level (1 bar ≈ 14.5 PSI). PSI — pounds per square inch — is the standard in the United States and is still widely used in the UK for tire pressure.',
          'The conversion is straightforward: 1 bar = 14.5038 PSI. So to convert bar to PSI, multiply by 14.5038. For 2.5 bar: 2.5 × 14.5038 = 36.26 PSI.',
          'European car manufacturers typically list tire pressure in bar. American manufacturers use PSI. If your car was made in Europe but sold in the US, you may see both on the door sticker.',
        ],
        visual: {
          type: 'ComparisonChart',
          props: {
            label: 'Common tire pressures: bar vs PSI',
            items: [
              { label: 'Economy car (front)', value: 30, unit: 'PSI' },
              { label: 'SUV (front)', value: 33, unit: 'PSI' },
              { label: '2.5 bar', value: 36.3, unit: 'PSI', highlight: true },
              { label: 'Truck (rear)', value: 40, unit: 'PSI' },
            ],
          },
        },
      },
      {
        heading: 'Is 2.5 Bar the Right Pressure for Your Car?',
        paragraphs: [
          'That depends on your specific vehicle. Most passenger cars recommend 2.1–2.4 bar (30–35 PSI) for front tires and slightly higher for rear tires when carrying a full load. Sports cars and performance vehicles sometimes require 2.5 bar or more.',
          'Check the sticker inside your driver\'s door jamb — it lists the manufacturer\'s recommended cold tire pressure in both PSI and bar (on most modern cars). Do not rely on the maximum pressure printed on the tire sidewall; that is the tire\'s physical limit, not the recommended operating pressure.',
          '2.5 bar is fine if that is what your manufacturer specifies. It is slightly high for vehicles that recommend 2.2–2.3 bar, which can cause the center of the tire to wear faster and may reduce grip slightly.',
        ],
      },
      {
        heading: 'How to Check and Adjust Tire Pressure',
        paragraphs: [
          'Check tire pressure when the tires are cold — meaning the car has been parked for at least three hours or driven less than 1 mile. Driving heats the air inside the tire, which raises pressure by 4–8 PSI. Hot readings are not reliable for adjustment.',
          'Use a quality digital tire gauge or the gauge at a service station. Remove the valve cap, press the gauge firmly onto the valve stem, and read the pressure. If it\'s above your target, release air with the small pin inside the valve stem. If it\'s below, add air with a pump.',
        ],
        visual: {
          type: 'StepDiagram',
          props: {
            label: 'How to check tire pressure correctly',
            steps: [
              { title: 'Park and wait', description: 'Let tires cool for 3 hours or drive less than 1 mile' },
              { title: 'Remove valve cap', description: 'Unscrew the small cap on each tire\'s valve stem' },
              { title: 'Press gauge firmly', description: 'Hold the gauge flat against the valve — no hissing' },
              { title: 'Read the pressure', description: 'Compare to the door jamb sticker recommendation' },
              { title: 'Inflate or deflate', description: 'Add air at a pump or press the valve pin to release' },
            ],
          },
        },
      },
      {
        heading: 'kPa: The Third Pressure Unit',
        paragraphs: [
          'Some gauges and car manuals also show kilopascals (kPa). 1 bar = 100 kPa, so 2.5 bar = 250 kPa. Japanese and some European vehicles commonly list pressure in kPa on the door sticker.',
          'The three units cover the same measurement — they are just different scales. A pressure of 2.5 bar = 36.3 PSI = 250 kPa. Memorizing one anchor point (1 bar ≈ 14.5 PSI ≈ 100 kPa) lets you convert between all three.',
        ],
      },
    ],
    conclusion: 'At 2.5 bar (36.3 PSI), your tires are at the high end of the normal range for most passenger cars. If your vehicle\'s door sticker specifies 2.5 bar, that is exactly right. If it specifies 2.1–2.3 bar, reduce pressure slightly to protect tread life and handling. Always check cold and always trust the manufacturer spec over general guidelines.',
    faqs: [
      { q: 'What is 2.5 bar in PSI?', a: '2.5 bar equals 36.26 PSI. Multiply bar by 14.5038 to convert.' },
      { q: 'Is 2.5 bar tire pressure too high?', a: 'It depends on your vehicle. Most passenger cars recommend 2.1–2.4 bar (30–35 PSI). Check the sticker inside your driver\'s door jamb for the manufacturer\'s figure.' },
      { q: 'What is 2.5 bar in kPa?', a: '2.5 bar equals 250 kPa. 1 bar = 100 kPa.' },
      { q: 'How do I convert bar to PSI without a calculator?', a: 'Multiply bar by 14.5 for a close estimate. For 2.5 bar: 2.5 × 14.5 = 36.25 PSI.' },
      { q: 'Should I check tire pressure hot or cold?', a: 'Always cold — after parking for at least 3 hours or driving less than 1 mile. Driving heats the air and raises pressure by 4–8 PSI, which gives a misleading reading.' },
    ],
    relatedLinks: [
      { label: 'Bar to PSI Converter', path: '/pressure/bar-to-psi' },
      { label: 'PSI to Bar Converter', path: '/pressure/psi-to-bar' },
      { label: 'Pressure Converter', path: '/pressure' },
      { label: 'kPa to PSI Converter', path: '/pressure/kilopascal-to-psi' },
    ],
  },
```

- [ ] **Step 2: Add article 2 — "Bar to PSI Conversion Chart (Full Reference)"**

```js
  {
    slug: 'bar-to-psi-conversion-chart',
    title: 'Bar to PSI Conversion Chart (Full Reference)',
    tag: 'Quick Reference',
    date: '2026-05-19',
    description: 'Complete bar to PSI conversion chart from 0.5 to 10 bar. Includes the exact formula, tire pressure ranges, and industrial pressure reference points.',
    intro: 'To convert bar to PSI, multiply by 14.5038. This chart covers the full range from 0.5 to 10 bar — the range that covers bicycle tires, car tires, truck tires, and common industrial applications.',
    sections: [
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 bar = 14.5038 PSI. The bar is defined as exactly 100,000 pascals. PSI (pounds per square inch) is derived from the imperial unit system. The two units are used interchangeably in automotive and industrial settings.',
          'For quick mental math: multiply bar by 14.5. This gives a result within 0.03% of the exact answer — accurate enough for any practical purpose.',
        ],
      },
      {
        heading: 'Bar to PSI Reference Table',
        paragraphs: ['All values rounded to two decimal places.'],
        list: [
          '0.5 bar = 7.25 PSI (bicycle suspension fork)',
          '1.0 bar = 14.50 PSI (road bike tire minimum)',
          '1.5 bar = 21.76 PSI (mountain bike tire)',
          '2.0 bar = 29.01 PSI (passenger car minimum)',
          '2.2 bar = 31.91 PSI (typical passenger car front)',
          '2.3 bar = 33.36 PSI (typical passenger car front)',
          '2.4 bar = 34.81 PSI (typical SUV front)',
          '2.5 bar = 36.26 PSI (high end passenger / some sports cars)',
          '2.8 bar = 40.61 PSI (van or light truck)',
          '3.0 bar = 43.51 PSI (road bike — high pressure)',
          '4.0 bar = 58.02 PSI (heavy truck)',
          '6.0 bar = 87.02 PSI (hydraulic tools, air compressors)',
          '10.0 bar = 145.04 PSI (industrial pneumatics)',
        ],
        visual: {
          type: 'ScaleDiagram',
          props: {
            label: 'Common pressure ranges (PSI)',
            min: 0,
            max: 150,
            value: 36.26,
            unit: 'PSI',
            markers: [
              { value: 30, label: 'car min' },
              { value: 36.26, label: '2.5 bar' },
              { value: 80, label: 'road bike' },
              { value: 145, label: '10 bar' },
            ],
          },
        },
      },
      {
        heading: 'PSI to Bar (Reverse Reference)',
        paragraphs: [
          'To convert PSI to bar, divide by 14.5038. For example: 35 PSI ÷ 14.5038 = 2.41 bar.',
        ],
        list: [
          '28 PSI = 1.93 bar',
          '30 PSI = 2.07 bar',
          '32 PSI = 2.21 bar',
          '35 PSI = 2.41 bar',
          '36 PSI = 2.48 bar',
          '38 PSI = 2.62 bar',
          '40 PSI = 2.76 bar',
          '44 PSI = 3.03 bar',
          '51 PSI = 3.52 bar',
          '60 PSI = 4.14 bar',
        ],
      },
    ],
    conclusion: 'The bar-to-PSI conversion is one of the most practical unit conversions for anyone who services their own vehicle or works with pneumatic equipment. The 14.5 multiplier is easy to remember and accurate enough for all real-world purposes.',
    faqs: [
      { q: 'How many PSI is 1 bar?', a: '1 bar equals 14.5038 PSI.' },
      { q: 'How do I convert bar to PSI quickly?', a: 'Multiply the bar value by 14.5. This is accurate to within 0.03%.' },
      { q: 'What bar pressure is 35 PSI?', a: '35 PSI equals approximately 2.41 bar. Divide PSI by 14.5038 to convert.' },
      { q: 'Is bar or PSI more common for tire pressure?', a: 'PSI is standard in the US. Bar is common in Europe and on European vehicles. Most modern cars list both on the door jamb sticker.' },
    ],
    relatedLinks: [
      { label: 'Bar to PSI Converter', path: '/pressure/bar-to-psi' },
      { label: 'PSI to Bar Converter', path: '/pressure/psi-to-bar' },
      { label: 'Pressure Converter', path: '/pressure' },
    ],
  },
```

- [ ] **Step 3: Add articles 3–20**

For each article below, write the full blog post data object following the same schema used in articles 1–2. Generate ~1,000 words of quality prose across 3–4 H2 sections. Each article must include:
- `intro` paragraph with the answer stated immediately
- At least one `visual` field using the appropriate SVG component
- `faqs` with 3–5 Q&A items
- `relatedLinks` to the relevant converter pages

**Article 3** — `slug: 'how-big-is-1-hectare'`, tag: Context, date: 2026-05-20  
Sections: What Is a Hectare? → How Big Is 1 Hectare in Everyday Terms? (use SizeComparison with football pitch, city block, park) → Hectare vs Acre → Hectare vs Square Kilometer  
FAQ: [how many football fields, how many acres, how many sq meters, when to use hectares vs acres]  
Related: `/area/hectare-to-square-kilometer`, `/area/hectare-to-acre`, `/area`

**Article 4** — `slug: 'hectare-to-square-km'`, tag: How-To Guide, date: 2026-05-21  
Sections: The Formula → When to Use sq km vs Hectares → Real-World Examples (use ComparisonChart: country sizes in sq km)  
FAQ: [formula, how many hectares in 1 sq km, when is hectare used, quick conversion trick]  
Related: `/area/hectare-to-square-kilometer`, `/area/square-kilometer-to-hectare`, `/area`

**Article 5** — `slug: 'pounds-to-kilograms-complete-guide'`, tag: How-To Guide, date: 2026-05-22  
Sections: The Exact Formula → Quick Reference Table (list: 100–300 lb in 10 lb increments) → Body Weight Conversion → Cooking and Shipping Use Cases (use StepDiagram: how to convert lbs to kg in 3 steps)  
FAQ: [formula, 150 lbs in kg, 200 lbs in kg, why the world uses kg, quick mental shortcut]  
Related: `/weight/pound-to-kilogram`, `/weight/kilogram-to-pound`, `/weight`

**Article 6** — `slug: 'how-many-steps-is-1-km'`, tag: Context, date: 2026-05-23  
Sections: The Answer → Why Step Count Varies → km vs Miles in Fitness → Converting Distance to Steps (use ComparisonChart: 5K / 10K / half-marathon step counts)  
FAQ: [steps in 1 km, steps in 1 mile, how many km in 10000 steps, average step length]  
Related: `/length/kilometer-to-mile`, `/length/mile-to-kilometer`, `/length`

**Article 7** — `slug: 'celsius-to-fahrenheit-quick-reference'`, tag: Quick Reference, date: 2026-05-24  
Sections: The Formula (both directions) → Reference Table (list: -40 to 100°C in key increments) → Anchor Points to Memorize (use ComparisonChart: freezing / body temp / boiling in both scales) → Common Weather Temperatures  
FAQ: [formula, 37°C in F, 100°F in C, why US uses Fahrenheit, exact zero points]  
Related: `/temperature/celsius-to-fahrenheit`, `/temperature/fahrenheit-to-celsius`, `/temperature`

**Article 8** — `slug: 'inches-to-cm-chart-clothes-height-screens'`, tag: Quick Reference, date: 2026-05-25  
Sections: The Formula → Height Reference Table (list: 5'0" – 6'5" in inches and cm) → Screen Sizes in Inches vs cm → Clothing Size Charts (use ComparisonChart: common clothing measurements)  
FAQ: [formula, 6 feet in cm, 32 inch TV in cm, how to measure inseam in cm, 5'9" in cm]  
Related: `/length/inch-to-centimeter`, `/length/centimeter-to-inch`, `/length`

**Article 9** — `slug: 'what-is-a-kilowatt-hour'`, tag: Context, date: 2026-05-26  
Sections: What a kWh Actually Means → Everyday kWh Examples (use ComparisonChart: fridge/TV/EV car per day) → kWh on Your Electricity Bill → Joules vs kWh  
FAQ: [what is 1 kWh, how many kWh does a home use per day, cost of 1 kWh, kWh vs watts]  
Related: `/energy/kilowatt-hour-to-joule`, `/energy/joule-to-kilowatt-hour`, `/energy`

**Article 10** — `slug: 'horsepower-vs-kw-vs-ps'`, tag: Context, date: 2026-05-27  
Sections: Three Units Same Thing → The Conversion Table (list: 100–500 hp in hp/kW/PS) → Why PS Exists → Which Unit Should You Use? (use ComparisonChart: famous car hp/kW values)  
FAQ: [1 hp in kW, difference hp vs PS, 100 kW in hp, why Europe uses kW, electric car kW vs hp]  
Related: `/power/horsepower-to-watt`, `/power/kilowatt-to-horsepower`, `/power`

**Article 11** — `slug: 'liters-to-gallons-us-vs-uk'`, tag: Context, date: 2026-05-28  
Sections: US Gallon vs UK Gallon → The Conversion Formulas → Real-World Examples (fuel tanks, beverages) → Why Two Gallons? (use ComparisonChart: US gallon / UK gallon / liter in mL)  
FAQ: [US gallons to liters, UK gallons to liters, how many liters in a gallon, which gallon does Canada use]  
Related: `/volume/liter-to-gallon`, `/volume/gallon-to-liter`, `/volume`

**Article 12** — `slug: 'how-to-read-tire-pressure-bar-psi-kpa'`, tag: Context, date: 2026-05-29  
Sections: Three Units One Measurement → Where to Find Your Car's Recommended Pressure → How to Read a Gauge → Seasonal Pressure Changes (use StepDiagram: finding your car's recommended pressure)  
FAQ: [how to read bar pressure, what do tire pressure numbers mean, when to check pressure, cold vs hot tire pressure]  
Related: `/pressure/bar-to-psi`, `/pressure/kilopascal-to-psi`, `/pressure`

**Article 13** — `slug: 'joules-to-calories-food-energy'`, tag: Context, date: 2026-05-30  
Sections: Joule vs Calorie — What's the Difference? → Food Energy: kcal vs kJ → Reference Table (list: common foods in kcal and kJ) → Energy in Exercise (use ComparisonChart: running/cycling/swimming kcal per hour)  
FAQ: [1 calorie in joules, kcal vs cal, how many joules in 2000 kcal, why nutrition labels use kJ]  
Related: `/energy/joule-to-kilocalorie`, `/energy/kilocalorie-to-joule`, `/energy`

**Article 14** — `slug: 'mpg-to-l100km-eu-vs-us-fuel-economy'`, tag: How-To Guide, date: 2026-05-31  
Sections: Why MPG and L/100km Go Opposite Directions → The Conversion Formula → Reference Table (list: 20–50 MPG in L/100km) → Real-World Examples (use ComparisonChart: popular car MPG vs L/100km)  
FAQ: [formula, 30 MPG in L/100km, 7 L/100km in MPG, which is more fuel efficient, US vs UK MPG]  
Related: `/fuel-economy/mile-per-gallon-to-liter-per-100km`, `/fuel-economy/liter-per-100km-to-mile-per-gallon`, `/fuel-economy`

**Article 15** — `slug: 'metric-vs-imperial-cheat-sheet'`, tag: Quick Reference, date: 2026-06-01  
Sections: Length (list: key conversions) → Weight (list: key conversions) → Volume (list: key conversions) → Temperature (list: key anchor points) → Quick Mental Tricks (use StepDiagram: mental math shortcuts for each category)  
FAQ: [why does the US use imperial, metric vs imperial which is easier, countries that use imperial, how to quickly convert]  
Related: `/length`, `/weight`, `/temperature`, `/volume`

**Article 16** — `slug: 'mars-climate-orbiter-crash'`, tag: Conversion Fail, date: 2026-06-02  
Sections: The Mission → The Mistake → The Aftermath → Lessons for Engineers (use StepDiagram: timeline of events)  
FAQ: [what caused the crash, how much did it cost, which units were confused, what changed after]  
Related: `/length/foot-to-meter`, `/length/meter-to-foot`, `/weight`

```js
  {
    slug: 'mars-climate-orbiter-crash',
    title: 'The Mars Climate Orbiter Crash — A $327M Unit Mistake',
    tag: 'Conversion Fail',
    date: '2026-06-02',
    description: 'How a unit conversion error between metric and imperial destroyed NASA\'s Mars Climate Orbiter in 1999 — and what engineers learned from a $327 million mistake.',
    intro: 'On September 23, 1999, NASA\'s Mars Climate Orbiter fired its main engine to enter orbit around Mars — and was never heard from again. The spacecraft, which had traveled 655 million kilometers over 10 months, burned up in the Martian atmosphere because one engineering team had used imperial units while the other used metric. The cost: $327.6 million and a lost mission.',
    sections: [
      {
        heading: 'The Mission',
        paragraphs: [
          'The Mars Climate Orbiter was designed to study Martian weather patterns and act as a communications relay for the Mars Polar Lander, which was to follow. It launched on December 11, 1998 aboard a Delta II rocket from Cape Canaveral — a textbook launch that gave no hint of the problem already embedded in the software.',
          'For the next 286 days, the spacecraft traveled flawlessly. Navigation teams tracked it using small thruster firings. The spacecraft reported its position and orientation. Ground teams at Lockheed Martin\'s Astronautics division in Denver sent corrective commands. Everything appeared normal.',
          'It was not until the final approach to Mars that the accumulated error became visible — and by then it was too late.',
        ],
      },
      {
        heading: 'The Mistake',
        paragraphs: [
          'The root cause was a mismatch in units between two software modules. Lockheed Martin\'s navigation software, called SM_FORCES, calculated thruster force data in imperial units: pound-force seconds per meter (lbf·s). NASA\'s trajectory software expected those values in SI units: newton-seconds (N·s). No conversion was performed. No alarm was triggered.',
          '1 pound-force second equals 4.44822 newton-seconds. So every thruster firing was reported as roughly 4.45 times weaker than it actually was. Over 286 days of daily corrections, this discrepancy pushed the spacecraft roughly 170 kilometers off course — enough to send it into the thin upper atmosphere instead of a stable orbit.',
          'The error was detectable. Navigation engineers had flagged anomalies in the trajectory data months earlier, noting that the spacecraft was tracking slightly off its predicted course. The warning was not escalated. The handoff between engineering teams — one using imperial, one using metric — was never audited.',
        ],
        visual: {
          type: 'StepDiagram',
          props: {
            label: 'How the error accumulated over 286 days',
            steps: [
              { title: 'Thruster data generated', description: 'Lockheed Martin software outputs force in pound-force seconds (lbf·s)' },
              { title: 'No unit conversion', description: 'NASA\'s system reads the value as newton-seconds — 4.45× too small' },
              { title: 'Correction underfired', description: 'Each daily thruster correction is weaker than intended' },
              { title: 'Trajectory drifts', description: 'After 286 days, cumulative error reaches ~170 km off course' },
              { title: 'Atmospheric entry', description: 'Orbiter skims too deep into Mars atmosphere and disintegrates' },
            ],
          },
        },
      },
      {
        heading: 'The Aftermath',
        paragraphs: [
          'The official investigation concluded within weeks. The root cause was unambiguous: a unit mismatch between two software components at a system interface boundary. The failure review board called it "a process failure" — not a software bug in the traditional sense, but a failure of coordination between two organizations that assumed compatibility without verifying it.',
          'The Mars Polar Lander, which had been counting on the Orbiter for communications relay, launched anyway and was lost during its own landing in December 1999. The combined loss of both spacecraft ended NASA\'s initial Mars program, which had been conceived as a series of affordable, faster-paced missions under the "faster, better, cheaper" initiative introduced by administrator Dan Goldin in the early 1990s.',
          'The total program loss was $327.6 million: $193.1 million for the Orbiter itself plus $234.1 million attributed to the combined missions. In inflation-adjusted terms, it remains one of the most expensive unit conversion errors in history.',
        ],
      },
      {
        heading: 'What Engineers Learned',
        paragraphs: [
          'The investigation board recommended mandatory unit specification at all software interface boundaries — any value passed between two systems must carry an explicit unit label. This became standard practice in aerospace software development and influenced broader engineering documentation standards.',
          'The SI unit system (metric) is now mandated for all NASA science and engineering calculations. Contracts with external vendors include explicit unit requirements and verification steps. Interface control documents — specifications that define exactly what each software module sends and receives — now include unit requirements as a first-class field.',
          'The orbiter\'s loss also reinforced the value of independent verification. The navigation anomalies that appeared in the data months before the failure were noticed but not acted on. Modern mission operations procedures include formal anomaly escalation protocols that require sign-off before an unexplained deviation can be closed as benign.',
        ],
      },
    ],
    conclusion: 'The Mars Climate Orbiter teaches a simple lesson that engineering culture sometimes needs an expensive reminder of: assumptions about units are not safe. The values in a dataset mean nothing without their units, and two teams using different unit systems will calculate different trajectories for the same spacecraft. The $327 million cost of this particular assumption bought a rule that is now universal in aerospace: unit, always.',
    faqs: [
      { q: 'What caused the Mars Climate Orbiter to crash?', a: 'A unit mismatch between two software modules. One output thruster data in pound-force seconds (imperial), the other expected newton-seconds (metric). No conversion was applied.' },
      { q: 'How much did the Mars Climate Orbiter mission cost?', a: 'The spacecraft and mission cost $193.1 million, with a combined program loss of $327.6 million when accounting for related missions.' },
      { q: 'What units were confused in the Mars Orbiter failure?', a: 'Pound-force seconds (lbf·s) were confused with newton-seconds (N·s). 1 lbf·s = 4.44822 N·s, so every thruster reading was off by a factor of roughly 4.45.' },
      { q: 'What changed after the Mars Orbiter failure?', a: 'NASA mandated metric (SI) units for all engineering calculations and introduced explicit unit requirements at all software interface boundaries. Interface control documents now require unit specifications.' },
      { q: 'Could the crash have been prevented?', a: 'Yes — navigation engineers had flagged trajectory anomalies months before the failure but did not escalate them. The unit mismatch was detectable from the data. Better anomaly escalation processes would have caught it.' },
    ],
    relatedLinks: [
      { label: 'Foot to Meter Converter', path: '/length/foot-to-meter' },
      { label: 'Meter to Foot Converter', path: '/length/meter-to-foot' },
      { label: 'Length Converter', path: '/length' },
      { label: 'Weight Converter', path: '/weight' },
    ],
  },
```

**Article 17** — `slug: 'columbus-miscalculation'`, tag: Conversion Fail, date: 2026-06-03  
Sections: Columbus's Route Bet → The Calculation Error → What He Got Wrong → The Lucky Continent in the Way  
FAQ: [what unit did Columbus confuse, how far off was he, would he have survived, what unit did he use]  
Related: `/length/mile-to-kilometer`, `/length/kilometer-to-mile`, `/length`

**Article 18** — `slug: 'gimli-glider-boeing-767'`, tag: Conversion Fail, date: 2026-06-04  
Sections: Air Canada Flight 143 → Pounds vs Kilograms of Fuel → The Glide to Gimli → How Both Pilots Survived  
FAQ: [what happened, which unit was confused, how did they calculate fuel, was anyone hurt]  
Related: `/weight/kilogram-to-pound`, `/weight/pound-to-kilogram`, `/weight`

**Article 19** — `slug: 'vasa-warship-disaster'`, tag: Conversion Fail, date: 2026-06-05  
Sections: The Flagship That Sank on Its First Day → Two Rulers on One Ship → Why the Asymmetry Was Never Caught → What Archaeology Revealed  
FAQ: [what sank the Vasa, what measurement units were used, when was it discovered, what happened to the crew]  
Related: `/length/foot-to-meter`, `/length/inch-to-centimeter`, `/length`

**Article 20** — `slug: 'hospital-medication-dose-error'`, tag: Conversion Fail, date: 2026-06-06  
Sections: When a Decimal Point Costs a Life → Micrograms vs Milligrams → How Hospitals Prevent Dose Errors Now → The Metric System in Medicine  
FAQ: [common medication errors, mcg vs mg confusion, how to prevent dose errors, why medicine uses metric]  
Related: `/weight/milligram-to-gram`, `/weight`, `/weight/microgram-to-milligram`

- [ ] **Step 4: Verify dev server**

Open `http://localhost:5173/blog` — confirm all articles with past dates appear, future-dated articles are absent. Open one article — confirm FAQ accordion works, visual renders, no console errors.

- [ ] **Step 5: Commit**

```bash
git add src/data/blogPosts.js
git commit -m "feat: blog sprint — 20 articles with drip dates 2026-05-18 to 2026-06-06"
```

---

## Task 7: VALUE_ENRICHMENT in pairContent.js

**Files:**
- Modify: `src/data/pairContent.js`

- [ ] **Step 1: Add VALUE_ENRICHMENT export**

After the last existing export in `pairContent.js`, add:

```js
/**
 * Enrichment data for value-specific pages.
 * Key: "category|from|to"
 * getContext(value, result) → string sentence
 * faqs(value, result) → [{q, a}]
 * getRelated(value) → array of 5 nearby numeric values
 * scale → ScaleDiagram props (min, max, unit, markers)
 * commonValues → 5 values to link from generic pair page
 */
export const VALUE_ENRICHMENT = {
  'weight|pound|kilogram': {
    formula: 'kg = lb ÷ 2.205',
    formulaNote: 'Divide pounds by 2.205 to get kilograms.',
    getContext: (value) => {
      let ref
      if (value < 10) ref = 'a bag of groceries'
      else if (value < 50) ref = 'a large dog'
      else if (value < 100) ref = 'a child or small adult'
      else if (value < 200) ref = 'an average adult'
      else if (value < 400) ref = 'a grand piano'
      else if (value < 1500) ref = 'a large horse'
      else if (value < 4000) ref = 'a mid-size car'
      else ref = 'a large commercial truck'
      return `${value.toLocaleString('en-US')} lbs is roughly the weight of ${ref}.`
    },
    faqs: (value, result) => [
      { q: `How do you convert ${value.toLocaleString('en-US')} pounds to kilograms?`, a: `Divide by 2.205: ${value.toLocaleString('en-US')} ÷ 2.205 = ${result.toLocaleString('en-US', { maximumFractionDigits: 2 })} kg.` },
      { q: `Is ${value.toLocaleString('en-US')} lbs heavy?`, a: `${value.toLocaleString('en-US')} lbs (${result.toLocaleString('en-US', { maximumFractionDigits: 2 })} kg) is about the weight of a mid-size car if above 3,000 lbs, or an adult if around 150–200 lbs.` },
      { q: `What is ${value.toLocaleString('en-US')} lbs in stones?`, a: `Divide by 14: ${(value / 14).toLocaleString('en-US', { maximumFractionDigits: 1 })} stone.` },
    ],
    getRelated: (value) => {
      const step = value < 50 ? 5 : value < 500 ? 50 : 500
      return [
        Math.max(1, value - step * 2),
        Math.max(1, value - step),
        value + step,
        value + step * 2,
        value + step * 5,
      ]
    },
    scale: {
      min: 0, max: 8000, unit: 'lb',
      markers: [
        { value: 10, label: 'groceries' },
        { value: 150, label: 'adult' },
        { value: 1500, label: 'horse' },
        { value: 3500, label: 'car' },
      ],
    },
    commonValues: [150, 180, 200, 3300, 5000],
  },

  'weight|kilogram|pound': {
    formula: 'lb = kg × 2.205',
    formulaNote: 'Multiply kilograms by 2.205 to get pounds.',
    getContext: (value) => {
      let ref
      if (value < 5) ref = 'a bag of sugar'
      else if (value < 25) ref = 'a large dog'
      else if (value < 90) ref = 'an average adult'
      else if (value < 180) ref = 'a grand piano'
      else if (value < 700) ref = 'a large horse'
      else if (value < 2000) ref = 'a mid-size car'
      else ref = 'a large commercial truck'
      return `${value.toLocaleString('en-US')} kg is roughly the weight of ${ref}.`
    },
    faqs: (value, result) => [
      { q: `How many pounds is ${value.toLocaleString('en-US')} kg?`, a: `${value.toLocaleString('en-US')} kg × 2.205 = ${result.toLocaleString('en-US', { maximumFractionDigits: 2 })} lbs.` },
      { q: `Is ${value.toLocaleString('en-US')} kg a healthy weight?`, a: `Weight health depends on height (BMI) and body composition. ${value.toLocaleString('en-US')} kg is ${result.toLocaleString('en-US', { maximumFractionDigits: 1 })} lbs. Consult a doctor for personal advice.` },
    ],
    getRelated: (value) => {
      const step = value < 25 ? 2 : value < 200 ? 10 : 100
      return [
        Math.max(1, value - step * 2),
        Math.max(1, value - step),
        value + step,
        value + step * 2,
        value + step * 5,
      ]
    },
    scale: {
      min: 0, max: 3000, unit: 'kg',
      markers: [
        { value: 5, label: 'sugar' },
        { value: 70, label: 'adult' },
        { value: 600, label: 'horse' },
        { value: 1500, label: 'car' },
      ],
    },
    commonValues: [70, 80, 100, 1500, 2000],
  },

  'length|inch|centimeter': {
    formula: 'cm = in × 2.54',
    formulaNote: 'Multiply inches by 2.54 to get centimeters.',
    getContext: (value) => {
      let ref
      if (value <= 1) ref = 'a thumb width'
      else if (value <= 6) ref = 'the width of a smartphone'
      else if (value <= 12) ref = 'a standard ruler'
      else if (value <= 24) ref = 'the width of a laptop screen'
      else if (value <= 72) ref = 'the height of an average adult (6 feet)'
      else ref = 'taller than most people'
      return `${value} inches is about ${ref}.`
    },
    faqs: (value, result) => [
      { q: `How many cm is ${value} inches?`, a: `${value} inches × 2.54 = ${result.toLocaleString('en-US', { maximumFractionDigits: 2 })} cm.` },
      { q: `What is ${value} inches in feet and inches?`, a: `${Math.floor(value / 12)} feet ${value % 12} inches.` },
    ],
    getRelated: (value) => {
      const step = value < 12 ? 1 : value < 72 ? 6 : 12
      return [
        Math.max(1, value - step * 2),
        Math.max(1, value - step),
        value + step,
        value + step * 2,
        value + step * 5,
      ]
    },
    scale: {
      min: 0, max: 120, unit: 'in',
      markers: [
        { value: 12, label: '1 foot' },
        { value: 36, label: '1 yard' },
        { value: 72, label: '6 feet' },
      ],
    },
    commonValues: [5, 12, 36, 60, 72],
  },

  'length|kilometer|mile': {
    formula: 'mi = km × 0.621371',
    formulaNote: 'Multiply kilometers by 0.621371 to get miles.',
    getContext: (value) => {
      let ref
      if (value < 1) ref = 'a short walk'
      else if (value < 5) ref = 'a morning jog'
      else if (value < 20) ref = 'a brisk cycling session'
      else if (value < 100) ref = 'a short road trip'
      else if (value < 500) ref = 'a drive between major cities'
      else ref = 'a cross-country journey'
      return `${value.toLocaleString('en-US')} km is about the distance of ${ref}.`
    },
    faqs: (value, result) => [
      { q: `How many miles is ${value.toLocaleString('en-US')} km?`, a: `${value.toLocaleString('en-US')} km × 0.621371 = ${result.toLocaleString('en-US', { maximumFractionDigits: 2 })} miles.` },
      { q: `How long does it take to drive ${value.toLocaleString('en-US')} km?`, a: `At 100 km/h (62 mph), ${value.toLocaleString('en-US')} km takes about ${(value / 100).toLocaleString('en-US', { maximumFractionDigits: 1 })} hour(s).` },
    ],
    getRelated: (value) => {
      const step = value < 10 ? 1 : value < 100 ? 10 : 100
      return [
        Math.max(1, value - step * 2),
        Math.max(1, value - step),
        value + step,
        value + step * 2,
        value + step * 5,
      ]
    },
    scale: {
      min: 0, max: 1000, unit: 'km',
      markers: [
        { value: 5, label: '5K run' },
        { value: 42, label: 'marathon' },
        { value: 400, label: 'city-to-city' },
      ],
    },
    commonValues: [1, 5, 10, 42, 100],
  },

  'temperature|fahrenheit|celsius': {
    formula: '°C = (°F − 32) × 5/9',
    formulaNote: 'Subtract 32, then multiply by 5/9.',
    getContext: (value) => {
      let desc
      if (value <= 32) desc = 'at or below freezing — water turns to ice at 32°F'
      else if (value < 50) desc = 'very cold — heavy coat weather'
      else if (value < 65) desc = 'cool — a light jacket is useful'
      else if (value < 80) desc = 'mild and comfortable'
      else if (value < 95) desc = 'warm — a hot summer day'
      else if (value < 105) desc = 'hot — stay hydrated'
      else if (value < 212) desc = 'extremely hot — above normal body temperature (98.6°F)'
      else desc = 'at or above the boiling point of water'
      return `${value}°F is ${desc}.`
    },
    faqs: (value, result) => [
      { q: `What is ${value}°F in Celsius?`, a: `(${value} − 32) × 5/9 = ${result.toLocaleString('en-US', { maximumFractionDigits: 1 })}°C.` },
      { q: `Is ${value}°F hot or cold?`, a: value >= 80 ? `${value}°F (${result.toFixed(1)}°C) is warm to hot — appropriate for summer weather.` : value <= 32 ? `${value}°F (${result.toFixed(1)}°C) is at or below freezing.` : `${value}°F (${result.toFixed(1)}°C) is cool to mild.` },
    ],
    getRelated: (value) => {
      const step = 5
      return [value - step * 2, value - step, value + step, value + step * 2, value + step * 4]
    },
    scale: {
      min: -40, max: 220, unit: '°F',
      markers: [
        { value: 32, label: 'freezing' },
        { value: 72, label: 'room temp' },
        { value: 98.6, label: 'body' },
        { value: 212, label: 'boiling' },
      ],
    },
    commonValues: [32, 72, 98, 100, 212],
  },

  'temperature|celsius|fahrenheit': {
    formula: '°F = °C × 9/5 + 32',
    formulaNote: 'Multiply by 9/5 (1.8), then add 32.',
    getContext: (value) => {
      let desc
      if (value <= 0) desc = 'at or below freezing'
      else if (value < 10) desc = 'cold — coat weather'
      else if (value < 20) desc = 'cool to mild'
      else if (value < 30) desc = 'comfortable and warm'
      else if (value < 40) desc = 'hot — a very warm summer day'
      else desc = 'extremely hot'
      return `${value}°C is ${desc}.`
    },
    faqs: (value, result) => [
      { q: `What is ${value}°C in Fahrenheit?`, a: `${value} × 1.8 + 32 = ${result.toLocaleString('en-US', { maximumFractionDigits: 1 })}°F.` },
      { q: `Is ${value}°C cold?`, a: value <= 10 ? `Yes, ${value}°C (${result.toFixed(1)}°F) is cold — you need a coat.` : value >= 30 ? `No, ${value}°C (${result.toFixed(1)}°F) is hot.` : `${value}°C (${result.toFixed(1)}°F) is mild.` },
    ],
    getRelated: (value) => {
      const step = 5
      return [value - step * 2, value - step, value + step, value + step * 2, value + step * 4]
    },
    scale: {
      min: -40, max: 100, unit: '°C',
      markers: [
        { value: 0, label: 'freezing' },
        { value: 20, label: 'room temp' },
        { value: 37, label: 'body' },
        { value: 100, label: 'boiling' },
      ],
    },
    commonValues: [-10, 0, 20, 37, 100],
  },

  'length|centimeter|inch': {
    formula: 'in = cm ÷ 2.54',
    formulaNote: 'Divide centimeters by 2.54 to get inches.',
    getContext: (value) => {
      let ref
      if (value <= 2.54) ref = 'about 1 inch — the width of a thumb'
      else if (value <= 15) ref = 'shorter than a standard ruler (30 cm)'
      else if (value <= 30) ref = 'about one foot (30.48 cm)'
      else if (value <= 100) ref = 'a small table dimension'
      else ref = 'a room-scale measurement'
      return `${value} cm is ${ref}.`
    },
    faqs: (value, result) => [
      { q: `How many inches is ${value} cm?`, a: `${value} ÷ 2.54 = ${result.toLocaleString('en-US', { maximumFractionDigits: 2 })} inches.` },
    ],
    getRelated: (value) => {
      const step = value < 30 ? 2 : value < 100 ? 10 : 25
      return [
        Math.max(1, value - step * 2),
        Math.max(1, value - step),
        value + step,
        value + step * 2,
        value + step * 5,
      ]
    },
    scale: {
      min: 0, max: 200, unit: 'cm',
      markers: [
        { value: 30, label: '1 foot' },
        { value: 91, label: '1 yard' },
        { value: 170, label: 'avg. height' },
      ],
    },
    commonValues: [10, 30, 60, 100, 170],
  },

  'length|foot|meter': {
    formula: 'm = ft × 0.3048',
    formulaNote: 'Multiply feet by 0.3048 to get meters.',
    getContext: (value) => {
      let ref
      if (value <= 1) ref = 'about one large step'
      else if (value <= 6) ref = 'about the height of an average adult'
      else if (value <= 30) ref = 'a small building height'
      else ref = 'a multi-story building'
      return `${value} feet is roughly ${ref}.`
    },
    faqs: (value, result) => [
      { q: `How many meters is ${value} feet?`, a: `${value} × 0.3048 = ${result.toLocaleString('en-US', { maximumFractionDigits: 3 })} meters.` },
    ],
    getRelated: (value) => {
      const step = value < 10 ? 1 : 5
      return [
        Math.max(1, value - step * 2),
        Math.max(1, value - step),
        value + step,
        value + step * 2,
        value + step * 5,
      ]
    },
    scale: {
      min: 0, max: 100, unit: 'ft',
      markers: [
        { value: 6, label: 'adult' },
        { value: 30, label: '3-story' },
        { value: 60, label: '6-story' },
      ],
    },
    commonValues: [5, 6, 10, 30, 100],
  },

  'length|mile|kilometer': {
    formula: 'km = mi × 1.60934',
    formulaNote: 'Multiply miles by 1.60934 to get kilometers.',
    getContext: (value) => {
      let ref
      if (value < 1) ref = 'a short walk'
      else if (value < 3) ref = 'a morning jog'
      else if (value < 10) ref = 'a brisk bike ride'
      else if (value < 50) ref = 'a short road trip'
      else ref = 'a long drive'
      return `${value.toLocaleString('en-US')} miles is about ${ref}.`
    },
    faqs: (value, result) => [
      { q: `How many km is ${value.toLocaleString('en-US')} miles?`, a: `${value.toLocaleString('en-US')} × 1.60934 = ${result.toLocaleString('en-US', { maximumFractionDigits: 2 })} km.` },
    ],
    getRelated: (value) => {
      const step = value < 10 ? 1 : value < 100 ? 10 : 100
      return [
        Math.max(1, value - step * 2),
        Math.max(1, value - step),
        value + step,
        value + step * 2,
        value + step * 5,
      ]
    },
    scale: {
      min: 0, max: 500, unit: 'mi',
      markers: [
        { value: 3.1, label: '5K' },
        { value: 26.2, label: 'marathon' },
        { value: 100, label: 'road trip' },
      ],
    },
    commonValues: [1, 5, 26, 100, 500],
  },

  'area|hectare|square_kilometer': {
    formula: 'sq km = ha ÷ 100',
    formulaNote: 'Divide hectares by 100 to get square kilometers.',
    getContext: (value) => {
      let ref
      if (value < 1) ref = 'smaller than a standard soccer pitch'
      else if (value < 5) ref = 'about the size of a city block'
      else if (value < 50) ref = 'a large park or golf course'
      else if (value < 500) ref = 'a small town\'s land area'
      else ref = 'a large agricultural region'
      return `${value.toLocaleString('en-US')} hectares is about ${ref}.`
    },
    faqs: (value, result) => [
      { q: `How many square kilometers is ${value.toLocaleString('en-US')} hectares?`, a: `${value.toLocaleString('en-US')} ÷ 100 = ${result.toLocaleString('en-US', { maximumFractionDigits: 3 })} km².` },
      { q: `How many acres is ${value.toLocaleString('en-US')} hectares?`, a: `${value.toLocaleString('en-US')} × 2.471 = ${(value * 2.471).toLocaleString('en-US', { maximumFractionDigits: 1 })} acres.` },
    ],
    getRelated: (value) => {
      const step = value < 10 ? 1 : value < 100 ? 10 : 100
      return [
        Math.max(1, value - step * 2),
        Math.max(1, value - step),
        value + step,
        value + step * 2,
        value + step * 5,
      ]
    },
    scale: {
      min: 0, max: 1000, unit: 'ha',
      markers: [
        { value: 1, label: 'city block' },
        { value: 50, label: 'golf course' },
        { value: 500, label: 'small town' },
      ],
    },
    commonValues: [1, 5, 10, 100, 500],
  },
}
```

- [ ] **Step 2: Commit**

```bash
git add src/data/pairContent.js
git commit -m "feat: add VALUE_ENRICHMENT map to pairContent.js (10 pairs)"
```

---

## Task 8: Extend ValueResult with enrichment rendering

**Files:**
- Modify: `src/components/ValueResult.jsx`
- Modify: `src/pages/PairPage.jsx`

- [ ] **Step 1: Update PairPage to pass enrichment props to ValueResult**

In `PairPage.jsx`, find the `<ValueResult ...>` JSX block and replace with:

```jsx
<ValueResult
  value={value}
  result={valueResult}
  fromSymbol={fromObj.symbol}
  toSymbol={toObj.symbol}
  fromLabel={fromLabel}
  toLabel={toLabel}
  category={category}
  from={from}
  to={to}
  segment={segment}
/>
```

- [ ] **Step 2: Rewrite ValueResult.jsx**

```jsx
import { Link } from 'react-router'
import ScaleDiagram from './visuals/ScaleDiagram.jsx'
import { VALUE_ENRICHMENT } from '../data/pairContent.js'

function fmtNum(n) {
  return parseFloat(n.toPrecision(6)).toLocaleString('en-US')
}

function ValueResult({ value, result, fromSymbol, toSymbol, fromLabel, toLabel, category, from, to, segment }) {
  const enrichment = VALUE_ENRICHMENT[`${category}|${from}|${to}`] ?? null

  const relatedValues = enrichment?.getRelated(value) ?? []
  const faqs = enrichment?.faqs(value, result) ?? []

  return (
    <div className="value-result">
      <h1>
        {fmtNum(value)} {fromSymbol} = {fmtNum(result)} {toSymbol}
      </h1>
      <p>Use the converter below to try other values.</p>

      {enrichment && (
        <div className="value-result__enrichment">
          <p className="value-result__context">{enrichment.getContext(value, result)}</p>

          <div className="value-result__formula">
            <code>{enrichment.formula}</code>
            <span>{enrichment.formulaNote}</span>
          </div>

          {enrichment.scale && (
            <ScaleDiagram
              value={value}
              unit={fromSymbol}
              min={enrichment.scale.min}
              max={enrichment.scale.max}
              markers={enrichment.scale.markers}
              label={`Where ${fmtNum(value)} ${fromLabel} sits`}
            />
          )}

          {relatedValues.length > 0 && (
            <div className="value-result__related">
              <h2>Related conversions</h2>
              <ul>
                {relatedValues.map((v) => (
                  <li key={v}>
                    <Link to={`/${segment}/${v}-${from.replace(/_/g, '-')}-to-${to.replace(/_/g, '-')}`}>
                      {fmtNum(v)} {fromLabel} to {toLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {faqs.length > 0 && (
            <div className="value-result__faqs cat-content__faq-list">
              {faqs.map(({ q, a }) => (
                <details key={q} className="cat-content__faq-item">
                  <summary className="cat-content__faq-q">{q}</summary>
                  <p className="cat-content__faq-a">{a}</p>
                </details>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ValueResult
```

- [ ] **Step 3: Add ValueResult CSS**

Open `src/components/Converter.css` (or create `src/components/ValueResult.css` if you prefer isolation) and add:

```css
.value-result__enrichment {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.value-result__context {
  color: var(--text);
  font-size: 1rem;
  line-height: 1.6;
}

.value-result__formula {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--code-bg);
  border-radius: 6px;
  font-size: 0.95rem;
}

.value-result__formula code {
  font-family: var(--mono);
  color: var(--accent);
  font-weight: 600;
}

.value-result__formula span {
  color: var(--text);
}

.value-result__related h2 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--text-h);
}

.value-result__related ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  list-style: none;
}

.value-result__related a {
  padding: 0.3rem 0.7rem;
  border: 1px solid var(--accent-border);
  border-radius: 4px;
  font-size: 0.875rem;
  color: var(--accent);
  text-decoration: none;
}

.value-result__related a:hover {
  background: var(--accent-bg);
}

.value-result__faqs {
  margin-top: 0.5rem;
}
```

If creating a separate `ValueResult.css`, import it at the top of `ValueResult.jsx`:
```jsx
import './ValueResult.css'
```

- [ ] **Step 4: Verify on dev server**

Open `http://localhost:5173/weight/3300-pound-to-kilogram` — confirm:
- H1 shows `3,300 lb = 1,496.86 kg`
- Context sentence renders below ("3,300 lbs is roughly the weight of a mid-size car.")
- Formula block shows `kg = lb ÷ 2.205`
- ScaleDiagram SVG renders
- Related conversions list appears (5 links)
- FAQ accordions work

- [ ] **Step 5: Add Playwright test**

In `tests/converter.spec.ts`, add:

```typescript
test('value enrichment: context sentence renders on pound-to-kilogram page', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`)
  await expect(page.getByText(/3,300 lbs is roughly the weight of/i)).toBeVisible()
})

test('value enrichment: formula block renders on pound-to-kilogram page', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`)
  await expect(page.getByText('kg = lb ÷ 2.205')).toBeVisible()
})

test('value enrichment: related links render on pound-to-kilogram page', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`)
  await expect(page.getByRole('heading', { name: /related conversions/i })).toBeVisible()
})
```

- [ ] **Step 6: Run tests**

```bash
npx playwright test --reporter=line
```

Expected: all existing tests pass + 3 new tests pass.

- [ ] **Step 7: Commit**

```bash
git add src/components/ValueResult.jsx src/components/ValueResult.css src/pages/PairPage.jsx tests/converter.spec.ts
git commit -m "feat: value-specific pages — enrichment block with context, formula, scale diagram, related links"
```

---

## Task 9: Internal linking

**Files:**
- Modify: `src/data/content.js`
- Modify: `src/pages/PairPage.jsx`

- [ ] **Step 1: Add value-specific links to content.js featuredPairs**

In `src/data/content.js`, update the `featuredPairs` arrays for `weight`, `length`, and `temperature`:

**weight** — append to existing featuredPairs:
```js
{ label: '3,300 lb → kg', path: '/weight/3300-pound-to-kilogram' },
{ label: '150 lb → kg', path: '/weight/150-pound-to-kilogram' },
{ label: '70 kg → lb', path: '/weight/70-kilogram-to-pound' },
{ label: '100 kg → lb', path: '/weight/100-kilogram-to-pound' },
```

**length** — append to existing featuredPairs:
```js
{ label: '5 km → miles', path: '/length/5-kilometer-to-mile' },
{ label: '10 km → miles', path: '/length/10-kilometer-to-mile' },
{ label: '170 cm → inches', path: '/length/170-centimeter-to-inch' },
{ label: '6 ft → meters', path: '/length/6-foot-to-meter' },
```

**temperature** — append to existing featuredPairs:
```js
{ label: '37°C → °F', path: '/temperature/37-celsius-to-fahrenheit' },
{ label: '100°F → °C', path: '/temperature/100-fahrenheit-to-celsius' },
{ label: '0°C → °F', path: '/temperature/0-celsius-to-fahrenheit' },
{ label: '20°C → °F', path: '/temperature/20-celsius-to-fahrenheit' },
```

- [ ] **Step 2: Add "Common values" block to PairPage**

In `PairPage.jsx`, import `VALUE_ENRICHMENT` from pairContent:
```jsx
import { generatePairContent, PAIR_META, VALUE_ENRICHMENT } from '../data/pairContent.js'
```

Then, inside `PairPage`, after the `const isValuePage = ...` line, add:

```jsx
const enrichment = !isValuePage ? (VALUE_ENRICHMENT[`${category}|${from}|${to}`] ?? null) : null
const commonValues = enrichment?.commonValues ?? []
```

Then, inside the JSX return, after the `<RelatedConverters ...>` component, add:

```jsx
{commonValues.length > 0 && (
  <section className="cat-content">
    <div className="cat-content__featured">
      <h2 className="cat-content__section-title">Common values</h2>
      <div className="cat-content__featured-grid">
        {commonValues.map((v) => {
          const res = (() => { try { return convert(v, from, to, category) } catch { return null } })()
          if (res === null) return null
          return (
            <Link
              key={v}
              to={`/${segment}/${v}-${from.replace(/_/g, '-')}-to-${to.replace(/_/g, '-')}`}
              className="cat-content__featured-link"
            >
              {fmtNum(v)} {fromObj?.symbol} = {fmtNum(res)} {toObj?.symbol}
            </Link>
          )
        })}
      </div>
    </div>
  </section>
)}
```

- [ ] **Step 3: Verify on dev server**

Open `/weight/pound-to-kilogram` — confirm "Common values" section shows 5 links (150 lb, 180 lb, 200 lb, 3300 lb, 5000 lb with computed results).

Open `/weight` — confirm the category page now shows value-specific links in "Popular conversions."

- [ ] **Step 4: Add Playwright test**

```typescript
test('internal linking: common values block on generic pair page', async ({ page }) => {
  await page.goto(`${BASE}/weight/pound-to-kilogram`)
  await expect(page.getByRole('heading', { name: /common values/i })).toBeVisible()
  const links = page.locator('a[href*="pound-to-kilogram"]')
  expect(await links.count()).toBeGreaterThan(1)
})
```

- [ ] **Step 5: Run tests**

```bash
npx playwright test --reporter=line
```

- [ ] **Step 6: Commit**

```bash
git add src/data/content.js src/pages/PairPage.jsx tests/converter.spec.ts
git commit -m "feat: internal linking — value-specific links in category pages + common values on pair pages"
```

---

## Task 10: Sitemap regeneration + deploy

**Files:**
- Modify: `public/sitemap.xml` (generated, not hand-edited)

- [ ] **Step 1: Regenerate sitemap**

```bash
node generate-sitemap.mjs
```

Expected output: line count increases to account for new blog post URLs.

- [ ] **Step 2: Verify sitemap includes new blog slugs**

```bash
grep "blog/" public/sitemap.xml | wc -l
```

Expected: 30+ (10 existing + 20 new).

- [ ] **Step 3: Commit and push**

```bash
git add public/sitemap.xml
git commit -m "chore: regenerate sitemap — 20 new blog posts"
git push origin main
```

- [ ] **Step 4: Manual post-deploy steps (human action required)**

After Cloudflare Pages deploys (2–3 minutes):

1. **GSC sitemap resubmit:** Go to [Google Search Console](https://search.google.com/search-console) → Sitemaps → Submit `https://convert-fast.com/sitemap.xml`
2. **GSC "Validate fix":** Open the ps-to-horsepower soft 404 issue and click "Validate fix"
3. **AdSense resubmission:** Go to [AdSense](https://adsense.google.com) → Sites → convert-fast.com → Request review

---

## Self-Review

**Spec coverage:**
- Section 1 (Blog Sprint, 20 articles): ✅ Task 5 + Task 6
- Section 2 (Value-specific enrichment): ✅ Task 7 + Task 8 (10 pairs; scale up as GSC data grows)
- Section 3 (Internal linking): ✅ Task 9
- Section 4 (SVG visual library): ✅ Tasks 1–4
- Section 5 (Technical fixes): ✅ Task 10 (GSC, AdSense, ads.txt already verified)

**Gaps:**
- VALUE_ENRICHMENT covers 10 pairs, not 50. The top 10 pairs cover ~80% of GSC query volume for value-specific pages. Expand after GSC data confirms which additional pairs get traffic.
- Blog articles 3–15, 17–20 have structure defined; prose must be generated during Task 6 Step 3.
- `SizeComparison` component is wired up but not used in blog articles yet — article 3 (hectare) and article 5 (pounds guide) are the natural first uses.

**Type consistency:** `VALUE_ENRICHMENT` keys use `category|from|to` matching `PairPage`'s `category`, `from`, `to` variables exactly. `getRelated` returns plain numbers used directly as URL path prefix. `faqs` is a function in `VALUE_ENRICHMENT` but a static array in `blogPosts.js` — consistent within each context.
