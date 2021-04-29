import Text from '@/components/Text'

import { Container } from './styles'

interface QuestionStepProps {
  message: string
}

const QuestionStep: React.FC<QuestionStepProps> = ({ message, children }) => {
  return (
    <Container className="pt-5 pb-5">
      <Text size="title.lg" fontWeight={450} className="text-center pb-5">
        {message}
      </Text>
      {children}
    </Container>
  )
}

export default QuestionStep
