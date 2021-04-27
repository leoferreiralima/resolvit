import { createGlobalStyle } from 'styled-components'

import * as Bootstrap from './bootstrap'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif
  }

  body {
    background-color: #f1f1f0;
    color: #333;
    font-size: 16px;
  }

  html, body,#__next {
    height: 100vh;
    width: 100vw;
  }

  h1{
    font-size: 2.5rem
  }

  h2{
    font-size: 2rem
  }

  h3{
    font-size: 1.5rem
  }

  #__next{
    ${Object.values(Bootstrap)}
  }

`
