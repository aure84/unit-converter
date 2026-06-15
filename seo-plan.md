# SEO Sprint Plan — convert-fast.com
Date: 2026-04-26
GSC baseline: 0 clicks, 229 impressions, avg. position 62.1

---

## SEO Audit — 2026-05-24

### What was checked and what was fixed

#### 1. robots.txt
- Status: exists and correct.
- `User-agent: *` / `Allow: /` / `Sitemap: https://convert-fast.com/sitemap.xml` all present.
- No fix needed.

#### 2. index.html base meta tags
- `<html lang="en">` — present, correct.
- `<meta charset="UTF-8">` — present, correct.
- `<meta name="viewport">` — present, correct.
- `<title>` — present, correct.
- **FIXED:** Added `<meta name="description">` fallback. Was missing. Non-JS crawlers (Bing, older bots) and pre-render scenarios need a static fallback. Added: "Free online unit converter. Instantly convert length, weight, temperature, volume, area, speed, time, and data storage — no sign-up required."

#### 3. SEOMeta component (`src/components/SEOMeta.jsx`)
- All required tags present and correct:
  - `<title>` via react-helmet-async
  - `<meta name="description">`
  - `<link rel="canonical">`
  - `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`, `og:image:width`, `og:image:height`
  - `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`
  - JSON-LD injection via `<script type="application/ld+json">` — supports array input
- `noindex` prop is available but opt-in only — not applied to any monetized page.
- No fix needed.

#### 4. Home page meta (`src/pages/HomePage.jsx`)
- Title: "Unit Converter | Convert Fast" — 30 chars, within limit.
- Meta description: "Free online unit converter. Instantly convert length, weight, temperature, volume, area, speed, time, and data storage — no sign-up required." — 143 chars, keyword-rich, within 160.
- H1: "Unit Converter" — present, keyword matches primary intent.
- Intro section: 3 paragraphs covering all major categories, real-world examples, conversion formula mention. Good for E-E-A-T.
- No fix needed.

#### 5. Blog posts structured data (`src/data/blogPosts.js` + `src/pages/BlogPostPage.jsx`)
- All blog posts have: `slug`, `title`, `date`, `description`, `tag`, `intro`, `sections`, `conclusion`, `relatedLinks`.
- BlogPostPage generates Article JSON-LD with: `headline`, `description`, `datePublished`, `dateModified` (set to `post.date`), `author` (Organization), `url`, `publisher`, `mainEntityOfPage`.
- FAQPage JSON-LD generated when `post.faqs` array is present — passed as array to SEOMeta so both schemas render.
- **Note:** `dateModified` is always set to `post.date` (same as `datePublished`). This is acceptable for now. When posts are updated, a `dateModified` field should be added to blogPosts.js entries.
- No fix needed.

#### 6. Category pages (`src/pages/CategoryPage.jsx`)
- WebApplication JSON-LD: `url` set to `canonical` which is `${SITE_URL}/${segment}` — correct canonical URL per category.
- FAQPage JSON-LD: generated from `categoryContent[category].faq` array when present. Passed as array alongside WebApplication JSON-LD to SEOMeta.
- Both schemas render correctly when FAQ data exists.
- No fix needed.

#### 7. PairPage (`src/pages/PairPage.jsx`)
- **noindex is NOT present** — the previous critical blocker documented in Sprint 1 has been resolved. All pair pages are indexable.
- WebApplication + FAQPage JSON-LD both rendered. FAQPage includes value-specific FAQ items on value pages (e.g. /weight/3300-pound-to-kilogram).
- Title and description are dynamically generated per pair; value-specific pages get answer-first titles (e.g. "3,300 Pound to Kilogram — 1,496.85 Kilogram | Convert Fast").
- No fix needed.

#### 8. Sitemap (`public/sitemap.xml`)
- Homepage: present at `https://convert-fast.com/` with priority 1.0. Correct.
- Blog index: present at `/blog` with priority 0.8. Correct.
- Blog posts: all blog posts present with priority 0.7 and `changefreq: monthly`. Correct.
- Category pages: all 16+ categories present with priority 0.8. Correct.
- Pair pages: all converter pairs present with priority 0.6. Correct.
- Value-specific pages: present (weight/pound-to-kilogram, weight/kilogram-to-pound, length/kilometer-to-mile, length/inch-to-centimeter, length/centimeter-to-inch, temperature/fahrenheit-to-celsius series). Correct.
- Priorities are correctly tiered: 1.0 (home) → 0.8 (category + blog index) → 0.7 (blog posts) → 0.6 (pair + value pages).
- No fix needed.

