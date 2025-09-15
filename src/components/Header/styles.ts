import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav{
    display: flex;
    gap: 0.5rem;

   a {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center ;
      color: ${props => props.theme["gray-100"]};

      border-top: 3px solid transparent; //Fixo apenas para manter o ícone centralizado ao exibir a borda debaixo.
      border-bottom: 3px solid transparent; //Fixo para quando add a borda com o hover não mover os elementos na tela.

      &:hover {
        border-bottom: 3px solid ${props => props.theme["green-500"]};
      }

      &.active {
        color: ${props => props.theme["green-500"]}
      }
    }
  }  
`