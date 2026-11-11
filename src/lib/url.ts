// Monta links internos respeitando o "base" do site (ex.: /maracatu/ no GitHub Pages).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(caminho: string): string {
  if (/^(https?:|mailto:|#)/.test(caminho)) return caminho;
  const limpo = caminho.replace(/^\//, '');
  return `${BASE}/${limpo}`;
}
