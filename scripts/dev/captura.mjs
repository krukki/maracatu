// Captura de telas para revisão: node scripts/dev/captura.mjs <rota> <largura> <saida.png> [tema] [altura]
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
const [rota, largura, saida, tema = 'light', altura] = process.argv.slice(2);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +largura, height: +(altura || 900) }, colorScheme: tema === 'dark' ? 'dark' : 'light' });
await p.goto(`http://localhost:4321/maracatu${rota}`, { waitUntil: 'networkidle' });
await p.evaluate(() => document.querySelectorAll('img[loading=lazy]').forEach((i) => (i.loading = 'eager')));
await p.waitForTimeout(400);
await p.screenshot({ path: saida, fullPage: !altura });
const largo = await p.evaluate(() => document.documentElement.scrollWidth);
console.log('scrollWidth', largo, 'viewport', largura);
await b.close();
