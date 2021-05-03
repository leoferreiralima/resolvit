import { Strategy, Profile } from 'passport-github2'
import { VerifyCallback } from 'passport-oauth2'

import { createOrUpdateUser } from '@/usecases/create-or-update-user'

type VerifyFunction = (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyCallback
) => void

const verify: VerifyFunction = async (accessToken, refreshToken, profile, next) => {
  const user = await createOrUpdateUser({
    email: profile.emails[0]?.value,
    name: profile.displayName,
    picture: profile.photos[0]?.value,
    githubId: profile.id
  })

  console.log(`${profile.provider} ${user.email}: accessToken[${accessToken}] refreshToken[${refreshToken}]`)
  next(null, user)
}

export const githubStrategy = new Strategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.FRONTEND_URL + process.env.GITHUB_CALLBACK_URL,
  scope: process.env.GITHUB_SCOPE.split(',')
}, verify)
