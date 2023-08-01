import styled from '@emotion/styled';

export const Header = styled.header`
  max-width: 36rem;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: var(--font-large);
  background-color: var(--color-white);
  z-index: 5;
`;

export const BackButton = styled.button`
  width: 2rem;
  height: 2rem;
  position: absolute;
  border: none;
  background: none;
  & > svg {
    font-size: 2rem;
  }
`;

export const Title = styled.h1`
  flex: 1 1 0%;
  text-align: center;
  font-weight: var(--font-semibold);
  line-height: 1.75;
`;
