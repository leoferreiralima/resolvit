import { Children, useState, useCallback } from 'react'
import { FaArrowRight } from 'react-icons/fa'

import ProgressBar from '../ProgressBar'
import {
  Container,
  StepContainer,
  ActionContainer,
  ProgressContainer,
  NextButton,
  BackButton
} from './styles'

interface WizardProps {
  nextButtonText?: string
  finishButtonText?: string
  backButtonText?: string
}

const Wizard: React.FC<WizardProps> = ({
  children,
  nextButtonText = 'Next',
  finishButtonText = "Let's go",
  backButtonText = 'Back'
}) => {
  const childs = Children.toArray(children)

  const [stepCount, setStepCount] = useState(1)

  const nextStep = useCallback(() => {
    if (stepCount < childs.length) {
      setStepCount(stepCount + 1)
    }
  }, [stepCount])

  const backStep = useCallback(() => {
    if (stepCount > 1) {
      setStepCount(stepCount - 1)
    }
  }, [stepCount])

  return (
    <Container>
      <ProgressContainer>
        <ProgressBar size={childs.length} current={stepCount} />
      </ProgressContainer>
      <StepContainer>{childs[stepCount - 1]}</StepContainer>
      <ActionContainer>
        {stepCount > 1 && (
          <BackButton size="lg" variant="outline-primary" onClick={backStep}>
            {backButtonText}
          </BackButton>
        )}

        <NextButton size="lg" onClick={nextStep}>
          <span>
            {stepCount === childs.length ? finishButtonText : nextButtonText}
          </span>
          <i>
            <FaArrowRight />
          </i>
        </NextButton>
      </ActionContainer>
    </Container>
  )
}

export default Wizard
