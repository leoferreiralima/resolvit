import { PageDTO } from './page'
import { UserDTO } from './user'

export interface FindChallengeResolutionByIdDTO extends PageDTO{
  id: string
  user?: string
}

export interface ResolveChallengeDTO {
  challengeId: string
  resolutionLink: string
  userId: string
}

export interface ChallengeResolutionDTO {
  id: string
  resolutionLink: string
  createdAt: Date
  user: Pick<UserDTO, 'name'>
}
