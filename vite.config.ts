import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@resource": fileURLToPath(new URL("./src/resources", import.meta.url)),
      "@mocks": fileURLToPath(new URL("./src/mocks", import.meta.url)),
      "@functions": fileURLToPath(new URL("./src/functions", import.meta.url)),
      "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@const": fileURLToPath(new URL("./src/const", import.meta.url)),
      "@models": fileURLToPath(new URL("./src/models", import.meta.url)),
      "@@types": fileURLToPath(new URL("./src/types", import.meta.url)),
    },
  },
  server: {
    port: 3000
  }
})
