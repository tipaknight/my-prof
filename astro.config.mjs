import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://email-verstka.netlify.app',
  integrations: [tailwind(), react()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});