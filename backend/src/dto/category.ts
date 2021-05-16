import { PageDTO } from './page'

export interface CategoryDTO {
  id: string
  name: string
  challengeCount: number
}

export interface CategorySearchDTO extends PageDTO {
  search: string
}
