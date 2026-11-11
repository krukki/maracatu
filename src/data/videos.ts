// Vídeos de canais oficiais, conferidos pelo oEmbed do YouTube em novembro de 2026.
export interface Video {
  id: string;
  titulo: string;
  canal: string;
  duracao: string;
  tradicao: 'nacao' | 'rural' | 'ambas' | 'mangue';
}

export const videos: Record<string, Video> = {
  'iphan-nacao': { id: 'uX5wx0hycwg', titulo: 'Maracatu Nação', canal: 'Iphan', duracao: '10 min', tradicao: 'nacao' },
  'iphan-baque-solto': { id: 'OlEcKMzCSoY', titulo: 'Maracatu de Baque Solto', canal: 'Iphan', duracao: '23 min', tradicao: 'rural' },
  'iphan-baque-solto-2': { id: 'XoaeZQ8nmSw', titulo: 'Maracatu Baque Solto', canal: 'Iphan', duracao: '29 min', tradicao: 'rural' },
  'tvbrasil-patrimonio': { id: 'N9HR9cm6ZDE', titulo: 'Maracatu Nação, Maracatu Baque Solto e Cavalo-Marinho recebem título de patrimônio', canal: 'TV Brasil', duracao: '25 s', tradicao: 'ambas' },
  'nz-maracatu-atomico': { id: 'pYWfLGi8f3w', titulo: 'Nação Zumbi: ensaio de "Maracatu Atômico"', canal: 'Nação Zumbi (Oficial)', duracao: '4 min', tradicao: 'mangue' },
  'nz-documentario': { id: 'j299EbU-UnQ', titulo: 'Chico Science, um caranguejo elétrico (documentário)', canal: 'Nação Zumbi (Oficial)', duracao: '1 h 26 min', tradicao: 'mangue' },
};
