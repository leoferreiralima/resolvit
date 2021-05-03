import { withIronSession, Handler } from 'next-iron-session'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withSession = (handler: Handler) => {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: 'RSESSION',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production'
    }
  })
}
