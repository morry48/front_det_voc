import type { VocabularySearchConditionType } from "@stores/SearchConditon";

export type VocabularyStorageType = {
  params: VocabularySearchConditionType
};

const localStorageDefaultValue: VocabularyStorageType = {
  params: {
    level: null
  }
};

export const keyBase = 'det/search-condition';

export function useSearchConditionLocalStorage() {

  const useStorage = () => {
    const nullableStr = window.localStorage.getItem(keyBase);
    const storage = nullableStr ? JSON.parse(nullableStr) as VocabularyStorageType : { ...localStorageDefaultValue };
    return storage
  }

  const getParamsFromLocalStorage = () => {
    const storage = useStorage()
    return storage.params
  }

  const setParamsToLocalStorage = (params: VocabularySearchConditionType) => {
    const storage = useStorage()
    storage.params = params
    window.localStorage.setItem(keyBase, JSON.stringify(storage));
  }

  return {
    getParamsFromLocalStorage,
    setParamsToLocalStorage
  }
};