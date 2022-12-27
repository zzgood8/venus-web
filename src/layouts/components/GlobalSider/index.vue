<template>
  <n-menu :options="menuOptions" :indent="20" />
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { renderIcon } from '@/utils/common'

const menuOptions: MenuOption[] = [
  {
    label: '仪表盘',
    key: 'dashBoard',
    icon: renderIcon('icon-park:ad'),
    children: [
      {
        label: '分析页',
        key: '1-1',
        icon: renderIcon('ic:baseline-system-security-update-good')
      },
      {
        label: '工作台',
        key: '1-2',
        icon: renderIcon('ic:outline-work')
      }
    ]
  },
  {
    label: '文档',
    key: '2',
    icon: renderIcon('material-symbols:document-scanner-outline-sharp'),
    children: [
      {
        label: 'vue文档',
        key: '2-1',
        icon: renderIcon('vscode-icons:file-type-vue')
      },
      {
        label: 'vite文档',
        key: '2-2',
        icon: renderIcon('vscode-icons:file-type-vite')
      }
    ]
  }
]
</script>
