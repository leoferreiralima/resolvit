import { UserDTO } from './user'

export interface GenerateTokenDTO {
  user: UserDTO
}

export interface TokenDTO {
  accessToken: string
}
