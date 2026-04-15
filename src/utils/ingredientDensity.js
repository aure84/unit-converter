/**
 * Density-based ingredient conversion utilities.
 * All densities are in grams per US cup.
 */

export const INGREDIENT_DENSITIES = {
  flour:          { gPerCup: 125,  label: 'All-purpose flour', symbol: 'flour' },
  sugar:          { gPerCup: 200,  label: 'Granulated sugar',  symbol: 'sugar' },
  butter:         { gPerCup: 227,  label: 'Butter',            symbol: 'butter' },
  powdered_sugar: { gPerCup: 120,  label: 'Powdered sugar',    symbol: 'powdered sugar' },
  honey:          { gPerCup: 340,  label: 'Honey',             symbol: 'honey' },
  brown_sugar:    { gPerCup: 220,  label: 'Brown sugar',       symbol: 'brown sugar' },
  almond_flour:   { gPerCup: 96,   label: 'Almond flour',      symbol: 'almond flour' },
  cocoa_powder:   { gPerCup: 85,   label: 'Cocoa powder',      symbol: 'cocoa powder' },
}

/**
 * Convert grams to cups for a given ingredient.
 * @param {number} grams
 * @param {string} ingredient - key from INGREDIENT_DENSITIES
 * @returns {number}
 */
export function gramsToIngredientCups(grams, ingredient) {
  const density = INGREDIENT_DENSITIES[ingredient]
  if (!density) throw new Error(`Unknown ingredient: ${ingredient}`)
  return parseFloat((grams / density.gPerCup).toFixed(4))
}

/**
 * Convert cups to grams for a given ingredient.
 * @param {number} cups
 * @param {string} ingredient - key from INGREDIENT_DENSITIES
 * @returns {number}
 */
export function ingredientCupsToGrams(cups, ingredient) {
  const density = INGREDIENT_DENSITIES[ingredient]
  if (!density) throw new Error(`Unknown ingredient: ${ingredient}`)
  return parseFloat((cups * density.gPerCup).toFixed(4))
}
