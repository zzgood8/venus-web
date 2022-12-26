import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { BasicLayout } from '@/layouts'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/test'
  },
  {
    path: '/login',
    component: BasicLayout,
    children: [
      {
        path: '/test',
        component: () => import('@/views/login/index.vue')
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

/** setup vue router. - [安装vue路由] */
export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
