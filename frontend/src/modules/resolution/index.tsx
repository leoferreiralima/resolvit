import { GetServerSideProps } from 'next'
import { useCallback } from 'react'

import { nextBackendApi } from '@/api'
import FeedbackCard from '@/components/FeedbackCard'
import List from '@/components/List'
import {
  ChallengeResolutionDTO,
  FeedbackDTO,
  ResponsePageDTO,
  SendFeedbackDTO
} from '@/dto'
import usePostApi from '@/hooks/useApi'
import useSWRApi from '@/hooks/useSWRApi'
import {
  DefaultLayout,
  LeftPanel,
  RightPanel
} from '@/modules/layouts/DefaultLayout'

import CommentInput from './CommentInput'
import { SendCommentContainer } from './styles'

export const getServerSideProps: GetServerSideProps = async context => {
  const { req, query } = context
  const { id } = query

  const url =
    process.env.NODE_ENV === 'production'
      ? 'https://'
      : 'http://' + req.headers.host
  let feedbackPage: ResponsePageDTO<FeedbackDTO>
  let resolution: ChallengeResolutionDTO
  const api = nextBackendApi(url)
  try {
    const { data: feedbacksPage } = await api.get<ResponsePageDTO<FeedbackDTO>>(
      `/resolution/${id}/feedback`,
      {
        headers: req.headers
      }
    )

    feedbackPage = feedbacksPage

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
      feedbackPage,
      resolution
    }
  }
}

interface CategoryProps {
  feedbackPage: ResponsePageDTO<FeedbackDTO>
  resolution: ChallengeResolutionDTO
}

const Category: React.FC<CategoryProps> = ({ feedbackPage, resolution }) => {
  const { id } = resolution
  const { data: feedbackResponse, mutate } = useSWRApi<
    ResponsePageDTO<FeedbackDTO>
  >(`/resolution/${id}/feedback`, feedbackPage)

  const sendData = usePostApi<SendFeedbackDTO>(`/resolution/${id}/feedback`)

  const sendFeedback = useCallback(
    (message: string) => {
      async function submit(message: string) {
        await sendData({
          message
        })

        mutate()
      }

      submit(message)
    },
    [mutate]
  )
  return (
    <DefaultLayout>
      <LeftPanel>
        <List title="See the feedbacks">
          {feedbackResponse.data?.map((feedback, index) => (
            <FeedbackCard key={index} feedback={feedback} />
          ))}
        </List>
      </LeftPanel>
      <RightPanel>
        <SendCommentContainer>
          <CommentInput onSubmit={sendFeedback} />
        </SendCommentContainer>
      </RightPanel>
    </DefaultLayout>
  )
}

export default Category
