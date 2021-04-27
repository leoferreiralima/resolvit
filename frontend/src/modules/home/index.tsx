import { Button, Col, Container, Row } from 'react-bootstrap'
import Logo from '../../components/Logo'
import Text from '../../components/Text'
import LandingPage from '../layouts/LandingPage'

import { HomeDraw } from './styles'

const Home: React.FC = () => {
  return (
    <LandingPage>
      <Container fluid className="pt-2 pb-2 pl-5 pr-5 h-100 flex-column d-flex">
        <Row>
          <Col xs="1" sm="6" md="2" lg="1" xl="1">
            <Logo />
          </Col>
        </Row>
        <Row className="h-100 align-items-center flex-row-reverse justify-content-between">
          <Col xs="12" sm="12" md="12" lg="6" xl="6" className="mb-3">
            <HomeDraw src="/assets/landing-page-draw.svg" />
          </Col>
          <Col
            xs="12"
            sm="12"
            md="12"
            lg="4"
            xl="4"
            className="d-flex flex-column"
          >
            <div className="mb-4">
              <Text as="h2" size="title.md" className="mb-2" fontWeight="bold">
                From developers to developers
              </Text>
              <Text size="text.md">
                Learning things in practice is the best, here you will find
                challenges to made you a better developer
              </Text>
            </div>
            <div className="mb-4">
              <Text as="h2" size="title.md" className="mb-2" fontWeight="bold">
                Participate on a big community
              </Text>
              <Text size="text.md">
                Have your challenges reviewed by online users on platform! Which
                you can interacted and learning with!
              </Text>
            </div>
            <div className="mb-4">
              <Row>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                  <Button size="lg" className="w-100 mb-2">
                    Start Now
                  </Button>
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                  <Button size="lg" className="w-100" variant="outline-primary">
                    Login
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </LandingPage>
  )
}

export default Home
