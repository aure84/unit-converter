import { Link, useLocation } from 'react-router'
import IngredientConverter from '../components/IngredientConverter.jsx'
import SEOMeta from '../components/SEOMeta.jsx'
import { gramsToIngredientCups, INGREDIENT_DENSITIES } from '../utils/ingredientDensity.js'
import './IngredientPage.css'

const SITE_URL = 'https://convert-fast.com'

const INGREDIENT_DATA = {
  flour: {
    title: 'Flour Grams to Cups Converter',
    metaTitle: 'Flour Grams to Cups Converter | Convert Fast',
    metaDesc: 'Convert flour grams to cups instantly. All-purpose flour: 125g = 1 cup. Free online flour converter with quick reference table.',
    slug: 'flour-grams-to-cups',
    tableRows: [25, 50, 100, 125, 200, 250, 375, 500],
    content: (
      <>
        <p>
          Converting flour by weight instead of volume is the most accurate way to bake. A cup of all-purpose flour weighs approximately <strong>125 grams</strong>, but this can vary by 20–30% depending on how tightly the flour is packed into the cup. Using a kitchen scale eliminates this uncertainty entirely.
        </p>
        <p>
          The standard density used here is 125 g/cup, which corresponds to flour measured with the spoon-and-level method: spoon flour into the cup and level off with a straight edge. If you scoop directly from the bag, you may pack in up to 150–160 g per cup.
        </p>
        <p>
          Most professional baking recipes specify flour in grams for this exact reason. Use the converter above or the quick reference table below to translate any gram value to cups.
        </p>
      </>
    ),
    faq: [
      { q: 'How many cups is 200g of flour?', a: '200g of all-purpose flour is approximately 1.6 cups (using the 125g/cup standard).' },
      { q: 'How many grams is 2 cups of flour?', a: '2 cups of all-purpose flour is 250 grams.' },
      { q: 'Why does my cup of flour weigh more than 125g?', a: 'If you scooped directly from the bag, the flour gets packed down. Use the spoon-and-level method, or better yet, weigh with a scale.' },
      { q: 'Does the type of flour matter?', a: 'Yes. Bread flour (~130g/cup) and cake flour (~100g/cup) have different densities. This converter uses all-purpose flour (125g/cup).' },
    ],
    internalLinks: [],
  },
  sugar: {
    title: 'Sugar Grams to Cups Converter',
    metaTitle: 'Sugar Grams to Cups Converter | Convert Fast',
    metaDesc: 'Convert sugar grams to cups instantly. Granulated white sugar: 200g = 1 cup. Free online sugar converter with quick reference table.',
    slug: 'sugar-grams-to-cups',
    tableRows: [50, 100, 150, 200, 250, 300, 400, 500],
    content: (
      <>
        <p>
          Granulated white sugar has a density of approximately <strong>200 grams per US cup</strong>. Because sugar crystals are uniform and don't compress the way flour does, cup measurements for sugar are more consistent — but weight is still more precise for baking.
        </p>
        <p>
          Different sugar types have different densities. Brown sugar is typically packed into the cup, adding more weight (~220g/cup). Powdered (icing) sugar is much lighter at around 120g/cup. This converter is calibrated for <strong>granulated white sugar</strong>.
        </p>
        <p>
          For powdered sugar, see the{' '}
          <Link to="/cooking/powdered-sugar-grams-to-cups">powdered sugar converter</Link>.
        </p>
      </>
    ),
    faq: [
      { q: 'How many cups is 200g of sugar?', a: '200g of granulated sugar is exactly 1 cup.' },
      { q: 'How many grams is 1/2 cup of sugar?', a: '½ cup of granulated sugar is 100 grams.' },
      { q: 'Is brown sugar the same as white sugar by weight?', a: 'No. Packed brown sugar weighs about 220g per cup. Use the appropriate converter for brown sugar.' },
      { q: 'How many cups is 500g of sugar?', a: '500g of granulated sugar is 2.5 cups.' },
    ],
    internalLinks: [
      { to: '/cooking/powdered-sugar-grams-to-cups', label: 'Powdered Sugar Converter' },
    ],
  },
  butter: {
    title: 'Butter Grams to Cups Converter',
    metaTitle: 'Butter Grams to Cups Converter | Convert Fast',
    metaDesc: 'Convert butter grams to cups instantly. 1 cup of butter = 227g = 2 sticks. Free online butter converter with quick reference table.',
    slug: 'butter-grams-to-cups',
    tableRows: [28, 57, 100, 113, 150, 200, 227, 250, 500],
    content: (
      <>
        <p>
          One US cup of butter weighs <strong>227 grams</strong> (8 oz), which equals exactly 2 American butter sticks. European recipes often list butter in grams, while American recipes use cups or sticks — this converter handles both.
        </p>
        <p>
          Butter is one of the easiest ingredients to convert: the relationship between grams and cups is consistent because butter is a solid, dense fat. Common amounts to remember: <strong>½ cup = 113g</strong> (1 stick), <strong>¼ cup = 57g</strong>.
        </p>
        <p>
          Note: this calculator is for solid butter. Melted or clarified butter has a slightly different volume-to-weight ratio.
        </p>
      </>
    ),
    faq: [
      { q: 'How many cups is 100g of butter?', a: '100g of butter is approximately 0.44 cups, or slightly under half a cup.' },
      { q: 'How many grams is 1/2 cup of butter?', a: '½ cup of butter is 113.5g — exactly one American butter stick.' },
      { q: 'How many grams is 2 sticks of butter?', a: '2 sticks = 1 cup = 227 grams.' },
      { q: 'Can I use this for margarine?', a: 'Yes. Margarine has a very similar density to butter, so the same conversion applies.' },
    ],
    internalLinks: [],
  },
  powdered_sugar: {
    title: 'Powdered Sugar Grams to Cups Converter',
    metaTitle: 'Powdered Sugar Grams to Cups | Convert Fast',
    metaDesc: 'Convert powdered sugar (icing sugar) grams to cups. 120g = 1 cup. Free converter with quick reference table.',
    slug: 'powdered-sugar-grams-to-cups',
    tableRows: [30, 60, 90, 120, 180, 240, 360, 480],
    content: (
      <>
        <p>
          Powdered sugar (also called icing sugar or confectioners' sugar) is much lighter than granulated sugar, weighing approximately <strong>120 grams per US cup</strong>. It's finely ground and airy, so it compresses easily — weighing it is strongly recommended for accurate results in frostings and glazes.
        </p>
        <p>
          For granulated white sugar, see the{' '}
          <Link to="/cooking/sugar-grams-to-cups">sugar grams to cups converter</Link>.
        </p>
      </>
    ),
    faq: [
      { q: 'How many cups is 120g of powdered sugar?', a: 'Exactly 1 cup (sifted, not packed).' },
      { q: 'How many grams is 2 cups of powdered sugar?', a: '2 cups of powdered sugar is 240 grams.' },
      { q: 'Is icing sugar the same as powdered sugar?', a: 'Yes — icing sugar, powdered sugar, and confectioners\' sugar are the same thing. The density of 120g/cup applies to all.' },
    ],
    internalLinks: [
      { to: '/cooking/sugar-grams-to-cups', label: 'Granulated Sugar Converter' },
    ],
  },
  honey: {
    title: 'Honey Grams to Cups Converter',
    metaTitle: 'Honey Grams to Cups Converter | Convert Fast',
    metaDesc: 'Convert honey grams to cups. 1 cup of honey = 340g. Honey is denser than water — use this free converter for accurate measurements.',
    slug: 'honey-grams-to-cups',
    tableRows: [85, 170, 255, 340, 425, 500, 680],
    content: (
      <>
        <p>
          Honey is significantly denser than water, weighing approximately <strong>340 grams per US cup</strong> (compared to 237g/cup for water). This makes eyeballing honey in a cup measure especially unreliable — weighing is the most accurate method.
        </p>
        <p>
          A useful tip: if a recipe calls for both oil and honey, measure the oil first. The residual coating on the measuring cup prevents honey from sticking, making it easier to pour out and get a clean measurement.
        </p>
      </>
    ),
    faq: [
      { q: 'How many cups is 250g of honey?', a: '250g of honey is approximately 0.74 cups.' },
      { q: 'How many grams is 1/4 cup of honey?', a: '¼ cup of honey is 85 grams.' },
      { q: 'Why does honey weigh so much per cup?', a: 'Honey is a thick syrup with a density of about 1.4 g/mL, compared to water at 1.0 g/mL. This means a cup of honey is 40% heavier than a cup of water.' },
    ],
    internalLinks: [],
  },
  brown_sugar: {
    title: 'Brown Sugar Grams to Cups Converter',
    metaTitle: 'Brown Sugar Grams to Cups Converter | Convert Fast',
    metaDesc: 'Convert brown sugar grams to cups. Packed brown sugar: 220g = 1 cup. Free converter with quick reference table.',
    slug: 'brown-sugar-grams-to-cups',
    tableRows: [55, 110, 165, 220, 275, 330, 440, 500],
    content: (
      <>
        <p>
          Brown sugar is typically measured packed into the cup, giving it a higher density than granulated white sugar — approximately <strong>220 grams per US cup</strong>. "Packed" means pressing the sugar firmly into the measuring cup until it holds the shape when tipped out.
        </p>
        <p>
          Light and dark brown sugar have nearly identical densities (the difference is just the amount of molasses), so this converter works for both. If a recipe simply says "brown sugar," assume it means packed.
        </p>
        <p>
          For regular white sugar, see the{' '}
          <Link to="/cooking/sugar-grams-to-cups">granulated sugar converter</Link>.
        </p>
      </>
    ),
    faq: [
      { q: 'How many cups is 200g of brown sugar?', a: '200g of packed brown sugar is approximately 0.91 cups — just under 1 cup.' },
      { q: 'How many grams is 1/2 cup of brown sugar?', a: '½ cup of packed brown sugar is 110 grams.' },
      { q: 'Does it matter if I use light or dark brown sugar?', a: 'No — both have essentially the same density (220g/cup). The difference is only in flavor and molasses content.' },
      { q: 'What does "packed" brown sugar mean?', a: 'Press the sugar firmly into the measuring cup with the back of a spoon until it holds its shape when turned out. Most recipes assume packed brown sugar.' },
    ],
    internalLinks: [
      { to: '/cooking/sugar-grams-to-cups', label: 'Granulated Sugar Converter' },
      { to: '/cooking/powdered-sugar-grams-to-cups', label: 'Powdered Sugar Converter' },
    ],
  },
  almond_flour: {
    title: 'Almond Flour Grams to Cups Converter',
    metaTitle: 'Almond Flour Grams to Cups Converter | Convert Fast',
    metaDesc: 'Convert almond flour grams to cups. 1 cup almond flour = 96g. Essential for keto and gluten-free baking. Free converter with reference table.',
    slug: 'almond-flour-grams-to-cups',
    tableRows: [24, 48, 96, 144, 192, 240, 384, 480],
    content: (
      <>
        <p>
          Almond flour is much lighter than wheat flour, weighing approximately <strong>96 grams per US cup</strong>. It's a staple in keto, paleo, and gluten-free baking — but because it behaves differently from wheat flour, accurate measurement by weight is especially important for consistent results.
        </p>
        <p>
          Almond flour and almond meal are sometimes used interchangeably, but almond flour (made from blanched, peeled almonds) is finer and slightly denser. Almond meal (made from whole almonds with skins) has a similar but slightly higher density. This converter is calibrated for <strong>blanched almond flour</strong>.
        </p>
        <p>
          For all-purpose wheat flour, see the{' '}
          <Link to="/cooking/flour-grams-to-cups">flour grams to cups converter</Link>.
        </p>
      </>
    ),
    faq: [
      { q: 'How many cups is 100g of almond flour?', a: '100g of almond flour is approximately 1.04 cups — just over 1 cup.' },
      { q: 'How many grams is 2 cups of almond flour?', a: '2 cups of almond flour is 192 grams.' },
      { q: 'Can I substitute almond flour 1:1 for regular flour?', a: 'Not directly — almond flour is denser and contains more fat. Substitution ratios vary by recipe, typically 1:1 by weight but not by volume.' },
      { q: 'Is almond flour the same as almond meal?', a: 'Similar but not identical. Almond flour is finer and made from blanched almonds; almond meal includes the skins and is coarser. Both are around 96–100g/cup.' },
    ],
    internalLinks: [
      { to: '/cooking/flour-grams-to-cups', label: 'All-Purpose Flour Converter' },
    ],
  },
  cocoa_powder: {
    title: 'Cocoa Powder Grams to Cups Converter',
    metaTitle: 'Cocoa Powder Grams to Cups Converter | Convert Fast',
    metaDesc: 'Convert cocoa powder grams to cups. 1 cup cocoa powder = 85g. Free converter for baking with quick reference table.',
    slug: 'cocoa-powder-grams-to-cups',
    tableRows: [21, 43, 64, 85, 128, 170, 255, 340],
    content: (
      <>
        <p>
          Unsweetened cocoa powder is one of the lightest baking ingredients, weighing approximately <strong>85 grams per US cup</strong>. Like flour, cocoa powder compresses easily, so weighing is far more reliable than volume measurement — a scooped cup can weigh up to 30% more than a spooned-and-leveled cup.
        </p>
        <p>
          This converter applies to both natural (acidic) and Dutch-process cocoa powder — they have the same density. The difference between the two is chemical (Dutch-process is alkalized), not physical, so they weigh the same per cup.
        </p>
      </>
    ),
    faq: [
      { q: 'How many cups is 100g of cocoa powder?', a: '100g of cocoa powder is approximately 1.18 cups.' },
      { q: 'How many grams is 1/4 cup of cocoa powder?', a: '¼ cup of cocoa powder is about 21 grams.' },
      { q: 'Does Dutch-process vs. natural cocoa weigh the same?', a: 'Yes — both types have the same density of approximately 85g/cup. The difference is in flavor and acidity, not weight.' },
      { q: 'Why does my cocoa powder weigh more than 85g/cup?', a: 'You likely scooped directly from the container, which compacts the powder. Spoon it into the measuring cup and level off for the standard 85g/cup measurement.' },
    ],
    internalLinks: [],
  },
}

function IngredientPage({ ingredient }) {
  const { search } = useLocation()
  const initialGrams = new URLSearchParams(search).get('value') ?? undefined

  const data = INGREDIENT_DATA[ingredient]
  if (!data) return null

  const density = INGREDIENT_DENSITIES[ingredient]
  const canonical = `${SITE_URL}/cooking/${data.slug}`

  return (
    <main className="ingredient-page">
      <SEOMeta
        title={data.metaTitle}
        description={data.metaDesc}
        canonical={canonical}
      />

      <h1>{data.title}</h1>

      <IngredientConverter ingredient={ingredient} initialGrams={initialGrams} />

      {/* Quick reference table */}
      <section className="ingredient-page__table-section">
        <h2>Quick Reference Table</h2>
        <table className="ingredient-page__table">
          <thead>
            <tr>
              <th>Grams</th>
              <th>Cups (US)</th>
            </tr>
          </thead>
          <tbody>
            {data.tableRows.map((g) => {
              const cups = gramsToIngredientCups(g, ingredient)
              const formatted = cups < 1
                ? `${parseFloat(cups.toFixed(3))}`
                : `${parseFloat(cups.toFixed(2))}`
              return (
                <tr key={g}>
                  <td>{g} g</td>
                  <td>{formatted} cups</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>

      {/* SEO content */}
      <section className="ingredient-page__content">
        {data.content}
      </section>

      {/* FAQ */}
      <section className="ingredient-page__faq">
        <h2>Frequently Asked Questions</h2>
        <dl>
          {data.faq.map(({ q, a }) => (
            <details key={q} className="ingredient-page__faq-item">
              <summary className="ingredient-page__faq-q">{q}</summary>
              <dd className="ingredient-page__faq-a">{a}</dd>
            </details>
          ))}
        </dl>
      </section>

      {/* Internal links */}
      {data.internalLinks.length > 0 && (
        <nav className="ingredient-page__links" aria-label="Related converters">
          <h2>Related Converters</h2>
          <ul>
            {data.internalLinks.map(({ to, label }) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </nav>
      )}

      <p className="ingredient-page__back">
        <Link to="/cooking">← Back to Cooking Converter</Link>
      </p>
    </main>
  )
}

export default IngredientPage
