/**
 * 自动下载iconfont到项目目录中
 */
import _ from 'lodash'
import path from 'path'
import fs from 'fs'
import request from 'request'
import wget from 'wget'
import { iconList, iconDir } from '../config/icon.config'

const postUrl = (
  _url: string,
  fn: { (chunk: any): void; (arg0: any): void }
) => {
  request(
    _url,
    function (error: any, response: { statusCode: number }, body: any) {
      if (!error && response.statusCode === 200) {
        fn(body)
      } else {
        throw new Error('gen Icon error')
      }
    }
  )
}

const downIcon = (iconUrl: string, dir: any, filename: string, ext: string) => {
  postUrl('https:' + iconUrl, (chunk: string) => {
    let form = 0
    let to = form
    let urlList = []
    let count = 0
    while (form !== -1 && to !== -1) {
      count++
      if (count > 3000) throw new Error('gen icon failed')
      form = to + 1
      form = chunk.indexOf('url(', form)
      to = chunk.indexOf(')', form + 1)
      if (form !== -1 && to !== -1) {
        urlList.push(chunk.substr(form + 5, to - form - 6))
      }
    }
    urlList = _.uniq(urlList.map((_url) => _url.split('#')[0]))
    count = urlList.length
    urlList.forEach((_url: string) => {
      const __url = _url.split('?')[0]
      const { ext } = path.parse(__url)
      const filePath = path.join(dir, filename + ext)
      fs.existsSync(filePath) && fs.unlinkSync(filePath)
      if (__url[0] !== '/') return
      const download = wget.download('https:' + __url, filePath, {})
      chunk.split(_url).join('')
      download.on('error', function (err: any) {
        throw err
      })
    })
    urlList.forEach((_url: string) => {
      const strs = _url.split('?')[0].split('.')
      const type = strs[strs.length - 1]
      if (_url[0] !== '/') return
      chunk = chunk.replace(_url, './' + filename + '.' + type)
      chunk = chunk.replace(_url, './' + filename + '.' + type)
    })
    fs.writeFileSync(path.join(dir, filename + '.' + ext), chunk)
  })
}
function emptyDir(dir: string) {
  const files = fs.readdirSync(dir)
  files.forEach((file: string) => fs.unlinkSync(dir + '/' + file))
}
let indexFileContent = ''
iconList.forEach((item: { aliUrl: any; filename: any; ext: any }) => {
  emptyDir(iconDir)
  downIcon(item.aliUrl, iconDir, item.filename, item.ext)
  indexFileContent += `import './${item.filename}.${item.ext}'\n`
})
fs.writeFileSync(path.join(iconDir, 'index.ts'), indexFileContent)
