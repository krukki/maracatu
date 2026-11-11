// Mapa do site: usado no cabeçalho, no rodapé, na navegação "anterior/próxima" e nos testes.
export type Baque = 'nacao' | 'rural' | 'comum';

export interface Pagina {
  rota: string;
  titulo: string;
  curto: string;
  baque: Baque;
  trilha?: 'nacao' | 'rural' | 'geral';
}

export const paginas: Pagina[] = [
  { rota: '/', titulo: 'Início', curto: 'Início', baque: 'comum', trilha: 'geral' },
  { rota: '/historia/', titulo: 'História e origens', curto: 'História', baque: 'comum', trilha: 'geral' },
  { rota: '/nacao/', titulo: 'Maracatu Nação', curto: 'Visão geral', baque: 'nacao', trilha: 'nacao' },
  { rota: '/nacao/corte-e-personagens/', titulo: 'Corte e personagens', curto: 'Corte e personagens', baque: 'nacao', trilha: 'nacao' },
  { rota: '/nacao/instrumentos-e-baque/', titulo: 'Instrumentos e baque virado', curto: 'Instrumentos e baque', baque: 'nacao', trilha: 'nacao' },
  { rota: '/rural/', titulo: 'Maracatu Rural', curto: 'Visão geral', baque: 'rural', trilha: 'rural' },
  { rota: '/rural/personagens-e-indumentaria/', titulo: 'Personagens e indumentária', curto: 'Personagens e indumentária', baque: 'rural', trilha: 'rural' },
  { rota: '/rural/orquestra-e-sambada/', titulo: 'Orquestra e sambada', curto: 'Orquestra e sambada', baque: 'rural', trilha: 'rural' },
  { rota: '/comparativo/', titulo: 'Nação e Rural, lado a lado', curto: 'Comparativo', baque: 'comum', trilha: 'geral' },
  { rota: '/raizes-religiosas/', titulo: 'Raízes religiosas', curto: 'Raízes religiosas', baque: 'comum', trilha: 'geral' },
  { rota: '/alem-de-pernambuco/', titulo: 'Além de Pernambuco e Mangue Beat', curto: 'Além de Pernambuco', baque: 'comum', trilha: 'geral' },
  { rota: '/fontes/', titulo: 'Glossário, fontes e sobre', curto: 'Glossário e fontes', baque: 'comum', trilha: 'geral' },
];

export const trilhaNacao = paginas.filter((p) => p.trilha === 'nacao');
export const trilhaRural = paginas.filter((p) => p.trilha === 'rural');
export const paginasGerais = paginas.filter((p) => p.trilha === 'geral' && p.rota !== '/');

/** Ordem de leitura sugerida, para os links "anterior" e "próxima". */
export const ordemLeitura = [
  '/', '/historia/',
  '/nacao/', '/nacao/corte-e-personagens/', '/nacao/instrumentos-e-baque/',
  '/rural/', '/rural/personagens-e-indumentaria/', '/rural/orquestra-e-sambada/',
  '/comparativo/', '/raizes-religiosas/', '/alem-de-pernambuco/', '/fontes/',
];

export function vizinhas(rota: string) {
  const i = ordemLeitura.indexOf(rota);
  const achar = (r?: string) => paginas.find((p) => p.rota === r);
  return { anterior: achar(ordemLeitura[i - 1]), proxima: achar(ordemLeitura[i + 1]) };
}
