
import { ResolveChallengeDTO } from '@/dto'
import { createValidatorRules } from '@/utils/create-validator-rules'

export const resolveChallengeRules = createValidatorRules<ResolveChallengeDTO>({
  resolutionLink: ['required', 'string', 'url'],
  challengeId: ['required', 'string', {
    exists: ['challenges', 'id']
  }],
  userId: ['required','string']
})
