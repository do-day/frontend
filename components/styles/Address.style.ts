import styled from '@emotion/styled';

export const CopyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: var(--color-dark-gray);
  background-color: transparent;

  & > svg {
    margin-left: 0.25rem;
    margin-top: 0.5rem;
  }
`;

export const Address = styled.p`
  height: 1rem;
  color: var(--color-dark-gray);
  font-size: var(--font-small);
  text-align: center;
  margin-top: 0.5rem;
`;
