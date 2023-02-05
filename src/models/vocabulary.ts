
export default class Vocabulary {
  readonly id!: number
  readonly en_word!: string
  readonly jp_word!: string
  readonly level!: number
  readonly category!: string
  constructor(props: { id: number, en_word: string, jp_word: string, level: number, category: string }) {
    Object.assign(this, props)
  }
}