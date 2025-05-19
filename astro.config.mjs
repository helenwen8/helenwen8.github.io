import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
// import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Ensure static output
  integrations: [mdx(), sitemap(), tailwind(), partytown()],
  base: '/', // Set the base path to the root
  markdown: {
    extendDefaultPlugins: true
    // ,
    // rehypePlugins: [[autoNewTabExternalLinks, {
    //   domain: 'localhost:4321'
    // }]]
  },
  build: {
    outDir: './', // Output directly to the root of the repository
  },
});


// // https://astro.build/config
// export default defineConfig({
//   site: 'https://devolio.devaradise.com',
//   integrations: [mdx(), sitemap(), tailwind(), partytown()],
//   markdown: {
//     extendDefaultPlugins: true,
//     rehypePlugins: [[autoNewTabExternalLinks, {
//       domain: 'localhost:4321'
//     }]]
//   }
// });