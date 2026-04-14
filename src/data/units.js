/**
 * Unit Registry
 *
 * Linear units use a `factor` representing the unit's value relative to the
 * category's base unit (e.g. for Length the base is meter, so 1 km = 1000 m
 * means factor = 1000).
 *
 * Temperature is non-linear — it uses `toBase` / `fromBase` formula functions
 * where Celsius is the base unit.
 */

export const units = {
  length: {
    base: 'meter',
    units: [
      { id: 'meter',          label: 'Meter',          symbol: 'm',  factor: 1 },
      { id: 'kilometer',      label: 'Kilometer',      symbol: 'km', factor: 1000 },
      { id: 'centimeter',     label: 'Centimeter',     symbol: 'cm', factor: 0.01 },
      { id: 'millimeter',     label: 'Millimeter',     symbol: 'mm', factor: 0.001 },
      { id: 'mile',           label: 'Mile',           symbol: 'mi', factor: 1609.344 },
      { id: 'yard',           label: 'Yard',           symbol: 'yd', factor: 0.9144 },
      { id: 'foot',           label: 'Foot',           symbol: 'ft', factor: 0.3048 },
      { id: 'inch',           label: 'Inch',           symbol: 'in', factor: 0.0254 },
      { id: 'nautical_mile',  label: 'Nautical Mile',  symbol: 'nmi', factor: 1852 },
    ],
  },

  weight: {
    base: 'kilogram',
    units: [
      { id: 'kilogram',   label: 'Kilogram',   symbol: 'kg', factor: 1 },
      { id: 'gram',       label: 'Gram',       symbol: 'g',  factor: 0.001 },
      { id: 'milligram',  label: 'Milligram',  symbol: 'mg', factor: 0.000001 },
      { id: 'pound',      label: 'Pound',      symbol: 'lb', factor: 0.45359237 },
      { id: 'ounce',      label: 'Ounce',      symbol: 'oz', factor: 0.028349523125 },
      { id: 'stone',      label: 'Stone',      symbol: 'st', factor: 6.35029318 },
      { id: 'ton',        label: 'Metric Ton', symbol: 't',  factor: 1000 },
    ],
  },

  temperature: {
    base: 'celsius',
    units: [
      {
        id: 'celsius',
        label: 'Celsius',
        symbol: '°C',
        toBase: (v) => v,
        fromBase: (v) => v,
      },
      {
        id: 'fahrenheit',
        label: 'Fahrenheit',
        symbol: '°F',
        toBase: (v) => (v - 32) * (5 / 9),
        fromBase: (v) => v * (9 / 5) + 32,
      },
      {
        id: 'kelvin',
        label: 'Kelvin',
        symbol: 'K',
        toBase: (v) => v - 273.15,
        fromBase: (v) => v + 273.15,
      },
    ],
  },

  volume: {
    base: 'liter',
    units: [
      { id: 'liter',       label: 'Liter',        symbol: 'L',    factor: 1 },
      { id: 'milliliter',  label: 'Milliliter',   symbol: 'mL',   factor: 0.001 },
      { id: 'gallon',      label: 'Gallon (US)',   symbol: 'gal',  factor: 3.785411784 },
      { id: 'quart',       label: 'Quart (US)',    symbol: 'qt',   factor: 0.946352946 },
      { id: 'pint',        label: 'Pint (US)',     symbol: 'pt',   factor: 0.473176473 },
      { id: 'cup',         label: 'Cup (US)',      symbol: 'cup',  factor: 0.2365882365 },
      { id: 'tablespoon',  label: 'Tablespoon',   symbol: 'tbsp', factor: 0.0147867648 },
      { id: 'teaspoon',    label: 'Teaspoon',     symbol: 'tsp',  factor: 0.0049289216 },
      { id: 'fluid_ounce', label: 'Fluid Ounce',  symbol: 'fl oz', factor: 0.0295735296 },
    ],
  },

  area: {
    base: 'square_meter',
    units: [
      { id: 'square_meter',     label: 'Square Meter',     symbol: 'm²',  factor: 1 },
      { id: 'square_foot',      label: 'Square Foot',      symbol: 'ft²', factor: 0.09290304 },
      { id: 'square_kilometer', label: 'Square Kilometer', symbol: 'km²', factor: 1_000_000 },
      { id: 'square_mile',      label: 'Square Mile',      symbol: 'mi²', factor: 2_589_988.110336 },
      { id: 'acre',             label: 'Acre',             symbol: 'ac',  factor: 4046.8564224 },
      { id: 'hectare',          label: 'Hectare',          symbol: 'ha',  factor: 10_000 },
    ],
  },

  speed: {
    base: 'meter_per_second',
    units: [
      { id: 'meter_per_second',    label: 'Meter per Second',    symbol: 'm/s',  factor: 1 },
      { id: 'kilometer_per_hour',  label: 'Kilometer per Hour',  symbol: 'km/h', factor: 1 / 3.6 },
      { id: 'mile_per_hour',       label: 'Mile per Hour',       symbol: 'mph',  factor: 0.44704 },
      { id: 'knot',                label: 'Knot',                symbol: 'kn',   factor: 0.514444 },
    ],
  },

  time: {
    base: 'second',
    units: [
      { id: 'second', label: 'Second', symbol: 's',   factor: 1 },
      { id: 'minute', label: 'Minute', symbol: 'min', factor: 60 },
      { id: 'hour',   label: 'Hour',   symbol: 'hr',  factor: 3600 },
      { id: 'day',    label: 'Day',    symbol: 'd',   factor: 86_400 },
      { id: 'week',   label: 'Week',   symbol: 'wk',  factor: 604_800 },
      { id: 'month',  label: 'Month',  symbol: 'mo',  factor: 2_629_746 },   // avg 30.4375 days
      { id: 'year',   label: 'Year',   symbol: 'yr',  factor: 31_556_952 },  // avg Gregorian year
    ],
  },

  data_storage: {
    base: 'byte',
    units: [
      { id: 'bit',      label: 'Bit',      symbol: 'b',  factor: 0.125 },
      { id: 'byte',     label: 'Byte',     symbol: 'B',  factor: 1 },
      { id: 'kilobyte', label: 'Kilobyte', symbol: 'KB', factor: 1_024 },
      { id: 'megabyte', label: 'Megabyte', symbol: 'MB', factor: 1_048_576 },
      { id: 'gigabyte', label: 'Gigabyte', symbol: 'GB', factor: 1_073_741_824 },
      { id: 'terabyte', label: 'Terabyte', symbol: 'TB', factor: 1_099_511_627_776 },
      { id: 'petabyte', label: 'Petabyte', symbol: 'PB', factor: 1_125_899_906_842_624 },
    ],
  },
};

/**
 * Returns the unit definition object for the given category + unit id.
 * Returns undefined if not found.
 */
export function getUnit(category, unitId) {
  return units[category]?.units.find((u) => u.id === unitId);
}
