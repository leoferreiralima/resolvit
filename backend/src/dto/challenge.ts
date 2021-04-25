import { Difficulty } from '@prisma/client'

import { CategoryDTO } from './category'
import { PageDTO } from './page'

export interface FindChallengeByCategoryDTO extends PageDTO{
  categoryId: string
}

export interface FindChallengeByIdDTO{
  id: string
}

export interface ChallengeDTO {
  id: string
  name: string
  difficulty: Difficulty
}

export interface ChallengeDetailDTO extends ChallengeDTO {
  helps: string[]
  description: string
  categories: CategoryDTO[]
}
