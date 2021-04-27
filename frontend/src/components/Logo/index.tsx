import Link from 'next/link'
import Text from '../Text'

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a className="cursor-pointer text-decoration-none">
        <Text as="h1" size="title.sm" fontWeight="bold">
          Resolvit
        </Text>
      </a>
    </Link>
  )
}

export default Logo
