<script setup lang="ts">
import { computed } from 'vue';

type ValueType = number | string | null

type PropsType = {
  itemList: {
    value: ValueType
    label: string
  }[]
  modelValue: ValueType
  label?: string
}

type EmitsType = {
  (event: 'update:modelValue', value: ValueType): void
}

const props = defineProps<PropsType>()
const emit = defineEmits<EmitsType>()

const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    return emit('update:modelValue', value)
  }
})

</script>
<template>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text text-lg">{{ props.label }}</span>
    </label>

    <select v-model="model" class="select select-lg select-bordered">
      <!-- <option disabled selected>Pick your favorite Simpson</option> -->
      <template v-for="item in props.itemList" :key="item.value">
        <option :value="item.value">{{ item.label }}</option>
      </template>
    </select>
  </div>
</template>