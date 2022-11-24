import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './style';

interface OrderBoardProps {
  icon: string,
  title: string,
  orders: Order[],
}

export function OrderBoard({ icon, title, orders }: OrderBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  return(
    <Board>
      <OrderModal visible={isModalVisible} />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>


      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type='button' key={order._id} onClick={handleOpenModal}>
              <strong>{order.table}</strong>
              <span>{order.products.length}</span>
            </button>
          ))}
        </OrdersContainer>
      )}



    </Board>
  );
}
