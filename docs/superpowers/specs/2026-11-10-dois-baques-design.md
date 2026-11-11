# Dois Baques: especificação do site

Data: 10/11/2026 · Branch: `claude/maracatu-pernambuco-site-soc0qf`
Autoria do trabalho: Ronaldo Heitor, 4º semestre INF, IFMT, 2026

## 1. Objetivo e critérios de sucesso

Site educativo, em pt-BR, sobre as duas tradições de maracatu de Pernambuco, com o mesmo peso:
**Maracatu Nação (baque virado)** e **Maracatu Rural (baque solto)**.

- **Público:** estudantes e professores (nível ensino médio), turistas e curiosos.
- **Ação esperada:** aprender e se aprofundar. Não há venda, formulário nem newsletter.
- **Maior risco declarado:** informação errada ou sem fonte.

O site está pronto quando:

1. Toda afirmação factual relevante (data, nome, origem) tiver fonte listada em `/fontes/`, e as divergências entre fontes estiverem ditas no texto.
2. As tradições nunca se misturarem: nenhum personagem, instrumento, cor ou imagem de uma aparece na página da outra. Elas só se encontram em História, Comparativo, Raízes religiosas e Fontes, sempre lado a lado. Um teste automático confere isso (seção 7).
3. Funcionar no celular: todas as páginas e recursos usáveis a partir de 360 px de largura, sem rolagem horizontal e com alvos de toque de pelo menos 44 × 44 px.
4. Atender WCAG 2.1 AA, sem erros no axe e com navegação completa por teclado.
5. Tirar 95 ou mais no Lighthouse (Desempenho, Acessibilidade, Boas práticas, SEO) em celular.
6. Ser publicável no GitHub Pages por fluxo automático.

## 2. Mapa do site (12 páginas)

| # | Rota | Página | Tema de cor |
|---|---|---|---|
| 1 | `/` | Início | comum (as duas paletas lado a lado) |
| 2 | `/historia/` | História e origens, com linha do tempo | comum |
| 3 | `/nacao/` | Maracatu Nação | Nação |
| 4 | `/nacao/corte-e-personagens/` | Corte e personagens | Nação |
| 5 | `/nacao/instrumentos-e-baque/` | Instrumentos e baque virado | Nação |
| 6 | `/rural/` | Maracatu Rural | Rural |
| 7 | `/rural/personagens-e-indumentaria/` | Personagens e indumentária | Rural |
| 8 | `/rural/orquestra-e-sambada/` | Orquestra e sambada | Rural |
| 9 | `/comparativo/` | Nação e Rural, lado a lado | comum |
| 10 | `/raizes-religiosas/` | Raízes religiosas | comum |
| 11 | `/alem-de-pernambuco/` | Além de Pernambuco e Mangue Beat | comum |
| 12 | `/fontes/` | Glossário, fontes e sobre o trabalho | comum |

Também haverá uma página 404 em pt-BR, que não conta como página de conteúdo.

O roteiro de cada página fica na seção 8.

## 3. Direção visual: "Dois Baques"

### Ideia central
A cor diz em qual tradição o visitante está. Cada tradição tem um **motivo gráfico original em SVG**, desenhado a partir de um objeto real da própria tradição:

- **Nação: o cordame da alfaia.** Os "V" das cordas que tensionam a pele do tambor entre os dois aros formam uma faixa em zigue-zague.
- **Rural: a gola do caboclo de lança.** Discos sobrepostos como lantejoulas, em escamas.

Esse motivo é a única ousadia visual do site. Aparece no topo de cada página da tradição, na capa e como divisor. Todo o resto fica quieto: papel, tinta, boa tipografia.

Nas páginas comuns, o topo mostra as duas faixas **justapostas, separadas por uma costura**, nunca fundidas.

### Cores (tokens)

Tema claro (padrão):

| Token | Hex | Uso | Contraste no papel |
|---|---|---|---|
| `--papel` | `#F6EFE2` | fundo | — |
| `--tinta` | `#1B1614` | texto | 15,7:1 |
| `--tinta-suave` | `#5F534B` | legendas, metadados | 6,5:1 |
| Nação `--encarnado` | `#B3261E` | links, destaques, texto | 5,7:1 ✓ |
| Nação `--ouro` | `#C8962A` | só preenchimento e motivo; texto sobre ele em tinta | 6,7:1 (tinta sobre ouro) |
| Nação `--azul-real` | `#1F3A8A` | faixas, títulos | 9,0:1 ✓ |
| Rural `--magenta` | `#C2187A` | links, destaques, texto | 5,0:1 ✓ |
| Rural `--turquesa` | `#0E8C8C` (motivo), `#0A6B6B` (texto) | faixas e texto | 5,5:1 ✓ (versão texto) |
| Rural `--amarelo` | `#F2B705` | só preenchimento e motivo; texto sobre ele em tinta | 9,9:1 (tinta sobre amarelo) |

