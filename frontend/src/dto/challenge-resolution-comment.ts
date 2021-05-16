import { PageDTO } from './page'
import { UserDTO } from './user'

export interface SendFeedbackDTO {
  message: string
}

export interface FindFeedbacksByResolutionDTO extends PageDTO {
  resolutionId: string
}

export interface FeedbackDTO {
  id: string
  createdAt: string
  message: string
  user: Pick<UserDTO, 'name'>
}
