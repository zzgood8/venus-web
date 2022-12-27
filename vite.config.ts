import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
        }
      ],
      dts: './src/types/auto-imports.d.ts'
    }),
    Components({
      resolvers: [NaiveUiResolver(), IconsResolver()],
      dts: './src/types/components.d.ts'
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true
    })
  ],
  server: {
    port: 9696
  },
  resolve: {
    alias: {
      '@': pathResolve('./src')
    }
  }
})
