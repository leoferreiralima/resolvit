import { ChallengeResolutionDTO, FindResolutionByIdDTO } from '@/dto'
import { prisma } from '@/utils/prisma'
import { validator } from '@/validators/validator-decorator'

import { findChallengeResolutionByIdRules } from './rules'

const findChallengeResolutionByIdUseCase = async ({ id }: FindResolutionByIdDTO): Promise<ChallengeResolutionDTO> => {
  const { resolutionLink, createdAt, user } = await prisma.challengeResolution.findUnique({
    include: {
      user: {
        select: {
          name: true
        }
      }
    },
    where: {
      id
    }
  })

  return {
    id, resolutionLink, createdAt, user
  }
}

export const findChallengeResolutionById = validator(findChallengeResolutionByIdUseCase,findChallengeResolutionByIdRules)
