import { RequestHandler } from 'express'

import { findCategories } from '@/usecases/find-categories'
import { getPage } from '@/usecases/get-page'

export const categoriesController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  const { limit, offset } = await getPage(req.query)

  const { q } = req.query

  const categories = await findCategories({
    limit,
    offset,
    search: (q as string) || ''
  })

  res.status(200).json(categories)
}
