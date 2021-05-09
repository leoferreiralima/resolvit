import { Strategy } from 'passport-gitlab2'
import { VerifyCallback } from 'passport-oauth2'

import { UserProfile } from '@/dto'
import { createOrUpdateUser } from '@/usecases/create-or-update-user'

interface ProfileEmail{
  value: string
}

interface Profile {
  id: string
  username: string
  displayName: string
  avatarUrl: string
  profileUrl: string
  emails: ProfileEmail[]
  provider: string
}

type VerifyFunction = (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyCallback
) => void

const verify: VerifyFunction = async (accessToken, refreshToken, profile, next) => {
  const user = await createOrUpdateUser({
    email: profile.emails[0]?.value || '',
    name: profile.displayName,
    picture: profile.avatarUrl.replace('s=80', 's=200'),
    gitlabId: profile.id,
    profile: UserProfile.CHALLENGER
  })

  console.log(`${profile.provider} ${user.email}: accessToken[${accessToken}] refreshToken[${refreshToken}]`)

  next(null, user)
}

export const gitlabStrategy = new Strategy({
  clientID: process.env.GITLAB_CLIENT_ID,
  clientSecret: process.env.GITLAB_CLIENT_SECRET,
  callbackURL: process.env.FRONTEND_URL + process.env.GITLAB_CALLBACK_URL,
  scope: process.env.GITLAB_SCOPE.split(' ')
}, verify)
