import { Button } from '../components/Button';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from './style';

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer></MenuContainer>

      </Container>
      <Footer>
        <FooterContainer>
          <Button onPress={() => null}>
            Novo Pedido
          </Button>
        </FooterContainer>
      </Footer>
    </>
  );
}