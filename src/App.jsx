import { Routes, Route } from 'react-router'
import Layout from './layouts/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import PairPage from './pages/PairPage.jsx'
import CurrencyPage from './pages/CurrencyPage.jsx'
import BlogIndexPage from './pages/BlogIndexPage.jsx'
import BlogPostPage from './pages/BlogPostPage.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'
import TermsPage from './pages/TermsPage.jsx'
import CookiePage from './pages/CookiePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        {/* Explicit category routes (12 total) */}
        <Route path="/length"       element={<CategoryPage />} />
        <Route path="/weight"       element={<CategoryPage />} />
        <Route path="/temperature"  element={<CategoryPage />} />
        <Route path="/volume"       element={<CategoryPage />} />
        <Route path="/area"         element={<CategoryPage />} />
        <Route path="/speed"        element={<CategoryPage />} />
        <Route path="/time"         element={<CategoryPage />} />
        <Route path="/data-storage" element={<CategoryPage />} />
        <Route path="/pressure"     element={<CategoryPage />} />
        <Route path="/energy"       element={<CategoryPage />} />
        <Route path="/power"        element={<CategoryPage />} />
        <Route path="/fuel-economy" element={<CategoryPage />} />
        <Route path="/cooking"      element={<CategoryPage />} />

        {/* Currency — dedicated page with live API */}
        <Route path="/currency" element={<CurrencyPage />} />

        {/* Pair sub-routes per category */}
        <Route path="/length/:pair"       element={<PairPage />} />
        <Route path="/weight/:pair"       element={<PairPage />} />
        <Route path="/temperature/:pair"  element={<PairPage />} />
        <Route path="/volume/:pair"       element={<PairPage />} />
        <Route path="/area/:pair"         element={<PairPage />} />
        <Route path="/speed/:pair"        element={<PairPage />} />
        <Route path="/time/:pair"         element={<PairPage />} />
        <Route path="/data-storage/:pair" element={<PairPage />} />
        <Route path="/pressure/:pair"     element={<PairPage />} />
        <Route path="/energy/:pair"       element={<PairPage />} />
        <Route path="/power/:pair"        element={<PairPage />} />
        <Route path="/fuel-economy/:pair" element={<PairPage />} />
        <Route path="/cooking/:pair"      element={<PairPage />} />

        {/* Blog */}
        <Route path="/blog"        element={<BlogIndexPage />} />
        <Route path="/blog/:slug"  element={<BlogPostPage />} />

        {/* Legal pages */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms"   element={<TermsPage />} />
        <Route path="/cookies" element={<CookiePage />} />

        {/* 404 catch-all */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
