import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors['orange.100']};
  padding: 0 15rem;
  height: 48px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`
