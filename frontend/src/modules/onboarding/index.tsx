import { Button } from 'react-bootstrap'

import QuestionStep from '@/components/QuestionStep'
import Text from '@/components/Text'
import Wizard from '@/components/Wizard'
import OnBoardingLayout from '@/modules/layouts/OnBoarding'

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
          <p>step 2</p>
          <p>step 3</p>
        </Wizard>
      </OnBoardingContainer>
    </OnBoardingLayout>
  )
}

export default OnBoarding
