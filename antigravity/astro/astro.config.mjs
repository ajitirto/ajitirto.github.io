import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://ajitirto.github.io',
  // base: '/antigravity/astro',
  base: isGitHubPages ? '/antigravity' : '/',
});
