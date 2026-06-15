# Blog Sprint Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 9 new blog posts to `src/data/blogPosts.js` to increase organic traffic and strengthen AdSense review signals.

**Architecture:** Pure data addition — append 9 new objects to the `blogPosts` array in `src/data/blogPosts.js`. No new components, routes, or infrastructure. Existing rendering, sitemap, and JSON-LD handle new posts automatically.

**Tech Stack:** React 19 + Vite SPA, React Router v7, Cloudflare Pages. Local dev: `cd "/Volumes/SLT/Claude Code/unit-converter" && npm run dev`. Deploy: `git push origin main`.

---

## File Map

| File | Action |
|---|---|
| `src/data/blogPosts.js` | Modify — append 9 post objects |
| `public/sitemap.xml` | Regenerate via `npm run generate-sitemap` |

---

## Task 1: Posts 1–3 (inches-to-cm, oz-to-grams, feet-to-inches)

**Files:**
- Modify: `src/data/blogPosts.js`

- [ ] **Step 1: Append posts 1–3 to blogPosts array**

Open `src/data/blogPosts.js`. Before the closing `]` of the `blogPosts` array, append:

```js
  {
    slug: 'inches-to-cm',
    title: 'How to Convert Inches to Centimeters (and Back)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Learn how to convert inches to centimeters with the exact formula, height reference table, and tips for screen sizes and everyday measurements.',
    intro: 'Inches and centimeters are the two most common units for measuring short distances in everyday life — height, screen sizes, rulers, clothing measurements. The United States uses inches; almost everywhere else uses centimeters. This guide gives you the exact conversion, a height reference table, and practical tips for the most common use cases.',
    sections: [
      {
        heading: 'What Is an Inch?',
        paragraphs: [
          'An inch (in or ″) is an imperial unit of length equal to exactly 2.54 centimeters. It is the standard unit for short measurements in the United States — height, screen sizes, pipe diameters, and most hardware.',
          'The inch has been defined in terms of the metric system since 1959, when the international yard and pound agreement fixed 1 inch = 2.54 cm exactly. Before that, slight variations existed between the US and UK definitions.',
        ],
      },
      {
        heading: 'What Is a Centimeter?',
        paragraphs: [
          'A centimeter (cm) is one-hundredth of a meter. It is the standard unit for short lengths in the metric system — height, clothing sizes, room dimensions, and most everyday measurements outside the United States.',
          'One centimeter is roughly the width of a fingernail. A standard school ruler is 30 cm long, which equals about 11.8 inches.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 inch = 2.54 centimeters (exact, by international definition).',
          'To convert inches to centimeters: multiply by 2.54. For example, 6 inches × 2.54 = 15.24 cm.',
          'To convert centimeters to inches: divide by 2.54 (or multiply by 0.393701). For example, 30 cm ÷ 2.54 = 11.81 inches.',
          'Mental shortcut: multiply inches by 2.5 for a quick estimate. The result is about 1.6% low — close enough for casual use.',
        ],
      },
      {
        heading: 'Height Conversion Reference',
        paragraphs: ['Common heights in feet/inches and centimeters:'],
        list: [
          '5\'0″ (60 in) = 152.4 cm',
          '5\'4″ (64 in) = 162.6 cm',
          '5\'6″ (66 in) = 167.6 cm',
          '5\'8″ (68 in) = 172.7 cm',
          '5\'10″ (70 in) = 177.8 cm',
          '6\'0″ (72 in) = 182.9 cm',
          '6\'2″ (74 in) = 187.9 cm',
          '6\'4″ (76 in) = 193.0 cm',
        ],
      },
      {
        heading: 'Screen Size and Tech Measurements',
        paragraphs: [
          'Screen sizes are always measured in inches diagonally — even in countries that otherwise use centimeters. A 27-inch monitor measures 68.6 cm diagonally. A 65-inch TV is 165.1 cm.',
          'Other tech measurements in inches: hard drive disk diameter (3.5″ or 2.5″), camera sensor sizes, paper sizes (US Letter is 8.5 × 11 inches = 21.6 × 27.9 cm).',
          'Clothing: US measurements for waist, chest, and inseam are in inches. EU clothing uses centimeters. A 32-inch waist is 81.3 cm.',
        ],
      },
      {
        heading: 'Converting Feet and Inches to Centimeters',
        paragraphs: [
          'To convert a height given in feet and inches (e.g., 5\'9″) to centimeters:',
          '1. Convert feet to inches: 5 × 12 = 60 inches.',
          '2. Add the remaining inches: 60 + 9 = 69 inches total.',
          '3. Multiply by 2.54: 69 × 2.54 = 175.3 cm.',
        ],
      },
    ],
    conclusion: '1 inch = 2.54 cm exactly. To convert, multiply inches by 2.54 — or divide centimeters by 2.54 for the reverse. For screen sizes, always use the exact value. For quick mental math, multiplying by 2.5 gives a result within 1.6%. Use our free length converter for any value instantly.',
    relatedLinks: [
      { label: 'Inches to Centimeters Converter', path: '/length/inch-to-centimeter' },
      { label: 'Centimeters to Inches Converter', path: '/length/centimeter-to-inch' },
      { label: 'Length Converter', path: '/length' },
    ],
  },

  {
    slug: 'oz-to-grams',
    title: 'How to Convert Ounces to Grams (and Back)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Convert ounces to grams with the exact formula, common food weight reference table, and the difference between avoirdupois and troy ounces.',
    intro: 'Ounces and grams are both units for measuring small weights, but they come from different measurement traditions. US food labels, recipes, and postal scales use ounces. The rest of the world uses grams. This guide explains the exact conversion, clarifies the avoirdupois vs troy ounce distinction, and gives you a practical food weight reference.',
    sections: [
      {
        heading: 'Which Ounce Are We Talking About?',
        paragraphs: [
          'There are two ounces in common use, and they are not equal.',
          'The avoirdupois ounce (oz) is the everyday ounce used for food, body weight, and general measurement. 1 avoirdupois ounce = 28.3495 grams. This is the ounce on your kitchen scale and US food labels.',
          'The troy ounce (oz t) is used exclusively for precious metals — gold, silver, platinum. 1 troy ounce = 31.1035 grams, about 10% heavier than the avoirdupois ounce. When a jeweler or commodity market quotes a price per ounce, they always mean troy ounces.',
          'Unless you are dealing with precious metals, you are working with avoirdupois ounces.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 avoirdupois ounce = 28.3495 grams.',
          'To convert ounces to grams: multiply by 28.3495. For example, 4 oz × 28.3495 = 113.4 g.',
          'To convert grams to ounces: divide by 28.3495 (or multiply by 0.035274). For example, 250 g ÷ 28.3495 = 8.82 oz.',
          'Mental shortcut: multiply ounces by 28 for a quick estimate. The result is about 1.2% low — fine for casual use.',
        ],
      },
      {
        heading: 'Common Food Weight Conversions',
        paragraphs: ['Everyday reference values:'],
        list: [
          '1 oz = 28.35 g (one slice of bread)',
          '2 oz = 56.7 g (small chicken breast portion)',
          '4 oz = 113.4 g (quarter pound)',
          '8 oz = 226.8 g (half pound)',
          '16 oz = 453.6 g (1 pound)',
          '100 g = 3.53 oz',
          '200 g = 7.05 oz',
          '500 g = 17.64 oz (about 1.1 lb)',
        ],
      },
      {
        heading: 'US Food Labels and Serving Sizes',
        paragraphs: [
          'US food labels show weight in both ounces and grams. A can of tuna labeled "5 oz (142g)" uses the avoirdupois ounce. The grams figure is the authoritative measurement — the oz value is rounded.',
          'Cereal boxes, snack bags, and deli counters in the US use ounces. European products use grams. When adapting a recipe from one system to the other, use the exact conversion factor for baking — rounding to 28 g per oz can introduce measurable error over large quantities.',
        ],
      },
      {
        heading: 'Cooking and Baking Reference',
        paragraphs: [
          'Key ingredient conversions (1 oz = 28.35 g):',
        ],
        list: [
          '1 oz all-purpose flour ≈ 28 g',
          '1 oz granulated sugar ≈ 28 g',
          '1 oz butter ≈ 28 g',
          '1 oz cream cheese ≈ 28 g',
          '1 oz chocolate ≈ 28 g',
          '1 oz shredded cheese ≈ 28 g',
        ],
      },
    ],
    conclusion: '1 avoirdupois ounce = 28.3495 grams. For precious metals, 1 troy ounce = 31.1035 grams. For everyday cooking and food weights, multiply ounces by 28.35 or divide grams by 28.35. Use our free weight converter for precise results in both directions.',
    relatedLinks: [
      { label: 'Ounces to Grams Converter', path: '/weight/ounce-to-gram' },
      { label: 'Grams to Ounces Converter', path: '/weight/gram-to-ounce' },
      { label: 'Weight Converter', path: '/weight' },
    ],
  },

  {
    slug: 'feet-to-inches',
    title: 'How to Convert Feet to Inches (and Back)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Learn how to convert feet to inches with the exact formula, height reference table, and tips for expressing measurements in the US imperial system.',
    intro: 'Feet and inches are the two primary units for measuring height and short distances in the United States. While the relationship is simple — there are exactly 12 inches in a foot — converting between them becomes less obvious when dealing with mixed measurements like 5 feet 9 inches or decimal feet like 5.75 ft. This guide covers all the cases.',
    sections: [
      {
        heading: 'The Basic Relationship',
        paragraphs: [
          '1 foot = 12 inches (exact, by definition). 1 inch = 1/12 foot = 0.08333... feet.',
          'To convert feet to inches: multiply by 12. For example, 6 ft × 12 = 72 inches.',
          'To convert inches to feet: divide by 12. For example, 66 inches ÷ 12 = 5.5 feet = 5 feet 6 inches.',
        ],
      },
      {
        heading: 'Why 12 Inches in a Foot?',
        paragraphs: [
          'The foot was historically based on the length of a human foot — a convenient body-based measurement used across ancient civilizations. The division into 12 inches comes from the Roman uncia (one-twelfth).',
          '12 is a practical divisor: it divides evenly into halves (6), thirds (4), quarters (3), sixths (2), and twelfths (1) — useful for carpentry and trade before decimal arithmetic was common.',
          'The barleycorn system further divided the inch into thirds (3 barleycorns = 1 inch), making 36 barleycorns in a foot. This system persists in US shoe sizing, where one shoe size equals one barleycorn (1/3 inch).',
        ],
      },
      {
        heading: 'Converting Mixed Feet and Inches',
        paragraphs: [
          'To convert a height like 5 feet 9 inches to total inches: (5 × 12) + 9 = 60 + 9 = 69 inches.',
          'To convert total inches back to feet and inches: 69 ÷ 12 = 5 remainder 9 → 5 feet 9 inches.',
          'To convert decimal feet to feet and inches: 5.75 ft → 0.75 × 12 = 9 inches → 5 feet 9 inches.',
          'To convert feet and inches to decimal feet: 5 ft 9 in → 9 ÷ 12 = 0.75 → 5.75 ft.',
        ],
      },
      {
        heading: 'Height Reference Table',
        paragraphs: ['Common heights in feet/inches and total inches:'],
        list: [
          '5\'0″ = 60 inches',
          '5\'3″ = 63 inches',
          '5\'6″ = 66 inches',
          '5\'9″ = 69 inches',
          '6\'0″ = 72 inches',
          '6\'3″ = 75 inches',
          '6\'6″ = 78 inches',
        ],
      },
      {
        heading: 'Construction and Measurement Contexts',
        paragraphs: [
          'In US construction, measurements are typically given in feet and inches (e.g., a ceiling that is 8 ft 0 in high, a doorway that is 6 ft 8 in tall). Blueprints and building codes use feet and inches rather than decimal feet.',
          'Lumber is sold in nominal lengths in feet (8 ft, 10 ft, 12 ft) but actual dimensions use inches (a "2×4" board is actually 1.5 inches × 3.5 inches).',
          'Aviation: runway lengths and altitudes use feet. A typical cruising altitude of 35,000 ft = 420,000 inches. Obstacle clearance heights are given in feet.',
        ],
      },
    ],
    conclusion: '1 foot = 12 inches exactly. To convert feet to inches, multiply by 12. For mixed measurements (e.g., 5\'9″), convert feet to inches first then add the remaining inches: (5 × 12) + 9 = 69 inches. Use our free length converter for instant results.',
    relatedLinks: [
      { label: 'Feet to Inches Converter', path: '/length/foot-to-inch' },
      { label: 'Inches to Feet Converter', path: '/length/inch-to-foot' },
      { label: 'Inches to Centimeters Converter', path: '/length/inch-to-centimeter' },
      { label: 'Length Converter', path: '/length' },
    ],
  },
```

