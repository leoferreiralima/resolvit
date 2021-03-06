import { Container } from 'react-bootstrap'
import styled from 'styled-components'

export const OnBoardingContainer = styled(Container)`
  display: grid;
  grid-template-areas:
    'logo aside'
    'main aside'
    'copyright aside';
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 0.5fr auto 0.5fr;
  padding-left: 2rem;
  padding-right: 0;

  @media (max-width: 992px) {
    grid-template-areas:
      'logo'
      'aside'
      'copyright';
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    grid-template-rows: 0.5fr 9fr 0.5fr;

    padding: 1rem;
  }
`
