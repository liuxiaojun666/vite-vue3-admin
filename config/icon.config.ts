/**
 * 此文件为iconfont自动下载的配置文件
 * 在iconfont 上复制项目的链接，在npm start 项目启动时会自动下载。运行 download:iconfont 也可以手动下载
 * 建议至少使用两个iconfont项目，一个用于项目中的彩色图标，一个用于项目中的单色图标
 * 后缀 ext 为js，是彩色图标。     使用 svg-icon 组件
 * 后缀 ext 为css，是单色图标，使用时可以修改颜色.   使用 class-icon 组件
 */
import resolveApp from '../scripts/paths'
const iconList = [
  {
    aliUrl: '//at.alicdn.com/t/c/font_3660376_wi9kgkysqbe.css',
    filename: 'iconfont', // 相同 ext 不可以有相同的 filename
    ext: 'css',
  },
  {
    aliUrl: '//at.alicdn.com/t/c/font_3660412_0zj94rk3lxz9.js',
    filename: 'iconfont', // 相同 ext 不可以有相同的 filename
    ext: 'js',
  },
]

const iconDir = resolveApp('src/assets/iconfont')
export { iconList, iconDir }
