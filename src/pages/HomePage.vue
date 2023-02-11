<script setup lang="ts">
import DuButton from '@components/DuButton/DuButton.vue'
import DuSelect from '@components/DuSelect/DuSelect.vue'
import DuDialog from '@components/DuDialog/DuDialog.vue';
import DuTitle from '@components/DuTitle/DuTitle.vue';
import { useVocabularyStore } from '@stores/vocabulary/index'
import { useSearchConditionStore } from '@stores/SearchConditon/index'
import DuMain from '@components/DuMain/DuMain.vue';
import { LEVELS } from '@const/level';
import { reactive } from 'vue';
import { useSearchConditionLocalStorage } from '@storages/SearchConditionStorage/index'
import { useRouter } from 'vue-router';

const router = useRouter()
const { reloadVocabularyList, initializeUnansweredList } = useVocabularyStore()
const { setParamsToLocalStorage, getParamsFromLocalStorage } = useSearchConditionLocalStorage()
const { searchConditionState, setParams } = useSearchConditionStore()
const levelItems = LEVELS.getList().map((level) => ({
  label: level.name,
  value: level.id
}))

// v-model用のローカルステート
const state = reactive({
  params: getParamsFromLocalStorage()
})

const onClickApplyButton = () => {
  setParams(state.params)
  setParamsToLocalStorage(state.params)
  reload()
}

const onClickStartButton = () => {
  initializeUnansweredList()
  router.push('/flash-card')
}

const reload = () => reloadVocabularyList(searchConditionState.params)

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
        <DuButton class="mb-4" :color="'primary'" size="lg" block @click="onClickStartButton">START</DuButton>
        <DuDialog title="単語の設定" @submit="onClickApplyButton">
          <DuSelect label="レベル" v-model="state.params.level" :item-list="levelItems" />
        </DuDialog>
      </div>
    </div>
  </DuMain>
</template>