Tema escuro: fundo `#17120F`, texto `#F1E8D8` (15,3:1). Os acentos passam para versões claras que mantêm AA: encarnado `#EC5A4E` (5,4:1), ouro `#E3B451`, azul `#94AEF0` (8,5:1), magenta `#F27BBB` (7,4:1), turquesa `#47C9C9` (9,3:1), amarelo `#F5C537`.

Cada página declara `data-baque="nacao" | "rural" | "comum"` no `<body>`. Isso define `--acento`, `--acento-texto` e `--acento-2`, e os componentes só usam esses tokens semânticos.

### Tipografia
- **Títulos:** *Gloock*, uma serifada de alto contraste com peso de cartaz. Lembra letreiro de estandarte e entalhe, e foge das serifadas que todo site usa.
- **Texto:** *Atkinson Hyperlegible Next* (variável, 200–800), criada pelo Braille Institute para máxima legibilidade. Escolhida pensando no público estudante e em leitura no celular.
- As fontes ficam hospedadas no próprio site (pacotes Fontsource), apenas com os subconjuntos latino e latino estendido.
- **Escala modular 1,25:** corpo 1,0625 rem em telas pequenas e 1,125 rem em telas grandes; entrelinha 1,6 no texto e 1,1 nos títulos.
- **Linha de leitura:** máximo de 68 caracteres.
- **Proibido:** caixa-alta em rótulos; uma palavra destacada no meio do título; sobretítulos ("eyebrows") genéricos; "→" em links; metadados separados por "·".

### Layout
- Mobile-first, em uma coluna de leitura.
- A partir de 1024 px entra uma **coluna de margem** à direita, para notas de fonte e legendas. As fontes ficam ao lado do parágrafo, como num livro.
- No celular, o número no texto leva à lista "Fontes desta página", no fim da página. (Decisão de implementação: mais robusto e acessível que `<details>` dentro de parágrafos.)
- Alinhamento à esquerda e sem justificação, por legibilidade.

```
CELULAR                     DESKTOP (≥1024px)
┌──────────────┐            ┌──────────────────────────────────────┐
│ Dois Baques ≡│            │ Dois Baques   Nação  Rural  Mais ▾ ◐ │
├▓▓▓▓▓▓▓▓▓▓▓▓▓▓┤ ← motivo   ├▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓┤
│ Título       │            │ Título da página                     │
│ resumo       │            │ resumo                               │
│              │            │                                      │
│ texto ...¹   │            │ texto texto texto ...¹   │ ¹ Fonte:  │
│ ▸ fonte 1    │            │ texto texto texto        │   Iphan…  │
│ [figura]     │            │ [figura grande ───────]  │ legenda   │
│ crédito      │            │                          │ crédito   │
│ ← ant. próx.→│            │ ← anterior      próxima →            │
└──────────────┘            └──────────────────────────────────────┘
```

**Capa:** dividida em duas metades (no celular, empilhadas), cada uma com o motivo, o nome da tradição, uma frase que a define e o caminho para a página dela. O título "Dois Baques" fica atravessado sobre a costura entre as duas.

### Movimento
Um único momento orquestrado: na capa, os dois motivos "entram" em pulso, como dois baques. Fora isso, só movimento em resposta a ações (abrir menu, expandir nota, filtrar a linha do tempo). Com `prefers-reduced-motion`, tudo fica estático.

### Imagens
- Ilustrações originais em SVG: motivos, alfaia, gonguê, agbê, gola, guiada, surrão, coroa, pálio.
- Fotos reais apenas de licença livre (Wikimedia Commons, Flickr CC, Agência Brasil), sempre com autor, licença e link visíveis na legenda. As mesmas informações vão para a lista de créditos em `/fontes/`.
- Cada foto é classificada como Nação ou Rural e só aparece na página da sua tradição.
- Nenhuma imagem gerada por IA. Nenhuma foto de momento ritual reservado.