- [ ] **Step 2: Verify the 3 posts render**

Run the dev server:
```bash
cd "/Volumes/SLT/Claude Code/unit-converter" && npm run dev
```
Open in browser:
- `http://localhost:5173/blog/inches-to-cm`
- `http://localhost:5173/blog/oz-to-grams`
- `http://localhost:5173/blog/feet-to-inches`

Each should render with title, intro, sections, and relatedLinks. No console errors.

- [ ] **Step 3: Commit**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter"
git add src/data/blogPosts.js
git commit -m "content: add blog posts — inches-to-cm, oz-to-grams, feet-to-inches"
```

---

## Task 2: Posts 4–5 (liters-to-ml, acres-to-sq-meters)

**Files:**
- Modify: `src/data/blogPosts.js`

- [ ] **Step 1: Append posts 4–5 to blogPosts array**

Before the closing `]`, append:

```js
  {
    slug: 'liters-to-ml',
    title: 'How to Convert Liters to Milliliters (and Back)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Learn how to convert liters to milliliters with the exact formula, beverage reference table, and practical examples for cooking, medicine, and everyday use.',
    intro: 'Liters and milliliters are both metric volume units used worldwide for beverages, cooking, medicine, and laboratory measurements. The conversion is simple — there are exactly 1,000 milliliters in a liter — but the relationship between these units shows up in ways that are easy to overlook. This guide explains both units and gives you quick reference values for everyday contexts.',
    sections: [
      {
        heading: 'What Is a Liter?',
        paragraphs: [
          'A liter (L) is the base metric unit for measuring liquid volume. It is equal to exactly 1,000 milliliters, 1 cubic decimeter (dm³), or 0.001 cubic meters.',
          'Everyday items measured in liters: water bottles (0.5 L, 1 L, 1.5 L), soda bottles (2 L), car engine displacement (1.6 L, 2.0 L), milk cartons (1 L), and fuel (sold by the liter in most countries).',
        ],
      },
      {
        heading: 'What Is a Milliliter?',
        paragraphs: [
          'A milliliter (mL) is one-thousandth of a liter, equal to exactly 1 cubic centimeter (cm³). It is the standard unit for small liquid volumes in cooking, medicine, and laboratory measurements.',
          'Everyday items measured in milliliters: medicine doses (5 mL = 1 teaspoon), espresso shot (30 mL), wine glass (150–250 mL), and can of soda (330 mL or 355 mL).',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 liter = 1,000 milliliters (exact, by definition).',
          'To convert liters to milliliters: multiply by 1,000. For example, 1.5 L × 1,000 = 1,500 mL.',
          'To convert milliliters to liters: divide by 1,000. For example, 750 mL ÷ 1,000 = 0.75 L.',
          'In practice: move the decimal point three places right to go from liters to milliliters, and three places left to go from milliliters to liters.',
        ],
      },
      {
        heading: 'Beverage Reference Table',
        paragraphs: ['Common drink volumes in both units:'],
        list: [
          'Espresso shot: 30 mL = 0.030 L',
          'Small juice glass: 150 mL = 0.15 L',
          'Wine glass (standard pour): 150–250 mL = 0.15–0.25 L',
          'Can of soda (US): 355 mL = 0.355 L',
          'Can of soda (EU): 330 mL = 0.330 L',
          'Standard water bottle: 500 mL = 0.5 L',
          'Large soda bottle: 2,000 mL = 2 L',
          'Wine bottle: 750 mL = 0.75 L',
        ],
      },
      {
        heading: 'Medicine and Dosing',
        paragraphs: [
          'Medicine doses for liquids are always given in milliliters. Common reference points:',
        ],
        list: [
          '1 teaspoon (tsp) = 4.93 mL ≈ 5 mL',
          '1 tablespoon (tbsp) = 14.79 mL ≈ 15 mL',
          '1 fluid ounce = 29.57 mL ≈ 30 mL',
          'Standard syringe dose: 1–10 mL',
          'IV bag: 250 mL, 500 mL, or 1,000 mL (1 L)',
        ],
      },
      {
        heading: 'Cooking and Baking',
        paragraphs: [
          'European and Australian recipes use milliliters for liquids. A recipe calling for "250 mL of milk" requires a quarter liter — roughly equivalent to 1 US cup (236.6 mL).',
          'For cooking, the liter/milliliter system is more precise and easier to scale than the US cup system. 500 mL is exactly half a liter; half a cup is 118 mL, which requires knowing the cup definition to work with.',
        ],
      },
    ],
    conclusion: '1 liter = 1,000 milliliters exactly. To convert L to mL, multiply by 1,000. To convert mL to L, divide by 1,000. The conversion is among the simplest in the metric system — just shift the decimal point three places. Use our free volume converter for any liquid measurement instantly.',
    relatedLinks: [
      { label: 'Liters to Milliliters Converter', path: '/volume/liter-to-milliliter' },
      { label: 'Milliliters to Liters Converter', path: '/volume/milliliter-to-liter' },
      { label: 'Volume Converter', path: '/volume' },
    ],
  },

  {
    slug: 'acres-to-sq-meters',
    title: 'How to Convert Acres to Square Meters (and Back)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Learn how to convert acres to square meters with the exact formula, a comparison to football fields and hectares, and practical examples for real estate and land measurement.',
    intro: 'Acres and square meters measure land area, but they come from completely different measurement traditions. The United States uses acres for real estate and agriculture; most of the world uses square meters and hectares. This guide explains the exact conversion, gives you visual reference points for scale, and covers the relationship between acres, hectares, and square meters.',
    sections: [
      {
        heading: 'What Is an Acre?',
        paragraphs: [
          'An acre is a unit of area used primarily in the United States, UK, and some other countries for measuring land. 1 acre = 4,046.856 square meters = 43,560 square feet.',
          'The word "acre" comes from Old English, meaning "open field." Historically, it was defined as the amount of land a yoke of oxen could plow in one day — roughly a strip 1 furlong (201 meters) long by 1 chain (20.1 meters) wide.',
          'In the US, real estate listings use acres for plots. A quarter-acre lot is common in suburban neighborhoods. Farms are measured in hundreds or thousands of acres.',
        ],
      },
      {
        heading: 'What Is a Square Meter?',
        paragraphs: [
          'A square meter (m²) is the SI unit of area, equal to the area of a square with sides of exactly 1 meter. It is used worldwide for floor plans, room sizes, and small to medium land parcels.',
          'For larger land areas, the hectare (ha) is commonly used: 1 hectare = 10,000 m² = 2.471 acres. Farms and large properties in metric countries are measured in hectares.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 acre = 4,046.856 square meters (exact: 1 acre = 43,560 ft², and 1 ft = 0.3048 m, so 43,560 × 0.3048² = 4,046.856).',
          'To convert acres to square meters: multiply by 4,046.856. For example, 2 acres × 4,046.856 = 8,093.7 m².',
          'To convert square meters to acres: divide by 4,046.856 (or multiply by 0.000247105). For example, 10,000 m² ÷ 4,046.856 = 2.471 acres.',
          'Acres to hectares: multiply by 0.404686. Or simply: 1 hectare = 2.471 acres.',
        ],
      },
      {
        heading: 'Visual Reference Points',
        paragraphs: ['Real-world comparisons to understand scale:'],
        list: [
          '1 acre ≈ 4,047 m² (about 0.4 hectares)',
          '1 acre ≈ 90% of a US football field (including end zones: 1.32 acres)',
          '1 acre ≈ 16 tennis courts',
          '0.25 acre ≈ 1,012 m² (typical suburban US lot)',
          '1 hectare = 2.471 acres = 10,000 m²',
          '1 km² = 100 hectares = 247.1 acres',
          'Central Park, NYC: 843 acres = 341 hectares = 3.41 km²',
        ],
      },
      {
        heading: 'Real Estate Conversions',
        paragraphs: [
          'When comparing US and international property listings, the acre-to-hectare conversion is the most useful: a 5-acre farm is 2.02 hectares; a 1-hectare vineyard is 2.47 acres.',
          'Square footage to square meters: US home sizes in square feet ÷ 10.764 = m². A 2,000 sq ft house = 185.8 m².',
          'For land purchases in countries that use m²: multiply the asking price per m² by 4,046.856 to get the equivalent price per acre.',
        ],
      },
    ],
    conclusion: '1 acre = 4,046.856 square meters = 0.4047 hectares. To convert, multiply acres by 4,047 for m², or multiply by 0.4047 for hectares. The most useful comparison: 1 acre is roughly the size of a US football field without the end zones. Use our free area converter for instant results in any unit combination.',
    relatedLinks: [
      { label: 'Acres to Square Meters Converter', path: '/area/acre-to-square_meter' },
      { label: 'Square Meters to Acres Converter', path: '/area/square_meter-to-acre' },
      { label: 'Area Converter', path: '/area' },
    ],
  },
