import { VocabularyResource } from "@resource/VocabularyResource";
import Vocabulary from "@models/vocabulary";

export function useGetVocabularyList() {
  const resource = new VocabularyResource()

  return async () => {
    const response = await resource.getVocabularyList()
    return response.map(res => new Vocabulary(res))
  }

}