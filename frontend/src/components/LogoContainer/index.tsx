import { Col, Row } from 'react-bootstrap'

import Logo from '../Logo'

const LogoContainer: React.FC = () => {
  return (
    <Row>
      <Col xs="1" sm="6" md="2" lg="1" xl="1">
        <Logo />
      </Col>
    </Row>
  )
}

export default LogoContainer
