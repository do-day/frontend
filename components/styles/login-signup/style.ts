import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 2rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 0.5rem;
`;

export const SignupBox = styled.div`
  width: 100%;
  text-align: center;
  color: var(--color-dark-gray);
  text-decoration: underline;
`;

export const AdminLoginBox = styled.div`
  width: 100%;
  text-align: center;
`;

export const AdminLoginButton = styled.button`
  color: var(--color-gray);
  background-color: transparent;
  text-decoration: underline;
`;
