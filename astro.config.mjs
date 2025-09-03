// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://melisati.github.io',
  base: '/BUT3TD',
  vite: {
    plugins: [tailwindcss()]
  }
});