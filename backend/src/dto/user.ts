export type UserProfile = {
  ADMIN: 'ADMIN'
  CHALLENGER: 'CHALLENGER'
}

export interface UserDTO {
  email: string
  name: string
  bio?: string
  githubId?: string
  gitlabId?: string
  profile?: keyof UserProfile
  picture: string
  createdAt: Date
  updatedAt: Date
}

export type CreateOrUpdateUserDTO = Omit<UserDTO, 'createdAt' | 'updatedAt'>

export interface UserTechnologiesDTO {
  category: string
  focus: boolean
}

export enum UserOccupation {
  DEVELOPER = 'DEVELOPER',
  STUDENT = 'STUDENT',
  ENTHUSIASTIC= 'ENTHUSIASTIC'
}

export interface UserPreferencesDTO {
  user: string
  occupation: UserOccupation
  technologies: UserTechnologiesDTO[]
}

export interface LoginUserDTO {
  email: string
  password: string
}
