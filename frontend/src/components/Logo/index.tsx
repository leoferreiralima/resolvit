import Link from 'next/link'

import { FontSizeType } from '@/styles/theme'

import Text from '../Text'

interface LogoProps {
  inverse?: boolean
  size?: FontSizeType
  redirectPath?: string
}

const Logo: React.FC<LogoProps> = ({
  redirectPath = '/',
  inverse = false,
  size = 'title.sm'
}) => {
  return (
    <Link href={redirectPath}>
      <a className="cursor-pointer text-decoration-none">
        <Text
          as="h1"
          size={size}
          colorKey={inverse ? 'white.300' : 'orange.100'}
          fontWeight="bold"
          style={{
            marginBottom: 0
          }}
        >
          Resolvit
        </Text>
      </a>
    </Link>
  )
}

export default Logo
