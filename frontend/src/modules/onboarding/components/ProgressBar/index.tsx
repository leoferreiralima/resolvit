import { Fragment } from 'react'

import { Container, ProgressIndicator, ProgressConnector } from './styles'

interface ProgressBarProps {
  size: number
  current: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ size, current }) => {
  const getProgressIndicatorState = (index: number, current: number) => {
    if (index < current - 1) return 'outlined'
    else if (index === current - 1) return 'filled'
    else return 'disabled'
  }

  const getProgressConnectorState = (index: number, current: number) => {
    if (index < current - 1) return 'filled'
    else return 'disabled'
  }

  return (
    <Container>
      {new Array(size).fill(null).map((_, index) => (
        <Fragment key={index}>
          <ProgressIndicator
            size={3}
            state={getProgressIndicatorState(index, current)}
          >
            {index + 1}
          </ProgressIndicator>
          {index < size - 1 && (
            <ProgressConnector
              state={getProgressConnectorState(index, current)}
            />
          )}
        </Fragment>
      ))}
    </Container>
  )
}

export default ProgressBar
