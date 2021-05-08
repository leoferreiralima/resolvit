import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme.colors['gray.300']}33;
`

export const Content = styled.div`
  padding-left: 2rem;
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 5rem;
`

interface PictureProps {
  size: number
}

export const Picture = styled.img<PictureProps>`
  height: ${({ size }) => size}rem;
  width: ${({ size }) => size}rem;
  border-radius: ${({ size }) => size}rem;
  border: 2px solid ${({ theme }) => theme.colors['gray.300']}88;
  margin-bottom: 1rem;
`
