import Header from '@/components/Header'

import { Container, PanelContainer } from './styles'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <PanelContainer>{children}</PanelContainer>
    </Container>
  )
}

export default DefaultLayout
