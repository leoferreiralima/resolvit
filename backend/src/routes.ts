
import cors from 'cors'
import { Router, json } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import passport from '@/config/passport'
import {
  loginController,
  addUserPreferencesController,
  categoriesController,
  categoryChallengesController,
  challengeDetailController,
  resolutionFeedbacksController,
  challengeResolutionsController,
  resolveChallengeController,
  sendFeedbackController,
  userController
} from '@/controllers'
import { validatorErrorHandler,errorHandler,useCaseErrorHandler,errorHandlerDecorator } from '@/middlewares'

const router = Router()

router.use(helmet())
router.use(morgan(process.env.MORGAN_LOG))
router.use(cors())
router.use(json())
router.use(passport.initialize())

// Public Endpoints
router.get(
  process.env.GITLAB_CALLBACK_URL,
  passport.authenticate('gitlab'),
  loginController
)

router.get(
  process.env.GITHUB_CALLBACK_URL,
  passport.authenticate('github'),
  loginController
)

router.use(passport.authenticate('jwt'))

router.get('/user', errorHandlerDecorator(userController))
router.post('/user/preferences',errorHandlerDecorator(addUserPreferencesController))

router.get('/category', errorHandlerDecorator(categoriesController))
router.get('/category/:id/challenge', errorHandlerDecorator(categoryChallengesController))

router.get('/challenge/:id', errorHandlerDecorator(challengeDetailController))
router.get('/challenge/:id/resolution', errorHandlerDecorator(challengeResolutionsController))
router.post('/challenge/:id/resolution', errorHandlerDecorator(resolveChallengeController))

router.get('/resolution/:id/feedback', errorHandlerDecorator(resolutionFeedbacksController))
router.post('/resolution/:id/feedback', errorHandlerDecorator(sendFeedbackController))

router.use(validatorErrorHandler)
router.use(useCaseErrorHandler)
router.use(errorHandler)

export default router
