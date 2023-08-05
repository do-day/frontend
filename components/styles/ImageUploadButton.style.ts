import styled from '@emotion/styled';

export const Button = styled.button<{ size: string }>`
  width: ${(props) => props.size};
  height: 50vw;
  max-height: 10.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  background-color: var(--color-light-gray);
  cursor: pointer;
  font-size: 2rem;
  color: var(--color-dark-gray);
`;
