// Linhas da tabela "Nação e Rural, lado a lado". Cada valor já tem fonte nas páginas de cada tradição.
export interface LinhaComparativo { aspecto: string; nacao: string; rural: string }

export const comparativo: LinhaComparativo[] = [
  { aspecto: 'Outros nomes', nacao: 'Maracatu de baque virado.', rural: 'Maracatu de baque solto, maracatu de orquestra, maracatu de trombone.' },
  { aspecto: 'Onde', nacao: 'Comunidades da periferia do Recife, de Olinda, de Igarassu e de Jaboatão dos Guararapes.', rural: 'Zona da Mata Norte (Nazaré da Mata, Aliança, Carpina, Goiana e outras cidades), além de Olinda e do Recife.' },
  { aspecto: 'Origem', nacao: 'Ligada às coroações de Reis do Congo feitas por irmandades negras no período colonial.', rural: 'Festas dos trabalhadores da cana nos engenhos, entre o fim do século XIX e o início do XX.' },
  { aspecto: 'Grupo mais antigo', nacao: 'Elefante, com fundação declarada em 1800 (tradição oral).', rural: 'Cambindinha de Araçoiaba (1914) e Cambinda Brasileira (1918).' },
  { aspecto: 'Como se chama o grupo', nacao: 'Nação: comunidade com sede, corte, linhagem e, em geral, terreiro.', rural: 'Maracatu, brinquedo ou brincadeira; quem brinca é o folgazão.' },
  { aspecto: 'Música', nacao: 'Batuque grande, só de percussão: alfaias, caixas, tarol, gonguê, mineiro; em algumas nações, agbê.', rural: 'Terno pequeno: bombo, tarol, gonguê, mineiro e porca, mais três ou quatro sopros (trombone, clarinete).' },
  { aspecto: 'Canto', nacao: 'Toadas (loas) puxadas e respondidas em coro.', rural: 'Versos improvisados pelo mestre, que alternam com a música do terno.' },
  { aspecto: 'Figura central', nacao: 'A corte real: rei e rainha sob o pálio.', rural: 'O caboclo de lança, com gola, surrão e guiada.' },
  { aspecto: 'Personagens próprios', nacao: 'Príncipes e princesas, porta-estandarte, guarda real, pajens.', rural: 'Arreiamá (caboclo de pena), Mateus, Catirina, burra.' },
  { aspecto: 'A boneca (calunga)', nacao: 'Sagrada, levada pela dama do paço; ligada aos ancestrais da nação.', rural: 'Também levada pela dama do paço, no miolo protegido do cortejo.' },
  { aspecto: 'Raiz religiosa', nacao: 'Terreiros de Xangô (candomblé nagô), Jurema e Umbanda, conforme a nação.', rural: 'Principalmente a Jurema Sagrada.' },
  { aspecto: 'Momentos fortes', nacao: 'Abertura do Carnaval no Marco Zero; Noite dos Tambores Silenciosos.', rural: 'Sambadas antes do Carnaval; Encontro de Maracatus em Nazaré da Mata.' },
  { aspecto: 'Organização', nacao: 'Associação dos Maracatus Nação de Pernambuco (AMANPE).', rural: 'Associação dos Maracatus de Baque Solto de Pernambuco, com sede em Aliança.' },
  { aspecto: 'Patrimônio', nacao: 'Patrimônio Cultural do Brasil (Iphan, 3/12/2014); candidato à Unesco.', rural: 'Patrimônio Cultural do Brasil (Iphan, 3/12/2014), em registro próprio.' },
];
