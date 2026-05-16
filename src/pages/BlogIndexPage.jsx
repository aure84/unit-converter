import { Link } from 'react-router'
import SEOMeta from '../components/SEOMeta.jsx'
import { blogPosts } from '../data/blogPosts.js'
import './BlogPage.css'

const SITE_URL = 'https://convert-fast.com'

const TAG_CLASS = {
  'How-To Guide':    'blog-tag--how-to',
  'Quick Reference': 'blog-tag--quick-ref',
  'Conversion Fail': 'blog-tag--fail',
  'Context':         'blog-tag--context',
}

function BlogTag({ tag }) {
  if (!tag) return null
  return <span className={`blog-tag ${TAG_CLASS[tag] ?? ''}`}>{tag}</span>
}

function BlogIndexPage() {
  return (
    <main className="blog-index">
      <SEOMeta
        title="Blog | Convert Fast"
        description="Unit conversion guides, quick references, and real-world conversion disaster stories — from Mars Climate Orbiter to the Gimli Glider."
        canonical={`${SITE_URL}/blog`}
      />
      <h1>Blog</h1>
      <p className="blog-index__subtitle">
        Conversion guides, quick references, and the stories of when unit errors changed history.
      </p>
      <ul className="blog-index__list">
        {[...blogPosts]
          .filter((p) => p.date <= new Date().toISOString().slice(0, 10))
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((post) => (
          <li key={post.slug} className="blog-index__item">
            <Link to={`/blog/${post.slug}`} className="blog-index__link">
              <BlogTag tag={post.tag} />
              <h2 className="blog-index__post-title">{post.title}</h2>
              <p className="blog-index__post-desc">{post.description}</p>
              <span className="blog-index__read-more">Read →</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default BlogIndexPage
