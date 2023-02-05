import { rest } from 'msw'
import vocabulary from '@mocks/Jsons/vocabulary.json'

export function mockGetVocabularyList() {
  // memo エンドポイントは仮の名前
  return rest.get('/vocabularies/', (_, res, ctx) => {


    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(vocabulary)
    )
  })
}