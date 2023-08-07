import styled from '@emotion/styled';
import { Backdrop } from '@/components/styles/Backdrop.style';

export const Modal = styled(Backdrop)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 34rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  padding: 1.25rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  font-size: var(--font-large);
`;

export const Title = styled.h1`
  text-align: left;
  font-weight: var(--font-bold);
`;

export const CloseButton = styled.button`
  background: none;
`;
