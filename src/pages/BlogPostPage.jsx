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
              {post.faqs.map(({ q, a }, i) => (
                <details key={i} className="cat-content__faq-item">
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
