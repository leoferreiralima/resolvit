import Link from 'next/link'
import { Button, Col, Row } from 'react-bootstrap'

import Message from '@/components/Message'
import LandingPage from '@/modules/layouts/LandingPage'

import { HomeDraw } from './styles'

const Home: React.FC = () => {
  return (
    <LandingPage>
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
                <Link href="/Home">
                  <Button size="lg" className="w-100 mb-2">
                    Start Now
                  </Button>
                </Link>
              </Col>
              <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <Link href="/login">
                  <Button size="lg" className="w-100" variant="outline-primary">
                    Login
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </LandingPage>
  )
}

export default Home
