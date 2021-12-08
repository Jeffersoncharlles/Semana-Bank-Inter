import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
}

body{
    background-color:${({ theme }) => theme.colors.background} ;
}

`

export { GlobalStyle }