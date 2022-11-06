import { type RouteMeta as VRouteMeta } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta extends VRouteMeta {
    keepAlive?: boolean
    title: string
    code: string
  }
}
