// componente criado para posicionar um header fixo em todas as páginas e evitar que o header fique sendo renderizado novamente em cada pág.
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet /> {/*Componente do react-router-dom para informar onde vai posicionar o conteúdo da página.*/}
    </LayoutContainer>
  )
}