import { Helmet } from 'react-helmet-async'

/**
 * SEOMeta — reusable head-tag component.
 *
 * Props:
 *   title        — <title> text (required)
 *   description  — <meta name="description"> content (required)
 *   canonical    — <link rel="canonical"> href (required)
 *   ogTitle      — og:title (falls back to title)
 *   ogDescription — og:description (falls back to description)
 *   jsonLd       — object to serialise as JSON-LD (optional)
 */
function SEOMeta({ title, description, canonical, ogTitle, ogDescription, jsonLd }) {
  const resolvedOgTitle = ogTitle ?? title
  const resolvedOgDesc = ogDescription ?? description

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

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

export default SEOMeta
