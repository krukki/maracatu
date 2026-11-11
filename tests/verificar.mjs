// Verificação do site (rode depois de `npm run build`): npm test
// 1. Sem rolagem horizontal em 360, 390, 768 e 1280 px
// 2. Acessibilidade (axe-core, WCAG 2.1 A/AA) nos temas claro e escuro
// 3. "Não mistura": termos exclusivos de uma tradição não aparecem na página da outra
// 4. Links internos e âncoras existem
import { createRequire } from 'node:module';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { createServer } from 'node:http';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const axe = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const DIST = new URL('../dist/', import.meta.url).pathname;
const BASE = '/maracatu';

// Servidor estático simples para o dist, respeitando o "base"
const tipos = { html: 'text/html', css: 'text/css', js: 'text/javascript', svg: 'image/svg+xml', webp: 'image/webp', png: 'image/png', jpg: 'image/jpeg', woff2: 'font/woff2', xml: 'application/xml', txt: 'text/plain' };
const servidor = createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (!p.startsWith(BASE)) { res.writeHead(404); return res.end(); }
  p = join(DIST, p.slice(BASE.length));
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
  if (!existsSync(p)) { res.writeHead(404); return res.end(readFileSync(join(DIST, '404.html'))); }
  res.writeHead(200, { 'content-type': tipos[p.split('.').pop()] ?? 'application/octet-stream' });
  res.end(readFileSync(p));
});
await new Promise((r) => servidor.listen(4399, r));
const ORIGEM = 'http://localhost:4399';

function paginas(dir = DIST, pref = '/') {
  return readdirSync(dir).flatMap((f) => {
    const full = join(dir, f);
    if (statSync(full).isDirectory()) return paginas(full, `${pref}${f}/`);
    return f === 'index.html' ? [pref] : [];
  });
}
const rotas = paginas().filter((r) => !r.startsWith('/_astro'));

const EXCLUSIVOS = {
  rural: ['caboclo de lança', 'caboclos de lança', 'cabocla de lança', 'guiada', 'arreiamá', 'caboclo de pena', 'mateus', 'catirina', 'trincheira', 'surrão', 'sambada', 'folgazão', 'folgazões', 'terno', 'trombone', 'clarinete'],
  nacao: ['alfaia', 'baque virado', 'reis do congo', 'rei do congo', 'noite dos tambores', 'príncipe', 'princesa', 'guarda real', 'pajens', 'agbê'],
};

const falhas = [];
const falhar = (msg) => { falhas.push(msg); console.log('  ✗', msg); };

const navegador = await chromium.launch();
for (const rota of rotas) {
  console.log(rota);
  for (const largura of [360, 390, 768, 1280]) {
    for (const tema of largura === 390 || largura === 1280 ? ['light', 'dark'] : ['light']) {
      const pg = await navegador.newPage({ viewport: { width: largura, height: 800 }, colorScheme: tema });
      await pg.goto(ORIGEM + BASE + rota, { waitUntil: 'load' });
      const { sw, iw } = await pg.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
      if (sw > iw) falhar(`${rota} @${largura}px: rolagem horizontal (${sw} > ${iw})`);
      if (largura === 390 || largura === 1280) {
        await pg.addScriptTag({ content: axe });
        const r = await pg.evaluate(async () => (await window.axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] })).violations
          .map((v) => `${v.id} (${v.nodes.length}): ${v.nodes.slice(0, 2).map((n) => n.target.join(' ')).join(' | ')}`));
        r.forEach((v) => falhar(`${rota} @${largura}px ${tema}: axe ${v}`));
      }
      await pg.close();
    }
  }

  // Não mistura (só nas trilhas de cada tradição)
  const trilha = rota.startsWith('/nacao/') ? 'nacao' : rota.startsWith('/rural/') ? 'rural' : null;
  if (trilha) {
    const pg = await navegador.newPage();
    await pg.goto(ORIGEM + BASE + rota);
    const texto = await pg.evaluate(() => {
      const main = document.querySelector('main').cloneNode(true);
      main.querySelectorAll('[data-cruzamento], .notas, .fonte-margem, .fonte-ref, .nav-paginas, .trilha').forEach((e) => e.remove());
      return main.textContent.toLowerCase();
    });
    const outra = trilha === 'nacao' ? 'rural' : 'nacao';
    for (const termo of EXCLUSIVOS[outra]) {
      const re = new RegExp(`(^|[^\\p{L}])${termo}`, 'u');
      if (re.test(texto)) falhar(`${rota}: termo exclusivo do ${outra} na página do ${trilha}: "${termo}"`);
    }
    await pg.close();
  }

  // Links internos e âncoras
  const html = readFileSync(join(DIST, rota, 'index.html'), 'utf8');
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|mailto:)/.test(href)) continue;
    const [caminho, ancora] = href.split('#');
    let alvo;
    if (!caminho) alvo = html;
    else {
      const absoluto = caminho.startsWith('/') ? caminho : new URL(caminho, `http://x${BASE}${rota}`).pathname;
      if (!absoluto.startsWith(BASE)) { falhar(`${rota}: link fora do base: ${href}`); continue; }
      let arq = join(DIST, absoluto.slice(BASE.length));
      if (existsSync(arq) && statSync(arq).isDirectory()) arq = join(arq, 'index.html');
      if (!existsSync(arq)) { falhar(`${rota}: link quebrado: ${href}`); continue; }
      alvo = arq.endsWith('.html') ? readFileSync(arq, 'utf8') : null;
    }
    if (ancora && alvo && !alvo.includes(`id="${ancora}"`)) falhar(`${rota}: âncora inexistente: ${href}`);
  }
}
await navegador.close();
servidor.close();

console.log(falhas.length ? `\n${falhas.length} problema(s) encontrado(s).` : `\nTudo certo: ${rotas.length} páginas verificadas.`);
process.exit(falhas.length ? 1 : 0);