## 4. Arquitetura técnica

- **Astro** (versão atual no npm: 7.x), gerando HTML estático com zero JavaScript por padrão.
- **Integrações:** `@astrojs/mdx` e `@astrojs/sitemap`. Imagens otimizadas com `astro:assets` (AVIF/WebP, `srcset`, `width`/`height` explícitos).
- **Conteúdo fácil de editar:** o texto de cada página fica em MDX, em `src/content/paginas/`, e os dados estruturados ficam em arquivos próprios em `src/data/`:
  - `fontes.ts`: id, autor, título, instituição, ano, URL e data de acesso.
  - `glossario.ts`: termo, tradição, definição curta, página onde é aprofundado.
  - `linha-do-tempo.ts`: ano, trilha (`nacao`, `rural` ou `ambas`), texto, id da fonte.
  - `lugares.ts`: nome, tradição, coordenadas, grupos de referência.
  - `imagens.ts`: arquivo, tradição, texto alternativo, autor, licença, URL de origem.
  - `videos.ts`: id do YouTube, título, canal, tradição, ano.
- **JavaScript mínimo, como ilhas:** botão de tema, menu do celular, filtro da linha do tempo e carregamento do vídeo ao clicar. Tudo continua usável sem JS: o menu tem link para âncora do rodapé, a linha do tempo mostra tudo e o vídeo vira link para o YouTube.
- **GitHub Pages:** `site: https://krukki.github.io`, `base: /maracatu`. Todos os links internos passam por um helper que aplica a base. A publicação usa o workflow `.github/workflows/deploy.yml` (actions oficiais do Pages).
- **SEO:** em cada página, `<html lang="pt-BR">`, title e description próprios, canonical, Open Graph e Twitter Card, imagem OG própria, JSON-LD (`WebSite` na capa; `Article` e `BreadcrumbList` nas internas), `sitemap-index.xml` e `robots.txt`.

## 5. Componentes

| Componente | Função |
|---|---|
| `BaseLayout` | `<head>` com SEO, link de pular para o conteúdo, cabeçalho, `<main>`, rodapé; recebe `baque` |
| `SiteHeader` | marca, Nação e Rural em destaque com a cor de cada uma, menu "Mais", botão de tema; no celular, painel de menu |
| `SiteFooter` | mapa completo do site, autoria, licença do conteúdo, aviso sobre as fontes |
| `Motivo` | SVG do cordame (Nação) ou da gola (Rural), em faixa ou em bloco |
| `PageHero` | título, resumo de uma frase, motivo da tradição, trilha de navegação |
| `Fonte` | chamada numerada que liga a `fontes.ts`; nota na margem no desktop e lista "Fontes desta página" no fim |
| `Termo` | link para o termo no glossário, com `title` acessível |
| `Figura` | `<figure>` com imagem otimizada, legenda, autor e licença |
| `VideoClique` | capa desenhada localmente; o iframe `youtube-nocookie` só carrega no clique; fallback em link |
| `LinhaDoTempo` | duas trilhas (Nação e Rural) e marcos compartilhados; filtro Ambas/Nação/Rural; no celular, coluna única com etiquetas |
| `Mapa` | SVG ilustrado de Pernambuco a partir da malha do IBGE: Recife, Olinda e Igarassu (Nação) e Zona da Mata Norte (Rural), com a lista de lugares em texto como alternativa acessível |
| `Comparativo` | tabela de duas colunas no desktop; no celular, cada linha vira um bloco com os dois valores rotulados |
| `FichaPersonagem` e `FichaInstrumento` | lista de definições com ilustração; layouts próprios por tradição, não cartões iguais |
| `Aviso` | destaque para cuidados ("não confundir com…", "parte reservada aos terreiros") |
| `NavPaginas` | anterior e próxima dentro da trilha da tradição |
| `TemaToggle` | claro/escuro; segue o sistema e lembra a escolha |

## 6. Acessibilidade e celular

- HTML semântico: um `<h1>` por página, hierarquia de títulos sem saltos, landmarks e link de pular para o conteúdo.
- Foco visível com 3 px de contorno no `--acento-texto`. Ordem de tabulação lógica. O menu do celular prende o foco enquanto aberto e fecha com Esc.
- Contraste AA conferido para cada par de cores nos dois temas (seção 3). Cor nunca é o único sinal: a tradição aparece também como texto ou etiqueta.
- Textos alternativos descritivos. SVGs decorativos com `aria-hidden`; SVGs informativos com `<title>` e `<desc>`.
- Vídeos com título, canal e duração antes do clique.
- Alvos de toque de 44 px ou mais; texto que aumenta até 200% sem quebrar o layout.

