import styled from '@emotion/styled';

export const ListBox = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
`;

export const RightBox = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ListTitle = styled.h2``;

export const ListDate = styled.p`
  font-size: var(--font-small);
  color: var(--color-dark-gray);
`;
