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
- No celular, cada nota vira uma chamada numerada que abre logo abaixo do parágrafo, com `<details>`.
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
| `Fonte` | chamada numerada que liga a `fontes.ts`; nota na margem no desktop e `<details>` no celular |
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
- **Teste de não-mistura:** cada tradição tem uma lista de termos exclusivos. Na Nação, por exemplo, *calunga*, *alfaia*, *agbê*, *dama do paço* e *baque virado*; no Rural, *caboclo de lança*, *gola*, *guiada*, *surrão*, *mateus*, *catirina*, *sambada* e *orquestra de metais*. O teste falha se um termo exclusivo do Rural aparecer em página da Nação, ou o contrário, fora de um `Aviso` marcado com `data-cruzamento`.

**Atenção:** a lista acima é provisória. Pelo prompt do brief, a calunga também existe no Rural ("a boneca"), o que precisa ser confirmado. A lista final sai da pesquisa e fica restrita a termos realmente exclusivos.

- Revisões finais: accessibility-review, design-critique e design-review, com correções, e verification-before-completion antes de dizer que terminou.

## 8. Roteiro de conteúdo por página

*(Preenchido a partir da pesquisa. Ver seção seguinte.)*
