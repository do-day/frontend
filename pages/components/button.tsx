import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  type: 'button' | 'submit';
  primary?: boolean;
}

export default function Button({ children, type, primary = true }: Props) {
  return (
    <StyledButton primary={primary} type={type}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ primary: boolean }>`
  width: 100%;
  height: 3rem;
  color: var(--color-white);
  background-color: ${(props) =>
    props.primary ? 'var(--color-main)' : 'var(--color-gray)'};
  border-radius: var(--border-radius);
`;
