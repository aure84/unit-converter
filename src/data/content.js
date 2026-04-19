/**
 * SEO content for each category page.
 * Each entry has: h1 (question), intro, explanation, examples, and faq items.
 */
export const categoryContent = {
  length: {
    h1: 'How Many Feet Are in a Meter?',
    intro:
      'Convert between meters, feet, miles, kilometers, and more with our free length converter. Whether you\'re measuring distances for travel, construction, or everyday tasks, accurate unit conversion is just a click away.',
    explanation:
      'Length units fall into two systems: metric (meters, kilometers, centimeters) and imperial/US customary (feet, miles, inches). The meter is the SI base unit — 1 meter equals exactly 3.28084 feet. Use the converter above to switch between any combination instantly.',
    examples: [
      { label: '1 meter', to: '3.281 feet' },
      { label: '1 kilometer', to: '0.621 miles' },
      { label: '1 inch', to: '2.54 centimeters' },
    ],
    faq: [
      { q: 'How many feet are in a meter?', a: '1 meter equals 3.28084 feet. To convert meters to feet, multiply the meter value by 3.28084.' },
      { q: 'How do you convert kilometers to miles?', a: 'Multiply the number of kilometers by 0.621371. For example, 10 km × 0.621371 = 6.21 miles.' },
      { q: 'How many centimeters are in an inch?', a: '1 inch equals exactly 2.54 centimeters. Conversely, 1 centimeter equals approximately 0.3937 inches.' },
      { q: 'What is a nautical mile?', a: 'A nautical mile equals 1,852 meters (about 1.151 statute miles). It is used in maritime and aviation navigation.' },
      { q: 'How many millimeters are in a centimeter?', a: '1 centimeter equals 10 millimeters. There are 1,000 millimeters in a meter.' },
    ],
  },

  weight: {
    h1: 'How Many Pounds Are in a Kilogram?',
    intro:
      'Convert kilograms, pounds, ounces, grams, and more instantly. Our weight converter is ideal for cooking, fitness tracking, shipping calculations, and scientific work.',
    explanation:
      'The kilogram is the SI base unit of mass, used worldwide in science and everyday life. The pound is standard in the US and UK. 1 kilogram equals 2.20462 pounds. Ounces are commonly used for smaller quantities in cooking and food labeling.',
    examples: [
      { label: '1 kilogram', to: '2.205 pounds' },
      { label: '1 pound', to: '453.6 grams' },
      { label: '1 ounce', to: '28.35 grams' },
    ],
    faq: [
      { q: 'How many pounds are in a kilogram?', a: '1 kilogram equals 2.20462 pounds. To convert kg to lbs, multiply by 2.20462.' },
      { q: 'How many grams are in an ounce?', a: '1 ounce equals 28.3495 grams. To convert ounces to grams, multiply by 28.3495.' },
      { q: 'What is a stone in pounds?', a: '1 stone equals 14 pounds (approximately 6.35 kg). Stones are commonly used in the UK and Ireland to measure body weight.' },
      { q: 'How many ounces are in a pound?', a: 'There are 16 ounces in 1 pound. This is the standard in the US customary and imperial systems.' },
      { q: 'How do you convert grams to kilograms?', a: 'Divide the number of grams by 1,000. For example, 500 g ÷ 1,000 = 0.5 kg.' },
    ],
  },

  temperature: {
    h1: 'How Do You Convert Celsius to Fahrenheit?',
    intro:
      'Convert Celsius, Fahrenheit, and Kelvin instantly and accurately. Temperature conversion is essential for cooking, weather forecasting, scientific research, and travel between countries using different systems.',
    explanation:
      'Celsius and Fahrenheit use different zero points and scale steps. The formula is: °F = (°C × 9/5) + 32. Kelvin starts at absolute zero and is used in science: K = °C + 273.15. Water freezes at 0°C / 32°F and boils at 100°C / 212°F.',
    examples: [
      { label: '0°C (freezing)', to: '32°F' },
      { label: '100°C (boiling)', to: '212°F' },
      { label: '37°C (body temp)', to: '98.6°F' },
    ],
    faq: [
      { q: 'How do you convert Celsius to Fahrenheit?', a: 'Use the formula: °F = (°C × 9/5) + 32. For example, 20°C × 9/5 + 32 = 68°F.' },
      { q: 'How do you convert Fahrenheit to Celsius?', a: 'Use the formula: °C = (°F − 32) × 5/9. For example, (98.6°F − 32) × 5/9 = 37°C.' },
      { q: 'What is absolute zero?', a: 'Absolute zero is 0 Kelvin, which equals −273.15°C or −459.67°F. It is the lowest theoretically possible temperature.' },
      { q: 'What is normal body temperature in Fahrenheit?', a: 'Normal human body temperature is 98.6°F (37°C). Temperatures above 100.4°F (38°C) are generally considered a fever.' },
      { q: 'What is the boiling point of water in Fahrenheit?', a: 'Water boils at 212°F (100°C) at sea level. At higher altitudes, the boiling point is lower due to reduced air pressure.' },
    ],
  },

  volume: {
    h1: 'How Many Liters Are in a US Gallon?',
    intro:
      'Convert liters, gallons, milliliters, cups, tablespoons, and more. Our volume converter handles both US customary and metric measurements, making it perfect for cooking, baking, and scientific use.',
    explanation:
      'Volume units differ between metric (liters, milliliters) and US customary (gallons, cups, fluid ounces). 1 US gallon equals 3.78541 liters. Note that the UK imperial gallon is larger at 4.54609 liters — always check which system a recipe or spec uses.',
    examples: [
      { label: '1 US gallon', to: '3.785 liters' },
      { label: '1 cup', to: '236.6 milliliters' },
      { label: '1 liter', to: '33.81 fl oz' },
    ],
    faq: [
      { q: 'How many liters are in a US gallon?', a: '1 US gallon equals 3.78541 liters. Note that the UK imperial gallon is larger, equal to 4.54609 liters.' },
      { q: 'How many milliliters are in a cup?', a: '1 US cup equals 236.588 milliliters. In metric countries, a cup is often rounded to 250 ml.' },
      { q: 'How many tablespoons are in a cup?', a: 'There are 16 tablespoons in 1 US cup. 1 tablespoon equals 3 teaspoons or approximately 14.79 ml.' },
      { q: 'How many cups are in a liter?', a: '1 liter equals approximately 4.227 US cups. This is useful for scaling recipes between metric and US measurements.' },
      { q: 'How many fluid ounces are in a pint?', a: '1 US pint equals 16 fluid ounces or 473.176 ml. The UK imperial pint is larger at 20 fluid ounces (568 ml).' },
    ],
  },

  area: {
    h1: 'How Many Square Feet Are in a Square Meter?',
    intro:
      'Convert square meters, square feet, acres, hectares, and more. Our area converter is perfect for real estate listings, construction projects, agriculture planning, and land surveying.',
    explanation:
      'Area units scale as the square of length units. 1 square meter equals 10.7639 square feet. For land, hectares (metric) and acres (imperial) are most common — 1 hectare = 2.471 acres = 10,000 m².',
    examples: [
      { label: '1 square meter', to: '10.76 square feet' },
      { label: '1 acre', to: '4,047 square meters' },
      { label: '1 hectare', to: '2.471 acres' },
    ],
    faq: [
      { q: 'How many square feet are in a square meter?', a: '1 square meter equals 10.7639 square feet. To convert m² to ft², multiply by 10.7639.' },
      { q: 'How many acres are in a hectare?', a: '1 hectare equals 2.47105 acres. A hectare is 10,000 square meters, commonly used in agriculture and land measurement.' },
      { q: 'How big is an acre in square feet?', a: '1 acre equals 43,560 square feet or 4,046.86 square meters. It is roughly the size of a football field.' },
      { q: 'How many square meters are in a hectare?', a: 'There are exactly 10,000 square meters in 1 hectare. A hectare is a 100m × 100m square.' },
      { q: 'How big is a square mile in acres?', a: '1 square mile equals 640 acres or 2,589,988 square meters (approximately 259 hectares).' },
    ],
  },

  speed: {
    h1: 'How Do You Convert km/h to mph?',
    intro:
      'Convert meters per second, kilometers per hour, miles per hour, knots, and more. Our speed converter is useful for driving, aviation, weather reports, and sports performance tracking.',
    explanation:
      'Speed conversion between metric and imperial is straightforward: multiply km/h by 0.621371 to get mph. Knots (used in aviation and maritime navigation) equal exactly 1.852 km/h. m/s × 3.6 = km/h.',
    examples: [
      { label: '100 km/h', to: '62.14 mph' },
      { label: '60 mph', to: '96.56 km/h' },
      { label: '1 knot', to: '1.852 km/h' },
    ],
    faq: [
      { q: 'How many km/h is 1 mph?', a: '1 mile per hour equals 1.60934 km/h. To convert mph to km/h, multiply by 1.60934.' },
      { q: 'What is the speed of sound in km/h?', a: 'The speed of sound in air at sea level is approximately 1,235 km/h (343 m/s or 767 mph).' },
      { q: 'What is a knot in km/h?', a: '1 knot equals 1.852 km/h. Knots are the standard unit of speed in maritime and aviation contexts.' },
      { q: 'How fast is 100 km/h in mph?', a: '100 km/h equals approximately 62.14 mph. This is a common highway speed limit in many countries.' },
      { q: 'How do you convert m/s to km/h?', a: 'Multiply the m/s value by 3.6. For example, 10 m/s × 3.6 = 36 km/h.' },
    ],
  },

  time: {
    h1: 'How Many Seconds Are in an Hour?',
    intro:
      'Convert seconds, minutes, hours, days, weeks, months, and years instantly. Our time converter is useful for project planning, scientific calculations, scheduling, and everyday time management.',
    explanation:
      'Time units are fixed by definition: 60 seconds = 1 minute, 60 minutes = 1 hour, 24 hours = 1 day, 7 days = 1 week. Months and years vary slightly (28–31 days per month, 365 or 366 days per year).',
    examples: [
      { label: '1 hour', to: '3,600 seconds' },
      { label: '1 day', to: '86,400 seconds' },
      { label: '1 week', to: '168 hours' },
    ],
    faq: [
      { q: 'How many seconds are in a day?', a: 'There are 86,400 seconds in a day (24 hours × 60 minutes × 60 seconds).' },
      { q: 'How many hours are in a week?', a: 'There are 168 hours in a week (7 days × 24 hours).' },
      { q: 'How many seconds are in an hour?', a: 'There are 3,600 seconds in an hour (60 minutes × 60 seconds).' },
      { q: 'How many weeks are in a year?', a: 'A standard year has 52 weeks and 1 day (or 2 days in a leap year), totaling 365 or 366 days.' },
      { q: 'How many days are in a month on average?', a: 'The average month has approximately 30.44 days (365.25 days ÷ 12 months). Individual months range from 28 to 31 days.' },
    ],
  },

  data_storage: {
    h1: 'How Many Megabytes Are in a Gigabyte?',
    intro:
      'Convert bytes, kilobytes, megabytes, gigabytes, terabytes, and more. Our data storage converter is essential for understanding file sizes, hard drive capacity, and data transfer calculations.',
    explanation:
      'Data storage uses binary prefixes: each unit is 1,024 times the previous. 1 KB = 1,024 bytes, 1 MB = 1,024 KB, 1 GB = 1,024 MB, 1 TB = 1,024 GB. Drive manufacturers sometimes use decimal (1,000×), which is why a "1 TB" drive shows less in your OS.',
    examples: [
      { label: '1 gigabyte', to: '1,024 megabytes' },
      { label: '1 terabyte', to: '1,024 gigabytes' },
      { label: '1 megabyte', to: '1,024 kilobytes' },
    ],
    faq: [
      { q: 'How many bytes are in a kilobyte?', a: '1 kilobyte (KB) equals 1,024 bytes. Storage is measured in powers of 2, so each step is 1,024× the previous.' },
      { q: 'How many megabytes are in a gigabyte?', a: '1 gigabyte (GB) equals 1,024 megabytes (MB). A typical smartphone photo is 3–5 MB.' },
      { q: 'How many gigabytes are in a terabyte?', a: '1 terabyte (TB) equals 1,024 gigabytes (GB). A 1 TB hard drive can store roughly 250,000 photos.' },
      { q: 'What is the difference between a bit and a byte?', a: '1 byte equals 8 bits. Bits are the smallest unit of data (0 or 1), while bytes are used to measure file and storage sizes.' },
      { q: 'How many GB is a typical HD movie?', a: 'A typical HD (1080p) movie is 4–8 GB. A 4K movie can be 15–25 GB depending on compression.' },
    ],
  },

  pressure: {
    h1: 'How Many PSI Is 1 Bar?',
    intro:
      'Convert pascals, bar, psi, atmospheres, torr, and more with our free pressure converter. Whether you need to check tire pressure, read a weather report, or work with industrial specifications, accurate pressure conversion is instant and easy.',
    explanation:
      'Pressure measures force per unit area. 1 bar = 14.5038 psi. The pascal (Pa) is the SI unit: standard atmospheric pressure is 101,325 Pa = 1.01325 bar = 14.696 psi. Bar is common in Europe; psi is standard in the US.',
    examples: [
      { label: '1 bar', to: '14.504 psi' },
      { label: '1 atm', to: '101,325 Pa' },
      { label: '2.2 bar', to: '31.9 psi (typical car tire)' },
    ],
    faq: [
      { q: 'How many psi is 1 bar?', a: '1 bar equals 14.5038 psi (pounds per square inch). Bar is common in European tire pressure ratings, while psi is standard in the US.' },
      { q: 'What is standard atmospheric pressure?', a: 'Standard atmospheric pressure is 1 atm = 101,325 Pa = 1.01325 bar = 14.696 psi. It is the average air pressure at sea level.' },
      { q: 'What is the difference between bar and psi?', a: 'Bar and psi both measure pressure, but use different scales. 1 bar ≈ 14.5 psi. Bar is used in most of the world; psi is common in the US and UK.' },
      { q: 'What is a pascal?', a: 'A pascal (Pa) is the SI unit of pressure, equal to 1 newton per square meter. Atmospheric pressure is about 101,325 Pa or 101.325 kPa.' },
      { q: 'What tire pressure is recommended in bar vs psi?', a: 'Most car tires are inflated to 2.0–2.5 bar (29–36 psi). Always check the sticker inside your car door for the manufacturer\'s recommended pressure.' },
    ],
  },

  energy: {
    h1: 'How Many Joules Are in a Kilocalorie?',
    intro:
      'Convert joules, kilocalories, kilowatt-hours, BTUs, and more with our free energy converter. Essential for nutrition tracking, electricity bills, physics homework, and engineering calculations.',
    explanation:
      'Energy units span a wide range. 1 food calorie (kcal) = 4,184 joules. 1 kWh = 3,600,000 joules — this is what your electricity meter counts. BTUs are used to rate heating and cooling equipment in the US.',
    examples: [
      { label: '1 kilocalorie (kcal)', to: '4.184 kilojoules' },
      { label: '1 kilowatt-hour', to: '3,600 kilojoules' },
      { label: '1 BTU', to: '1,055 joules' },
    ],
    faq: [
      { q: 'How many joules are in a calorie?', a: '1 calorie (thermochemical) equals 4.184 joules. The food calorie (kilocalorie) equals 4,184 joules or 4.184 kJ.' },
      { q: 'What is the difference between a calorie and a kilocalorie?', a: 'A food calorie (written as "Calorie" with a capital C or "kcal") equals 1,000 small calories. Nutrition labels use kilocalories (kcal).' },
      { q: 'How many kJ are in 1 kcal?', a: '1 kilocalorie (kcal) equals 4.184 kilojoules (kJ). Both are commonly used in nutrition: kcal in the US, kJ in Australia and many other countries.' },
      { q: 'What is a kilowatt-hour?', a: 'A kilowatt-hour (kWh) is the energy used by a 1,000-watt appliance running for 1 hour. It equals 3,600,000 joules (3.6 MJ) and is the standard unit on electricity bills.' },
      { q: 'What is a BTU?', a: 'A British Thermal Unit (BTU) is the energy needed to heat 1 pound of water by 1°F. 1 BTU equals approximately 1,055 joules. BTUs are used to rate air conditioners and heating systems.' },
    ],
  },

  fuel_economy: {
    h1: 'How Do You Convert MPG to L/100km?',
    intro:
      'Convert miles per gallon (mpg), liters per 100 km (L/100km), and kilometers per liter (km/L) instantly. Our fuel economy converter helps you compare car efficiency across US, European, and metric standards.',
    explanation:
      'MPG and L/100km are inversely related — a higher MPG means a lower L/100km. The conversion is: L/100km = 235.215 ÷ mpg. Note that US mpg and UK mpg differ because US and UK gallons have different volumes.',
    examples: [
      { label: '30 mpg (US)', to: '7.84 L/100km' },
      { label: '40 mpg (US)', to: '5.88 L/100km' },
      { label: '6 L/100km', to: '39.2 mpg' },
    ],
    faq: [
      { q: 'How do you convert mpg to L/100km?', a: 'Divide 235.215 by the mpg value. For example, 30 mpg = 235.215 ÷ 30 = 7.84 L/100km. Note that mpg and L/100km are inversely related — a higher mpg means a lower L/100km.' },
      { q: 'How do you convert L/100km to mpg?', a: 'Divide 235.215 by the L/100km value. For example, 8 L/100km = 235.215 ÷ 8 = 29.4 mpg.' },
      { q: 'What is a good fuel economy in L/100km?', a: 'A fuel-efficient compact car typically achieves 5–7 L/100km. SUVs and trucks often use 9–14 L/100km. Electric vehicles are rated separately in kWh/100km.' },
      { q: 'What is the difference between US mpg and UK mpg?', a: 'The US gallon (3.785 L) is smaller than the UK imperial gallon (4.546 L), so UK mpg figures are about 20% higher for the same vehicle. Always check which gallon standard is used.' },
      { q: 'How do you convert km/L to L/100km?', a: 'Divide 100 by the km/L value. For example, 15 km/L = 100 ÷ 15 = 6.67 L/100km. The two scales are simply reciprocals of each other.' },
    ],
  },

  power: {
    h1: 'How Many Watts Is 1 Horsepower?',
    intro:
      'Convert watts, kilowatts, horsepower, BTU/h, and more with our free power converter. Whether you need to compare engine output, understand electricity consumption, or size an air conditioner, accurate power conversion is instant and easy.',
    explanation:
      'Power measures energy per unit time. 1 mechanical horsepower = 745.7 watts. 1 metric horsepower (PS) = 735.5 watts — the two are close but not identical. Kilowatts are used for electric motors and household appliances.',
    examples: [
      { label: '1 horsepower (hp)', to: '745.7 watts' },
      { label: '100 kilowatts', to: '134.1 hp' },
      { label: '1 PS (metric hp)', to: '735.5 watts' },
    ],
    faq: [
      { q: 'How many watts is 1 horsepower?', a: '1 mechanical horsepower (hp) equals 745.7 watts. 1 metric horsepower (PS or CV) equals 735.5 watts. The two are very close but not identical.' },
      { q: 'How do you convert horsepower to kilowatts?', a: 'Multiply horsepower by 0.7457. For example, 100 hp × 0.7457 = 74.57 kW. This is the standard conversion for mechanical horsepower.' },
      { q: 'What is the difference between mechanical and metric horsepower?', a: 'Mechanical horsepower (used in the US) equals 745.7 W. Metric horsepower (PS, used in Europe) equals 735.5 W. A 100 PS European engine is about 98.6 US hp.' },
      { q: 'How many watts is 1 kilowatt?', a: '1 kilowatt (kW) equals exactly 1,000 watts. Kilowatts are used to rate electric motors, home appliances, and power plants.' },
      { q: 'What is BTU per hour?', a: 'BTU/h (British Thermal Units per hour) measures heat output. It is used to rate air conditioners and heating systems. 1 BTU/h equals approximately 0.293 watts. A typical 12,000 BTU/h air conditioner equals about 3,517 watts (3.5 kW).' },
    ],
  },

  cooking: {
    h1: 'How Many Tablespoons Are in a Cup?',
    intro:
      'Convert cups, tablespoons, teaspoons, milliliters, fluid ounces, pints, and more with our free cooking converter. Perfect for scaling recipes, adapting international cookbooks, and converting between metric and US measurements.',
    explanation:
      '1 US cup = 16 tablespoons = 48 teaspoons = 236.6 ml. International recipes often use metric (ml, dl, L), while US recipes use cups and tablespoons. When adapting recipes, use this converter to avoid measurement errors.',
    examples: [
      { label: '1 cup', to: '16 tablespoons' },
      { label: '1 tablespoon', to: '3 teaspoons' },
      { label: '1 cup', to: '236.6 milliliters' },
    ],
    faq: [
      { q: 'How many tablespoons are in a cup?', a: 'There are 16 tablespoons in 1 US cup. 1 tablespoon equals 3 teaspoons or approximately 14.79 ml.' },
      { q: 'How many ml is a cup?', a: '1 US cup equals 236.588 ml. In metric recipes, a cup is often rounded to 240 ml or 250 ml depending on the country.' },
      { q: 'How many teaspoons are in a tablespoon?', a: 'There are 3 teaspoons in 1 tablespoon. 1 teaspoon equals approximately 4.93 ml.' },
      { q: 'How many ml is a fluid ounce?', a: '1 US fluid ounce equals 29.5735 ml. The UK imperial fluid ounce is slightly different at 28.4131 ml.' },
      { q: 'How many cups are in a pint?', a: 'There are 2 cups in 1 US pint (473 ml). A US pint equals 16 fluid ounces. The UK imperial pint is larger at 20 fluid ounces (568 ml).' },
    ],
  },

  angle: {
    h1: 'How Do You Convert Degrees to Radians?',
    intro:
      'Convert degrees, radians, gradians, arcminutes, arcseconds, and turns with our free angle converter. Used in mathematics, engineering, navigation, and astronomy.',
    explanation:
      'Degrees are the most familiar unit: a full circle is 360°. Radians are the SI unit for angles — one full circle is 2π radians (≈ 6.2832). To convert degrees to radians, multiply by π/180. Gradians divide the circle into 400 parts and are common in surveying.',
    examples: [
      { label: '90°', to: '1.5708 radians' },
      { label: '1 radian', to: '57.296°' },
      { label: '180°', to: '200 gradians' },
    ],
    faq: [
      { q: 'How do you convert degrees to radians?', a: 'Multiply degrees by π/180. For example, 90° × π/180 = 1.5708 radians.' },
      { q: 'How do you convert radians to degrees?', a: 'Multiply radians by 180/π. For example, 1 radian × 180/π ≈ 57.296°.' },
      { q: 'What is a gradian?', a: 'A gradian (grad) divides a full circle into 400 equal parts. 90° equals 100 grad. Gradians are used in surveying and some European engineering fields.' },
      { q: 'What is an arcminute?', a: 'An arcminute is 1/60 of a degree. There are 60 arcminutes in one degree and 3,600 arcseconds in one degree. Arcminutes and arcseconds are used in astronomy and navigation.' },
      { q: 'How many degrees is one full turn?', a: 'One full turn (revolution) equals 360 degrees, 2π radians, or 400 gradians.' },
    ],
  },

  frequency: {
    h1: 'How Do You Convert Hz to kHz?',
    intro:
      'Convert hertz, kilohertz, megahertz, gigahertz, terahertz, and RPM with our free frequency converter. Used in electronics, audio engineering, radio communications, and mechanics.',
    explanation:
      'Frequency measures how many cycles occur per second. 1 hertz (Hz) = 1 cycle per second. Prefixes scale up: 1 kHz = 1,000 Hz, 1 MHz = 1,000,000 Hz. RPM (revolutions per minute) is used in motors and engines — 1 RPM equals 1/60 Hz.',
    examples: [
      { label: '1 kHz', to: '1,000 Hz' },
      { label: '1 MHz', to: '1,000 kHz' },
      { label: '3,000 RPM', to: '50 Hz' },
    ],
    faq: [
      { q: 'How do you convert Hz to kHz?', a: 'Divide the number of hertz by 1,000. For example, 5,000 Hz ÷ 1,000 = 5 kHz.' },
      { q: 'How do you convert kHz to MHz?', a: 'Divide kilohertz by 1,000. For example, 2,400 kHz ÷ 1,000 = 2.4 MHz.' },
      { q: 'What is RPM in Hz?', a: 'RPM (revolutions per minute) divided by 60 gives Hz. For example, 3,000 RPM ÷ 60 = 50 Hz.' },
      { q: 'What frequency is human hearing?', a: 'Humans typically hear between 20 Hz and 20,000 Hz (20 kHz). Audio equipment is usually specified across this range.' },
      { q: 'What is the difference between MHz and GHz?', a: '1 GHz equals 1,000 MHz. CPU speeds are measured in GHz (e.g., a 3.5 GHz processor runs 3,500,000,000 cycles per second).' },
    ],
  },

  currency: {
    h1: 'How Do I Convert Between Currencies?',
    intro:
      'Convert between US dollars, euros, British pounds, Japanese yen, Hungarian forint, and 10+ more currencies with daily-updated exchange rates. Our currency converter uses ECB data via Frankfurter API — free, accurate, and no sign-up required.',
    explanation:
      'Exchange rates fluctuate daily based on market conditions. Our converter fetches rates from the European Central Bank (ECB) and caches them for 24 hours. The rate shown is the mid-market rate — actual bank rates include a spread on top.',
    examples: [
      { label: '1 USD', to: '≈ 0.92 EUR (mid-market, varies daily)' },
      { label: '1 EUR', to: '≈ 0.86 GBP (mid-market, varies daily)' },
      { label: '1 GBP', to: '≈ 1.27 USD (mid-market, varies daily)' },
    ],
    faq: [
      { q: 'How often are the exchange rates updated?', a: 'Exchange rates are updated daily using data from the European Central Bank (ECB) via the Frankfurter API. Rates are cached in your browser for 24 hours to minimize unnecessary requests.' },
      { q: 'Are the exchange rates accurate?', a: 'The rates come from the European Central Bank (ECB) daily reference rates, which are widely used as a reliable benchmark. However, actual bank and exchange bureau rates will differ due to fees and spreads.' },
      { q: 'Why is my converted amount different from what my bank charges?', a: 'Banks and exchange bureaus apply their own conversion fees and spreads on top of the mid-market rate. The rate shown here is the mid-market (interbank) rate — the fairest reference point for comparison.' },
      { q: 'Which currencies are supported?', a: 'We support 15 major currencies: USD, EUR, GBP, JPY, HUF, CHF, CAD, AUD, CNY, SEK, NOK, DKK, PLN, CZK, and RON. More currencies may be added in future updates.' },
      { q: 'What does ECB data mean?', a: 'ECB stands for European Central Bank. It publishes official daily reference exchange rates for major world currencies, which are used by financial institutions, governments, and businesses across Europe.' },
    ],
  },
}
