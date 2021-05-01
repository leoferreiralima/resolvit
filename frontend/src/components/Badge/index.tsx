import { HTMLAttributes } from 'react'

import useColor from '@/hooks/useColor'

import { Container } from './styles'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  outlined?: boolean
}

const Badge: React.FC<BadgeProps> = ({
  children,
  outlined = false,
  ...props
}) => {
  const backgroundColor = useColor(outlined ? 'orange.100' : 'white.300')
  const textColor = useColor(outlined ? 'white.300' : 'orange.100')
  const borderColor = useColor('orange.100')

  return (
    <Container
      style={{ backgroundColor, color: textColor, borderColor }}
      {...props}
    >
      {children}
    </Container>
  )
}

export default Badge
