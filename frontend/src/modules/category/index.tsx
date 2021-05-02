import { GetStaticPaths, GetStaticProps } from 'next'

import ChallengeCard from '@/components/ChallengeCard'
import List from '@/components/List'
import Profile from '@/components/Profile'
import { ChallengeDTO, Difficulty } from '@/dto'
import {
  DefaultLayout,
  LeftPanel,
  RightPanel
} from '@/modules/layouts/DefaultLayout'

// import { Container } from './styles';

export const getStaticProps: GetStaticProps = async () => {
  const challenges: ChallengeDTO[] = new Array(8).fill({
    id: 'tyteyteyt',
    name: 'Rest api',
    difficulty: Difficulty.HARD
  })

  return {
    props: {
      challenges
    },
    revalidate: 10
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'tyteyteyt'
        }
      }
    ],
    fallback: true
  }
}

interface CategoryProps {
  challenges: ChallengeDTO[]
}

const Category: React.FC<CategoryProps> = ({ challenges }) => {
  return (
    <DefaultLayout>
      <LeftPanel>
        <List title="Pick a Challenge">
          {challenges?.map((challenge, index) => (
            <ChallengeCard key={index} challenge={challenge} />
          ))}
        </List>
      </LeftPanel>
      <RightPanel>
        <Profile />
      </RightPanel>
    </DefaultLayout>
  )
}

export default Category
