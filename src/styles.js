import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
  }
  html, body, input, button {
    margin:0;
    padding:0;
  }
`

export default GlobalStyle