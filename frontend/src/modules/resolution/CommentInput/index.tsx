import { useCallback, useState } from 'react'
import { Button } from 'react-bootstrap'
import { FaPaperPlane } from 'react-icons/fa'

import { Container, Input } from './styles'

interface CommentInputProps {
  onSubmit: (resolutionLink: string) => void | Promise<void>
}

const CommentInput: React.FC<CommentInputProps> = ({ onSubmit }) => {
  const [text, setText] = useState('')

  const onClick = useCallback(() => {
    async function submit() {
      await onSubmit(text)
      setText('')
    }

    submit()
  }, [text])
  return (
    <Container>
      <Input
        placeholder="Paste here the github/gitlab link of your solution ..."
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <Button size="lg" className="w-100" variant="primary" onClick={onClick}>
        Send Feedback <FaPaperPlane />
      </Button>
    </Container>
  )
}

export default CommentInput
