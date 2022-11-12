/**
 * 团队中的成员有些开发嗜好是不一样的，需要保留一些开发者的自定义配置
 * 此文件为模板文件，根据项目/团队实际情况进行修改。
 * 此文件中的配置会被根目录下的 local.config.ts 覆盖。
 * local.config.ts 为本地开发配置文件，不应该提交到代码仓库。
 */

import localConfig from '../local.config'
import proxyLocations from './proxy.targets'

export interface customConfigOptions {
  // 是否打开浏览器
  open?: boolean
  // 开发服务器端口
  port?: number
  // 代理地址
  proxyTarget?: string
  // git commit 时是否自动修复
  lintAutoFix?: true
  // mock 接口代理地址
  mockTarget?: string
  // mock接口
  mockApiList?: string[]
  // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
  clearScreen?: boolean
  // 用哪个浏览器打开
  openBrowser?: String
}

/**
 * 不要修改这个文件的配置
 * 请在local.config.js 中覆盖
 */
const customConfig: customConfigOptions = {
  // 是否打开浏览器
  open: false,
  // 开发服务器端口
  port: 8080,
  // git commit 时是否自动修复
  lintAutoFix: true,
  // 需要mock的接口
  mockApiList: [],
  // mock 接口代理地址
  mockTarget: proxyLocations.mock_11,
  clearScreen: true,
  // 本地配置脚本，不提交
  ...localConfig,
}

export default customConfig
