/**
 * Programmatic content generator for pair pages.
 *
 * Each unit has a short description used in intro text and FAQs.
 * generatePairContent() returns { intro, faq } for any valid unit pair.
 */

export const unitDescriptions = {
  // Length
  meter:         'the base unit of length in the metric system, used in science, engineering, and everyday measurement worldwide',
  kilometer:     'equal to 1,000 meters, the standard unit for road distances and geographical measurements in most countries',
  centimeter:    'equal to 0.01 meters, commonly used for body measurements, clothing sizes, and small objects',
  millimeter:    'equal to 0.001 meters, used for precise measurements in engineering, manufacturing, and medicine',
  mile:          'equal to 5,280 feet or 1,609.344 meters, the standard unit for road distances in the United States and United Kingdom',
  yard:          'equal to 3 feet or 0.9144 meters, used in the US for sports fields, fabric, and short distances',
  foot:          'equal to 12 inches or 0.3048 meters, widely used in the US for height, altitude, and construction',
  inch:          'equal to exactly 2.54 centimeters, used for screen sizes, paper sizes, and small measurements in the US',
  nautical_mile: 'equal to 1,852 meters, the international standard for distances in maritime and aviation navigation',

  // Weight
  kilogram:  'the base unit of mass in the SI system, used globally for everyday weight and scientific measurements',
  gram:      'equal to 0.001 kilograms, used for food portions, jewelry, and precise small-scale measurements',
  milligram: 'equal to 0.001 grams, used in medicine for drug dosages and in chemistry for trace measurements',
  pound:     'equal to 453.592 grams, the primary weight unit in the United States for everyday and commercial use',
  ounce:     'equal to 28.3495 grams, used in the US for food packaging, postal weights, and precious metals',
  stone:     'equal to 14 pounds or 6.35 kilograms, traditionally used in the UK and Ireland to express body weight',
  ton:       'equal to 1,000 kilograms (metric ton), used for heavy freight, industrial loads, and bulk materials',

  // Temperature
  celsius:    'the most widely used temperature scale, where 0°C is the freezing point and 100°C is the boiling point of water',
  fahrenheit: 'the temperature scale used in the United States, where 32°F is the freezing point and 212°F is the boiling point of water',
  kelvin:     'the SI base unit of thermodynamic temperature, starting at absolute zero (0 K = −273.15°C), used in science and engineering',

  // Volume
  liter:       'the standard metric unit for liquid volume, equal to 1,000 milliliters and widely used in everyday life',
  milliliter:  'equal to 0.001 liters, used for small liquid measurements in cooking, medicine, and laboratory work',
  gallon:      'the US standard liquid unit equal to 3.785 liters, used for fuel, beverages, and bulk liquids',
  quart:       'equal to 0.946 liters, a US liquid unit used in cooking and for beverages such as juice and milk',
  pint:        'equal to 0.473 liters, used in the US for beverages; the UK imperial pint (0.568 L) is slightly larger',
  cup:         'equal to 236.6 ml, a standard US cooking measurement used in recipes for both liquids and dry ingredients',
  tablespoon:  'equal to approximately 14.79 ml or 3 teaspoons, a common unit in cooking and baking recipes',
  teaspoon:    'equal to approximately 4.93 ml, the smallest standard cooking measurement, used for spices and flavorings',
  fluid_ounce: 'equal to 29.574 ml, used for liquid measurements on nutrition labels, cocktail recipes, and beverage servings',

  // Area
  square_meter:     'the SI unit of area equal to a 1 m × 1 m square, used in real estate, construction, and science',
  square_foot:      'equal to 0.0929 m², the standard unit for floor area and property size in the United States',
  square_kilometer: 'equal to 1,000,000 m², used to measure cities, countries, lakes, and other large geographical areas',
  square_mile:      'equal to 2.59 km², the standard unit for large land areas in the United States and United Kingdom',
  acre:             'equal to 4,047 m² or 43,560 ft², traditionally used for measuring farmland and property in the US and UK',
  hectare:          'equal to 10,000 m², the standard international unit for agricultural land and large property areas',

  // Speed
  meter_per_second:   'the SI unit of speed used in physics and science for precise velocity measurements',
  kilometer_per_hour: 'the most common speed unit for road traffic worldwide, displayed on speedometers in most countries',
  mile_per_hour:      'the standard road speed unit in the United States and United Kingdom, shown on most American speedometers',
  knot:               'equal to 1 nautical mile per hour (1.852 km/h), the universal speed unit for maritime and aviation use',

  // Time
  second: 'the SI base unit of time, defined by the frequency of radiation from cesium atoms',
  minute: 'equal to 60 seconds, the standard unit for short time durations and scheduling',
  hour:   'equal to 3,600 seconds or 60 minutes, the primary unit for daily schedules and time zones',
  day:    'equal to 86,400 seconds or 24 hours, the fundamental unit of human activity and biological rhythms',
  week:   'equal to 7 days or 168 hours, the standard planning unit for work schedules and calendars',
  month:  'approximately 30.44 days on average (365.25 ÷ 12), used for billing cycles and long-term planning',
  year:   'equal to 365.25 days on average (accounting for leap years), representing Earth\'s orbit around the Sun',

  // Data storage
  bit:      'the smallest unit of digital information, representing a single binary value of 0 or 1',
  byte:     'equal to 8 bits, the fundamental unit for measuring file sizes, memory, and storage capacity',
  kilobyte: 'equal to 1,024 bytes, used for small files such as text documents, scripts, and configuration files',
  megabyte: 'equal to 1,024 kilobytes, used for photos, audio files, short videos, and application sizes',
  gigabyte: 'equal to 1,024 megabytes, the standard unit for storage devices, RAM, and large file collections',
  terabyte: 'equal to 1,024 gigabytes, used for hard drives, cloud storage plans, and large data archives',
  petabyte: 'equal to 1,024 terabytes, used by data centers, cloud providers, and internet infrastructure',

  // Pressure
  pascal:      'the SI unit of pressure, equal to one newton per square meter, used in science, weather forecasting, and engineering',
  kilopascal:  'equal to 1,000 pascals, commonly used for tire pressure, weather reports, and fluid dynamics in metric countries',
  megapascal:  'equal to 1,000,000 pascals, used in hydraulics, material strength testing, and high-pressure engineering applications',
  bar:         'equal to 100,000 pascals, widely used for tire pressure, gas pressure, and industrial applications in Europe and internationally',
  psi:         'pounds per square inch — the standard pressure unit in the United States, used for tire pressure, blood pressure, and pneumatic systems',
  atmosphere:  'equal to 101,325 pascals, representing average atmospheric pressure at sea level, used as a reference in chemistry and diving',
  torr:        'equal to 1/760 of an atmosphere (133.322 Pa), used in vacuum science, laboratory settings, and medical blood pressure measurement',

  // Energy
  joule:        'the SI unit of energy, equal to one newton-meter, used in physics, engineering, and as the basis for all other energy units',
  kilojoule:    'equal to 1,000 joules, commonly used in nutrition (food energy), chemistry, and engineering calculations',
  calorie:      'equal to 4.184 joules, the energy needed to raise 1 gram of water by 1°C; used in chemistry and as a sub-unit of food energy',
  kilocalorie:  'equal to 1,000 calories (4,184 joules), the standard unit for food energy — what is commonly called a "calorie" on nutrition labels',
  watt_hour:    'equal to 3,600 joules, used for measuring electrical energy consumption, especially in small appliances and battery capacity',
  kilowatt_hour:'equal to 3,600,000 joules (3.6 MJ), the standard unit for household electricity consumption and billing',
  btu:          'British Thermal Unit — equal to 1,055 joules, used in the US for heating, cooling, and HVAC system ratings',

  // Fuel economy
  km_per_liter:       'kilometers per liter — a fuel economy metric expressing how many kilometers a vehicle travels on one liter of fuel, common in Asia and Latin America',
  mile_per_gallon:    'miles per gallon (US) — the standard US fuel economy rating, measuring how many miles a vehicle travels per US gallon (3.785 L) of fuel',
  mile_per_gallon_uk: 'miles per gallon (UK/Imperial) — the British fuel economy rating using the larger Imperial gallon (4.546 L), giving higher numbers than US mpg for the same vehicle',
  liter_per_100km:    'liters per 100 kilometers — the European standard for fuel consumption, measuring how many liters are needed to travel 100 km; lower is more efficient',

  // Power
  watt:             'the SI unit of power, equal to one joule per second, used for electrical appliances, light bulbs, and all power ratings',
  kilowatt:         'equal to 1,000 watts, the standard unit for electric motors, EV power output, and home power consumption',
  megawatt:         'equal to 1,000,000 watts, used to rate power plants, wind turbines, and large industrial installations',
  horsepower:       'mechanical horsepower (hp) — equal to 745.7 watts, the traditional US unit for engine power in cars, trucks, and machinery',
  horsepower_metric:'metric horsepower (PS/CV) — equal to 735.5 watts, the European standard for engine power ratings; slightly less than mechanical hp',
  btu_per_hour:     'British Thermal Units per hour (Btu/h) — used to rate air conditioners, heaters, and HVAC equipment in the United States',
}

