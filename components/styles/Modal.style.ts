import styled from '@emotion/styled';
import { Backdrop } from './Backdrop.style';

export const Modal = styled(Backdrop)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  padding: 1.25rem;
`;

export const ModalText = styled.h1`
  font-size: var(--font-x-large);
  font-weight: var(--font-bold);
  padding: 1rem;
`;

export const ModalButtonBox = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
`;
