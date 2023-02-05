<script setup lang="ts">
import DuTitle from '@components/DuTitle/DuTitle.vue';
type EmitsType = {
  (event: 'submit'): void
  (event: 'cancel'): void
}

type PropsType = {
  title: string
}
const props = defineProps<PropsType>()
const emit = defineEmits<EmitsType>()

const onClickSubmitButton = () => emit('submit')
const onClickCancelButton = () => emit('cancel')
</script>

<template>
  <!-- The button to open modal -->
  <label for="my-modal" class="btn btn-primary btn-outline btn-block">setting</label>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <DuTitle :text="props.title" size="md" bold />

      <div class="py-4">
        <slot />
      </div>

      <div class="modal-action">
        <label for="my-modal" class="btn btn-primary btn-outline" @click="onClickCancelButton">閉じる</label>
        <label for="my-modal" class="btn btn-primary" @click="onClickSubmitButton">決定</label>
      </div>
    </div>
  </div>
</template>