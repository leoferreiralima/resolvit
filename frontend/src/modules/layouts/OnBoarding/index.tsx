import Copyright from '@/components/Copyright'
import LogoContainer from '@/components/LogoContainer'

import { OnBoardingContainer } from './styles'

const OnBoarding: React.FC = ({ children }) => {
  return (
    <OnBoardingContainer fluid className="h-100">
      <LogoContainer />
      {children}
      <Copyright />
    </OnBoardingContainer>
  )
}

export default OnBoarding
