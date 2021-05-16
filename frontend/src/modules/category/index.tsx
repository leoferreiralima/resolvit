import { GetServerSideProps } from 'next'

import { nextBackendApi } from '@/api'
import ChallengeCard from '@/components/ChallengeCard'
import List from '@/components/List'
import Profile from '@/components/Profile'
import { ChallengeDTO, ResponsePageDTO } from '@/dto'
import {
  DefaultLayout,
  LeftPanel,
  RightPanel
} from '@/modules/layouts/DefaultLayout'

// import { Container } from './styles';

export const getServerSideProps: GetServerSideProps = async context => {
  const { req, query } = context
  const { id } = query

  const url =
    process.env.NODE_ENV === 'production'
      ? 'https://'
      : 'http://' + req.headers.host
  let challenges: ChallengeDTO[] = []
  const api = nextBackendApi(url)
  try {
    const { data } = await api.get<ResponsePageDTO<ChallengeDTO>>(
      `/category/${id}/challenge`,
      {
        headers: req.headers
      }
    )
    challenges = data.data || []
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      challenges
    }
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
