/**
 * Blog post data.
 * Each post has: slug, title, date, description (meta), intro, sections, conclusion, relatedLinks.
 */
export const blogPosts = [
  {
    slug: 'kilometers-to-miles',
    title: 'How to Convert Kilometers to Miles (and Back)',
    tag: 'How-To Guide',
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
    title: 'How to Convert Kilograms to Pounds (and Back)',
    tag: 'How-To Guide',
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
    title: 'How to Convert Celsius to Fahrenheit (and Back)',
    tag: 'How-To Guide',
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
    title: 'How Big Is a Gigabyte? Data Storage Units Explained',
    tag: 'Quick Reference',
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
    title: 'How Do You Convert mph, km/h, m/s, and Knots?',
    tag: 'Quick Reference',
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
    tag: 'How-To Guide',
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
    tag: 'How-To Guide',
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
    tag: 'How-To Guide',
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
    tag: 'How-To Guide',
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
    tag: 'How-To Guide',
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
    tag: 'How-To Guide',
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

  {
    slug: 'degrees-to-radians',
    title: 'How to Convert Degrees to Radians (and Back)',
    tag: 'How-To Guide',
    date: '2026-04-19',
    description: 'Learn how to convert degrees to radians with the exact formula, common reference values, and real-world examples from trigonometry, engineering, and navigation.',
    intro: 'Degrees and radians both measure angles, but they appear in very different contexts. Degrees are what most people learn in school — a right angle is 90°, a full circle is 360°. Radians are the standard in mathematics, physics, and engineering — a full circle is 2π. Knowing how to switch between them is essential for anyone working with trigonometry, programming, or technical fields.',
    sections: [
      {
        heading: 'What Is a Degree?',
        paragraphs: [
          'A degree (°) divides a full circle into 360 equal parts. The choice of 360 goes back to ancient Babylon, which used a base-60 number system. 360 has many divisors (2, 3, 4, 5, 6, 8, 9, 10, 12…), making it easy to divide circles into equal slices without fractions.',
          'Degrees are used in everyday geometry, geography (latitude and longitude), construction, navigation, and most school mathematics. A right angle is 90°, a straight line is 180°, and a full rotation is 360°.',
        ],
      },
      {
        heading: 'What Is a Radian?',
        paragraphs: [
          'A radian (rad) is the SI unit of angle. One radian is the angle at the center of a circle subtended by an arc equal in length to the radius. Because the circumference of a circle is 2π times the radius, a full circle contains exactly 2π radians — approximately 6.2832 rad.',
          'Radians make mathematical formulas simpler. The derivative of sin(x) is cos(x) only when x is in radians. Arc length equals radius × angle in radians. In physics and engineering, radians simplify wave equations, rotational motion, and signal processing. Most programming languages and calculators use radians by default in trigonometric functions.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          'The relationship between degrees and radians comes from the full circle: 360° = 2π radians, so 180° = π radians.',
          'To convert degrees to radians: multiply by π/180 (approximately 0.017453).',
          'Example: 90° × π/180 = π/2 ≈ 1.5708 radians.',
          'To convert radians to degrees: multiply by 180/π (approximately 57.2958).',
          'Example: 1 radian × 180/π ≈ 57.296°.',
          'A quick check: 180° = π ≈ 3.14159 rad. If your result is close to this relationship, you are on the right track.',
        ],
      },
      {
        heading: 'Common Angle Reference Values',
        paragraphs: ['These are the angle values you will see most often in trigonometry and engineering:'],
        list: [
          '0° = 0 radians',
          '30° = π/6 ≈ 0.5236 radians',
          '45° = π/4 ≈ 0.7854 radians',
          '60° = π/3 ≈ 1.0472 radians',
          '90° = π/2 ≈ 1.5708 radians',
          '120° = 2π/3 ≈ 2.0944 radians',
          '180° = π ≈ 3.14159 radians',
          '270° = 3π/2 ≈ 4.7124 radians',
          '360° = 2π ≈ 6.2832 radians',
        ],
      },
      {
        heading: 'Real-World Examples',
        paragraphs: [
          'Programming: JavaScript\'s Math.sin(), Math.cos(), and Math.atan2() all use radians. To compute sin(45°) in code, you write Math.sin(45 * Math.PI / 180). Forgetting to convert is one of the most common trigonometry bugs.',
          'Navigation and maps: GPS coordinates use decimal degrees. Bearing angles (compass headings) use degrees. When computing great-circle distances between two points on Earth, the formulas internally convert to radians.',
          'Physics and engineering: Angular velocity is measured in radians per second (rad/s). A motor spinning at 3,000 RPM rotates at 3,000 × 2π/60 ≈ 314.16 rad/s.',
          'Construction and carpentry: Angles in blueprints, roof pitches, and miter cuts are nearly always expressed in degrees. Radians appear only in structural engineering calculations.',
        ],
      },
      {
        heading: 'What About Gradians?',
        paragraphs: [
          'A third unit — the gradian (grad or gon) — divides a full circle into 400 parts. A right angle is exactly 100 gradians. Gradians are used in surveying and some European engineering traditions because they simplify decimal calculations for right-angle geometry.',
          'To convert degrees to gradians: multiply by 10/9. For example, 90° × 10/9 = 100 grad.',
          'Gradians rarely appear outside of surveying and specialized technical fields. For most purposes, you only need degrees and radians.',
        ],
      },
    ],
    conclusion: 'The core formula is simple: degrees × π/180 = radians, and radians × 180/π = degrees. Memorize the key reference values (90° = π/2, 180° = π, 360° = 2π) and you can convert most common angles in your head. Use our free angle converter for any value instantly.',
    relatedLinks: [
      { label: 'Degrees to Radians Converter', path: '/angle/degree-to-radian' },
      { label: 'Radians to Degrees Converter', path: '/angle/radian-to-degree' },
      { label: 'Angle Converter', path: '/angle' },
    ],
  },

  {
    slug: 'mars-climate-orbiter',
    title: 'The $327 Million Unit Conversion Mistake: NASA\'s Mars Climate Orbiter',
    date: '2026-04-20',
    description: 'In 1999, NASA lost a $327 million spacecraft because one team used metric units and another used imperial. The story of the Mars Climate Orbiter is the most expensive unit conversion error in history.',
    intro: 'On September 23, 1999, NASA\'s Mars Climate Orbiter fired its main engine to enter orbit around Mars. It never came back. The spacecraft — nine months into its journey, 416 million miles from Earth — flew too close to the Martian atmosphere and was destroyed. The cause: one engineering team at NASA\'s Jet Propulsion Laboratory was sending thruster data in metric units, while another team\'s software at Lockheed Martin expected imperial units. Nobody caught it for nine months.',
    sections: [
      {
        heading: 'What Went Wrong',
        paragraphs: [
          'The Mars Climate Orbiter was designed to study Martian weather and act as a communication relay for future landers. At $327.6 million, it represented years of work by hundreds of engineers.',
          'The navigation software on the spacecraft expected force data in newton-seconds (the metric SI unit). The ground software sending the data was outputting pound-force seconds (the imperial unit). 1 pound-force second equals 4.448 newton-seconds — so every thruster firing command was off by a factor of 4.448.',
          'Over nine months of travel, these small errors accumulated. By the time the orbiter reached Mars, its trajectory was shifted by roughly 170 kilometers. Instead of entering a safe orbit at 150–170 km altitude, it approached at around 57 km — deep enough in the atmosphere to be destroyed by friction and aerodynamic stress.',
        ],
      },
      {
        heading: 'How It Was Missed',
        paragraphs: [
          'The mismatch was not caught because the two software systems — one from NASA\'s JPL, one from Lockheed Martin — were developed independently and tested separately. Each worked correctly in isolation. The error only manifested when they communicated with each other in space.',
          'Reviewers noticed the trajectory was slightly off weeks before arrival, but the deviations were within a range that could have been caused by other factors. The root cause was not identified in time.',
          'NASA\'s internal review found the failure resulted from inadequate systems-engineering verification and validation — a process failure, not just a math error.',
        ],
      },
      {
        heading: 'The Exact Conversion That Failed',
        paragraphs: [
          'The unit at the center of the failure was angular momentum: specifically, the small-force thruster impulse data transmitted from Earth.',
          'Lockheed Martin\'s software output the value in pound-force seconds (lbf·s). NASA\'s navigation software expected newton-seconds (N·s).',
          '1 lbf·s = 4.44822 N·s. Every command was therefore interpreted as 4.44822 times smaller than intended. Over thousands of corrections across a nine-month flight, this compounded into a fatal trajectory error.',
        ],
      },
      {
        heading: 'The Aftermath',
        paragraphs: [
          'The loss of the Mars Climate Orbiter prompted NASA to enforce a strict "metric-only" policy for all future space missions.',
          'The companion spacecraft, Mars Polar Lander, was lost two months later — though for unrelated reasons. The two losses back-to-back prompted a broad review of NASA\'s "faster, better, cheaper" approach to mission design.',
          'The incident is now a standard case study in software engineering, systems integration, and the importance of interface specifications. It is taught in engineering programs worldwide as an example of how a simple unit mismatch can cascade into catastrophic failure.',
        ],
      },
    ],
    conclusion: 'A single unconverted unit — pound-force seconds sent where newton-seconds were expected — destroyed a $327 million spacecraft. The lesson is not just about unit conversion. It is about never assuming two systems speak the same language, even when built by the same organization. Always verify units at every interface.',
    relatedLinks: [
      { label: 'Force / Pressure Converter', path: '/pressure' },
      { label: 'Length Converter', path: '/length' },
      { label: 'Unit Converter Home', path: '/' },
    ],
  },

  {
    slug: 'gimli-glider',
    title: 'The Gimli Glider: When a Boeing 767 Ran Out of Fuel Mid-Flight',
    tag: 'Conversion Fail',
    date: '2026-04-20',
    description: 'In 1983, an Air Canada Boeing 767 ran out of fuel at 41,000 feet because ground crew confused kilograms with pounds. The plane glided 100 miles to an emergency landing — with 69 people on board.',
    intro: 'On July 23, 1983, Air Canada Flight 143 — a brand-new Boeing 767 — ran out of fuel at 41,000 feet over northern Canada. All engines went silent. For the next 17 minutes, the plane glided without power over 100 miles of Canadian wilderness, carrying 61 passengers and 8 crew. The cause was a unit conversion error: ground crew calculated the fuel load in pounds when they should have used kilograms. The plane had exactly half the fuel it needed.',
    sections: [
      {
        heading: 'The Setup: A New Plane and a Broken Gauge',
        paragraphs: [
          'The Boeing 767 was one of Canada\'s first metric aircraft. Fuel on older planes was measured in pounds; the 767 used kilograms, reflecting Canada\'s shift to the metric system. The fuel quantity indication system (FQIS) on this particular aircraft was malfunctioning, so ground crew had to calculate the fuel load manually.',
          'To calculate fuel volume, you need to know the density of jet fuel — its specific gravity — to convert from volume (liters) to mass (kg or lbs). The correct specific gravity for the fuel was 0.803 kg per liter.',
          'This is where the error entered: the fuelers used 1.77 — the conversion factor for pounds per liter, not kilograms per liter. They were working in pounds. The aircraft required kilograms.',
        ],
      },
      {
        heading: 'The Exact Calculation Error',
        paragraphs: [
          'The plane needed 22,300 kg of fuel for the flight from Montreal to Edmonton.',
          'The ground crew measured the fuel already on board in liters, then multiplied by 1.77 (lbs/liter) instead of 0.803 (kg/liter) to get the weight. This gave them a number in pounds, not kilograms.',
          'Because 1 kg = 2.2 lbs, their fuel reading appeared more than twice as heavy as the actual fuel on board. The plane departed with 22,300 pounds of fuel — just over 10,000 kg — instead of the required 22,300 kg. It had 45% of the fuel it needed.',
        ],
      },
      {
        heading: 'The Glide',
        paragraphs: [
          'Both engines flamed out over Red Lake, Ontario. The cockpit went dark — many instruments, including the altitude indicator, are powered by the engines. The pilots had never trained for a complete dual-engine failure in a jet aircraft.',
          'Captain Robert Pearson had gliding experience in small aircraft. He calculated a glide ratio — the 767 could travel roughly 12 miles for every mile of altitude lost. From 41,000 feet, that gave them about 100 miles of range.',
          'The crew diverted to Gimli, Manitoba — a former Royal Canadian Air Force base that had been partially converted into a motorsport racing venue. The runway was shorter than ideal and had cars and people on it from a racing event that day. Pearson executed a forward slip maneuver to lose altitude rapidly and landed without engine power, nose gear, or full brakes. There were minor injuries but no fatalities.',
        ],
      },
      {
        heading: 'Why Multiple Checks Failed',
        paragraphs: [
          'Three separate people — the fueler, the first officer, and the captain — all checked the fuel calculation and missed the error. Each was working from the same incorrect assumption: that the number they were looking at was in the correct units.',
          'The FQIS malfunction had created a situation where manual calculation was required, but no written procedure existed for the metric conversion. The 767 was new; the ground crew were accustomed to the older imperial-unit aircraft.',
          'The accident investigation found systemic failures: inadequate training on the new metric system, no clear procedure for manual fuel calculations, and a broken instrument that should have grounded the aircraft.',
        ],
      },
    ],
    conclusion: 'The Gimli Glider is a reminder that unit errors do not announce themselves. The numbers looked right — because everyone was checking internal consistency, not unit consistency. The plane landed safely only because of extraordinary piloting skill. The fix was procedural: clear written standards specifying units at every step of fuel calculation.',
    relatedLinks: [
      { label: 'Weight Converter (kg to lbs)', path: '/weight/kilogram-to-pound' },
      { label: 'Volume Converter', path: '/volume' },
      { label: 'Fuel Economy Converter', path: '/fuel-economy' },
    ],
  },

  {
    slug: 'columbus-unit-error',
    title: 'How a Unit Conversion Error Sent Columbus to the Wrong Continent',
    tag: 'Conversion Fail',
    date: '2026-04-20',
    description: 'Christopher Columbus reached America partly because he confused two different definitions of a "mile." His unit error made the Earth appear 25% smaller than it actually is.',
    intro: 'Christopher Columbus did not prove the Earth was round — educated Europeans already knew that. What Columbus got spectacularly wrong was the size of the Earth, and specifically the distance from Europe to Asia going west. His error was not a matter of courage or vision. It was a unit conversion mistake: he confused two different definitions of a "mile" and concluded the Earth was roughly 25% smaller than it actually is. He sailed west expecting Asia and found a continent nobody in Europe knew existed.',
    sections: [
      {
        heading: 'The Two "Miles" That Changed History',
        paragraphs: [
          'In the 15th century, the word "mile" did not have a single fixed meaning. Different cultures used different standards. Two were relevant to Columbus\'s calculation.',
          'The Roman mile (mille passuum) was approximately 1,480 meters — close to today\'s international mile of 1,609 meters.',
          'The Arabic mile, used by the Islamic geographer al-Farghani in his influential calculations of the Earth\'s circumference, was approximately 1,973 meters — about 33% longer than the Roman mile.',
        ],
      },
      {
        heading: 'The Calculation',
        paragraphs: [
          'Al-Farghani had calculated — correctly — that one degree of latitude at the equator equals 56⅔ Arabic miles. Columbus read this figure but applied the shorter Roman mile instead of the longer Arabic mile.',
          'Using the Roman mile of 1,480 m: 56.67 × 1,480 m = 83,870 m per degree, giving a total Earth circumference of about 30,200 km.',
          'The actual circumference of the Earth is approximately 40,075 km. Columbus\'s figure was about 25% too small.',
          'This made the westward distance from the Canary Islands to Japan appear to be roughly 3,700 km. The actual distance — across the Pacific — is about 19,600 km. Columbus was off by a factor of more than five.',
        ],
      },
      {
        heading: 'Why Experts Rejected Him',
        paragraphs: [
          'The Portuguese royal commission that evaluated Columbus\'s proposal in 1484 rejected it — not because they thought the Earth was flat, but because their calculations were correct. Their geographers used the Arabic mile properly and concluded the westward route to Asia was impossibly long for the ships and supplies of the time. They were right.',
          'Spain\'s Queen Isabella ultimately funded the voyage, in part because Columbus was persuasive and the potential reward was enormous. But Spain\'s own experts were also skeptical.',
          'Columbus went to his grave believing he had reached islands off the coast of Asia. He never accepted that he had found a previously unknown continent.',
        ],
      },
      {
        heading: 'The Irony',
        paragraphs: [
          'Columbus\'s unit error saved his life. If he had correctly calculated the Earth\'s circumference, he would have known the voyage was impossible with 15th-century ships — too far, too little food and water, no way to survive the crossing.',
          'The Americas were, from Columbus\'s perspective, an accident: land that happened to exist at roughly the distance where he expected to find Asia. Without that landmass, his crew would have mutinied or starved long before reaching Japan.',
          'The lesson is not comforting: sometimes a wrong calculation leads somewhere interesting. But you cannot plan for lucky continents. The Mars Climate Orbiter and Gimli Glider had no such fortune.',
        ],
      },
    ],
    conclusion: 'Columbus confused the Arabic mile (1,973 m) with the Roman mile (1,480 m) — a 33% difference that made the Earth appear 25% smaller than it is. The error led him to underestimate the westward distance to Asia by a factor of five. He reached a continent he did not know existed, then spent the rest of his life insisting it was Asia. Unit errors do not always destroy spacecraft or strand planes — sometimes they accidentally reshape history.',
    relatedLinks: [
      { label: 'Length Converter', path: '/length' },
      { label: 'km to Miles Converter', path: '/length/kilometer-to-mile' },
      { label: 'Unit Converter Home', path: '/' },
    ],
  },

  {
    slug: 'nm-to-ft-lb',
    title: 'How to Convert Nm to ft-lb (and ft-lb to Nm)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Learn how to convert Newton-meters to foot-pounds and back. Includes the exact formula, a quick reference table, and real-world torque values for cars and bolts.',
    intro: 'Whether you are tightening lug nuts, following a cylinder head torque spec, or comparing engine output from a European and American source, you will run into Newton-meters and foot-pounds. This guide explains the conversion formula, gives you a reference table, and shows where each unit is used.',
    sections: [
      {
        heading: 'What Is a Newton-Meter (Nm)?',
        paragraphs: [
          'A Newton-meter (N·m) is the SI unit of torque — the rotational equivalent of a force. One Newton-meter is the torque produced by a force of one Newton applied perpendicular to a lever arm one meter long.',
          'Newton-meters are used in most of the world for engine specifications, bolt torque values, and engineering calculations. If you are reading a European or Japanese vehicle manual, torque will almost certainly be listed in Nm.',
        ],
      },
      {
        heading: 'What Is a Foot-Pound (ft·lb)?',
        paragraphs: [
          'A foot-pound (ft·lb) is the imperial unit of torque used primarily in the United States. It represents the torque produced by a force of one pound applied at a distance of one foot.',
          'American automotive manuals, torque wrenches sold in the US, and engine specifications from US manufacturers use foot-pounds. Smaller values — such as those for interior trim bolts or electronic connectors — are often listed in inch-pounds (in·lb), where 1 ft·lb = 12 in·lb.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          'The exact conversion factor is: 1 ft·lb = 1.35582 Nm, or equivalently, 1 Nm = 0.73756 ft·lb.',
          'To convert Nm to ft·lb: multiply by 0.7376. Example: 100 Nm × 0.7376 = 73.76 ft·lb.',
          'To convert ft·lb to Nm: multiply by 1.3558. Example: 80 ft·lb × 1.3558 = 108.5 Nm.',
          'Quick mental shortcut: divide Nm by 1.36 for ft·lb, or multiply ft·lb by 1.36 for Nm. This gives results within 0.03% of the exact value.',
        ],
      },
      {
        heading: 'Nm to ft·lb Reference Table',
        paragraphs: ['Common torque values converted between both systems:'],
        list: [
          '10 Nm = 7.4 ft·lb',
          '20 Nm = 14.8 ft·lb',
          '50 Nm = 36.9 ft·lb',
          '80 Nm = 59.0 ft·lb',
          '100 Nm = 73.8 ft·lb',
          '120 Nm = 88.5 ft·lb',
          '150 Nm = 110.6 ft·lb',
          '200 Nm = 147.5 ft·lb',
        ],
      },
      {
        heading: 'Real-World Torque Values',
        paragraphs: [
          'Lug nuts (wheel bolts): Most passenger cars require 80–120 Nm (59–89 ft·lb). Always check the sticker inside the driver\'s door jamb or the owner\'s manual — over-torquing can warp brake rotors or strip threads.',
          'Spark plugs: Typically 15–30 Nm (11–22 ft·lb) depending on thread size. Aluminum cylinder heads require less torque than cast iron.',
          'Cylinder head bolts: Usually 50–100 Nm (37–74 ft·lb) in multiple stages. Many modern engines use torque-to-yield (TTY) bolts that must be replaced after removal.',
          'Engine output: A typical family car produces 150–250 Nm (110–184 ft·lb) of torque. Sports cars often exceed 400 Nm (295 ft·lb), while diesel trucks can exceed 1,000 Nm (737 ft·lb).',
        ],
      },
      {
        heading: 'Inch-Pounds vs Foot-Pounds',
        paragraphs: [
          'For small fasteners — interior trim, electronics, small engine components — torque values are often given in inch-pounds (in·lb) rather than foot-pounds.',
          'The conversion is simple: 1 ft·lb = 12 in·lb. So 18 in·lb = 1.5 ft·lb = 2.03 Nm.',
          'When a spec sheet says "15 in·lb," do not confuse it with 15 ft·lb — that would be eight times too much and could strip the fastener.',
        ],
      },
    ],
    conclusion: 'The key number to remember: 1 ft·lb ≈ 1.356 Nm. For quick mental math, dividing Nm by 1.36 gives ft·lb within rounding error. Use our free torque converter for any exact value, and always double-check critical torque specs against your vehicle\'s service manual. Always consult a qualified mechanic for safety-critical fasteners.',
    relatedLinks: [
      { label: 'Nm to ft·lb Converter', path: '/torque/newton_meter-to-foot_pound' },
      { label: 'ft·lb to Nm Converter', path: '/torque/foot_pound-to-newton_meter' },
      { label: 'Torque Converter', path: '/torque' },
    ],
  },

  {
    slug: 'shoe-size-guide',
    title: 'Shoe Size Conversion Guide: EU, US, and UK Sizes Explained',
    tag: 'Quick Reference',
    date: '2026-04-20',
    description: 'Convert shoe sizes between EU, US Men\'s, US Women\'s, and UK with exact formulas and a reference table. Never order the wrong size when shopping internationally.',
    intro: 'Buying shoes online from a foreign retailer — or checking a size chart from a brand you haven\'t tried before — can be confusing when the sizing system is different from what you are used to. This guide explains how EU, US, and UK shoe sizes relate to each other and gives you the formulas and reference tables to convert between them.',
    sections: [
      {
        heading: 'How Shoe Size Systems Work',
        paragraphs: [
          'There are three major shoe sizing systems: EU (European), US (split into Men\'s and Women\'s), and UK. Each uses a different numeric scale, but all are ultimately based on foot length — the distance from heel to toe while standing.',
          'EU sizes use the Paris point system, where 1 Paris point = 2/3 of a centimeter. UK sizes use a system derived from barleycorns (1/3 of an inch). US sizes use a similar barleycorn base but with different starting points for men and women.',
          'Note that shoe sizes are approximate — fit varies by brand, shoe style, and last shape. Always check a brand\'s specific size chart when available.',
        ],
      },
      {
        heading: 'The Conversion Formulas',
        paragraphs: [
          'EU to US Men\'s: subtract 33. Example: EU 42 − 33 = US Men\'s 9.',
          'EU to US Women\'s: subtract 31. Example: EU 39 − 31 = US Women\'s 8.',
          'EU to UK: subtract 33.5. Example: EU 42 − 33.5 = UK 8.5.',
          'US Men\'s to US Women\'s: add 2. Example: US Men\'s 9 + 2 = US Women\'s 11.',
          'US Men\'s to UK: subtract 0.5. Example: US Men\'s 9 − 0.5 = UK 8.5.',
          'EU to foot length (cm): divide by 1.575. Example: EU 42 ÷ 1.575 ≈ 26.7 cm.',
        ],
      },
      {
        heading: 'EU to US and UK Size Chart',
        paragraphs: ['Common sizes for adult shoes:'],
        list: [
          'EU 36 = US Women\'s 5 / US Men\'s 3.5 / UK 3.5 / 22.9 cm',
          'EU 38 = US Women\'s 7 / US Men\'s 5 / UK 5 / 24.1 cm',
          'EU 39 = US Women\'s 8 / US Men\'s 6 / UK 6 / 24.8 cm',
          'EU 40 = US Women\'s 9 / US Men\'s 7 / UK 6.5 / 25.4 cm',
          'EU 41 = US Women\'s 10 / US Men\'s 8 / UK 7.5 / 26.0 cm',
          'EU 42 = US Women\'s 11 / US Men\'s 9 / UK 8.5 / 26.7 cm',
          'EU 43 = US Women\'s 12 / US Men\'s 10 / UK 9 / 27.3 cm',
          'EU 44 = US Men\'s 11 / UK 10 / 27.9 cm',
          'EU 45 = US Men\'s 12 / UK 11 / 28.6 cm',
        ],
      },
      {
        heading: 'How to Measure Your Foot Size',
        paragraphs: [
          'Place a blank sheet of paper on a hard floor. Stand on it with your full weight and trace the outline of your foot with a pencil held vertically.',
          'Measure the longest distance from the heel mark to the toe mark. This is your foot length in centimeters.',
          'Multiply by 1.575 to get your EU size. For example, 26.7 cm × 1.575 ≈ EU 42.',
          'Always measure both feet — most people have one foot slightly larger than the other. Use the larger measurement to choose your size.',
        ],
      },
      {
        heading: 'Why US Men\'s and Women\'s Sizes Differ',
        paragraphs: [
          'US women\'s sizes run about 1.5 sizes larger than US men\'s for the same foot length. This is a historical convention, not a reflection of actual foot width or shape.',
          'Practically: a US Women\'s size 9 is the same physical length as a US Men\'s size 7. Both equal approximately EU 40 (25.4 cm foot length).',
          'Some brands — especially athletic and workwear — sell shoes in one unisex scale (usually men\'s). Women buying unisex shoes typically go 1.5 sizes down from their women\'s size.',
        ],
      },
    ],
    conclusion: 'The most reliable way to find your size in any system is to measure your foot length in centimeters, then convert using the formula: EU size = foot length (cm) × 1.575. From EU, you can reach any other system with simple addition or subtraction. Use our free shoe size converter for instant results.',
    relatedLinks: [
      { label: 'EU to US Men\'s Converter', path: '/shoe-size/eu-to-us_men' },
      { label: 'EU to US Women\'s Converter', path: '/shoe-size/eu-to-us_women' },
      { label: 'Shoe Size Converter', path: '/shoe-size' },
    ],
  },

  {
    slug: 'cooking-measurements',
    title: 'Cooking Measurement Conversion Guide: Cups, Tablespoons, ml, and Grams',
    tag: 'Quick Reference',
    date: '2026-04-20',
    description: 'Convert between cups, tablespoons, teaspoons, fluid ounces, milliliters, and grams. Includes a quick reference table and tips for scaling recipes.',
    intro: 'Recipe conversions are one of the most common everyday unit problems. American recipes use cups and tablespoons; European recipes use grams and milliliters; and scaling a recipe up or down requires converting between them. This guide covers the exact conversion factors, a quick reference table, and the key difference between measuring liquids and dry ingredients.',
    sections: [
      {
        heading: 'US Cooking Volume Units',
        paragraphs: [
          'American recipes use a system of nested volume units: teaspoon (tsp), tablespoon (tbsp), fluid ounce (fl oz), cup, pint, quart, and gallon.',
          'The relationships are fixed: 1 tablespoon = 3 teaspoons. 1 cup = 16 tablespoons = 8 fluid ounces = 236.6 ml. 1 pint = 2 cups. 1 quart = 4 cups. 1 gallon = 16 cups.',
          'These units measure volume, not weight. A cup of water weighs 236.6 grams, but a cup of flour weighs only about 125 grams because flour is less dense.',
        ],
      },
      {
        heading: 'Quick Conversion Table',
        paragraphs: ['All values are for liquids (water). Dry ingredient weights will differ.'],
        list: [
          '1 teaspoon = 4.93 ml',
          '1 tablespoon = 14.79 ml = 3 teaspoons',
          '1 fluid ounce = 29.57 ml = 2 tablespoons',
          '¼ cup = 59.1 ml = 4 tablespoons',
          '½ cup = 118.3 ml = 8 tablespoons',
          '1 cup = 236.6 ml = 16 tablespoons',
          '2 cups = 473.2 ml = 1 pint',
          '4 cups = 946.4 ml = 1 quart',
        ],
      },
      {
        heading: 'Grams vs. Milliliters in Cooking',
        paragraphs: [
          'For water and thin liquids (milk, juice, broth), grams and milliliters are interchangeable: 1 ml of water = 1 gram. So 240 ml = 240 grams for water.',
          'For everything else, the conversion depends on density. Common examples: 1 cup of all-purpose flour = 125 grams. 1 cup of granulated sugar = 200 grams. 1 cup of butter = 227 grams. 1 cup of honey = 340 grams.',
          'This is why baking recipes from professional sources use grams — measuring by weight is more precise and reproducible than measuring by volume, especially for flour (which compacts differently depending on how you scoop).',
        ],
      },
      {
        heading: 'Scaling Recipes',
        paragraphs: [
          'To halve a recipe, divide all quantities by 2. To double it, multiply by 2. Most conversions are straightforward, but some measurements get awkward: half of ¾ cup is 6 tablespoons, which is easier to measure than ⅜ cup.',
          'Useful scaled measurements: ⅓ cup = 5 tablespoons + 1 teaspoon. ¾ cup = 12 tablespoons. ⅔ cup = 10 tablespoons + 2 teaspoons.',
          'For large-scale cooking, convert everything to grams first — it is easier to multiply 125 g × 3.5 than to figure out what 3.5 cups of flour looks like.',
        ],
      },
      {
        heading: 'UK vs. US Measurements',
        paragraphs: [
          'UK tablespoons are slightly larger than US tablespoons: 1 UK tablespoon = 17.76 ml vs. 14.79 ml in the US. For most recipes the difference is negligible, but it matters in precise baking.',
          'The UK cup is not a standard unit — British recipes rarely use cups, preferring grams and milliliters. When a UK recipe does mention cups, it usually means 250 ml (vs. the US 236.6 ml).',
          'Australian tablespoons are larger still: 1 Australian tablespoon = 20 ml = 4 teaspoons (vs. 3 in the US). Always check which country a recipe comes from.',
        ],
      },
    ],
    conclusion: 'For liquids: 1 cup = 236.6 ml, 1 tablespoon = 14.79 ml, 1 teaspoon = 4.93 ml. For dry ingredients, weight in grams is more accurate than volume. Weights are approximate and vary by ingredient density and measuring technique. Use our free cooking converter for any combination instantly.',
    relatedLinks: [
      { label: 'Cups to ml Converter', path: '/cooking/cup-to-milliliter' },
      { label: 'Tablespoons to ml Converter', path: '/cooking/tablespoon-to-milliliter' },
      { label: 'Cooking Converter', path: '/cooking' },
    ],
  },
  {
    slug: 'inches-to-cm',
    title: 'How to Convert Inches to Centimeters (and Back)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Learn how to convert inches to centimeters with the exact formula, height reference table, and tips for screen sizes and everyday measurements.',
    intro: 'Inches and centimeters are the two most common units for measuring short distances in everyday life — height, screen sizes, rulers, clothing measurements. The United States uses inches; almost everywhere else uses centimeters. This guide gives you the exact conversion, a height reference table, and practical tips for the most common use cases.',
    sections: [
      {
        heading: 'What Is an Inch?',
        paragraphs: [
          'An inch (in or ″) is an imperial unit of length equal to exactly 2.54 centimeters. It is the standard unit for short measurements in the United States — height, screen sizes, pipe diameters, and most hardware.',
          'The inch has been defined in terms of the metric system since 1959, when the international yard and pound agreement fixed 1 inch = 2.54 cm exactly. Before that, slight variations existed between the US and UK definitions.',
        ],
      },
      {
        heading: 'What Is a Centimeter?',
        paragraphs: [
          'A centimeter (cm) is one-hundredth of a meter. It is the standard unit for short lengths in the metric system — height, clothing sizes, room dimensions, and most everyday measurements outside the United States.',
          'One centimeter is roughly the width of a fingernail. A standard school ruler is 30 cm long, which equals about 11.8 inches.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 inch = 2.54 centimeters (exact, by international definition).',
          'To convert inches to centimeters: multiply by 2.54. For example, 6 inches × 2.54 = 15.24 cm.',
          'To convert centimeters to inches: divide by 2.54 (or multiply by 0.393701). For example, 30 cm ÷ 2.54 = 11.81 inches.',
          'Mental shortcut: multiply inches by 2.5 for a quick estimate. The result is about 1.6% low — close enough for casual use.',
        ],
      },
      {
        heading: 'Height Conversion Reference',
        paragraphs: ['Common heights in feet/inches and centimeters:'],
        list: [
          '5\'0″ (60 in) = 152.4 cm',
          '5\'4″ (64 in) = 162.6 cm',
          '5\'6″ (66 in) = 167.6 cm',
          '5\'8″ (68 in) = 172.7 cm',
          '5\'10″ (70 in) = 177.8 cm',
          '6\'0″ (72 in) = 182.9 cm',
          '6\'2″ (74 in) = 188.0 cm',
          '6\'4″ (76 in) = 193.0 cm',
        ],
      },
      {
        heading: 'Screen Size and Tech Measurements',
        paragraphs: [
          'Screen sizes are always measured in inches diagonally — even in countries that otherwise use centimeters. A 27-inch monitor measures 68.6 cm diagonally. A 65-inch TV is 165.1 cm.',
          'Other tech measurements in inches: hard drive disk diameter (3.5″ or 2.5″), camera sensor sizes, paper sizes (US Letter is 8.5 × 11 inches = 21.6 × 27.9 cm).',
          'Clothing: US measurements for waist, chest, and inseam are in inches. EU clothing uses centimeters. A 32-inch waist is 81.3 cm.',
        ],
      },
      {
        heading: 'Converting Feet and Inches to Centimeters',
        paragraphs: [
          'To convert a height given in feet and inches (e.g., 5\'9″) to centimeters:',
          '1. Convert feet to inches: 5 × 12 = 60 inches.',
          '2. Add the remaining inches: 60 + 9 = 69 inches total.',
          '3. Multiply by 2.54: 69 × 2.54 = 175.3 cm.',
        ],
      },
    ],
    conclusion: '1 inch = 2.54 cm exactly. To convert, multiply inches by 2.54 — or divide centimeters by 2.54 for the reverse. For screen sizes, always use the exact value. For quick mental math, multiplying by 2.5 gives a result within 1.6%. Use our free length converter for any value instantly.',
    relatedLinks: [
      { label: 'Inches to Centimeters Converter', path: '/length/inch-to-centimeter' },
      { label: 'Centimeters to Inches Converter', path: '/length/centimeter-to-inch' },
      { label: 'Length Converter', path: '/length' },
    ],
  },
  {
    slug: 'oz-to-grams',
    title: 'How to Convert Ounces to Grams (and Back)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Convert ounces to grams with the exact formula, common food weight reference table, and the difference between avoirdupois and troy ounces.',
    intro: 'Ounces and grams are both units for measuring small weights, but they come from different measurement traditions. US food labels, recipes, and postal scales use ounces. The rest of the world uses grams. This guide explains the exact conversion, clarifies the avoirdupois vs troy ounce distinction, and gives you a practical food weight reference.',
    sections: [
      {
        heading: 'Which Ounce Are We Talking About?',
        paragraphs: [
          'There are two ounces in common use, and they are not equal.',
          'The avoirdupois ounce (oz) is the everyday ounce used for food, body weight, and general measurement. 1 avoirdupois ounce = 28.3495 grams. This is the ounce on your kitchen scale and US food labels.',
          'The troy ounce (oz t) is used exclusively for precious metals — gold, silver, platinum. 1 troy ounce = 31.1035 grams, about 10% heavier than the avoirdupois ounce. When a jeweler or commodity market quotes a price per ounce, they always mean troy ounces.',
          'Unless you are dealing with precious metals, you are working with avoirdupois ounces.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 avoirdupois ounce = 28.3495 grams.',
          'To convert ounces to grams: multiply by 28.3495. For example, 4 oz × 28.3495 = 113.4 g.',
          'To convert grams to ounces: divide by 28.3495 (or multiply by 0.035274). For example, 250 g ÷ 28.3495 = 8.82 oz.',
          'Mental shortcut: multiply ounces by 28 for a quick estimate. The result is about 1.2% low — fine for casual use.',
        ],
      },
      {
        heading: 'Common Food Weight Conversions',
        paragraphs: ['Everyday reference values:'],
        list: [
          '1 oz = 28.35 g (one slice of bread)',
          '2 oz = 56.7 g (small chicken breast portion)',
          '4 oz = 113.4 g (quarter pound)',
          '8 oz = 226.8 g (half pound)',
          '16 oz = 453.6 g (1 pound)',
          '100 g = 3.53 oz',
          '200 g = 7.05 oz',
          '500 g = 17.64 oz (about 1.1 lb)',
        ],
      },
      {
        heading: 'US Food Labels and Serving Sizes',
        paragraphs: [
          'US food labels show weight in both ounces and grams. A can of tuna labeled "5 oz (142g)" uses the avoirdupois ounce. The grams figure is the authoritative measurement — the oz value is rounded.',
          'Cereal boxes, snack bags, and deli counters in the US use ounces. European products use grams. When adapting a recipe from one system to the other, use the exact conversion factor for baking — rounding to 28 g per oz can introduce measurable error over large quantities.',
        ],
      },
      {
        heading: 'Cooking and Baking Reference',
        paragraphs: [
          'Key ingredient conversions (1 oz = 28.35 g):',
        ],
        list: [
          '1 oz all-purpose flour ≈ 28 g',
          '1 oz granulated sugar ≈ 28 g',
          '1 oz butter ≈ 28 g',
          '1 oz cream cheese ≈ 28 g',
          '1 oz chocolate ≈ 28 g',
          '1 oz shredded cheese ≈ 28 g',
        ],
      },
    ],
    conclusion: '1 avoirdupois ounce = 28.3495 grams. For precious metals, 1 troy ounce = 31.1035 grams. For everyday cooking and food weights, multiply ounces by 28.35 or divide grams by 28.35. Use our free weight converter for precise results in both directions.',
    relatedLinks: [
      { label: 'Ounces to Grams Converter', path: '/weight/ounce-to-gram' },
      { label: 'Grams to Ounces Converter', path: '/weight/gram-to-ounce' },
      { label: 'Weight Converter', path: '/weight' },
    ],
  },
  {
    slug: 'feet-to-inches',
    title: 'How to Convert Feet to Inches (and Back)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Learn how to convert feet to inches with the exact formula, height reference table, and tips for expressing measurements in the US imperial system.',
    intro: 'Feet and inches are the two primary units for measuring height and short distances in the United States. While the relationship is simple — there are exactly 12 inches in a foot — converting between them becomes less obvious when dealing with mixed measurements like 5 feet 9 inches or decimal feet like 5.75 ft. This guide covers all the cases.',
    sections: [
      {
        heading: 'The Basic Relationship',
        paragraphs: [
          '1 foot = 12 inches (exact, by definition). 1 inch = 1/12 foot = 0.08333... feet.',
          'To convert feet to inches: multiply by 12. For example, 6 ft × 12 = 72 inches.',
          'To convert inches to feet: divide by 12. For example, 66 inches ÷ 12 = 5.5 feet = 5 feet 6 inches.',
        ],
      },
      {
        heading: 'Why 12 Inches in a Foot?',
        paragraphs: [
          'The foot was historically based on the length of a human foot — a convenient body-based measurement used across ancient civilizations. The division into 12 inches comes from the Roman uncia (one-twelfth).',
          '12 is a practical divisor: it divides evenly into halves (6), thirds (4), quarters (3), sixths (2), and twelfths (1) — useful for carpentry and trade before decimal arithmetic was common.',
          'The barleycorn system further divided the inch into thirds (3 barleycorns = 1 inch), making 36 barleycorns in a foot. This system persists in US shoe sizing, where one shoe size equals one barleycorn (1/3 inch).',
        ],
      },
      {
        heading: 'Converting Mixed Feet and Inches',
        paragraphs: [
          'To convert a height like 5 feet 9 inches to total inches: (5 × 12) + 9 = 60 + 9 = 69 inches.',
          'To convert total inches back to feet and inches: 69 ÷ 12 = 5 remainder 9 → 5 feet 9 inches.',
          'To convert decimal feet to feet and inches: 5.75 ft → 0.75 × 12 = 9 inches → 5 feet 9 inches.',
          'To convert feet and inches to decimal feet: 5 ft 9 in → 9 ÷ 12 = 0.75 → 5.75 ft.',
        ],
      },
      {
        heading: 'Height Reference Table',
        paragraphs: ['Common heights in feet/inches and total inches:'],
        list: [
          '5\'0″ = 60 inches',
          '5\'3″ = 63 inches',
          '5\'6″ = 66 inches',
          '5\'9″ = 69 inches',
          '6\'0″ = 72 inches',
          '6\'3″ = 75 inches',
          '6\'6″ = 78 inches',
        ],
      },
      {
        heading: 'Construction and Measurement Contexts',
        paragraphs: [
          'In US construction, measurements are typically given in feet and inches (e.g., a ceiling that is 8 ft 0 in high, a doorway that is 6 ft 8 in tall). Blueprints and building codes use feet and inches rather than decimal feet.',
          'Lumber is sold in nominal lengths in feet (8 ft, 10 ft, 12 ft) but actual dimensions use inches (a "2×4" board is actually 1.5 inches × 3.5 inches).',
          'Aviation: runway lengths and altitudes use feet. A typical cruising altitude of 35,000 ft = 420,000 inches. Obstacle clearance heights are given in feet.',
        ],
      },
    ],
    conclusion: '1 foot = 12 inches exactly. To convert feet to inches, multiply by 12. For mixed measurements (e.g., 5\'9″), convert feet to inches first then add the remaining inches: (5 × 12) + 9 = 69 inches. Use our free length converter for instant results.',
    relatedLinks: [
      { label: 'Feet to Inches Converter', path: '/length/foot-to-inch' },
      { label: 'Inches to Feet Converter', path: '/length/inch-to-foot' },
      { label: 'Inches to Centimeters Converter', path: '/length/inch-to-centimeter' },
      { label: 'Length Converter', path: '/length' },
    ],
  },
  {
    slug: 'liters-to-ml',
    title: 'How to Convert Liters to Milliliters (and Back)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Learn how to convert liters to milliliters with the exact formula, beverage reference table, and practical examples for cooking, medicine, and everyday use.',
    intro: 'Liters and milliliters are both metric volume units used worldwide for beverages, cooking, medicine, and laboratory measurements. The conversion is simple — there are exactly 1,000 milliliters in a liter — but the relationship between these units shows up in ways that are easy to overlook. This guide explains both units and gives you quick reference values for everyday contexts.',
    sections: [
      {
        heading: 'What Is a Liter?',
        paragraphs: [
          'A liter (L) is the base metric unit for measuring liquid volume. It is equal to exactly 1,000 milliliters, 1 cubic decimeter (dm³), or 0.001 cubic meters.',
          'Everyday items measured in liters: water bottles (0.5 L, 1 L, 1.5 L), soda bottles (2 L), car engine displacement (1.6 L, 2.0 L), milk cartons (1 L), and fuel (sold by the liter in most countries).',
        ],
      },
      {
        heading: 'What Is a Milliliter?',
        paragraphs: [
          'A milliliter (mL) is one-thousandth of a liter, equal to exactly 1 cubic centimeter (cm³). It is the standard unit for small liquid volumes in cooking, medicine, and laboratory measurements.',
          'Everyday items measured in milliliters: medicine doses (5 mL = 1 teaspoon), espresso shot (30 mL), wine glass (150–250 mL), and can of soda (330 mL or 355 mL).',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 liter = 1,000 milliliters (exact, by definition).',
          'To convert liters to milliliters: multiply by 1,000. For example, 1.5 L × 1,000 = 1,500 mL.',
          'To convert milliliters to liters: divide by 1,000. For example, 750 mL ÷ 1,000 = 0.75 L.',
          'In practice: move the decimal point three places right to go from liters to milliliters, and three places left to go from milliliters to liters.',
        ],
      },
      {
        heading: 'Beverage Reference Table',
        paragraphs: ['Common drink volumes in both units:'],
        list: [
          'Espresso shot: 30 mL = 0.030 L',
          'Small juice glass: 150 mL = 0.15 L',
          'Wine glass (standard pour): 150–250 mL = 0.15–0.25 L',
          'Can of soda (US): 355 mL = 0.355 L',
          'Can of soda (EU): 330 mL = 0.330 L',
          'Standard water bottle: 500 mL = 0.5 L',
          'Large soda bottle: 2,000 mL = 2 L',
          'Wine bottle: 750 mL = 0.75 L',
        ],
      },
      {
        heading: 'Medicine and Dosing',
        paragraphs: [
          'Medicine doses for liquids are always given in milliliters. Common reference points:',
        ],
        list: [
          '1 teaspoon (tsp) = 4.93 mL ≈ 5 mL',
          '1 tablespoon (tbsp) = 14.79 mL ≈ 15 mL',
          '1 fluid ounce = 29.57 mL ≈ 30 mL',
          'Standard syringe dose: 1–10 mL',
          'IV bag: 250 mL, 500 mL, or 1,000 mL (1 L)',
        ],
      },
      {
        heading: 'Cooking and Baking',
        paragraphs: [
          'European and Australian recipes use milliliters for liquids. A recipe calling for "250 mL of milk" requires a quarter liter — roughly equivalent to 1 US cup (236.6 mL).',
          'For cooking, the liter/milliliter system is more precise and easier to scale than the US cup system. 500 mL is exactly half a liter; half a cup is 118 mL, which requires knowing the cup definition to work with.',
        ],
      },
    ],
    conclusion: '1 liter = 1,000 milliliters exactly. To convert L to mL, multiply by 1,000. To convert mL to L, divide by 1,000. The conversion is among the simplest in the metric system — just shift the decimal point three places. Use our free volume converter for any liquid measurement instantly.',
    relatedLinks: [
      { label: 'Liters to Milliliters Converter', path: '/volume/liter-to-milliliter' },
      { label: 'Milliliters to Liters Converter', path: '/volume/milliliter-to-liter' },
      { label: 'Volume Converter', path: '/volume' },
    ],
  },
  {
    slug: 'acres-to-sq-meters',
    title: 'How to Convert Acres to Square Meters (and Back)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Convert acres to square meters with the exact formula, a football-field comparison, and practical examples for real estate and land measurement.',
    intro: 'Acres and square meters measure land area, but they come from completely different measurement traditions. The United States uses acres for real estate and agriculture; most of the world uses square meters and hectares. This guide explains the exact conversion, gives you visual reference points for scale, and covers the relationship between acres, hectares, and square meters.',
    sections: [
      {
        heading: 'What Is an Acre?',
        paragraphs: [
          'An acre is a unit of area used primarily in the United States, UK, and some other countries for measuring land. 1 acre = 4,046.856 square meters = 43,560 square feet.',
          'The word "acre" comes from Old English, meaning "open field." Historically, it was defined as the amount of land a yoke of oxen could plow in one day — roughly a strip 1 furlong (201 meters) long by 1 chain (20.1 meters) wide.',
          'In the US, real estate listings use acres for plots. A quarter-acre lot is common in suburban neighborhoods. Farms are measured in hundreds or thousands of acres.',
        ],
      },
      {
        heading: 'What Is a Square Meter?',
        paragraphs: [
          'A square meter (m²) is the SI unit of area, equal to the area of a square with sides of exactly 1 meter. It is used worldwide for floor plans, room sizes, and small to medium land parcels.',
          'For larger land areas, the hectare (ha) is commonly used: 1 hectare = 10,000 m² = 2.471 acres. Farms and large properties in metric countries are measured in hectares.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 acre = 4,046.856 square meters (exact: 1 acre = 43,560 ft², and 1 ft = 0.3048 m, so 43,560 × 0.3048² = 4,046.856).',
          'To convert acres to square meters: multiply by 4,046.856. For example, 2 acres × 4,046.856 = 8,093.7 m².',
          'To convert square meters to acres: divide by 4,046.856 (or multiply by 0.000247105). For example, 10,000 m² ÷ 4,046.856 = 2.471 acres.',
          'Acres to hectares: multiply by 0.404686. Or simply: 1 hectare = 2.471 acres.',
        ],
      },
      {
        heading: 'Visual Reference Points',
        paragraphs: ['Real-world comparisons to understand scale:'],
        list: [
          '1 acre ≈ 4,047 m² (about 0.4 hectares)',
          '1 acre ≈ 90% of a US football field (including end zones: 1.32 acres)',
          '1 acre ≈ 16 tennis courts',
          '0.25 acre ≈ 1,012 m² (typical suburban US lot)',
          '1 hectare = 2.471 acres = 10,000 m²',
          '1 km² = 100 hectares = 247.1 acres',
          'Central Park, NYC: 843 acres = 341 hectares = 3.41 km²',
        ],
      },
      {
        heading: 'Real Estate Conversions',
        paragraphs: [
          'When comparing US and international property listings, the acre-to-hectare conversion is the most useful: a 5-acre farm is 2.02 hectares; a 1-hectare vineyard is 2.47 acres.',
          'Square footage to square meters: US home sizes in square feet ÷ 10.764 = m². A 2,000 sq ft house = 185.8 m².',
          'For land purchases in countries that use m²: multiply the asking price per m² by 4,046.856 to get the equivalent price per acre.',
        ],
      },
    ],
    conclusion: '1 acre = 4,046.856 square meters = 0.4047 hectares. To convert, multiply acres by 4,047 for m², or multiply by 0.4047 for hectares. The most useful comparison: 1 acre is roughly the size of a US football field without the end zones. Use our free area converter for instant results in any unit combination.',
    relatedLinks: [
      { label: 'Acres to Square Meters Converter', path: '/area/acre-to-square_meter' },
      { label: 'Square Meters to Acres Converter', path: '/area/square_meter-to-acre' },
      { label: 'Area Converter', path: '/area' },
    ],
  },
  {
    slug: 'hours-to-minutes',
    title: 'How to Convert Hours to Minutes (and Seconds)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Learn how to convert hours to minutes and seconds with exact formulas, a quick reference table, and tips for decimal hours and time tracking.',
    intro: 'Hours and minutes are the units we use every day to schedule, plan, and measure time — but converting between them requires careful arithmetic, especially with mixed values like 2.5 hours or 1 hour 45 minutes. This guide explains the exact relationships, covers decimal hours (used in time tracking and spreadsheets), and gives you a quick reference table for the most common values.',
    sections: [
      {
        heading: 'The Basic Relationships',
        paragraphs: [
          '1 hour = 60 minutes (exact).',
          '1 minute = 60 seconds.',
          '1 hour = 3,600 seconds (60 × 60).',
          'To convert hours to minutes: multiply by 60. For example, 3 hours × 60 = 180 minutes.',
          'To convert minutes to hours: divide by 60. For example, 150 minutes ÷ 60 = 2.5 hours = 2 hours 30 minutes.',
        ],
      },
      {
        heading: 'Why 60 Minutes in an Hour?',
        paragraphs: [
          'The division of hours into 60 minutes (and minutes into 60 seconds) comes from the ancient Babylonian sexagesimal (base-60) number system. The Babylonians used base-60 because it divides evenly by 2, 3, 4, 5, 6, 10, 12, 15, 20, and 30 — far more divisors than base-10.',
          'This system was transmitted to ancient Greece and then to medieval Europe through Arabic astronomy, and it has remained the standard for time measurement ever since. Despite metric efforts (the French Revolutionary calendar tried a 10-hour day with 100-minute hours in the 1790s), 60-based time proved too entrenched to replace.',
        ],
      },
      {
        heading: 'Decimal Hours',
        paragraphs: [
          'Spreadsheets, time-tracking software, and billing systems often use decimal hours rather than hours and minutes. 1.5 hours means 1 hour and 30 minutes; 0.25 hours means 15 minutes.',
          'To convert decimal hours to hours and minutes: take the decimal part and multiply by 60. For example, 2.75 hours → 0.75 × 60 = 45 minutes → 2 hours 45 minutes.',
          'To convert hours and minutes to decimal hours: divide the minutes by 60 and add to the hours. For example, 1 hour 20 minutes → 20 ÷ 60 = 0.333 → 1.333 hours.',
        ],
      },
      {
        heading: 'Quick Reference Table',
        paragraphs: ['Common time conversions:'],
        list: [
          '15 min = 0.25 hours',
          '30 min = 0.5 hours',
          '45 min = 0.75 hours',
          '90 min = 1.5 hours',
          '120 min = 2 hours',
          '150 min = 2.5 hours',
          '180 min = 3 hours',
          '240 min = 4 hours',
        ],
      },
      {
        heading: 'Time in Everyday Contexts',
        paragraphs: [
          'Flight times: A 2-hour 45-minute flight is 165 minutes. Connecting flight calculations add minutes directly: a 45-minute layover after a 1h 55m flight followed by a 3h 10m leg totals 355 minutes = 5 hours 55 minutes.',
          'Cooking and baking: A recipe that cooks for 1 hour 15 minutes at 180°C requires 75 minutes of oven time.',
          'Exercise: A 90-minute training session is 1.5 hours. At an average pace of 10 km/h, that covers 15 km.',
          'Time billing: 2 hours 20 minutes billed at $150/hour = 2.333 hours × $150 = $350.',
        ],
      },
    ],
    conclusion: '1 hour = 60 minutes = 3,600 seconds. To convert hours to minutes, multiply by 60. For decimal hours, multiply the decimal part by 60 to get minutes. For time billing and spreadsheets, use decimal hours: 1 hour 45 minutes = 1.75 hours. Use our free time converter for any combination instantly.',
    relatedLinks: [
      { label: 'Hours to Minutes Converter', path: '/time/hour-to-minute' },
      { label: 'Minutes to Hours Converter', path: '/time/minute-to-hour' },
      { label: 'Time Converter', path: '/time' },
    ],
  },
  {
    slug: 'joules-to-calories',
    title: 'How to Convert Joules to Calories (and Back)',
    tag: 'How-To Guide',
    date: '2026-04-20',
    description: 'Convert joules to calories with exact formulas, plus the difference between small calories and food Calories (kcal), with nutrition examples.',
    intro: 'Joules and calories are both units of energy, but they appear in very different contexts. Physics and engineering use joules (the SI unit). Nutrition labels use Calories — which are actually kilocalories. Chemistry uses small calories. Understanding the difference between a "calorie" and a "Calorie" is one of the most common sources of confusion in science and nutrition. This guide clears it up.',
    sections: [
      {
        heading: 'What Is a Joule?',
        paragraphs: [
          'A joule (J) is the SI unit of energy, defined as the energy transferred when a force of one newton acts through a distance of one meter. It is used in physics, engineering, and chemistry for all forms of energy: mechanical, electrical, thermal, and chemical.',
          'Reference points: a 1-watt device uses 1 joule per second; lifting a 100g apple 1 meter requires about 1 joule; a standard AA battery stores roughly 10,000 joules; an adult human needs about 8,000,000 joules (8 MJ) of food energy per day.',
        ],
      },
      {
        heading: 'Small Calorie vs Food Calorie',
        paragraphs: [
          'The calorie (cal) — also called the small calorie or gram calorie — is defined as the energy needed to raise 1 gram of water by 1°C. 1 calorie = 4.184 joules.',
          'The food Calorie (Cal, with a capital C) — also written as kilocalorie (kcal) — is 1,000 small calories. 1 kcal = 4,184 joules.',
          'This is the critical distinction: when a nutrition label says a serving contains "200 Calories," it means 200 kilocalories = 200,000 small calories = 836,800 joules.',
          'In everyday speech, "calories" in food contexts always means kilocalories. A food calorie and a physics calorie are not the same unit.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 calorie (cal) = 4.184 joules (thermochemical calorie).',
          '1 kilocalorie (kcal) = 4,184 joules.',
          'To convert joules to calories: divide by 4.184. For example, 1,000 J ÷ 4.184 = 239 cal.',
          'To convert joules to kilocalories: divide by 4,184. For example, 1,000,000 J ÷ 4,184 = 239 kcal.',
          'To convert calories to joules: multiply by 4.184. For example, 500 cal × 4.184 = 2,092 J.',
          'To convert food Calories (kcal) to joules: multiply by 4,184. For example, 200 kcal × 4,184 = 836,800 J.',
        ],
      },
      {
        heading: 'Nutrition Reference Points',
        paragraphs: ['Common food energy values converted to joules:'],
        list: [
          '1 food Calorie (kcal) = 4,184 J',
          '100 kcal (small snack) = 418,400 J',
          '500 kcal (main meal) = 2,092,000 J (2.09 MJ)',
          '2,000 kcal (daily intake) = 8,368,000 J (8.37 MJ)',
          '1 gram of fat = 9 kcal = 37,656 J',
          '1 gram of carbohydrate = 4 kcal = 16,736 J',
          '1 gram of protein = 4 kcal = 16,736 J',
        ],
      },
      {
        heading: 'Other Calorie Definitions',
        paragraphs: [
          'The 15°C calorie (cal₁₅) = 4.18580 J — energy to raise water from 14.5°C to 15.5°C. Used in some older scientific literature.',
          'The International Table calorie (calIT) = 4.1868 J — used by the International Steam Table Conference.',
          'For everyday nutrition and most chemistry problems, use the thermochemical calorie (1 cal = 4.184 J). The differences between calorie definitions are less than 0.1% and only matter in precision engineering.',
        ],
      },
    ],
    conclusion: '1 calorie (small cal) = 4.184 joules. 1 food Calorie (kcal) = 4,184 joules. The critical distinction: nutrition labels use kilocalories (kcal), not small calories — so a 300-Calorie meal contains 1,255,200 joules. To convert kcal to joules, multiply by 4,184. Use our free energy converter for any combination instantly.',
    relatedLinks: [
      { label: 'Joules to Calories Converter', path: '/energy/joule-to-calorie' },
      { label: 'Calories to Joules Converter', path: '/energy/calorie-to-joule' },
      { label: 'Kilocalories to Joules Converter', path: '/energy/kilocalorie-to-joule' },
      { label: 'Energy Converter', path: '/energy' },
    ],
  },
  {
    slug: 'vasa-warship',
    title: 'The Warship That Sank Because Two Teams Used Different Rulers',
    tag: 'Conversion Fail',
    date: '2026-04-20',
    description: 'The Swedish warship Vasa sank in 1628. Archaeologists later found a contributing cause: two crews built it using rulers of different lengths.',
    intro: 'On August 10, 1628, the Swedish warship Vasa — one of the most powerful warships in the world at the time — sailed out of Stockholm harbor on its maiden voyage. It traveled about 1,300 meters before water began pouring in through the gun ports. Within 20 minutes, the Vasa had sunk in full view of the watching crowd. More than 30 people died. The investigation that followed revealed a contributing cause that would not be confirmed until archaeologists examined the ship 333 years later: two construction teams had been building the ship using rulers of different lengths.',
    sections: [
      {
        heading: 'The Ship',
        paragraphs: [
          'The Vasa was built between 1626 and 1628 on the orders of Swedish King Gustav II Adolf. At 69 meters long, armed with 64 bronze cannons on two gun decks, it was among the most heavily armed warships of its era.',
          'The ship was also top-heavy. Two gun decks stacked above the waterline created a high center of gravity. Stability tests conducted before departure — rocking the ship by having men run back and forth across the deck — were stopped after three runs because the ship began listing dangerously. The admiral in charge chose to proceed anyway.',
        ],
      },
      {
        heading: 'The Sinking',
        paragraphs: [
          'The Vasa left the harbor on a calm August day with sails partially set. A gust of wind heeled the ship to port. Water entered through the open gun ports on the lower deck. The Vasa did not recover.',
          'At the inquiry, officers and builders blamed each other. No one was punished — the king himself had pushed the ship\'s specifications to include two gun decks, and no one had been willing to tell him it was unsafe.',
        ],
      },
      {
        heading: 'The Ruler Discovery',
        paragraphs: [
          'The Vasa was salvaged in 1961 and is now preserved in the Vasa Museum in Stockholm. During archaeological examination, researchers made an unusual find: four rulers used by the construction workers.',
          'Two rulers were calibrated in Swedish feet — each foot divided into 12 Swedish inches, measuring approximately 26.0 cm per foot.',
          'Two rulers were calibrated in Amsterdam feet — each foot divided into 11 Amsterdam inches, measuring approximately 25.6 cm per foot.',
          'The port (left) side of the ship was built using Swedish measurements. The starboard (right) side was built using Amsterdam measurements. The port side came out measurably heavier.',
        ],
      },
      {
        heading: 'How Much Did It Matter?',
        paragraphs: [
          'The unit discrepancy was not the sole cause of the Vasa\'s sinking — the ship was fundamentally too top-heavy for its design. But it contributed to the port-side asymmetry that made an already unstable ship worse.',
          'The Vasa\'s case illustrates a systemic problem: two construction teams, working on the same ship, never verified that they were measuring in the same units. The error was invisible until archaeologists dug it up three centuries later.',
          'The Mars Climate Orbiter (1999) repeated the same failure: two engineering teams using different unit systems, no interface check. The Orbiter cost $327 million. The Vasa cost 40,000 pieces of silver and more than 30 lives.',
        ],
      },
      {
        heading: 'The Vasa Today',
        paragraphs: [
          'The Vasa Museum in Stockholm is one of Scandinavia\'s most visited attractions. The ship is 95% original — preserved by the cold, low-salinity waters of the Baltic Sea. Visitors can see the original timbers, cannons, carved decorations, and the two measuring sticks that helped explain why it sank.',
          'The Vasa is a unique artifact: the only 17th-century warship preserved in its original condition anywhere in the world.',
        ],
      },
    ],
    conclusion: 'The Vasa sank partly because two construction crews used rulers of different lengths — Swedish feet and Amsterdam feet — without ever checking that they were measuring in the same units. The same category of error has since destroyed a $327 million spacecraft (Mars Climate Orbiter) and nearly killed 69 people on a 767 (Gimli Glider). The lesson has not changed in 400 years: always verify units at every interface.',
    relatedLinks: [
      { label: 'Length Converter', path: '/length' },
      { label: 'Meters to Feet Converter', path: '/length/meter-to-foot' },
      { label: 'Unit Converter Home', path: '/' },
    ],
  },
  {
    slug: 'hard-drive-space',
    title: 'Why Your 1 TB Hard Drive Only Shows 931 GB',
    tag: 'Conversion Fail',
    date: '2026-04-20',
    description: 'Your 1 TB hard drive shows 931 GB because manufacturers and operating systems define "terabyte" differently. No storage is missing.',
    intro: 'You buy a "1 TB" external hard drive, plug it in, and your computer reports 931 GB. You have not been cheated. No one removed 69 GB of storage. What happened is a unit conversion disagreement — one that has persisted for decades because manufacturers and operating systems define "terabyte" differently. This is one of the most common and misunderstood unit conversion issues in everyday technology.',
    sections: [
      {
        heading: 'Two Definitions of "Terabyte"',
        paragraphs: [
          'Storage manufacturers define 1 TB as exactly 1,000,000,000,000 bytes — that is, 10¹² bytes, a round number in the decimal (base-10) system.',
          'Operating systems — particularly Windows — define 1 TB as 1,099,511,627,776 bytes — that is, 2⁴⁰ bytes, a round number in the binary (base-2) system that computers actually use.',
          'The difference: 1,099,511,627,776 ÷ 1,000,000,000,000 = 1.0995. So a drive with 1,000,000,000,000 bytes shows as 1,000,000,000,000 ÷ 1,099,511,627,776 = 0.9095 TB = approximately 931 GB on Windows.',
        ],
      },
      {
        heading: 'Why Computers Use Binary',
        paragraphs: [
          'Computer memory and storage are built from transistors that are either on or off — binary digits (bits). Doubling is natural: 1 KB = 1,024 bytes (2¹⁰), 1 MB = 1,048,576 bytes (2²⁰), 1 GB = 1,073,741,824 bytes (2³⁰), 1 TB = 1,099,511,627,776 bytes (2⁴⁰).',
          'Early in computing history, the terms "kilobyte," "megabyte," and so on were informally used to mean the nearest power of 2, even though the SI prefixes kilo, mega, giga strictly mean 10³, 10⁶, 10⁹. Storage manufacturers eventually adopted the strict SI definitions — giving their drives larger apparent capacities — while operating systems kept the binary interpretation.',
        ],
      },
      {
        heading: 'The IEC Solution (Mostly Ignored)',
        paragraphs: [
          'In 1998, the International Electrotechnical Commission (IEC) introduced new prefixes to resolve the ambiguity: kibibyte (KiB = 1,024 bytes), mebibyte (MiB = 1,048,576 bytes), gibibyte (GiB = 1,073,741,824 bytes), tebibyte (TiB = 1,099,511,627,776 bytes).',
          'The IEC definition: "gigabyte" (GB) = exactly 1,000,000,000 bytes; "gibibyte" (GiB) = exactly 1,073,741,824 bytes.',
          'In practice, almost no one uses "gibibyte" in everyday speech. Windows still reports drive sizes in GiB but labels them GB. Linux and some technical documentation use GiB correctly. macOS switched to decimal in 2009.',
        ],
      },
      {
        heading: 'macOS vs Windows',
        paragraphs: [
          'Since macOS 10.6 (Snow Leopard, 2009), Apple\'s operating system reports drive sizes using decimal (SI) definitions. A 1 TB drive shows as 1 TB on a Mac.',
          'Windows still uses binary definitions. A 1 TB drive (1,000,000,000,000 bytes) shows as approximately 931 GB on Windows.',
          'This means the same physical drive will display a different number depending on whether you plug it into a Mac or a Windows PC — not because anything changed, but because the two systems define "gigabyte" differently.',
        ],
      },
      {
        heading: 'How Much Storage Are You Actually Getting?',
        paragraphs: [
          'You are getting exactly what you paid for — 1,000,000,000,000 bytes of storage capacity. The manufacturer\'s label is accurate by the SI definition.',
          'The "missing" space is not missing — it is a display artifact. You can store exactly the same amount of data regardless of whether the drive shows 931 GB or 1 TB.',
        ],
        list: [
          '500 GB drive → Windows shows ~466 GB',
          '1 TB drive → Windows shows ~931 GB',
          '2 TB drive → Windows shows ~1,862 GB',
          '4 TB drive → Windows shows ~3,725 GB',
          '1 TB drive → macOS shows 1 TB',
        ],
      },
    ],
    conclusion: 'Your 1 TB drive shows 931 GB on Windows because manufacturers define 1 TB as 10¹² bytes while Windows defines 1 TB as 2⁴⁰ bytes — a 9.95% difference. No storage is missing. macOS switched to the manufacturer\'s decimal definition in 2009, so the same drive shows 1 TB there. The IEC introduced the "tebibyte" (TiB) to resolve this, but almost nobody uses the term. The confusion persists.',
    relatedLinks: [
      { label: 'GB to TB Converter', path: '/data-storage/gigabyte-to-terabyte' },
      { label: 'MB to GB Converter', path: '/data-storage/megabyte-to-gigabyte' },
      { label: 'Data Storage Converter', path: '/data-storage' },
    ],
  },

  {
    slug: 'stone-to-kg',
    title: 'How to Convert Stone to Kilograms (and Back)',
    tag: 'How-To Guide',
    date: '2026-04-23',
    description: 'Learn how to convert stone to kilograms with the exact formula, a body weight reference table, and tips used by UK doctors and the NHS.',
    intro: 'Stone is a unit of body weight used almost exclusively in the United Kingdom and Ireland. If you have ever visited a UK doctor, stepped on a British bathroom scale, or read a health article from a British source, you have seen weight expressed in stone — often written as "11 st 4 lbs" or simply "12 stone." This guide explains what a stone is, how to convert it to kilograms and back, and why the unit persists in British culture despite the rest of the metric world moving on.',
    sections: [
      {
        heading: 'What Is a Stone?',
        paragraphs: [
          'A stone (st) is a unit of weight equal to exactly 14 pounds or 6.35029 kilograms. It has been used in the British Isles for centuries — originally as a measure for commodities like wool and meat, with the exact value varying by trade. The 14-pound stone was standardized in England in 1835 under the Weights and Measures Act.',
          'Today, stone survives almost entirely as a unit for human body weight in the UK and Ireland. Road signs, food packaging, and scientific data all use metric units in Britain — but ask someone their weight and they will almost always answer in stone and pounds.',
        ],
      },
      {
        heading: 'The Conversion Formula',
        paragraphs: [
          '1 stone = 14 pounds = 6.35029 kilograms.',
          'To convert stone to kilograms: multiply by 6.35029. For example, 11 stone × 6.35029 = 69.85 kg.',
          'To convert kilograms to stone: divide by 6.35029. For example, 75 kg ÷ 6.35029 = 11.81 stone (or 11 stone 11 lbs).',
          'For mixed stone-and-pounds values (e.g., 11 st 6 lbs): first convert the pounds to a decimal fraction of a stone (6 ÷ 14 = 0.429), then add to the stone value (11.429 st), then multiply by 6.35029. Result: 11.429 × 6.35029 = 72.58 kg.',
          'Quick mental shortcut: multiply stone by 6.35 for a fast estimate. The error is less than 0.01%, making it accurate enough for any everyday purpose.',
        ],
      },
      {
        heading: 'Body Weight Reference Table',
        paragraphs: ['Common body weight values in stone and their kilogram equivalents:'],
        list: [
          '8 st = 50.8 kg',
          '9 st = 57.2 kg',
          '10 st = 63.5 kg',
          '11 st = 69.9 kg',
          '12 st = 76.2 kg',
          '13 st = 82.6 kg',
          '14 st = 88.9 kg',
          '15 st = 95.3 kg',
          '16 st = 101.6 kg',
        ],
      },
      {
        heading: 'Stone in the NHS and UK Healthcare',
        paragraphs: [
          'The UK National Health Service (NHS) uses both stone and kilograms in patient-facing materials. BMI calculators on the NHS website accept weight input in stone and pounds as well as kilograms. Most GP surgeries record weight in kilograms for clinical records, but communicate results to patients in stone because that is what patients understand.',
          'NHS healthy weight guidelines define a healthy BMI range of 18.5–24.9. For a person who is 5 ft 9 in (175 cm) tall, the healthy weight range in stone is roughly 8 st 7 lbs to 11 st 7 lbs (54–73 kg).',
          'This dual-unit approach is common in UK health contexts: clinical measurements stay in metric, but patient communication uses stone. Understanding both conversions is useful if you receive a UK health report or use a British fitness app.',
        ],
      },
      {
        heading: 'Why the UK Still Uses Stone',
        paragraphs: [
          'Britain officially adopted the metric system for most purposes in the 1970s, but body weight in stone proved resistant to change. Unlike road distances (still in miles) or temperature (Fahrenheit is rarely used), stone has no metric equivalent that maps neatly onto everyday speech.',
          'A weight of "11 stone 4" is specific, familiar, and tied to body image for millions of people. The kilogram equivalent — 71.7 kg — carries no equivalent cultural resonance. Metrication of body weight has simply not happened because there has been no strong pressure to make it happen.',
          'Irish usage mirrors the UK. In Australia, Canada, and the US, stone is essentially unknown — weight is expressed in kilograms or pounds.',
        ],
      },
      {
        heading: 'Converting Stone to Pounds',
        paragraphs: [
          'Because 1 stone = 14 pounds, converting stone to pounds is straightforward: multiply by 14.',
          'For example, 12 stone = 12 × 14 = 168 pounds. To go the other way, divide pounds by 14 and express the remainder as pounds: 175 lbs ÷ 14 = 12 remainder 7 → 12 stone 7 lbs.',
          'To convert stone to grams: multiply by 6,350.29. To convert grams to stone: divide by 6,350.29.',
        ],
      },
    ],
    conclusion: '1 stone = 6.35029 kg = 14 pounds. To convert stone to kilograms, multiply by 6.35029. To convert kilograms to stone, divide by 6.35029. For mixed stone-and-pound weights, convert pounds to a decimal fraction of a stone first (pounds ÷ 14), then multiply the total by 6.35029. Use our free weight converter for instant results in any direction.',
    relatedLinks: [
      { label: 'Stone to Kilogram Converter', path: '/weight/stone-to-kilogram' },
      { label: 'Kilogram to Stone Converter', path: '/weight/kilogram-to-stone' },
      { label: 'Kilograms to Pounds Converter', path: '/weight/kilogram-to-pound' },
      { label: 'Weight Converter', path: '/weight' },
    ],
  },
]

/** Return a post by slug, or undefined if not found. */
export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug)
}
