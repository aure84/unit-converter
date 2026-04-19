/**
 * Blog post data.
 * Each post has: slug, title, date, description (meta), intro, sections, conclusion, relatedLinks.
 */
export const blogPosts = [
  {
    slug: 'kilometers-to-miles',
    title: 'How to Convert Kilometers to Miles (and Back)',
    date: '2026-04-15',
    description: 'Learn how to convert kilometers to miles with the exact formula, quick reference values, and real-world examples. Includes a free online converter.',
    intro: 'Whether you are planning a road trip, reading a foreign speed limit sign, or following a running training plan, knowing how to convert kilometers to miles is one of the most useful everyday conversions. This guide explains the formula, shows common values, and gives you real-world context for both units.',
    sections: [
      {
        heading: 'What Is a Kilometer?',
        paragraphs: [
          'A kilometer (km) is a unit of length in the metric system equal to exactly 1,000 meters. It is the standard unit for measuring road distances in most countries, including all of Europe, Asia, Africa, Australia, and South America.',
          'The word comes from the Greek "kilo" meaning one thousand. On road signs, distances are shown in kilometers almost everywhere in the world — except the United States, the United Kingdom, and a handful of other countries.',
        ],
      },
      {
        heading: 'What Is a Mile?',
        paragraphs: [
          'A mile (mi) is a unit of length used primarily in the United States and the United Kingdom, equal to exactly 1,609.344 meters or 5,280 feet. It traces its roots to the Roman "mille passuum" — a thousand paces.',
          'In the US, all road signs, speed limits, and odometers use miles. In the UK, road distances and speed limits are still in miles despite using the metric system for most other measurements.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          'The exact conversion factor is: 1 kilometer = 0.621371 miles, or equivalently, 1 mile = 1.60934 kilometers.',
          'To convert kilometers to miles, multiply by 0.621371. For example: 10 km × 0.621371 = 6.214 miles.',
          'To convert miles to kilometers, multiply by 1.60934. For example: 10 miles × 1.60934 = 16.093 km.',
          'A useful mental shortcut: multiply kilometers by 0.6 for a quick estimate. The result will be about 3.5% low, but good enough for everyday use.',
        ],
      },
      {
        heading: 'Common Kilometer to Mile Conversions',
        paragraphs: ['Here are the most frequently needed values:'],
        list: [
          '1 km = 0.621 miles',
          '5 km = 3.107 miles (popular race distance)',
          '10 km = 6.214 miles (popular race distance)',
          '21.1 km = 13.1 miles (half marathon)',
          '42.2 km = 26.2 miles (full marathon)',
          '100 km = 62.137 miles',
          '1,000 km = 621.37 miles',
        ],
      },
      {
        heading: 'Real-World Examples',
        paragraphs: [
          'Speed limits: A 100 km/h highway speed limit is 62 mph. A 50 km/h urban limit is about 31 mph.',
          'Running and cycling: A 5K race is 3.1 miles. A century ride in cycling is 100 miles, which is about 161 km.',
          'Travel distances: The distance from Paris to London is roughly 450 km or about 280 miles. New York to Los Angeles is about 4,500 km or 2,800 miles.',
          'Athletics: The 1,500 meter race is just under 1 mile (the "metric mile"). The actual mile record and 1,500 m record are often compared.',
        ],
      },
      {
        heading: 'Tips for Quick Mental Conversion',
        paragraphs: [
          'The 6/10 rule: For a rough estimate, multiply km by 0.6 (or take 60% of the km value). This gives a result within 3.5% of the exact answer.',
          'The Fibonacci trick: The Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21…) closely approximates km-to-mile conversions. 8 km ≈ 5 miles, 13 km ≈ 8 miles, 21 km ≈ 13 miles — a remarkable coincidence that makes mental math easy.',
        ],
      },
    ],
    conclusion: 'Converting kilometers to miles comes down to one number: 0.621371. Multiply any kilometer value by this factor and you have your answer in miles. For the reverse, multiply miles by 1.60934. Use our free converter above for instant, precise results on any value.',
    relatedLinks: [
      { label: 'Kilometers to Miles Converter', path: '/length/kilometer-to-mile' },
      { label: 'Miles to Kilometers Converter', path: '/length/mile-to-kilometer' },
      { label: 'Length Converter', path: '/length' },
    ],
  },

  {
    slug: 'kg-to-lbs',
    title: 'Kilograms to Pounds: The Complete Conversion Guide',
    date: '2026-04-15',
    description: 'Convert kilograms to pounds with the exact formula, body weight examples, and a full reference table. Free kg to lbs converter included.',
    intro: 'Kilograms and pounds are the two most widely used units for measuring weight. If you travel internationally, follow fitness programs from other countries, or shop for products with foreign labeling, knowing how to convert between kg and lbs is essential. This guide covers everything you need.',
    sections: [
      {
        heading: 'Kilograms vs Pounds: What Is the Difference?',
        paragraphs: [
          'The kilogram (kg) is the base unit of mass in the International System of Units (SI). It is used in virtually every country for body weight, food packaging, shipping, and scientific measurement.',
          'The pound (lb) is the unit of weight used primarily in the United States, and still commonly used in the UK alongside kilograms. One pound is defined as exactly 0.45359237 kilograms.',
          'Despite both measuring "weight" in everyday speech, kilograms technically measure mass while pounds can measure either mass or force depending on context. For everyday conversions, this distinction does not matter.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 kilogram = 2.20462 pounds. To convert kg to lbs, multiply by 2.20462.',
          '1 pound = 0.453592 kilograms. To convert lbs to kg, multiply by 0.453592 (or divide by 2.20462).',
          'Example: 70 kg × 2.20462 = 154.32 lbs. Example: 150 lbs × 0.453592 = 68.04 kg.',
          'Quick mental estimate: multiply kilograms by 2.2 (about 0.3% off from the exact value).',
        ],
      },
      {
        heading: 'Body Weight Reference Table',
        paragraphs: ['Common body weight conversions:'],
        list: [
          '50 kg = 110.2 lbs',
          '60 kg = 132.3 lbs',
          '70 kg = 154.3 lbs',
          '75 kg = 165.3 lbs',
          '80 kg = 176.4 lbs',
          '90 kg = 198.4 lbs',
          '100 kg = 220.5 lbs',
          '120 kg = 264.6 lbs',
        ],
      },
      {
        heading: 'Where Each Unit Is Used',
        paragraphs: [
          'Kilograms are used for body weight in most of the world including all of Europe, Asia, Africa, Australia, and South America. Gym equipment, food labels, luggage allowances, and medical measurements all use kilograms internationally.',
          'Pounds are the standard in the United States for body weight, food packaging, and general weight measurement. UK gym culture uses both — barbells are often marked in kg while people still commonly discuss body weight in "stone and pounds".',
          'Aviation uses kilograms for fuel and cargo globally. Boxing and wrestling weight classes are defined in both kg and lbs depending on the organization.',
        ],
      },
      {
        heading: 'Cooking and Food Conversions',
        paragraphs: [
          'American recipes often use pounds and ounces while European recipes use grams and kilograms. Key conversions for cooking:',
        ],
        list: [
          '1 lb = 453.6 g (just under half a kilogram)',
          '500 g = 1.1 lbs (close to 1 lb)',
          '1 kg = 2.205 lbs',
          '2 lbs = 907 g (close to 1 kg)',
          '5 lbs = 2.27 kg',
        ],
      },
    ],
    conclusion: 'The key number to remember is 2.20462 — multiply any kilogram value by this to get pounds. For the reverse, divide by 2.20462 or multiply by 0.453592. Our converter handles any value instantly, in both directions.',
    relatedLinks: [
      { label: 'Kilograms to Pounds Converter', path: '/weight/kilogram-to-pound' },
      { label: 'Pounds to Kilograms Converter', path: '/weight/pound-to-kilogram' },
      { label: 'Weight Converter', path: '/weight' },
    ],
  },

  {
    slug: 'celsius-to-fahrenheit',
    title: 'Celsius to Fahrenheit: How Temperature Conversion Works',
    date: '2026-04-15',
    description: 'Learn the Celsius to Fahrenheit formula with step-by-step examples, common temperature reference points, and a free online temperature converter.',
    intro: 'Temperature is one of the trickiest unit conversions because it involves more than just multiplication — there is also an offset to account for. This guide explains the Celsius and Fahrenheit scales, walks through the conversion formula step by step, and gives you the key reference temperatures to know by heart.',
    sections: [
      {
        heading: 'The Celsius Scale',
        paragraphs: [
          'Celsius (°C), also called centigrade, is the temperature scale used in most of the world for everyday purposes. It was designed with two natural anchor points: 0°C is the freezing point of water and 100°C is the boiling point of water at sea level.',
          'Celsius is part of the metric system and is used in science, weather forecasting, cooking, and medicine in almost every country except the United States.',
        ],
      },
      {
        heading: 'The Fahrenheit Scale',
        paragraphs: [
          'Fahrenheit (°F) is the temperature scale used for everyday purposes in the United States, and still partially in the Bahamas, the Cayman Islands, and Palau. On this scale, water freezes at 32°F and boils at 212°F.',
          'The Fahrenheit scale was developed by Daniel Gabriel Fahrenheit in the early 18th century. Its reference points were originally based on a brine solution and human body temperature, which is why the numbers seem arbitrary compared to Celsius.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          'To convert Celsius to Fahrenheit: °F = (°C × 9/5) + 32, which is the same as °F = (°C × 1.8) + 32.',
          'Step by step: (1) multiply the Celsius temperature by 1.8, then (2) add 32.',
          'Example: 20°C → 20 × 1.8 = 36, then 36 + 32 = 68°F.',
          'To convert Fahrenheit to Celsius: °C = (°F − 32) × 5/9, which is the same as °C = (°F − 32) ÷ 1.8.',
          'Example: 98.6°F → (98.6 − 32) = 66.6, then 66.6 ÷ 1.8 = 37°C (normal body temperature).',
        ],
      },
      {
        heading: 'Key Temperature Reference Points',
        paragraphs: ['These are the temperatures worth memorizing:'],
        list: [
          '−40°C = −40°F (the point where both scales meet)',
          '0°C = 32°F (water freezes)',
          '20°C = 68°F (comfortable room temperature)',
          '37°C = 98.6°F (normal human body temperature)',
          '100°C = 212°F (water boils at sea level)',
          '180°C = 356°F (moderate oven temperature)',
        ],
      },
      {
        heading: 'Quick Estimation Tricks',
        paragraphs: [
          'For a rough °C to °F estimate: double the Celsius value and add 30. This gives a result within a few degrees for typical everyday temperatures. For example, 20°C → 20×2 + 30 = 70°F (actual: 68°F).',
          'For weather temperatures: 15°C is cool (59°F), 25°C is warm (77°F), 35°C is hot (95°F).',
          'For body temperature: 36–37°C is normal, 38°C is a mild fever, 40°C is a high fever.',
        ],
      },
      {
        heading: 'Kelvin: The Scientific Scale',
        paragraphs: [
          'Kelvin (K) is the SI unit of temperature used in science and engineering. It starts at absolute zero — the lowest possible temperature, where all molecular motion stops — at 0 K = −273.15°C.',
          'To convert Celsius to Kelvin, simply add 273.15. There are no negative Kelvin temperatures. Water boils at 373.15 K and freezes at 273.15 K.',
        ],
      },
    ],
    conclusion: 'The Celsius to Fahrenheit formula is °F = (°C × 1.8) + 32. For the reverse, °C = (°F − 32) ÷ 1.8. For instant conversions at any value, use our free temperature converter.',
    relatedLinks: [
      { label: 'Celsius to Fahrenheit Converter', path: '/temperature/celsius-to-fahrenheit' },
      { label: 'Fahrenheit to Celsius Converter', path: '/temperature/fahrenheit-to-celsius' },
      { label: 'Celsius to Kelvin Converter', path: '/temperature/celsius-to-kelvin' },
      { label: 'Temperature Converter', path: '/temperature' },
    ],
  },

  {
    slug: 'data-storage-units',
    title: 'Data Storage Units Explained: Bits, Bytes, GB, TB and More',
    date: '2026-04-15',
    description: 'Understand bits, bytes, kilobytes, megabytes, gigabytes, and terabytes. Learn how data storage units work and how to convert between them.',
    intro: 'When you buy a phone with "128 GB storage" or pay for "1 TB of cloud backup," do you know exactly what those numbers mean? Data storage units can be confusing because they are based on powers of two rather than tens — and because marketing sometimes blurs the line between decimal and binary definitions. This guide clears it all up.',
    sections: [
      {
        heading: 'Bits and Bytes: The Foundation',
        paragraphs: [
          'A bit is the smallest unit of digital information. It can hold exactly one of two values: 0 or 1. Everything in a computer — text, images, video, code — is ultimately stored as a sequence of bits.',
          'A byte is 8 bits. Bytes are the practical unit for measuring file sizes and storage capacity. When you see a file that is "4 MB" or a hard drive that is "2 TB," those are measured in bytes (or multiples of bytes), not bits.',
          'Internet speed, however, is typically measured in bits per second (Mbps or Gbps). This is why downloading a 1 GB file at "100 Mbps" takes about 80 seconds — you need to divide by 8 to convert megabits to megabytes.',
        ],
      },
      {
        heading: 'The Storage Unit Hierarchy',
        paragraphs: [
          'Each step in the hierarchy is 1,024 times larger than the previous, because computers work in base-2 (binary):',
        ],
        list: [
          '1 Byte = 8 bits',
          '1 Kilobyte (KB) = 1,024 bytes',
          '1 Megabyte (MB) = 1,024 KB = 1,048,576 bytes',
          '1 Gigabyte (GB) = 1,024 MB = 1,073,741,824 bytes',
          '1 Terabyte (TB) = 1,024 GB = 1,099,511,627,776 bytes',
          '1 Petabyte (PB) = 1,024 TB',
        ],
      },
      {
        heading: 'Why Your Hard Drive Shows Less Space Than Advertised',
        paragraphs: [
          'Storage manufacturers define 1 GB as exactly 1,000,000,000 bytes (using the decimal definition). Operating systems define 1 GB as 1,073,741,824 bytes (the binary definition).',
          'A drive sold as "1 TB" contains 1,000,000,000,000 bytes. Your OS displays this as approximately 931 GB because it divides by 1,073,741,824 instead of 1,000,000,000.',
          'This is not a scam — it is simply a difference in definitions. The IEC introduced "gibibyte" (GiB) for the binary definition and "gigabyte" (GB) for the decimal one, but most people still use GB for both.',
        ],
      },
      {
        heading: 'Real-World File and Storage Sizes',
        paragraphs: ['To put the units in context:'],
        list: [
          '1 KB — a short text message or a small HTML file',
          '100 KB — a low-resolution photo or a short Word document',
          '1 MB — a high-quality photo (JPEG) or a minute of compressed audio',
          '700 MB — a standard-definition movie (the original CD-ROM size)',
          '4–8 GB — a full HD (1080p) movie',
          '15–25 GB — a 4K HDR movie',
          '128 GB — typical entry-level smartphone storage',
          '1 TB — typical laptop or desktop hard drive',
          '1 PB — approximately 11,000 years of HD video',
        ],
      },
      {
        heading: 'Converting Between Units',
        paragraphs: [
          'To convert down (smaller units): multiply by 1,024. For example, 5 GB = 5 × 1,024 = 5,120 MB.',
          'To convert up (larger units): divide by 1,024. For example, 2,048 MB = 2,048 ÷ 1,024 = 2 GB.',
          'For multiple steps, multiply or divide by 1,024 for each step. 3 TB to MB: 3 × 1,024 × 1,024 = 3,145,728 MB.',
        ],
      },
    ],
    conclusion: 'Data storage units are based on powers of 1,024 — each step up multiplies by 1,024. The hierarchy from smallest to largest is: bit → byte → KB → MB → GB → TB → PB. Use our free data storage converter to convert between any of these units instantly.',
    relatedLinks: [
      { label: 'GB to TB Converter', path: '/data-storage/gigabyte-to-terabyte' },
      { label: 'MB to GB Converter', path: '/data-storage/megabyte-to-gigabyte' },
      { label: 'KB to MB Converter', path: '/data-storage/kilobyte-to-megabyte' },
      { label: 'Data Storage Converter', path: '/data-storage' },
    ],
  },

  {
    slug: 'speed-units',
    title: 'Speed Units Explained: mph, km/h, m/s, and Knots',
    date: '2026-04-15',
    description: 'Understand the four main speed units — mph, km/h, m/s, and knots — with conversion formulas, real-world examples, and a free speed converter.',
    intro: 'Speed is measured differently depending on where you are and what you are doing. A car speedometer in Germany shows km/h, while one in the US shows mph. A ship\'s navigator tracks speed in knots. A physics textbook uses meters per second. This guide explains all four units, how they relate to each other, and when each is used.',
    sections: [
      {
        heading: 'Kilometers per Hour (km/h)',
        paragraphs: [
          'Kilometers per hour (km/h) is the most widely used speed unit for road transportation. It appears on speedometers and road signs in most countries that use the metric system — which is the majority of the world.',
          'At 100 km/h, you cover 100 kilometers (62.1 miles) in one hour. Most highway speed limits range from 100 to 130 km/h in metric countries. Urban speed limits are typically 50 km/h, and residential zones are often 30 km/h.',
        ],
      },
      {
        heading: 'Miles per Hour (mph)',
        paragraphs: [
          'Miles per hour (mph) is the standard speed unit for road transportation in the United States and the United Kingdom. American and British cars show mph on their speedometers.',
          '60 mph is a common US highway speed limit on undivided highways. Interstate highways typically have limits of 65–75 mph. Urban limits are usually 25–35 mph.',
          '1 mph = 1.60934 km/h. To convert mph to km/h, multiply by 1.60934. To convert km/h to mph, multiply by 0.621371.',
        ],
      },
      {
        heading: 'Meters per Second (m/s)',
        paragraphs: [
          'Meters per second (m/s) is the SI unit of speed, used in physics, engineering, and scientific contexts. It tells you how many meters an object travels in one second.',
          '1 m/s = 3.6 km/h. To convert m/s to km/h, multiply by 3.6. To convert km/h to m/s, divide by 3.6.',
          'Reference points: walking speed is about 1.4 m/s, a sprint is around 10–12 m/s, and the speed of sound is 343 m/s (at 20°C at sea level).',
        ],
      },
      {
        heading: 'Knots (kn)',
        paragraphs: [
          'A knot is one nautical mile per hour, where a nautical mile equals 1,852 meters. Knots are the international standard for aviation and maritime speeds.',
          '1 knot = 1.852 km/h = 1.15078 mph. To convert knots to km/h, multiply by 1.852.',
          'Why nautical miles and knots? A nautical mile was originally defined as one arcminute of latitude on the Earth\'s surface, making navigation and chart reading much simpler. The system has persisted because it integrates directly with latitude/longitude coordinates.',
          'Commercial aircraft cruise at 450–550 knots (830–1,020 km/h). A typical sailing yacht sails at 5–12 knots. Wind speeds in weather forecasts for aviation and marine use are given in knots.',
        ],
      },
      {
        heading: 'Speed Conversion Reference',
        paragraphs: ['Common speed conversions across all four units:'],
        list: [
          'Walking: 5 km/h = 3.1 mph = 1.39 m/s = 2.7 kn',
          'City driving: 50 km/h = 31 mph = 13.9 m/s = 27 kn',
          'Highway: 100 km/h = 62.1 mph = 27.8 m/s = 54 kn',
          'High-speed train: 300 km/h = 186 mph = 83.3 m/s = 162 kn',
          'Speed of sound: 1,235 km/h = 767 mph = 343 m/s = 667 kn (Mach 1)',
        ],
      },
      {
        heading: 'Quick Conversion Cheat Sheet',
        paragraphs: [
          'km/h to mph: multiply by 0.6214 (or divide by 1.609)',
          'mph to km/h: multiply by 1.609',
          'km/h to m/s: divide by 3.6',
          'm/s to km/h: multiply by 3.6',
          'knots to km/h: multiply by 1.852',
          'km/h to knots: divide by 1.852',
        ],
      },
    ],
    conclusion: 'The four main speed units are km/h (road transport worldwide), mph (US and UK roads), m/s (science and physics), and knots (aviation and maritime). The most common conversion is km/h to mph: multiply by 0.6214. Use our free speed converter for instant results.',
    relatedLinks: [
      { label: 'km/h to mph Converter', path: '/speed/kilometer_per_hour-to-mile_per_hour' },
      { label: 'mph to km/h Converter', path: '/speed/mile_per_hour-to-kilometer_per_hour' },
      { label: 'm/s to km/h Converter', path: '/speed/meter_per_second-to-kilometer_per_hour' },
      { label: 'Speed Converter', path: '/speed' },
    ],
  },

  {
    slug: 'gallons-to-liters',
    title: 'How to Convert Gallons to Liters (and Back)',
    date: '2026-04-19',
    description: 'Learn how to convert US gallons to liters with the exact formula, quick reference values, and real-world examples. Includes a free online converter.',
    intro: 'Whether you are filling up a car in a country that sells fuel by the liter, scaling a large recipe, or comparing container sizes, knowing how to convert between gallons and liters is one of the most practical everyday conversions. This guide covers the formula, the US vs UK gallon difference, and common reference values.',
    sections: [
      {
        heading: 'What Is a Gallon?',
        paragraphs: [
          'A gallon is a unit of volume used primarily in the United States and, to a lesser extent, the United Kingdom. The two countries use different definitions of the gallon — a fact that causes frequent confusion.',
          'The US liquid gallon equals exactly 3.785411784 liters. It is used for fuel, milk, paint, and other liquids in the United States.',
          'The UK imperial gallon equals exactly 4.54609 liters — about 20% larger than the US gallon. It appears on older British measurements and is still used in some Commonwealth countries.',
        ],
      },
      {
        heading: 'What Is a Liter?',
        paragraphs: [
          'A liter (L) is the standard metric unit of volume, equal to exactly 1,000 milliliters or 1 cubic decimeter. It is used worldwide for liquids in everyday contexts — fuel, beverages, cooking, and more.',
          'Most countries sell gasoline and diesel by the liter. A standard water bottle is 500 ml (0.5 L). A large soda bottle is typically 2 liters.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          'US gallons to liters: multiply by 3.78541. For example, 5 gal × 3.78541 = 18.927 L.',
          'Liters to US gallons: multiply by 0.264172. For example, 20 L × 0.264172 = 5.283 gal.',
          'UK gallons to liters: multiply by 4.54609. For example, 5 UK gal × 4.54609 = 22.730 L.',
          'A useful mental shortcut for US gallons: multiply by 3.8 for a quick estimate. It is 0.4% low but good enough for everyday use.',
        ],
      },
      {
        heading: 'Common Gallon to Liter Conversions',
        paragraphs: ['Quick reference for the most frequently needed values (US gallons):'],
        list: [
          '1 gallon = 3.785 liters',
          '2 gallons = 7.571 liters',
          '5 gallons = 18.927 liters',
          '10 gallons = 37.854 liters',
          '1 liter = 0.264 gallons',
          '10 liters = 2.642 gallons',
          '20 liters = 5.283 gallons',
        ],
      },
      {
        heading: 'Real-World Examples',
        paragraphs: [
          'Fuel: A US car with a 15-gallon tank holds about 56.8 liters. If European fuel costs €1.60/L, that fill-up would cost about €91.',
          'Beverages: A US gallon of milk is 3.785 L. A 2-liter soda bottle is about 0.53 US gallons.',
          'Recipes: A US recipe calling for 1 gallon of liquid requires 3.785 L — roughly four standard metric bottles.',
          'Swimming pools: A small backyard pool holding 5,000 gallons contains about 18,927 liters.',
        ],
      },
    ],
    conclusion: '1 US gallon = 3.78541 liters. 1 UK imperial gallon = 4.54609 liters. Always confirm which gallon standard is being used before converting — the 20% difference matters for fuel economy comparisons and large-scale recipes. Use our free volume converter for instant results.',
    relatedLinks: [
      { label: 'Gallons to Liters Converter', path: '/volume/gallon-to-liter' },
      { label: 'Liters to Gallons Converter', path: '/volume/liter-to-gallon' },
      { label: 'Volume Converter', path: '/volume' },
    ],
  },

  {
    slug: 'meters-to-feet',
    title: 'How to Convert Meters to Feet (and Back)',
    date: '2026-04-19',
    description: 'Learn how to convert meters to feet with the exact formula, quick reference table, and practical examples for height, athletics, and construction.',
    intro: 'Meters and feet are the two most commonly used units for measuring height and medium distances. Whether you are reading an elevation sign in a national park, comparing your height to an international standard, or working on a construction project that crosses unit systems, this guide gives you everything you need to convert accurately.',
    sections: [
      {
        heading: 'What Is a Meter?',
        paragraphs: [
          'A meter (m) is the SI base unit of length, defined since 1983 as the distance light travels in 1/299,792,458 of a second. It is the standard unit for height, room dimensions, athletic distances, and most engineering work outside the United States.',
          'One meter is slightly longer than a yard (0.914 m) and about 3.28 feet.',
        ],
      },
      {
        heading: 'What Is a Foot?',
        paragraphs: [
          'A foot (ft) is an imperial unit of length equal to exactly 0.3048 meters or 12 inches. It is the standard unit for height measurement in the United States and is still used for altitude in aviation worldwide.',
          'Human height in the US is given in feet and inches. Aircraft cruise altitudes are measured in feet. Building floor heights are commonly expressed in feet in American construction.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 meter = 3.28084 feet (exact: 1/0.3048). To convert meters to feet, multiply by 3.28084.',
          '1 foot = 0.3048 meters. To convert feet to meters, multiply by 0.3048.',
          'Mental shortcut: multiply meters by 3.3 for a quick estimate. The result is about 0.6% high — close enough for everyday use.',
          'For feet and inches: first convert feet to meters (multiply by 0.3048), then convert inches to meters (multiply by 0.0254), then add the two results.',
        ],
      },
      {
        heading: 'Common Meter to Foot Conversions',
        paragraphs: ['Quick reference:'],
        list: [
          '1 m = 3.281 ft',
          '1.70 m = 5 ft 7 in (average adult height)',
          '1.83 m = 6 ft 0 in',
          '100 m = 328.08 ft (sprint distance)',
          '1,000 m = 3,280.8 ft (1 kilometer)',
          '1,609 m = 5,280 ft (1 mile)',
          '8,849 m = 29,032 ft (height of Mount Everest)',
        ],
      },
      {
        heading: 'Real-World Examples',
        paragraphs: [
          'Height: 1.75 m (average adult male worldwide) = 5 ft 9 in. NBA minimum height for centers is often around 2.0 m = 6 ft 7 in.',
          'Athletics: The 100 m sprint is 328 feet. A standard Olympic swimming pool is 50 m = 164 ft long.',
          'Aviation: Aircraft cruising altitudes are expressed in feet. A typical cruising altitude of 35,000 ft = 10,668 m.',
          'Construction: A standard ceiling height of 8 ft = 2.44 m. A 10 ft ceiling = 3.05 m.',
        ],
      },
    ],
    conclusion: '1 meter = 3.28084 feet. 1 foot = 0.3048 meters. For quick mental math, multiply meters by 3.3. Use our free length converter to switch between meters, feet, and any other length unit instantly.',
    relatedLinks: [
      { label: 'Meters to Feet Converter', path: '/length/meter-to-foot' },
      { label: 'Feet to Meters Converter', path: '/length/foot-to-meter' },
      { label: 'Length Converter', path: '/length' },
    ],
  },

  {
    slug: 'psi-to-bar',
    title: 'How to Convert PSI to Bar (and Back)',
    date: '2026-04-19',
    description: 'Learn how to convert PSI to bar and bar to PSI with the exact formula, tire pressure reference values, and practical examples for cars and bikes.',
    intro: 'PSI (pounds per square inch) and bar are the two most common pressure units for everyday use — mainly for tire inflation, but also for cooking (pressure cookers), weather, and industrial applications. This guide explains both units, gives you the conversion formula, and provides a practical tire pressure reference.',
    sections: [
      {
        heading: 'What Is PSI?',
        paragraphs: [
          'PSI stands for pounds per square inch. It measures how many pounds of force are applied per square inch of area. It is the standard pressure unit in the United States and is used for tire pressure, blood pressure (alongside mmHg), air compressors, and hydraulics.',
          '1 PSI = 6,894.757 pascals (the SI unit of pressure).',
        ],
      },
      {
        heading: 'What Is Bar?',
        paragraphs: [
          'Bar is a metric pressure unit equal to exactly 100,000 pascals (100 kPa). It is slightly less than standard atmospheric pressure (1 atm = 1.01325 bar). Bar is the standard tire pressure unit in Europe and most of the world outside the US.',
          'Tire pressure gauges in Europe show bar. Weather pressure maps use hectopascals (hPa), which equal millibar — 1,013 hPa = 1.013 bar at sea level.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 bar = 14.5038 PSI. To convert bar to PSI, multiply by 14.5038.',
          '1 PSI = 0.0689476 bar. To convert PSI to bar, multiply by 0.0689476.',
          'Mental shortcut: 1 bar ≈ 14.5 PSI. For a quick estimate, multiply bar by 14.5 or divide PSI by 14.5.',
        ],
      },
      {
        heading: 'Tire Pressure Reference',
        paragraphs: ['Recommended tire pressure varies by vehicle — always check the sticker inside your driver door. Common ranges:'],
        list: [
          '2.0 bar = 29 PSI (low end for passenger cars)',
          '2.2 bar = 32 PSI (common for compact cars)',
          '2.4 bar = 35 PSI (common for sedans and SUVs)',
          '2.5 bar = 36 PSI (higher end for passenger cars)',
          '4.5–6.0 bar = 65–87 PSI (road bicycle tires)',
          '1.5–2.5 bar = 22–36 PSI (mountain bike tires)',
        ],
      },
      {
        heading: 'Other Pressure Reference Points',
        paragraphs: [
          'Atmospheric pressure at sea level: 1.01325 bar = 14.696 PSI.',
          'Pressure cooker: typically 0.8–1.0 bar (11.6–14.5 PSI) above atmospheric pressure.',
          'Scuba tank: 200–300 bar (2,900–4,350 PSI).',
          'Blood pressure (systolic, healthy adult): about 120 mmHg = 0.16 bar = 2.32 PSI.',
        ],
      },
    ],
    conclusion: '1 bar = 14.5038 PSI. 1 PSI = 0.0689476 bar. For tire pressure: most cars use 2.0–2.5 bar (29–36 PSI). Always check your vehicle\'s recommended pressure on the door sticker — overinflation and underinflation both reduce safety and fuel efficiency. Use our free pressure converter for instant results.',
    relatedLinks: [
      { label: 'PSI to Bar Converter', path: '/pressure/psi-to-bar' },
      { label: 'Bar to PSI Converter', path: '/pressure/bar-to-psi' },
      { label: 'Pressure Converter', path: '/pressure' },
    ],
  },

  {
    slug: 'cups-to-ml',
    title: 'How to Convert Cups to Milliliters (and Back)',
    date: '2026-04-19',
    description: 'Learn how to convert US cups to milliliters with the exact formula, cooking reference table, and tips for adapting international recipes.',
    intro: 'Cups and milliliters are both common volume units in cooking and baking, but they come from different measurement traditions. American recipes use cups; European and Australian recipes use milliliters or grams. This guide gives you the exact conversion, a quick reference table, and practical tips for adapting recipes across systems.',
    sections: [
      {
        heading: 'What Is a Cup?',
        paragraphs: [
          'A cup is a volume unit used in US cooking and baking. 1 US cup equals exactly 236.588 milliliters (or approximately 236.6 ml). It equals 16 tablespoons, 48 teaspoons, or 8 fluid ounces.',
          'Note: the "metric cup" used in Australia and Canada equals 250 ml — slightly larger than the US cup. Some recipes from these countries use the metric cup, so check the source before converting.',
        ],
      },
      {
        heading: 'What Is a Milliliter?',
        paragraphs: [
          'A milliliter (mL) is one-thousandth of a liter, equal to exactly 1 cubic centimeter (cm³). It is the standard liquid volume unit in the metric system and is used for cooking, medicine, and laboratory measurements worldwide.',
          'Most kitchen measuring jugs outside the US are marked in milliliters. A standard teaspoon holds about 5 ml; a tablespoon holds about 15 ml.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 US cup = 236.588 ml. To convert cups to ml, multiply by 236.588.',
          '1 ml = 0.004227 US cups. To convert ml to cups, divide by 236.588.',
          'Mental shortcut: 1 cup ≈ 240 ml. This rounds up by about 1.4% — close enough for most cooking, but use the exact value for precision baking.',
        ],
      },
      {
        heading: 'Cooking Reference Table',
        paragraphs: ['Common cup fractions in milliliters:'],
        list: [
          '⅛ cup = 30 ml',
          '¼ cup = 59 ml',
          '⅓ cup = 79 ml',
          '½ cup = 118 ml',
          '⅔ cup = 158 ml',
          '¾ cup = 177 ml',
          '1 cup = 237 ml',
          '2 cups = 473 ml',
        ],
      },
      {
        heading: 'Tips for Converting Recipes',
        paragraphs: [
          'Dry ingredients: cups measure volume, not weight. For dry ingredients like flour, ml-to-cup conversion is less reliable than weight (grams). A cup of flour is about 125 g, but it varies significantly depending on how the flour is scooped.',
          'Liquids: for liquids, ml and cup conversions are accurate and reliable. 1 cup of water = 236.6 ml = 236.6 g.',
          'Australian and Canadian recipes: if a recipe says "1 cup" and comes from Australia, use 250 ml instead of 237 ml to be accurate.',
        ],
      },
    ],
    conclusion: '1 US cup = 236.588 ml. For quick cooking: use 240 ml as an approximation. For Australian/Canadian recipes, use 250 ml per cup. For precision baking with dry ingredients, convert to grams instead of milliliters for the most accurate results. Use our free cooking converter for instant results.',
    relatedLinks: [
      { label: 'Cups to mL Converter', path: '/cooking/cup-to-milliliter' },
      { label: 'mL to Cups Converter', path: '/cooking/milliliter-to-cup' },
      { label: 'Cooking Converter', path: '/cooking' },
    ],
  },

  {
    slug: 'mpg-to-l100km',
    title: 'How to Convert MPG to L/100km (and Back)',
    date: '2026-04-19',
    description: 'Learn how to convert miles per gallon (MPG) to liters per 100 km and back, with the exact formula, a reference table, and tips on comparing car fuel efficiency.',
    intro: 'Miles per gallon (MPG) and liters per 100 kilometers (L/100km) both measure fuel economy, but they work in opposite directions — a higher MPG means better efficiency, while a lower L/100km means better efficiency. This makes direct comparison tricky. This guide explains both units, gives the exact conversion formula, and provides a practical reference table.',
    sections: [
      {
        heading: 'What Is MPG?',
        paragraphs: [
          'Miles per gallon (MPG) measures how many miles a vehicle travels on one gallon of fuel. A higher number means better fuel economy. It is the standard fuel efficiency unit in the United States.',
          'US EPA fuel economy ratings use MPG. A fuel-efficient compact car might achieve 35–45 MPG combined. A typical SUV gets 20–28 MPG. Hybrid vehicles can reach 50+ MPG.',
          'Note: US MPG uses the US gallon (3.785 L). UK MPG uses the imperial gallon (4.546 L) — so UK MPG figures are about 20% higher than US MPG for the same vehicle.',
        ],
      },
      {
        heading: 'What Is L/100km?',
        paragraphs: [
          'Liters per 100 kilometers (L/100km) measures how many liters of fuel a vehicle consumes per 100 km traveled. A lower number means better fuel economy — the opposite logic from MPG.',
          'L/100km is the standard fuel efficiency unit in Europe, Australia, Canada, and most of the world. A fuel-efficient car achieves 5–7 L/100km. An SUV might use 9–12 L/100km.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          'MPG and L/100km are inversely related. The conversion constant is 235.215 (derived from liters per US gallon × km per mile).',
          'MPG to L/100km: divide 235.215 by the MPG value. Example: 30 MPG = 235.215 ÷ 30 = 7.84 L/100km.',
          'L/100km to MPG: divide 235.215 by the L/100km value. Example: 8 L/100km = 235.215 ÷ 8 = 29.4 MPG.',
        ],
      },
      {
        heading: 'MPG to L/100km Reference Table',
        paragraphs: ['Common values for US MPG:'],
        list: [
          '20 MPG = 11.76 L/100km (typical truck/large SUV)',
          '25 MPG = 9.41 L/100km (typical mid-size SUV)',
          '30 MPG = 7.84 L/100km (typical sedan)',
          '35 MPG = 6.72 L/100km (efficient compact)',
          '40 MPG = 5.88 L/100km (hybrid)',
          '50 MPG = 4.70 L/100km (efficient hybrid)',
          '60 MPG = 3.92 L/100km (top hybrid efficiency)',
        ],
      },
      {
        heading: 'US MPG vs UK MPG',
        paragraphs: [
          'Because the UK imperial gallon (4.546 L) is larger than the US gallon (3.785 L), a UK MPG figure is about 20% higher than US MPG for the same vehicle.',
          'To convert UK MPG to L/100km, use 282.48 instead of 235.215 as the conversion constant. For most comparisons, stick to L/100km as the common language between US and European efficiency ratings.',
        ],
      },
    ],
    conclusion: 'MPG and L/100km are inversely related — use 235.215 as the conversion constant for US gallons. To convert: divide 235.215 by the MPG value to get L/100km, or divide 235.215 by L/100km to get MPG. Use our free fuel economy converter for instant results.',
    relatedLinks: [
      { label: 'MPG to L/100km Converter', path: '/fuel-economy/mile_per_gallon-to-liter_per_100km' },
      { label: 'L/100km to MPG Converter', path: '/fuel-economy/liter_per_100km-to-mile_per_gallon' },
      { label: 'Fuel Economy Converter', path: '/fuel-economy' },
    ],
  },

  {
    slug: 'horsepower-to-kw',
    title: 'How to Convert Horsepower to Kilowatts (and Back)',
    date: '2026-04-19',
    description: 'Learn how to convert horsepower to kilowatts with the exact formula, the difference between mechanical and metric horsepower, and a practical car power reference table.',
    intro: 'Horsepower and kilowatts are both units of power — the rate at which energy is produced or consumed. Cars sold in the US and UK are rated in horsepower (hp), while European manufacturers use kilowatts (kW) or metric horsepower (PS). Electric vehicles are increasingly rated in kW. This guide explains both units, the mechanical vs metric horsepower difference, and gives you the exact conversion formula.',
    sections: [
      {
        heading: 'What Is Horsepower?',
        paragraphs: [
          'Horsepower (hp) was originally defined by James Watt in the 18th century to compare steam engine output to the power of draft horses. It became the standard for rating engine power in the US and UK.',
          '1 mechanical horsepower (hp) = 745.69987 watts. This is the standard used in the US for car engine ratings.',
          '1 metric horsepower (PS or CV) = 735.49875 watts. PS (from the German "Pferdestärke") is used by most European car manufacturers. The two are very similar but not identical — 100 PS ≈ 98.6 hp.',
        ],
      },
      {
        heading: 'What Is a Kilowatt?',
        paragraphs: [
          'A kilowatt (kW) equals exactly 1,000 watts. It is the SI-derived unit of power and is used worldwide for electrical systems, industrial motors, and increasingly for car engine ratings.',
          'Electric vehicles are always rated in kW (and sometimes kWh for battery capacity). Many European countries now show both kW and PS in car specifications.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          'Mechanical hp to kW: multiply by 0.7457. Example: 200 hp × 0.7457 = 149.1 kW.',
          'kW to mechanical hp: multiply by 1.341. Example: 150 kW × 1.341 = 201.2 hp.',
          'Metric hp (PS) to kW: multiply by 0.7355. Example: 200 PS × 0.7355 = 147.1 kW.',
          'kW to PS: multiply by 1.3596. Example: 150 kW × 1.3596 = 203.9 PS.',
        ],
      },
      {
        heading: 'Car Power Reference Table',
        paragraphs: ['Common engine outputs in both units (mechanical hp):'],
        list: [
          '100 hp = 74.6 kW (small city car)',
          '150 hp = 111.9 kW (typical compact sedan)',
          '200 hp = 149.1 kW (performance compact)',
          '300 hp = 223.7 kW (sports car)',
          '400 hp = 298.3 kW (high-performance)',
          '500 hp = 372.9 kW (supercar territory)',
          '1,000 hp = 745.7 kW (hypercar)',
        ],
      },
      {
        heading: 'Electric Vehicle Power',
        paragraphs: [
          'Electric motors produce power measured in kW. A base Tesla Model 3 produces about 283 kW (380 hp). The Porsche Taycan Turbo S produces 560 kW (750 hp) in boost mode.',
          'Unlike combustion engines, electric motors produce maximum torque instantly and can sustain peak power for longer periods, making raw horsepower comparisons with combustion engines somewhat misleading.',
        ],
      },
    ],
    conclusion: '1 mechanical hp = 0.7457 kW. 1 kW = 1.341 hp. For metric horsepower (PS): 1 PS = 0.7355 kW. The difference between hp and PS is small (about 1.4%) but matters for precise engineering specifications. Use our free power converter for instant results.',
    relatedLinks: [
      { label: 'Horsepower to kW Converter', path: '/power/horsepower-to-kilowatt' },
      { label: 'kW to Horsepower Converter', path: '/power/kilowatt-to-horsepower' },
      { label: 'Power Converter', path: '/power' },
    ],
  },
]

/** Return a post by slug, or undefined if not found. */
export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug)
}
