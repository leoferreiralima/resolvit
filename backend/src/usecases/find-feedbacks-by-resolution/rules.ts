import { FindFeedbacksByResolutionDTO } from '@/dto'
import { createValidatorRules } from '@/utils/create-validator-rules'

export const findFeedbacksByResolutionRules = createValidatorRules<FindFeedbacksByResolutionDTO>({
  resolutionId: ['required', 'string', {
    exists: ['challenge_resolutions', 'id']
  }]
})
