import { Actions, Modal, OrderDetails, Overlay } from './style';

import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formateCurrency } from '../../utils/formatCurrency';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {

  if(!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  function RenderIcons() {
    const status = order?.status || '';
    const icons = {
      'WAITING': '🕑',
      'IN_PRODUCTION': '🧑‍🍳',
      'DONE': '✅',
      '': ''
    };

    return (
      <span>
        {icons[status]}
      </span>
    );
  }

  function RenderTitle() {
    const status = order?.status || '';
    const titles = {
      'WAITING': 'Fila de espera',
      'IN_PRODUCTION': 'Em preparação',
      'DONE': 'Pronto!',
      '': ''
    };

    return (
      <strong>
        {titles[status]}
      </strong>
    );
  }

  return (
    <Overlay>
      <Modal>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type='button' onClick={onClose}>
            <img src={closeIcon} alt="Ícone para fechar" />
          </button>
        </header>

        <div className='status-container'>
          <small>Status do Pedido</small>
          <div>
            <RenderIcons />
            <RenderTitle />
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({_id, product, quantity}) => (
              <div className='item' key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width='56'
                  height='28.51'
                />

                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formateCurrency(total)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>

          </div>
        </OrderDetails>

        <Actions>
          <button type='button' className='primary'>🧑‍🍳</button>
          <button type='button' className='secondary'>Cancelar Pedido</button>
        </Actions>

      </Modal>
    </Overlay>
  );
}
