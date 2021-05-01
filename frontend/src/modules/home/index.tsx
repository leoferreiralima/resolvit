// import { Container } from './styles';

import {
  DefaultLayout,
  LeftPanel,
  RightPanel
} from '@/modules/layouts/DefaultLayout'

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <LeftPanel>Left</LeftPanel>
      <RightPanel>Right</RightPanel>
    </DefaultLayout>
  )
}

export default Home
