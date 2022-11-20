import { createApp } from 'vue'
import store from '@/stores'
import App from './App.vue'
import router from './router'
import beforeEntry from './beforeEntry'
import timingReload from './utils/timingReload'
import './assets/iconfont'
import './styles/index.scss'

if (!import.meta.env.DEV) {
  timingReload()
}

const app = createApp(App)
app.use(store)
await beforeEntry()
app.use(router)
app.mount('#app')
