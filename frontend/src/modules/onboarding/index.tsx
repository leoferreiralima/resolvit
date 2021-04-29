import { Button } from 'react-bootstrap'

import Text from '@/components/Text'
import OnBoardingLayout from '@/modules/layouts/OnBoarding'

import QuestionStep from './components/QuestionStep'
import Wizard from './components/Wizard'
import {
  OnBoardingDraw,
  ImageContainer,
  OnBoardingContainer,
  OccupationContainer
} from './styles'

const OnBoarding: React.FC = () => {
  return (
    <OnBoardingLayout>
      <ImageContainer>
        <Text
          as="h2"
          size="title.md"
          colorKey="orange.200"
          className="mb-5 text-left"
        >
          Help us to personalize your experience
        </Text>
        <OnBoardingDraw src="/assets/onboarding-page-draw.svg" />
      </ImageContainer>
      <OnBoardingContainer>
        <Wizard>
          <p>a</p>
          <QuestionStep message="What do you do?">
            <OccupationContainer>
              <Button size="lg" className="w-100" variant="outline-primary">
                Developer
              </Button>
              <Button size="lg" className="w-100" variant="outline-primary">
                Student
              </Button>
              <Button size="lg" className="w-100" variant="outline-primary">
                Enthusiastic
              </Button>
            </OccupationContainer>
          </QuestionStep>
          <p>a</p>
        </Wizard>
      </OnBoardingContainer>
    </OnBoardingLayout>
  )
}

export default OnBoarding
