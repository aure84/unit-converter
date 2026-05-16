// src/data/scaleObjects.js
// Reference objects for the interactive scale, keyed by "category|unitId".
// Each array must be sorted by value ascending.
export const SCALE_OBJECTS = {
  'weight|pound': [
    { value: 0.09,  emoji: '🪶', label: 'feather' },
    { value: 0.5,   emoji: '🍎', label: 'apple' },
    { value: 1.1,   emoji: '🍞', label: 'bread loaf' },
    { value: 5,     emoji: '💻', label: 'laptop' },
    { value: 8.5,   emoji: '🪣', label: 'gallon of water' },
    { value: 15,    emoji: '👶', label: 'newborn' },
    { value: 50,    emoji: '🐕', label: 'large dog' },
    { value: 155,   emoji: '🧍', label: 'adult person' },
    { value: 1500,  emoji: '🐎', label: 'horse' },
    { value: 3000,  emoji: '🚗', label: 'car' },
  ],

  'weight|kilogram': [
    { value: 0.04,  emoji: '🪶', label: 'feather' },
    { value: 0.23,  emoji: '🍎', label: 'apple' },
    { value: 0.5,   emoji: '🍞', label: 'bread loaf' },
    { value: 2.3,   emoji: '💻', label: 'laptop' },
    { value: 3.8,   emoji: '🪣', label: 'gallon of water' },
    { value: 7,     emoji: '👶', label: 'newborn' },
    { value: 25,    emoji: '🐕', label: 'large dog' },
    { value: 70,    emoji: '🧍', label: 'adult person' },
    { value: 700,   emoji: '🐎', label: 'horse' },
    { value: 1400,  emoji: '🚗', label: 'car' },
  ],

  'length|meter': [
    { value: 0.01,  emoji: '📌', label: 'thumbtack' },
    { value: 0.1,   emoji: '📱', label: 'smartphone' },
    { value: 0.3,   emoji: '📏', label: 'ruler' },
    { value: 1.75,  emoji: '🧍', label: 'person' },
    { value: 4.5,   emoji: '🚗', label: 'car' },
    { value: 12,    emoji: '🚌', label: 'bus' },
    { value: 100,   emoji: '⚽', label: 'football field' },
    { value: 324,   emoji: '🗼', label: 'Eiffel Tower' },
    { value: 1000,  emoji: '🏃', label: '1 kilometer' },
  ],

  'length|kilometer': [
    { value: 0.1,   emoji: '🏘️', label: 'city block' },
    { value: 0.5,   emoji: '🚶', label: '6-min walk' },
    { value: 1,     emoji: '🏃', label: '15-min walk' },
    { value: 5,     emoji: '🏅', label: '5K run' },
    { value: 42,    emoji: '🎖️', label: 'marathon' },
    { value: 100,   emoji: '🚗', label: 'road trip' },
    { value: 500,   emoji: '🚆', label: 'intercity train' },
    { value: 2000,  emoji: '✈️', label: 'short flight' },
  ],

  'length|foot': [
    { value: 0.25,  emoji: '🪙', label: 'coin' },
    { value: 1,     emoji: '🦶', label: 'one foot' },
    { value: 5.9,   emoji: '🧍', label: 'avg person' },
    { value: 12,    emoji: '🚗', label: 'car' },
    { value: 40,    emoji: '🏠', label: 'house' },
    { value: 300,   emoji: '⚽', label: 'football field' },
    { value: 1454,  emoji: '🏙️', label: 'Empire State' },
    { value: 5280,  emoji: '📍', label: '1 mile' },
  ],

  'length|centimeter': [
    { value: 1,     emoji: '📌', label: 'thumbtack' },
    { value: 2.54,  emoji: '👆', label: '1 inch' },
    { value: 15,    emoji: '📏', label: 'ruler' },
    { value: 30,    emoji: '🦶', label: '1 foot' },
    { value: 91,    emoji: '📐', label: '1 yard' },
    { value: 170,   emoji: '🧍', label: 'person' },
    { value: 450,   emoji: '🚗', label: 'car length' },
  ],

  'length|inch': [
    { value: 0.9,   emoji: '📎', label: 'paperclip' },
    { value: 3,     emoji: '💳', label: 'credit card' },
    { value: 6,     emoji: '📱', label: 'smartphone' },
    { value: 12,    emoji: '📏', label: 'ruler' },
    { value: 36,    emoji: '🪑', label: '1 yard' },
    { value: 72,    emoji: '🧍', label: '6-foot person' },
    { value: 120,   emoji: '🚗', label: 'car length' },
  ],

  'length|mile': [
    { value: 0.06,  emoji: '🏘️', label: 'city block' },
    { value: 0.5,   emoji: '🚶', label: 'short walk' },
    { value: 1,     emoji: '🏃', label: '1-mile run' },
    { value: 3.1,   emoji: '🏅', label: '5K' },
    { value: 26.2,  emoji: '🎖️', label: 'marathon' },
    { value: 100,   emoji: '🚗', label: 'road trip' },
    { value: 600,   emoji: '✈️', label: 'regional flight' },
  ],

  'temperature|celsius': [
    { value: -40,   emoji: '🥶', label: 'Siberian winter' },
    { value: -18,   emoji: '❄️', label: 'freezer' },
    { value: 0,     emoji: '🧊', label: 'freezing' },
    { value: 10,    emoji: '🧥', label: 'cold day' },
    { value: 20,    emoji: '🌤️', label: 'mild day' },
    { value: 37,    emoji: '🤒', label: 'body temp' },
    { value: 60,    emoji: '☕', label: 'hot coffee' },
    { value: 100,   emoji: '♨️', label: 'boiling' },
  ],

  'temperature|fahrenheit': [
    { value: -40,   emoji: '🥶', label: 'Siberian winter' },
    { value: 0,     emoji: '❄️', label: 'very cold' },
    { value: 32,    emoji: '🧊', label: 'freezing' },
    { value: 50,    emoji: '🧥', label: 'cold day' },
    { value: 68,    emoji: '🌤️', label: 'room temp' },
    { value: 98.6,  emoji: '🤒', label: 'body temp' },
    { value: 140,   emoji: '☕', label: 'hot coffee' },
    { value: 212,   emoji: '♨️', label: 'boiling' },
  ],

  'speed|kilometer_per_hour': [
    { value: 1.5,   emoji: '🐢', label: 'turtle' },
    { value: 5,     emoji: '🚶', label: 'walking' },
    { value: 15,    emoji: '🚴', label: 'cycling' },
    { value: 50,    emoji: '🚗', label: 'city driving' },
    { value: 100,   emoji: '🛣️', label: 'highway' },
    { value: 200,   emoji: '🚄', label: 'fast train' },
    { value: 600,   emoji: '🛫', label: 'propeller plane' },
    { value: 900,   emoji: '✈️', label: 'jet airliner' },
  ],

  'speed|mile_per_hour': [
    { value: 1,     emoji: '🐢', label: 'turtle' },
    { value: 3,     emoji: '🚶', label: 'walking' },
    { value: 10,    emoji: '🚴', label: 'cycling' },
    { value: 30,    emoji: '🚗', label: 'city driving' },
    { value: 65,    emoji: '🛣️', label: 'highway' },
    { value: 125,   emoji: '🚄', label: 'fast train' },
    { value: 400,   emoji: '🛫', label: 'propeller plane' },
    { value: 575,   emoji: '✈️', label: 'jet airliner' },
  ],
}
