import { useState, useCallback } from 'react'
import {
  INGREDIENT_DENSITIES,
  gramsToIngredientCups,
  ingredientCupsToGrams,
} from '../utils/ingredientDensity.js'
import './IngredientConverter.css'

function formatResult(value) {
  if (!isFinite(value) || value <= 0) return ''
  return String(parseFloat(value.toPrecision(6)))
}

/**
 * Bidirectional grams ↔ cups converter for a specific ingredient.
 *
 * Props:
 *   ingredient   {string}  - key from INGREDIENT_DENSITIES (e.g. 'flour')
 *   initialGrams {string}  - optional pre-filled grams value
 */
function IngredientConverter({ ingredient, initialGrams }) {
  const density = INGREDIENT_DENSITIES[ingredient]
  const [activeValue, setActiveValue] = useState(initialGrams ?? '')
  const [activeSide, setActiveSide] = useState('grams')

  const calcCups = useCallback(
    (raw) => {
      if (raw === '' || raw === '-') return ''
      const num = parseFloat(raw)
      if (!isFinite(num) || num <= 0) return ''
      try { return formatResult(gramsToIngredientCups(num, ingredient)) }
      catch { return '' }
    },
    [ingredient],
  )

  const calcGrams = useCallback(
    (raw) => {
      if (raw === '' || raw === '-') return ''
      const num = parseFloat(raw)
      if (!isFinite(num) || num <= 0) return ''
      try { return formatResult(ingredientCupsToGrams(num, ingredient)) }
      catch { return '' }
    },
    [ingredient],
  )

  const gramsValue = activeSide === 'grams' ? activeValue : calcGrams(activeValue)
  const cupsValue  = activeSide === 'cups'  ? activeValue : calcCups(activeValue)

  function handleGramsInput(e) {
    setActiveSide('grams')
    setActiveValue(e.target.value)
  }

  function handleCupsInput(e) {
    setActiveSide('cups')
    setActiveValue(e.target.value)
  }

  if (!density) return null

  return (
    <div className="ingredient-converter">
      <div className="ingredient-converter__field">
        <label className="ingredient-converter__label">Grams (g)</label>
        <input
          type="number"
          className="ingredient-converter__input"
          value={gramsValue}
          onChange={handleGramsInput}
          placeholder="0"
          inputMode="decimal"
          min="0"
          aria-label="Grams"
        />
      </div>

      <div className="ingredient-converter__arrow" aria-hidden="true">⇄</div>

      <div className="ingredient-converter__field">
        <label className="ingredient-converter__label">Cups (US)</label>
        <input
          type="number"
          className="ingredient-converter__input"
          value={cupsValue}
          onChange={handleCupsInput}
          placeholder="0"
          inputMode="decimal"
          min="0"
          aria-label="Cups"
        />
      </div>

      <p className="ingredient-converter__hint">
        1 cup {density.symbol} = {density.gPerCup} g
      </p>
    </div>
  )
}

export default IngredientConverter
