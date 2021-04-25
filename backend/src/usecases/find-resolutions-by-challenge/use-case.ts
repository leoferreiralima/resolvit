import { ChallengeResolutionDTO, FindChallengeResolutionByIdDTO, ResponsePageDTO } from '@/dto'
import { prisma } from '@/utils/prisma'
import { validator } from '@/validators/validator-decorator'

import { findResolutionsByChallengeRules } from './rules'

const findResolutionsByChallengeUseCase = async ({ limit, offset, id }: FindChallengeResolutionByIdDTO): Promise<ResponsePageDTO<ChallengeResolutionDTO>> => {
  const where = {
    challenge: {
      id
    }
  }

  const total = await prisma.challengeResolution.count({ where })

  const resolutions = await prisma.challengeResolution.findMany({
    include: {
      user: {
        select: {
          name: true
        }
      }
    },
    where,
    orderBy: {
      createdAt: 'desc'
    },
    skip: offset,
    take: limit
  })

  return {
    total,
    data: resolutions.map<ChallengeResolutionDTO>(({ id, createdAt, user, resolutionLink }) => (
      { id, createdAt, user, resolutionLink }
    ))
  }
}

export const findResolutionsByChallenge = validator(findResolutionsByChallengeUseCase,findResolutionsByChallengeRules)
