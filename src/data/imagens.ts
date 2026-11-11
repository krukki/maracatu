// Fotos usadas no site. Todas do Wikimedia Commons, com licença livre (CC BY ou CC BY-SA).
// Cada foto foi conferida visualmente e classificada por tradição; só aparece na página da sua tradição.
export interface Imagem {
  id: string;
  arquivo: string;
  tradicao: 'nacao' | 'rural';
  alt: string;
  legenda: string;
  autor: string;
  licenca: string;
  origem: string;
}

export const imagens: Imagem[] = [
  // Maracatu Nação
  {
    id: 'nacao-baianas', arquivo: 'nacao-baianas.jpg', tradicao: 'nacao',
    alt: 'Vista do alto de baianas de maracatu nação com saias douradas e rodadas, girando à noite.',
    legenda: 'Baianas de maracatu nação no Carnaval de 2014.',
    autor: 'Prefeitura de Olinda', licenca: 'CC BY 2.0',
    origem: 'https://commons.wikimedia.org/wiki/File:Maracatu_Na%C3%A7%C3%A3o_-_Recife,_Pernambuco,_Brazil.jpg',
  },
  {
    id: 'nacao-olinda-rosario', arquivo: 'nacao-olinda-rosario.jpg', tradicao: 'nacao',
    alt: 'Cortejos de maracatu nação reunidos à noite diante da fachada iluminada da Igreja do Rosário dos Pretos, em Olinda.',
    legenda: 'Nações de maracatu diante da Igreja de Nossa Senhora do Rosário dos Pretos, em Olinda.',
    autor: 'Prefeitura de Olinda', licenca: 'CC BY 2.0',
    origem: 'https://commons.wikimedia.org/wiki/File:Maracatus_na_Igreja_do_Ros%C3%A1rio_dos_Pretos_de_Olinda.jpg',
  },
  {
    id: 'nacao-rei-rainha', arquivo: 'nacao-rei-rainha.jpg', tradicao: 'nacao',
    alt: 'Rei e rainha do Maracatu Encanto da Alegria, com coroas e mantos bordados, sobre um palco iluminado.',
    legenda: 'Rei e rainha do Maracatu Encanto da Alegria na abertura do Carnaval do Recife.',
    autor: 'Dgreusard', licenca: 'CC BY-SA 4.0',
    origem: 'https://commons.wikimedia.org/wiki/File:DSC02729-Rei-rainha-Encanto-de-alegria-ouverture-carnaval.jpg',
  },
  {
    id: 'nacao-damas', arquivo: 'nacao-damas.jpg', tradicao: 'nacao',
    alt: 'Dama da corte de maracatu nação com vestido dourado de saia ampla e coroa, no meio do público, numa rua enfeitada.',
    legenda: 'Dama da corte em cortejo de maracatu nação no Recife.',
    autor: 'Dgreusard', licenca: 'CC BY-SA 4.0',
    origem: 'https://commons.wikimedia.org/wiki/File:DSC02906-MEA-Casa-Dona-Badia-14_03_04.jpg',
  },
  {
    id: 'nacao-dama-marco-zero', arquivo: 'nacao-dama-marco-zero.jpg', tradicao: 'nacao',
    alt: 'Integrante de maracatu nação com vestido roxo e dourado dançando no Marco Zero; ao fundo, batuqueiros de vermelho e branco.',
    legenda: 'Cortejo de maracatu nação no Marco Zero, no Recife Antigo.',
    autor: 'Arthur Perruci', licenca: 'CC BY-SA 4.0',
    origem: 'https://commons.wikimedia.org/wiki/File:DAMA_DO_PASSO.jpg',
  },
  {
    id: 'nacao-tambores-espera', arquivo: 'nacao-tambores-espera.jpg', tradicao: 'nacao',
    alt: 'Multidão em rua estreita do Recife à noite, com pálios e integrantes de maracatu nação aguardando para desfilar.',
    legenda: 'Nações aguardam a vez de desfilar na Noite dos Tambores Silenciosos, no Recife, em 2014.',
    autor: 'Dgreusard', licenca: 'CC BY-SA 4.0',
    origem: 'https://commons.wikimedia.org/wiki/File:DSC02914-Maracatus-attendant-de-defiler-Nuit_des_tambours_silencieux.jpg',
  },

  // Maracatu Rural
  {
    id: 'rural-caboclo-cana', arquivo: 'rural-caboclo-cana.jpg', tradicao: 'rural',
    alt: 'Caboclo de lança com cabeleira de fitas roxas, gola bordada colorida e a guiada coberta de fitas, diante de um canavial.',
    legenda: 'Caboclo de lança diante de um canavial, na Zona da Mata Norte.',
    autor: 'Hansfotos', licenca: 'CC BY-SA 4.0',
    origem: 'https://commons.wikimedia.org/wiki/File:Caboclo_de_Lan%C3%A7a_do_Maracatu_Rural.jpg',
  },
  {
    id: 'rural-caboclo-camelo', arquivo: 'rural-caboclo-camelo.jpg', tradicao: 'rural',
    alt: 'Rosto de um caboclo de lança de perto, com cabeleira de fitas, óculos escuros, um cravo branco na boca e a gola bordada.',
    legenda: 'Caboclo de lança com o cravo branco na boca.',
    autor: 'Paulo Camelo', licenca: 'CC BY 2.5',
    origem: 'https://commons.wikimedia.org/wiki/File:Caboclo_de_lan%C3%A7a.jpg',
  },
  {
    id: 'rural-coracao', arquivo: 'rural-coracao.jpg', tradicao: 'rural',
    alt: 'Cortejo do Maracatu Coração Nazareno na rua, com caboclas de lança de cabeleira rosa e baianas de saias coloridas.',
    legenda: 'Maracatu Coração Nazareno, formado só por mulheres, em Nazaré da Mata.',
    autor: 'Noelia Brito', licenca: 'CC BY-SA 4.0',
    origem: 'https://commons.wikimedia.org/wiki/File:MARACATU_CORA%C3%87%C3%83O_NAZARENO.jpg',
  },
  {
    id: 'rural-leao-serra', arquivo: 'rural-leao-serra.jpg', tradicao: 'rural',
    alt: 'Caboclo de lança em movimento numa rua de Goiana, com gola verde e cabeleira colorida; atrás, outros integrantes do cortejo.',
    legenda: 'Maracatu de Baque Solto Leão da Serra em Goiana, em 2025.',
    autor: 'Tianisa', licenca: 'CC BY-SA 4.0',
    origem: 'https://commons.wikimedia.org/wiki/File:Maracatu_de_Baque_Solto_Le%C3%A3o_da_Serra_-_Goiana_PE_2025.jpg',
  },
  {
    id: 'rural-mateus', arquivo: 'rural-mateus.jpg', tradicao: 'rural',
    alt: 'Mateus de rosto pintado, chapéu de couro e roupa de chita colorida, segurando um chicote, no meio do cortejo.',
    legenda: 'O Mateus no Carnaval de Nazaré da Mata, em 2016.',
    autor: 'Projeto Transite', licenca: 'CC BY-SA 4.0',
    origem: 'https://commons.wikimedia.org/wiki/File:O_Mateus_do_Maracatu_Rural_de_Nazar%C3%A9_da_Mata_-_PE_Carnaval_de_2016.jpg',
  },
  {
    id: 'rural-caboclos-grupo', arquivo: 'rural-caboclos-grupo.jpg', tradicao: 'rural',
    alt: 'Quatro caboclos de lança lado a lado numa avenida à noite, com cabeleiras de fitas vermelhas, douradas e verdes e golas bordadas.',
    legenda: 'Caboclos de lança no Carnaval de Pernambuco.',
    autor: 'Projeto Transite', licenca: 'CC BY-SA 2.0',
    origem: 'https://commons.wikimedia.org/wiki/File:Grupo_de_caboclos_de_lan%C3%A7a_no_carnaval_pernambucano.jpg',
  },
  {
    id: 'rural-parque', arquivo: 'rural-parque.jpg', tradicao: 'rural',
    alt: 'Esculturas gigantes e coloridas de caboclos de lança sobre um gramado, no Parque dos Lanceiros.',
    legenda: 'Esculturas de caboclos de lança no Parque dos Lanceiros, em Nazaré da Mata.',
    autor: 'Ministério Público de Pernambuco', licenca: 'CC BY 2.0',
    origem: 'https://commons.wikimedia.org/wiki/File:Parque_dos_lanceiros_-_Nazar%C3%A9_da_Mata_-_PE.jpg',
  },
];

export const imagemPorId = (id: string) => {
  const img = imagens.find((i) => i.id === id);
  if (!img) throw new Error(`Imagem não encontrada: ${id}`);
  return img;
};
