import { UserPreferencesDTO } from '@/dto'
import { prisma } from '@/utils/prisma'
import { validator } from '@/validators/validator-decorator'

import { addUserPreferencesRulesRules } from './rules'

const addUserPreferencesUseCase = async ({ user,occupation,technologies }: UserPreferencesDTO): Promise<void> => {
  await prisma.user.update({
    data: {
      occupation,
      technologies: {
        createMany: {
          data: technologies.map(({ category, focus }) => ({
            categoryId: category,
            focus: focus
          })
          )
        }
      }
    },
    where: {
      email: user
    }
  })
}

export const addUserPreferences = validator(addUserPreferencesUseCase,addUserPreferencesRulesRules)
