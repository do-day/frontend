import styled from '@emotion/styled';

export const Modal = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 36rem;
  background-color: var(--color-white);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  z-index: 11;
`;

export const CloseBar = styled.div`
  width: 2rem;
  height: 0.25rem;
  margin: 1rem auto;
  background-color: var(--color-light-gray);
  border-radius: 0.125rem;
`;
