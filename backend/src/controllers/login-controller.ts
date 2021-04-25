import { RequestHandler } from 'express'

import { generateToken } from '@/usecases/generate-token'

export const loginController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  const token = await generateToken({
    user: req.user
  })

  res.status(200).json(token)
}
