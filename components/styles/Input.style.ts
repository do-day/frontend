import styled from '@emotion/styled';

export const Input = styled.input<{
  style?: React.CSSProperties;
}>`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: between;
  align-items: center;
  font-weight: var(--font-bold);
  color: var(--color-black);
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  border: none;
  margin-bottom: 1rem;
`;

export const ChildrenWrapper = styled.div`
  flex: 1 1 0%;
  line-height: 3rem;
`;
