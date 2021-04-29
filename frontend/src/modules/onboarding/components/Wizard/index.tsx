import { Children } from 'react'

import ProgressBar from '../ProgressBar'
import { Container } from './styles'

const Wizard: React.FC = ({ children }) => {
  const childs = Children.toArray(children)

  return (
    <Container>
      <ProgressBar size={childs.length} current={2} />
      {childs[1]}
    </Container>
  )
}

export default Wizard
