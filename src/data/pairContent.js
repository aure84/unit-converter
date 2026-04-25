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

  // Angle
  degree:    'the most common unit of angle, dividing a full circle into 360 equal parts; used in everyday geometry, navigation, and trigonometry',
  radian:    'the SI unit of angle, where one radian equals the angle subtended by an arc equal in length to the radius; a full circle is 2π radians',
  gradian:   'divides a full circle into 400 equal parts; 90° equals 100 gradians; used in surveying and some European engineering fields',
  arcminute: '1/60 of a degree, used in astronomy, navigation, and optics; there are 3,600 arcminutes in a full degree circle (21,600 in a circle)',
  arcsecond: '1/3,600 of a degree or 1/60 of an arcminute; used in high-precision astronomy, geodesy, and telescope optics',
  turn:      'one complete rotation of 360 degrees or 2π radians; also called a revolution or full circle',

  // Frequency
  hertz:     'the SI unit of frequency, equal to one cycle per second; used for electrical signals, sound waves, and all periodic phenomena',
  kilohertz: 'equal to 1,000 hertz; used for AM radio frequencies, audio processing, and some data transmission rates',
  megahertz: 'equal to 1,000,000 hertz; used for FM radio, Wi-Fi, CPU clock speeds, and wireless communication',
  gigahertz: 'equal to 1,000,000,000 hertz; used for modern CPU and GPU clock speeds, 5G networks, and microwave communications',
  terahertz: 'equal to 1,000,000,000,000 hertz; used in scientific research, medical imaging, and security scanning',
  rpm:       'revolutions per minute — measures rotational speed of engines, motors, hard drives, and turbines; 1 RPM equals 1/60 Hz',

  // Cooking (water-equivalent weight)
  gram_water: 'equal to 1 milliliter of water — useful for converting cooking liquid measurements between grams and volume units such as cups, tablespoons, and teaspoons',

  // Shoe sizes
  eu:       'the European shoe sizing standard, a numeric scale where adults typically range from EU 36 to EU 47, derived from the Paris point system',
  us_men:   "the US Men's shoe sizing scale, running approximately 33 sizes below the EU equivalent (e.g., EU 42 = US Men's 9)",
  us_women: "the US Women's shoe sizing scale, running approximately 31 sizes below the EU equivalent and 2 sizes above US Men's (e.g., EU 42 = US Women's 11)",
  uk:       'the UK shoe sizing scale, similar to US Men\'s but half a size smaller (e.g., US Men\'s 9 = UK 8.5); UK women\'s sizes differ from US Women\'s',
  foot_cm:  'the foot length in centimeters measured from heel to toe while standing — the most universal way to determine shoe size across all systems',

  // Torque
  newton_meter:              'the SI unit of torque, equal to a force of one newton applied at one meter distance; used in European vehicle specifications and engineering',
  foot_pound:                'equal to 1.35582 N·m — the standard torque unit in US automotive manuals for lug nuts, cylinder heads, and structural bolts',
  inch_pound:                'equal to 1/12 of a foot-pound (0.11299 N·m) — used for smaller fasteners, precision instruments, and light-duty torque specifications',
  kilogram_force_meter:      'equal to 9.80665 N·m — used in older Japanese and European torque specifications, representing the torque of 1 kgf applied at 1 meter',
  kilogram_force_centimeter: 'equal to 0.0980665 N·m — used for very small torque values in fine machinery and older metric specifications',
  newton_centimeter:         'equal to 0.01 N·m — used for miniature fasteners, electronics assembly, and precision instrument specifications',

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

// Extra FAQ items injected for specific high-value pairs
const PAIR_EXTRA_FAQ = {
  'bar|psi': [
    {
      q: 'What is the correct tire pressure in psi and bar?',
      a: 'Most passenger car tires are inflated to 30–35 psi (2.1–2.4 bar). SUVs and light trucks typically use 35–44 psi (2.4–3.0 bar). Always check the sticker inside your driver\'s door or the owner\'s manual for your vehicle\'s recommended pressure.',
    },
    {
      q: 'What is 2.2 bar in psi?',
      a: '2.2 bar equals approximately 31.9 psi. This is a common front tire pressure for many European cars. To convert, multiply bar by 14.5038: 2.2 × 14.5038 = 31.9 psi.',
    },
    {
      q: 'What is 2.5 bar in psi?',
      a: '2.5 bar equals approximately 36.3 psi. This is a typical rear tire pressure for many cars, especially when carrying heavier loads.',
    },
  ],
  'psi|bar': [
    {
      q: 'What is 32 psi in bar?',
      a: '32 psi equals approximately 2.21 bar. This is one of the most common tire pressures for passenger vehicles in the United States.',
    },
    {
      q: 'What is 35 psi in bar?',
      a: '35 psi equals approximately 2.41 bar. This is a common tire pressure for SUVs and light trucks.',
    },
    {
      q: 'What tire pressure should I use?',
      a: 'The recommended tire pressure for your vehicle is printed on the sticker inside the driver\'s door jamb (not on the tire itself). Most passenger cars run 30–35 psi (2.1–2.4 bar); SUVs typically use 35–44 psi (2.4–3.0 bar).',
    },
  ],
}