```

- [ ] **Step 2: Verify the 2 posts render**

```bash
# Dev server should already be running. Open:
# http://localhost:5173/blog/liters-to-ml
# http://localhost:5173/blog/acres-to-sq-meters
```

Check: title renders, all sections appear, relatedLinks point to valid converter pages.

- [ ] **Step 3: Commit**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter"
git add src/data/blogPosts.js
git commit -m "content: add blog posts — liters-to-ml, acres-to-sq-meters"
```

---

## Task 3: Posts 6–7 (hours-to-minutes, joules-to-calories)

**Files:**
- Modify: `src/data/blogPosts.js`

- [ ] **Step 1: Append posts 6–7 to blogPosts array**

```js
  {
    slug: 'hours-to-minutes',
    title: 'How to Convert Hours to Minutes (and Seconds)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Learn how to convert hours to minutes and seconds with exact formulas, a quick reference table, and tips for decimal hours and time tracking.',
    intro: 'Hours and minutes are the units we use every day to schedule, plan, and measure time — but converting between them requires careful arithmetic, especially with mixed values like 2.5 hours or 1 hour 45 minutes. This guide explains the exact relationships, covers decimal hours (used in time tracking and spreadsheets), and gives you a quick reference table for the most common values.',
    sections: [
      {
        heading: 'The Basic Relationships',
        paragraphs: [
          '1 hour = 60 minutes (exact).',
          '1 minute = 60 seconds.',
          '1 hour = 3,600 seconds (60 × 60).',
          'To convert hours to minutes: multiply by 60. For example, 3 hours × 60 = 180 minutes.',
          'To convert minutes to hours: divide by 60. For example, 150 minutes ÷ 60 = 2.5 hours = 2 hours 30 minutes.',
        ],
      },
      {
        heading: 'Why 60 Minutes in an Hour?',
        paragraphs: [
          'The division of hours into 60 minutes (and minutes into 60 seconds) comes from the ancient Babylonian sexagesimal (base-60) number system. The Babylonians used base-60 because it divides evenly by 2, 3, 4, 5, 6, 10, 12, 15, 20, and 30 — far more divisors than base-10.',
          'This system was transmitted to ancient Greece and then to medieval Europe through Arabic astronomy, and it has remained the standard for time measurement ever since. Despite metric efforts (the French Revolutionary calendar tried a 10-hour day with 100-minute hours in the 1790s), 60-based time proved too entrenched to replace.',
        ],
      },
      {
        heading: 'Decimal Hours',
        paragraphs: [
          'Spreadsheets, time-tracking software, and billing systems often use decimal hours rather than hours and minutes. 1.5 hours means 1 hour and 30 minutes; 0.25 hours means 15 minutes.',
          'To convert decimal hours to hours and minutes: take the decimal part and multiply by 60. For example, 2.75 hours → 0.75 × 60 = 45 minutes → 2 hours 45 minutes.',
          'To convert hours and minutes to decimal hours: divide the minutes by 60 and add to the hours. For example, 1 hour 20 minutes → 20 ÷ 60 = 0.333 → 1.333 hours.',
        ],
      },
      {
        heading: 'Quick Reference Table',
        paragraphs: ['Common time conversions:'],
        list: [
          '15 min = 0.25 hours',
          '30 min = 0.5 hours',
          '45 min = 0.75 hours',
          '90 min = 1.5 hours',
          '120 min = 2 hours',
          '150 min = 2.5 hours',
          '180 min = 3 hours',
          '240 min = 4 hours',
        ],
      },
      {
        heading: 'Time in Everyday Contexts',
        paragraphs: [
          'Flight times: A 2-hour 45-minute flight is 165 minutes. Connecting flight calculations add minutes directly: a 45-minute layover after a 1h 55m flight followed by a 3h 10m leg totals 355 minutes = 5 hours 55 minutes.',
          'Cooking and baking: A recipe that cooks for 1 hour 15 minutes at 180°C requires 75 minutes of oven time.',
          'Exercise: A 90-minute training session is 1.5 hours. At an average pace of 10 km/h, that covers 15 km.',
          'Time billing: 2 hours 20 minutes billed at $150/hour = 2.333 hours × $150 = $350.',
        ],
      },
    ],
    conclusion: '1 hour = 60 minutes = 3,600 seconds. To convert hours to minutes, multiply by 60. For decimal hours, multiply the decimal part by 60 to get minutes. For time billing and spreadsheets, use decimal hours: 1 hour 45 minutes = 1.75 hours. Use our free time converter for any combination instantly.',
    relatedLinks: [
      { label: 'Hours to Minutes Converter', path: '/time/hour-to-minute' },
      { label: 'Minutes to Hours Converter', path: '/time/minute-to-hour' },
      { label: 'Time Converter', path: '/time' },
    ],
  },

  {
    slug: 'joules-to-calories',
    title: 'How to Convert Joules to Calories (and Back)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Learn how to convert joules to calories with exact formulas, the difference between small calories and food Calories (kcal), and practical examples for nutrition and physics.',
    intro: 'Joules and calories are both units of energy, but they appear in very different contexts. Physics and engineering use joules (the SI unit). Nutrition labels use Calories — which are actually kilocalories. Chemistry uses small calories. Understanding the difference between a "calorie" and a "Calorie" is one of the most common sources of confusion in science and nutrition. This guide clears it up.',
    sections: [
      {
        heading: 'What Is a Joule?',
        paragraphs: [
          'A joule (J) is the SI unit of energy, defined as the energy transferred when a force of one newton acts through a distance of one meter. It is used in physics, engineering, and chemistry for all forms of energy: mechanical, electrical, thermal, and chemical.',
          'Reference points: a 1-watt device uses 1 joule per second; lifting a 100g apple 1 meter requires about 1 joule; a standard AA battery stores roughly 10,000 joules; an adult human needs about 8,000,000 joules (8 MJ) of food energy per day.',
        ],
      },
      {
        heading: 'Small Calorie vs Food Calorie',
        paragraphs: [
          'The calorie (cal) — also called the small calorie or gram calorie — is defined as the energy needed to raise 1 gram of water by 1°C. 1 calorie = 4.184 joules.',
          'The food Calorie (Cal, with a capital C) — also written as kilocalorie (kcal) — is 1,000 small calories. 1 kcal = 4,184 joules.',
          'This is the critical distinction: when a nutrition label says a serving contains "200 Calories," it means 200 kilocalories = 200,000 small calories = 836,800 joules.',
          'In everyday speech, "calories" in food contexts always means kilocalories. A food calorie and a physics calorie are not the same unit.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 calorie (cal) = 4.184 joules (thermochemical calorie).',
          '1 kilocalorie (kcal) = 4,184 joules.',
          'To convert joules to calories: divide by 4.184. For example, 1,000 J ÷ 4.184 = 239 cal.',
          'To convert joules to kilocalories: divide by 4,184. For example, 1,000,000 J ÷ 4,184 = 239 kcal.',
          'To convert calories to joules: multiply by 4.184. For example, 500 cal × 4.184 = 2,092 J.',
          'To convert food Calories (kcal) to joules: multiply by 4,184. For example, 200 kcal × 4,184 = 836,800 J.',
        ],
      },
      {
        heading: 'Nutrition Reference Points',
        paragraphs: ['Common food energy values converted to joules:'],
        list: [
          '1 food Calorie (kcal) = 4,184 J',
          '100 kcal (small snack) = 418,400 J',
          '500 kcal (main meal) = 2,092,000 J (2.09 MJ)',
          '2,000 kcal (daily intake) = 8,368,000 J (8.37 MJ)',
          '1 gram of fat = 9 kcal = 37,656 J',
          '1 gram of carbohydrate = 4 kcal = 16,736 J',
          '1 gram of protein = 4 kcal = 16,736 J',
        ],
      },
      {
        heading: 'Other Calorie Definitions',
        paragraphs: [
          'The 15°C calorie (cal₁₅) = 4.18580 J — energy to raise water from 14.5°C to 15.5°C. Used in some older scientific literature.',
          'The International Table calorie (calIT) = 4.1868 J — used by the International Steam Table Conference.',
          'For everyday nutrition and most chemistry problems, use the thermochemical calorie (1 cal = 4.184 J). The differences between calorie definitions are less than 0.1% and only matter in precision engineering.',
        ],
      },
    ],
    conclusion: '1 calorie (small cal) = 4.184 joules. 1 food Calorie (kcal) = 4,184 joules. The critical distinction: nutrition labels use kilocalories (kcal), not small calories — so a 300-Calorie meal contains 1,255,200 joules. To convert kcal to joules, multiply by 4,184. Use our free energy converter for any combination instantly.',
    relatedLinks: [
      { label: 'Joules to Calories Converter', path: '/energy/joule-to-calorie' },
      { label: 'Calories to Joules Converter', path: '/energy/calorie-to-joule' },
      { label: 'Kilocalories to Joules Converter', path: '/energy/kilocalorie-to-joule' },
      { label: 'Energy Converter', path: '/energy' },
    ],
  },
```

