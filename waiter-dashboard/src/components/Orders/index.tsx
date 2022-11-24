import { OrderBoard } from '../OrderBoard';
import { Container } from './style';

export function Orders() {
  return(
    <Container>
      <OrderBoard
        icon='🕑'
        title='Fila de espera'
      />
      <OrderBoard
        icon='🧑‍🍳'
        title='Em preparação'
      />
      <OrderBoard
        icon='✅'
        title='Pronto!'
      />
    </Container>
  );
}
