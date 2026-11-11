// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Publicado no GitHub Pages: https://krukki.github.io/maracatu/
export default defineConfig({
  site: 'https://krukki.github.io',
  base: '/maracatu',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  build: { inlineStylesheets: 'auto' },
});
