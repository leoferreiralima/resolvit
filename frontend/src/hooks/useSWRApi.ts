import type { AxiosError } from 'axios'
import useSWR from 'swr'
import type { SWRResponse } from 'swr'

import { api } from '@/api'

const fetcher = async (url: string) => {
  try {
    const response = await api.get(url)
    return response.data
  } catch (e) {
    const { response } = e as AxiosError

    if (!response) throw e
    if (response.status !== 417) throw e

    throw new Error(response.data.message)
  }
}
export default function useSWRApi<T>(
  route: string,
  initialData?: T
): SWRResponse<T, Error> {
  const response = useSWR<T, Error>(`/api/backend${route}`, fetcher, {
    initialData: initialData
  })
  return response
}
