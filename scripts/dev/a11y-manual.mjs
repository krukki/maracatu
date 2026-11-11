// Checagens complementares ao axe: alvos de toque, hierarquia de títulos, teclado no menu, reflow a 320px.
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
const O = 'http://localhost:4321/maracatu';
const rotas = ['/', '/historia/', '/nacao/', '/nacao/corte-e-personagens/', '/nacao/instrumentos-e-baque/', '/rural/', '/rural/personagens-e-indumentaria/', '/rural/orquestra-e-sambada/', '/comparativo/', '/raizes-religiosas/', '/alem-de-pernambuco/', '/fontes/'];
const b = await chromium.launch();
for (const r of rotas) {
  const p = await b.newPage({ viewport: { width: 390, height: 800 } });
  await p.goto(O + r);
  const res = await p.evaluate(() => {
    const pequenos = [...document.querySelectorAll('a, button, summary')].filter((e) => {
      const rc = e.getBoundingClientRect(); const st = getComputedStyle(e);
      if (!rc.width || st.visibility === 'hidden') return false;
      const inline = st.display === 'inline' && e.closest('p, li, dd, figcaption, td');
      return !inline && (rc.height < 44 || rc.width < 24);
    }).map((e) => `${e.tagName.toLowerCase()}.${e.className.toString().split(' ')[0]} "${e.textContent.trim().slice(0, 25)}" ${Math.round(e.getBoundingClientRect().width)}x${Math.round(e.getBoundingClientRect().height)}`);
    const hs = [...document.querySelectorAll('main h1, main h2, main h3, main h4')].map((h) => +h.tagName[1]);
    const saltos = hs.filter((n, i) => i > 0 && n - hs[i - 1] > 1).length;
    const h1 = document.querySelectorAll('h1').length;
    return { pequenos: [...new Set(pequenos)].slice(0, 6), saltos, h1 };
  });
  const p320 = await b.newPage({ viewport: { width: 320, height: 640 } });
  await p320.goto(O + r);
  const sw = await p320.evaluate(() => document.documentElement.scrollWidth);
  console.log(r, `h1=${res.h1}`, `saltos=${res.saltos}`, `320px:${sw}`, res.pequenos.length ? 'pequenos: ' + res.pequenos.join(' ; ') : '');
  await p.close(); await p320.close();
}
// Teclado: menu do celular
const p = await b.newPage({ viewport: { width: 390, height: 800 } });
await p.goto(O + '/nacao/');
await p.keyboard.press('Tab');
const primeiro = await p.evaluate(() => document.activeElement.textContent.trim());
await p.keyboard.press('Enter');
const foco = await p.evaluate(() => document.activeElement.id || document.activeElement.tagName);
await p.goto(O + '/nacao/');
for (let i = 0; i < 3; i++) await p.keyboard.press('Tab');
const noMenu = await p.evaluate(() => document.activeElement.textContent.trim());
await p.keyboard.press('Enter');
const aberto = await p.evaluate(() => document.querySelector('.nav-botao').getAttribute('aria-expanded'));
await p.keyboard.press('Tab');
const dentro = await p.evaluate(() => document.activeElement.textContent.trim());
await p.keyboard.press('Escape');
const fechado = await p.evaluate(() => [document.querySelector('.nav-botao').getAttribute('aria-expanded'), document.activeElement.textContent.trim()]);
const outline = await p.evaluate(() => getComputedStyle(document.activeElement).outlineStyle + ' ' + getComputedStyle(document.activeElement).outlineWidth);
console.log({ primeiro, focoAposPular: foco, noMenu, aberto, dentro, fechado, outline });
// Desktop: submenu "Mais páginas"
const d = await b.newPage({ viewport: { width: 1280, height: 800 } });
await d.goto(O + '/');
await d.focus('.nav-mais-botao'); await d.keyboard.press('Enter');
const sub = await d.evaluate(() => [document.querySelector('.nav-mais-botao').getAttribute('aria-expanded'), getComputedStyle(document.querySelector('.nav-sub')).display]);
await d.keyboard.press('Tab');
const subFoco = await d.evaluate(() => document.activeElement.textContent.trim());
await d.keyboard.press('Escape');
const subFechado = await d.evaluate(() => document.querySelector('.nav-mais-botao').getAttribute('aria-expanded'));
console.log({ sub, subFoco, subFechado });
// Linha do tempo: filtro
await d.goto(O + '/historia/');
await d.click('[data-filtro="rural"]');
const vis = await d.evaluate(() => [...document.querySelectorAll('.marco')].filter((m) => !m.hidden).map((m) => m.dataset.trilha));
console.log('filtro rural mostra:', [...new Set(vis)], vis.length, 'status:', await d.textContent('#ldt-status'));
// Vídeo
await d.goto(O + '/nacao/');
await d.click('.video-capa');
console.log('iframe:', await d.evaluate(() => document.querySelector('.video iframe')?.src));
await b.close();
