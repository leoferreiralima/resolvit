import { RequestHandler } from 'express'

export const userController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  res.status(200).json(req.user)
}
