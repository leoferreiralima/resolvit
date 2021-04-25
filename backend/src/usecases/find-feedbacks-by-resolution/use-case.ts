import { FeedbackDTO, FindFeedbacksByResolutionDTO, ResponsePageDTO } from '@/dto'
import { prisma } from '@/utils/prisma'
import { validator } from '@/validators/validator-decorator'

import { findFeedbacksByResolutionRules } from './rules'

const findFeedbacksByResolutionUseCase = async ({ limit, offset, resolutionId }: FindFeedbacksByResolutionDTO): Promise<ResponsePageDTO<FeedbackDTO>> => {
  const where = {
    resolution: {
      id: resolutionId
    }
  }

  const total = await prisma.challengeResolutionComment.count({ where })

  const feedbacks = await prisma.challengeResolutionComment.findMany({
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
    data: feedbacks.map<FeedbackDTO>(({ id, message, createdAt, user }) => (
      { id, message, createdAt, user }
    ))
  }
}

export const findFeedbacksByResolution = validator(findFeedbacksByResolutionUseCase,findFeedbacksByResolutionRules)