## 7. Verificação

- `astro check` e `astro build` sem erros.
- Script Playwright em todas as páginas, nas larguras 360, 390, 768 e 1280: sem rolagem horizontal, capturas de tela para revisão visual e axe-core com zero violações AA.
- Lighthouse (Chromium local) em celular, com meta de 95+.
- Verificador de links internos e âncoras.
- **Teste de não-mistura** (listas da pesquisa, `maracatu_rural.md`):
  - **Exclusivos do Rural:** caboclo de lança, guiada, arreiamá / caboclo de pena, Mateus, Catirina, burra, trincheira, gola, surrão, terno de sopros, sambada, folgazão.
  - **Exclusivos da Nação:** alfaia, baque virado, Reis do Congo, Noite dos Tambores Silenciosos, príncipe, princesa, guarda real, pajens.
  - **Regra:** o teste falha se um termo exclusivo de uma tradição aparecer na página da outra, salvo dentro de um `Aviso` marcado com `data-cruzamento` ("isso só existe no baque solto").
  - **Termos compartilhados não são proibidos:** calunga/boneca, dama do paço, baianas, rei, rainha, estandarte, mestre, Jurema. Eles existem nas duas tradições, com sentidos próprios.
  - **"Lanceiros" não entra na lista de proibidos.** A corte da Nação tem lanceiros, que não são caboclos de lança.
- Revisões finais: accessibility-review, design-critique e design-review, com correções, e verification-before-completion antes de dizer que terminou.

## 8. Política de fontes

A pesquisa (pasta `research_notes/`) passou por duas rodadas. A segunda conferiu os fatos nas fontes originais, mas alguns sites ficaram inacessíveis: o dossiê do Iphan, a Fundaj, o SciELO e o Redalyc. Por isso cada afirmação entra no site em um de três níveis:

1. **Confirmado com fonte aberta:** afirmado normalmente, com a nota de fonte.
2. **Tradição oral ou data reivindicada pelo grupo:** dito como tal. Exemplo: "o Elefante tem como data de fundação 1800, segundo a tradição da nação".
3. **Sem fonte aberta ou com fontes divergentes:** fica de fora ou aparece explicitamente como divergência. Exemplo: "as fontes datam a primeira Noite dos Tambores entre 1961 e 1965".

O que **não** entra como fato:

- coroações "em 1674" e o "registro de 1711";
- coroação de Dona Santa em 1947;
- peso e custo da gola;
- 1966 como fundação do Estrela de Ouro;
- 1989 do Maracatu Nação Pernambuco;
- 1938 como ato formal de fechamento de terreiros (o tema entra como repressão no Estado Novo, sem ato nem data).

A Associação dos Maracatus de Baque Solto entra como "fundada no fim dos anos 1980 por Mestre Salustiano; o primeiro Encontro foi em 1990".

**Religião:** o site diz que existe fundamento religioso e segredo, e para aí. Ficam de fora:

- preparo, ervas e bebidas;
- detalhes do calço;
- obrigações;
- o que acontece à meia-noite no Pátio do Terço, além de que é um momento de silêncio e homenagem aos ancestrais.

Linguagem: "religiões de matriz africana", "Jurema Sagrada", "povo de terreiro", "racismo religioso". Nunca "seita", "magia", "possessão" nem "macumba" como rótulo.

## 9. Roteiro de conteúdo por página

Cada página abre com uma frase que resume a ideia, segue em seções curtas com intertítulos que respondem a uma pergunta do leitor e fecha com "Para ir além" (próxima página da trilha e fontes principais).

**1. Início (`/`)**
- Capa dividida: "Dois Baques", com Nação de um lado e Rural do outro.
  - Nação: "batuque de alfaias e corte real, nas comunidades do Recife, Olinda e Igarassu".
  - Rural: "caboclos de lança, terno de sopros e versos de improviso, nos engenhos da Zona da Mata Norte".
