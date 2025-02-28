// import staticAdapter from "@astrojs/static";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: "/ofins.github.io/",
  output: "static",
  // adapter: staticAdapter(),
});
