import { SendFeedbackDTO } from '@/dto'
import { prisma } from '@/utils/prisma'
import { validator } from '@/validators/validator-decorator'

import { sendFeedbackRules } from './rules'

const sendFeedbackUseCase = async ({ userId, resolutionId,message }: SendFeedbackDTO): Promise<void> => {
  await prisma.challengeResolutionComment.create({
    data: {
      message,
      user: {
        connect: {
          email: userId
        }
      },
      resolution: {
        connect: {
          id: resolutionId
        }
      }
    }
  })
}

export const sendFeedback = validator(sendFeedbackUseCase,sendFeedbackRules)
