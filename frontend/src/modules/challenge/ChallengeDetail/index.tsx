import Badge from '@/components/Badge'
import Text from '@/components/Text'
import { ChallengeDetailDTO } from '@/dto'

import ChallengeInput from './ChallengeInput'
import {
  Container,
  HelpContainer,
  LinkContainer,
  SubmitSolutionContainer
} from './styles'

interface ChallengeDetailProps {
  challenge: ChallengeDetailDTO
}

const ChallengeDetail: React.FC<ChallengeDetailProps> = ({ challenge }) => {
  return (
    <Container>
      <Text as="h3" size="title.md">
        {challenge.name}
      </Text>
      <Text colorKey="black.100">{challenge.description}</Text>
      <HelpContainer>
        <Text size="title.sm">Need Help?</Text>
        <LinkContainer>
          {challenge.helps.map((help, index) => (
            <Badge key={index}>
              <Text as="a" href={help} target="_blank" rel="noreferrer">
                {help}
              </Text>
            </Badge>
          ))}
        </LinkContainer>
      </HelpContainer>
      <SubmitSolutionContainer>
        <ChallengeInput />
      </SubmitSolutionContainer>
    </Container>
  )
}

export default ChallengeDetail
