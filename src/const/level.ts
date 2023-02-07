const levels = {
  'ALL': {
    id: null,
    name: 'すべての単語'
  },
  BASIC: {
    id: '1',
    name: '超基本単語'
  },

  UNDER_SCORE_90: {
    id: '5',
    name: 'スコア90までの単語'
  },

  UNDER_SCORE_120: {
    id: '10',
    name: 'スコア120までの単語'
  },
} as const

const functions = {
  getList() {
    return [
      levels.ALL,
      levels.BASIC,
      levels.UNDER_SCORE_90,
      levels.UNDER_SCORE_120
    ]
  }
}


export const LEVELS = Object.assign(levels, functions)