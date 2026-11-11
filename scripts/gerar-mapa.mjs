// Gera src/data/mapa.json (caminhos SVG) a partir de polígonos do OpenStreetMap (via Nominatim).
// Uso: node scripts/gerar-mapa.mjs <pasta-com-pe.json-e-mun_*.json>
// Os arquivos de entrada são baixados de https://nominatim.openstreetmap.org/search
// com polygon_geojson=1 (dados © colaboradores do OpenStreetMap, licença ODbL).
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.argv[2];
if (!dir) { console.error('Informe a pasta de entrada.'); process.exit(1); }

const ler = (f) => JSON.parse(readFileSync(join(dir, f), 'utf8'))[0];
const aneis = (g) => (g.type === 'Polygon' ? [g.coordinates] : g.coordinates).map((p) => p[0]);

function projetor(caixa, largura) {
  const [lon0, lat0, lon1, lat1] = caixa;
  const k = Math.cos(((lat0 + lat1) / 2) * Math.PI / 180);
  const escala = largura / ((lon1 - lon0) * k);
  const altura = (lat1 - lat0) * escala;
  return {
    altura: Math.round(altura),
    p: ([lon, lat]) => [((lon - lon0) * k * escala), ((lat1 - lat) * escala)],
  };
}
const caminho = (anel, p, min = 0.6) => {
  let out = '', ult = null;
  for (const c of anel) {
    const [x, y] = p(c);
    if (ult && Math.hypot(x - ult[0], y - ult[1]) < min) continue;
    out += (out ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
    ult = [x, y];
  }
  return out + 'Z';
};

// 1) Localizador: Pernambuco inteiro (só o continente; exclui Fernando de Noronha)
const pe = ler('pe.json');
const continente = aneis(pe.geojson).filter((a) => a.some(([lon]) => lon < -34.5));
const caixaPE = [-41.4, -9.5, -34.75, -7.25];
const loc = projetor(caixaPE, 600);
const estado = continente.map((a) => caminho(a, loc.p, 1.2)).join('');

// 2) Detalhe: Região Metropolitana do Recife e Zona da Mata Norte
const caixaDet = [-35.52, -8.26, -34.78, -7.36];
const det = projetor(caixaDet, 640);
const municipios = readdirSync(dir).filter((f) => f.startsWith('mun_')).map((f) => {
  const m = ler(f);
  const nome = f.replace(/^mun_|\.json$/g, '').replace(/_/g, ' ');
  return { nome, d: aneis(m.geojson).map((a) => caminho(a, det.p)).join('') };
});
const [x0, y0] = loc.p([caixaDet[0], caixaDet[3]]);
const [x1, y1] = loc.p([caixaDet[2], caixaDet[1]]);

writeFileSync(new URL('../src/data/mapa.json', import.meta.url), JSON.stringify({
  fonte: 'Polígonos © colaboradores do OpenStreetMap (ODbL), obtidos via Nominatim',
  localizador: { largura: 600, altura: loc.altura, estado, recorte: [x0, y0, x1 - x0, y1 - y0].map((n) => +n.toFixed(1)) },
  detalhe: { largura: 640, altura: det.altura, caixa: caixaDet, municipios },
}));
console.log('ok', municipios.length, 'municípios; detalhe', det.altura, 'px de altura');
