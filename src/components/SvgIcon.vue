<template>
  <Icon :icon="name" style="font-size: 2em;"></Icon>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  name: string
}

defineProps<Props>()
</script>
