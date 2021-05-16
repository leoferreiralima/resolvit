import useUser from '@/hooks/useUser'

import Text from '../Text'
import { Container, Content, Picture } from './styles'

const Profile: React.FC = () => {
  const { data } = useUser()

  return (
    <Container>
      <Content>
        <Picture src={data?.picture} size={8} />
        <Text colorKey="black.100">{data?.name}</Text>
        <Text
          as="span"
          colorKey="gray.200"
          size="text.sm"
          className="text-center text-wrap"
        >
          Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem
          dormir, sentado sem cochilar e fazendo pose.
        </Text>
      </Content>
    </Container>
  )
}

export default Profile
