import { createApp } from 'vue'
import App from './App.vue'
import 'vfonts/Lato.css'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import './styles/base.less'

async function setupApp() {
  const app = createApp(App)
  await setupRouter(app)
  setupStore(app)
  app.mount('#app')
}

setupApp()
