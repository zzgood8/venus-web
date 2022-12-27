import SvgIcon from '@/components/SvgIcon.vue'
import { h } from 'vue'

export function renderIcon(name: string) {
  return () => h(SvgIcon, { name: name })
}
