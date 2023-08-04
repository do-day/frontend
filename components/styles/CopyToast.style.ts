import styled from '@emotion/styled';

export const ToastBox = styled.div<{
  style?: React.CSSProperties;
  rounded: boolean;
  fitContent: boolean;
  isFading: boolean;
}>`
  width: ${(props) => (props.fitContent ? 'fit-content' : '90%')};
  height: 3rem;
  padding: 0.5rem 1rem;
  position: fixed;
  margin: auto;
  display: flex;
  align-items: center;
  top: 80%;
  color: var(--color-black);
  font-size: var(--font-small);
  background-color: var(--color-copy-gray);
  border-radius: ${(props) =>
    props.rounded ? 'var(--border-rounded)' : 'var(--border-radius)'};
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));

  transition: transform 0.6s ease-in-out;
  animation: toast-in-right 0.6s;
  transition: 0.3s ease;

  opacity: ${(props) => (props.isFading ? 0 : '')};
  transform: ${(props) => (props.isFading ? 'opacity 1s' : '')};
`;

export const Ment = styled.div``;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
`;
