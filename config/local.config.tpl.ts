/**
 * 自定义配置文件模板
 * 仅在第一次 npm install 时会在根目录下生成 local.config.ts
 */
export default `/**
* 全部配置项在 config/custom.config 中
*/
import type { customConfigOptions } from "./config/custom.config";
import proxyLocations from "./config/proxy.targets";

export default {
  // 启动时自动打开浏览器
  open: false,
  // 代理地址
  proxyTarget: proxyLocations.test_208,
  // mock 接口代理地址
  mockTarget: proxyLocations.mock_11,
  // lint 自动修复
  lintAutoFix: true,
  // mock 接口列表
  mockApiList: ["/api/xxx"],
} as customConfigOptions;
`
