import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
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
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    cssTarget: 'chrome61',
    base: './',
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
}))
