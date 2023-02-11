
export default class Vocabulary {
  readonly id!: number
  readonly en_word!: string
  readonly jp_word!: string
  readonly level!: string
  readonly category!: string
  constructor(props: { id: number, en_word: string, jp_word: string, level: string, category: string }) {
    Object.assign(this, props)
  }
}