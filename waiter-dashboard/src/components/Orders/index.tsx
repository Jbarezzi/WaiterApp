import { Board, Container, OrdersContainer } from './style';

export function Orders() {
  return(
    <Container>
      <Board>
        <header>
          <span>🕑</span>
          <strong>Fila de Espera</strong>
          <span>(1)</span>
        </header>

        <OrdersContainer>
          <button type='button'>
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </OrdersContainer>
      </Board>
    </Container>
  );
}