---

## KRITIKUS BLOKKOLÓ: noindex a PairPage-en

**`PairPage.jsx` line 130: `<SEOMeta ... noindex />`**

Ez az egyetlen legnagyobb SEO probléma. A ~680 pair URL (a 701-ből) indexelhetetlen.
A Google csak a category oldalakat (/pressure, /energy stb.) és a blog posztokat indexeli.
A GSC megjelenések azért vannak, mert a Google valahogyan crawlol (pl. blog linkeken át),
de nem indexeli ezeket az oldalakat — ezért a pozíció 62, nem 6.

**Fix: távolítsd el a `noindex` prop-ot a PairPage.jsx-ből.**
Ez önmagában a legnagyobb pozíciójavulást hozza az összes pair URL-en.

**✅ COMPLETE 2026-05-24** — noindex eltávolítva, PairPage indexelhető.

---

## SPRINT 1 — Technikai alap (1-2 nap)

### 1. noindex eltávolítása — PairPage.jsx

Fájl: `/Volumes/SLT/Claude Code/unit-converter/src/pages/PairPage.jsx`

Változtatás: töröld a `noindex` prop-ot a SEOMeta hívásból (line 130).

Utána várj 1-2 hetet, amíg a Google újra crawlol.

**✅ COMPLETE** — noindex eltávolítva.

### 2. barg mint alias hozzáadása

A GSC-ben "barg to psi" szerepel (4 megjelenés), de a site csak `bar-to-psi`-t ismer.
Barg (bar gauge) = bar a gázipari terminológiában. Két lehetőség:
- Adj hozzá egy `/pressure/barg-to-psi` redirect-et → `/pressure/bar-to-psi`
- Vagy adj hozzá FAQ-ot a `/pressure/bar-to-psi` PairPage-re: "What is the difference between bar and barg?"

Fájl: `/Volumes/SLT/Claude Code/unit-converter/src/data/pairContent.js`
Helye: PAIR_EXTRA_FAQ a bar+psi párhoz.

### 3. gallon-to-gram hiányzó oldal

A "gallon to gram" lekérdezés (3 megjelenés) nem egyenes konverzió —
gallonból grammba konvertálni csak sűrűséggel lehetséges (víznél: 1 gallon = 3785 g).
Ez az IngredientPage logikájához hasonló, de általánosabb.

Rövid távú megoldás: a `/volume/gallon-to-gram` URL nem létezik (volume és weight kategória-váltás kellene).
Blog cikk a quick win: "How to Convert Gallons to Grams" — magyarázza a logikát, linkeli a gallon-to-liter és a liter-to-gram konvertereket.

---

## SPRINT 2 — Title/Meta/H1 optimalizálás a top lekérdezésekre (2-3 nap)

### Céloldalak a GSC top query-khez

#### "bar to pounds per square inch" (11 megjelenés)

URL: `/pressure/bar-to-psi`
Jelenlegi title (generált): "Bar to Pound per sq. inch Converter | Convert Fast"
Probléma: "Pound per sq. inch" rövidítés — a user "pounds per square inch"-et keres.

Javasolt title: "Bar to PSI Converter — Bar to Pounds per Square Inch"
Javasolt meta: "Convert bar to PSI (pounds per square inch) instantly. 1 bar = 14.5038 psi. Free pressure converter with reference table."
H1 (jelenleg auto): "Bar to Pound per sq. inch Converter"
Javasolt H1: "Bar to PSI Converter"

Változtatáshoz módosítani kell a PairPage.jsx title/h1 generálási logikáját,
vagy unit label-t kell frissíteni a units.js-ben: `psi` label legyen "PSI (pounds per square inch)".

#### "joule in calorie" + "how many calories in one joule" (összesen 9 megjelenés)

URL: `/energy/joule-to-calorie`
Jelenlegi title (generált): "Joule to Calorie Converter | Convert Fast"
Jelenlegi meta: "Convert Joule to Calorie instantly. Free online Energy converter."

Javasolt title: "Joule to Calorie Converter | How Many Calories in a Joule?"
Javasolt meta: "Convert joules to calories instantly. 1 joule = 0.239 calories. Answer: 1 calorie = 4.184 joules. Free energy converter."
Javasolt H1: "Joule to Calorie Converter"

A meta description tartalmazza a konkrét választ ("1 joule = 0.239 cal") — ez növeli a CTR-t
mert featured snippet-szerű választ ad a SERP-ben.

Fontos: ez az URL indexelhetetlen a noindex miatt. A fenti fix után érvényes.

