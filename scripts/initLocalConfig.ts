/**
 * 自动生成本地配置文件
 */
import path from 'path'
import fs from 'fs'
import resolveApp from './paths'
import tpl from '../config/local.config.tpl'

const localConfigPath = path.join(resolveApp('./'), 'local.config.ts')
if (!fs.existsSync(localConfigPath)) fs.writeFileSync(localConfigPath, tpl)
