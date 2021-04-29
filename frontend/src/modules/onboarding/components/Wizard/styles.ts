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
  height: 100%;
`
export const StepContainer = styled.div`
  grid-area: step;
`
