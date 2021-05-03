import { FindResolutionByIdDTO } from '@/dto'
import { createValidatorRules } from '@/utils/create-validator-rules'

export const findChallengeResolutionByIdRules = createValidatorRules<FindResolutionByIdDTO>({
  id: ['required','string',{
    exists: ['challenge_resolutions','id']
  }]
})
