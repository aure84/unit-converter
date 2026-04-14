import { Link } from 'react-router'
import SEOMeta from '../components/SEOMeta.jsx'
import { blogPosts } from '../data/blogPosts.js'
import './BlogPage.css'

const SITE_URL = 'https://convert-fast.com'

function BlogIndexPage() {
  return (
    <main className="blog-index">
      <SEOMeta
        title="Unit Conversion Guides | Convert Fast Blog"
        description="Step-by-step guides for the most common unit conversions — kilometers to miles, kg to lbs, Celsius to Fahrenheit, data storage units, and more."
        canonical={`${SITE_URL}/blog`}
      />
      <h1>Unit Conversion Guides</h1>
      <p className="blog-index__subtitle">
        In-depth guides for the most common unit conversions, with formulas, examples, and reference tables.
      </p>
      <ul className="blog-index__list">
        {blogPosts.map((post) => (
          <li key={post.slug} className="blog-index__item">
            <Link to={`/blog/${post.slug}`} className="blog-index__link">
              <h2 className="blog-index__post-title">{post.title}</h2>
              <p className="blog-index__post-desc">{post.description}</p>
              <span className="blog-index__read-more">Read guide →</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default BlogIndexPage
