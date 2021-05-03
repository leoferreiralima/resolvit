import { GetServerSideProps } from 'next'

import { nextBackendApi } from '@/api'
import FeedbackCard from '@/components/FeedbackCard'
import List from '@/components/List'
import { ChallengeResolutionDTO, FeedbackDTO, ResponsePageDTO } from '@/dto'
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
  let feedbacks: FeedbackDTO[] = []
  let resolution: ChallengeResolutionDTO
  const api = nextBackendApi(url)
  try {
    const { data: feedbacksPage } = await api.get<ResponsePageDTO<FeedbackDTO>>(
      `/resolution/${id}/feedback`,
      {
        headers: req.headers
      }
    )
    feedbacks = feedbacksPage.data || []

    const { data: resolutionData } = await api.get<ChallengeResolutionDTO>(
      `/resolution/${id}`,
      {
        headers: req.headers
      }
    )

    resolution = resolutionData
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      feedbacks,
      resolution
    }
  }
}

interface CategoryProps {
  feedbacks: FeedbackDTO[]
  resolution: ChallengeResolutionDTO
}

const Category: React.FC<CategoryProps> = ({ feedbacks }) => {
  console.log(feedbacks)
  return (
    <DefaultLayout>
      <LeftPanel>
        <List title="See the feedbacks">
          {feedbacks?.map((feedback, index) => (
            <FeedbackCard key={index} feedback={feedback} />
          ))}
        </List>
      </LeftPanel>
    </DefaultLayout>
  )
}

export default Category
