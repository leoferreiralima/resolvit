import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/styles/global'
import { light } from '@/styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
