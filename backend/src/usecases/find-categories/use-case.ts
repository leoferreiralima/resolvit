import { CategoryDTO, ResponsePageDTO, CategorySearchDTO } from '@/dto'
import { prisma } from '@/utils/prisma'

export const findCategories = async ({ limit, offset, search = '' }: CategorySearchDTO): Promise<ResponsePageDTO<CategoryDTO>> => {
  const total = await prisma.category.count({
    where: {
      name: {
        startsWith: search,
        mode: 'insensitive'
      }
    }
  })

  const categories = await prisma.category.findMany({
    include: {
      challenges: {
        select: {
          id: true
        }
      }
    },
    where: {
      name: {
        startsWith: search,
        mode: 'insensitive'
      }
    },
    skip: offset,
    take: limit
  })
  return {
    total,
    data: categories.map<CategoryDTO>(({ id,name, challenges }) => (
      { id, name, challengeCount: challenges?.length || 0 }
    ))
  }
}
