<template>
  <component :is="app.layoutMode"></component>
</template>

<script setup lang="ts">
import Horizontal from './HorizontalLayout/index.vue'
import Vertical from './VerticalLayout/index.vue'
import { useAppStore } from '@/store'

const app = useAppStore()
</script>

<script lang="ts">
export default {
  components: { Horizontal, Vertical }
}
</script>
