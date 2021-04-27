import { HTMLAttributes } from 'react'

import useColor from '@/hooks/useColor'
import useFontSize from '@/hooks/useFontSize'
import { ColorsType, FontSizeType } from '@/styles/theme'

export interface TextProps<As extends React.ElementType = React.ElementType>
  extends HTMLAttributes<As> {
  as?: As
  size?: FontSizeType
  colorKey?: ColorsType
  // eslint-disable-next-line @typescript-eslint/ban-types
  fontWeight?: 'initial' | 'bold' | 'normal' | (number & {})
}

const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  size = 'text.md',
  colorKey = 'orange.100',
  fontWeight = 'normal',
  children,
  ...props
}) => {
  const color = useColor(colorKey)
  const fontSize = useFontSize(size)
  return (
    <Component style={{ fontWeight, color, fontSize }} {...props}>
      {children}
    </Component>
  )
}

export default Text
