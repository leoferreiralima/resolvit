import { createGlobalStyle } from 'styled-components'

import * as BootstrapOverrides from './bootstrap'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif
  }

  body {
    background-color: ${({ theme }) => theme.colors['white.300']};
    color:  ${({ theme }) => theme.colors['black.100']};
    font-size: 16px;
  }

  html, body,#__next {
    height: 100vh;
    width: 100vw;
  }

  #__next{
    a {
      text-decoration: none;
    }

    ${Object.values(BootstrapOverrides)}
  }

`
