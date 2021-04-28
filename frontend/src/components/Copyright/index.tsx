import { Row, Col } from 'react-bootstrap'

import Text from '../Text'

const Copyright: React.FC = () => {
  return (
    <Row className="mb-1 mt-2">
      <Col xs="12" sm="12" md="12" lg="4" xl="4">
        <Text size="text.sm" colorKey="gray.200">
          © 2021 · Resolvit · All rights reserved
        </Text>
      </Col>
    </Row>
  )
}

export default Copyright
