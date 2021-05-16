import Text from '../Text'
import { Container, TitleContainer, ItemsContainer } from './styles'

interface ListProps {
  hasMore?: boolean
  title?: string
}
const List: React.FC<ListProps> = ({ children, title }) => {
  return (
    <Container>
      <TitleContainer>
        <Text colorKey="gray.300" size="title.sm">
          {title}
        </Text>
      </TitleContainer>
      <ItemsContainer>{children}</ItemsContainer>
    </Container>
  )
}

export default List
