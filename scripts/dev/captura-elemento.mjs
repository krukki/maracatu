// Captura um elemento: node scripts/dev/captura-elemento.mjs <rota> <seletor> <largura> <saida> [tema]
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
const [rota, sel, largura, saida, tema = 'light'] = process.argv.slice(2);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +largura, height: 900 }, colorScheme: tema === 'dark' ? 'dark' : 'light' });
await p.goto(`http://localhost:4321/maracatu${rota}`, { waitUntil: 'networkidle' });
await p.locator(sel).first().screenshot({ path: saida });
await b.close();
