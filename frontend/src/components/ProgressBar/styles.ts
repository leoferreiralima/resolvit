import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
`

interface ProgressIndicatorProps {
  state: 'outlined' | 'filled' | 'disabled'
  size: number
}

const ProgressIndicatorOutlined = css`
  border-color: ${({ theme }) => theme.colors['orange.100']};
  color: ${({ theme }) => theme.colors['orange.100']};
`
const ProgressIndicatorFilled = css`
  border-color: ${({ theme }) => theme.colors['orange.100']};
  color: ${({ theme }) => theme.colors['white.200']};
  background-color: ${({ theme }) => theme.colors['orange.100']};
`
const ProgressIndicatorDisabled = css`
  border-color: ${({ theme }) => theme.colors['gray.100']};
  color: ${({ theme }) => theme.colors['gray.200']};
`
export const ProgressIndicator = styled.span<ProgressIndicatorProps>`
  ${({ state }) => {
    if (state === 'outlined') return ProgressIndicatorOutlined
    if (state === 'filled') return ProgressIndicatorFilled
    if (state === 'disabled') return ProgressIndicatorDisabled
  }}
  display: flex;
  height: ${({ size }) => size}rem;
  width: ${({ size }) => size}rem;
  border-radius: ${({ size }) => size / 2}rem;
  border-style: solid;
  border-width: 2px;
  align-items: center;
  justify-content: center;
`
interface ProgressConnectorProps {
  state: 'filled' | 'disabled'
}

const ProgressConnectorFilled = css`
  border-color: ${({ theme }) => theme.colors['orange.100']}BB;
  background-color: ${({ theme }) => theme.colors['orange.100']};
`

const ProgressConnectorDisabled = css`
  border-color: ${({ theme }) => theme.colors['gray.100']}BB;
  background-color: ${({ theme }) => theme.colors['gray.100']};
`

export const ProgressConnector = styled.hr<ProgressConnectorProps>`
  flex: 1;
  border-width: 0.1rem;
  border-style: solid;

  ${({ state }) => {
    if (state === 'filled') return ProgressConnectorFilled
    if (state === 'disabled') return ProgressConnectorDisabled
  }}
`
