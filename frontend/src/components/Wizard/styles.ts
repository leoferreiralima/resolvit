import { Button } from 'react-bootstrap'
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'progress'
    'step'
    'action';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 10fr 1fr;
  grid-row-gap: 2rem;
  flex: 1;
  @media (min-width: 992px) {
    height: 100%;
  }
`
export const ProgressContainer = styled.div`
  grid-area: progress;
  display: flex;
  justify-content: center;
`

export const StepContainer = styled.div`
  grid-area: step;
`

export const ActionContainer = styled.div`
  grid-area: action;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .btn ~ .btn {
    margin-left: 1rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    .btn ~ .btn {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`

export const NextButton = styled(Button)`
  width: 100%;
  position: relative;

  span {
    display: inline;
    text-align: center;
    margin-right: 1rem;
  }

  i {
    position: absolute;
    right: 1rem;
  }

  @media (min-width: 576px) {
    max-width: 10rem;
  }
`

export const BackButton = styled(Button)`
  width: 100%;
  @media (min-width: 576px) {
    max-width: 10rem;
  }
`
