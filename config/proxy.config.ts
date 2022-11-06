/**
 * 接口代理配置
 */
import type { ProxyOptions } from 'vite'
import customConfig from './custom.config.js'

const proxy: { [key: string]: ProxyOptions } = {
  // mock 接口代理
  ...customConfig.mockApiList?.reduce((acc, cur) => {
    acc[cur] = {
      target: customConfig.mockTarget,
      changeOrigin: true,
    }
    return acc
  }, {} as { [key: string]: ProxyOptions }),
  // 接口代理
  '/api': {
    target: customConfig.proxyTarget,
    changeOrigin: true,
  },
}

export default proxy
