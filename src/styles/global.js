import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body, #root {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 5%;
    background-color: #abd3e8;
  } 
`