/** Format a multiplier for readable display (up to 6 sig figs, no trailing zeros). */
function fmt(value) {
  if (!isFinite(value)) return '?'
  if (value === Math.round(value)) return value.toLocaleString('en-US')
  return String(parseFloat(value.toPrecision(6)))
}

// Pairs where the relationship is inverse (not linear) — can't say "1 X = Y Z"
const INVERSE_PAIR_FORMULAS = {
  'mile_per_gallon|liter_per_100km':    'divide 235.215 by the mpg value: L/100km = 235.215 ÷ mpg. For example, 30 mpg = 235.215 ÷ 30 = 7.84 L/100km',
  'liter_per_100km|mile_per_gallon':    'divide 235.215 by the L/100km value: mpg = 235.215 ÷ L/100km. For example, 8 L/100km = 235.215 ÷ 8 = 29.4 mpg',
  'mile_per_gallon_uk|liter_per_100km': 'divide 282.481 by the mpg (UK) value: L/100km = 282.481 ÷ mpg. For example, 40 mpg UK = 282.481 ÷ 40 = 7.06 L/100km',
  'liter_per_100km|mile_per_gallon_uk': 'divide 282.481 by the L/100km value: mpg (UK) = 282.481 ÷ L/100km. For example, 7 L/100km = 282.481 ÷ 7 = 40.4 mpg UK',
  'km_per_liter|liter_per_100km':       'divide 100 by the km/L value: L/100km = 100 ÷ km/L. For example, 15 km/L = 100 ÷ 15 = 6.67 L/100km',
  'liter_per_100km|km_per_liter':       'divide 100 by the L/100km value: km/L = 100 ÷ L/100km. For example, 8 L/100km = 100 ÷ 8 = 12.5 km/L',
}

