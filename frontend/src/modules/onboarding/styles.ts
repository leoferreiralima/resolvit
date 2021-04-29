import styled from 'styled-components'

export const OnBoardingDraw = styled.img`
  width: 100%;
  max-width: 700px;
`

export const OnBoardingContainer = styled.main`
  grid-area: aside;
  width: 100%;
  padding: 2rem;

  @media (min-width: 992px) {
    box-shadow: -1px 0px 20px 0px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 576px) {
    padding: 0;
  }
`

export const ImageContainer = styled.aside`
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2rem 3rem 2rem 0;

  @media (max-width: 992px) {
    display: none;
  }
`

export const OccupationContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 576px) {
    width: 100%;
  }

  .btn ~ .btn {
    margin-top: 4rem;
    @media (max-width: 576px) {
      margin-top: 2rem;
    }
  }
`
