import axios, { AxiosInstance } from 'axios'

export const api = axios.create({
  baseURL: process.env.BACKEND_URL
})

export const nextBackendApi = (host = ''): AxiosInstance =>
  axios.create({
    baseURL: `${host}/api/backend`
  })