- [ ] **Step 2: Verify the 2 posts render**

```bash
# http://localhost:5173/blog/hours-to-minutes
# http://localhost:5173/blog/joules-to-calories
```

Check all sections, relatedLinks resolve.

- [ ] **Step 3: Commit**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter"
git add src/data/blogPosts.js
git commit -m "content: add blog posts — hours-to-minutes, joules-to-calories"
```

---

## Task 4: Posts 8–9 (vasa-warship, hard-drive-space)

**Files:**
- Modify: `src/data/blogPosts.js`

- [ ] **Step 1: Append posts 8–9 to blogPosts array**

```js
  {
    slug: 'vasa-warship',
    title: 'The Warship That Sank Because Two Teams Used Different Rulers',
    tag: 'Conversion Fail',
    date: '2026-04-20',
    description: 'In 1628, the Swedish warship Vasa sank on its maiden voyage. Archaeologists later found the cause: two construction crews used rulers of different lengths, building the ship asymmetrically.',
    intro: 'On August 10, 1628, the Swedish warship Vasa — one of the most powerful warships in the world at the time — sailed out of Stockholm harbor on its maiden voyage. It traveled about 1,300 meters before water began pouring in through the gun ports. Within 20 minutes, the Vasa had sunk in full view of the watching crowd. More than 30 people died. The investigation that followed revealed a contributing cause that would not be confirmed until archaeologists examined the ship 333 years later: two construction teams had been building the ship using rulers of different lengths.',
    sections: [
      {
        heading: 'The Ship',
        paragraphs: [
          'The Vasa was built between 1626 and 1628 on the orders of Swedish King Gustav II Adolf. At 69 meters long, armed with 64 bronze cannons on two gun decks, it was among the most heavily armed warships of its era.',
          'The ship was also top-heavy. Two gun decks stacked above the waterline created a high center of gravity. Stability tests conducted before departure — rocking the ship by having men run back and forth across the deck — were stopped after three runs because the ship began listing dangerously. The admiral in charge chose to proceed anyway.',
        ],
      },
      {
        heading: 'The Sinking',
        paragraphs: [
          'The Vasa left the harbor on a calm August day with sails partially set. A gust of wind heeled the ship to port. Water entered through the open gun ports on the lower deck. The Vasa did not recover.',
          'At the inquiry, officers and builders blamed each other. No one was punished — the king himself had pushed the ship\'s specifications to include two gun decks, and no one had been willing to tell him it was unsafe.',
        ],
      },
      {
        heading: 'The Ruler Discovery',
        paragraphs: [
          'The Vasa was salvaged in 1961 and is now preserved in the Vasa Museum in Stockholm. During archaeological examination, researchers made an unusual find: four rulers used by the construction workers.',
          'Two rulers were calibrated in Swedish feet — each foot divided into 12 Swedish inches, measuring approximately 26.0 cm per foot.',
          'Two rulers were calibrated in Amsterdam feet — each foot divided into 11 Amsterdam inches, measuring approximately 25.6 cm per foot.',
          'The port (left) side of the ship was built using Swedish measurements. The starboard (right) side was built using Amsterdam measurements. The port side came out measurably heavier.',
        ],
      },
      {
        heading: 'How Much Did It Matter?',
        paragraphs: [
          'The unit discrepancy was not the sole cause of the Vasa\'s sinking — the ship was fundamentally too top-heavy for its design. But it contributed to the port-side asymmetry that made an already unstable ship worse.',
          'The Vasa\'s case illustrates a systemic problem: two construction teams, working on the same ship, never verified that they were measuring in the same units. The error was invisible until archaeologists dug it up three centuries later.',
          'The Mars Climate Orbiter (1999) repeated the same failure: two engineering teams using different unit systems, no interface check. The Orbiter cost $327 million. The Vasa cost 40,000 pieces of silver and more than 30 lives.',
        ],
      },
      {
        heading: 'The Vasa Today',
        paragraphs: [
          'The Vasa Museum in Stockholm is one of Scandinavia\'s most visited attractions. The ship is 95% original — preserved by the cold, low-salinity waters of the Baltic Sea. Visitors can see the original timbers, cannons, carved decorations, and the two measuring sticks that helped explain why it sank.',
          'The Vasa is a unique artifact: the only 17th-century warship preserved in its original condition anywhere in the world.',
        ],
      },
    ],
    conclusion: 'The Vasa sank partly because two construction crews used rulers of different lengths — Swedish feet and Amsterdam feet — without ever checking that they were measuring in the same units. The same category of error has since destroyed a $327 million spacecraft (Mars Climate Orbiter) and nearly killed 69 people on a 767 (Gimli Glider). The lesson has not changed in 400 years: always verify units at every interface.',
    relatedLinks: [
      { label: 'Length Converter', path: '/length' },
      { label: 'Meters to Feet Converter', path: '/length/meter-to-foot' },
      { label: 'Unit Converter Home', path: '/' },
    ],
  },

  {
    slug: 'hard-drive-space',
    title: 'Why Your 1 TB Hard Drive Only Shows 931 GB',
    tag: 'Conversion Fail',
    date: '2026-04-20',
    description: 'You bought a 1 TB hard drive but your computer shows 931 GB. No storage was removed. The discrepancy is a unit conversion difference between how manufacturers and operating systems count bytes.',
    intro: 'You buy a "1 TB" external hard drive, plug it in, and your computer reports 931 GB. You have not been cheated. No one removed 69 GB of storage. What happened is a unit conversion disagreement — one that has persisted for decades because manufacturers and operating systems define "terabyte" differently. This is one of the most common and misunderstood unit conversion issues in everyday technology.',
    sections: [
      {
        heading: 'Two Definitions of "Terabyte"',
        paragraphs: [
          'Storage manufacturers define 1 TB as exactly 1,000,000,000,000 bytes — that is, 10¹² bytes, a round number in the decimal (base-10) system.',
          'Operating systems — particularly Windows — define 1 TB as 1,099,511,627,776 bytes — that is, 2⁴⁰ bytes, a round number in the binary (base-2) system that computers actually use.',
          'The difference: 1,099,511,627,776 ÷ 1,000,000,000,000 = 1.0995. So a drive with 1,000,000,000,000 bytes shows as 1,000,000,000,000 ÷ 1,099,511,627,776 = 0.9095 TB = approximately 931 GB on Windows.',
        ],
      },
      {
        heading: 'Why Computers Use Binary',
        paragraphs: [
          'Computer memory and storage are built from transistors that are either on or off — binary digits (bits). Doubling is natural: 1 KB = 1,024 bytes (2¹⁰), 1 MB = 1,048,576 bytes (2²⁰), 1 GB = 1,073,741,824 bytes (2³⁰), 1 TB = 1,099,511,627,776 bytes (2⁴⁰).',
          'Early in computing history, the terms "kilobyte," "megabyte," and so on were informally used to mean the nearest power of 2, even though the SI prefixes kilo, mega, giga strictly mean 10³, 10⁶, 10⁹. Storage manufacturers eventually adopted the strict SI definitions — giving their drives larger apparent capacities — while operating systems kept the binary interpretation.',
        ],
      },
      {
        heading: 'The IEC Solution (Mostly Ignored)',
        paragraphs: [
          'In 1998, the International Electrotechnical Commission (IEC) introduced new prefixes to resolve the ambiguity: kibibyte (KiB = 1,024 bytes), mebibyte (MiB = 1,048,576 bytes), gibibyte (GiB = 1,073,741,824 bytes), tebibyte (TiB = 1,099,511,627,776 bytes).',
          'The IEC definition: "gigabyte" (GB) = exactly 1,000,000,000 bytes; "gibibyte" (GiB) = exactly 1,073,741,824 bytes.',
          'In practice, almost no one uses "gibibyte" in everyday speech. Windows still reports drive sizes in GiB but labels them GB. Linux and some technical documentation use GiB correctly. macOS switched to decimal in 2009.',
        ],
      },
      {
        heading: 'macOS vs Windows',
        paragraphs: [
          'Since macOS 10.6 (Snow Leopard, 2009), Apple\'s operating system reports drive sizes using decimal (SI) definitions. A 1 TB drive shows as 1 TB on a Mac.',
          'Windows still uses binary definitions. A 1 TB drive (1,000,000,000,000 bytes) shows as approximately 931 GB on Windows.',
          'This means the same physical drive will display a different number depending on whether you plug it into a Mac or a Windows PC — not because anything changed, but because the two systems define "gigabyte" differently.',
        ],
      },
      {
        heading: 'How Much Storage Are You Actually Getting?',
        paragraphs: [
          'You are getting exactly what you paid for — 1,000,000,000,000 bytes of storage capacity. The manufacturer\'s label is accurate by the SI definition.',
          'The "missing" space is not missing — it is a display artifact. You can store exactly the same amount of data regardless of whether the drive shows 931 GB or 1 TB.',
        ],
        list: [
          '500 GB drive → Windows shows ~466 GB',
          '1 TB drive → Windows shows ~931 GB',
          '2 TB drive → Windows shows ~1,862 GB',
          '4 TB drive → Windows shows ~3,725 GB',
          '1 TB drive → macOS shows 1 TB',
        ],
      },
    ],
    conclusion: 'Your 1 TB drive shows 931 GB on Windows because manufacturers define 1 TB as 10¹² bytes while Windows defines 1 TB as 2⁴⁰ bytes — a 9.95% difference. No storage is missing. macOS switched to the manufacturer\'s decimal definition in 2009, so the same drive shows 1 TB there. The IEC introduced the "tebibyte" (TiB) to resolve this, but almost nobody uses the term. The confusion persists.',
    relatedLinks: [
      { label: 'GB to TB Converter', path: '/data-storage/gigabyte-to-terabyte' },
      { label: 'MB to GB Converter', path: '/data-storage/megabyte-to-gigabyte' },
      { label: 'Data Storage Converter', path: '/data-storage' },
    ],
  },
