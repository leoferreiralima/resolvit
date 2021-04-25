import { RequestHandler } from 'express'

import { findFeedbacksByResolution } from '@/usecases/find-feedbacks-by-resolution'
import { getPage } from '@/usecases/get-page'

export const resolutionFeedbacksController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  const { limit, offset } = await getPage(req.query)

  const feedbacks = await findFeedbacksByResolution({
    resolutionId: req.params.id,
    limit,
    offset
  })

  res.status(200).json(feedbacks)
}
