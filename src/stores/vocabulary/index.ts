import { reactive, readonly } from 'vue'
import { defineStore } from 'pinia'
import { useGetVocabularyList } from '@functions/vocabulary/useGetVocabularyList'
import type VocabularyModel from 'src/models/vocabulary'

type StateType = {
  list: VocabularyModel[]
  count: number
  unansweredList: VocabularyModel[]
}

export const useVocabularyStore = defineStore('vocabulary', () => {
  const getVocabularies = useGetVocabularyList()
  const state = reactive<StateType>({
    list: [],
    count: 0,
    unansweredList: [],
  })

  const setVocabularyList = (vocabularies: VocabularyModel[]) => {
    state.list = vocabularies
    state.count = vocabularies.length
  }

  const reloadVocabularyList = async () => {
    const vocabularyList = await getVocabularies()
    setVocabularyList(vocabularyList)
  }

  const addUnansweredVocabulary = (vocabulary: VocabularyModel) => state.unansweredList.push(vocabulary)
  const initializeUnansweredList = () => state.unansweredList = []

  return { vocabularyState: readonly(state), setVocabularyList, reloadVocabularyList, addUnansweredVocabulary, initializeUnansweredList }
})
