import styled from 'styled-components'

export const LoginDraw = styled.img`
  width: 100%;
  max-width: 700px;
  align-self: center;
  justify-content: center;
`

export const LoginContainer = styled.main`
  grid-area: aside;
  display: flex;
  justify-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 992px) {
    max-width: 400px;
  }
`

export const ImageContainer = styled.aside`
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 992px) {
    display: none;
  }
`