/** Build a plain-English formula sentence for the pair. */
function formulaText(fromUnit, toUnit, category) {
  if (category === 'temperature') {
    const key = `${fromUnit.id}_${toUnit.id}`
    const formulas = {
      celsius_fahrenheit:    'multiply by 9/5 then add 32: °F = (°C × 1.8) + 32',
      fahrenheit_celsius:    'subtract 32 then multiply by 5/9: °C = (°F − 32) ÷ 1.8',
      celsius_kelvin:        'add 273.15: K = °C + 273.15',
      kelvin_celsius:        'subtract 273.15: °C = K − 273.15',
      fahrenheit_kelvin:     'use K = (°F − 32) × 5/9 + 273.15',
      kelvin_fahrenheit:     'use °F = (K − 273.15) × 9/5 + 32',
    }
    const f = formulas[key]
    return f
      ? `To convert ${fromUnit.label} to ${toUnit.label}, ${f}.`
      : `Use the standard temperature conversion formula between ${fromUnit.label} and ${toUnit.label}.`
  }

  // Inverse (non-linear) pairs
  const inverseFn = INVERSE_PAIR_FORMULAS[`${fromUnit.id}|${toUnit.id}`]
  if (inverseFn) {
    return `To convert ${fromUnit.label} to ${toUnit.label}, ${inverseFn}.`
  }

  const multiplier = fromUnit.factor / toUnit.factor
  if (multiplier >= 1) {
    return `To convert ${fromUnit.label} to ${toUnit.label}, multiply the value by ${fmt(multiplier)}.`
  }
  return `To convert ${fromUnit.label} to ${toUnit.label}, divide the value by ${fmt(1 / multiplier)} (multiply by ${fmt(multiplier)}).`
}

