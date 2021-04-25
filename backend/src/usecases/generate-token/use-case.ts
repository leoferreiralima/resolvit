import { sign } from 'jsonwebtoken'

import { GenerateTokenDTO, TokenDTO } from '@/dto'
import { Key } from '@/utils/key'
import { validator } from '@/validators/validator-decorator'

import { generateTokeRules } from './rules'

const generateTokenUseCase = async ({ user }: GenerateTokenDTO): Promise<TokenDTO> => {
  const { email, ...payload } = user
  const privateKey = await Key.getJwtPrivateKey()

  const jwt = await new Promise<string>((resolve,reject) => {
    sign(payload,privateKey,{
      subject: email,
      algorithm: 'RS512',
      issuer: process.env.JWT_ISSUER,
      expiresIn: process.env.JWT_EXPIRATION
    }, (err, jwt) => {
      if (err) reject(err)
      resolve(jwt)
    })
  })

  return {
    access_token: jwt
  }
}

export const generateToken = validator(generateTokenUseCase,generateTokeRules)
