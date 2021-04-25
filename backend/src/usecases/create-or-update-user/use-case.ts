import { CreateOrUpdateUserDTO, UserDTO } from '@/dto'
import { prisma } from '@/utils/prisma'

export const createOrUpdateUser = async (userDto: CreateOrUpdateUserDTO): Promise<UserDTO> => {
  const { email,name,picture,githubId,gitlabId } = userDto

  const user = await prisma.user.upsert({
    create: { email, name, picture, githubId, gitlabId },
    update: { githubId, gitlabId },
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
