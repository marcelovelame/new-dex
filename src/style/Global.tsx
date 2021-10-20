import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(151,23,167,0.9051995798319328) 22%, rgba(151,20,150,1) 56%, rgba(128,0,255,0.9780287114845938) 93%);
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
