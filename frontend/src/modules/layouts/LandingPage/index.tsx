import BaseLayout from '../BaseLayout'
import { Container } from './styles'

const LandingPage: React.FC = ({ children }) => {
  return (
    <Container>
      <BaseLayout>{children}</BaseLayout>
    </Container>
  )
}

export default LandingPage
