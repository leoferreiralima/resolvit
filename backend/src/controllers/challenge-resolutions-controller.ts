import { RequestHandler } from 'express'

import { findResolutionsByChallenge } from '@/usecases/find-resolutions-by-challenge'
import { getPage } from '@/usecases/get-page'

export const challengeResolutionsController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  const { limit, offset } = await getPage(req.query)

  const feedbacks = await findResolutionsByChallenge({
    id: req.params.id,
    limit,
    offset
  })

  res.status(200).json(feedbacks)
}
