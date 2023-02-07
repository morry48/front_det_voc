import { VocabularyResource } from "@resource/VocabularyResource";
import type { VocabularyParamsType } from "@resource/VocabularyResource";
import Vocabulary from "@models/vocabulary";

export function useGetVocabularyList() {
  const resource = new VocabularyResource()

  return async (params: VocabularyParamsType = {}) => {
    const response = await resource.getVocabularyList(params)
    return response.map(res => new Vocabulary(res))
  }

}