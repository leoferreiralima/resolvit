import { Row, Col, Card } from 'react-bootstrap'
import {
  GithubLoginButton,
  createButton,
  createSvgIcon
} from 'react-social-login-buttons'

import Message from '@/components/Message'
import Text from '@/components/Text'
import LandingPage from '@/modules/layouts/LandingPage'

import GitlabLogo from './gitlab-brands.svg'
import { LoginDraw } from './styles'

const GilabLoginButton = createButton({
  text: 'Log in with Gitlab',
  icon: createSvgIcon(GitlabLogo),
  iconFormat: name => `fa fa-${name}`,
  style: { background: '#6B53B8' },
  activeStyle: { background: '#8367D3' }
})

const Login: React.FC = () => {
  return (
    <LandingPage>
      <Row className="h-100 align-items-center justify-content-between">
        <Col
          xs="12"
          sm="12"
          md="12"
          lg="6"
          xl="6"
          className="mb-3 d-flex flex-column align-items-end"
        >
          <Text as="h2" size="title.md" className="w-50 mb-5 text-right">
            The first step is get your hands on code !
          </Text>
          <LoginDraw
            src="/assets/login-page-draw.svg"
            className="align-self-end"
          />
        </Col>
        <Col
          xs="12"
          sm="12"
          md="12"
          lg="6"
          xl="6"
          className="mb-3 d-flex justify-content-center"
        >
          <Card className="w-50 pt-5 pb-5 pl-4 pr-4">
            <Card.Body>
              <Message
                className="text-center mb-5"
                title="The choice is yours !"
                message="You can choose you preferred platform to login."
              />
              <GithubLoginButton className="mb-3" />
              <GilabLoginButton />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </LandingPage>
  )
}

export default Login
