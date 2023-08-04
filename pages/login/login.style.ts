import styled from '@emotion/styled';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`;

export const LogoWrapper = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  padding: 1rem 2rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const AdminLoginButton = styled.button`
  color: var(--color-gray);
  background-color: transparent;
  text-decoration: underline;
  margin-top: 1rem;
`;

export const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginTitleBox = styled.div`
  color: var(--color-dark-gray);
  margin-right: auto;
`;

export const ButtonBox = styled.div`
  margin-top: 3rem;
`;
