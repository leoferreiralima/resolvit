import 'bootstrap/dist/css/bootstrap.min.css'

import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'

import { ThemeProvider } from 'styled-components'

import { light } from '../styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
