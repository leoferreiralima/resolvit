import Text from '../Text'
import { Container, Content, Picture } from './styles'

const Profile: React.FC = () => {
  return (
    <Container>
      <Content>
        <Picture
          src="https://avatars.githubusercontent.com/u/36305985?v=4"
          size={8}
        />
        <Text colorKey="black.100">Leonardo Ferreira Lima</Text>
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
