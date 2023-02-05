import type Vocabulary from "src/models/vocabulary";
import BaseResource from "./BaseResource";

export class VocabularyResource extends BaseResource {

  constructor() {
    super()
  }

  getVocabularyList() {
    return this.get<Vocabulary[]>('/vocabularies/')
  }
}