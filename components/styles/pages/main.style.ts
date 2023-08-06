import styled from '@emotion/styled';

export const TopTitle = styled.h1`
  font-size: var(--font-large);
  font-weight: var(--font-bold);
  margin-bottom: 0.5rem;
`;

export const TopDescription = styled.p`
  font-size: var(--font-small);
  color: var(--color-dark-gray);
  padding-bottom: 1.5rem;
`;

export const SearchBox = styled.form`
  width: 100%;
  margin: 1.25rem 0;
  display: flex;
`;

export const SearchInput = styled.input`
  flex: 1 1 0%;
  width: 100%;
  padding: 0.5rem;
  padding-left: 1rem;
  background-color: var(--color-light-gray);
  border-top-left-radius: var(--border-rounded);
  border-bottom-left-radius: var(--border-rounded);
  border: none;
`;

export const SearchIconBtn = styled.button`
  width: 3rem;
  background-color: white;
  border: 1px solid var(--color-light-gray);
  border-top-right-radius: var(--border-rounded);
  border-bottom-right-radius: var(--border-rounded);
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-dark-gray);
`;

export const WriteButtonBox = styled.div`
  width: 100%;
  max-width: 36rem;
  position: fixed;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: var(--color-white);
`;

export const WriteButton = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem 0.5rem 0.75rem;
  background-color: var(--color-main);
  border-radius: var(--border-rounded);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.15);
  line-height: 1.5rem;
`;

export const WriteIcon = styled.div`
  display: flex;
  padding-right: 0.5rem;
  & > svg {
    font-size: 1.25rem;
  }
`;

export const WriteTxt = styled.div`
  font-weight: var(--font-bold);
`;
