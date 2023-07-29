import { createPortal } from 'react-dom';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export default function ModalBottom({ children, onClose }: Props) {
  return (
    <>
      {createPortal(
        <BackDrop onClick={onClose} />,
        document.getElementById('modal-root') as HTMLElement,
      )}
      {createPortal(
        <Modal>
          <CloseBar onClick={onClose} />
          {children}
        </Modal>,
        document.getElementById('modal-root') as HTMLElement,
      )}
    </>
  );
}

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

const Modal = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 36rem;
  background-color: var(--color-white);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  z-index: 11;
`;

const CloseBar = styled.div`
  width: 2rem;
  height: 0.25rem;
  margin: 1rem auto;
  background-color: var(--color-light-gray);
  border-radius: 0.125rem;
`;
