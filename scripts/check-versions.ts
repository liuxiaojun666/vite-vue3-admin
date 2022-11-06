/* eslint-env node */
/**
 * 检查 Node.js 版本与 要求的版本是否一致
 */
const { engines } = require('../package')

const version = engines.node as string
if (
  process.version.substring(1).split('.')[0] !==
  version.substring(1).split('.')[0]
) {
  console.error(`Required node version ${version}, got: ${process.version}.`)
  process.exit(1)
}

export {}
