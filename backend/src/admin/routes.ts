
import cors from 'cors'
import { Router, json } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import passport from '@/config/passport'
import {
  loginController,
  userController
} from '@/controllers'
import {
  validatorErrorHandler,
  errorHandler,
  useCaseErrorHandler,
  errorHandlerDecorator,
  profileMiddleware
} from '@/middlewares'

import { UserProfile } from '.prisma/client'
const router = Router()

router.use(helmet())
router.use(morgan(process.env.MORGAN_LOG))
router.use(cors())
router.use(json())
router.use(passport.initialize())

router.post(
  '/login',
  passport.authenticate('email-password'),
  loginController
)

router.use(passport.authenticate('jwt'))
router.use(profileMiddleware([UserProfile.CHALLENGER]))

router.get('/user', errorHandlerDecorator(userController))

router.use(validatorErrorHandler)
router.use(useCaseErrorHandler)
router.use(errorHandler)

export default router
