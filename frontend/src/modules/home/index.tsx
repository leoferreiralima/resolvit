import { GetStaticProps } from 'next'

import CategoryCard from '@/components/CategoryCard'
import List from '@/components/List'
import Profile from '@/components/Profile'
import { CategoryDTO } from '@/dto'
import {
  DefaultLayout,
  LeftPanel,
  RightPanel
} from '@/modules/layouts/DefaultLayout'

export const getStaticProps: GetStaticProps = async () => {
  const categories: CategoryDTO[] = new Array(8).fill({
    id: 'tyteyteyt',
    name: 'Java',
    challengeCount: 20
  })

  return {
    props: {
      categories
    },
    revalidate: 10
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
