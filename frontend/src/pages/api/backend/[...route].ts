import type { NextApiRequest, NextApiResponse } from 'next'

import { api, withSession } from '@/api'

const sendToApi = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { route, ...params } = req.query
  const jwt = req.session.get('jwt')
  const url = '/' + (route as string[]).join('/')

  const config = {
    params,
    headers: {
      authorization: jwt ? `Bearer ${jwt}` : ''
    }
  }

  try {
    if (req.method.toLowerCase() === 'get') {
      const { data, status } = await api.get(url, config)
      res.status(status).json(data)
    } else if (req.method.toLowerCase() === 'post') {
      const { data, status } = await api.post(url, req.body, config)
      res.status(status).json(data)
    } else if (req.method.toLowerCase() === 'put') {
      const { data, status } = await api.put(url, req.body, config)
      res.status(status).json(data)
    } else if (req.method.toLowerCase() === 'delete') {
      const { data, status } = await api.delete(url, config)
      res.status(status).json(data)
    } else {
      res.status(415).json(undefined)
    }
  } catch (e) {
    console.error(e.message)
    const { response } = e

    if (response?.status === 401) {
      req.session.destroy()
      res.redirect('/login')
    } else {
      res.status(response?.status || 500).json(response?.data)
    }
  }
}

export default withSession(sendToApi)
