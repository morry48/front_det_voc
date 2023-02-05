<script setup lang="ts">

type PropsType = {
  showText: string
  hideText: string
}
const props = defineProps<PropsType>()

</script>

<template>
  <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium">
      {{ props.showText }}
    </div>
    <div class="collapse-content">
      {{ props.hideText }}
    </div>
  </div>
</template>