```

- [ ] **Step 2: Verify both posts render**

```bash
# http://localhost:5173/blog/vasa-warship
# http://localhost:5173/blog/hard-drive-space
```

- [ ] **Step 3: Commit**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter"
git add src/data/blogPosts.js
git commit -m "content: add blog posts — vasa-warship, hard-drive-space"
```

---

## Task 5: Regenerate sitemap

**Files:**
- Regenerate: `public/sitemap.xml`

- [ ] **Step 1: Run sitemap generator**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter" && node generate-sitemap.mjs
```

Expected: script completes without errors, outputs something like "Sitemap generated: X URLs".

- [ ] **Step 2: Verify new URLs appear in sitemap**

```bash
grep "blog/" public/sitemap.xml | tail -15
```

Expected: all 9 new blog slugs visible in the output.

- [ ] **Step 3: Commit**

```bash
cd "/Volumes/SLT/Claude Code/unit-converter"
git add public/sitemap.xml
git commit -m "chore: regenerate sitemap — 9 new blog posts"
```

---

## Publishing Schedule

All 9 posts are committed locally across 4 feature commits + 1 sitemap commit. Push one at a time when instructed:

| Day | Post(s) | Command |
|---|---|---|
| Day 1 | sitemap + posts 1–3 | `git push origin main` (after all 5 commits exist locally) |
| Day 2 | signal next push | User prompts → push latest unpushed commit |

**Note:** Since all posts share the same deploy, the simplest approach is to push one commit per day. The user will prompt each day. The dev server shows all posts immediately after each local commit.
