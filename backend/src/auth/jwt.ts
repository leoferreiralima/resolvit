import { Strategy, ExtractJwt,SecretOrKeyProvider,VerifyCallback } from 'passport-jwt'

import { findUserByEmail } from '@/usecases/find-user-by-email'
import { Key } from '@/utils/key'

interface JwtPayload{
  sub: string
}

const verify: VerifyCallback = async ({ sub }: JwtPayload, next) => {
  const user = await findUserByEmail(sub)
  next(null,user)
}

const secretOrKeyProvider: SecretOrKeyProvider = (_,__,next) => {
  Key.getJwtPublicKey()
    .then(key => next(null,key))
    .catch(e => next(e))
}

const jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()

export const jwtStrategy = new Strategy({
  jwtFromRequest,
  secretOrKeyProvider,
  algorithms: ['RS512'],
  issuer: process.env.JWT_ISSUER
},verify)
