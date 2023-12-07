import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://email-verstka.netlify.app',
  integrations: [tailwind(), react(), robotsTxt({
    sitemap:
      [
        'https://email-verstka.netlify.app/sitemap-index.xml',
        'https://email-verstka.netlify.app/sitemap-0.xml',],
  }), sitemap({
    // configuration options
    entryLimit: 1000,
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().new,

  }),],
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});