import { FindChallengeResolutionByIdDTO } from '@/dto'
import { createValidatorRules } from '@/utils/create-validator-rules'

export const findResolutionsByChallengeRules = createValidatorRules<FindChallengeResolutionByIdDTO>({
  id: ['required','string',{
    exists: ['challenges','id']
  }]
})
