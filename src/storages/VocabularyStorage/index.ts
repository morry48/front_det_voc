import type { Nullable } from "@@types/Nullable";

export type VocabularyStorageType = {
  level: Nullable<string>;
};

const localStorageDefaultValue: VocabularyStorageType = {
  level: null
};

export const keyBase = 'det/vocabulary';

export function useVocabularyLocalStorage() {

  const useStorage = () => {
    const nullableStr = window.localStorage.getItem(keyBase);
    const storage = nullableStr ? JSON.parse(nullableStr) as VocabularyStorageType : { ...localStorageDefaultValue };
    return storage
  }

  const getLevelFromLocalStorage = () => {
    const storage = useStorage()
    return storage.level
  }

  const setLevelToLocalStorage = (level: Nullable<string>) => {
    const storage = useStorage()
    storage.level = level
    window.localStorage.setItem(keyBase, JSON.stringify(storage));
  }

  return {
    getLevelFromLocalStorage,
    setLevelToLocalStorage
  }
};