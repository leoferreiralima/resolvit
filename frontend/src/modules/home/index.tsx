import { Button, Col, Container, Row } from 'react-bootstrap'
import Logo from '../../components/Logo'
import Text from '../../components/Text'
import LandingPage from '../layouts/LandingPage'

import Message from './components/Message'

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
            <Message
              title="From developers to developers"
              message="Learning things in practice is the best, here you will find challenges to made you a better developer"
            />
            <Message
              title="Participate on a big community"
              message="Have your challenges reviewed by online users on platform! Which you can interacted and learning with!"
            />
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
        <Row className="mb-1">
          <Col xs="1" sm="6" md="2" lg="2" xl="2">
            <Text size="text.sm" colorKey="gray.200">
              © 2021 · Resolvit · All rights reserved
            </Text>
          </Col>
        </Row>
      </Container>
    </LandingPage>
  )
}

export default Home
