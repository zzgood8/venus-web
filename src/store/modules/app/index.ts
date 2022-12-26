import { defineStore } from 'pinia'

interface AppState {
  /** 页面布局方式 */
  layoutMode: 'Horizontal' | 'Vertical'
}

export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({
    layoutMode: 'Horizontal'
  }),
  actions: {
    setLayoutMode(mode: 'Horizontal' | 'Vertical') {
      this.layoutMode = mode
    }
  }
})
