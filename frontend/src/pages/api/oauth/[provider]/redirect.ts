import buildUrl from 'build-url'
import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuid } from 'uuid'

const redirect = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { provider } = req.query
  const oAuthProvider = (provider as string).toUpperCase()

  const url = process.env[`${oAuthProvider}_AUTHORIZE`]
  const redirectUrl = process.env[`${oAuthProvider}_CALLBACK_URL`]

  const scope = process.env[`${oAuthProvider}_SCOPE`]
  const clientId = process.env[`${oAuthProvider}_CLIENT_ID`]
  const responseType = process.env[`${oAuthProvider}_RESPONSE_TYPE`]

  const providerOAuthUrl = buildUrl(url, {
    queryParams: {
      redirect_uri: redirectUrl,
      client_id: clientId,
      response_type: responseType,
      scope,
      state: uuid()
    }
  })

  res.redirect(providerOAuthUrl)
}

export default redirect
