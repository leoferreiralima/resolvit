import { ChallengeDTO, FindChallengeByCategoryDTO, ResponsePageDTO } from '@/dto'
import { prisma } from '@/utils/prisma'
import { validator } from '@/validators/validator-decorator'

import { findChallengeByCategoryRules } from './rules'

const findChallengesByCategoryUseCase = async ({ limit, offset, categoryId }: FindChallengeByCategoryDTO): Promise<ResponsePageDTO<ChallengeDTO>> => {
  const where = {
    categories: {
      every: {
        id: categoryId
      }
    }
  }

  const total = await prisma.challenge.count({ where })

  const challenges = await prisma.challenge.findMany({
    select: {
      id: true,
      name: true,
      difficulty: true
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
    data: challenges.map<ChallengeDTO>(({ id, name, difficulty }) => (
      { id, name, difficulty }
    ))
  }
}

export const findChallengesByCategory = validator(findChallengesByCategoryUseCase,findChallengeByCategoryRules)
