import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import checker from 'vite-plugin-checker'
import eslintPlugin from 'vite-plugin-eslint'
import legacy from '@vitejs/plugin-legacy'
import htmlVersion from 'vite-plugin-html-version'
import topLevelAwait from 'vite-plugin-top-level-await'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import customConfig from './config/custom.config'
import proxyOptions from './config/proxy.config'
import redirect404page from 'vite-plugin-404-redirect'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const __filename = fileURLToPath(import.meta.url)
  const isProd = mode === 'production'
  const isDev = mode === 'development'
  const isTest = mode === 'test'
  const isGhPages = mode === 'gh-pages'

  return {
    base: env.BASE_URL,
    build: {
      cssTarget: 'chrome61',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/styles/element/index.scss" as *;`,
        },
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      checker({ vueTsc: true }),
      htmlVersion(),
      redirect404page(),
      // 只在开发环境开启 eslint
      {
        ...eslintPlugin({
          cache: false,
          fix: customConfig.lintAutoFix,
        }),
        apply: 'serve',
      },
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core'],
        resolvers: [ElementPlusResolver()],
        dts: true,
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: true,
      }),
      ElementPlus({
        useSource: true,
        defaultLocale: 'zh-cn',
      }),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      topLevelAwait(),
    ],
    server: {
      host: true,
      port: customConfig.port,
      cors: true,
      open: customConfig.open,
      proxy: proxyOptions,
    },
    preview: {
      host: true,
      cors: true,
      open: customConfig.open,
      proxy: proxyOptions,
    },
    json: {
      stringify: true,
    },
  }
})
