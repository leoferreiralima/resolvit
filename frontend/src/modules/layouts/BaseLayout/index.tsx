import { Container } from 'react-bootstrap'

import Copyright from '@/components/Copyright'
import LogoContainer from '@/components/LogoContainer'

const BaseLayout: React.FC = ({ children }) => {
  return (
    <Container fluid className="pt-2 pb-2 pl-5 pr-5 h-100 flex-column d-flex">
      <LogoContainer />
      {children}
      <Copyright />
    </Container>
  )
}

export default BaseLayout
