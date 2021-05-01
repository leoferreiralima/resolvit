import { Container, SearchInput, SearchIcon } from './styles'

const Search: React.FC = () => {
  return (
    <Container>
      <SearchInput placeholder="Search here ..." />
      <SearchIcon />
    </Container>
  )
}

export default Search
