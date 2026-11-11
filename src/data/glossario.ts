// Glossário. "tradicao" indica onde o termo é usado: nacao, rural ou ambas (com sentidos próprios em cada uma).
export interface Termo {
  id: string;
  termo: string;
  tradicao: 'nacao' | 'rural' | 'ambas';
  definicao: string;
  pagina?: string;
}

export const glossario: Termo[] = [
  { id: 'agbe', termo: 'Agbê (abê, xequerê)', tradicao: 'nacao', definicao: 'Cabaça envolvida por uma rede de contas, sacudida no ritmo. No maracatu nação é um acréscimo recente, adotado por algumas nações e recusado por outras.', pagina: '/nacao/instrumentos-e-baque/' },
  { id: 'alfaia', termo: 'Alfaia', tradicao: 'nacao', definicao: 'Tambor grave de madeira, com pele dos dois lados, afinado por cordas. É a base do batuque do maracatu nação.', pagina: '/nacao/instrumentos-e-baque/' },
  { id: 'arreiama', termo: 'Arreiamá (caboclo de pena)', tradicao: 'rural', definicao: 'Personagem do baque solto com grande cocar de penas de pavão e uma machadinha nas mãos. Além do mestre, é o único que usa apito.', pagina: '/rural/personagens-e-indumentaria/' },
  { id: 'baianas', termo: 'Baianas', tradicao: 'ambas', definicao: 'Personagens femininas presentes nas duas tradições, cada uma com seu papel e sua roupa no cortejo.' },
  { id: 'baque-solto', termo: 'Baque solto', tradicao: 'rural', definicao: 'Nome do toque e da tradição do maracatu da Zona da Mata Norte, com terno pequeno de percussão e sopros. Também chamado maracatu de orquestra ou, por pesquisadores, maracatu rural.', pagina: '/rural/' },
  { id: 'baque-virado', termo: 'Baque virado', tradicao: 'nacao', definicao: 'Nome do toque e da tradição do maracatu nação. "Virado" quer dizer "dobrado": o toque feito por vários tambores ao mesmo tempo.', pagina: '/nacao/instrumentos-e-baque/' },
  { id: 'brincante', termo: 'Brincante', tradicao: 'ambas', definicao: 'Quem participa de uma brincadeira ou folguedo popular. Muitos integrantes do baque solto chamam o maracatu de "brinquedo" ou "brincadeira".' },
  { id: 'burra', termo: 'Burra', tradicao: 'rural', definicao: 'Figura cômica do baque solto: um brincante "monta" uma armação em forma de burra. Abre caminho junto com Mateus e Catirina.', pagina: '/rural/personagens-e-indumentaria/' },
  { id: 'caboclo-de-lanca', termo: 'Caboclo de lança', tradicao: 'rural', definicao: 'Figura central do maracatu de baque solto, com gola bordada de lantejoulas, surrão com chocalhos, chapéu de fitas e a guiada (lança).', pagina: '/rural/personagens-e-indumentaria/' },
  { id: 'calunga', termo: 'Calunga (boneca)', tradicao: 'ambas', definicao: 'Boneca levada pela dama do paço. No maracatu nação é sagrada e ligada aos ancestrais e à força espiritual da nação. No baque solto, a boneca também segue no miolo do cortejo.', pagina: '/nacao/corte-e-personagens/' },
  { id: 'catirina', termo: 'Catirina (Catita)', tradicao: 'rural', definicao: 'Personagem cômica do baque solto que abre o cortejo com Mateus e a burra.', pagina: '/rural/personagens-e-indumentaria/' },
  { id: 'dama-do-paco', termo: 'Dama do paço', tradicao: 'ambas', definicao: 'Personagem que leva a calunga (boneca). Existe nas duas tradições, com sentidos próprios em cada uma.' },
  { id: 'estandarte', termo: 'Estandarte (bandeira)', tradicao: 'ambas', definicao: 'Bandeira com o nome e os símbolos do grupo, levada à frente ou no miolo do cortejo.' },
  { id: 'fundamento', termo: 'Fundamento', tradicao: 'ambas', definicao: 'Base religiosa e espiritual de um grupo. Parte dele é reservada a quem é iniciado e não é explicada publicamente.', pagina: '/raizes-religiosas/' },
  { id: 'gola', termo: 'Gola', tradicao: 'rural', definicao: 'Peça bordada à mão com lantejoulas e miçangas sobre tecido, que cobre ombros, peito e costas do caboclo de lança.', pagina: '/rural/personagens-e-indumentaria/' },
  { id: 'gongue', termo: 'Gonguê', tradicao: 'ambas', definicao: 'Sino de metal tocado com uma baqueta. Aparece no batuque do maracatu nação e no terno do baque solto.' },
  { id: 'guiada', termo: 'Guiada', tradicao: 'rural', definicao: 'Lança de madeira, com cerca de 2 metros, coberta de fitas coloridas, carregada pelo caboclo de lança.', pagina: '/rural/personagens-e-indumentaria/' },
  { id: 'jurema', termo: 'Jurema Sagrada', tradicao: 'ambas', definicao: 'Religião de matriz indígena e afro-brasileira do Nordeste, que cultua mestres, caboclos e encantados. É a principal raiz religiosa do baque solto e também está presente em algumas nações.', pagina: '/raizes-religiosas/' },
  { id: 'mateus', termo: 'Mateus', tradicao: 'rural', definicao: 'Personagem cômico do baque solto, de roupa colorida e rosto pintado, que abre caminho para o cortejo.', pagina: '/rural/personagens-e-indumentaria/' },
  { id: 'mestre', termo: 'Mestre', tradicao: 'ambas', definicao: 'Quem conduz a música. Na nação, o mestre de batuque rege os tambores e puxa as toadas. No baque solto, o mestre de apito improvisa os versos.' },
  { id: 'mineiro', termo: 'Mineiro (ganzá)', tradicao: 'ambas', definicao: 'Chocalho de metal em forma de tubo. Aparece nas duas tradições.' },
  { id: 'nacao', termo: 'Nação', tradicao: 'nacao', definicao: 'Comunidade que mantém um maracatu de baque virado: tem sede, território, corte, vínculo religioso e linhagem. Não é o mesmo que um grupo percussivo.', pagina: '/nacao/' },
  { id: 'palio', termo: 'Pálio (umbela)', tradicao: 'nacao', definicao: 'Grande guarda-sol cerimonial que protege o rei e a rainha no cortejo do maracatu nação.', pagina: '/nacao/corte-e-personagens/' },
  { id: 'sambada', termo: 'Sambada', tradicao: 'rural', definicao: 'Encontro noturno do baque solto em que mestres se desafiam em versos improvisados, muitas vezes até o amanhecer.', pagina: '/rural/orquestra-e-sambada/' },
  { id: 'surrao', termo: 'Surrão', tradicao: 'rural', definicao: 'Armação presa às costas do caboclo de lança, coberta de lã, que carrega os chocalhos.', pagina: '/rural/personagens-e-indumentaria/' },
  { id: 'tarol', termo: 'Tarol e caixa', tradicao: 'ambas', definicao: 'Tambores de som agudo e seco, tocados com baquetas. Aparecem nas duas tradições.' },
  { id: 'terno', termo: 'Terno', tradicao: 'rural', definicao: 'O conjunto musical do baque solto: percussão (bombo, tarol, gonguê, mineiro, porca) e três ou quatro sopros.', pagina: '/rural/orquestra-e-sambada/' },
  { id: 'toada', termo: 'Toada (loa)', tradicao: 'nacao', definicao: 'Canto do maracatu nação, puxado pelo mestre ou por quem canta e respondido em coro.', pagina: '/nacao/instrumentos-e-baque/' },
  { id: 'xango', termo: 'Xangô', tradicao: 'nacao', definicao: 'Nome dado em Pernambuco ao candomblé de tradição nagô. Muitas nações de maracatu são ligadas a terreiros de Xangô.', pagina: '/raizes-religiosas/' },
];
