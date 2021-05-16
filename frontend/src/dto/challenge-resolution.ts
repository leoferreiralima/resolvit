import { PageDTO } from './page'
import { UserDTO } from './user'

export interface FindChallengeResolutionByIdDTO extends PageDTO {
  id: string
}

export interface ResolveChallengeDTO {
  resolutionLink: string
}

export interface ChallengeResolutionDTO {
  id: string
  resolutionLink: string
  createdAt: Date
  user: Pick<UserDTO, 'name'>
}
