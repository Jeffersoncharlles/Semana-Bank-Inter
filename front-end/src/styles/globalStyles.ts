import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
}

body{
    background:${({ theme }) => theme.colors.background} ;
    -webkit-font-smoothing: antialiased;//detalhes de font webkit
}

body, input, textarea, button { 
        font-family: 'Roboto', sans-serif;
    }

html {
        //padrao 16px
        @media (max-width: 1080px){
            //16*0.975 = 15px
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
        //rem = 1 rem = font-size = page
    }

    

h1,h2,h3,h4,h5,h6,strong {
        font-weight: 500;
}

button {
        cursor: pointer;
    }

textarea:focus, input:focus{
    outline: none;
}


`

export { GlobalStyle }