import { RequestHandler } from 'express'

import { SendFeedbackDTO } from '@/dto'
import { sendFeedback } from '@/usecases/send-feedback'

export const sendFeedbackController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  const { message }: Pick<SendFeedbackDTO, 'message'> = req.body

  await sendFeedback({
    resolutionId: req.params.id,
    userId: req.user.email,
    message
  })

  res.status(201).send()
}
