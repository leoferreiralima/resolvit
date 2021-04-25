import { RequestHandler } from 'express'

import { ResolveChallengeDTO } from '@/dto'
import { resolveChallenge } from '@/usecases/resolve-challenge'

export const resolveChallengeController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  const { resolutionLink }: Pick<ResolveChallengeDTO, 'resolutionLink'> = req.body

  await resolveChallenge({
    challengeId: req.params.id,
    userId: req.user.email,
    resolutionLink
  })

  res.status(201).send()
}
