import type { NextApiRequest, NextApiResponse } from 'next'

import { withSession, api } from '@/api'
import { TokenDTO } from '@/dto'

const login = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { provider, code } = req.query

  try {
    const response = await api.get<TokenDTO>(`/oauth/${provider}`, {
      params: {
        code
      }
    })
    req.session.set('jwt', response.data.accessToken)
    await req.session.save()

    res.redirect('/home')
  } catch (error) {
    console.log(error)
    const { response } = error
    res.status(response?.status || 500).json(response?.data)
  }
}

export default withSession(login)
