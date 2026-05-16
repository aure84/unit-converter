import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const fixMediaRangeSyntax = {
  postcssPlugin: 'fix-media-range-syntax',
  Once(root) {
    root.walkAtRules('media', (rule) => {
      rule.params = rule.params
        .replace(/\(\s*width\s*>=\s*(\S+)\s*\)/g, '(min-width: $1)')
        .replace(/\(\s*width\s*<=\s*(\S+)\s*\)/g, '(max-width: $1)')
        .replace(/\(\s*height\s*>=\s*(\S+)\s*\)/g, '(min-height: $1)')
        .replace(/\(\s*height\s*<=\s*(\S+)\s*\)/g, '(max-height: $1)')
    })
  },
}

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [fixMediaRangeSyntax],
    },
  },
})
