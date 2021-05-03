import { useRouter } from 'next/router'

import Badge from '@/components/Badge'
import Text from '@/components/Text'
import { ChallengeDetailDTO, ResolveChallengeDTO } from '@/dto'
import usePostApi from '@/hooks/useApi'

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
  const { id, name, helps, description } = challenge
  const router = useRouter()
  const sendSolution = usePostApi<ResolveChallengeDTO>(
    `/challenge/${id}/resolution`
  )

  const onSubmit = async (resolutionLink: string): Promise<void> => {
    await sendSolution({
      resolutionLink
    })

    router.push(`/challenge/${id}/my-solutions`)
    router.reload()
  }
  return (
    <Container>
      <Text as="h3" size="title.md">
        {name}
      </Text>
      <Text colorKey="black.100">{description}</Text>
      <HelpContainer>
        <Text size="title.sm">Need Help?</Text>
        <LinkContainer>
          {helps.map((help, index) => (
            <Badge key={index}>
              <Text as="a" href={help} target="_blank" rel="noreferrer">
                {help}
              </Text>
            </Badge>
          ))}
        </LinkContainer>
      </HelpContainer>
      <SubmitSolutionContainer>
        <ChallengeInput onSubmit={onSubmit} />
      </SubmitSolutionContainer>
    </Container>
  )
}

export default ChallengeDetail
