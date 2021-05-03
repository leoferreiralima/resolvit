export interface PageDTO {
  limit: number
  offset: number
}

export interface ResponsePageDTO<T> {
  total: number
  data: T[]
}
