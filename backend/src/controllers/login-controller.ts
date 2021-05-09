import { RequestHandler } from 'express'

import { generateToken } from '@/usecases/generate-token'

export const loginController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  const { profile: _, ...user } = req.user
  const token = await generateToken({
    user
  })

  res.status(200).json(token)
}
