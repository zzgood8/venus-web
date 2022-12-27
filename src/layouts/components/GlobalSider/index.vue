<template>
  <n-menu :options="menuOptions" />
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { renderIcon } from '@/utils/common'

const menuOptions: MenuOption[] = [
  {
    label: '仪表盘',
    key: 'dashBoard',
    icon: renderIcon('icon-park:ad')
  }
]
</script>