// Real-world FAQ items shown on all pair pages within a category
const CATEGORY_FAQ = {
  weight: [
    {
      q: 'How much does a 55-inch TV weigh?',
      a: 'A typical 55-inch LED/OLED TV weighs between 15 and 25 kg (33–55 lbs), depending on the brand and panel type. OLED TVs tend to be lighter than LED models of the same size. Without a stand, most 55-inch TVs are closer to 15–18 kg.',
    },
    {
      q: 'How heavy is a carry-on suitcase?',
      a: 'An empty carry-on suitcase typically weighs 2–4 kg (4.5–9 lbs). Most airlines allow carry-on bags up to 7–10 kg (15–22 lbs) total weight. Hard-shell suitcases tend to be heavier than soft-shell ones of the same size.',
    },
    {
      q: 'How much does a laptop weigh?',
      a: 'Most laptops weigh between 1.2 and 2.5 kg (2.6–5.5 lbs). Ultrabooks and thin-and-light models typically weigh under 1.5 kg (3.3 lbs). Gaming laptops with larger screens and cooling systems often weigh 2.5–3.5 kg (5.5–7.7 lbs).',
    },
    {
      q: 'How heavy is a bag of sugar or flour?',
      a: 'Standard bags of sugar and flour are sold in 1 kg (2.2 lbs) and 2 kg (4.4 lbs) sizes in most countries. In the US, flour is commonly sold in 5 lb (2.27 kg) bags, and sugar in 4 lb (1.81 kg) or 5 lb (2.27 kg) bags.',
    },
    {
      q: 'What is the average weight of a car?',
      a: 'A typical compact car (e.g., VW Golf, Toyota Corolla) weighs around 1,300–1,500 kg (2,900–3,300 lbs). Mid-size SUVs weigh 1,800–2,200 kg (4,000–4,900 lbs). Electric vehicles tend to be heavier due to the battery pack — a Tesla Model 3 weighs about 1,830 kg (4,030 lbs).',
    },
  ],

  length: [
    {
      q: 'How big is a 27-inch monitor in centimeters?',
      a: 'A 27-inch monitor measures 27 inches diagonally, which is 68.6 cm. The actual screen dimensions depend on the aspect ratio — a 16:9 widescreen at 27 inches is approximately 59.8 cm wide and 33.6 cm tall.',
    },
    {
      q: 'How tall is an average door?',
      a: 'A standard interior door in the US is 80 inches tall (6 ft 8 in = 203 cm) and 32–36 inches wide (81–91 cm). In Europe, standard door heights are typically 200–210 cm (about 79–83 inches).',
    },
    {
      q: 'How long is an iPhone?',
      a: 'iPhone sizes vary by model. The iPhone 15 is 147.6 mm (5.81 in) tall. The iPhone 15 Plus is 160.9 mm (6.33 in). The iPhone 15 Pro Max is 159.9 mm (6.29 in) tall and 76.7 mm (3.02 in) wide.',
    },
    {
      q: 'How long is an average car?',
      a: 'A typical compact car is about 4.2–4.5 m (165–177 inches) long. Mid-size sedans are 4.6–4.9 m (181–193 inches). Large SUVs can reach 5.0–5.3 m (197–209 inches). A standard parking space is usually 4.8–5.4 m (16–18 ft) long.',
    },
    {
      q: 'How tall is a standard ceiling?',
      a: 'Standard ceiling height in US residential construction is 8 feet (2.44 m). Many newer homes use 9 ft (2.74 m) or 10 ft (3.05 m) ceilings. In Europe, ceiling heights typically range from 2.4 m to 2.7 m (about 8–9 ft).',
    },
  ],

  temperature: [
    {
      q: 'What temperature should an oven be for baking?',
      a: 'Common baking temperatures: cookies and cakes 170–180°C (340–355°F), bread 190–220°C (375–430°F), pizza 220–250°C (430–480°F), roasting meat 160–200°C (320–390°F). Fan-assisted ovens typically run 10–20°C hotter than conventional settings.',
    },
    {
      q: 'What is a normal human body temperature?',
      a: 'Normal body temperature is 36.1–37.2°C (97–99°F). A fever is generally defined as above 38°C (100.4°F). A high fever is above 39.5°C (103°F). Temperature varies slightly by time of day and measurement method (oral, axillary, rectal).',
    },
    {
      q: 'At what temperature does it feel hot outside?',
      a: 'Weather temperature reference points: below 10°C (50°F) feels cold, 15–20°C (59–68°F) is cool and comfortable, 25–30°C (77–86°F) is warm, above 35°C (95°F) is hot, and above 40°C (104°F) is very hot and potentially dangerous without shade and hydration.',
    },
    {
      q: 'What temperature is a refrigerator and freezer?',
      a: 'A refrigerator should be kept at 1–4°C (34–39°F) to slow bacterial growth without freezing food. A freezer should be at −18°C (0°F) or colder. Food stays safe indefinitely in a properly maintained freezer, though quality degrades over time.',
    },
    {
      q: 'What is the coldest and hottest temperature ever recorded on Earth?',
      a: 'The coldest temperature recorded was −89.2°C (−128.6°F) at Vostok Station, Antarctica, in 1983. The hottest was 56.7°C (134.1°F) at Furnace Creek, Death Valley, California, in 1913. The average global surface temperature is about 15°C (59°F).',
    },
  ],

  volume: [
    {
      q: 'How many liters does a car fuel tank hold?',
      a: 'A typical compact car fuel tank holds 45–55 liters (12–14.5 US gallons). Mid-size sedans typically have 55–65 L (14.5–17 gal) tanks. Large SUVs and trucks can have 80–110 L (21–29 gal) tanks. Electric vehicles do not have fuel tanks but typically have 40–100 kWh battery packs.',
    },
    {
      q: 'How many liters is a standard bathtub?',
      a: 'A standard bathtub holds about 150–250 liters (40–66 US gallons) when filled to normal bathing depth (about two-thirds full). A full fill to the overflow drain is typically 300–400 liters. Freestanding soaking tubs can hold up to 500 liters.',
    },
    {
      q: 'How much water does a washing machine use?',
      a: 'A modern front-loading washing machine uses 40–60 liters (11–16 US gallons) per cycle. Top-loading machines use more — typically 100–170 liters (26–45 gal). High-efficiency (HE) models use less water per load than standard machines.',
    },
    {
      q: 'How many liters is a standard wine bottle?',
      a: 'A standard wine bottle is 750 ml (0.75 liters), which is about 25.4 fl oz or roughly 5 glasses of wine at a standard 150 ml pour. A magnum is 1.5 liters (2 standard bottles). A half-bottle is 375 ml.',
    },
    {
      q: 'How much water should I drink per day?',
      a: 'General guidelines suggest about 2–3 liters (8–12 cups) of total fluid per day for adults, including water from food. The US National Academies recommend approximately 3.7 liters for men and 2.7 liters for women from all beverages and foods combined. Individual needs vary by activity level, climate, and health.',
    },
  ],

  speed: [
    {
      q: 'How fast does a commercial airplane fly?',
      a: 'Commercial aircraft cruise at 800–920 km/h (500–570 mph), which is roughly Mach 0.75–0.85. A Boeing 737 typically cruises at about 840 km/h (520 mph). The Concorde flew at Mach 2, or about 2,180 km/h (1,354 mph), but was retired in 2003.',
    },
    {
      q: 'How fast is the fastest human?',
      a: 'Usain Bolt set the 100 m world record of 9.58 seconds in 2009, reaching a peak speed of approximately 44.72 km/h (27.8 mph or 12.4 m/s) between the 60 m and 80 m marks. The average speed over the full 100 m was about 37.6 km/h (23.4 mph).',
    },
    {
      q: 'What is the speed of sound?',
      a: 'The speed of sound in air at 20°C (68°F) is approximately 343 m/s, or 1,235 km/h (767 mph). This is known as Mach 1. The speed varies with temperature: at 0°C it is 331 m/s, and at 30°C it is 349 m/s. In water, sound travels about 4.3× faster at roughly 1,480 m/s.',
    },
    {
      q: 'What are typical highway speed limits around the world?',
      a: 'Highway speed limits vary by country: Germany Autobahn has an advisory speed of 130 km/h (81 mph) with no general limit on some sections; France, Spain, and Italy use 130 km/h; the UK is 70 mph (113 km/h); the US interstate limits range from 65–80 mph (105–129 km/h); Australia uses 100–110 km/h (62–68 mph).',
    },
    {
      q: 'How fast does a bicycle go?',
      a: 'A casual cyclist on flat ground averages 15–20 km/h (9–12 mph). A fit recreational rider maintains 25–30 km/h (15–19 mph). Professional road cyclists average 40–45 km/h (25–28 mph) during races. The cycling land speed record is 296 km/h (184 mph), set in a streamlined recumbent bike in 2018.',
    },
  ],

  pressure: [
    {
      q: 'What is the correct tire pressure for a car?',
      a: 'Most passenger cars require 2.0–2.5 bar (29–36 psi) for front and rear tires. Always check the sticker on the inside of the driver\'s door jamb — not the number printed on the tire itself, which is the maximum pressure, not the recommended one. Pressure should be checked when tires are cold.',
    },
    {
      q: 'What pressure should a road bicycle tire have?',
      a: 'Road bike tires (23–28 mm wide) typically run at 6.0–8.0 bar (87–116 psi). Wider tires (32–38 mm) use 4.5–6.0 bar (65–87 psi). Mountain bike tires run much lower, at 1.5–2.5 bar (22–36 psi). The correct pressure depends on rider weight, tire width, and terrain.',
    },
    {
      q: 'What is normal atmospheric pressure?',
      a: 'Standard atmospheric pressure at sea level is 1.01325 bar, 101.325 kPa, or 14.696 psi. Weather reports use hectopascals (hPa) — a "normal" day is around 1013 hPa (1.013 bar). High pressure (fair weather) is above 1020 hPa; low pressure (storms) is below 1000 hPa.',
    },
    {
      q: 'What is a healthy blood pressure reading?',
      a: 'Blood pressure is measured in mmHg (millimeters of mercury), not bar or psi. A healthy reading is below 120/80 mmHg. High blood pressure (hypertension) is defined as 130/80 mmHg or higher. For reference: 120 mmHg systolic = 0.160 bar = 2.32 psi.',
    },
    {
      q: 'What pressure is inside a football (soccer ball)?',
      a: 'FIFA regulations require a match soccer ball to be inflated to 0.6–1.1 bar (8.7–16 psi) above atmospheric pressure. Most balls are inflated to about 0.8–0.9 bar (11.6–13 psi) gauge pressure. An NFL American football is inflated to 12.5–13.5 psi (0.86–0.93 bar) gauge.',
    },
  ],

  area: [
    {
      q: 'How big is an average apartment?',
      a: 'Average apartment sizes vary widely by country. In the US, a one-bedroom apartment averages about 65–75 m² (700–800 sq ft). In Europe, apartments tend to be smaller — a one-bedroom in a major city is typically 40–60 m² (430–645 sq ft). Studio apartments are usually 25–40 m² (270–430 sq ft).',
    },
    {
      q: 'How large is a football (soccer) pitch?',
      a: 'FIFA regulations set the pitch size at 100–110 m long and 64–75 m wide, giving an area of 6,400–8,250 m² (1.58–2.04 acres). A standard match pitch is typically 105 × 68 m = 7,140 m² (1.76 acres). An American football field including end zones is 109.7 × 48.8 m = 5,351 m² (1.32 acres).',
    },
    {
      q: 'How big is a tennis court?',
      a: 'A full tennis court (including surrounding area) is 36.6 m × 18.3 m = 669.8 m² (7,205 sq ft). The playing surface itself is 23.77 m × 10.97 m = 260.7 m² (2,808 sq ft) for singles. A doubles court is 23.77 m × 10.97 m including the wider doubles alleys.',
    },
    {
      q: 'How many square meters is a standard parking space?',
      a: 'A standard parking space in most countries is about 2.4–2.7 m wide and 4.8–5.4 m long, giving an area of roughly 12–15 m² (130–160 sq ft). Compact spaces may be as small as 2.2 × 4.5 m = 9.9 m². Accessible (disabled) spaces are wider, typically 3.6–4.0 m wide.',
    },
    {
      q: 'How big is an acre compared to everyday objects?',
      a: 'One acre is 4,047 m² (43,560 sq ft). For reference: 1 acre is about 90% of a US football field (including end zones); it fits roughly 16 tennis courts; a typical suburban quarter-acre lot is about 1,012 m². Central Park in New York City is 843 acres (341 hectares).',
    },
  ],

  data_storage: [
    {
      q: 'How much storage does a photo take up?',
      a: 'A JPEG photo from a modern smartphone takes up 3–8 MB depending on resolution and compression. RAW photos from a DSLR or mirrorless camera are typically 20–50 MB each. A 1 GB memory card can hold roughly 200–300 JPEG photos or 20–40 RAW files.',
    },
    {
      q: 'How large is a movie file?',
      a: 'A standard-definition movie (480p) is about 700 MB–1.5 GB. An HD (1080p) movie is typically 4–8 GB. A 4K HDR movie from a streaming service is 15–25 GB. A Blu-ray disc holds up to 50 GB (dual layer), and a 4K Ultra HD Blu-ray holds up to 100 GB.',
    },
    {
      q: 'How many songs fit on 1 GB?',
      a: 'At standard quality (128 kbps MP3, about 1 MB per minute), 1 GB holds roughly 250–300 songs of average 3–4 minute length. At high quality (320 kbps, about 2.4 MB per minute), 1 GB holds about 100–130 songs. Lossless audio (FLAC) files are 20–50 MB per song.',
    },
    {
      q: 'How much internet data does streaming use?',
      a: 'Netflix data usage: standard definition uses about 1 GB per hour, HD (1080p) uses 3 GB per hour, and 4K uses 7–15 GB per hour. Spotify streams music at 24–320 kbps, using roughly 10–150 MB per hour. A video call on Zoom uses about 1.5–2.5 GB per hour in HD.',
    },
    {
      q: 'How much storage does Windows or macOS need?',
      a: 'Windows 11 requires a minimum of 64 GB of storage, but a fresh installation takes about 20–30 GB, with updates growing it over time. macOS Sonoma requires about 26 GB for installation. Most users need at least 256 GB of total storage for comfortable everyday use, with 512 GB or 1 TB recommended for longevity.',
    },
  ],

  energy: [
    {
      q: 'How much energy does a household use per day?',
      a: 'The average US household uses about 30 kWh (kilowatt-hours) of electricity per day, or about 900 kWh per month. European households use less — a typical German household averages about 10–12 kWh per day. In joules, 1 kWh = 3,600,000 J (3.6 MJ).',
    },
    {
      q: 'How many calories are in common foods?',
      a: 'Approximate food energy values: an apple ≈ 80 kcal, a slice of bread ≈ 80 kcal, a chicken breast (150 g) ≈ 165 kcal, a chocolate bar (50 g) ≈ 250 kcal, a Big Mac ≈ 550 kcal. Daily intake recommendations are typically 2,000 kcal for women and 2,500 kcal for men.',
    },
    {
      q: 'How much energy does a 60W light bulb use in a day?',
      a: 'A 60-watt bulb running for 8 hours uses 60 W × 8 h = 480 Wh = 0.48 kWh. An equivalent LED bulb at 8–9 watts uses about 64–72 Wh for the same light output — roughly 85% less energy. In joules: 0.48 kWh = 1,728,000 J (1.73 MJ).',
    },
    {
      q: 'How much energy is in a AA battery?',
      a: 'A standard AA alkaline battery stores about 3,000–3,500 mAh at 1.5V, which is roughly 16,000–19,000 joules (4.5–5.3 Wh). For comparison, a typical smartphone battery holds 10,000–15,000 J (2.8–4.2 Wh). A AA battery powers a TV remote for 6–12 months of normal use.',
    },
    {
      q: 'How much energy does a car engine produce?',
      a: 'A typical family car engine produces 100–150 kW (134–201 hp) of peak power. At highway cruising speed, it uses about 15–25 kW continuously. In energy terms, gasoline contains about 32 MJ per liter (8.6 kWh/L). A full 50-liter tank holds about 1,600 MJ of chemical energy, though engines convert only 20–35% of that into motion.',
    },
  ],

  time: [
    {
      q: 'How long is a flight from New York to London?',
      a: 'A direct flight from New York (JFK) to London (Heathrow) takes approximately 7 hours eastbound and 8–9 hours westbound, due to the jet stream. That is 420–540 minutes, or 25,200–32,400 seconds. The Concorde completed the crossing in under 3.5 hours before its retirement in 2003.',
    },
    {
      q: 'How many hours of sleep does a person need?',
      a: 'Adults generally need 7–9 hours of sleep per night (420–540 minutes). Teenagers need 8–10 hours. Young children need 10–14 hours. Over a lifetime, a person spends roughly 26 years asleep — about 9,490 days or 227,760 hours, assuming 7 hours per night for 80 years.',
    },
    {
      q: 'How long does it take to cook common foods?',
      a: 'Approximate cooking times: boiling pasta 8–12 minutes, boiling an egg 6–10 minutes, baking chicken breast 20–30 minutes at 200°C, roasting a whole chicken 1–1.5 hours, baking bread 30–40 minutes. Pressure cookers reduce most cooking times by 50–70%.',
    },
    {
      q: 'How long does a car battery last?',
      a: 'A standard lead-acid car battery lasts 3–5 years under normal use. In hot climates, batteries degrade faster and may last only 2–3 years. In very cold climates, they lose charge capacity but may physically last longer. A dead battery from a fully discharged state can take 2–8 hours to recharge with a standard charger.',
    },
    {
      q: 'How many hours are in a year?',
      a: 'A calendar year has 365 days × 24 hours = 8,760 hours. A leap year has 8,784 hours. In minutes: 525,600 per year (made famous by the musical "Rent"). In seconds: 31,536,000. The exact tropical year (Earth\'s orbit) is 365.2422 days = 8,765.8 hours.',
    },
  ],

  fuel_economy: [
    {
      q: 'What is good fuel economy for a car?',
      a: 'A fuel-efficient compact car achieves 5–6 L/100km (40–47 MPG). An average family sedan uses 7–9 L/100km (26–34 MPG). SUVs and larger vehicles typically use 10–14 L/100km (17–24 MPG). Hybrid vehicles achieve 4–5 L/100km (47–59 MPG). Plug-in hybrids and EVs use 15–20 kWh per 100 km.',
    },
    {
      q: 'How far can a car go on a full tank?',
      a: 'With a 55-liter tank and average fuel consumption of 8 L/100km, a car can travel about 687 km (427 miles) on a full tank. A more efficient car at 6 L/100km with the same tank goes about 917 km (570 miles). Most cars have a range of 500–800 km per fill-up under normal driving conditions.',
    },
    {
      q: 'How much does it cost to fill up a car in Europe vs the US?',
      a: 'European petrol prices are typically €1.50–2.00 per liter ($1.60–2.15/L). In the US, gasoline averages $0.95–1.30 per liter ($3.50–5.00 per US gallon). To fill a 55-liter tank: roughly €83–110 in Europe vs. $52–72 in the US. European cars tend to be more fuel-efficient to compensate for higher fuel prices.',
    },
    {
      q: 'What does L/100km mean and how do I read it?',
      a: 'L/100km means how many liters of fuel your car consumes per 100 kilometers traveled. Lower is better — 5 L/100km is more efficient than 10 L/100km. To convert to US MPG, divide 235.215 by the L/100km value: 8 L/100km = 235.215 ÷ 8 = 29.4 MPG.',
    },
    {
      q: 'How fuel-efficient are electric vehicles compared to petrol cars?',
      a: 'Electric vehicles (EVs) use 15–20 kWh per 100 km, which is equivalent to about 1.5–2 L/100km of gasoline in energy terms — roughly 4–5× more efficient than combustion engines. At an electricity price of €0.30/kWh, driving 100 km costs about €4.50–6.00, compared to €12–16 for a petrol car at €1.60/L and 8 L/100km.',
    },
  ],
  torque: [
    {
      q: 'What is a typical tightening torque for car wheel bolts?',
      a: 'Most passenger car wheel bolts require 100–130 Nm (74–96 ft-lb) of torque. Always check your vehicle\'s manual — overtightening can warp brake discs and crack wheel studs, while undertightening can cause wheels to loosen while driving. A calibrated torque wrench is essential for wheel changes.',
    },
    {
      q: 'How much torque does a car engine produce?',
      a: 'A typical compact car produces 150–250 Nm (110–184 ft-lb) of torque. Family sedans range from 250–400 Nm (184–295 ft-lb). High-performance sports cars can exceed 600 Nm (443 ft-lb). Diesel engines typically produce more torque than equivalent petrol engines, which is why diesels feel stronger at low revs.',
    },
    {
      q: 'What is the difference between Nm and ft-lb?',
      a: '1 ft-lb (foot-pound) = 1.3558 Nm (newton-meters). 1 Nm = 0.7376 ft-lb. Newton-meters are the SI standard used in Europe and most of the world; foot-pounds are common in the US and UK automotive industry. To convert: multiply ft-lb by 1.356 to get Nm, or divide Nm by 1.356 to get ft-lb.',
    },
    {
      q: 'What torque is needed for common DIY tasks?',
      a: 'Spark plugs: 15–25 Nm. Oil drain plug: 20–40 Nm. Cylinder head bolts: 60–100 Nm (varies by engine). Bicycle pedals: 35–40 Nm. Furniture assembly bolts: 5–15 Nm. Always check manufacturer specs — torque requirements vary significantly between materials, thread sizes, and applications.',
    },
    {
      q: 'Why does torque matter more than power at low speeds?',
      a: 'Torque is the rotational force that actually moves a vehicle, while power is the rate at which work is done. At low speeds (pulling, accelerating from standstill), high torque is more useful — it determines how easily a vehicle can start moving or tow a load. Power (HP/kW) determines top speed and sustained high-speed performance. Diesel engines excel at towing due to high low-rpm torque.',
    },
  ],
  power: [
    {
      q: 'How many watts does a household appliance use?',
      a: 'Common household appliances: kettle 2,000–3,000 W, microwave 600–1,200 W, washing machine 500–2,000 W, refrigerator 100–400 W, LED bulb 6–12 W, laptop 30–70 W, TV 50–200 W. Knowing wattage helps estimate electricity costs: a 1,000 W device running 1 hour uses 1 kWh.',
    },
    {
      q: 'How much power does a car engine produce in watts?',
      a: 'A typical compact car engine produces around 75–100 kW (100–135 HP). A mid-range family sedan 110–150 kW (148–201 HP). Sports cars often produce 250–500 kW (335–670 HP). In comparison, a professional cyclist produces about 250–400 W sustained — roughly 400× less than a car engine.',
    },
    {
      q: 'What is the difference between watts and kilowatts?',
      a: '1 kilowatt (kW) = 1,000 watts (W). Watts are used for small appliances and electronics; kilowatts for larger equipment, engines, and electricity billing. Your electricity bill is measured in kilowatt-hours (kWh): a 1,000 W (1 kW) device running for 1 hour consumes 1 kWh.',
    },
    {
      q: 'How do horsepower and kilowatts compare?',
      a: '1 horsepower (HP) = 0.7457 kilowatts. So 100 HP ≈ 74.6 kW and 200 HP ≈ 149 kW. Horsepower is still used for car engines in the US and UK; Europe and most of the world uses kilowatts. A typical family car at 110 kW is about 148 HP.',
    },
    {
      q: 'How much power does a solar panel generate?',
      a: 'A standard residential solar panel produces 300–450 W of peak power. A typical home installation of 10 panels (3.5 kW total) generates roughly 3,500–4,500 kWh per year in central Europe, or 5,000–6,000 kWh in sunnier climates. Average European household consumption is about 3,500–4,500 kWh per year.',
    },
  ],
  cooking: [
    {
      q: 'How many cups is 250 ml?',
      a: '250 ml is about 1.06 US cups — close enough that most recipes treat it as 1 cup. A standard US cup equals 236.6 ml. In cooking, the difference (about 13 ml) is rarely significant unless you\'re scaling a recipe by 4× or more.',
    },
    {
      q: 'How many tablespoons in a cup?',
      a: 'There are 16 tablespoons in 1 US cup (236.6 ml). A tablespoon is about 14.79 ml. Half a cup is 8 tablespoons, and a quarter cup is 4 tablespoons. These conversions are useful when you need to measure without a measuring cup.',
    },
    {
      q: 'How do I convert a recipe from cups to grams?',
      a: 'Cups measure volume, grams measure weight — so the conversion depends on the ingredient. 1 cup of water = 236 g. 1 cup of flour = about 120–130 g. 1 cup of sugar = about 200 g. 1 cup of butter = about 227 g. For baking, weighing with a kitchen scale is more accurate than using cups.',
    },
    {
      q: 'How many teaspoons in a tablespoon?',
      a: 'There are 3 teaspoons in 1 tablespoon. A teaspoon equals about 4.93 ml and a tablespoon about 14.79 ml. This ratio is consistent across US, UK, and metric cooking measurements, making it one of the most universal cooking conversions.',
    },
    {
      q: 'What is a "pinch" or "dash" in cooking?',
      a: 'A pinch is approximately 1/16 teaspoon (about 0.3 ml) — the amount you can hold between two fingers. A dash is slightly more: about 1/8 teaspoon (0.6 ml). A smidgen is 1/32 teaspoon. These informal units are mostly used for salt, spices, and flavoring where precision is less critical.',
    },
  ],
}

