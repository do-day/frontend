import styled from '@emotion/styled';

export const Nav = styled.div`
  width: 40vw;
  min-width: 16rem;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem;
  background-color: var(--color-white);
`;

export const MainBox = styled.div`
  padding: 0.5rem;
  font-size: var(--font-large);
  font-weight: var(--font-bold);
  line-height: 2rem;
`;

export const SubMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;
  padding-left: 1rem;
  font-weight: normal;
`;

export const SubMenuNameBox = styled.div`
  padding: 0.5rem;
`;

export const LogOutButton = styled.button`
  position: absolute;
  right: 1.5rem;
  bottom: 1rem;
  color: var(--color-dark-gray);
  text-decoration: underline;
  background-color: transparent;
`;
