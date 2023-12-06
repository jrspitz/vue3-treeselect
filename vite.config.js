import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


export default defineConfig({
  plugins: [
    vue(),
    vueJsx({})
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'vue3-treeselect',
      fileName: 'vue3-treeselect',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})