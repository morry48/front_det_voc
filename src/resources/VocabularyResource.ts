import type { Nullable } from "@@types/Nullable";
import type Vocabulary from "src/models/vocabulary";
import BaseResource from "./BaseResource";

export type VocabularyParamsType = {
  level?: Nullable<string>
}

type GetVocabularyListResponseType = {
  vocabularies: Vocabulary[]
}
export class VocabularyResource extends BaseResource {

  constructor() {
    super()
  }

  getVocabularyList(params?: VocabularyParamsType) {
    return this.get<GetVocabularyListResponseType>('/vocabularies/', {
      params
    })
  }
}