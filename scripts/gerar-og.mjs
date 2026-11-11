// Gera public/og.png (imagem de compartilhamento 1200x630) renderizando HTML no Chromium,
// com as mesmas fontes e motivos do site. Uso: node scripts/gerar-og.mjs
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const b64 = (p) => readFileSync(new URL(`../node_modules/${p}`, import.meta.url)).toString('base64');
const gloock = b64('@fontsource/gloock/files/gloock-latin-400-normal.woff2');
const atk = b64('@fontsource-variable/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-wght-normal.woff2');
const corda = Array.from({ length: 14 }, (_, i) => `<path d="M${i * 44} 9 L${i * 44 + 22} 55 L${i * 44 + 44} 9" fill="none" stroke="#8a5a10" stroke-width="5"/><path d="M${i * 44} 9 L${i * 44 + 22} 55 L${i * 44 + 44} 9" fill="none" stroke="#e8b84a" stroke-width="2.5"/>`).join('');
const cores = ['#c2187a', '#0e8c8c', '#f2b705'];
let lant = '';
for (let y = 0; y < 5; y++) for (let x = 0; x < 26; x++) lant += `<circle cx="${x * 24 + (y % 2) * 12}" cy="${6 + y * 13}" r="7" fill="${cores[(x + y) % 3]}" stroke="#3b0d2a" stroke-width="1"/>`;
const html = `<!doctype html><html><head><style>
@font-face{font-family:G;src:url(data:font/woff2;base64,${gloock})}
@font-face{font-family:A;src:url(data:font/woff2;base64,${atk});font-weight:200 800}
body{margin:0;width:1200px;height:630px;background:#f6efe2;color:#1b1614;font-family:A;overflow:hidden}
.f{display:grid;grid-template-columns:1fr 8px 1fr;height:64px}.c{background:repeating-linear-gradient(180deg,#1b1614 0 6px,transparent 6px 10px)}
h1{font-family:G;font-weight:400;font-size:170px;line-height:1;margin:120px 0 0;text-align:center;letter-spacing:-2px}
p{text-align:center;font-size:40px;margin:26px 0 0}
.l{display:grid;grid-template-columns:1fr 8px 1fr;margin-top:70px;font-size:34px;font-weight:700;text-align:center}
.n{color:#b3261e}.r{color:#c2187a}
</style></head><body>
<div class="f"><svg width="596" height="64"><rect width="596" height="64" fill="#b3261e"/><rect width="596" height="9" fill="#1f3a8a"/><rect y="55" width="596" height="9" fill="#1f3a8a"/>${corda}</svg><span class="c"></span><svg width="596" height="64"><rect width="596" height="64" fill="#3b0d2a"/>${lant}</svg></div>
<h1>Dois Baques</h1><p>Maracatu Nação e Maracatu Rural de Pernambuco</p>
<div class="l"><span class="n">Baque virado</span><span class="c"></span><span class="r">Baque solto</span></div>
</body></html>`;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(html);
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: new URL('../public/og.png', import.meta.url).pathname });
await b.close();
console.log('ok');
