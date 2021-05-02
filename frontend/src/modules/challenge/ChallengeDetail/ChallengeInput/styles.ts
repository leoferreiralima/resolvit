import { FaPaperPlane } from 'react-icons/fa'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
`

export const Input = styled.input`
  font-size: 1.25rem;
  line-height: 1.5;
  width: 100%;

  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors['orange.100']};

  border: 0;
  border-radius: 0.3rem;
  padding: 0.5rem 3rem 0.5rem 1rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors['orange.100']};

  ::placeholder {
    color: ${({ theme }) => theme.colors['gray.100']};
    opacity: 1;
  }

  &:focus,
  &.focus {
    box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors['orange.100']}77;
  }
`

export const InputIcon = styled(FaPaperPlane)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  color: ${({ theme }) => theme.colors['orange.100']};
  font-size: 1.25rem;
`
