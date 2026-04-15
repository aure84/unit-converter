import { units, getUnit } from '../data/units.js';

/**
 * Convert a value from one unit to another within a category.
 *
 * @param {number} value      - The numeric value to convert
 * @param {string} fromUnitId - Source unit id (e.g. 'celsius')
 * @param {string} toUnitId   - Target unit id (e.g. 'fahrenheit')
 * @param {string} category   - Category key (e.g. 'temperature')
 * @returns {number}          - The converted value
 *
 * @throws {Error} if the category or either unit is not found
 */
export function convert(value, fromUnitId, toUnitId, category) {
  if (!units[category]) {
    throw new Error(`Unknown category: "${category}"`);
  }

  const from = getUnit(category, fromUnitId);
  const to = getUnit(category, toUnitId);

  if (!from) throw new Error(`Unknown unit "${fromUnitId}" in category "${category}"`);
  if (!to)   throw new Error(`Unknown unit "${toUnitId}" in category "${category}"`);

  // Same unit — no conversion needed
  if (fromUnitId === toUnitId) return value;

  // Formula-based units (e.g. temperature, L/100km): use toBase/fromBase functions.
  // A category is formula-based if ANY of its units defines toBase/fromBase.
  const isFormulaBased = typeof from.toBase === 'function' || typeof to.toBase === 'function';
  if (isFormulaBased) {
    const toBaseFn   = typeof from.toBase === 'function' ? from.toBase   : (v) => v * from.factor;
    const fromBaseFn = typeof to.fromBase === 'function' ? to.fromBase   : (v) => v / to.factor;
    return fromBaseFn(toBaseFn(value));
  }

  // Linear units: value -> base -> target
  return (value * from.factor) / to.factor;
}
