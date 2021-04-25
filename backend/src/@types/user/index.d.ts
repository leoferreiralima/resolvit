/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { UserDTO } from '@/dto'

declare global {
  namespace Express {
    // tslint:disable-next-line:no-empty-interface
    interface User extends UserDTO{}
  }
}
