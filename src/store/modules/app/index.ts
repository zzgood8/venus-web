import { defineStore } from 'pinia'

interface AppState {
  /** 页面布局方式 */
  layoutMode: 'Horizontal' | 'Vertical'
  /** 侧边栏是否折叠 */
  siderCollapse: boolean
}

export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({
    layoutMode: 'Horizontal',
    siderCollapse: false
  }),
  actions: {
    setLayoutMode(mode: 'Horizontal' | 'Vertical') {
      this.layoutMode = mode
    }
  }
})
