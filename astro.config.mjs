import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://ofins.github.io",
  base: "/ofins.github.io",
  output: "static",
});
