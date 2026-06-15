import { Routes, Route } from 'react-router'
import Layout from './layouts/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import CookingPage from './pages/CookingPage.jsx'
import IngredientPage from './pages/IngredientPage.jsx'
import PairPage from './pages/PairPage.jsx'
import CurrencyPage from './pages/CurrencyPage.jsx'
import RomanNumeralPage from './pages/RomanNumeralPage.jsx'
import NumberBasePage from './pages/NumberBasePage.jsx'
import BlogIndexPage from './pages/BlogIndexPage.jsx'
import BlogPostPage from './pages/BlogPostPage.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'
import TermsPage from './pages/TermsPage.jsx'
import CookiePage from './pages/CookiePage.jsx'
import DisclaimerPage from './pages/DisclaimerPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
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
        <Route path="/cooking"      element={<CookingPage />} />
        <Route path="/angle"        element={<CategoryPage />} />
        <Route path="/frequency"    element={<CategoryPage />} />
        <Route path="/shoe-size"    element={<CategoryPage />} />
        <Route path="/torque"       element={<CategoryPage />} />

        {/* Currency — dedicated page with live API */}
        <Route path="/currency" element={<CurrencyPage />} />

        {/* Standalone number converters */}
        <Route path="/roman-numerals" element={<RomanNumeralPage />} />
        <Route path="/number-base" element={<NumberBasePage />} />

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

        {/* Ingredient-specific density converters (must be before generic /cooking/:pair) */}
        <Route path="/cooking/flour-grams-to-cups"          element={<IngredientPage ingredient="flour" />} />
        <Route path="/cooking/sugar-grams-to-cups"          element={<IngredientPage ingredient="sugar" />} />
        <Route path="/cooking/butter-grams-to-cups"         element={<IngredientPage ingredient="butter" />} />
        <Route path="/cooking/powdered-sugar-grams-to-cups" element={<IngredientPage ingredient="powdered_sugar" />} />
        <Route path="/cooking/honey-grams-to-cups"          element={<IngredientPage ingredient="honey" />} />
        <Route path="/cooking/brown-sugar-grams-to-cups"    element={<IngredientPage ingredient="brown_sugar" />} />
        <Route path="/cooking/almond-flour-grams-to-cups"   element={<IngredientPage ingredient="almond_flour" />} />
        <Route path="/cooking/cocoa-powder-grams-to-cups"   element={<IngredientPage ingredient="cocoa_powder" />} />
        <Route path="/cooking/water-ml-to-grams"           element={<IngredientPage ingredient="water" />} />

        <Route path="/cooking/:pair"      element={<PairPage />} />
        <Route path="/angle/:pair"        element={<PairPage />} />
        <Route path="/frequency/:pair"    element={<PairPage />} />
        <Route path="/shoe-size/:pair"    element={<PairPage />} />
        <Route path="/torque/:pair"       element={<PairPage />} />

        {/* Blog */}
        <Route path="/blog"        element={<BlogIndexPage />} />
        <Route path="/blog/:slug"  element={<BlogPostPage />} />

        {/* Legal pages */}
        <Route path="/about"   element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms"   element={<TermsPage />} />
        <Route path="/cookies" element={<CookiePage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />

        {/* 404 catch-all */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
