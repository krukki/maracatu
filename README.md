# Dois Baques

Site educativo sobre os dois maracatus de Pernambuco: o **Maracatu Nação** (baque virado) e o **Maracatu Rural** (baque solto). As duas tradições são tratadas com o mesmo peso e nunca se misturam.

Trabalho escolar de Ronaldo Heitor, 4º semestre de Informática, IFMT, 2026.

Endereço depois de publicado: https://krukki.github.io/maracatu/

## Como rodar no computador

É preciso ter o [Node.js](https://nodejs.org/) 22 ou mais novo.

```bash
npm install        # instala as dependências (só na primeira vez)
npm run dev        # abre o site em http://localhost:4321/maracatu/ e atualiza ao salvar
npm run build      # gera o site final na pasta dist/
npm test           # verifica o site gerado (rode depois do build)
```

O `npm test` usa o Playwright e o Chromium que já vêm no ambiente de desenvolvimento. Ele confere:

- se há rolagem horizontal em 360, 390, 768 e 1280 px;
- acessibilidade com o axe-core (WCAG 2.1 AA), nos temas claro e escuro;
- se algum termo exclusivo de uma tradição aparece na página da outra;
- se os links internos funcionam.

## Onde editar cada coisa

| O que | Onde |
|---|---|
| Texto de cada página | `src/pages/` (arquivos `.mdx`: Markdown com componentes) |
| Fontes citadas | `src/data/fontes.ts` |
| Glossário | `src/data/glossario.ts` |
| Linha do tempo | `src/data/linha-do-tempo.ts` |
| Tabela comparativa | `src/data/comparativo.ts` |
| Fotos e créditos | `src/data/imagens.ts` (arquivos em `src/assets/fotos/`) |
| Vídeos | `src/data/videos.ts` |
| Lugares do mapa | `src/data/lugares.ts` |
| Menu e ordem das páginas | `src/data/navegacao.ts` |
| Cores, fontes e espaçamentos | `src/styles/global.css` |

### Citar uma fonte no texto

1. Cadastre a fonte em `src/data/fontes.ts`, com um `id`.
2. No `.mdx`, escreva `<Fonte id="o-id" />` logo depois da frase.

O número aparece no texto, a nota aparece na margem (no computador) e a fonte entra na lista "Fontes desta página".

### Outros componentes úteis no `.mdx`

- `<Termo id="calunga">calunga</Termo>`: liga a palavra ao glossário.
- `<Figura id="rural-mateus" />`: foto com legenda, autor e licença.
- `<VideoClique video="iphan-nacao" />`: vídeo que só carrega quando a pessoa clica.
- `<Aviso titulo="..." tipo="cuidado | nota | cruzamento">`: caixa de destaque. Use `cruzamento` quando uma página precisar citar algo da outra tradição, por exemplo "trombones não fazem parte do baque virado". O teste de não-mistura aceita esses termos só dentro desse aviso.

## Publicar no GitHub Pages

O fluxo `.github/workflows/deploy.yml` publica o site a cada push na branch `main`. Para ativar:

1. No GitHub, abra **Settings → Pages**.
2. Em **Build and deployment → Source**, escolha **GitHub Actions**.
3. Faça merge desta branch na `main`, ou rode o workflow manualmente em **Actions**.

O site é publicado em `/maracatu/`; essa configuração fica no `astro.config.mjs` (`site` e `base`).

## Pesquisa e decisões

- `docs/superpowers/specs/2026-11-10-dois-baques-design.md`: especificação do site (público, mapa, design system, política de fontes).
- `research_notes/`: notas da pesquisa, com as URLs das fontes e o que foi ou não confirmado.

## Scripts auxiliares

- `scripts/gerar-mapa.mjs`: gera `src/data/mapa.json` a partir de polígonos do OpenStreetMap.
- `scripts/gerar-og.mjs`: gera a imagem de compartilhamento `public/og.png`.
- `scripts/dev/`: capturas de tela e checagens manuais usadas na revisão.

## Licenças

- **Fotos:** Wikimedia Commons, com licenças CC BY ou CC BY-SA; os créditos estão em cada legenda e na página de fontes.
- **Mapa:** dados © colaboradores do OpenStreetMap (ODbL).
- **Desenhos, padrões gráficos e textos:** feitos para este trabalho.
