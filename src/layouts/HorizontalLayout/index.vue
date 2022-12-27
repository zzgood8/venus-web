<template>
  <n-layout has-sider class="h-full">
    <!-- 侧边栏 -->
    <n-layout-sider content-style="padding: 4px;">
      <AppLogo />
      <GlobalSider />
    </n-layout-sider>
    <n-layout class="h-full">
      <!-- 顶部栏 -->
      <n-layout-header>
        <GlobalHeader />
        <GlobalTab />
      </n-layout-header>
      <!-- 内容主体 -->
      <n-layout-content class="h-full" content-style="padding: 24px;">
        <GlobalContent />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { GlobalContent, GlobalHeader, GlobalSider, GlobalTab } from '@/layouts/components'
</script>

