import { useRouter } from 'next/router'
import { Card } from 'react-bootstrap'
import { FaLink } from 'react-icons/fa'

import { ChallengeResolutionDTO } from '@/dto'

import Text from '../Text'
import { Container } from './styles'

interface ResolutionCardProps {
  resolution: ChallengeResolutionDTO
}

const ResolutionCard: React.FC<ResolutionCardProps> = ({ resolution }) => {
  const router = useRouter()

  return (
    <Container>
      <Card>
        <Card.Body>
          <Text
            as="span"
            size="title.sm"
            colorKey="orange.100"
            fontWeight={600}
            onClick={() =>
              router.push(`/resolution/${resolution.id}/feedbacks`)
            }
          >
            {resolution.user.name}
          </Text>
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
          </Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ResolutionCard
