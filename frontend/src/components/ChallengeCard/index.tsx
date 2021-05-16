import { useRouter } from 'next/router'
import { Card } from 'react-bootstrap'

import { ChallengeDTO, Difficulty } from '@/dto'
import { ColorsType } from '@/styles/theme'

import Text from '../Text'
import { Container } from './styles'

interface CategoryCardProps {
  challenge: ChallengeDTO
}

const ChallengeCard: React.FC<CategoryCardProps> = ({ challenge }) => {
  const router = useRouter()

  const getDifficultyColor = (difficulty: Difficulty): ColorsType => {
    switch (difficulty) {
      case Difficulty.EASY:
        return 'green.100'
      case Difficulty.MEDIUM:
        return 'orange.200'
      case Difficulty.HARD:
        return 'red.100'
    }
  }

  return (
    <Container onClick={() => router.push(`/challenge/${challenge.id}`)}>
      <Card>
        <Card.Body>
          <Text
            as="span"
            size="title.md"
            colorKey="orange.100"
            fontWeight={600}
          >
            {challenge.name}
          </Text>
          <Text
            as="span"
            size="text.lg"
            colorKey={getDifficultyColor(challenge.difficulty)}
            fontWeight={600}
            className="text-capitalize"
          >
            {challenge.difficulty.toLowerCase()}
          </Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ChallengeCard
