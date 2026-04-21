---
title: og-image.png — convert-fast.com
date: 2026-04-21
status: approved
---

# OG Image Design Spec

## Purpose

A 1200×630px social preview image for all pages on convert-fast.com. Used by `og:image` and Twitter Card meta tags.

## Visual Design

| Property | Value |
|---|---|
| Size | 1200 × 630 px |
| Background | `#08060d` |
| Primary text | "Convert Anything. Fast." |
| Primary font | system-ui, bold, 80px, `#ffffff` |
| Secondary text | "convert-fast.com" |
| Secondary font | system-ui, 400, 36px, `#aa3bff` |
| Layout | Both texts centered horizontally and vertically |
| Gap between lines | 24px |
| No icons, no images |

## Generation

- Tool: Playwright (already a dev dependency)
- Script: `scripts/generate-og-image.mjs`
- Template: `scripts/og-image-template.html`
- Output: `public/og-image.png`
- Run: `node scripts/generate-og-image.mjs`

## Integration

All pages already have `og:image` meta tags pointing to `/og-image.png` via react-helmet-async. No code changes needed after the file is placed in `public/`.
