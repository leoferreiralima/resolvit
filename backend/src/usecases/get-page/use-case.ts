import { PageDTO } from '@/dto'
import { validator } from '@/validators/validator-decorator'

import { getPageRules } from './rules'

const getPageUseCase = async (page: Partial<PageDTO>): Promise<PageDTO> => {
  const limit = typeof page.limit === 'string' ? parseInt(page.limit || '5') : page.limit ?? 5
  const offset = typeof page.offset === 'string' ? parseInt(page.offset || '0') : page.offset ?? 0

  return {
    limit,
    offset
  }
}

export const getPage = validator(getPageUseCase, getPageRules)
