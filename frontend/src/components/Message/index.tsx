import { HTMLAttributes } from 'react'

import Text from '../Text'

interface MessageProps<As extends React.ElementType = React.ElementType>
  extends HTMLAttributes<As> {
  as?: As
  title: string
  message: string
}

const Message: React.FC<MessageProps> = ({
  title,
  message,
  as: Component = 'div',
  className = 'mb-4',
  ...props
}) => {
  return (
    <Component className={className} {...props}>
      <Text as="h2" size="title.md" className="mb-2" fontWeight="bold">
        {title}
      </Text>
      <Text size="text.md">{message}</Text>
    </Component>
  )
}

export default Message
