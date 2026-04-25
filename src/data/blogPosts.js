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
      {
        heading: 'Why Different Countries Use Different Distance Systems',
        paragraphs: [
          'The United States, Myanmar, and Liberia are the only three countries that have not officially adopted the metric system as their primary measurement standard. The US came close to metrication in the 1970s when Congress passed the Metric Conversion Act of 1975, but the transition was made voluntary rather than mandatory, and public resistance meant it never took hold for everyday use.',
          'The UK is in an interesting in-between position: it officially uses the metric system for most purposes, but road distances and speed limits remain in miles, and many people still describe distances informally in miles. This means British drivers need to convert fluently in both directions.',
          'For international travelers, the km-to-mile conversion is one of the most practical skills to have. A speed limit sign showing 80 km/h in Canada or Europe is about 50 mph — and a 100 km/h motorway is roughly 62 mph. Knowing these anchor points makes driving abroad significantly easier.',
        ],
      },
      {
        heading: 'Kilometers and Miles in Sports and Fitness',
        paragraphs: [
          'Running races highlight the km vs mile divide clearly. Road races outside the US are measured in kilometers: 5K, 10K, half marathon (21.1 km), and marathon (42.195 km). In the US, races are often described in miles — a "10-mile race" or a "half marathon" rather than its kilometer equivalent.',
          'Cycling distances are almost universally in kilometers internationally, even in the US — the Tour de France stages are in km, and cycling computers default to km/h. The famous "century ride" is 100 miles (161 km), while the metric century is 100 km (62 miles).',
          'For fitness tracking, knowing both systems helps when following training plans from different countries. If a European plan says "run 8 km easy," that is about 5 miles. A US plan saying "20 miles long run" is about 32 km — knowing this prevents you from either overtraining or undertaking the session.',
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
      {
        heading: 'Kilograms and Pounds in Fitness and Health',
        paragraphs: [
          'In fitness, the choice of kg or lbs depends on your equipment and training community. Most commercial gym equipment in the US is labeled in pounds, while equipment sold internationally uses kilograms. A 45 lb plate (the standard large plate in US gyms) is 20.4 kg — close enough to the 20 kg bumper plates used internationally that the difference matters at competitive levels.',
          'Body weight tracking is another common use case. Many fitness apps let you choose your preferred unit, but doctors and medical charts outside the US use kilograms. A healthy adult BMI range of 18.5–24.9 kg/m² requires knowing your weight in kilograms — if you only know your weight in pounds, divide by 2.20462 first.',
          'In boxing and combat sports, weight classes are defined in both systems. The lightweight limit is 135 lbs (61.2 kg). The heavyweight limit in boxing starts at 200 lbs (90.7 kg). Athletes who compete internationally need to convert precisely, since being even slightly over the limit means disqualification.',
        ],
      },
      {
        heading: 'Common Mistakes When Converting Kg to Lbs',
        paragraphs: [
          'The most common error is forgetting that the conversion factor is 2.20462, not 2. Multiplying by 2 gives a result about 9% too low. For body weight, this means a person who weighs 80 kg would appear to weigh 160 lbs using the rough estimate, versus the correct 176.4 lbs — a significant difference.',
          'Confusing kilograms (mass) with kilogram-force (weight) is another source of errors in technical contexts. For everyday conversions — body weight, food, luggage — this distinction does not matter. But in engineering and physics, kilograms measure mass while pounds-force measure weight, and conflating them can cause serious calculation errors.',
          'When shipping packages internationally, always confirm whether the weight limit is in kg or lbs. A 23 kg airline baggage allowance is about 50.7 lbs, while a 50 lb limit is only 22.7 kg. Being just 0.3 kg over can mean excess baggage fees, so precision matters.',
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
      {
        heading: 'Everyday Applications of Temperature Conversion',
        paragraphs: [
          'Cooking is one of the most common reasons to convert between Celsius and Fahrenheit. American recipes typically give oven temperatures in Fahrenheit — 350°F is a standard moderate baking temperature — while European recipes use Celsius (175°C is the equivalent). A quick way to check: if the oven temperature in a recipe looks like a three-digit number over 200, it is probably in Fahrenheit.',
          'Weather forecasts are another daily use. When traveling between the US and most other countries, you will encounter Celsius temperatures on weather apps and outdoor signs. Key anchor points: 0°C is freezing (32°F), 10°C is cold (50°F), 20°C is comfortable (68°F), 30°C is hot (86°F), and 40°C is very hot (104°F).',
          'Medical contexts almost universally use Celsius outside the US. A fever is defined as above 38°C (100.4°F). Normal body temperature is 36.6–37.2°C (97.9–99°F). If you travel abroad and a doctor quotes your temperature in Celsius, knowing these reference points prevents unnecessary alarm or complacency.',
        ],
      },
      {
        heading: 'Common Mistakes in Temperature Conversion',
        paragraphs: [
          'The most frequent error is forgetting to handle the offset. Temperature conversion is not just multiplication — you must add or subtract 32 at the right step. A common mistake: multiplying Celsius by 1.8 before adding 32 is actually correct, but the reverse — subtracting 32 before dividing by 1.8 to get Celsius from Fahrenheit — is where many people make order-of-operations errors.',
          'Another mistake is confusing temperature differences with absolute temperatures. If your recipe says "increase oven temperature by 20°C," that means increase by 36°F (20 × 1.8). It does not mean convert 20°C to 68°F — the offset of 32 does not apply to differences, only to absolute temperatures.',
          'When programming or working with scientific data, always check whether temperatures are stored as absolute values or differences. Converting a temperature difference requires only multiplication by 1.8 (or 5/9), never adding or subtracting 32.',
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
      {
        heading: 'Cloud Storage and Download Speeds Explained',
        paragraphs: [
          'Cloud storage plans are sold in gigabytes and terabytes: Google One offers 100 GB, 200 GB, and 2 TB tiers. iCloud storage starts at 50 GB. When comparing plans, remember that 1 TB = 1,024 GB — so a 2 TB plan has twice the capacity of a 1 TB plan, roughly 2,048 GB.',
          'Download speeds are measured in bits per second (Mbps or Gbps), not bytes. A "100 Mbps" internet connection transfers 100 megabits per second. To calculate how long it takes to download a 1 GB file: 1 GB = 8,000 megabits, divided by 100 Mbps = 80 seconds. Always divide the file size in bits by the connection speed in bits per second.',
          'Streaming services have specific data requirements. Netflix recommends 3 Mbps for standard definition, 5 Mbps for HD, and 15–25 Mbps for 4K. If you watch 2 hours of 4K Netflix per day, that is roughly 3–7 GB of data depending on compression — relevant for data-capped internet plans.',
        ],
      },
      {
        heading: 'Beyond Terabytes: Petabytes, Exabytes, and More',
        paragraphs: [
          'Beyond the terabyte, storage units continue in 1,024× steps: 1 petabyte (PB) = 1,024 TB; 1 exabyte (EB) = 1,024 PB; 1 zettabyte (ZB) = 1,024 EB. These are no longer theoretical — the global internet generates roughly 2.5 quintillion bytes (2.5 exabytes) of new data every single day.',
          'Major tech companies operate at petabyte scale. Google processes approximately 20 petabytes of data per day. Facebook stores over 100 petabytes of photos and videos. The Human Genome Project generated about 200 GB per individual genome — sequencing every person on Earth would require roughly 1.5 exabytes.',
          'For everyday consumers, terabytes are the practical limit. A 4 TB external drive costs under $100 and can hold roughly 800,000 photos, 1,000 HD movies, or 1 million audio tracks. The jump from gigabytes to terabytes in consumer storage happened in the early 2010s — petabyte consumer storage is still decades away.',
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
      {
        heading: 'Speed in Sports: Records and Reference Points',
        paragraphs: [
          'Human running speed puts everyday units into perspective. Usain Bolt\'s 100 m world record of 9.58 seconds corresponds to a top speed of about 44.72 km/h (27.8 mph or 12.4 m/s). Average marathon pace for elite runners is around 20 km/h (12.4 mph) — sustained for just over two hours.',
          'Ball sports involve much higher speeds. A professional tennis serve reaches 220–240 km/h (137–149 mph). A football shot can reach 120 km/h (75 mph). Baseball pitchers regularly throw at 145–155 km/h (90–96 mph), and cricket bowlers exceed 160 km/h (99 mph).',
          'In motorsport, Formula 1 cars reach top speeds of around 360 km/h (224 mph) at circuits like Monza. The land speed record stands at 1,228 km/h (763 mph), set in 1997 by the ThrustSSC jet-powered car — just beyond the speed of sound. Knowing how to convert between mph and km/h lets you compare records across eras and reporting conventions.',
        ],
      },
      {
        heading: 'Speed Limits Around the World',
        paragraphs: [
          'Highway speed limits vary significantly by country and road design. Germany\'s Autobahn has an advisory speed of 130 km/h (81 mph) on most sections but no general limit on roughly 30% of the network. France, Spain, and Italy use 130 km/h on motorways. The UK sets its motorway limit at 70 mph (113 km/h).',
          'In the US, interstate highway limits range from 65 mph (105 km/h) in some states to 85 mph (137 km/h) on a single stretch of Texas highway — the highest posted limit in the country. Urban limits are typically 25–35 mph (40–56 km/h), with school zones at 15–20 mph (24–32 km/h).',
          'Aviation imposes speed limits near airports. Aircraft in US-controlled airspace must fly below 250 knots (463 km/h) below 10,000 feet. This limit exists to reduce closing speeds between aircraft and give air traffic controllers more time to manage traffic safely around busy terminals.',
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
      {
        heading: 'Fuel Economy: Gallons, Liters, and International Comparisons',
        paragraphs: [
          'When comparing car fuel efficiency between the US and Europe, you need to convert both distance and volume units. A European car rated at 6 L/100km has a fuel economy of 235.215 ÷ 6 = 39.2 US MPG. A US car rated at 30 MPG uses 235.215 ÷ 30 = 7.84 L/100km. Converting to a common unit lets you compare models across markets.',
          'Fuel prices also require conversion for international comparison. If European petrol costs €1.60 per liter, that is €1.60 × 3.785 = €6.05 per US gallon equivalent — making European fuel approximately 70% more expensive than US prices at typical rates. This partly explains why European cars tend to have smaller engines and higher fuel efficiency than American ones.',
          'Large-scale fuel purchases involve thousands of gallons or tens of thousands of liters. A commercial aircraft like a Boeing 737 holds about 26,000 liters (6,870 US gallons) of fuel. An oil tanker carries millions of gallons. In these contexts, a small unit conversion error compounds into enormous financial and logistical consequences.',
        ],
      },
      {
        heading: 'The History of the Gallon',
        paragraphs: [
          'The word "gallon" derives from the Old North French "galon," related to a liquid measure used in medieval England. Before standardization, many different gallons existed: the wine gallon, the ale gallon, and the Winchester gallon each held different volumes, causing persistent confusion in trade.',
          'The US gallon was standardized in 1707 based on the Queen Anne wine gallon of 231 cubic inches (3.785 L). The UK imperial gallon was standardized in 1824 at 277.42 cubic inches (4.546 L) — about 20% larger. Canada used the imperial gallon until 1979, when it switched to liters.',
          'Today, the gallon is used primarily in the US for fuel, beverages, and paint. A few Caribbean nations and some agricultural contexts in the UK retain gallon measurements. For international commerce, liters are the universal standard — understanding the US/UK gallon difference is important when reading older documents or purchasing goods from either country.',
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
      {
        heading: 'Famous Heights and Distances in Meters and Feet',
        paragraphs: [
          'Comparing famous structures in both units helps build intuitive feel for the conversion. The Eiffel Tower stands 330 m (1,083 ft) to its tip. The Empire State Building reaches 443 m (1,454 ft) including its antenna. The Burj Khalifa, the world\'s tallest building, stands 828 m (2,717 ft). Mount Everest\'s summit is at 8,849 m (29,032 ft) above sea level.',
          'In aviation, altitude is measured in feet worldwide, even in countries that otherwise use the metric system. The international standard for cruising altitude separation is 1,000 ft (305 m) below 29,000 ft and 2,000 ft (610 m) above it. A typical commercial flight cruises between 31,000 and 38,000 ft (9,450–11,580 m).',
          'Ocean depths are expressed in meters in science, but fathoms (1 fathom = 6 ft = 1.829 m) in traditional maritime contexts. The deepest point on Earth — Challenger Deep in the Mariana Trench — reaches 10,935 m (35,876 ft or about 5,981 fathoms).',
        ],
      },
      {
        heading: 'Why the United States Still Uses Feet',
        paragraphs: [
          'The US is the only major developed country that has not switched to the metric system for everyday use. Metrication was attempted in the 1970s when Congress passed the Metric Conversion Act of 1975, but the transition was made voluntary rather than mandatory, and public resistance meant it never took hold.',
          'The consequences are practical: American students must learn both systems, and industries that operate internationally — science, medicine, manufacturing, aviation — use metric while everyday life uses imperial. Most Americans develop intuitive feel only for feet and inches, not meters.',
          'For international travelers and anyone working across borders, knowing that 1 meter ≈ 3.28 feet and 1 foot ≈ 0.305 meters is enough to navigate height restrictions, trail markers, room dimensions, and athletic distances without needing a calculator every time.',
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
    tag: 'Conversion Fail',
    date: '2026-04-20',
    image: {
      url: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1200&auto=format&fit=crop&q=80',
      alt: 'Mars planet viewed from space',
    },
    description: 'In 1999, NASA lost a $327 million spacecraft because one team used metric units and another used imperial. The story of the Mars Climate Orbiter is the most expensive unit conversion error in history.',
    intro: 'On September 23, 1999, NASA\'s Mars Climate Orbiter fired its main engine to enter orbit around Mars. It never came back. The spacecraft — nine months into its journey, 416 million miles from Earth — flew too close to the Martian atmosphere and was destroyed by aerodynamic stress and heat. The cause was not a software bug in the traditional sense, and not a hardware failure. It was a unit mismatch: one engineering team at NASA\'s Jet Propulsion Laboratory was sending thruster data in metric units (newton-seconds), while another team\'s software at Lockheed Martin expected imperial units (pound-force seconds). Nobody caught it for nine months.',
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
          'The mismatch was not caught because the two software systems — one from NASA\'s JPL, one from Lockheed Martin — were developed independently and tested separately against their own specifications. Each worked correctly in isolation. The error only manifested when they communicated with each other across 416 million miles of space.',
          'Reviewers noticed the trajectory was slightly off weeks before arrival, but the deviations were within a range that could have been caused by other factors. The root cause was not identified in time.',
          'NASA\'s internal review found the failure resulted from inadequate systems-engineering verification and validation — a process failure, not just a math error. No single person or team was solely responsible; the system as a whole had no mechanism to catch a cross-team unit discrepancy.',
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
      {
        heading: 'Nine Months of Silence',
        paragraphs: [
          'What makes the Mars Climate Orbiter story particularly striking is the timeline. The unit mismatch was present from the moment the spacecraft launched on December 11, 1998. For nine months, the navigation team received trajectory data that was subtly wrong — and corrected for it, over and over, without ever identifying the root cause.',
          'The small-force thruster data affected the spacecraft\'s attitude control. Each firing was 4.448 times weaker than the software believed. To maintain the correct course, the ground team kept issuing correction commands. The spacecraft kept drifting. Engineers flagged the anomaly in a report dated July 1999 — two months before arrival — but the report did not reach the right people in time.',
          'This is the real lesson of the Orbiter: the error was not invisible. It produced symptoms. Those symptoms were observed and documented. The failure was not simply a math mistake — it was an organizational failure to follow an anomaly through to its root cause before it became catastrophic.',
        ],
      },
      {
        heading: 'What Changed After the Loss',
        paragraphs: [
          'NASA\'s post-incident review produced a set of concrete changes to spacecraft development practice. All interface control documents — the specifications that define how software components communicate — were required to explicitly state the units for every data field. "Assumed" units were no longer acceptable.',
          'The review also found that the "faster, better, cheaper" philosophy of the 1990s — which aimed to reduce mission costs and schedules — had led to understaffed navigation teams and inadequate cross-team verification processes. The Mars Climate Orbiter was one of the last missions built under that philosophy. Subsequent Mars missions, including Mars Reconnaissance Orbiter and the Curiosity rover, had significantly expanded systems-engineering oversight.',
          'The $327.6 million loss is often cited in software engineering courses not because the conversion is complicated — it is not — but because it demonstrates how a simple, well-known error can persist through an organization if the processes for catching it are absent. The fix cost nothing: a single line in an interface specification stating "units: newton-seconds" would have been enough.',
        ],
      },
      {
        heading: 'The Broader Pattern: When Two Systems Meet',
        paragraphs: [
          'The Mars Climate Orbiter is the most famous unit conversion failure in history, but it belongs to a recognizable pattern. The Gimli Glider (1983) ran out of fuel because ground crew calculated fuel weight in pounds instead of kilograms — the Boeing 767 required kilograms. The Vasa warship (1628) was built asymmetrically because two construction crews used rulers of different lengths, one Swedish foot and one Amsterdam foot, without ever checking. Columbus underestimated the size of the Earth because he confused two definitions of a "mile."',
          'In each case, the error happened at an interface — the point where two systems, teams, or traditions handed information to each other. Within each system, everything was consistent. The failure was in the handoff.',
          'Unit conversions are among the most dangerous errors in engineering precisely because they are invisible inside any single system. A number looks like a number. 4.448 looks plausible. Nothing breaks immediately. The error accumulates quietly until the moment of no return — the spacecraft reaches Mars, the plane runs out of fuel at 41,000 feet, the ship leaves the harbor.',
          'The preventive measure is always the same: make units explicit at every interface. Not assumed, not documented somewhere in a file nobody reads, but verified — by a test, a review, a specification that both teams sign off on. The Mars Climate Orbiter cost $327 million to teach a lesson that can be applied for free.',
        ],
      },
    ],
    conclusion: 'A single unconverted unit — pound-force seconds sent where newton-seconds were expected — destroyed a $327 million spacecraft. The lesson is not just about unit conversion. It is about never assuming two systems speak the same language, even when built by the same organization. The fix would have cost nothing: an explicit unit label in a software interface specification. Instead, NASA lost the spacecraft, nine months of flight time, and $327.6 million. The Mars Climate Orbiter mission ended at 57 km above Mars on September 23, 1999 — the exact altitude where the atmosphere was thick enough to destroy a spacecraft that should have been in safe orbit 100 km higher. Always verify units at every interface.',
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
    image: {
      url: 'https://images.unsplash.com/photo-1525396524423-64f7b55f5b33?w=1200&auto=format&fit=crop&q=80',
      alt: 'Commercial airplane in flight',
    },
    description: 'In 1983, an Air Canada Boeing 767 ran out of fuel at 41,000 feet because ground crew confused kilograms with pounds. The plane glided 100 miles to an emergency landing — with 69 people on board.',
    intro: 'On July 23, 1983, Air Canada Flight 143 — a brand-new Boeing 767 — ran out of fuel at 41,000 feet over northern Canada. All engines went silent. For the next 17 minutes, the plane glided without power over 100 miles of Canadian wilderness, carrying 61 passengers and 8 crew. The cause was a unit conversion error: ground crew calculated the fuel load in pounds when they should have used kilograms. Because a pound is approximately 2.2 times lighter than a kilogram, the plane departed with roughly 22,300 pounds of fuel instead of the required 22,300 kilograms — less than half of what it needed to reach Edmonton. The aircraft became the world\'s largest glider at 41,000 feet, and landed only because of one pilot\'s gliding experience and an abandoned airstrip in rural Manitoba.',
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
          'The plane needed 22,300 kg of fuel for the complete flight from Montreal to Edmonton, a journey of roughly 3,500 km.',
          'The ground crew measured the fuel already on board in liters, then multiplied by 1.77 (lbs/liter) instead of 0.803 (kg/liter) to get the weight. This gave them a number in pounds, not kilograms.',
          'Because 1 kg = 2.2 lbs, their fuel reading appeared more than twice as heavy as the actual fuel on board. The plane departed with 22,300 pounds of fuel — just over 10,000 kg — instead of the required 22,300 kg. It had 45% of the fuel it needed.',
        ],
      },
      {
        heading: 'The Glide',
        paragraphs: [
          'Both engines flamed out over Red Lake, Ontario, at 41,000 feet and approximately halfway through the flight. The cockpit went dark — many instruments, including the altitude indicator and most communications equipment, are electrically powered by the engines. The ram air turbine (RAT), a small propeller that drops from the fuselage in emergencies, provided minimal power for basic flight controls. The pilots had never trained for a complete dual-engine failure in a jet aircraft, because under normal circumstances it cannot happen.',
          'Captain Robert Pearson had gliding experience in small aircraft — an unusual background for a commercial jet pilot. He calculated a glide ratio: the 767, with gear up and engines windmilling, could travel roughly 12 miles for every mile of altitude lost. From 41,000 feet (about 12.5 km), that gave them roughly 150 km (about 93 miles) of range to find a runway.',
          'The crew diverted to Gimli, Manitoba — a former Royal Canadian Air Force base that had been partially converted into a motorsport racing venue. The runway was shorter than ideal and had cars and people on it from a racing event that day. Pearson executed a forward slip maneuver to lose altitude rapidly and landed without engine power, nose gear, or full brakes. There were minor injuries but no fatalities.',
        ],
      },
      {
        heading: 'Why Multiple Checks Failed',
        paragraphs: [
          'Three separate people — the fueler, the first officer, and the captain — all checked the fuel calculation and missed the error. Each was working from the same incorrect assumption: that the number they were looking at was in the correct units.',
          'The FQIS malfunction had created a situation where manual calculation was required, but no written procedure existed for the metric conversion. The 767 was new; Canada had only recently adopted the metric system nationally, and many ground crew were still accustomed to working with the older imperial-unit aircraft that dominated the fleet. The new unit system had not been sufficiently embedded in training or documentation.',
          'The accident investigation found systemic failures: inadequate training on the new metric system, no clear procedure for manual fuel calculations, and a broken instrument that should have grounded the aircraft.',
        ],
      },
      {
        heading: 'Captain Pearson\'s Glide',
        paragraphs: [
          'The 767\'s glide ratio — the distance it travels forward for every unit of altitude lost — is approximately 17:1 in clean configuration. From 41,000 feet (12,500 meters), that gave the crew roughly 213 km (132 miles) of range. Pearson and First Officer Maurice Quintal quickly identified Gimli as the closest suitable runway.',
          'What they did not know was that Gimli\'s runway 32L, though still paved, had been decommissioned as an active military airfield. Half the runway had been repurposed as a dragstrip for a car racing event. Spectators, cars, and competitors were on the runway when the 767 appeared overhead with no engine noise.',
          'Pearson used a sideslip — a technique common in gliders but almost never used in commercial jets — to bleed off excess altitude on final approach. The nose gear collapsed on touchdown. The plane skidded to a stop with its nose on the ground, stopping just short of the spectators. The forward cabin floor buckled, but the aircraft did not break apart. Of the 69 people on board, only a handful suffered minor injuries, mostly from the emergency slide evacuation.',
        ],
      },
      {
        heading: 'The Aftermath and Legacy',
        paragraphs: [
          'The repaired aircraft — nicknamed "the Gimli Glider" — returned to service and flew for Air Canada until 2008, when it was retired and eventually scrapped in 2013. Captain Pearson and First Officer Quintal received commendations for their airmanship. They also received reprimands for procedural violations that contributed to the departure with insufficient fuel.',
          'Transport Canada and Air Canada overhauled fuel management procedures for metric aircraft. The FQIS on the accident aircraft had been malfunctioning for two days before the flight; the investigation found that the plane should never have been dispatched with a broken fuel gauge. A working fuel quantity system would have made the manual calculation unnecessary.',
          'The Gimli Glider incident is studied in aviation training programs worldwide. It appears in human factors courses as an example of how a chain of individually small failures — a broken instrument, unfamiliar units, inadequate procedures, time pressure — can combine into a crisis that only luck and exceptional skill prevent from becoming a disaster.',
        ],
      },
    ],
    conclusion: 'The Gimli Glider is a reminder that unit errors do not announce themselves. Three experienced aviation professionals checked the fuel calculation and found nothing wrong — because each was verifying internal consistency, not unit consistency. The number 22,300 appeared in the correct column. Nobody asked whether it was kilograms or pounds. The plane landed safely only because of extraordinary piloting skill, a decommissioned runway that happened to exist at the right range, and a combination of luck that should not be relied upon as a safety net. The fix was procedural and inexpensive: a written checklist specifying that fuel weight must be entered in kilograms, and a policy requiring the FQIS to be operational before dispatch. Neither required new technology. Both existed in aviation practice for other aircraft. They simply had not been implemented for the 767 in time.',
    relatedLinks: [
      { label: 'Weight Converter (kg to lbs)', path: '/weight/kilogram-to-pound' },
      { label: 'Volume Converter', path: '/volume' },
      { label: 'Fuel Economy Converter', path: '/fuel-economy' },
    ],
  },

  {
    slug: 'columbus-unit-error',
    image: {
      url: 'https://images.unsplash.com/photo-1518065896235-a4c93e088e7a?w=1200&auto=format&fit=crop&q=80',
      alt: 'Antique compass on old map',
    },
    title: 'How a Unit Conversion Error Sent Columbus to the Wrong Continent',
    tag: 'Conversion Fail',
    date: '2026-04-20',
    description: 'Christopher Columbus reached America partly because he confused two different definitions of a "mile." His unit error made the Earth appear 25% smaller than it actually is.',
    intro: 'Christopher Columbus did not prove the Earth was round — educated Europeans already knew that. Eratosthenes had calculated the Earth\'s circumference with reasonable accuracy in the 3rd century BCE. What Columbus got spectacularly wrong was the size of the Earth, and specifically the distance from Europe to Asia going west. His error was not a matter of courage or vision. It was a unit conversion mistake: he confused two different definitions of a "mile" and concluded the Earth was roughly 25% smaller than it actually is. The Portuguese royal commission that reviewed his proposal in 1484 rejected it — not because they thought the Earth was flat, but because their unit math was correct and they could see the voyage was impossible. Columbus found a backer anyway, sailed west expecting Asia, and found a continent nobody in Europe knew existed. The wrong number changed the world.',
    sections: [
      {
        heading: 'The Two "Miles" That Changed History',
        paragraphs: [
          'In the 15th century, the word "mile" did not have a single fixed meaning. Different cultures used different standards. Two were relevant to Columbus\'s calculation.',
          'The Roman mile (mille passuum) was approximately 1,480 meters — somewhat shorter than today\'s international mile of 1,609 meters, which was standardized much later.',
          'The Arabic mile, used by the Islamic geographer al-Farghani (also known as Alfraganus) in his 9th-century astronomical treatise, was approximately 1,973 meters — about 33% longer than the Roman mile. Al-Farghani\'s work was translated into Latin and widely read in medieval Europe. Columbus owned a copy and made extensive margin notes in it.',
        ],
      },
      {
        heading: 'The Calculation',
        paragraphs: [
          'Al-Farghani had calculated — correctly — that one degree of latitude at the equator equals 56⅔ Arabic miles. This was a well-regarded figure in medieval geography. Columbus read this in a Latin translation and accepted the 56⅔ number, but applied the shorter Roman mile to it instead of the Arabic mile al-Farghani had used.',
          'Using the Roman mile of 1,480 m: 56.67 × 1,480 m = 83,870 m per degree, giving a total Earth circumference of about 30,200 km.',
          'The actual circumference of the Earth at the equator is approximately 40,075 km. Columbus\'s figure of 30,200 km was about 25% too small.',
          'This made the westward distance from the Canary Islands to Japan appear to be roughly 3,700 km. The actual distance — across the Pacific — is about 19,600 km. Columbus was off by a factor of more than five.',
        ],
      },
      {
        heading: 'Why Experts Rejected Him',
        paragraphs: [
          'The Portuguese royal commission that evaluated Columbus\'s proposal in 1484 rejected it — not because they thought the Earth was flat, but because their calculations were correct. Their geographers used the Arabic mile properly and concluded the westward route to Asia was impossibly long for the ships and supplies of the time. They were right.',
          'Spain\'s Queen Isabella ultimately funded the voyage after a second review in 1492, in part because Columbus was persuasive, the potential reward was enormous, and Portugal had just found a viable sea route to Asia around Africa. Spain needed an alternative. But Spain\'s own experts were also skeptical about Columbus\'s numbers.',
          'Columbus went to his grave in 1506 believing he had reached islands off the coast of Asia. He never accepted that he had found a previously unknown continent. In his final years he lobbied repeatedly for the titles and share of revenues promised in the original agreement with Spain — both of which the Spanish crown contested and largely denied.',
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
      {
        heading: 'The Voyage and the Mutiny That Almost Was',
        paragraphs: [
          'Columbus left the Canary Islands on September 6, 1492, heading due west with three ships and about 90 men. His crew expected to reach Japan (which he called Cipangu, following Marco Polo\'s name) within roughly 30 days, based on his calculated distance of about 3,700 km. By early October — five weeks into the voyage with no land in sight — the crew was threatening to turn back.',
          'Columbus had, in fact, already passed the point where Japan should have been by his own calculations. He kept this from the crew and continued west. On October 7, a flock of birds flying southwest prompted a course correction. On October 12, land was sighted — what is now the Bahamas, at a distance of roughly 6,000 km from the Canaries.',
          'Columbus was still about 13,600 km short of Japan. He had found the Bahamas at roughly the distance his unit-error calculation predicted for the edge of Asia, and he interpreted this as confirmation that his numbers were correct. He spent three more voyages exploring the Caribbean and the coast of South America, looking for the gold-roofed palaces Marco Polo had described in Cathay. They were never found because they were on the other side of an ocean and a continent Columbus did not know existed.',
        ],
      },
      {
        heading: 'Why Unit Consistency Matters Even in History',
        paragraphs: [
          'The Columbus unit error is unusual among famous conversion failures because the outcome was accidental discovery rather than disaster. But the underlying mechanism is identical to the Mars Climate Orbiter or the Gimli Glider: a measurement made in one unit system was interpreted as if it were in another, producing a number that seemed plausible but was wrong.',
          'Al-Farghani\'s original Arabic text was accurate. His measurement of 56⅔ miles per degree was correct when applied to the Arabic mile of approximately 1,973 meters. Columbus, reading a translation, applied the number to the shorter Roman mile of roughly 1,480 meters — a 25% reduction in the Earth\'s apparent size that made an impossible voyage seem merely difficult.',
          'The parallel with modern engineering failures is exact. Lockheed Martin\'s navigation software output for the Mars Climate Orbiter was correct within its own unit system. The Canadian fuel density factor of 0.803 kg/liter was correct for metric calculations. In each case, the individual inputs were right. The error was in the interface — the point where one set of numbers, defined in one unit system, was fed into a calculation expecting another.',
        ],
      },
    ],
    conclusion: 'Columbus confused the Arabic mile (1,973 m) with the Roman mile (1,480 m) — a 33% difference that made the Earth appear 25% smaller than it is. The error led him to underestimate the westward distance to Asia by a factor of five. Every expert who reviewed his proposal and used the correct units concluded the voyage was impossible. They were right about the math. They simply did not know a continent existed in the way. Columbus reached the Bahamas on October 12, 1492, then spent the rest of his life insisting it was Asia. The continent was eventually named after Amerigo Vespucci, who recognized it for what it was. Unit errors do not always destroy spacecraft or strand planes — sometimes, under very specific conditions involving unknown landmasses, they accidentally reshape history.',
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
    image: {
      url: 'https://images.unsplash.com/photo-1547013571-585f53927cd4?w=1200&auto=format&fit=crop&q=80',
      alt: 'Old wooden sailing ship at sea',
    },
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
          'The Vasa left Stockholm harbor on August 10, 1628, on a calm summer afternoon with sails partially set and gun ports open for a ceremonial salute. A gust of wind heeled the ship to port. Water poured through the open lower gun ports, which sat only about 1.2 meters above the waterline when the ship was fully loaded. The Vasa did not recover.',
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
          'The unit discrepancy was not the sole cause of the Vasa\'s sinking — the ship was fundamentally too top-heavy for its design, a consequence of the king demanding two gun decks on a hull that had been designed for one. But the asymmetry between the port and starboard sides, caused by the different ruler lengths, added measurable additional weight to the heavier port side and worsened an already critical stability deficit.',
          'The Vasa\'s case illustrates a systemic problem: two construction teams, working on the same ship, never verified that they were measuring in the same units. Neither team was using a wrong ruler — both rulers were accurate representations of their respective local standards. The error was in the interface between the two teams, and it was invisible until archaeologists measured the hull three centuries later.',
          'The Mars Climate Orbiter (1999) repeated the same failure mode: two engineering teams using different unit systems with no interface specification to catch the mismatch. The Orbiter cost $327 million. The Vasa cost 40,000 pieces of silver and more than 30 lives.',
        ],
      },
      {
        heading: 'Why Nobody Spoke Up',
        paragraphs: [
          'The Vasa\'s stability problem was not a secret. The pre-departure test — 30 men running back and forth across the deck in three passes — caused the ship to heel so severely that the test was stopped to prevent it from capsizing at the dock. The admiral in charge of the Swedish Navy, Flemming, witnessed this and made the decision to sail anyway. The king had ordered the ship to sea, and no one in the chain of command was willing to deliver the news that his flagship was unsafe.',
          'This dynamic — organizational pressure overriding engineering judgment — is a recurring feature in major engineering disasters. The Space Shuttle Challenger launched in 1986 despite engineers at Morton Thiokol explicitly warning the night before that O-ring seals were not rated for the cold temperatures forecast at launch. The Vasa\'s officers faced a similar choice between speaking and sailing, and chose to sail.',
          'The master shipbuilder, Henrik Hybertsson, had died before the ship was completed. His successor, Hein Jacobsson, took over a project already underway with fixed dimensions. When the ship\'s dimensions appeared unstable, there was no one with the original authority to change them — and the king was expecting delivery.',
        ],
      },
      {
        heading: 'The Salvage',
        paragraphs: [
          'The Vasa lay at the bottom of Stockholm harbor for 333 years. In 1956, amateur archaeologist Anders Franzén located the wreck using a coring device. A salvage operation was planned and executed over five years, using a network of tunnels drilled under the hull so that pontoons could be used to lift the ship gradually off the seabed.',
          'On April 24, 1961, the Vasa broke the surface for the first time since 1628. The cold, low-salinity waters of the Baltic had preserved the wood almost perfectly — the hull was 95% intact. Over the following years, more than 14,000 objects were recovered from the wreck, including the four rulers that revealed the unit mismatch.',
          'The ship was treated with polyethylene glycol for 17 years to replace the water in the wood cells and prevent the timbers from drying out and cracking. It was moved to the purpose-built Vasa Museum in 1990, where it has been on display ever since in a climate-controlled environment at 18°C and 55% humidity.',
        ],
      },
      {
        heading: 'The Vasa Today',
        paragraphs: [
          'The Vasa Museum in Stockholm is one of Scandinavia\'s most visited attractions, drawing over a million visitors per year. The ship is 95% original — preserved by the cold, low-salinity waters of the Baltic Sea. Visitors can see the original timbers, cannons, carved decorations, personal belongings of the crew, and the four measuring sticks that helped explain why the ship was asymmetric.',
          'The Vasa is a unique artifact: the only 17th-century warship preserved in its original condition anywhere in the world. It is also a detailed record of a unit error that contributed to one of history\'s most spectacular maritime failures — visible, touchable, and measurable in both Swedish and Amsterdam feet.',
        ],
      },
    ],
    conclusion: 'The Vasa sank on its maiden voyage in 1628, 1,300 meters from the dock, in full view of a crowd that had come to watch it depart. The contributing cause — two construction crews using rulers of different lengths, Swedish feet on the port side and Amsterdam feet on the starboard side, without ever checking they were working in the same units — was not discovered until archaeologists found four measuring sticks at the bottom of Stockholm harbor in the 1960s. The same category of error has since destroyed a $327 million spacecraft (Mars Climate Orbiter, 1999) and nearly killed 69 people on a powerless Boeing 767 (Gimli Glider, 1983). The lesson has not changed in 400 years: always verify units at every interface between teams, systems, or traditions. A number without a unit is not a measurement.',
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
    intro: 'You buy a "1 TB" external hard drive, plug it in, and your computer reports 931 GB. You have not been cheated. No one removed 69 GB of storage. What happened is a unit conversion disagreement — one that has persisted for decades and will persist for the foreseeable future because manufacturers and operating systems define "terabyte" differently, neither side wants to change, and the body that tried to fix it in 1998 introduced terminology so awkward that almost nobody uses it. This is one of the most common and widely misunderstood unit conversion issues in everyday technology, and it gets more noticeable every year as consumer drives grow larger.',
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
          'Early in computing history, the terms "kilobyte," "megabyte," and so on were informally used to mean the nearest power of 2 — 1,024 bytes, 1,048,576 bytes — even though the SI prefixes kilo, mega, giga strictly mean 10³, 10⁶, 10⁹. When drives were small, the difference was negligible: a 100 MB drive off by 4.86% was not worth arguing about. As drives grew to gigabytes and then terabytes, the gap became large enough to matter financially. Storage manufacturers adopted the strict SI decimal definitions — giving their drives larger apparent capacities on the label — while operating systems retained the binary interpretation they had always used.',
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
      {
        heading: 'Why Manufacturers Chose Decimal',
        paragraphs: [
          'Storage manufacturers switched to decimal definitions because it makes their products look larger. A drive containing 1,000,000,000,000 bytes can be labeled "1 TB" in decimal, but would be labeled "931 GiB" in binary. From a marketing perspective, "1 TB" is a cleaner, larger-sounding number than "931 GiB."',
          'This is not new. Western Digital was sued in 2006 in a class-action lawsuit over the discrepancy. The settlement required WD to include a software utility that clarified the difference between SI and binary definitions. The lawsuit did not change the labeling convention — manufacturers continue to use decimal definitions, and operating systems continue to display binary values under GB labels.',
          'The issue becomes more noticeable at larger capacities. A 4 TB drive shows as 3.64 TB on Windows — a gap of 360 GB. At 16 TB, the gap is nearly 1.5 TB. As consumer drives grow larger, the apparent "missing" storage grows proportionally, which is why the confusion becomes more common as drive sizes increase.',
        ],
      },
      {
        heading: 'RAM Is Different',
        paragraphs: [
          'Computer memory (RAM) has always been sold and measured in binary units, because RAM is addressed directly by the CPU using binary addressing. A "16 GB" stick of RAM genuinely contains 16 × 1,073,741,824 = 17,179,869,184 bytes — the binary definition. Windows and macOS both report RAM in binary GB, and for once, the label and the display agree.',
          'This creates an inconsistency on the same computer: your 16 GB of RAM shows as 16 GB, while your 1 TB SSD shows as 931 GB — even though both are measured in "gigabytes." The difference is that RAM manufacturers use binary gigabytes and storage manufacturers use decimal gigabytes. Both call the unit GB.',
          'For practical purposes: trust the label on RAM, and subtract about 7% from the labeled capacity of HDDs and SSDs to get the number Windows will display. A 512 GB SSD will show as approximately 477 GB in Windows Explorer.',
        ],
      },
      {
        heading: 'Does the File System Take Space Too?',
        paragraphs: [
          'Beyond the decimal-vs-binary discrepancy, formatting a drive also reduces available space. Every file system — NTFS, exFAT, APFS, ext4 — reserves some space for its own overhead: the master file table, directory structures, and system files.',
          'On a 1 TB drive formatted with NTFS, the file system overhead is typically 100–500 MB. On a freshly formatted 1 TB SSD, you might see 930 GB available after accounting for both the binary conversion and the file system overhead.',
          'SSDs also reserve a portion of their raw capacity as "over-provisioning" — spare cells used to manage wear leveling and bad block replacement. This is not visible to the operating system at all. A 1 TB NVMe SSD might have 1.07 TB of raw flash memory but expose only 1 TB to the system, with the remaining 7% held in reserve to extend drive longevity.',
        ],
      },
    ],
    conclusion: 'Your 1 TB drive shows 931 GB on Windows because manufacturers define 1 TB as 10¹² bytes (decimal) while Windows defines 1 GB as 2³⁰ bytes (binary) — a 9.95% difference per terabyte that grows as drive sizes increase. No storage is missing: you are getting every byte the manufacturer labeled. macOS switched to the manufacturer\'s decimal definition in macOS 10.6 (2009), so the same drive shows 1 TB on a Mac. The IEC introduced the "tebibyte" (TiB) in 1998 specifically to resolve this ambiguity, but almost nobody outside of technical documentation uses the term. The confusion persists because neither manufacturers nor operating system vendors have any financial incentive to fix it — and because "gibibyte" sounds worse than "gigabyte." Until Windows adopts decimal definitions or the industry agrees on a single standard, plan on about 7% less displayed capacity per labeled TB on any Windows system.',
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

  {
    slug: 'metric-to-imperial',
    title: 'Metric to Imperial: The Complete Conversion Guide',
    tag: 'How-To Guide',
    date: '2026-04-24',
    description: 'Convert between metric and imperial units for length, weight, volume, and temperature. Exact formulas, quick mental shortcuts, and reference tables for the most common conversions.',
    intro: 'Most of the world uses metric. The United States uses imperial — and the UK uses a mix of both. If you travel, cook from foreign recipes, follow international sports results, or read product specs from another country, you will constantly run into conversions. This guide covers every major metric-to-imperial conversion in one place: the exact formulas, the quick mental shortcuts, and the reference values you will actually use.',
    sections: [
      {
        heading: 'Length: Meters, Kilometers, Centimeters',
        paragraphs: [
          'The meter is the base unit of length in the metric system. 1 meter = 3.28084 feet = 39.3701 inches. 1 kilometer = 0.621371 miles. 1 centimeter = 0.393701 inches.',
          'To convert meters to feet, multiply by 3.281. To convert kilometers to miles, multiply by 0.621 (or take 62% of the value). To convert centimeters to inches, divide by 2.54.',
          'Going the other way: 1 foot = 0.3048 meters. 1 mile = 1.60934 kilometers. 1 inch = 2.54 centimeters exactly.',
        ],
        list: [
          '5 km = 3.1 miles (a 5K race)',
          '100 km/h = 62.1 mph',
          '1.80 m = 5 ft 11 in',
          '30 cm = 11.8 inches',
          '10 cm = 3.94 inches',
        ],
      },
      {
        heading: 'Weight: Kilograms and Grams',
        paragraphs: [
          '1 kilogram = 2.20462 pounds. 1 gram = 0.035274 ounces. To convert kg to lbs, multiply by 2.205. For a quick estimate, double the kg value and add 10% — this gives a result within 0.5%.',
          'To convert grams to ounces, divide by 28.35. To convert pounds to kilograms, divide by 2.205 (or multiply by 0.4536).',
        ],
        list: [
          '70 kg = 154.3 lbs',
          '100 g = 3.53 oz',
          '1 lb = 453.6 g',
          '500 g = 1.1 lbs',
          '1 stone (UK) = 6.35 kg = 14 lbs',
        ],
      },
      {
        heading: 'Volume: Liters and Milliliters',
        paragraphs: [
          '1 liter = 0.264172 US gallons = 1.05669 US quarts = 33.814 US fluid ounces. 1 milliliter = 0.033814 US fluid ounces — so 1 fluid ounce = 29.5735 ml.',
          'US and UK (imperial) gallons differ: 1 US gallon = 3.785 liters, 1 UK gallon = 4.546 liters. Always check which gallon a recipe or fuel economy figure uses.',
          'For cooking: 1 US cup = 236.6 ml. 1 tablespoon = 14.79 ml. 1 teaspoon = 4.93 ml.',
        ],
        list: [
          '1 liter = 0.264 US gallons',
          '1 US gallon = 3.785 liters',
          '500 ml = 16.9 fl oz (standard water bottle)',
          '1 cup (US) = 240 ml',
          '1 fl oz = 29.6 ml',
        ],
      },
      {
        heading: 'Temperature: Celsius and Fahrenheit',
        paragraphs: [
          'To convert Celsius to Fahrenheit: multiply by 9/5, then add 32. Quick shortcut: double the Celsius value and add 30 for an estimate accurate to about 5°F.',
          'To convert Fahrenheit to Celsius: subtract 32, then multiply by 5/9.',
          'Key reference points: 0°C = 32°F (water freezes), 100°C = 212°F (water boils), 37°C = 98.6°F (body temperature), 20°C = 68°F (comfortable room).',
        ],
        list: [
          '−40°C = −40°F (the only point where they are equal)',
          '0°C = 32°F',
          '20°C = 68°F',
          '37°C = 98.6°F',
          '100°C = 212°F',
        ],
      },
      {
        heading: 'Quick Mental Shortcuts',
        paragraphs: [
          'km to miles: multiply by 0.6 — 3.5% low but good enough for road signs.',
          'kg to lbs: double and add 10% — e.g., 80 kg → 160 + 16 = 176 lbs (exact: 176.4).',
          'Celsius to Fahrenheit: double and add 30 — e.g., 25°C → 50 + 30 = 80°F (exact: 77°F).',
          'Liters to US gallons: divide by 4 — e.g., 40 L ÷ 4 = 10 gal (exact: 10.57).',
          'cm to inches: divide by 2.5 — e.g., 30 cm ÷ 2.5 = 12 in (exact: 11.81).',
        ],
      },
    ],
    conclusion: 'The five conversions you will use most: km × 0.621 = miles, kg × 2.205 = lbs, °C × 9/5 + 32 = °F, liters × 0.264 = US gallons, cm ÷ 2.54 = inches. For exact results on any value, use the free converters below.',
    relatedLinks: [
      { label: 'Length Converter', path: '/length' },
      { label: 'Weight Converter', path: '/weight' },
      { label: 'Volume Converter', path: '/volume' },
      { label: 'Temperature Converter', path: '/temperature' },
    ],
  },
]

/** Return a post by slug, or undefined if not found. */
export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug)
}
