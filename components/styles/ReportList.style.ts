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

export const ListTagBox = styled.div``;

export const Tag = styled.div`
  width: fit-content;
  padding: 0.25rem 0.5rem;
  line-height: 1rem;
  font-size: var(--font-x-small);
  font-weight: var(--font-bold);
  color: var(--color-white);
  background-color: var(--color-dark-gray);
  border-radius: var(--border-rounded);
`;
