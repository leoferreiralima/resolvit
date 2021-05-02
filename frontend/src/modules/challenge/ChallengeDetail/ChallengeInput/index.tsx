import { Container, Input, InputIcon } from './styles'

const ChallengeInput: React.FC = () => {
  return (
    <Container>
      <Input placeholder="Paste here the github/gitlab link of your solution ..." />
      <InputIcon />
    </Container>
  )
}

export default ChallengeInput