/** Calculate "1 fromUnit = X toUnit" as a readable string. Returns null for inverse/formula-based pairs. */
function oneConversion(fromUnit, toUnit, category) {
  if (category === 'temperature') return null
  if (INVERSE_PAIR_FORMULAS[`${fromUnit.id}|${toUnit.id}`]) return null
  if (typeof fromUnit.toBase === 'function' || typeof toUnit.toBase === 'function') return null
  return fmt(fromUnit.factor / toUnit.factor)
}

/**
 * Generate intro + FAQ content for a unit pair.
 *
 * @param {string} category
 * @param {{ id, label, symbol, factor? }} fromUnit
 * @param {{ id, label, symbol, factor? }} toUnit
 * @returns {{ intro: string, faq: Array<{ q: string, a: string }> }}
 */
export function generatePairContent(category, fromUnit, toUnit) {
  const fromDesc = unitDescriptions[fromUnit.id] ?? `a unit of ${category}`
  const toDesc   = unitDescriptions[toUnit.id]   ?? `a unit of ${category}`
  const conv     = oneConversion(fromUnit, toUnit, category)
  const formula  = formulaText(fromUnit, toUnit, category)

  const convStatement = conv
    ? `1 ${fromUnit.label} equals ${conv} ${toUnit.label}.`
    : ''

  const intro = [
    `Convert ${fromUnit.label} to ${toUnit.label} instantly with our free online converter.`,
    `The ${fromUnit.label} (${fromUnit.symbol}) is ${fromDesc}.`,
    `The ${toUnit.label} (${toUnit.symbol}) is ${toDesc}.`,
    convStatement,
    formula,
  ].filter(Boolean).join(' ')

  const faq = [
    conv && {
      q: `How many ${toUnit.label}s are in 1 ${fromUnit.label}?`,
      a: `1 ${fromUnit.label} equals ${conv} ${toUnit.label}. ${formula}`,
    },
    {
      q: `How do you convert ${fromUnit.label} to ${toUnit.label}?`,
      a: formula + (conv ? ` For example, 10 ${fromUnit.symbol} = ${fmt(parseFloat(conv) * 10)} ${toUnit.symbol}.` : ''),
    },
    {
      q: `What is a ${fromUnit.label} used for?`,
      a: `The ${fromUnit.label} (${fromUnit.symbol}) is ${fromDesc}.`,
    },
    {
      q: `What is a ${toUnit.label} used for?`,
      a: `The ${toUnit.label} (${toUnit.symbol}) is ${toDesc}.`,
    },
    conv && {
      q: `What is 100 ${fromUnit.label} in ${toUnit.label}?`,
      a: `100 ${fromUnit.symbol} equals ${fmt(parseFloat(conv) * 100)} ${toUnit.symbol}. ${formula}`,
    },
  ].filter(Boolean)

  return { intro, faq }
}
