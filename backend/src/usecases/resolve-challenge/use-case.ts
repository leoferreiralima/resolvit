import { ResolveChallengeDTO } from '@/dto'
import { prisma } from '@/utils/prisma'
import { validator } from '@/validators/validator-decorator'

import { resolveChallengeRules } from './rules'

const resolveChallengeUseCase = async ({ userId, challengeId, resolutionLink }: ResolveChallengeDTO): Promise<void> => {
  await prisma.challengeResolution.create({
    data: {
      resolutionLink,
      challenge: {
        connect: {
          id: challengeId
        }
      },
      user: {
        connect: {
          email: userId
        }
      }
    }
  })
}

export const resolveChallenge = validator(resolveChallengeUseCase,resolveChallengeRules)
