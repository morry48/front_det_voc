<script setup lang="ts">
import DuButton from '@components/DuButton/DuButton.vue'
import DuMain from '@components/DuMain/DuMain.vue';
import DuTitle from '@components/DuTitle/DuTitle.vue';
import DuCollapse from '@components/DuCollapse/DuCollapse.vue';
import { useVocabularyStore } from '@stores/vocabulary/index'
import { reactive, computed } from 'vue';
import DuDivider from '@components/DuDivider/DuDivider.vue';

const { vocabularyState, addUnansweredVocabulary, initializeUnansweredList } = useVocabularyStore()
const state = reactive({
  isShowAnswer: false,
  counter: 0,
})

const currentVocabulary = computed(() => vocabularyState.list[state.counter])
const countInfo = computed(() => {
  return `${state.counter + 1} / ${vocabularyState.count}`
})
const onClickNextButton = () => {
  state.counter++
  updateShowAnswer(false)
}

const updateShowAnswer = (isShow: boolean) => state.isShowAnswer = isShow
const onClickUnAnswerButton = () => {
  const vocabulary = currentVocabulary.value
  updateShowAnswer(true)
  addUnansweredVocabulary(vocabulary)
}

initializeUnansweredList()

</script>

<template>
  <DuMain class="overflow-auto">
    <div v-if="currentVocabulary" class="p-4 flex flex-col h-full">
      <div class="text-right">
        <DuTitle :text="countInfo" :size="'md'" />
      </div>
      <div class="text-lg text-center mt-auto h-18">
        <DuTitle :text="currentVocabulary.en_word" :size="'xlg'" bold />
        <div v-show="state.isShowAnswer">
          <DuTitle :text="currentVocabulary.jp_word" :size="'lg'" bold />
        </div>
      </div>

      <div class="mt-auto h-48">
        <div v-show="state.isShowAnswer">
          <DuButton class="mb-8" :color="'primary'" size="lg" block @click="onClickNextButton">次へ</DuButton>
        </div>
        <div v-show="!state.isShowAnswer">
          <DuButton class="mb-8" :color="'primary'" size="lg" block @click="onClickNextButton">わかる！！</DuButton>
          <DuButton class="mb-8" :color="'warning'" size="lg" outline block @click="onClickUnAnswerButton">ワカラナイ
          </DuButton>
        </div>
      </div>
    </div>

    <div class="p-4" v-if="state.counter + 1 > vocabularyState.count">
      <div class="text-center">
        <DuTitle size="xlg" text="結果" />

        <div class="text-lg">
          わからなかった単語: <span class="text-3xl">{{ vocabularyState.unansweredList.length }}</span> 個
        </div>
      </div>

      <DuDivider />

      <div class="p-4 flex flex-col h-full">
        <DuCollapse v-for="vocabulary, index in vocabularyState.unansweredList" class="mb-4"
          :show-text="vocabulary.en_word" :hide-text="vocabulary.jp_word" :key="index" />

      </div>
    </div>
  </DuMain>

</template>