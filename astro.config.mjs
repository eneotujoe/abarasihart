import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://abarasihart.com',

  integrations: [
    mdx(),
    tailwind(),
    image({
    serviceEntryPoint: '@astrojs/image/sharp'
    }),
    sitemap(),
  ],

});