- "Não é a mesma coisa": três diferenças em uma linha cada (som, personagens, território), com link para o Comparativo.
- Mapa ilustrado de onde cada tradição vive.
- "Patrimônio do Brasil desde 3 de dezembro de 2014": registros separados no mesmo dia.
- Caminhos de leitura: começar pela História, pela Nação ou pelo Rural.

**2. História e origens (`/historia/`)**
- **Antes do nome:** coroações de reis do Congo nas irmandades do Rosário dos Homens Pretos (século XVII, anos 1680).
- **O debate:** a versão tradicional da linha reta contra a historiografia recente (Mac Cord, Lima, Guillen), que reconhece o parentesco mas não a continuidade direta.
- **A palavra "maracatu":** etimologia incerta (hipóteses tupi e africanas); registro mais antigo conhecido em 22/12/1840, no *Diário de Pernambuco*, em tom pejorativo.
- **Repressão:** proibições no século XIX (postura de Olinda, 1861), terreiros perseguidos nos anos 1930 e no Estado Novo, e a Federação Carnavalesca (1935) disciplinando o Carnaval e pressionando o baque solto a imitar o virado (caso do Maracatu Indiano, 1957).
- **O baque solto nos engenhos:** fim do século XIX e início do XX, cambindas e outros folguedos; Cambindinha de Araçoiaba (1914) e Cambinda Brasileira (1918).
- **Os nomes:** Guerra-Peixe (1955) separa baque virado e baque solto; Katarina Real (1967) propõe "rural"; os brincantes dizem "baque solto" ou "maracatu de orquestra".
- **Quase desaparecer e renascer:** nos anos 1960 restavam poucas nações; a partir dos anos 1990 elas se multiplicam; a Associação do baque solto cresce de nove para cerca de cem grupos.
- **Reconhecimento:** 1º de agosto, Dia Estadual (1997) e Nacional (2024), em homenagem a Mestre Luiz de França; Iphan em 2014 e revalidação em 2026; candidatura do Maracatu Nação à Unesco enviada em 2025, ainda sem decisão.
- **Linha do tempo** com duas trilhas e marcos comuns. Os anteriores a 1840 ficam rotulados como "antes do maracatu: as coroações".

**3. Maracatu Nação (`/nacao/`)**
- **O que é uma nação:** comunidade, sede, terreiro, rainha, mestre e presidente; não é um grupo qualquer.
- **Onde estão:** Recife, Olinda, Igarassu e Jaboatão; entre 25 e cerca de 30 nações, conforme a fonte.
- **Nações de referência:** Elefante, Leão Coroado, Estrela Brilhante do Recife e de Igarassu, Porto Rico, Encanto do Pina e outras, com as datas como "fundação declarada pela nação".
- **Pessoas:** Dona Santa (Elefante, †1962), Mestre Luiz de França (Leão Coroado), Mestre Afonso Aguiar (†2018), Mãe Elda Viana (Porto Rico, coroada em 1980, †2025).
- **Quando ver:** abertura do Carnaval no Marco Zero, Noite dos Tambores Silenciosos (segunda-feira de Carnaval, Pátio do Terço), concurso, 1º de agosto e ensaios. Inclui um bloco "Como assistir com respeito", com recomendações de bom senso marcadas como tal.
- Vídeo do Iphan "Maracatu Nação"; fotos da trilha Nação.

**4. Corte e personagens (`/nacao/corte-e-personagens/`)**
- **O cortejo como corte real:** a ordem mais comum é estandarte, damas do paço com a calunga, nobres, baianas, rei e rainha sob o pálio e, fechando, o batuque. Avisa que ordem e lista variam entre nações.
- **Fichas:** rei, rainha, príncipe e princesa, damas do paço, porta-estandarte, baianas, lanceiros da corte, guarda real, pajens e batuqueiros.
- **A calunga:** boneca sagrada levada pela dama do paço, ligada aos ancestrais e à força espiritual da nação. Inclui os casos de Dona Joventina (no Museu do Homem do Nordeste desde 1996, reivindicada por duas nações) e das três calungas do Elefante. Os detalhes de fundamento ficam de fora.
- **Estandarte, pálio e cores:** só o que tem fonte.

