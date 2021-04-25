import { RequestHandler } from 'express'

import { findChallengeById } from '@/usecases/find-challenge-by-id'

export const challengeDetailController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  const challenge = await findChallengeById({
    id: req.params.id
  })

  res.status(200).json(challenge)
}
