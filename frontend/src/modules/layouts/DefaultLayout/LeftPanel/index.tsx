import { HtmlHTMLAttributes } from 'react'

import { Container } from './styles'

const LeftPanel: React.FC<HtmlHTMLAttributes<never>> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>
}

export default LeftPanel