#### "barg to psi" (4 megjelenés)

Nincs dedikált URL. A `/pressure/bar-to-psi` oldalon FAQ-ot kell hozzáadni:
"What is barg and how does it differ from bar?"

#### "gallon to gram" (3 megjelenés)

Nincs közvetlen converter URL. Blog cikk a megoldás (lásd Sprint 1/3).

---

## SPRINT 3 — Belső linkelés javítása (1-2 nap)

### Jelenlegi hiányosságok

1. **Blog → pair konverter linkek hiányoznak a fő blokkokban.**
   A relatedLinks adatok megvannak blogPosts.js-ben, de ellenőrizni kell,
   hogy minden blog cikk linkeli-e a konkrét pair URL-t (nem csak a category page-t).

   Prioritás:
   - `/blog/psi-to-bar` → linkelje: `/pressure/bar-to-psi` ÉS `/pressure/psi-to-bar`
   - `/blog/joules-to-calories` → linkelje: `/energy/joule-to-calorie` ÉS `/energy/calorie-to-joule`

2. **Category page → top pair linkek hiányoznak.**
   A `/pressure` oldal nem linkeli explicit a legjobb pair-eket (bar-to-psi, psi-to-bar).
   A `/energy` oldal nem linkeli a joule-to-calorie, joule-to-kilocalorie párokat.

   Megoldás: a `categoryContent` adatstruktúrába adj `featuredPairs` tömböt,
   amit a CategoryContent komponens kirendel "Popular conversions" szekcióként.

3. **Pair oldalak egymást nem linkeli.**
   A `/energy/joule-to-calorie` oldal nem linkeli a `/energy/joule-to-kilocalorie`-t.
   A PairContent komponensbe kell "Related converters" szekció.

### Javasolt linkstruktúra (priority pairs)

```
/blog/psi-to-bar
  → /pressure/bar-to-psi
  → /pressure/psi-to-bar
  → /pressure (category)

/blog/joules-to-calories
  → /energy/joule-to-calorie
  → /energy/joule-to-kilocalorie
  → /energy/calorie-to-joule
  → /energy (category)

/pressure (category)
  → /pressure/bar-to-psi        (featured)
  → /pressure/psi-to-bar        (featured)
  → /pressure/bar-to-atmosphere (secondary)
  → /blog/psi-to-bar

/energy (category)
  → /energy/joule-to-calorie    (featured)
  → /energy/joule-to-kilocalorie (featured)
  → /energy/kilocalorie-to-joule (secondary)
  → /blog/joules-to-calories
```

---

## SPRINT 4 — Content gaps (1-2 blog cikk)

### Hiányzó blog cikkek a GSC lekérdezésekhez

| Lekérdezés | Jelenlegi helyzet | Javasolt új tartalom |
|---|---|---|
| "how many calories in one joule" | `/blog/joules-to-calories` létezik, de ellenőrizni kell, hogy explicitenanswereli-e | Ha nem, frissíteni kell az intro-t: "1 joule = 0.239 calories" az első bekezdésben |
| "gallon to gram" | Nincs tartalom | Új blog cikk: `/blog/gallons-to-grams` — sűrűség-alapú konverzió, víz/tej/üzemanyag példák |
| "barg to psi" | Nincs tartalom | PAIR_EXTRA_FAQ a bar-to-psi oldalon elegendő; blog cikk csak ha pozíció nem javul |

### Frissíteni kell

- `/blog/joules-to-calories`: az intro jelenlegi szövegét ellenőrizni kell —
  tartalmazza-e az "1 joule = 0.239 calories" választ az első 100 karakterben?
  Ha nem, módosítani kell, mert ez a featured snippet feltétele.

---

## Prioritás összefoglaló

| Sorrend | Feladat | Hatás | Effort |
|---|---|---|---|
| 1 | noindex törlése PairPage-ből | Kritikus — 680 URL indexelése | 5 perc |
| 2 | bar-to-psi title/meta fix | Quick win — 11 megjelenés | 30 perc |
| 3 | joule-to-calorie title/meta fix | Quick win — 9 megjelenés | 30 perc |
| 4 | barg FAQ hozzáadása bar-to-psi-hoz | Közepes — 4 megjelenés lefedi | 1 óra |
| 5 | Blog belső linkek javítása | Hosszú távú — authority flow | 1 óra |
| 6 | Category → pair featured links | Hosszú távú — crawlability | 2 óra |
| 7 | gallons-to-grams blog cikk | Új forgalom | 3 óra |
| 8 | joules-to-calories blog frissítés | Featured snippet esély | 30 perc |
