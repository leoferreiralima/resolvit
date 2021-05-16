import { useRouter } from 'next/router'
import { Card } from 'react-bootstrap'

import { CategoryDTO } from '@/dto'

import Text from '../Text'
import { Container } from './styles'

interface CategoryCardProps {
  category: CategoryDTO
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const router = useRouter()

  return (
    <Container onClick={() => router.push(`/category/${category.id}`)}>
      <Card>
        <Card.Body>
          <Text
            as="span"
            size="title.sm"
            colorKey="orange.100"
            fontWeight={600}
          >
            {category.name}
          </Text>
          <Text
            as="span"
            size="title.lg"
            colorKey="orange.200"
            fontWeight={600}
          >
            {category.challengeCount}
          </Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default CategoryCard
