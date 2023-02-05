<script setup lang="ts">
import { RouterLink } from 'vue-router'

type PropsType = {
  size: 'xlg' | 'lg' | 'md'
  text: string
  bold?: boolean
}
const props = defineProps<PropsType>()

</script>

<template>
  <template v-if="props.size === 'xlg'">
    <h1 class="text-3xl" :class="{ 'font-bold': !!props.bold }">{{ props.text }}</h1>
  </template>

  <template v-if="props.size === 'lg'">
    <h2 class="text-2xl" :class="{ 'font-bold': !!props.bold }">{{ props.text }}</h2>
  </template>

  <template v-if="props.size === 'md'">
    <h3 class="text-xl" :class="{ 'font-bold': !!props.bold }">{{ props.text }}</h3>
  </template>

</template>