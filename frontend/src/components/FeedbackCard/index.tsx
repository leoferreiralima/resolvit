import { useRouter } from 'next/router'
import { Card } from 'react-bootstrap'
import { FaLink } from 'react-icons/fa'

import { FeedbackDTO } from '@/dto'

import Text from '../Text'
import { Container } from './styles'

interface FeedbackCardProps {
  feedback: FeedbackDTO
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  const router = useRouter()

  const formatDate = (dateAsString: string) => {
    const date = Date.parse(dateAsString)
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short'
    }).format(date)
  }
  return (
    <Container>
      <Card>
        <Card.Body>
          <Text
            as="h3"
            size="text.md"
            colorKey="orange.100"
            fontWeight={600}
            className="mt-1"
          >
            {feedback.user.name}
          </Text>

          <Text size="text.sm" colorKey="black.100" className="mt-1">
            {feedback.message}
          </Text>

          <Text size="text.sm" colorKey="gray.100" className="mt-1 text-right">
            {formatDate(feedback.createdAt)}
          </Text>
          {/*

          <Text
            as="a"
            size="text.md"
            href={resolution.resolutionLink}
            target="_blank"
            rel="noreferrer"
            fontWeight={600}
            className="text-capitalize"
          >
            See resolution <FaLink />
          </Text> */}
        </Card.Body>
      </Card>
    </Container>
  )
}

export default FeedbackCard