**5. Instrumentos e baque virado (`/nacao/instrumentos-e-baque/`)**
- **Fichas ilustradas:** alfaia (macaíba ou compensado, pele, cordas e afinação), caixa ou tarol, gonguê, mineiro. Agbê e atabaque aparecem como "acréscimos recentes, adotados por algumas nações e recusados por outras".
- **"Virado" quer dizer "dobrado":** o toque com vários bombos, segundo Guerra-Peixe.
- **O mestre e o apito; as toadas** (solo e coro).
- **Baques:** Luanda, Arrasto, Martelo, Parada, Imalê. Os nomes vêm com o aviso de que a padronização é recente e cada nação tem os seus.
- Vídeo do Iphan.

**6. Maracatu Rural (`/rural/`)**
- **O que é:** brinquedo dos trabalhadores da cana na Zona da Mata Norte; por que se diz "baque solto" e "de orquestra"; "rural" é termo de pesquisadores.
- **Onde:** Nazaré da Mata ("terra do maracatu", com 18 a 19 grupos), Aliança (sede da Associação), Tracunhaém, Goiana, Glória do Goitá, Araçoiaba e Olinda. Os números divergem entre 90 e 130 grupos.
- **Grupos de referência:** Cambindinha de Araçoiaba (1914), Cambinda Brasileira (1918), Piaba de Ouro (Olinda, 1977), Estrela Brilhante de Nazaré (2001), Coração Nazareno (2004).
- **Pessoas:** Mestre Salustiano (1945–2008), Mestre Zé Duda (1939–2023), Mestra Gil (†2024); Barachinha e Anderson Miguel em atividade.
- **Mulheres no baque solto:** os papéis femininos eram feitos por homens; o Coração Nazareno é o maracatu feminino de Nazaré da Mata.
- **Quando ver:** ensaios e sambadas antes do Carnaval; Encontro em Nazaré da Mata (segunda e terça de Carnaval); Encontro Estadual.
- Vídeo do Iphan "Maracatu de Baque Solto"; fotos da trilha Rural.

**7. Personagens e indumentária (`/rural/personagens-e-indumentaria/`)**
- **Três blocos do cortejo:**
  - as figuras que abrem caminho: Mateus, Catirina e burra;
  - os caboclos: de lança e de pena (arreiamá, com machadinha);
  - o miolo: baianas, dama do paço com a boneca, estandarte, rei e rainha.
- **Caboclo de lança** em ilustração anotada: gola bordada de lantejoulas, surrão com chocalhos, chapéu com cabeleira de fitas, guiada (lança de fitas, com cerca de 2 m), cravo branco, óculos e rosto pintado. Sem peso nem custo.
- **Trincheiras e o caboclo de frente;** as manobras comandadas pelo mestre.
- **"Porta-machado":** não aparece nas fontes como personagem. A machadinha é do arreiamá (ver nota à parte).

**8. Orquestra e sambada (`/rural/orquestra-e-sambada/`)**
- **O terno:** bombo, tarol, gonguê, mineiro e porca na percussão, mais três ou quatro sopros (trombone, clarinete, às vezes trompete). Explica a alternância entre os versos do mestre e as respostas do terno.
- **Mestre e contramestre;** a improvisação. As formas de verso (marcha, samba curto, samba comprido, galope) entram como "formas citadas por pesquisadores", porque não tiveram confirmação em fonte aberta.
- **A sambada:** dois mestres, dois ternos, desafio até o amanhecer, nos meses antes do Carnaval.
- **Calendário do ciclo,** do ensaio ao Carnaval.
- Vídeo do Iphan "Maracatu Baque Solto".

**9. Comparativo (`/comparativo/`)**
- Tabela linha a linha:
  - nome e baque;
  - território;
  - origem;
  - quem brinca;
  - música (batuque só de percussão × terno com sopros);
  - figura central (corte real × caboclo de lança);
  - a calunga em cada uma;
  - religião (terreiros de Xangô, Jurema e Umbanda × Jurema Sagrada);
  - calendário;
  - organização (AMANPE × Associação dos Maracatus de Baque Solto);
  - patrimônio (registros separados em 2014).
- "Palavras iguais, sentidos diferentes": dama do paço, rei e rainha, lanceiros × caboclo de lança.

**10. Raízes religiosas (`/raizes-religiosas/`)**
- "Não é religião, mas tem fundamento": seções separadas para Nação e Rural.
- **Nação:** terreiros de Xangô (nome regional do candomblé nagô), Jurema e Umbanda; rainhas que são ialorixás; a calunga como ícone do fundamento; a Noite dos Tambores Silenciosos como homenagem aos ancestrais, com seus condutores (Raminho de Oxóssi, †2024; Jorge de Bessen desde 2025).
- **Rural:** Jurema Sagrada; a proteção do brincante antes do Carnaval e o cravo branco, nomeados mas sem detalhes, porque há segredo.
- **Perseguição e racismo religioso,** de ontem a hoje.
- **Como falar com respeito:** pequeno guia de termos.

