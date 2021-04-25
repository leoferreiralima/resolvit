
import { UserPreferencesDTO, UserOccupation } from '@/dto'
import { createValidatorRules } from '@/utils/create-validator-rules'

export const addUserPreferencesRulesRules = createValidatorRules<UserPreferencesDTO>({
  user: ['required','email'],
  occupation: ['required',{
    in: Object.values(UserOccupation)
  }],
  technologies: ['required', 'array']
})
