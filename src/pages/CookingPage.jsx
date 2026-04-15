import { Link, useLocation } from 'react-router'
import Converter from '../components/Converter.jsx'
import CategoryContent from '../components/CategoryContent.jsx'
import SEOMeta from '../components/SEOMeta.jsx'
import './CookingPage.css'

const SITE_URL = 'https://convert-fast.com'

const INGREDIENT_LINKS = [
  { to: '/cooking/flour-grams-to-cups',         label: 'Flour',          icon: '🌾' },
  { to: '/cooking/sugar-grams-to-cups',         label: 'Sugar',          icon: '🍬' },
  { to: '/cooking/butter-grams-to-cups',        label: 'Butter',         icon: '🧈' },
  { to: '/cooking/powdered-sugar-grams-to-cups',label: 'Powdered Sugar', icon: '🫙' },
  { to: '/cooking/honey-grams-to-cups',         label: 'Honey',          icon: '🍯' },
  { to: '/cooking/brown-sugar-grams-to-cups',   label: 'Brown Sugar',    icon: '🟫' },
  { to: '/cooking/almond-flour-grams-to-cups',  label: 'Almond Flour',   icon: '🫘' },
  { to: '/cooking/cocoa-powder-grams-to-cups',  label: 'Cocoa Powder',   icon: '🍫' },
]

function CookingPage() {
  const { search } = useLocation()
  const initialValue = new URLSearchParams(search).get('value') ?? undefined

  return (
    <main>
      <SEOMeta
        title="Cooking Converter | Convert Fast"
        description="Free online cooking converter. Convert cups, tablespoons, teaspoons, milliliters, and more. Plus ingredient-specific grams to cups converters for flour, sugar, butter, and honey."
        canonical={`${SITE_URL}/cooking`}
      />
      <h1>Cooking Converter</h1>

      <Converter
        key="cooking"
        category="cooking"
        defaultFrom="cup"
        defaultTo="milliliter"
        initialValue={initialValue}
      />

      {/* Ingredient-specific converters */}
      <section className="cooking-page__ingredients">
        <h2>Convert by Ingredient</h2>
        <p className="cooking-page__ingredients-note">
          Volume measurements vary by ingredient. Use these density-based converters for accurate grams ↔ cups conversions.
        </p>
        <div className="cooking-page__ingredient-grid">
          {INGREDIENT_LINKS.map(({ to, label, icon }) => (
            <Link key={to} to={to} className="cooking-page__ingredient-card">
              <span className="cooking-page__ingredient-icon" aria-hidden="true">{icon}</span>
              <span className="cooking-page__ingredient-label">{label}</span>
              <span className="cooking-page__ingredient-sub">g ↔ cups</span>
            </Link>
          ))}
        </div>
      </section>

      <CategoryContent category="cooking" />
    </main>
  )
}

export default CookingPage
