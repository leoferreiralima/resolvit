import type { Session } from 'next-iron-session'

import 'next'

declare module 'next' {
  export interface NextApiRequestSession {
    session: Session
  }

  export interface NextApiRequest extends NextApiRequestSession {}
}
