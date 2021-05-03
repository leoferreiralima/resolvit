import { CategoryDTO, PageDTO, ResponsePageDTO } from '@/dto'
import { prisma } from '@/utils/prisma'

export const findCategories = async ({ limit, offset }: PageDTO): Promise<ResponsePageDTO<CategoryDTO>> => {
  const total = await prisma.category.count()

  const categories = await prisma.category.findMany({
    include: {
      challenges: {
        select: {
          id: true
        }
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
