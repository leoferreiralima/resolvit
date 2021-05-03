import type { SWRResponse } from 'swr'

import { UserDTO } from '@/dto/user'

import useSWRApi from './useSWRApi'

export default function useUser(): SWRResponse<UserDTO, Error> {
  const response = useSWRApi<UserDTO>('/user')
  return response
}
