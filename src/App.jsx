import { Routes, Route } from 'react-router'
import Layout from './layouts/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import PairPage from './pages/PairPage.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'
import TermsPage from './pages/TermsPage.jsx'
import CookiePage from './pages/CookiePage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        {/* Explicit category routes (8 total) */}
        <Route path="/length"       element={<CategoryPage />} />
        <Route path="/weight"       element={<CategoryPage />} />
        <Route path="/temperature"  element={<CategoryPage />} />
        <Route path="/volume"       element={<CategoryPage />} />
        <Route path="/area"         element={<CategoryPage />} />
        <Route path="/speed"        element={<CategoryPage />} />
        <Route path="/time"         element={<CategoryPage />} />
        <Route path="/data-storage" element={<CategoryPage />} />

        {/* Pair sub-routes per category */}
        <Route path="/length/:pair"       element={<PairPage />} />
        <Route path="/weight/:pair"       element={<PairPage />} />
        <Route path="/temperature/:pair"  element={<PairPage />} />
        <Route path="/volume/:pair"       element={<PairPage />} />
        <Route path="/area/:pair"         element={<PairPage />} />
        <Route path="/speed/:pair"        element={<PairPage />} />
        <Route path="/time/:pair"         element={<PairPage />} />
        <Route path="/data-storage/:pair" element={<PairPage />} />

        {/* Legal pages */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms"   element={<TermsPage />} />
        <Route path="/cookies" element={<CookiePage />} />
      </Route>
    </Routes>
  )
}

export default App
