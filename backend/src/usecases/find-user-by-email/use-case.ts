import { UserDTO } from '@/dto'
import { prisma } from '@/utils/prisma'
import { Validate } from '@/utils/validate-parameter'

export const findUserByEmail = async (email: string): Promise<UserDTO> => {
  Validate.parameterNotNullOrUndefined('email', email)

  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  return {
    name: user.name,
    email: user.email,
    picture: user.picture,
    githubId: user.githubId,
    gitlabId: user.gitlabId,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  }
}
