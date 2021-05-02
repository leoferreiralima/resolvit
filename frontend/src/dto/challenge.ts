import { CategoryDTO } from '.'

export enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD'
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