**11. Além de Pernambuco e Mangue Beat (`/alem-de-pernambuco/`)**
- **Mangue Beat:** manifesto "Caranguejos com Cérebro" (1992, Fred Zero Quatro); Chico Science & Nação Zumbi (Chico: 1966–1997). Os tambores vieram do bloco afro Lamento Negro, não de uma nação. "Maracatu Atômico" é de Jorge Mautner e Nelson Jacobina (1974). O mangue cita e reinterpreta o maracatu, não o toca. Siba e a Fuloresta, com mestres do baque solto.
- **Grupos percussivos:** de 1997 em diante, pelo Brasil e pelo mundo; exemplos verificados.
- **Nação ou grupo?** A diferença entre comunidade e repertório; as críticas de mestres e pesquisadores.
- **Se você toca fora de Pernambuco:** boas práticas apresentadas como lições dos debates, não como norma oficial.
- **Destaque fixo:** "Desdobramento, não substituto".
- **Nota curta sobre o maracatu cearense:** outra tradição.
- Vídeos do canal oficial da Nação Zumbi.

**12. Glossário, fontes e sobre (`/fontes/`)**
- **Glossário:** cada termo com uma etiqueta (Nação, Rural ou as duas).
- **Fontes numeradas,** agrupadas por página.
- **Créditos de imagem:** autor, licença e link.
- **Sobre o trabalho:** Ronaldo Heitor, 4º semestre de INF, IFMT, 2026; objetivo e limites (o que não foi possível confirmar). Inclui um convite para correções.

### Mídia
- **Fotos:** 40 verificadas no Wikimedia Commons, todas CC BY ou CC BY-SA. Uso só as classificadas com segurança (Nação ou Rural) e confiro cada uma visualmente antes de publicar. Ficam de fora as "incertas" e as cenas encenadas sem aviso.
- **Faltam fotos livres** de close de alfaia, gonguê, agbê, calunga, burra e arreiamá. Esses entram como ilustração própria em SVG.
- **Vídeos:**
  - Nação: Iphan `uX5wx0hycwg`;
  - Rural: Iphan `OlEcKMzCSoY` e `XoaeZQ8nmSw`;
  - nota sobre o patrimônio, servindo às duas: TV Brasil `N9HR9cm6ZDE`;
  - Mangue Beat: Nação Zumbi `pYWfLGi8f3w` e `j299EbU-UnQ`.
  - Os vídeos de tradição "incerta" ficam de fora.
- **Mapa:** coordenadas do Nominatim (OSM, ODbL, com atribuição). Contorno do estado e dos municípios pela malha do IBGE; se a API seguir fora do ar, uso os polígonos do OSM.

## 10. Etapas de construção

1. **Base:** projeto Astro, GitHub Pages (base `/maracatu`), fontes, tokens de cor e tipografia, temas claro e escuro, `BaseLayout` com SEO, cabeçalho, rodapé e 404.
2. **Componentes:** `Motivo` (cordame e gola), `PageHero`, `Fonte`, `Termo`, `Figura`, `VideoClique`, `Aviso`, `NavPaginas`, `TemaToggle`.
3. **Dados:** `fontes.ts`, `glossario.ts`, `linha-do-tempo.ts`, `lugares.ts`, `imagens.ts`, `videos.ts`, preenchidos a partir das notas.
4. **Trilha Nação:** as páginas 3 a 5, com fichas e ilustrações (alfaia, gonguê, calunga estilizada, pálio).
5. **Trilha Rural:** as páginas 6 a 8, com fichas e ilustrações (caboclo de lança anotado, arreiamá, terno).
6. **Páginas comuns:** Início, História com `LinhaDoTempo`, Comparativo, Raízes religiosas, Além de Pernambuco, Fontes, e o `Mapa`.
7. **Fotos:** baixar, conferir visualmente, otimizar e creditar.
8. **Verificação:** testes (sem rolagem horizontal, axe, não-mistura, links), Lighthouse, revisões de acessibilidade e de design, correções.
9. **Publicação:** commit e push no branch, com o workflow do Pages pronto para você ativar.
