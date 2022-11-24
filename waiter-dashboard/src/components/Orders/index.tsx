import { OrderBoard } from '../OrderBoard';
import { Container } from './style';

export function Orders() {
  return(
    <Container>
      <OrderBoard
        icon='🕑'
        title='Fila de espera'
        orders={[]}
      />
      <OrderBoard
        icon='🧑‍🍳'
        title='Em preparação'
        orders={[]}
      />
      <OrderBoard
        icon='✅'
        title='Pronto!'
        orders={[]}
      />
    </Container>
  );
}
