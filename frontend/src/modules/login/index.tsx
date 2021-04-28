import Link from 'next/link'
import { Card } from 'react-bootstrap'
import {
  GithubLoginButton,
  createButton,
  createSvgIcon
} from 'react-social-login-buttons'

import Message from '@/components/Message'
import Text from '@/components/Text'
import LandingPage from '@/modules/layouts/LandingPage'

import GitlabLogo from './gitlab-brands.svg'
import { LoginDraw, ImageContainer, LoginContainer } from './styles'

const GilabLoginButton = createButton({
  text: 'Log in with Gitlab',
  icon: createSvgIcon(GitlabLogo),
  iconFormat: name => `fa fa-${name}`,
  style: { background: '#6B53B8', textAlign: 'center' },
  activeStyle: { background: '#8367D3' }
})

const Login: React.FC = () => {
  return (
    <LandingPage>
      <ImageContainer>
        <Text as="h2" size="title.md" className="w-50 mb-5 text-right">
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
            <Link href="/onboarding">
              <a>
                <GithubLoginButton className="mb-3" />
              </a>
            </Link>
            <Link href="/onboarding">
              <a>
                <GilabLoginButton />
              </a>
            </Link>
          </Card.Body>
        </Card>
      </LoginContainer>
    </LandingPage>
  )
}

export default Login
