import {defineConfig} from "vite";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
})