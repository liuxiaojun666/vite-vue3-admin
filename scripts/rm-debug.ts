/* eslint-env node */
/**
 * 删除 debug 代码，在提交代码前执行
 * 1. 删除所有 console.log
 * 2. 删除所有 debugger
 */
import fs from 'fs'

const files = process.argv.slice(2)
files.forEach((filePath) => {
  if (filePath.includes('/scripts/')) return
  const oldText = fs.readFileSync(filePath, 'utf-8')
  const newText = oldText
    .replace(/console.log\(.*\)\n/g, '\n')
    .replace(/debugger\n/g, '\n')
  fs.writeFileSync(filePath, newText, 'utf-8')
})

export {}
