import { LoginUserDTO, UserDTO } from '@/dto'
import { LoginError } from '@/errors'
import { Password } from '@/utils/password'
import { prisma } from '@/utils/prisma'
import { validator } from '@/validators/validator-decorator'

import { loginUserRules } from './rules'

const loginUser = async ({ email,password }: LoginUserDTO): Promise<UserDTO> => {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (!user) throw new LoginError()

  const isPasswordVerified = await Password.verify(password, user.passwordHash)
  if (!isPasswordVerified) throw new LoginError()

  return {
    name: user.name,
    email: user.email,
    picture: user.picture,
    githubId: user.githubId,
    gitlabId: user.gitlabId,
    profile: user.profile,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  }
}

export default validator(loginUser,loginUserRules)
