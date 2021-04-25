import { GenerateTokenDTO } from '@/dto'
import { createValidatorRules } from '@/utils/create-validator-rules'

export const generateTokeRules = createValidatorRules<GenerateTokenDTO>({
  user: {
    email: ['required']
  }
})
