import type { RequestHandler } from 'express'

import { UserProfile } from '@/dto'

export const profileMiddleware = (profiles: Array<keyof UserProfile>): RequestHandler => {
  const middleware: RequestHandler = (req, res, next) => {
    const user = req.user

    if (!user) return res.status(401).send()
    if (!profiles.includes(user.profile)) return res.status(403).send()

    next()
  }

  return middleware
}
