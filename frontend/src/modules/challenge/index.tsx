import { GetStaticPaths, GetStaticProps } from 'next'
import { Tab, Tabs } from 'react-bootstrap'

import { ChallengeDetailDTO, Difficulty } from '@/dto'
import { DefaultLayout, LeftPanel } from '@/modules/layouts/DefaultLayout'

import ChallengeDetail from './ChallengeDetail'
import { Container } from './styles'

export const getStaticProps: GetStaticProps = async () => {
  const challenge: ChallengeDetailDTO = {
    id: 'tyteyteyt',
    name: 'Rest api',
    difficulty: Difficulty.HARD,
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Cevadis im ampola pa arma uma pindureta. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Quem num gosta di mim que vai caçá sua turmis! Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Detraxit consequat et quo num tendi nada. Paisis, filhis, espiritis santis. ',
    categories: [],
    helps: new Array(4).fill('https://mussumipsum.com/')
  }

  return {
    props: {
      challenge
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
  challenge: ChallengeDetailDTO
}

const Challenge: React.FC<CategoryProps> = ({ challenge }) => {
  return (
    <DefaultLayout>
      <LeftPanel>
        <Container>
          <Tabs defaultActiveKey="challenge" id="uncontrolled-tab-example">
            <Tab eventKey="challenge" title="Challenge">
              <ChallengeDetail challenge={challenge} />
            </Tab>
            <Tab eventKey="my-solutions" title="My Solutions">
              <p>Profile</p>
            </Tab>
            <Tab eventKey="all-solutions" title="All Solutions">
              <p>Contact</p>
            </Tab>
          </Tabs>
        </Container>
      </LeftPanel>
    </DefaultLayout>
  )
}

export default Challenge
