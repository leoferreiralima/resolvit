import Text from '../Text'
import { Container } from './styles'

const Copyright: React.FC = () => {
  return (
    <Container>
      <Text size="text.sm" colorKey="gray.200">
        © 2021 · Resolvit · All rights reserved
      </Text>
    </Container>
  )
}

export default Copyright