// Pairs where the relationship is inverse (not linear) — can't say "1 X = Y Z"
const INVERSE_PAIR_FORMULAS = {
  // Shoe size conversions (additive offsets through EU base)
  'eu|us_men':        "subtract 33 from the EU size: US Men = EU − 33. For example, EU 42 → US Men's 9",
  'us_men|eu':        "add 33 to the US Men's size: EU = US Men + 33. For example, US Men's 9 → EU 42",
  'eu|us_women':      "subtract 31 from the EU size: US Women = EU − 31. For example, EU 39 → US Women's 8",
  'us_women|eu':      "add 31 to the US Women's size: EU = US Women + 31. For example, US Women's 8 → EU 39",
  'eu|uk':            'subtract 33.5 from the EU size: UK = EU − 33.5. For example, EU 42 → UK 8.5',
  'uk|eu':            'add 33.5 to the UK size: EU = UK + 33.5. For example, UK 8.5 → EU 42',
  'eu|foot_cm':       'divide the EU size by 1.575: cm = EU ÷ 1.575. For example, EU 42 → 26.7 cm',
  'foot_cm|eu':       'multiply the foot length in cm by 1.575: EU = cm × 1.575. For example, 26.7 cm → EU 42',
  'us_men|us_women':  "add 2 to the US Men's size: US Women = US Men + 2. For example, US Men's 9 → US Women's 11",
  'us_women|us_men':  "subtract 2 from the US Women's size: US Men = US Women − 2. For example, US Women's 11 → US Men's 9",
  'us_men|uk':        "subtract 0.5 from the US Men's size: UK = US Men − 0.5. For example, US Men's 9 → UK 8.5",
  'uk|us_men':        "add 0.5 to the UK size: US Men = UK + 0.5. For example, UK 8.5 → US Men's 9",
  'us_women|uk':      "subtract 2.5 from the US Women's size: UK = US Women − 2.5. For example, US Women's 11 → UK 8.5",
  'uk|us_women':      "add 2.5 to the UK size: US Women = UK + 2.5. For example, UK 8.5 → US Women's 11",
  'us_men|foot_cm':   "add 33 to get the EU size, then divide by 1.575: cm = (US Men + 33) ÷ 1.575. For example, US Men's 9 → EU 42 → 26.7 cm",
  'foot_cm|us_men':   "multiply by 1.575 to get the EU size, then subtract 33: US Men = (cm × 1.575) − 33. For example, 26.7 cm → EU 42 → US Men's 9",
  'us_women|foot_cm': "add 31 to get the EU size, then divide by 1.575: cm = (US Women + 31) ÷ 1.575. For example, US Women's 8 → EU 39 → 24.8 cm",
  'foot_cm|us_women': "multiply by 1.575 to get the EU size, then subtract 31: US Women = (cm × 1.575) − 31. For example, 24.8 cm → EU 39 → US Women's 8",
  'uk|foot_cm':       'add 33.5 to get the EU size, then divide by 1.575: cm = (UK + 33.5) ÷ 1.575. For example, UK 8.5 → EU 42 → 26.7 cm',
  'foot_cm|uk':       'multiply by 1.575 to get the EU size, then subtract 33.5: UK = (cm × 1.575) − 33.5. For example, 26.7 cm → EU 42 → UK 8.5',
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

  // Inject pair-specific extra FAQ items if available
  const extraFaq = PAIR_EXTRA_FAQ[`${fromUnit.id}|${toUnit.id}`] ?? []

  // Inject category-level real-world FAQ items
  const categoryFaq = CATEGORY_FAQ[category] ?? []

  return { intro, faq: [...faq, ...extraFaq, ...categoryFaq] }
}
