import type { Nullable } from "@@types/Nullable";
import type Vocabulary from "src/models/vocabulary";
import BaseResource from "./BaseResource";

export type VocabularyParamsType = {
  level?: Nullable<string>
}
export class VocabularyResource extends BaseResource {

  constructor() {
    super()
  }

  getVocabularyList(params?: VocabularyParamsType) {
    return this.get<Vocabulary[]>('/vocabularies/', {
      params
    })
  }
}