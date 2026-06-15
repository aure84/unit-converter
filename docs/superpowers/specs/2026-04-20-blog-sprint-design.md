# Blog Sprint Design — convert-fast.com

Date: 2026-04-20

## Goal

Add 9 new blog posts to increase organic traffic and strengthen the site's authority signal for the pending Google AdSense review.

## Context

- 18 blog posts already live across 3 tags: How-To Guide, Quick Reference, Conversion Fail
- AdSense status: "Előkészületek" (Preparing) on both convert-fast.com and finance-fast.com
- Traffic volume is the primary gap for AdSense approval
- No GSC query data yet — targeting high-volume conversion pairs and content gaps by category

## Implementation

**File changed:** `src/data/blogPosts.js` only — append 9 new post objects.

No new components, routes, or infrastructure required. The existing BlogPostPage renderer, sitemap generator (`generate-sitemap.mjs`), and JSON-LD structured data all handle new posts automatically.

**Publishing cadence:** All posts written in one session. User commits and pushes one post per day on request.

## Posts

| # | Slug | Tag | Category | Rationale |
|---|---|---|---|---|
| 1 | `inches-to-cm` | How-To Guide | length | Very high search volume, not yet covered |
| 2 | `oz-to-grams` | How-To Guide | weight | High volume, common cooking/shipping query |
| 3 | `feet-to-inches` | How-To Guide | length | High volume, US everyday use |
| 4 | `liters-to-ml` | How-To Guide | volume | High volume, cooking and medicine |
| 5 | `acres-to-sq-meters` | How-To Guide | area | Area category has no blog post yet |
| 6 | `hours-to-minutes` | How-To Guide | time | Time category has no blog post yet |
| 7 | `joules-to-calories` | How-To Guide | energy | Energy category has no blog post yet |
| 8 | `vasa-warship` | Conversion Fail | historical | Shareable, linkbait, authority signal |
| 9 | `hard-drive-space` | Conversion Fail | everyday | Relatable, high search intent, ties to data-storage converter |

## Structure per post

Each post follows the existing blogPosts.js schema:

```js
{
  slug: string,
  title: string,
  tag: 'How-To Guide' | 'Quick Reference' | 'Conversion Fail',
  date: string (YYYY-MM-DD),
  description: string (meta, <160 chars),
  intro: string,
  sections: [{ heading, paragraphs, list? }],
  conclusion: string,
  relatedLinks: [{ label, path }],
}
```

## Acceptance criteria

- All 9 posts render without errors at `/blog/<slug>`
- Each post links to the relevant converter page via `relatedLinks`
- `date` field is set to today (2026-04-20) for all posts
- No changes to components, routing, or sitemap script
- Sitemap regenerated after all posts are added (`npm run generate-sitemap`)
