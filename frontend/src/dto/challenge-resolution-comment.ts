import { PageDTO } from './page'
import { UserDTO } from './user'

export interface SendFeedbackDTO {
  resolutionId: string
  userId: string
  message: string
}

export interface FindFeedbacksByResolutionDTO extends PageDTO {
  resolutionId: string
}

export interface FeedbackDTO {
  id: string
  createdAt: Date
  message: string
  user: Pick<UserDTO, 'name'>
}
