import sharp from 'sharp';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
const [dir, saida] = process.argv.slice(2);
const arqs = readdirSync(dir).filter((f) => f.endsWith('.jpg')).sort();
const W = 360, H = 270, COL = 3;
const tiles = await Promise.all(arqs.map(async (f, i) => {
  const img = await sharp(join(dir, f)).resize(W, H, { fit: 'contain', background: '#222' }).toBuffer();
  const rotulo = Buffer.from(`<svg width="${W}" height="24"><rect width="100%" height="100%" fill="#000" opacity="0.7"/><text x="6" y="17" font-size="13" fill="#fff" font-family="sans-serif">${i + 1}. ${f.slice(0, 44).replace(/&/g, '&amp;')}</text></svg>`);
  return { input: await sharp(img).composite([{ input: rotulo, top: 0, left: 0 }]).toBuffer(), left: (i % COL) * W, top: Math.floor(i / COL) * H };
}));
await sharp({ create: { width: W * COL, height: H * Math.ceil(arqs.length / COL), channels: 3, background: '#111' } }).composite(tiles).jpeg({ quality: 70 }).toFile(saida);
console.log(arqs.length);
