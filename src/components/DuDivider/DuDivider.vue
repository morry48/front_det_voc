<script setup lang="ts">

type PropsType = {
  text?: string
}
const props = defineProps<PropsType>()

</script>

<template>
  <div class="divider">{{ props.text }}</div>
</template>