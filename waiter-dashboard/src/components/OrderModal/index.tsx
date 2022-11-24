import { Modal, Overlay } from './style';

import closeIcon from '../../assets/images/close-icon.svg';

interface OrderModalProps {
  visible: boolean
}

export function OrderModal({ visible }: OrderModalProps) {
  if(!visible) {
    return null;
  }

  return (
    <Overlay>
      <Modal>
        <header>
          <strong>Mesa 2</strong>

          <button type='button'>
            <img src={closeIcon} alt="Ícone para fechar" />
          </button>
        </header>
      </Modal>
    </Overlay>
  );
}
