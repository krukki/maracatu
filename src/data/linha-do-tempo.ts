// Linha do tempo com duas trilhas. "antes" marca os fatos anteriores ao nome "maracatu" (as coroações).
export interface Marco {
  ano: string;
  trilha: 'nacao' | 'rural' | 'ambas';
  titulo: string;
  texto: string;
  fonte?: string;
  antes?: boolean;
}

export const marcos: Marco[] = [
  { ano: 'Anos 1680', trilha: 'nacao', antes: true, titulo: 'Coroações no Rosário dos Pretos', texto: 'As anotações da Irmandade do Rosário dos Pretos do Recife já registram a coroação do Rei do Congo. É uma raiz do maracatu nação, mas ainda não tem esse nome.', fonte: 'silva-2011-clio' },
  { ano: '1782', trilha: 'nacao', antes: true, titulo: 'Rei e Rainha do Congo no Compromisso', texto: 'O Compromisso (estatuto) aprovado pela irmandade do Recife prevê "um Rei de Congo e uma Rainha".', fonte: 'silva-2011-clio' },
  { ano: '1800', trilha: 'nacao', titulo: 'Fundação do Elefante, segundo a tradição', texto: 'O Maracatu Nação Elefante tem como data de fundação 15 de novembro de 1800. É a data declarada pela própria nação, sem documento da época.', fonte: 'cravo-elefante' },
  { ano: '1840', trilha: 'ambas', titulo: 'A palavra "maracatu" no jornal', texto: 'O registro escrito mais antigo conhecido da palavra aparece no Diário de Pernambuco, em tom de desprezo.', fonte: 'transatlantic-maracatu' },
  { ano: '1861', trilha: 'nacao', titulo: 'Proibido em Olinda', texto: 'Uma postura municipal de Olinda proíbe "as danças dos pretos escravos, ou maracatu".', fonte: 'transatlantic-maracatu' },
  { ano: 'c. 1880–1910', trilha: 'rural', titulo: 'O baque solto nos engenhos', texto: 'Entre trabalhadores da cana da Zona da Mata Norte, brincadeiras como as cambindas se misturam a outros folguedos e formam o maracatu de baque solto.', fonte: 'souza-tcc-ufpe' },
  { ano: '1914', trilha: 'rural', titulo: 'Cambindinha de Araçoiaba', texto: 'Fundação do grupo de baque solto mais antigo de que se tem notícia, no Engenho Cotunguba.', fonte: 'fpe-encontro-30' },
  { ano: '1918', trilha: 'rural', titulo: 'Cambinda Brasileira', texto: 'Fundado em 5 de janeiro de 1918, no Engenho Cumbe, em Nazaré da Mata. Em 2026 completou 108 anos.', fonte: 'bdf-cambinda-108' },
  { ano: '1930–1945', trilha: 'ambas', titulo: 'Repressão e controle', texto: 'Terreiros de Xangô e de Jurema são perseguidos pela polícia, sobretudo no Estado Novo. A Federação Carnavalesca, criada em 1935, passa a organizar o Carnaval e pressiona o baque solto a imitar o baque virado.', fonte: 'bdf-dona-santa' },
  { ano: '1955', trilha: 'ambas', titulo: 'Dois baques no papel', texto: 'O maestro Guerra-Peixe publica "Maracatus do Recife" e registra a diferença entre baque virado e baque solto, chamado pelos brincantes de "maracatu de orquestra".', fonte: 'guerra-peixe-1955' },
  { ano: '1957', trilha: 'rural', titulo: 'O caso do Maracatu Indiano', texto: 'Por exigência da Federação Carnavalesca, o Maracatu Indiano é levado a trocar o baque solto pelo virado.', fonte: 'maracatuteca-indiano' },
  { ano: '1962', trilha: 'nacao', titulo: 'Morre Dona Santa', texto: 'Morre a rainha do Elefante. Segundo o Dicionário Cravo Albin, o Elefante foi o primeiro maracatu conduzido por uma matriarca. Em 1964, o acervo da nação é doado ao museu do então Instituto Joaquim Nabuco.', fonte: 'cravo-elefante' },
  { ano: 'Anos 1960', trilha: 'nacao', titulo: 'Noite dos Tambores Silenciosos', texto: 'Surge a cerimônia de homenagem aos ancestrais no Pátio do Terço, idealizada por Badia com Paulo Viana e Edvaldo Ramos. As fontes divergem sobre o ano exato.', fonte: 'fpe-tambores' },
  { ano: '1967', trilha: 'rural', titulo: 'Nasce o nome "rural"', texto: 'A antropóloga Katarina Real usa "maracatu rural" em livro. O nome pega entre pesquisadores; os brincantes preferem "baque solto".', fonte: 'real-1967' },
  { ano: '1990', trilha: 'rural', titulo: 'Primeiro Encontro de Maracatus', texto: 'Mestre Salustiano, que criou a Associação dos Maracatus de Baque Solto no fim dos anos 1980, inicia o Encontro anual.', fonte: 'fpe-encontro-30' },
  { ano: '1997', trilha: 'ambas', titulo: '1º de agosto, Dia do Maracatu', texto: 'Lei estadual cria o Dia Estadual do Maracatu, na data de nascimento de Mestre Luiz de França, do Leão Coroado.', fonte: 'lei-pe-11506' },
  { ano: '2004', trilha: 'rural', titulo: 'Coração Nazareno', texto: 'Mulheres de Nazaré da Mata criam o primeiro maracatu de baque solto formado só por mulheres.', fonte: 'bdf-coracao-nazareno' },
  { ano: '2014', trilha: 'ambas', titulo: 'Patrimônio Cultural do Brasil', texto: 'Em 3 de dezembro, o Iphan registra o Maracatu Nação e o Maracatu de Baque Solto, cada um com seu próprio registro.', fonte: 'palmares-2014' },
  { ano: '2024', trilha: 'ambas', titulo: 'Dia Nacional do Maracatu', texto: 'Lei federal torna o 1º de agosto o Dia Nacional do Maracatu.', fonte: 'lei-15018' },
  { ano: '2025', trilha: 'nacao', titulo: 'Candidatura à Unesco', texto: 'O Brasil entrega à Unesco o dossiê do Maracatu Nação como Patrimônio Cultural Imaterial da Humanidade. Até novembro de 2026, não havia decisão.', fonte: 'iphan-2025-unesco' },
  { ano: '2026', trilha: 'nacao', titulo: 'Título revalidado', texto: 'O Conselho do Iphan revalida o Maracatu Nação como Patrimônio Cultural do Brasil.', fonte: 'iphan-2026-video' },
];
