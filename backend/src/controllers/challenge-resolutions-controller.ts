import { RequestHandler } from 'express'

import { findResolutionsByChallenge } from '@/usecases/find-resolutions-by-challenge'
import { getPage } from '@/usecases/get-page'

export const challengeResolutionsController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  const { limit, offset } = await getPage(req.query)
  const { my } = req.query
  const feedbacks = await findResolutionsByChallenge({
    id: req.params.id,
    limit,
    offset,
    user: my === 'true' ? req.user?.email : null
  })

  res.status(200).json(feedbacks)
}
