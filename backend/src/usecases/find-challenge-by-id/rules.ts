import { FindChallengeByIdDTO } from '@/dto'
import { createValidatorRules } from '@/utils/create-validator-rules'

export const findChallengeByIdRules = createValidatorRules<FindChallengeByIdDTO>({
  id: ['required','string',{
    exists: ['challenges','id']
  }]
})
