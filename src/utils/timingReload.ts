import { ElMessage } from 'element-plus'

export default function timingReload() {
  diffVersion()
  cssJsImg404()
  setInterval(async () => {
    await diffVersion()
  }, 1000 * 30)
}

// 监听404错误事件
function cssJsImg404() {
  window.addEventListener(
    'error',
    function (e) {
      const target = e.target as HTMLElement
      const isElementTarget =
        target instanceof HTMLScriptElement ||
        target instanceof HTMLLinkElement ||
        target instanceof HTMLImageElement
      isElementTarget && diffVersion()
    },
    true
  )
}

// 刷新页面
function reload(msg = '长时间未刷新页面，即将刷新页面') {
  ElMessage.info(msg)
  setTimeout(() => {
    window.location.reload()
  }, 1000 * 3)
}

// 比较版本号
async function diffVersion() {
  const newVersion = await getVersion()
  const oldVersion = document.documentElement?.dataset?.version?.trim()
  // 有新版本
  if (newVersion !== oldVersion) return reload('检测到新版本，即将刷新页面')
}

// 获取最新版本号
function getVersion() {
  return fetch(import.meta.env.BASE_URL + `version.txt?_t=${Date.now()}`).then(
    (res) => {
      if (res.ok) {
        return res.body
          ?.getReader()
          .read()
          .then(({ value }) => {
            return new TextDecoder().decode(value)
          })
      } else {
        throw new Error('获取版本号失败')
      }
    }
  )
}
