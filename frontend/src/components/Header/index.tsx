import Logo from '../Logo'
import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo inverse size="text.lg" redirectPath="/home" />
    </Container>
  )
}

export default Header
