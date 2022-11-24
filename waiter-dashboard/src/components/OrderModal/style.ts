import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background-color: #fff;
  width: 480px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      border: 0;
      background-color: transparent;
      line-height: 0;
    }
  }


`;
