import { RequestHandler } from 'express'

import { findChallengeResolutionById } from '@/usecases/find-resolution-by-id'

export const challengeResolutionDetailController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  const challenge = await findChallengeResolutionById({
    id: req.params.id
  })

  res.status(200).json(challenge)
}
