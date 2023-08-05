import styled from '@emotion/styled';

export const TopBox = styled.div`
  text-align: center;
  font-size: var(--font-small);
  color: var(--color-dark-gray);
  margin: 1.5rem 0;
`;

export const MoneyBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

export const MoneyInput = styled.input`
  text-align: center;
  border: none;
  border-bottom: 3px solid #bedbec;
  font-size: var(--font-x-large);
  padding: 0.5rem 0;
`;

export const ButtonBox = styled.div`
  text-align: center;
`;

export const ChangeAllBtn = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-main);
  border-radius: var(--border-radius);
  color: var(--color-main);
  font-size: var(--font-small);
  font-weight: var(--font-bold);
  line-height: 1;
  margin-bottom: 3rem;
`;
