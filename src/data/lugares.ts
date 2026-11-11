// Lugares do mapa. Coordenadas: Nominatim/OpenStreetMap (ODbL). Só entram municípios com grupo citado em fonte.
export interface Lugar {
  nome: string;
  tradicao: 'nacao' | 'rural';
  lat: number;
  lon: number;
  grupos: string;
  rotulo?: 'esquerda' | 'direita' | 'acima' | 'abaixo';
}

export const lugares: Lugar[] = [
  { nome: 'Recife', tradicao: 'nacao', lat: -8.0585, lon: -34.8848, grupos: 'Elefante, Leão Coroado, Estrela Brilhante, Porto Rico, Encanto do Pina e muitas outras nações', rotulo: 'direita' },
  { nome: 'Olinda', tradicao: 'nacao', lat: -7.9986, lon: -34.846, grupos: 'Nações e cortejos do Carnaval de Olinda', rotulo: 'direita' },
  { nome: 'Igarassu', tradicao: 'nacao', lat: -7.8354, lon: -34.9061, grupos: 'Estrela Brilhante de Igarassu', rotulo: 'direita' },
  { nome: 'Jaboatão dos Guararapes', tradicao: 'nacao', lat: -8.1752, lon: -34.9469, grupos: 'Nações citadas pelo Iphan', rotulo: 'direita' },
  { nome: 'Nazaré da Mata', tradicao: 'rural', lat: -7.7453, lon: -35.2286, grupos: 'Cambinda Brasileira, Estrela Brilhante, Coração Nazareno e outros', rotulo: 'esquerda' },
  { nome: 'Aliança', tradicao: 'rural', lat: -7.6026, lon: -35.2264, grupos: 'Estrela de Ouro; sede da Associação dos Maracatus de Baque Solto', rotulo: 'esquerda' },
  { nome: 'Araçoiaba', tradicao: 'rural', lat: -7.7857, lon: -35.0899, grupos: 'Cambindinha de Araçoiaba', rotulo: 'direita' },
  { nome: 'Carpina', tradicao: 'rural', lat: -7.8459, lon: -35.2539, grupos: 'Leão Vencedor', rotulo: 'esquerda' },
  { nome: 'Goiana', tradicao: 'rural', lat: -7.5606, lon: -34.9959, grupos: 'Leão da Serra', rotulo: 'direita' },
  { nome: 'Chã de Alegria', tradicao: 'rural', lat: -7.9959, lon: -35.2135, grupos: 'Leão Vencedor de Chã de Alegria', rotulo: 'esquerda' },
  { nome: 'Olinda', tradicao: 'rural', lat: -7.9986, lon: -34.846, grupos: 'Piaba de Ouro, criado por Mestre Salustiano', rotulo: 'esquerda' },
  { nome: 'Recife', tradicao: 'rural', lat: -8.0585, lon: -34.8848, grupos: 'Cruzeiro do Forte', rotulo: 'esquerda' },
];
