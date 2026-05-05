import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:5173';

// ── Homepage ────────────────────────────────────────────────────────────────

test('homepage loads and shows all categories', async ({ page }) => {
  await page.goto(BASE);
  await expect(page).toHaveTitle(/Unit Converter/);
  for (const cat of ['Length', 'Weight', 'Temperature', 'Volume', 'Area', 'Speed', 'Time', 'Data Storage', 'Pressure', 'Energy', 'Power', 'Fuel Economy', 'Cooking', 'Angle', 'Frequency', 'Currency']) {
    await expect(page.getByText(cat).first()).toBeVisible();
  }
});

// ── Navigation ──────────────────────────────────────────────────────────────

test('nav links navigate to correct category pages', async ({ page }) => {
  await page.goto(BASE);
  await page.locator('nav').getByRole('link', { name: 'Length' }).click();
  await expect(page).toHaveURL(`${BASE}/length`);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

// ── Converter — basic conversion ────────────────────────────────────────────

test('length: 1 meter converts to ~3.28084 feet', async ({ page }) => {
  await page.goto(`${BASE}/length/meter-to-foot`);
  await page.getByRole('heading', { level: 1 }).waitFor();

  const inputs = page.locator('input[type="number"]');
  await inputs.first().fill('1');
  const result = await inputs.nth(1).inputValue();
  expect(parseFloat(result)).toBeCloseTo(3.28084, 3);
});

test('weight: 1 kg converts to ~2.20462 lbs', async ({ page }) => {
  await page.goto(`${BASE}/weight/kilogram-to-pound`);
  const inputs = page.locator('input[type="number"]');
  await inputs.first().fill('1');
  const result = await inputs.nth(1).inputValue();
  expect(parseFloat(result)).toBeCloseTo(2.20462, 3);
});

test('temperature: 100°C converts to 212°F', async ({ page }) => {
  await page.goto(`${BASE}/temperature/celsius-to-fahrenheit`);
  const inputs = page.locator('input[type="number"]');
  await inputs.first().fill('100');
  const result = await inputs.nth(1).inputValue();
  expect(parseFloat(result)).toBeCloseTo(212, 2);
});

test('power: 1 horsepower converts to ~745.7 watts', async ({ page }) => {
  await page.goto(`${BASE}/power/horsepower-to-watt`);
  const inputs = page.locator('input[type="number"]');
  await inputs.first().fill('1');
  const result = await inputs.nth(1).inputValue();
  expect(parseFloat(result)).toBeCloseTo(745.7, 0);
});

test('pressure: 1 bar converts to ~14.5 psi', async ({ page }) => {
  await page.goto(`${BASE}/pressure/bar-to-psi`);
  const inputs = page.locator('input[type="number"]');
  await inputs.first().fill('1');
  const result = await inputs.nth(1).inputValue();
  expect(parseFloat(result)).toBeCloseTo(14.5038, 1);
});

test('fuel economy: 8 L/100km converts to ~29.4 mpg', async ({ page }) => {
  await page.goto(`${BASE}/fuel-economy/liter_per_100km-to-mile_per_gallon`);
  const inputs = page.locator('input[type="number"]');
  await inputs.first().fill('8');
  const result = await inputs.nth(1).inputValue();
  expect(parseFloat(result)).toBeCloseTo(29.4, 0);
});

test('cooking: 1 cup converts to ~236.6 ml', async ({ page }) => {
  await page.goto(`${BASE}/cooking/cup-to-milliliter`);
  const inputs = page.locator('input[type="number"]');
  await inputs.first().fill('1');
  const result = await inputs.nth(1).inputValue();
  expect(parseFloat(result)).toBeCloseTo(236.6, 0);
});

test('energy: 1 kcal converts to 4.184 kJ', async ({ page }) => {
  await page.goto(`${BASE}/energy/kilocalorie-to-kilojoule`);
  const inputs = page.locator('input[type="number"]');
  await inputs.first().fill('1');
  const result = await inputs.nth(1).inputValue();
  expect(parseFloat(result)).toBeCloseTo(4.184, 2);
});

// ── Bidirectional conversion ────────────────────────────────────────────────

test('bidirectional: typing in To field updates From field', async ({ page }) => {
  await page.goto(`${BASE}/length/meter-to-foot`);
  const inputs = page.locator('input[type="number"]');
  await inputs.nth(1).fill('10');
  const result = await inputs.first().inputValue();
  expect(parseFloat(result)).toBeCloseTo(3.048, 2);
});

// ── URL sync ────────────────────────────────────────────────────────────────

test('URL ?value= param pre-fills converter', async ({ page }) => {
  await page.goto(`${BASE}/length/meter-to-foot?value=5`);
  const inputs = page.locator('input[type="number"]');
  expect(await inputs.first().inputValue()).toBe('5');
  const result = await inputs.nth(1).inputValue();
  expect(parseFloat(result)).toBeCloseTo(16.4042, 2);
});

test('typing updates URL with ?value= param', async ({ page }) => {
  await page.goto(`${BASE}/length/meter-to-foot`);
  const inputs = page.locator('input[type="number"]');
  await inputs.first().fill('42');
  await expect(page).toHaveURL(/\?value=42/);
});

// ── Edge cases ──────────────────────────────────────────────────────────────

test('empty input clears result field', async ({ page }) => {
  await page.goto(`${BASE}/length/meter-to-foot`);
  const inputs = page.locator('input[type="number"]');
  await inputs.first().fill('10');
  await inputs.first().fill('');
  const result = await inputs.nth(1).inputValue();
  expect(result).toBe('');
});

test('0 L/100km does not crash — shows empty result', async ({ page }) => {
  await page.goto(`${BASE}/fuel-economy/liter_per_100km-to-mile_per_gallon`);
  const inputs = page.locator('input[type="number"]');
  await inputs.first().fill('0');
  const result = await inputs.nth(1).inputValue();
  expect(result).toBe('');
});

// ── Invalid pair pages ──────────────────────────────────────────────────────

test('unknown pair shows friendly error, not crash', async ({ page }) => {
  await page.goto(`${BASE}/length/foo-to-bar`);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Not Found');
});

// ── Category pages ──────────────────────────────────────────────────────────

test('all 16 category pages load without error', async ({ page }) => {
  const categories = [
    'length', 'weight', 'temperature', 'volume', 'area',
    'speed', 'time', 'data-storage', 'pressure', 'energy',
    'power', 'fuel-economy', 'cooking', 'angle', 'frequency', 'currency',
  ];
  for (const cat of categories) {
    await page.goto(`${BASE}/${cat}`);
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1')).not.toBeEmpty();
  }
});

// ── Reference table ─────────────────────────────────────────────────────────

test('reference table is visible on pair pages', async ({ page }) => {
  await page.goto(`${BASE}/length/meter-to-foot`);
  await expect(page.locator('table')).toBeVisible();
});

// ── Mobile ──────────────────────────────────────────────────────────────────

test('mobile: no horizontal scroll at 375px', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(`${BASE}/length/meter-to-foot`);
  const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  expect(bodyWidth).toBeLessThanOrEqual(375);
});

// ── Value-specific pages ─────────────────────────────────────────────────────

test('value page: /weight/3300-pound-to-kilogram does not show "Converter Not Found"', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  await expect(page.getByText('Converter Not Found')).not.toBeVisible();
});

