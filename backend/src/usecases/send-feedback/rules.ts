
import { SendFeedbackDTO } from '@/dto'
import { createValidatorRules } from '@/utils/create-validator-rules'

export const sendFeedbackRules = createValidatorRules<SendFeedbackDTO>({
  message: ['required', 'string'],
  resolutionId: ['required', 'string', {
    exists: ['challenge_resolutions', 'id']
  }],
  userId: ['required','string']
})
