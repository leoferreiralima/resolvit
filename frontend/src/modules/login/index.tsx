import { Card } from 'react-bootstrap'

import Message from '@/components/Message'
import Text from '@/components/Text'
import LandingPage from '@/modules/layouts/LandingPage'

import GithubLoginButton from './GithubButton'
import GitlabLoginButton from './GitlabButton'
import { LoginDraw, ImageContainer, LoginContainer } from './styles'

const Login: React.FC = () => {
  return (
    <LandingPage>
      <ImageContainer>
        <Text
          as="h2"
          size="title.md"
          colorKey="orange.200"
          className="w-50 mb-5 text-right"
        >
          The first step is get your hands on code !
        </Text>
        <LoginDraw
          src="/assets/login-page-draw.svg"
          className="align-self-end"
        />
      </ImageContainer>
      <LoginContainer>
        <Card className="pt-5 pb-5">
          <Card.Body>
            <Message
              className="text-center mb-5"
              title="The choice is yours !"
              message="You can choose you preferred platform to login."
            />
            <GithubLoginButton />
            <GitlabLoginButton />
          </Card.Body>
        </Card>
      </LoginContainer>
    </LandingPage>
  )
}

export default Login
