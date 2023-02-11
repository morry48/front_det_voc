<script setup lang="ts">
import DuButton from '@components/DuButton/DuButton.vue'
import DuMain from '@components/DuMain/DuMain.vue';
import DuTitle from '@components/DuTitle/DuTitle.vue';
import DuCollapse from '@components/DuCollapse/DuCollapse.vue';
import { useVocabularyStore } from '@stores/vocabulary/index'
import { reactive, computed } from 'vue';
import DuDivider from '@components/DuDivider/DuDivider.vue';
import { useRouter } from 'vue-router';
import { LEVELS } from '@const/level';
const router = useRouter()
const { vocabularyState, addUnansweredVocabulary, initializeUnansweredList } = useVocabularyStore()
if (!vocabularyState.list.length) router.push('/')

const state = reactive({
  isShowAnswer: false,
  isShowAllVocabularyList: false,
  counter: 0,
})

const currentVocabulary = computed(() => vocabularyState.list[state.counter])
const currentLevel = computed(() => {
  const level = LEVELS.getList().find((level) => level.id === currentVocabulary.value.level)?.name || 'レベル未設定'

  return level
})
const countInfo = computed(() => {
  return `${state.counter + 1} / ${vocabularyState.count}`
})

const allVocabularyButtonText = computed(() => state.isShowAllVocabularyList ? 'わからなかった単語だけ表示する' : '単語をすべて表示する')

const vocabularyListExceptionUnanswer = computed(() => {
  const unAnswerIds = vocabularyState.unansweredList.map((vocabulary) => vocabulary.id)
  return vocabularyState.list.filter((vocabulary) => !unAnswerIds.includes(vocabulary.id))
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

const onClickAgainButton = () => {
  state.counter = 0
  initializeUnansweredList()
}

const onClickShowAllButton = () => state.isShowAllVocabularyList = !state.isShowAllVocabularyList


</script>

<template>
  <DuMain class="overflow-auto">
    <div v-if="currentVocabulary" class="p-4 flex flex-col h-full">
      <div class="flex justify-between">
        <DuTitle :text="currentLevel" :size="'md'" />
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

        <DuButton class="mb-4 mt-10" :color="'primary'" size="lg" block>別の単語で続ける</DuButton>
        <DuButton class="mb-4" :color="'primary'" size="lg" block @click="onClickAgainButton">同じ単語でもう一周する</DuButton>
        <DuButton class="mb-4" :color="'primary'" outline size="lg" block @click="onClickShowAllButton">
          {{ allVocabularyButtonText }}
        </DuButton>
      </div>

      <DuDivider />

      <div class="p-4 flex flex-col h-full">
        <DuCollapse v-for="vocabulary, index in vocabularyState.unansweredList" class="mb-4"
          :show-text="vocabulary.en_word" :hide-text="vocabulary.jp_word" :key="index" />

        <div v-show="state.isShowAllVocabularyList">
          <DuCollapse v-for="vocabulary in vocabularyListExceptionUnanswer" class="mb-4" :show-text="vocabulary.en_word"
            :hide-text="vocabulary.jp_word" :key="vocabulary.id" />
        </div>
      </div>
    </div>
  </DuMain>

</template>