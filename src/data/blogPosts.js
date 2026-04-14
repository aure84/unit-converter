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
]

/** Return a post by slug, or undefined if not found. */
export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug)
}
