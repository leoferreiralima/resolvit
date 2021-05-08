import { GetServerSideProps } from 'next'

import { nextBackendApi } from '@/api'
import CategoryCard from '@/components/CategoryCard'
import List from '@/components/List'
import Profile from '@/components/Profile'
import { CategoryDTO, ResponsePageDTO } from '@/dto'
import {
  DefaultLayout,
  LeftPanel,
  RightPanel
} from '@/modules/layouts/DefaultLayout'

export const getServerSideProps: GetServerSideProps = async context => {
  const url =
    process.env.NODE_ENV === 'production'
      ? 'https://'
      : 'http://' + context.req.headers.host
  let categories: CategoryDTO[] = []
  const api = nextBackendApi(url)
  try {
    const { data } = await api.get<ResponsePageDTO<CategoryDTO>>('/category', {
      headers: context.req.headers,
      params: {
        limit: 20
      }
    })
    categories = data.data || []
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      categories
    }
  }
}

interface HomeProps {
  categories: CategoryDTO[]
}

const Home: React.FC<HomeProps> = ({ categories }) => {
  return (
    <DefaultLayout>
      <LeftPanel>
        <List title="Pick an Category">
          {categories?.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </List>
      </LeftPanel>
      <RightPanel>
        <Profile />
      </RightPanel>
    </DefaultLayout>
  )
}

export default Home