test('value page: H1 shows computed result for 3300 pound to kilogram', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  const h1 = page.getByRole('heading', { level: 1 });
  await expect(h1).toContainText('3,300');
  await expect(h1).toContainText('1,496');
});

test('value page: converter is pre-filled with the URL value', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  const inputs = page.locator('input[type="number"]');
  const fromVal = await inputs.first().inputValue();
  expect(parseFloat(fromVal)).toBeCloseTo(3300, 0);
});

test('value page: generic pair page H1 unchanged (no regression)', async ({ page }) => {
  await page.goto(`${BASE}/weight/pound-to-kilogram`);
  const h1 = page.getByRole('heading', { level: 1 });
  await expect(h1).toContainText('Pound to Kilogram Converter');
});

test('value page: FAQ contains value-specific question', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  await expect(page.getByText(/What is 3,300/i)).toBeVisible();
});

test('value page: FAQ JSON-LD contains value-specific Q&A', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  const faqLd = await page.evaluate(() => {
    const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
    for (const s of scripts) {
      try {
        const data = JSON.parse(s.textContent);
        if (data['@type'] === 'FAQPage') return data;
      } catch { /* skip */ }
    }
    return null;
  });
  expect(faqLd).not.toBeNull();
  const questions = faqLd.mainEntity.map((e) => e.name);
  expect(questions.some((q) => q.includes('3,300'))).toBe(true);
});

test('value page: <title> contains value and result', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  const title = await page.title();
  expect(title).toContain('3,300');
  expect(title).toContain('1,496');
});

test('value page: meta description contains value and result', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('3,300');
  expect(desc).toContain('1,496');
});

test('value page: canonical points to value-specific URL', async ({ page }) => {
  await page.goto(`${BASE}/weight/3300-pound-to-kilogram`);
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  expect(canonical).toBe('https://convert-fast.com/weight/3300-pound-to-kilogram');
});
