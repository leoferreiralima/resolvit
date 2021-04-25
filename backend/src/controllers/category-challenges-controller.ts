import { RequestHandler } from 'express'

import { findChallengesByCategory } from '@/usecases/find-challenges-by-category'
import { getPage } from '@/usecases/get-page'

export const categoryChallengesController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  const { limit, offset } = await getPage(req.query)

  const challenges = await findChallengesByCategory({
    categoryId: req.params.id,
    limit,
    offset
  })

  res.status(200).json(challenges)
}
