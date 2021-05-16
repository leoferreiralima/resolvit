import { GetServerSideProps } from 'next'
import { Tab, Tabs } from 'react-bootstrap'

import { nextBackendApi } from '@/api'
import List from '@/components/List'
import ResolutionCard from '@/components/ResolutionCard'
import {
  ChallengeDetailDTO,
  ChallengeResolutionDTO,
  ResponsePageDTO
} from '@/dto'
import { DefaultLayout, LeftPanel } from '@/modules/layouts/DefaultLayout'

import ChallengeDetail from './ChallengeDetail'
import { Container } from './styles'

export const getServerSideProps: GetServerSideProps = async context => {
  const { req, query } = context
  const { data } = query

  const [id, tab] = data as string[]

  const url =
    process.env.NODE_ENV === 'production'
      ? 'https://'
      : 'http://' + req.headers.host

  let challenge: ChallengeDetailDTO = null
  let resolutions: ChallengeResolutionDTO[] = []
  let myResolutions: ChallengeResolutionDTO[] = []

  const api = nextBackendApi(url)
  const axiosConfig = {
    headers: req.headers
  }

  try {
    const { data: challengeData } = await api.get<ChallengeDetailDTO>(
      `/challenge/${id}`,
      axiosConfig
    )

    challenge = challengeData
    const { data: resolutionsPage } = await api.get<
      ResponsePageDTO<ChallengeResolutionDTO>
    >(`/challenge/${id}/resolution`, axiosConfig)

    resolutions = resolutionsPage.data

    const { data: myResolutionsPage } = await api.get<
      ResponsePageDTO<ChallengeResolutionDTO>
    >(`/challenge/${id}/resolution`, {
      params: {
        my: true
      },
      ...axiosConfig
    })

    myResolutions = myResolutionsPage.data
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      challenge,
      resolutions,
      myResolutions,
      tab: tab || 'challenge'
    }
  }
}
interface CategoryProps {
  challenge: ChallengeDetailDTO
  resolutions: ChallengeResolutionDTO[]
  myResolutions: ChallengeResolutionDTO[]
  tab?: string
}

const Challenge: React.FC<CategoryProps> = ({
  challenge,
  resolutions,
  myResolutions,
  tab = 'challenge'
}) => {
  return (
    <DefaultLayout>
      <LeftPanel>
        <Container>
          <Tabs defaultActiveKey={tab} id="uncontrolled-tab-example">
            <Tab eventKey="challenge" title="Challenge">
              <ChallengeDetail challenge={challenge} />
            </Tab>
            <Tab eventKey="my-solutions" title="My Solutions">
              <List>
                {myResolutions?.map((resolution, index) => (
                  <ResolutionCard key={index} resolution={resolution} />
                ))}
              </List>
            </Tab>
            <Tab eventKey="solutions" title="All Solutions">
              <List>
                {resolutions?.map((resolution, index) => (
                  <ResolutionCard key={index} resolution={resolution} />
                ))}
              </List>
            </Tab>
          </Tabs>
        </Container>
      </LeftPanel>
    </DefaultLayout>
  )
}

export default Challenge
