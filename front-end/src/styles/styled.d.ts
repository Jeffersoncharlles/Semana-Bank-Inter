import 'styled-components';
import theme from './theme';
//acessar o modulo do styled-components
declare module 'styled-components' {
    //sobrescrever 
    // do dando o nome de ThemeType e 
    //o typeof ta copiando o theme
    type ThemeType = typeof theme


    //exportando a interface default e entendendo ela para ThemeType
    export interface DefaultTheme extends ThemeType { }
}