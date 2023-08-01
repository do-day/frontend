import styled from '@emotion/styled';

export const TabBox = styled.div`
  display: flex;
  margin: 0.1rem auto 1rem;
  width: 19rem;
`;

export const Tab = styled.div<{ active: boolean }>`
  width: 9rem;
  display: flex;
  justify-content: center;
  border-bottom: ${(props) => props.active && '4px solid var(--color-sub)'};
  color: ${(props) =>
    props.active ? 'var(--color-main)' : 'var(--color-dark-gray)'};
  font-weight: ${(props) => props.active && 'var(--font-bold)'};
  height: 2rem;
`;
