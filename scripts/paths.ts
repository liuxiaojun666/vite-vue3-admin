import path from 'path'

const appDir = typeof process !== 'undefined' ? process.cwd() : ''
const resolveApp = (relativePath: string) => {
  return appDir ? path.resolve(appDir, relativePath) : relativePath
}

export default resolveApp
