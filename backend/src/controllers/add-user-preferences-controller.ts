import { RequestHandler } from 'express'

import { UserPreferencesDTO } from '@/dto'
import { addUserPreferences } from '@/usecases/add-user-preferences'

export const addUserPreferencesController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  const { occupation, technologies }: Omit<UserPreferencesDTO, 'user'> = req.body

  await addUserPreferences({
    user: req.user.email,
    occupation,
    technologies
  })

  res.status(201).send()
}
