export interface UserDTO {
  email: string
  name: string
  githubId?: string
  gitlabId?: string
  picture: string
  createdAt: Date
  updatedAt: Date
}

export interface UserTechnologiesDTO {
  category: string
  focus: boolean
}

export enum UserOccupation {
  DEVELOPER = 'DEVELOPER',
  STUDENT = 'STUDENT',
  ENTHUSIASTIC = 'ENTHUSIASTIC'
}

export interface UserPreferencesDTO {
  user: string
  occupation: UserOccupation
  technologies: UserTechnologiesDTO[]
}
