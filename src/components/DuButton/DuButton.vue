<script setup lang="ts">
import type { ColorThemeType } from '@@types/Theme'

type ButtonSizeType = 'lg' | 'md' | 'sm' | 'xs'

type EmitsType = {
  (event: 'click'): void
}

type PropsType = {
  color: ColorThemeType
  size?: ButtonSizeType
  outline?: boolean
  loading?: boolean
  disabled?: boolean
  square?: boolean
  circle?: boolean
  block?: boolean
  link?: boolean
}

const props = defineProps<PropsType>()
const emit = defineEmits<EmitsType>()

const onClickButton = () => emit('click')

</script>

<template>
  <button class="btn" :class="{
    'btn-primary': props.color === 'primary',
    'btn-secondary': props.color === 'secondary',
    'btn-accent': props.color === 'accent',
    'btn-error': props.color === 'error',
    'btn-info': props.color === 'info',
    'btn-neutral': props.color === 'neutral',
    'btn-success': props.color === 'success',
    'btn-warning': props.color === 'warning',
    'btn-xs': props.size === 'xs',
    'btn-sm': props.size === 'sm',
    'btn-md': !props.size || props.size === 'md',
    'btn-lg': props.size === 'lg',
    'btn-outline': props.outline,
    'btn-loading': props.loading,
    'btn-disabled': props.disabled,
    'btn-block': props.block,
    'btn-square': props.square,
    'btn-circle': props.circle,
    'btn-link': props.link,
  }" @click="onClickButton">
    <slot />
  </button>
</template>