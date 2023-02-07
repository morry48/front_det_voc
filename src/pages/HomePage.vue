<script setup lang="ts">
import DuButton from '@components/DuButton/DuButton.vue'
import DuSelect from '@components/DuSelect/DuSelect.vue'
import DuDialog from '@components/DuDialog/DuDialog.vue';
import DuTitle from '@components/DuTitle/DuTitle.vue';
import { useVocabularyStore } from '@stores/vocabulary/index'
import DuMain from '@components/DuMain/DuMain.vue';
import { LEVELS } from '@const/level';
import { reactive } from 'vue';
import { useVocabularyLocalStorage } from '@storages/VocabularyStorage/index'

const { reloadVocabularyList } = useVocabularyStore()
const { getLevelFromLocalStorage, setLevelToLocalStorage } = useVocabularyLocalStorage()
const levelItems = LEVELS.getList().map((level) => ({
  label: level.name,
  value: level.id
}))

const state = reactive({
  level: getLevelFromLocalStorage()
})

const onClickApplyButton = () => {
  setLevelToLocalStorage(state.level)
  reload()
}

const reload = () => reloadVocabularyList({ level: state.level })

reload()
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
        <DuDialog title="単語の設定" @submit="onClickApplyButton">
          <DuSelect label="レベル" v-model="state.level" :item-list="levelItems" />
        </DuDialog>
      </div>
    </div>
  </DuMain>
</template>