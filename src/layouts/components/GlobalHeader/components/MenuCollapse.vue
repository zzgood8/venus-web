<template>
  <SvgIcon name="line-md:menu-fold-left" v-if="app.siderCollapse" />
  <SvgIcon name="line-md:menu-fold-right" v-else />
</template>

<script setup lang="ts">
import { useAppStore } from '@/store'

const app = useAppStore()
</script>
