import { PageDTO } from '@/dto'
import { createValidatorRules } from '@/utils/create-validator-rules'

export const getPageRules = createValidatorRules<PageDTO>({
  limit: ['integer',{ min: [0] }],
  offset: ['integer',{ min: [0] }]
})
