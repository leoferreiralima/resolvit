import passport from 'passport'

import { githubStrategy, gitlabStrategy, jwtStrategy } from '@/auth'

passport.use(githubStrategy)
passport.use(gitlabStrategy)
passport.use(jwtStrategy)

passport.serializeUser((user, next) => next(null, user))
passport.deserializeUser((obj, next) => next(null, obj as Express.User))

export default passport
