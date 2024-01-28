import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), react(), icon()],
  output: "server",
  adapter: cloudflare({
    runtime: {
      mode: "local",
      type: "pages"
    }
  })
});