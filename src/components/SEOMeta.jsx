import { Helmet } from 'react-helmet-async'

const OG_IMAGE = 'https://convert-fast.com/og-image.png'

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
 *   noindex      — add noindex meta tag (optional)
 */
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

export default SEOMeta
