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
  text-align: left;
  font-size: var(--font-large);
  font-weight: var(--font-bold);
  padding-bottom: 1rem;
`;

export const ModalContent = styled.textarea`
  width: 18rem;
  background-color: var(--color-light-gray);
  border: none;
  border-radius: var(--border-radius);
  padding: 1rem;
  resize: none;
`;

export const ModalButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;
