import styled from '@emotion/styled';

export const ToastBox = styled.div<{
  isFading: boolean;
}>`
  width: 100%;
  height: 3rem;
  position: fixed;
  bottom: 11%;

  transition: transform 0.6s ease-in-out;
  animation: toast-in-right 0.6s;
  transition: 0.3s ease;

  opacity: ${(props) => (props.isFading ? 0 : '')};
  transform: ${(props) => (props.isFading ? 'opacity 1s' : '')};
`;

export const FlexBox = styled.div`
  width: fit-content;
  height: 90%;
  display: flex;
  align-items: center;
  margin: auto;
  padding: 1rem;
  background-color: var(--color-toast);
  border-radius: var(--border-rounded);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
`;

export const Ment = styled.div`
  color: var(--color-white);
  font-size: var(--font-small);
`;
