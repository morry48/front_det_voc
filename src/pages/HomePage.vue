<script setup lang="ts">
import DuButton from '@components/DuButton/DuButton.vue'
import DuDialog from '@components/DuDialog/DuDialog.vue';
import DuTitle from '@components/DuTitle/DuTitle.vue';
import { useVocabularyStore } from '@stores/vocabulary/index'
import DuMain from '@components/DuMain/DuMain.vue';

const { reloadVocabularyList } = useVocabularyStore()

const onClickButton = () => console.log('click')
const onClickCancel = () => console.log('cancel')

reloadVocabularyList()
</script>

<template>
  <DuMain>
    <div class="p-4 flex flex-col h-full">
      <div class="text-lg text-center mt-auto">
        <DuTitle :text="'DuoDuo!!'" :size="'xlg'" bold />
        <div class="my-6">
          DuoDuoとは、<br>Duolingo English Test用の単語帳アプリです🍎
        </div>
      </div>

      <div class="mt-auto">
        <DuButton class="mb-4" :color="'primary'" size="lg" block @click="$router.push('/flash-card')">START</DuButton>
        <DuDialog title="タイトル" @submit="onClickButton" @cancel="onClickCancel">
          ここにはダイアログのコンテンツが来る
        </DuDialog>
      </div>
    </div>
  </DuMain>
</template>