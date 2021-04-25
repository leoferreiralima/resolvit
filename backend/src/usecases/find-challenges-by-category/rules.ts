import { FindChallengeByCategoryDTO } from '@/dto'
import { createValidatorRules } from '@/utils/create-validator-rules'

export const findChallengeByCategoryRules = createValidatorRules<FindChallengeByCategoryDTO>({
  categoryId: ['required','string',{
    exists: ['categories','id']
  }]
})
