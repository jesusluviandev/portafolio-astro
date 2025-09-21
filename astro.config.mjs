// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://jesusluviandev.github.io",
  base: "/portafolio-astro",
  vite: {
    plugins: [tailwindcss()],
  },
});
