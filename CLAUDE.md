# convert-fast.com — Agent Instructions

## Design System

**Never use hardcoded hex colors in CSS or inline styles.** Always use CSS variables defined in `src/index.css`.

### CSS Token Reference

| Token | Light | Dark | Use for |
|-------|-------|------|---------|
| `--text` | #6b6375 | #9ca3af | Body text, labels |
| `--text-h` | #08060d | #f3f4f6 | Headings, input text |
| `--bg` | #fff | #16171d | Page background, inputs |
| `--border` | #e5e4e7 | #2e303a | Borders, dividers |
| `--code-bg` | #f4f3ec | #1f2028 | Code blocks, ref panels |
| `--accent` | #aa3bff | #c084fc | Focus rings, links, hover |
| `--accent-bg` | rgba(170,59,255,0.1) | rgba(192,132,252,0.15) | Focus/hover backgrounds |
| `--accent-border` | rgba(170,59,255,0.5) | rgba(192,132,252,0.5) | Accent borders |
| `--currency` | #16a34a | #4ade80 | Currency/positive values |
| `--currency-bg` | rgba(22,163,74,0.1) | rgba(74,222,128,0.12) | Currency badge backgrounds |
| `--mono` | ui-monospace, Consolas | — | Monospace font |

### Custom Converter Components

For new converter tools (non-unit converters), use `ConverterTools.css`:

```jsx
import './ConverterTools.css'
// ...
<div className="conv-tool">
  <div className="two-col-grid">  {/* from index.css */}
    <div>
      <label className="conv-tool__label">Label</label>
      <input className="conv-tool__input" ... />
    </div>
  </div>
  <div className="ref-tables">
    <div className="ref-panel">
      <div className="ref-panel__title">Title</div>
      <table>...</table>
    </div>
  </div>
</div>
```

Use `.mono` for plain monospace values, `.mono-accent` for highlighted values (accent color).

### Standard Converter Components

For unit converters (length, weight, temperature, etc.), use `Converter.css`:
- `.converter` — outer wrapper
- `.converter__field` — label + input/select pair
- `.converter__label` — uppercase label
- `.converter__input` / `.converter__select` — inputs
- `.converter__copy-btn` / `.converter__copy-btn--copied` — copy button
- `.converter__arrow` — swap button

## Tech Stack

- React 18 + Vite, JSX (no TypeScript)
- `react-router` (NOT react-router-dom) for routing
- Dark mode via `data-theme="dark"` on `<html>` element
- `pairContent` system for FAQ content (`PAIR_EXTRA_FAQ`)
- `generate-sitemap.mjs` — run after adding new routes

## File Structure

- `src/components/` — converters and shared UI
- `src/pages/` — static pages
- `src/data/` — unit definitions and pair content
- `public/sitemap.xml` — regenerate with `node generate-sitemap.mjs`
