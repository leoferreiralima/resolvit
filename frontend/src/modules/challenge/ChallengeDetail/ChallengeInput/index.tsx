import { useRef } from 'react'

import { Container, Input, InputIcon } from './styles'

interface ChallengeInputProps {
  onSubmit: (resolutionLink: string) => void | Promise<void>
}

const ChallengeInput: React.FC<ChallengeInputProps> = ({ onSubmit }) => {
  const inputRef = useRef(null)

  const onClickIcon = async () => {
    await onSubmit(inputRef.current?.value)
  }
  return (
    <Container>
      <Input
        placeholder="Paste here the github/gitlab link of your solution ..."
        ref={inputRef}
      />
      <InputIcon onClick={onClickIcon} />
    </Container>
  )
}

export default ChallengeInput
