import styled from '@emotion/styled';

export const Button = styled.button<{
  style?: React.CSSProperties;
  primary: boolean;
  secondary: boolean;
  rounded: boolean;
  fitContent: boolean;
}>`
  width: ${(props) => (props.fitContent ? 'fit-content' : '100%')};
  height: 3rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: between;
  align-items: center;
  font-weight: var(--font-bold);
  color: var(--color-white);
  background-color: ${(props) =>
    props.secondary ? 'var(--color-gray)' : 'var(--color-main)'};
  border-radius: ${(props) =>
    props.rounded ? 'var(--border-rounded)' : 'var(--border-radius)'};

  ${(props) => props.style && String(props.style)}
`;

export const ChildrenWrapper = styled.div`
  flex: 1 1 0%;
  line-height: 3rem;
`;
