import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

/*
* cria(sobrescreve, na verdade) tipagem para o módulo Styled-components para tornar-lo acessível em outros arquivos
* retira o aviso de erro "Property 'primary' does not exist on type 'DefaultTheme'" no background do botão no arquivo Button.styles
*/ 
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}