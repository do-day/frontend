import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  text-align: left;
  color: var(--color-dark-gray);
  margin-bottom: 1rem;
`;

export const Label = styled.label``;

export const Input = styled.input<{
  style?: React.CSSProperties;
}>`
  width: 100%;
  height: 3rem;
  margin-top: 0.25rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: between;
  align-items: center;
  color: var(--color-black);
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  border: none;
`;
