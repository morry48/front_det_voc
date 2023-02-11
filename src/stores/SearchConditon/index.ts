import { ref, computed, reactive, readonly } from 'vue'
import { defineStore } from 'pinia'
import type { Nullable } from "@@types/Nullable";
import { useSearchConditionLocalStorage } from '@storages/SearchConditionStorage/index'

export type VocabularySearchConditionType = {
  level: Nullable<string>;
};


export const useSearchConditionStore = defineStore('search-condition', () => {
  const { getParamsFromLocalStorage } = useSearchConditionLocalStorage()
  const state = reactive({
    params: getParamsFromLocalStorage()
  })

  const setParams = (params: VocabularySearchConditionType) => state.params = params

  return { searchConditionState: readonly(state), setParams }
})
