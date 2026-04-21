import { chromium } from '@playwright/test';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const templatePath = join(__dirname, 'og-image-template.html');
const outputPath = join(__dirname, '..', 'public', 'og-image.png');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1200, height: 630 });
await page.goto(`file://${templatePath}`);
await page.screenshot({ path: outputPath });
await browser.close();

console.log('og-image.png generated →', outputPath);
