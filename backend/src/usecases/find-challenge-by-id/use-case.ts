import { CategoryDTO, ChallengeDetailDTO, FindChallengeByIdDTO } from '@/dto'
import { prisma } from '@/utils/prisma'
import { validator } from '@/validators/validator-decorator'

import { findChallengeByIdRules } from './rules'

const findChallengeByIdUseCase = async ({ id }: FindChallengeByIdDTO): Promise<ChallengeDetailDTO> => {
  const { name, helps, difficulty ,description, categories } = await prisma.challenge.findUnique({
    include: {
      categories: {
        select: {
          id: true,
          name: true
        }
      }
    },
    where: {
      id
    }
  })

  return {
    id,
    name,
    helps,
    difficulty,
    description,
    categories: categories.map<CategoryDTO>(({ id,name }) => (
      { id, name }
    ))
  }
}

export const findChallengeById = validator(findChallengeByIdUseCase,findChallengeByIdRules)
