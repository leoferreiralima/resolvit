import { GetServerSideProps } from 'next'
import { Tab, Tabs } from 'react-bootstrap'

import { nextBackendApi } from '@/api'
import { ChallengeDetailDTO } from '@/dto'
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

  const api = nextBackendApi(url)
  try {
    const { data } = await api.get<ChallengeDetailDTO>(`/challenge/${id}`, {
      headers: req.headers
    })

    challenge = data
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      challenge,
      tab: tab || 'challenge'
    }
  }
}
interface CategoryProps {
  challenge: ChallengeDetailDTO
  tab?: string
}

const Challenge: React.FC<CategoryProps> = ({
  challenge,
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
              <p>Profile</p>
            </Tab>
            <Tab eventKey="solutions" title="All Solutions">
              <p>Contact</p>
            </Tab>
          </Tabs>
        </Container>
      </LeftPanel>
    </DefaultLayout>
  )
}

export default Challenge
